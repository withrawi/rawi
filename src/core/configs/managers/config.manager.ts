import chalk from 'chalk';
import {
  type AnthropicSettings,
  type AzureSettings,
  type BedrockSettings,
  type ConfigureOptions,
  DEFAULT_LANGUAGE,
  DEFAULT_MAX_TOKENS,
  DEFAULT_TEMPERATURE,
  type GoogleSettings,
  type OpenAISettings,
  type QwenSettings,
  type RawiCredentials,
  spinnerManager,
  type XAISettings,
} from '../../shared/index.js';
import {ConfigValidator, type IInteractiveConfigManager} from '../index.js';
import {
  BaseConfigManager,
  ConfigDisplayManager,
  InteractiveConfigManager,
  ProviderConfigManager,
} from './index.js';

export class ConfigManager
  extends BaseConfigManager
  implements IInteractiveConfigManager
{
  private readonly interactive = new InteractiveConfigManager();
  private readonly providerConfig = new ProviderConfigManager();
  private readonly display = new ConfigDisplayManager();
  private readonly validator = new ConfigValidator();

  async interactiveConfigure(options: ConfigureOptions = {}): Promise<void> {
    console.log(chalk.bold.blue('\\n🔧 Configuring Rawi'));
    console.log(chalk.gray('Please provide your AI service configuration:\\n'));

    try {
      const profile = await this.interactive.getProfile(options.profile);

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
        const provider = await this.interactive.selectProvider(
          options.provider || existingCredentials?.provider,
        );

        spinnerManager.start(
          'provider-validation',
          `Validating ${provider} provider configuration...`,
        );
        await new Promise((resolve) => setTimeout(resolve, 500));
        spinnerManager.succeed(
          'provider-validation',
          `${provider} provider validated`,
        );

        const model = await this.interactive.selectModel(
          provider,
          options.model || existingCredentials?.model,
        );

        const credentials: RawiCredentials = {
          provider,
          model,
          temperature: await this.interactive.getTemperature(
            options.temperature ??
              existingCredentials?.temperature ??
              DEFAULT_TEMPERATURE,
          ),
          maxTokens: await this.interactive.getMaxTokens(
            options.maxTokens ??
              existingCredentials?.maxTokens ??
              DEFAULT_MAX_TOKENS,
          ),
          language: await this.interactive.getLanguage(
            options.language ??
              existingCredentials?.language ??
              DEFAULT_LANGUAGE,
          ),
        };

        await this.configureProviderSettings(
          credentials,
          provider,
          options,
          existingCredentials,
        );

        const validation = this.validator.validateCredentials(credentials);
        if (!validation.isValid) {
          this.display.displayError(
            'Configuration validation failed:',
            validation.errors.join(', '),
          );
          throw new Error('Invalid configuration');
        }

        if (validation.warnings.length > 0) {
          for (const warning of validation.warnings) {
            this.display.displayWarning(warning);
          }
        }

        this.setCredentials(credentials, profile);

        spinnerManager.start('config-save', 'Saving configuration...');

        try {
          spinnerManager.succeed(
            'config-save',
            'Configuration saved successfully!',
          );

          console.log(chalk.gray(`Profile: ${profile}`));
          this.display.displayConfigurationSummary(credentials);
          console.log(chalk.gray(`\\nConfig file: ${this.configFile}`));

          this.display.displaySuccess('Configuration completed successfully!');
        } catch (error) {
          spinnerManager.fail('config-save', 'Failed to save configuration');
          throw error;
        }
      } catch (error) {
        if (error instanceof Error && error.name === 'ExitPromptError') {
          console.log(
            chalk.yellow('\\n👋 Configuration cancelled. Exiting...'),
          );
          return;
        }
        throw error;
      }
    } catch (error) {
      if (error === '') {
        console.log(chalk.yellow('\\n❌ Configuration cancelled.'));
        return;
      }

      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.display.displayError('Configuration failed', errorMessage);
      throw error;
    }
  }

  private async configureProviderSettings(
    credentials: RawiCredentials,
    provider: string,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    switch (provider) {
      case 'ollama':
        await this.configureOllama(credentials, options, existingCredentials);
        break;
      case 'lmstudio':
        await this.configureLMStudio(credentials, options, existingCredentials);
        break;
      case 'azure':
        await this.configureAzure(credentials, options, existingCredentials);
        break;
      case 'bedrock':
        await this.configureBedrock(credentials, options, existingCredentials);
        break;
      case 'qwen':
        await this.configureQwen(credentials, options, existingCredentials);
        break;
      case 'xai':
        await this.configureXAI(credentials, options, existingCredentials);
        break;
      case 'openai':
        await this.configureOpenAI(credentials, options, existingCredentials);
        break;
      case 'anthropic':
        await this.configureAnthropic(
          credentials,
          options,
          existingCredentials,
        );
        break;
      case 'google':
        await this.configureGoogle(credentials, options, existingCredentials);
        break;
      default:
        credentials.apiKey = await this.interactive.getApiKey(
          options.apiKey || existingCredentials?.apiKey,
          provider as any,
        );
        break;
    }
  }

  private async configureOllama(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const baseURL = await this.providerConfig.getBaseURL(
      options.baseURL ||
        (existingCredentials?.providerSettings &&
        'baseURL' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.baseURL
          : undefined),
    );

    if (baseURL) {
      credentials.providerSettings = {baseURL};
    }
  }

  private async configureLMStudio(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const baseURL = await this.providerConfig.getBaseURL(
      options.baseURL ||
        (existingCredentials?.providerSettings &&
        'baseURL' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.baseURL
          : undefined),
    );

    if (baseURL) {
      credentials.providerSettings = {baseURL};
    }
  }

  private async configureAzure(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingCredentials?.apiKey,
      'azure',
    );

    const resourceName = await this.providerConfig.getAPIEndpoint(
      options.resourceName ||
        (existingCredentials?.providerSettings &&
        'resourceName' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.resourceName
          : undefined),
    );

    credentials.apiKey = apiKey;

    if (resourceName) {
      const settings: AzureSettings = {resourceName};
      credentials.providerSettings = settings;
    }
  }

  private async configureBedrock(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const accessKeyId = await this.providerConfig.getAccessKey(
      options.accessKeyId ||
        (existingCredentials?.providerSettings &&
        'accessKeyId' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.accessKeyId
          : undefined),
    );

    const secretAccessKey = await this.providerConfig.getSecretAccessKey(
      options.secretAccessKey ||
        (existingCredentials?.providerSettings &&
        'secretAccessKey' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.secretAccessKey
          : undefined),
    );

    const region = await this.providerConfig.getRegion(
      options.region ||
        (existingCredentials?.providerSettings &&
        'region' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.region
          : undefined),
    );

    const sessionToken = await this.providerConfig.getSessionToken(
      options.sessionToken ||
        (existingCredentials?.providerSettings &&
        'sessionToken' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.sessionToken
          : undefined),
    );

    const settings: BedrockSettings = {};

    if (accessKeyId) settings.accessKeyId = accessKeyId;
    if (secretAccessKey) settings.secretAccessKey = secretAccessKey;
    if (region) settings.region = region;
    if (sessionToken) settings.sessionToken = sessionToken;

    credentials.providerSettings = settings;
  }

  private async configureQwen(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingCredentials?.apiKey,
      'qwen',
    );

    const settings: QwenSettings = {apiKey};
    credentials.apiKey = apiKey;
    credentials.providerSettings = settings;
  }

  private async configureXAI(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingCredentials?.apiKey,
      'xai',
    );

    const settings: XAISettings = {apiKey};
    credentials.apiKey = apiKey;
    credentials.providerSettings = settings;
  }

  private async configureOpenAI(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingCredentials?.apiKey,
      'openai',
    );

    const settings: OpenAISettings = {apiKey};
    credentials.apiKey = apiKey;
    credentials.providerSettings = settings;
  }

  private async configureAnthropic(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingCredentials?.apiKey,
      'anthropic',
    );

    const settings: AnthropicSettings = {apiKey};
    credentials.apiKey = apiKey;
    credentials.providerSettings = settings;
  }

  private async configureGoogle(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingCredentials?.apiKey,
      'google',
    );

    const baseURL = await this.providerConfig.getAPIEndpoint(
      options.baseURL ||
        (existingCredentials?.providerSettings &&
        'baseURL' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.baseURL
          : undefined),
    );

    const settings: GoogleSettings = {apiKey};

    if (baseURL) {
      settings.baseURL = baseURL;
    }

    credentials.apiKey = apiKey;
    credentials.providerSettings = settings;
  }

  showConfig(profile?: string, showCredentials = false): void {
    this.showConfiguration(profile, showCredentials).catch((error) => {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.display.displayError('Error showing configuration', errorMessage);
    });
  }

  async showConfiguration(
    profile?: string,
    _showCredentials = false,
  ): Promise<void> {
    spinnerManager.start('config-show', 'Loading configuration...');

    try {
      const config = this.readConfig();
      const profiles = Object.keys(config);

      if (profiles.length === 0) {
        spinnerManager.stop('config-show');
        console.log(chalk.yellow('No configuration profiles found.'));
        console.log(
          chalk.gray('Use "rawi configure" to create your first profile.'),
        );
        return;
      }

      spinnerManager.succeed('config-show', 'Configuration loaded');

      if (profile) {
        if (!(profile in config)) {
          console.log(chalk.red(`Profile '${profile}' not found.`));
          console.log(chalk.gray('Available profiles:'));
          this.display.displayProfiles(profiles);
          return;
        }

        console.log(chalk.blue(`\nProfile: ${profile}`));
        this.display.displayCredentials(config[profile]!);
      } else {
        console.log(chalk.blue('\nAll Profiles:'));
        for (const profileName of profiles) {
          console.log(chalk.white(`\n• Profile: ${profileName}`));
          this.display.displayCredentials(config[profileName]!);
        }
      }
    } catch (error) {
      spinnerManager.fail('config-show', 'Failed to load configuration');
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.display.displayError('Error reading configuration', errorMessage);
    }
  }

  manualConfigure(credentials: RawiCredentials, profile = 'default'): void {
    try {
      const validation = this.validator.validateCredentials(credentials);
      if (!validation.isValid) {
        this.display.displayError(
          'Configuration validation failed:',
          validation.errors.join(', '),
        );
        throw new Error('Invalid configuration');
      }

      if (validation.warnings.length > 0) {
        for (const warning of validation.warnings) {
          this.display.displayWarning(warning);
        }
      }

      this.setCredentials(credentials, profile);
      this.display.displaySuccess('Configuration saved successfully!');
      console.log(chalk.gray(`Profile: ${profile}`));
      this.display.displayConfigurationSummary(credentials);
      console.log(chalk.gray(`\nConfig file: ${this.configFile}`));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.display.displayError('Manual configuration failed', errorMessage);
      throw error;
    }
  }
}
