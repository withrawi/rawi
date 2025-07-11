import {confirm, input, password, select} from '@inquirer/prompts';
import chalk from 'chalk';
import {getAllProviders, getProvider} from '../providers/index.js';
import {DEFAULT_LANGUAGE, DEFAULT_PROFILE} from '../shared/constants.js';
import type {SupportedLanguage, SupportedProvider} from '../shared/types.js';
import {
  validateApiKey,
  validateMaxTokens,
  validateTemperature,
} from '../shared/utils.js';

export class InteractiveConfigManager {
  async getProfile(profile?: string): Promise<string> {
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

  async selectProvider(
    defaultProvider?: SupportedProvider,
  ): Promise<SupportedProvider> {
    const providers = getAllProviders();
    const choices = providers.map((provider) => ({
      name: provider.displayName,
      value: provider.name as SupportedProvider,
    }));

    return select<SupportedProvider>({
      message: 'AI Provider:',
      choices,
      default: defaultProvider || 'openai',
    });
  }

  async selectModel(
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

  async getApiKey(
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

  async getTemperature(defaultTemperature: number): Promise<number> {
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

  async getMaxTokens(defaultMaxTokens: number): Promise<number> {
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

  async getLanguage(
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

  // AWS Bedrock specific methods
  async getUseProviderChain(
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

  async getRegion(defaultRegion?: string): Promise<string | undefined> {
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

  async getAccessKeyId(defaultAccessKeyId?: string): Promise<string> {
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

  async getSecretAccessKey(_defaultSecretAccessKey?: string): Promise<string> {
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

  async getSessionToken(
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

  // Azure specific methods
  async getResourceName(defaultResourceName?: string): Promise<string> {
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

  async getApiVersion(defaultApiVersion?: string): Promise<string | undefined> {
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
}
