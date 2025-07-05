import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {confirm, input, password, select} from '@inquirer/prompts';
import chalk from 'chalk';
import {
  DEFAULT_LANGUAGE,
  DEFAULT_MAX_TOKENS,
  DEFAULT_PROFILE,
  DEFAULT_TEMPERATURE,
} from '../shared/constants.js';
import {spinnerManager} from '../shared/spinner.js';
import type {
  AnthropicSettings,
  AzureSettings,
  BedrockSettings,
  ConfigureOptions,
  GoogleSettings,
  OpenAISettings,
  QwenSettings,
  RawiConfig,
  RawiCredentials,
  SupportedLanguage,
  SupportedProvider,
  XAISettings,
} from '../shared/types.js';
import {
  getConfigDir,
  getCredentialsFilePath,
  maskApiKey,
  validateApiKey,
  validateMaxTokens,
  validateTemperature,
} from '../shared/utils.js';
import {getAllProviders, getProvider} from './providers/index.js';

export class ConfigManager {
  private readonly configDir: string;
  private readonly configFile: string;

  constructor() {
    this.configDir = getConfigDir();
    this.configFile = getCredentialsFilePath();
  }

  private ensureConfigDir(): void {
    if (!existsSync(this.configDir)) {
      try {
        mkdirSync(this.configDir, {recursive: true});
      } catch (error) {
        throw new Error(
          `Failed to create config directory: ${
            error instanceof Error ? error.message : String(error)
          }`,
        );
      }
    }
  }

