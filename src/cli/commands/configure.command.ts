import {Command} from 'commander';
import {ConfigManager} from '../../config/manager.js';
import type {
  AnthropicSettings,
  AzureSettings,
  BedrockSettings,
  ConfigureOptions,
  GoogleSettings,
  OllamaSettings,
  OpenAISettings,
  QwenSettings,
  RawiCredentials,
  SupportedLanguage,
  XAISettings,
} from '../../shared/types.js';

export const createConfigureCommand = (): Command => {
  const command = new Command('configure');

  command
    .description(
      'Configure Rawi AI settings and manage profiles. Use this to set up providers, models, and credentials.',
    )
    .option('-p, --profile <profile>', 'Configuration profile name', 'default')
    .option(
      '--provider <provider>',
      'AI provider (openai, anthropic, google, ollama, xai, azure, bedrock, qwen)',
    )
    .option('--model <model>', 'AI model name')
    .option(
      '--api-key <apiKey>',
      'API key for the provider (not needed for Ollama)',
    )
    .option(
      '--base-url <baseURL>',
      'Base URL for Ollama (default: http://localhost:11434/api), OpenAI (default: https://api.openai.com/v1), Anthropic (default: https://api.anthropic.com), Google (default: https://generativelanguage.googleapis.com/v1beta), Qwen (default: https://dashscope-intl.aliyuncs.com/compatible-mode/v1), or xAI (default: https://api.x.ai/v1)',
    )
    .option(
      '--resource-name <resourceName>',
      'Resource name for Azure OpenAI (required for Azure)',
    )
    .option(
      '--api-version <apiVersion>',
      'API version for Azure OpenAI (default: 2024-10-01-preview)',
    )
    .option(
      '--region <region>',
      'AWS region for Amazon Bedrock (default: us-east-1)',
    )
    .option(
      '--access-key-id <accessKeyId>',
      'AWS access key ID for Amazon Bedrock',
    )
    .option(
      '--secret-access-key <secretAccessKey>',
      'AWS secret access key for Amazon Bedrock',
    )
    .option(
      '--session-token <sessionToken>',
      'AWS session token for Amazon Bedrock (optional)',
    )
    .option(
      '--use-provider-chain',
      'Use AWS credential provider chain instead of explicit credentials',
    )
    .option(
      '--temperature <temperature>',
      'Temperature value (0-2)',
      Number.parseFloat,
    )
    .option('--max-tokens <maxTokens>', 'Maximum tokens', Number.parseInt)
    .option(
      '--language <language>',
      'Language setting (english, arabic)',
      'english',
    )
    .option('-s, --show', 'Show current configuration')
    .option('-l, --list', 'List all profiles')
    .option('-d, --delete <profile>', 'Delete a configuration profile')
    .addHelpText(
      'after',
      '\nSee also:\n  rawi provider --list\n  rawi act --list\n  rawi ask --profile <profile>\n',
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
            console.log('No profiles found.');
            return;
          }

          console.log('Available profiles:');
          profiles.forEach((profile) => console.log(`  - ${profile}`));
          return;
        }

        if (options.delete) {
          const success = configManager.deleteProfile(options.delete);
          if (success) {
            console.log(`Profile '${options.delete}' deleted successfully.`);
          } else {
            console.log(`Profile '${options.delete}' not found.`);
          }
          return;
        }

        if (options.language) {
          const validLanguages: SupportedLanguage[] = ['english', 'arabic'];
          if (!validLanguages.includes(options.language as SupportedLanguage)) {
            console.error(`Invalid language: ${options.language}`);
            console.log('Available languages:', validLanguages.join(', '));
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
