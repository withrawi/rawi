import chalk from 'chalk';
import {Command} from 'commander';
import {ConfigManager} from '../../core/configs/index.js';
import type {
  AnthropicSettings,
  AzureSettings,
  BedrockSettings,
  ConfigureOptions,
  GoogleSettings,
  LMStudioSettings,
  OllamaSettings,
  OpenAISettings,
  QwenSettings,
  RawiCredentials,
  SupportedLanguage,
  XAISettings,
} from '../../core/shared/types.js';

export const createConfigureCommand = (): Command => {
  const command = new Command('configure');

  command
    .description(
      [
        chalk.bold('Configure AI provider settings and manage profiles.'),
        '',
        chalk.gray(
          'Set up providers, models, credentials, and advanced options.',
        ),
        chalk.gray('Supports interactive and manual configuration.'),
        chalk.gray('Use --list to see all profiles, --show for details.'),
      ].join('\n'),
    )
    .option(
      '-p, --profile <profile>',
      chalk.white('Profile name to configure'),
      'default',
    )
    .option(
      '--provider <provider>',
      chalk.white(
        'AI provider (openai, anthropic, google, ollama, xai, azure, bedrock, qwen)',
      ),
    )
    .option('--model <model>', chalk.white('AI model name'))
    .option(
      '--api-key <apiKey>',
      chalk.white('API key for the provider (not needed for Ollama)'),
    )
    .option(
      '--base-url <baseURL>',
      chalk.white('Base URL for provider API (see docs for defaults)'),
    )
    .option(
      '--resource-name <resourceName>',
      chalk.white('Resource name for Azure OpenAI (required for Azure)'),
    )
    .option(
      '--api-version <apiVersion>',
      chalk.white('API version for Azure OpenAI (default: 2024-10-01-preview)'),
    )
    .option(
      '--region <region>',
      chalk.white('AWS region for Amazon Bedrock (default: us-east-1)'),
    )
    .option(
      '--access-key-id <accessKeyId>',
      chalk.white('AWS access key ID for Amazon Bedrock'),
    )
    .option(
      '--secret-access-key <secretAccessKey>',
      chalk.white('AWS secret access key for Amazon Bedrock'),
    )
    .option(
      '--session-token <sessionToken>',
      chalk.white('AWS session token for Amazon Bedrock (optional)'),
    )
    .option(
      '--use-provider-chain',
      chalk.white(
        'Use AWS credential provider chain instead of explicit credentials',
      ),
    )
    .option(
      '--temperature <temperature>',
      chalk.white('Sampling temperature (0-2, higher = more creative)'),
      Number.parseFloat,
    )
    .option(
      '--max-tokens <maxTokens>',
      chalk.white('Maximum tokens for response'),
      Number.parseInt,
    )
    .option(
      '--language <language>',
      chalk.white('Language (english, arabic)'),
      'english',
    )
    .option(
      '-s, --show',
      chalk.white('Show current configuration for the selected profile'),
    )
    .option('-l, --list', chalk.white('List all configuration profiles'))
    .option(
      '-d, --delete <profile>',
      chalk.white('Delete a configuration profile'),
    )
    .addHelpText(
      'after',
      [
        chalk.bold.cyan('\nSee also:'),
        chalk.gray('  rawi provider --list'),
        chalk.gray('  rawi act --list'),
        chalk.gray('  rawi ask --profile <profile>'),
        chalk.gray('  rawi configure --show --profile <profile>'),
        '',
        chalk.dim('For more examples, see: docs/configuration.md'),
      ].join('\n'),
    )
    .action(async (options) => {
      const configManager = new ConfigManager();

      try {
        if (options.show) {
          configManager.showConfig(
            options.profile === 'default' ? undefined : options.profile,
          );
          return;
        }

        if (options.list) {
          const profiles = configManager.listProfiles();
          if (profiles.length === 0) {
            console.log(chalk.yellow('No configuration profiles found.'));
            return;
          }
          console.log(chalk.bold('Available profiles:'));
          profiles.forEach((profile) => console.log(`  - ${profile}`));
          return;
        }

        if (options.delete) {
          const success = configManager.deleteProfile(options.delete);
          if (success) {
            console.log(
              chalk.green(`Profile '${options.delete}' deleted successfully.`),
            );
          } else {
            console.log(
              chalk.red(`Failed to delete profile '${options.delete}'.`),
            );
          }
          return;
        }

        if (options.language) {
          const validLanguages: SupportedLanguage[] = ['english', 'arabic'];
          if (!validLanguages.includes(options.language as SupportedLanguage)) {
            console.error(chalk.red(`Invalid language: ${options.language}`));
            console.log(
              chalk.yellow('Available languages:'),
              validLanguages.join(', '),
            );
            return;
          }
        }

        const configureOptions: ConfigureOptions = {
          profile: options.profile,
          provider: options.provider,
          model: options.model,
          apiKey: options.apiKey,
          baseURL: options.baseUrl,
          resourceName: options.resourceName,
          apiVersion: options.apiVersion,
          region: options.region,
          accessKeyId: options.accessKeyId,
          secretAccessKey: options.secretAccessKey,
          sessionToken: options.sessionToken,
          useProviderChain: options.useProviderChain,
          temperature: options.temperature,
          maxTokens: options.maxTokens,
          language: options.language as SupportedLanguage,
        };

        if (options.provider) {
          let requiredOptions: boolean;
          let credentials: RawiCredentials;

          if (options.provider === 'ollama') {
            requiredOptions = Boolean(options.model);

            const providerSettings: OllamaSettings = {};
            if (options.baseUrl) {
              providerSettings.baseURL = options.baseUrl;
            }

            credentials = {
              provider: options.provider,
              model: options.model,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
              language: (options.language as SupportedLanguage) || 'english',
              providerSettings:
                Object.keys(providerSettings).length > 0
                  ? providerSettings
                  : undefined,
            };
          } else if (options.provider === 'azure') {
            requiredOptions = Boolean(
              options.provider &&
                options.model &&
                options.apiKey &&
                options.resourceName,
            );

            if (!requiredOptions) {
              if (!options.model) {
                console.error(
                  'For Azure, you must specify your deployment name using --model',
                );
              }
              if (!options.resourceName) {
                console.error(
                  'For Azure, you must specify your resource name using --resource-name',
                );
              }
              if (!options.apiKey) {
                console.error(
                  'For Azure, you must specify your API key using --api-key',
                );
              }
            }

            const providerSettings: AzureSettings = {
              resourceName: options.resourceName,
            };

            if (options.apiVersion) {
              providerSettings.apiVersion = options.apiVersion;
            }

            credentials = {
              provider: options.provider,
              model: options.model,
              apiKey: options.apiKey,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
              language: (options.language as SupportedLanguage) || 'english',
              providerSettings: providerSettings,
            };
          } else if (options.provider === 'bedrock') {
            const hasExplicitCredentials = Boolean(
              options.accessKeyId && options.secretAccessKey,
            );
            const hasProviderChain = Boolean(options.useProviderChain);

            requiredOptions = Boolean(
              options.provider &&
                options.model &&
                (hasExplicitCredentials || hasProviderChain),
            );

            if (!requiredOptions) {
              if (!options.model) {
                console.error(
                  'For Bedrock, you must specify a model using --model',
                );
              }
              if (!hasExplicitCredentials && !hasProviderChain) {
                console.error(
                  'For Bedrock, you must either:\n' +
                    '  - Provide explicit credentials: --access-key-id and --secret-access-key\n' +
                    '  - Use provider chain: --use-provider-chain',
                );
              }
            }

            const providerSettings: BedrockSettings = {};

            if (options.region) {
              providerSettings.region = options.region;
            }

            if (hasProviderChain) {
              providerSettings.useProviderChain = true;
            } else if (hasExplicitCredentials) {
              providerSettings.accessKeyId = options.accessKeyId;
              providerSettings.secretAccessKey = options.secretAccessKey;
              if (options.sessionToken) {
                providerSettings.sessionToken = options.sessionToken;
              }
            }

            credentials = {
              provider: options.provider,
              model: options.model,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
              language: (options.language as SupportedLanguage) || 'english',
              providerSettings:
                Object.keys(providerSettings).length > 0
                  ? providerSettings
                  : undefined,
            };
          } else if (options.provider === 'qwen') {
            requiredOptions = Boolean(options.model && options.apiKey);

            const providerSettings: QwenSettings = {
              apiKey: options.apiKey,
            };
            if (options.baseUrl) {
              providerSettings.baseURL = options.baseUrl;
            }

            credentials = {
              provider: options.provider,
              model: options.model,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
              language: (options.language as SupportedLanguage) || 'english',
              providerSettings: providerSettings,
            };
          } else if (options.provider === 'xai') {
            requiredOptions = Boolean(options.model && options.apiKey);

            const providerSettings: XAISettings = {
              apiKey: options.apiKey,
            };
            if (options.baseUrl) {
              providerSettings.baseURL = options.baseUrl;
            }

            credentials = {
              provider: options.provider,
              model: options.model,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
              language: (options.language as SupportedLanguage) || 'english',
              providerSettings: providerSettings,
            };
          } else if (options.provider === 'openai') {
            requiredOptions = Boolean(options.model && options.apiKey);

            const providerSettings: OpenAISettings = {
              apiKey: options.apiKey,
            };
            if (options.baseUrl) {
              providerSettings.baseURL = options.baseUrl;
            }

            credentials = {
              provider: options.provider,
              model: options.model,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
              language: (options.language as SupportedLanguage) || 'english',
              providerSettings: providerSettings,
            };
          } else if (options.provider === 'anthropic') {
            requiredOptions = Boolean(options.model && options.apiKey);

            const providerSettings: AnthropicSettings = {
              apiKey: options.apiKey,
            };
            if (options.baseUrl) {
              providerSettings.baseURL = options.baseUrl;
            }

            credentials = {
              provider: options.provider,
              model: options.model,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
              language: (options.language as SupportedLanguage) || 'english',
              providerSettings: providerSettings,
            };
          } else if (options.provider === 'google') {
            requiredOptions = Boolean(options.model && options.apiKey);

            const providerSettings: GoogleSettings = {
              apiKey: options.apiKey,
            };
            if (options.baseUrl) {
              providerSettings.baseURL = options.baseUrl;
            }

            credentials = {
              provider: options.provider,
              model: options.model,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
              language: (options.language as SupportedLanguage) || 'english',
              providerSettings: providerSettings,
            };
          } else if (options.provider === 'lmstudio') {
            requiredOptions = Boolean(options.model);

            const providerSettings: LMStudioSettings = {};
            if (options.baseUrl) {
              providerSettings.baseURL = options.baseUrl;
            }

            credentials = {
              provider: options.provider,
              model: options.model,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
            };

            if (Object.keys(providerSettings).length > 0) {
              credentials.providerSettings = providerSettings;
            } else {
              credentials.providerSettings = undefined;
            }
          } else {
            requiredOptions = Boolean(
              options.provider && options.model && options.apiKey,
            );

            credentials = {
              provider: options.provider,
              model: options.model,
              apiKey: options.apiKey,
              temperature: options.temperature || 0.7,
              maxTokens: options.maxTokens || 2048,
              language: (options.language as SupportedLanguage) || 'english',
            };
          }

          if (requiredOptions) {
            configManager.manualConfigure(credentials, options.profile);
          } else {
            await configManager.interactiveConfigure(configureOptions);
          }
        } else {
          await configManager.interactiveConfigure(configureOptions);
        }
      } catch (error) {
        console.error('Configuration failed:', error);
        process.exit(1);
      }
    });

  return command;
};