  private readConfig(): RawiConfig {
    if (!existsSync(this.configFile)) {
      return {};
    }

    try {
      const content = readFileSync(this.configFile, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      throw new Error(
        `Failed to read config file: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  private writeConfig(config: RawiConfig): void {
    this.ensureConfigDir();

    try {
      const content = JSON.stringify(config, null, 2);
      writeFileSync(this.configFile, content, 'utf-8');
    } catch (error) {
      throw new Error(
        `Failed to write config file: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  getCredentials(profile = DEFAULT_PROFILE): RawiCredentials | null {
    try {
      const config = this.readConfig();
      return config[profile] || null;
    } catch (error) {
      console.error(chalk.red(`Error reading credentials: ${error}`));
      return null;
    }
  }

  setCredentials(
    credentials: RawiCredentials,
    profile = DEFAULT_PROFILE,
  ): void {
    const config = this.readConfig();
    config[profile] = credentials;
    this.writeConfig(config);
  }

  listProfiles(): string[] {
    try {
      const config = this.readConfig();
      return Object.keys(config);
    } catch {
      return [];
    }
  }

  deleteProfile(profile: string): boolean {
    try {
      const config = this.readConfig();
      if (!(profile in config)) {
        return false;
      }

      delete config[profile];
      this.writeConfig(config);
      return true;
    } catch (error) {
      console.error(chalk.red(`Error deleting profile: ${error}`));
      return false;
    }
  }

  async interactiveConfigure(options: ConfigureOptions = {}): Promise<void> {
    console.log(chalk.bold.blue('\n🔧 Configuring Rawi'));
    console.log(chalk.gray('Please provide your AI service configuration:\n'));

    try {
      const profile = await this.getProfile(options.profile);

      spinnerManager.start('config-load', 'Loading existing configuration...');
      const existingCredentials = this.getCredentials(profile);

      if (existingCredentials) {
        spinnerManager.succeed(
          'config-load',
          `Found existing configuration for profile '${profile}'`,
        );
      } else {
        spinnerManager.succeed(
          'config-load',
          'Creating new configuration profile',
        );
      }

      try {
        const provider = await this.selectProvider(
          options.provider || existingCredentials?.provider,
        );
        const model = await this.selectModel(
          provider,
          options.model || existingCredentials?.model,
        );

        const credentials: RawiCredentials = {
          provider,
          model,
          temperature: await this.getTemperature(
            options.temperature ??
              existingCredentials?.temperature ??
              DEFAULT_TEMPERATURE,
          ),
          maxTokens: await this.getMaxTokens(
            options.maxTokens ??
              existingCredentials?.maxTokens ??
              DEFAULT_MAX_TOKENS,
          ),
          language: await this.getLanguage(
            options.language ??
              existingCredentials?.language ??
              DEFAULT_LANGUAGE,
          ),
        };

        if (provider === 'ollama') {
          const baseURL = await this.getBaseURL(
            options.baseURL ||
              (existingCredentials?.providerSettings &&
              'baseURL' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.baseURL
                : undefined),
          );

          if (baseURL) {
            credentials.providerSettings = {
              baseURL,
            };
          }
        } else if (provider === 'azure') {
          const resourceName = await this.getResourceName(
            options.resourceName ||
              (existingCredentials?.providerSettings &&
              'resourceName' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.resourceName
                : undefined),
          );

          if (resourceName) {
            credentials.providerSettings = {
              resourceName,
            };
          }

          const apiVersion = await this.getApiVersion(
            options.apiVersion ||
              (existingCredentials?.providerSettings &&
              'apiVersion' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.apiVersion
                : undefined),
          );

          if (apiVersion) {
            credentials.providerSettings = {
              ...(credentials.providerSettings as AzureSettings),
              apiVersion,
            };
          }
        } else if (provider === 'bedrock') {
          const useProviderChain = await this.getUseProviderChain(
            options.useProviderChain ||
              (existingCredentials?.providerSettings &&
              'useProviderChain' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.useProviderChain
                : undefined),
          );

          const providerSettings: BedrockSettings = {};

          const region = await this.getRegion(
            options.region ||
              (existingCredentials?.providerSettings &&
              'region' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.region
                : undefined),
          );

          if (region) {
            providerSettings.region = region;
          }

          if (useProviderChain) {
            providerSettings.useProviderChain = true;
          } else {
            const accessKeyId = await this.getAccessKeyId(
              options.accessKeyId ||
                (existingCredentials?.providerSettings &&
                'accessKeyId' in existingCredentials.providerSettings
                  ? existingCredentials.providerSettings.accessKeyId
                  : undefined),
            );

            const secretAccessKey = await this.getSecretAccessKey(
              options.secretAccessKey ||
                (existingCredentials?.providerSettings &&
                'secretAccessKey' in existingCredentials.providerSettings
                  ? existingCredentials.providerSettings.secretAccessKey
                  : undefined),
            );

            const sessionToken = await this.getSessionToken(
              options.sessionToken ||
                (existingCredentials?.providerSettings &&
                'sessionToken' in existingCredentials.providerSettings
                  ? existingCredentials.providerSettings.sessionToken
                  : undefined),
            );

            providerSettings.accessKeyId = accessKeyId;
            providerSettings.secretAccessKey = secretAccessKey;
            if (sessionToken) {
              providerSettings.sessionToken = sessionToken;
            }
          }

          if (Object.keys(providerSettings).length > 0) {
            credentials.providerSettings = providerSettings;
          }
        } else if (provider === 'qwen') {
          const existingApiKey =
            existingCredentials?.providerSettings &&
            'apiKey' in existingCredentials.providerSettings
              ? existingCredentials.providerSettings.apiKey
              : existingCredentials?.apiKey;

          const apiKey = await this.getApiKey(
            options.apiKey || existingApiKey,
            provider,
          );

          const baseURL = await this.getQwenBaseURL(
            options.baseURL ||
              (existingCredentials?.providerSettings &&
              'baseURL' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.baseURL
                : undefined),
          );

          const providerSettings: QwenSettings = {
            apiKey: apiKey,
          };
          if (baseURL) {
            providerSettings.baseURL = baseURL;
          }

          credentials.providerSettings = providerSettings;
        } else if (provider === 'xai') {
          const existingApiKey =
            existingCredentials?.providerSettings &&
            'apiKey' in existingCredentials.providerSettings
              ? existingCredentials.providerSettings.apiKey
              : existingCredentials?.apiKey;

          const apiKey = await this.getApiKey(
            options.apiKey || existingApiKey,
            provider,
          );

          const baseURL = await this.getXaiBaseURL(
            options.baseURL ||
              (existingCredentials?.providerSettings &&
              'baseURL' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.baseURL
                : undefined),
          );

          const providerSettings: XAISettings = {
            apiKey: apiKey,
          };
          if (baseURL) {
            providerSettings.baseURL = baseURL;
          }

          credentials.providerSettings = providerSettings;
        } else if (provider === 'openai') {
          const existingApiKey =
            existingCredentials?.providerSettings &&
            'apiKey' in existingCredentials.providerSettings
              ? existingCredentials.providerSettings.apiKey
              : existingCredentials?.apiKey;

          const apiKey = await this.getApiKey(
            options.apiKey || existingApiKey,
            provider,
          );

          const baseURL = await this.getOpenAIBaseURL(
            options.baseURL ||
              (existingCredentials?.providerSettings &&
              'baseURL' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.baseURL
                : undefined),
          );

          const providerSettings: OpenAISettings = {
            apiKey: apiKey,
          };
          if (baseURL) {
            providerSettings.baseURL = baseURL;
          }

          credentials.providerSettings = providerSettings;
        } else if (provider === 'anthropic') {
          const existingApiKey =
            existingCredentials?.providerSettings &&
            'apiKey' in existingCredentials.providerSettings
              ? existingCredentials.providerSettings.apiKey
              : existingCredentials?.apiKey;

          const apiKey = await this.getApiKey(
            options.apiKey || existingApiKey,
            provider,
          );

          const baseURL = await this.getAnthropicBaseURL(
            options.baseURL ||
              (existingCredentials?.providerSettings &&
              'baseURL' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.baseURL
                : undefined),
          );

          const providerSettings: AnthropicSettings = {
            apiKey: apiKey,
          };
          if (baseURL) {
            providerSettings.baseURL = baseURL;
          }

          credentials.providerSettings = providerSettings;
        } else if (provider === 'google') {
          const existingApiKey =
            existingCredentials?.providerSettings &&
            'apiKey' in existingCredentials.providerSettings
              ? existingCredentials.providerSettings.apiKey
              : existingCredentials?.apiKey;

          const apiKey = await this.getApiKey(
            options.apiKey || existingApiKey,
            provider,
          );

          const baseURL = await this.getGoogleBaseURL(
            options.baseURL ||
              (existingCredentials?.providerSettings &&
              'baseURL' in existingCredentials.providerSettings
                ? existingCredentials.providerSettings.baseURL
                : undefined),
          );

          const providerSettings: GoogleSettings = {
            apiKey: apiKey,
          };
          if (baseURL) {
            providerSettings.baseURL = baseURL;
          }

          credentials.providerSettings = providerSettings;
        } else {
          credentials.apiKey = await this.getApiKey(
            options.apiKey || existingCredentials?.apiKey,
            provider,
          );
        }

        this.setCredentials(credentials, profile);

        spinnerManager.start('config-save', 'Saving configuration...');

        try {
          spinnerManager.succeed(
            'config-save',
            'Configuration saved successfully!',
          );

          console.log(chalk.gray(`Profile: ${profile}`));
          this.displayConfigurationSummary(credentials);
          console.log(chalk.gray(`\nConfig file: ${this.configFile}`));
        } catch (error) {
          spinnerManager.fail('config-save', 'Failed to save configuration');
          throw error;
        }
      } catch (error) {
        if (error instanceof Error && error.name === 'ExitPromptError') {
          console.log(chalk.yellow('\n👋 Configuration cancelled. Exiting...'));
          return;
        }
        throw error;
      }
    } catch (error) {
      if (error === '') {
        console.log(chalk.yellow('\n❌ Configuration cancelled.'));
        return;
      }

      console.error(chalk.red(`\n❌ Configuration failed: ${error}`));
      throw error;
    }
  }

  private async getProfile(profile?: string): Promise<string> {
    if (profile) return profile;

    return input({
      message: 'Profile Name:',
      default: DEFAULT_PROFILE,
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Profile name is required';
        }
        return true;
      },
    });
  }

  private async selectProvider(
    defaultProvider?: SupportedProvider,
  ): Promise<SupportedProvider> {
    const providers = getAllProviders();
    const choices = providers.map((provider) => ({
      name: provider.displayName,
      value: provider.name as SupportedProvider,
    }));

    const selectedProvider = await select<SupportedProvider>({
      message: 'AI Provider:',
      choices,
      default: defaultProvider || 'openai',
    });

    spinnerManager.start(
      'provider-validation',
      `Validating ${selectedProvider} provider configuration...`,
    );

    await new Promise((resolve) => setTimeout(resolve, 500));

    spinnerManager.succeed(
      'provider-validation',
      `${selectedProvider} provider validated`,
    );

    return selectedProvider;
  }

  private async selectModel(
    provider: SupportedProvider,
    defaultModel?: string,
  ): Promise<string> {
    const providerConfig = getProvider(provider);

    if (provider === 'azure') {
      console.log(
        chalk.gray(
          '\nNote: For Azure OpenAI, you need to provide your deployment name.',
        ),
      );
      console.log(
        chalk.gray(
          'This is the name you gave to your deployed model in the Azure OpenAI service.',
        ),
      );

      return input({
        message: 'Azure Deployment Name:',
        default: defaultModel || '',
        validate: (input: string) => {
          if (!input.trim()) {
            return 'Deployment name is required for Azure OpenAI';
          }
          return true;
        },
      });
    }

    const choices = providerConfig.models.map((model) => ({
      name: model.displayName || model.name,
      value: model.name,
    }));

    return select({
      message: 'AI Model:',
      choices,
      default: defaultModel || choices[0]?.value,
    });
  }

  private async getApiKey(
    defaultApiKey?: string,
    provider?: SupportedProvider,
  ): Promise<string> {
    if (provider === 'ollama') {
      return '';
    }

    return input({
      message: 'API Key:',
      default: defaultApiKey || '',
      validate: (input: string) => {
        if (!validateApiKey(input)) {
          return 'API Key is required';
        }
        return true;
      },
    });
  }

  private async getTemperature(defaultTemperature: number): Promise<number> {
    const result = await input({
      message: 'Temperature (0-2):',
      default: defaultTemperature.toString(),
      validate: (input: string) => {
        const value = Number.parseFloat(input);
        if (Number.isNaN(value) || !validateTemperature(value)) {
          return 'Temperature must be a number between 0 and 2';
        }
        return true;
      },
      transformer: (input) => {
        const value = Number.parseFloat(input);
        return Number.isNaN(value) ? input : value.toString();
      },
    });

    return Number.parseFloat(result);
  }

  private async getMaxTokens(defaultMaxTokens: number): Promise<number> {
    const result = await input({
      message: 'Max Tokens:',
      default: defaultMaxTokens.toString(),
      validate: (input: string) => {
        const value = Number.parseInt(input, 10);
        if (Number.isNaN(value) || !validateMaxTokens(value)) {
          return 'Max tokens must be greater than 0';
        }
        return true;
      },
    });

    return Number.parseInt(result, 10);
  }

  private async getLanguage(
    defaultLanguage?: SupportedLanguage,
  ): Promise<SupportedLanguage> {
    return select<SupportedLanguage>({
      message: 'Language:',
      choices: [
        {name: '🇺🇸 English', value: 'english'},
        {name: '🇸🇦 Arabic', value: 'arabic'},
      ],
      default: defaultLanguage || DEFAULT_LANGUAGE,
    });
  }

  private async getBaseURL(
    defaultBaseURL?: string,
  ): Promise<string | undefined> {
    console.log(
      chalk.gray(
        '\nNote: The Base URL is where your Ollama server is running.',
      ),
    );
    console.log(
      chalk.gray(
        'The default is "http://localhost:11434/api" which works for local installations.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for Ollama:',
      default: defaultBaseURL || 'http://localhost:11434/api',
    });

    if (baseURL === 'http://localhost:11434/api') {
      return undefined;
    }

    return baseURL;
  }

  private async getQwenBaseURL(
    defaultBaseURL?: string,
  ): Promise<string | undefined> {
    console.log(chalk.gray('\nNote: The Base URL is the Qwen API endpoint.'));
    console.log(
      chalk.gray(
        'The default is "https://dashscope-intl.aliyuncs.com/compatible-mode/v1" for Alibaba Cloud.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for Qwen:',
      default:
        defaultBaseURL ||
        'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
    });

    if (baseURL === 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1') {
      return undefined;
    }

    return baseURL;
  }

  private async getXaiBaseURL(
    defaultBaseURL?: string,
  ): Promise<string | undefined> {
    console.log(chalk.gray('\nNote: The Base URL is the xAI API endpoint.'));
    console.log(
      chalk.gray('The default is "https://api.x.ai/v1" for xAI services.'),
    );

    const baseURL = await input({
      message: 'Base URL for xAI:',
      default: defaultBaseURL || 'https://api.x.ai/v1',
    });

    if (baseURL === 'https://api.x.ai/v1') {
      return undefined;
    }

    return baseURL;
  }

  private async getAnthropicBaseURL(
    defaultBaseURL?: string,
  ): Promise<string | undefined> {
    console.log(
      chalk.gray('\nNote: The Base URL is the Anthropic API endpoint.'),
    );
    console.log(
      chalk.gray(
        'The default is "https://api.anthropic.com" for Anthropic services.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for Anthropic:',
      default: defaultBaseURL || 'https://api.anthropic.com',
    });

    if (baseURL === 'https://api.anthropic.com') {
      return undefined;
    }

    return baseURL;
  }

  private async getOpenAIBaseURL(
    defaultBaseURL?: string,
  ): Promise<string | undefined> {
    console.log(chalk.gray('\nNote: The Base URL is the OpenAI API endpoint.'));
    console.log(
      chalk.gray(
        'The default is "https://api.openai.com/v1" for OpenAI services.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for OpenAI:',
      default: defaultBaseURL || 'https://api.openai.com/v1',
    });

    if (baseURL === 'https://api.openai.com/v1') {
      return undefined;
    }

    return baseURL;
  }

  private async getResourceName(defaultResourceName?: string): Promise<string> {
    console.log(
      chalk.gray(
        '\nNote: The Resource Name is your Azure OpenAI resource name.',
      ),
    );
    console.log(
      chalk.gray('This is required to connect to Azure OpenAI services.'),
    );

    const resourceName = await input({
      message: 'Azure Resource Name:',
      default: defaultResourceName || '',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Resource Name is required for Azure OpenAI';
        }
        return true;
      },
    });

    return resourceName;
  }

