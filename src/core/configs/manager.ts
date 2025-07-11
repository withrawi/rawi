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
  RawiCredentials,
  XAISettings,
} from '../shared/types.js';
import {BaseConfigManager} from './base-manager.js';
import {ConfigDisplayManager} from './display.js';
import {InteractiveConfigManager} from './interactive.js';
import {ProviderConfigManager} from './provider-config.js';

export class ConfigManager extends BaseConfigManager {
  private readonly interactive = new InteractiveConfigManager();
  private readonly providerConfig = new ProviderConfigManager();
  private readonly display = new ConfigDisplayManager();

  async interactiveConfigure(options: ConfigureOptions = {}): Promise<void> {
    console.log(chalk.bold.blue('\n🔧 Configuring Rawi'));
    console.log(chalk.gray('Please provide your AI service configuration:\n'));

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

        // Configure provider-specific settings
        await this.configureProviderSettings(
          credentials,
          provider,
          options,
          existingCredentials,
        );

        this.setCredentials(credentials, profile);

        spinnerManager.start('config-save', 'Saving configuration...');

        try {
          spinnerManager.succeed(
            'config-save',
            'Configuration saved successfully!',
          );

          console.log(chalk.gray(`Profile: ${profile}`));
          this.display.displayConfigurationSummary(credentials);
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
    const baseURL = await this.providerConfig.getBaseURLLMStudio(
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
    const resourceName = await this.interactive.getResourceName(
      options.resourceName ||
        (existingCredentials?.providerSettings &&
        'resourceName' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.resourceName
          : undefined),
    );

    if (resourceName) {
      credentials.providerSettings = {resourceName};
    }

    const apiVersion = await this.interactive.getApiVersion(
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
  }

  private async configureBedrock(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const useProviderChain = await this.interactive.getUseProviderChain(
      options.useProviderChain ||
        (existingCredentials?.providerSettings &&
        'useProviderChain' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.useProviderChain
          : undefined),
    );

    const providerSettings: BedrockSettings = {};

    const region = await this.interactive.getRegion(
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
      const accessKeyId = await this.interactive.getAccessKeyId(
        options.accessKeyId ||
          (existingCredentials?.providerSettings &&
          'accessKeyId' in existingCredentials.providerSettings
            ? existingCredentials.providerSettings.accessKeyId
            : undefined),
      );

      const secretAccessKey = await this.interactive.getSecretAccessKey(
        options.secretAccessKey ||
          (existingCredentials?.providerSettings &&
          'secretAccessKey' in existingCredentials.providerSettings
            ? existingCredentials.providerSettings.secretAccessKey
            : undefined),
      );

      const sessionToken = await this.interactive.getSessionToken(
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
  }

  private async configureQwen(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const existingApiKey =
      existingCredentials?.providerSettings &&
      'apiKey' in existingCredentials.providerSettings
        ? existingCredentials.providerSettings.apiKey
        : existingCredentials?.apiKey;

    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingApiKey,
      'qwen',
    );

    const baseURL = await this.providerConfig.getQwenBaseURL(
      options.baseURL ||
        (existingCredentials?.providerSettings &&
        'baseURL' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.baseURL
          : undefined),
    );

    const providerSettings: QwenSettings = {apiKey};
    if (baseURL) {
      providerSettings.baseURL = baseURL;
    }

    credentials.providerSettings = providerSettings;
  }

  private async configureXAI(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const existingApiKey =
      existingCredentials?.providerSettings &&
      'apiKey' in existingCredentials.providerSettings
        ? existingCredentials.providerSettings.apiKey
        : existingCredentials?.apiKey;

    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingApiKey,
      'xai',
    );

    const baseURL = await this.providerConfig.getXaiBaseURL(
      options.baseURL ||
        (existingCredentials?.providerSettings &&
        'baseURL' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.baseURL
          : undefined),
    );

    const providerSettings: XAISettings = {apiKey};
    if (baseURL) {
      providerSettings.baseURL = baseURL;
    }

    credentials.providerSettings = providerSettings;
  }

  private async configureOpenAI(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const existingApiKey =
      existingCredentials?.providerSettings &&
      'apiKey' in existingCredentials.providerSettings
        ? existingCredentials.providerSettings.apiKey
        : existingCredentials?.apiKey;

    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingApiKey,
      'openai',
    );

    const baseURL = await this.providerConfig.getOpenAIBaseURL(
      options.baseURL ||
        (existingCredentials?.providerSettings &&
        'baseURL' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.baseURL
          : undefined),
    );

    const providerSettings: OpenAISettings = {apiKey};
    if (baseURL) {
      providerSettings.baseURL = baseURL;
    }

    credentials.providerSettings = providerSettings;
  }

  private async configureAnthropic(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const existingApiKey =
      existingCredentials?.providerSettings &&
      'apiKey' in existingCredentials.providerSettings
        ? existingCredentials.providerSettings.apiKey
        : existingCredentials?.apiKey;

    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingApiKey,
      'anthropic',
    );

    const baseURL = await this.providerConfig.getAnthropicBaseURL(
      options.baseURL ||
        (existingCredentials?.providerSettings &&
        'baseURL' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.baseURL
          : undefined),
    );

    const providerSettings: AnthropicSettings = {apiKey};
    if (baseURL) {
      providerSettings.baseURL = baseURL;
    }

    credentials.providerSettings = providerSettings;
  }

  private async configureGoogle(
    credentials: RawiCredentials,
    options: ConfigureOptions,
    existingCredentials: RawiCredentials | null,
  ): Promise<void> {
    const existingApiKey =
      existingCredentials?.providerSettings &&
      'apiKey' in existingCredentials.providerSettings
        ? existingCredentials.providerSettings.apiKey
        : existingCredentials?.apiKey;

    const apiKey = await this.interactive.getApiKey(
      options.apiKey || existingApiKey,
      'google',
    );

    const baseURL = await this.providerConfig.getGoogleBaseURL(
      options.baseURL ||
        (existingCredentials?.providerSettings &&
        'baseURL' in existingCredentials.providerSettings
          ? existingCredentials.providerSettings.baseURL
          : undefined),
    );

    const providerSettings: GoogleSettings = {apiKey};
    if (baseURL) {
      providerSettings.baseURL = baseURL;
    }

    credentials.providerSettings = providerSettings;
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
      this.display.displayConfigurationSummary(credentials);
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
        this.display.displayCredentials(credentials);
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
          this.display.displayCredentials(config[profileName]!);
        }
      }
    } catch (error) {
      spinnerManager.fail('config-show', 'Failed to load configuration');
      console.error(chalk.red(`Error reading configuration: ${error}`));
    }
  }
}
