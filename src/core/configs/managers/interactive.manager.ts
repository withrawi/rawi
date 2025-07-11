import {confirm, input, password, select} from '@inquirer/prompts';
import chalk from 'chalk';
import {getAllProviders, getProvider} from '../../providers/index.js';
import {
  DEFAULT_LANGUAGE,
  DEFAULT_PROFILE,
  type SupportedLanguage,
  type SupportedProvider,
} from '../../shared/index.js';
import {ConfigValidator} from '../validators/config.validator.js';

export class InteractiveConfigManager {
  private readonly validator = new ConfigValidator();

  async getProfile(profile?: string): Promise<string> {
    if (profile) {
      if (!this.isValidProfileName(profile)) {
        throw new Error(`Invalid profile name: ${profile}`);
      }
      return profile;
    }

    return input({
      message: 'Profile Name:',
      default: DEFAULT_PROFILE,
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Profile name is required';
        }
        if (!this.isValidProfileName(input.trim())) {
          return 'Profile name can only contain letters, numbers, hyphens, and underscores';
        }
        return true;
      },
    });
  }

  async selectProvider(
    defaultProvider?: SupportedProvider,
  ): Promise<SupportedProvider> {
    const providers = getAllProviders();
    const choices = providers.map((p) => ({
      name: `${p.displayName} (${p.name})`,
      value: p.name as SupportedProvider,
    }));

    return select({
      message: 'Select AI Provider:',
      choices,
      default: defaultProvider,
    });
  }

  async selectModel(
    provider: SupportedProvider,
    defaultModel?: string,
  ): Promise<string> {
    const providerConfig = getProvider(provider);

    if (!providerConfig) {
      throw new Error(`Unknown provider: ${provider}`);
    }

    const choices = providerConfig.models.map((model) => ({
      name: model.displayName || model.name,
      value: model.name,
      description: model.description || '',
    }));

    if (choices.length === 0) {
      throw new Error(`No models available for provider: ${provider}`);
    }

    return select({
      message: `Select ${providerConfig.displayName} Model:`,
      choices,
      default: defaultModel,
    });
  }

  async getApiKey(
    defaultApiKey?: string,
    provider?: SupportedProvider,
  ): Promise<string> {
    const message = provider
      ? `${getProvider(provider)?.displayName || provider} API Key:`
      : 'API Key:';

    let apiKey: string;

    if (defaultApiKey) {
      const useExisting = await confirm({
        message: `Use existing API key (${this.maskApiKey(defaultApiKey)})?`,
        default: true,
      });

      if (useExisting) {
        return defaultApiKey;
      }
    }

    do {
      apiKey = await password({
        message,
        mask: '*',
        validate: (input: string) => {
          if (!input.trim()) {
            return 'API key is required';
          }

          if (provider) {
            const validation = this.validator.validateApiKey(
              input.trim(),
              provider,
            );
            if (!validation.isValid) {
              return validation.errors[0] || 'Invalid API key';
            }

            if (validation.warnings.length > 0) {
              console.log(
                chalk.yellow(`Warning: ${validation.warnings.join(', ')}`),
              );
            }
          }

          return true;
        },
      });
    } while (!apiKey.trim());

    return apiKey.trim();
  }

  async getTemperature(defaultTemperature = 0.7): Promise<number> {
    const input_result = await input({
      message: 'Temperature (0.0 - 2.0):',
      default: defaultTemperature.toString(),
      validate: (input: string) => {
        const num = Number.parseFloat(input);
        if (Number.isNaN(num)) {
          return 'Temperature must be a number';
        }
        if (num < 0 || num > 2) {
          return 'Temperature must be between 0.0 and 2.0';
        }
        return true;
      },
    });

    return Number.parseFloat(input_result);
  }

  async getMaxTokens(defaultMaxTokens = 2048): Promise<number> {
    const input_result = await input({
      message: 'Max Tokens (1 - 100000):',
      default: defaultMaxTokens.toString(),
      validate: (input: string) => {
        const num = Number.parseInt(input, 10);
        if (Number.isNaN(num)) {
          return 'Max tokens must be a number';
        }
        if (num < 1 || num > 100000) {
          return 'Max tokens must be between 1 and 100000';
        }
        return true;
      },
    });

    return Number.parseInt(input_result, 10);
  }

  async getLanguage(
    defaultLanguage: SupportedLanguage = DEFAULT_LANGUAGE,
  ): Promise<SupportedLanguage> {
    const languages: Array<{name: string; value: SupportedLanguage}> = [
      {name: 'English', value: 'english'},
      {name: 'Arabic', value: 'arabic'},
    ];

    return select({
      message: 'Response Language:',
      choices: languages,
      default: defaultLanguage,
    });
  }

  private isValidProfileName(name: string): boolean {
    const profileNameRegex = /^[a-zA-Z0-9_-]+$/;
    return profileNameRegex.test(name) && name.length <= 50;
  }

  private maskApiKey(apiKey: string): string {
    if (apiKey.length <= 8) {
      return '*'.repeat(apiKey.length);
    }
    return `${apiKey.slice(0, 4)}${'*'.repeat(apiKey.length - 8)}${apiKey.slice(-4)}`;
  }
}