  private async getApiVersion(
    defaultApiVersion?: string,
  ): Promise<string | undefined> {
    console.log(
      chalk.gray('\nNote: The API Version is optional for Azure OpenAI.'),
    );
    console.log(
      chalk.gray(
        'The default is "2024-10-01-preview" which is the latest version.',
      ),
    );

    const apiVersion = await input({
      message: 'Azure API Version (optional):',
      default: defaultApiVersion || '2024-10-01-preview',
    });

    if (apiVersion === '2024-10-01-preview') {
      return undefined;
    }

    return apiVersion;
  }

  private async getUseProviderChain(
    defaultUseProviderChain?: boolean,
  ): Promise<boolean> {
    console.log(
      chalk.gray(
        '\nNote: You can use AWS credential provider chain (IAM roles, ECS, etc.)',
      ),
    );
    console.log(
      chalk.gray(
        'or provide explicit AWS credentials. Provider chain is recommended for AWS environments.',
      ),
    );

    return await confirm({
      message: 'Use AWS credential provider chain?',
      default: defaultUseProviderChain ?? false,
    });
  }

  private async getRegion(defaultRegion?: string): Promise<string | undefined> {
    console.log(
      chalk.gray('\nNote: The AWS region for Amazon Bedrock services.'),
    );
    console.log(
      chalk.gray('The default is "us-east-1" which has most models available.'),
    );

    const region = await input({
      message: 'AWS Region:',
      default: defaultRegion || 'us-east-1',
    });

    if (region === 'us-east-1') {
      return undefined;
    }

    return region;
  }

