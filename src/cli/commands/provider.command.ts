import chalk from 'chalk';
import {Command} from 'commander';
import {getAllProviders, getProvider} from '../../config/providers/index.js';

export const createProviderCommand = (): Command => {
  const command = new Command('provider');

  command
    .description(
      'Show information about supported AI providers and their models. Use this to discover available providers and their capabilities.',
    )
    .option('--list', 'List all supported AI providers')
    .option(
      '--list-models <provider>',
      'List all models for a specific provider',
    )
    .action(async (options) => {
      if (options.list) {
        const providers = getAllProviders();
        console.log(chalk.bold.blue('\nSupported AI Providers:'));
        const providerIcons: Record<string, string> = {
          anthropic: '🟣',
          azure: '🔷',
          bedrock: '🟠',
          google: '🔴',
          ollama: '🟢',
          openai: '🔵',
          qwen: '🟡',
          xai: '🤖',
        };
        providers.forEach((provider) => {
          const icon =
            providerIcons[provider.name as keyof typeof providerIcons] || '';
          const modelCount = provider.models ? provider.models.length : 0;
          let display = provider.displayName || provider.name;
          if (display.startsWith(icon)) {
            display = display.slice(icon.length).trim();
          }
          console.log(
            `- ${chalk.cyan(provider.name)} (${icon} ${display}) ${chalk.gray(`[${modelCount} models]`)}`,
          );
        });
        return;
      }
      if (options.listModels) {
        try {
          const provider = getProvider(options.listModels);
          if (!provider) {
            console.error(
              chalk.red(`Provider '${options.listModels}' not found.`),
            );
            return;
          }
          const modelCount = provider.models ? provider.models.length : 0;
          console.log(
            chalk.bold.blue(
              `\nModels for provider '${provider.name}' [${modelCount} models]:`,
            ),
          );
          provider.models.forEach((model) => {
            console.log(`- ${chalk.cyan(model.name)}`);
          });
        } catch (err) {
          console.error(
            chalk.red(
              `Error: ${err instanceof Error ? err.message : String(err)}`,
            ),
          );
        }
        return;
      }
      command.help();
    });

  return command;
};