  private async getAccessKeyId(defaultAccessKeyId?: string): Promise<string> {
    return await input({
      message: 'AWS Access Key ID:',
      default: defaultAccessKeyId || '',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'AWS Access Key ID is required';
        }
        return true;
      },
    });
  }

  private async getSecretAccessKey(
    _defaultSecretAccessKey?: string,
  ): Promise<string> {
    return await password({
      message: 'AWS Secret Access Key:',
      mask: '*',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'AWS Secret Access Key is required';
        }
        return true;
      },
    });
  }

  private async getSessionToken(
    defaultSessionToken?: string,
  ): Promise<string | undefined> {
    console.log(
      chalk.gray('\nNote: AWS Session Token is optional and only needed for'),
    );
    console.log(chalk.gray('temporary credentials or assumed roles.'));

    const sessionToken = await input({
      message: 'AWS Session Token (optional):',
      default: defaultSessionToken || '',
    });

    return sessionToken || undefined;
  }

  private async getGoogleBaseURL(
    defaultBaseURL?: string,
  ): Promise<string | undefined> {
    console.log(
      chalk.gray(
        '\nNote: The Base URL is the Google Generative AI API endpoint.',
      ),
    );
    console.log(
      chalk.gray(
        'The default is "https://generativelanguage.googleapis.com/v1beta" for Google services.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for Google:',
      default:
        defaultBaseURL || 'https://generativelanguage.googleapis.com/v1beta',
    });

    if (baseURL === 'https://generativelanguage.googleapis.com/v1beta') {
      return undefined;
    }

    return baseURL;
  }

  manualConfigure(
    credentials: RawiCredentials,
    profile = DEFAULT_PROFILE,
  ): void {
    spinnerManager.start('manual-config-save', 'Saving configuration...');

    try {
      this.setCredentials(credentials, profile);
      spinnerManager.succeed(
        'manual-config-save',
        'Configuration saved successfully!',
      );
      console.log(chalk.gray(`Profile: ${profile}`));
      this.displayConfigurationSummary(credentials);
      console.log(chalk.gray(`\nConfig file: ${this.configFile}`));
    } catch (error) {
      spinnerManager.fail('manual-config-save', 'Configuration failed');
      console.error(chalk.red(`❌ ${error}`));
      throw error;
    }
  }

  showConfig(profile?: string): void {
    spinnerManager.start('config-show', 'Loading configuration...');

    try {
      if (profile) {
        const credentials = this.getCredentials(profile);
        if (!credentials) {
          spinnerManager.fail('config-show', `Profile '${profile}' not found`);
          console.log(chalk.yellow(`❌ Profile '${profile}' not found.`));
          return;
        }

        spinnerManager.succeed(
          'config-show',
          `Configuration loaded for '${profile}'`,
        );
        console.log(
          chalk.bold.blue(`\n📋 Configuration for '${profile}' profile:`),
        );
        this.displayCredentials(credentials);
      } else {
        const config = this.readConfig();
        const profiles = Object.keys(config);

        if (profiles.length === 0) {
          spinnerManager.fail('config-show', 'No configurations found');
          console.log(
            chalk.yellow(
              '❌ No configuration found. Run `rawi configure` to set up.',
            ),
          );
          return;
        }

        spinnerManager.succeed(
          'config-show',
          `Found ${profiles.length} configuration(s)`,
        );
        console.log(chalk.bold.blue('\n📋 All configurations:'));
        for (const profileName of profiles) {
          console.log(chalk.bold(`\n[${profileName}]`));
          this.displayCredentials(config[profileName]!);
        }
      }
    } catch (error) {
      spinnerManager.fail('config-show', 'Failed to load configuration');
      console.error(chalk.red(`Error reading configuration: ${error}`));
    }
  }

  private displayCredentials(credentials: RawiCredentials): void {
    const masked = {...credentials};

    if (masked.apiKey) {
      masked.apiKey = maskApiKey(masked.apiKey);
    }

    const providerConfig = getProvider(masked.provider);
    const providerDisplayName = providerConfig.displayName;

    const modelInfo = providerConfig.models.find(
      (m) => m.name === masked.model,
    );
    const modelDisplayName = modelInfo?.displayName || masked.model;

    console.log(
      chalk.blue('  Provider:') +
        chalk.white(` ${providerDisplayName} (${masked.provider})`),
    );
    console.log(chalk.blue('  Model:') + chalk.white(` ${modelDisplayName}`));

    if (
      masked.apiKey ||
      (masked.providerSettings &&
        Object.keys(masked.providerSettings).length > 0)
    ) {
      console.log('');

      if (masked.apiKey) {
        console.log(
          chalk.blue('  API Key:') + chalk.white(` ${masked.apiKey}`),
        );
      }

      if (masked.providerSettings) {
        if (
          masked.provider === 'ollama' &&
          'baseURL' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('  Base URL:') +
              chalk.white(
                ` ${masked.providerSettings.baseURL || 'http://localhost:11434/api'} ${!masked.providerSettings.baseURL ? '(default)' : ''}`,
              ),
          );
        } else if (masked.provider === 'azure') {
          if ('resourceName' in masked.providerSettings) {
            console.log(
              chalk.blue('  Resource Name:') +
                chalk.white(` ${masked.providerSettings.resourceName}`),
            );
          }

          if ('apiVersion' in masked.providerSettings) {
            console.log(
              chalk.blue('  API Version:') +
                chalk.white(` ${masked.providerSettings.apiVersion}`),
            );
          }
        } else if (masked.provider === 'bedrock') {
          if ('region' in masked.providerSettings) {
            console.log(
              chalk.blue('  Region:') +
                chalk.white(
                  ` ${masked.providerSettings.region || 'us-east-1 (default)'}`,
                ),
            );
          }

          if (
            'useProviderChain' in masked.providerSettings &&
            masked.providerSettings.useProviderChain
          ) {
            console.log(
              chalk.blue('  Credentials:') + chalk.white(' AWS Provider Chain'),
            );
          } else {
            if (
              'accessKeyId' in masked.providerSettings &&
              masked.providerSettings.accessKeyId
            ) {
              console.log(
                chalk.blue('  Access Key ID:') +
                  chalk.white(
                    ` ${maskApiKey(masked.providerSettings.accessKeyId)}`,
                  ),
              );
            }
            if (
              'secretAccessKey' in masked.providerSettings &&
              masked.providerSettings.secretAccessKey
            ) {
              console.log(
                chalk.blue('  Secret Key:') +
                  chalk.white(
                    ` ${maskApiKey(masked.providerSettings.secretAccessKey)}`,
                  ),
              );
            }
            if (
              'sessionToken' in masked.providerSettings &&
              masked.providerSettings.sessionToken
            ) {
              console.log(
                chalk.blue('  Session Token:') +
                  chalk.white(
                    ` ${maskApiKey(masked.providerSettings.sessionToken)}`,
                  ),
              );
            }
          }
        } else if (
          masked.provider === 'qwen' &&
          masked.providerSettings &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('  API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('  Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1 (default)'}`,
                ),
            );
          }
        } else if (
          masked.provider === 'xai' &&
          masked.providerSettings &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('  API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('  Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://api.x.ai/v1 (default)'}`,
                ),
            );
          }
        } else if (
          masked.provider === 'openai' &&
          masked.providerSettings &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('  API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('  Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://api.openai.com/v1 (default)'}`,
                ),
            );
          }
        } else if (
          masked.provider === 'anthropic' &&
          masked.providerSettings &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('  API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('  Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://api.anthropic.com (default)'}`,
                ),
            );
          }
        } else if (
          masked.provider === 'google' &&
          masked.providerSettings &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('  API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('  Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://generativelanguage.googleapis.com/v1beta (default)'}`,
                ),
            );
          }
        }
      }
    }

    console.log('');

    if (masked.temperature) {
      console.log(
        chalk.blue('  Temperature:') +
          chalk.white(` ${masked.temperature.toFixed(1)}`),
      );
    }

    if (masked.maxTokens) {
      console.log(
        chalk.blue('  Max Tokens:') + chalk.white(` ${masked.maxTokens}`),
      );
    }

    if (masked.language) {
      console.log(
        chalk.blue('  Language:') + chalk.white(` ${masked.language}`),
      );
    }
  }

  private displayConfigurationSummary(credentials: RawiCredentials): void {
    const masked = {...credentials};

    if (masked.apiKey) {
      masked.apiKey = maskApiKey(masked.apiKey);
    }

    const providerConfig = getProvider(masked.provider);
    const providerDisplayName = providerConfig.displayName;

    const modelInfo = providerConfig.models.find(
      (m) => m.name === masked.model,
    );
    const modelDisplayName = modelInfo?.displayName || masked.model;

    console.log(chalk.bold('\n📋 Configuration Summary:'));

    console.log(
      chalk.blue('  Provider:') +
        chalk.white(` ${providerDisplayName} (${masked.provider})`),
    );
    console.log(chalk.blue('  Model:') + chalk.white(` ${modelDisplayName}`));

    if (
      masked.apiKey ||
      (masked.providerSettings &&
        Object.keys(masked.providerSettings).length > 0)
    ) {
      console.log(chalk.bold('\n  Authentication:'));

      if (masked.apiKey) {
        console.log(
          chalk.blue('    API Key:') + chalk.white(` ${masked.apiKey}`),
        );
      }

      if (masked.providerSettings) {
        if (
          masked.provider === 'ollama' &&
          'baseURL' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('    Base URL:') +
              chalk.white(
                ` ${masked.providerSettings.baseURL || 'http://localhost:11434/api'} (default)`,
              ),
          );
        } else if (masked.provider === 'azure') {
          if ('resourceName' in masked.providerSettings) {
            console.log(
              chalk.blue('    Resource Name:') +
                chalk.white(` ${masked.providerSettings.resourceName}`),
            );
          }

          if ('apiVersion' in masked.providerSettings) {
            console.log(
              chalk.blue('    API Version:') +
                chalk.white(` ${masked.providerSettings.apiVersion}`),
            );
          }
        } else if (masked.provider === 'bedrock') {
          if ('region' in masked.providerSettings) {
            console.log(
              chalk.blue('    Region:') +
                chalk.white(
                  ` ${masked.providerSettings.region || 'us-east-1 (default)'}`,
                ),
            );
          }

          if (
            'useProviderChain' in masked.providerSettings &&
            masked.providerSettings.useProviderChain
          ) {
            console.log(
              chalk.blue('    Credentials:') +
                chalk.white(' AWS Provider Chain'),
            );
          } else {
            if (
              'accessKeyId' in masked.providerSettings &&
              masked.providerSettings.accessKeyId
            ) {
              console.log(
                chalk.blue('    Access Key ID:') +
                  chalk.white(
                    ` ${maskApiKey(masked.providerSettings.accessKeyId)}`,
                  ),
              );
            }
          }
        } else if (
          masked.provider === 'qwen' &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('    API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('    Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1 (default)'}`,
                ),
            );
          }
        } else if (
          masked.provider === 'xai' &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('    API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('    Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://api.x.ai/v1 (default)'}`,
                ),
            );
          }
        } else if (
          masked.provider === 'openai' &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('    API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('    Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://api.openai.com/v1 (default)'}`,
                ),
            );
          }
        } else if (
          masked.provider === 'anthropic' &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('    API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('    Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://api.anthropic.com (default)'}`,
                ),
            );
          }
        } else if (
          masked.provider === 'google' &&
          'apiKey' in masked.providerSettings
        ) {
          console.log(
            chalk.blue('    API Key:') +
              chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
          );
          if ('baseURL' in masked.providerSettings) {
            console.log(
              chalk.blue('    Base URL:') +
                chalk.white(
                  ` ${masked.providerSettings.baseURL || 'https://generativelanguage.googleapis.com/v1beta (default)'}`,
                ),
            );
          }
        }
      }
    }

    console.log(chalk.bold('\n  Generation Settings:'));

    console.log(
      chalk.blue('    Temperature:') +
        chalk.white(
          ` ${(masked.temperature || 0.7).toFixed(1)} ${!masked.temperature ? '(default)' : ''}`,
        ),
    );

    console.log(
      chalk.blue('    Max Tokens:') +
        chalk.white(
          ` ${masked.maxTokens || 2048} ${!masked.maxTokens ? '(default)' : ''}`,
        ),
    );

    console.log(chalk.bold('\n  User Preferences:'));

    console.log(
      chalk.blue('    Language:') +
        chalk.white(
          ` ${masked.language || 'english'} ${!masked.language ? '(default)' : ''}`,
        ),
    );

    if (masked.providerSettings) {
      console.log(chalk.gray('  Provider Settings:'));

      if (
        masked.provider === 'ollama' &&
        'baseURL' in masked.providerSettings
      ) {
        console.log(
          chalk.gray(`    Base URL: ${masked.providerSettings.baseURL}`),
        );
      } else if (masked.provider === 'azure') {
        if ('resourceName' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    Resource Name: ${masked.providerSettings.resourceName}`,
            ),
          );
        }

        if ('apiVersion' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    API Version: ${masked.providerSettings.apiVersion}`,
            ),
          );
        }
      } else if (masked.provider === 'bedrock') {
        if ('region' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    Region: ${masked.providerSettings.region || 'us-east-1'}`,
            ),
          );
        }

        if (
          'useProviderChain' in masked.providerSettings &&
          masked.providerSettings.useProviderChain
        ) {
          console.log(chalk.gray('    Credentials: AWS Provider Chain'));
        } else {
          if (
            'accessKeyId' in masked.providerSettings &&
            masked.providerSettings.accessKeyId
          ) {
            console.log(
              chalk.gray(
                `    Access Key ID: ${maskApiKey(masked.providerSettings.accessKeyId)}`,
              ),
            );
          }
          if (
            'secretAccessKey' in masked.providerSettings &&
            masked.providerSettings.secretAccessKey
          ) {
            console.log(
              chalk.gray(
                `    Secret Key: ${maskApiKey(masked.providerSettings.secretAccessKey)}`,
              ),
            );
          }
          if (
            'sessionToken' in masked.providerSettings &&
            masked.providerSettings.sessionToken
          ) {
            console.log(
              chalk.gray(
                `    Session Token: ${maskApiKey(masked.providerSettings.sessionToken)}`,
              ),
            );
          }
        }
      } else if (masked.provider === 'qwen') {
        if ('apiKey' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    API Key: ${maskApiKey(masked.providerSettings.apiKey)}`,
            ),
          );
        }
        if ('baseURL' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    Base URL: ${masked.providerSettings.baseURL || 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1'}`,
            ),
          );
        }
      } else if (masked.provider === 'xai') {
        if ('apiKey' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    API Key: ${maskApiKey(masked.providerSettings.apiKey)}`,
            ),
          );
        }
        if ('baseURL' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    Base URL: ${masked.providerSettings.baseURL || 'https://api.x.ai/v1'}`,
            ),
          );
        }
      } else if (masked.provider === 'openai') {
        if ('apiKey' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    API Key: ${maskApiKey(masked.providerSettings.apiKey)}`,
            ),
          );
        }
        if ('baseURL' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    Base URL: ${masked.providerSettings.baseURL || 'https://api.openai.com/v1'}`,
            ),
          );
        }
      } else if (masked.provider === 'anthropic') {
        if ('apiKey' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    API Key: ${maskApiKey(masked.providerSettings.apiKey)}`,
            ),
          );
        }
        if ('baseURL' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    Base URL: ${masked.providerSettings.baseURL || 'https://api.anthropic.com'}`,
            ),
          );
        }
      } else if (masked.provider === 'google') {
        if ('apiKey' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    API Key: ${maskApiKey(masked.providerSettings.apiKey)}`,
            ),
          );
        }
        if ('baseURL' in masked.providerSettings) {
          console.log(
            chalk.gray(
              `    Base URL: ${masked.providerSettings.baseURL || 'https://generativelanguage.googleapis.com/v1beta'}`,
            ),
          );
        }
      }
    }
  }
}
