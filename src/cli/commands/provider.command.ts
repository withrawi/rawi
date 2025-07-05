import {select} from '@inquirer/prompts';
import chalk from 'chalk';
import Table from 'cli-table3';
import {Command} from 'commander';
import {
  getAllProviders,
  getProvider,
} from '../../core/config/providers/index.js';

export const createProviderCommand = (): Command => {
  const command = new Command('provider');

  command
    .description(
      [
        chalk.bold(
          'Show information about supported AI providers and their models.',
        ),
        '',
        chalk.gray(
          'Use this to discover available providers and their capabilities.',
        ),
      ].join('\n'),
    )
    .option('-l, --list', chalk.white('List all supported AI providers'))
    .option(
      '-m, --list-models <provider>',
      chalk.white('List all models for a specific provider'),
    )
    .addHelpText(
      'after',
      [
        chalk.bold.cyan('\nSee also:'),
        chalk.gray('  rawi configure --show'),
        chalk.gray('  rawi act --list'),
        chalk.gray('  rawi ask --profile <profile>'),
      ].join('\n'),
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
        const table = new Table({
          head: [
            chalk.cyan('Provider'),
            chalk.cyan('Icon'),
            chalk.cyan('Display Name'),
            chalk.cyan('Models'),
          ],
          style: {head: ['cyan']},
          colWidths: [16, 8, 24, 10],
          wordWrap: true,
        });
        const pageSize = 10;
        let page = 0;
        const totalPages = Math.ceil(providers.length / pageSize);

        const renderPage = (pageIdx: number) => {
          table.length = 0;
          providers
            .slice(pageIdx * pageSize, (pageIdx + 1) * pageSize)
            .forEach((provider) => {
              const icon =
                providerIcons[provider.name as keyof typeof providerIcons] ||
                '';
              const modelCount = provider.models ? provider.models.length : 0;
              let display = provider.displayName || provider.name;
              if (display.startsWith(icon)) {
                display = display.slice(icon.length).trim();
              }
              table.push([
                chalk.cyan(provider.name),
                icon,
                display,
                chalk.gray(`[${modelCount}]`),
              ]);
            });
          console.log(table.toString());
          console.log(chalk.gray(`Page ${pageIdx + 1} of ${totalPages}`));
        };

        if (providers.length > pageSize) {
          let exit = false;
          while (!exit) {
            renderPage(page);
            const choices = [];
            if (page > 0) choices.push({name: 'Previous', value: 'prev'});
            if (page < totalPages - 1)
              choices.push({name: 'Next', value: 'next'});
            choices.push({name: 'Exit', value: 'exit'});
            const nav = await select({
              message: 'Navigate pages:',
              choices,
              default: page < totalPages - 1 ? 'next' : 'exit',
            });
            if (nav === 'prev') page--;
            else if (nav === 'next') page++;
            else exit = true;
            if (!exit) console.clear();
          }
        } else {
          renderPage(0);
        }
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
          const pageSize = 20;
          let page = 0;
          const totalPages = Math.ceil(modelCount / pageSize);
          const renderPage = (pageIdx: number) => {
            const table = new Table({
              head: [chalk.cyan('Model Name'), chalk.cyan('Description')],
              style: {head: ['cyan']},
              colWidths: [28, 48],
              wordWrap: true,
            });
            provider.models
              .slice(pageIdx * pageSize, (pageIdx + 1) * pageSize)
              .forEach((model) => {
                table.push([
                  chalk.cyan(model.name),
                  model.description ? chalk.gray(model.description) : '',
                ]);
              });
            console.log(table.toString());
            console.log(chalk.gray(`Page ${pageIdx + 1} of ${totalPages}`));
          };
          if (modelCount > pageSize) {
            let exit = false;
            while (!exit) {
              renderPage(page);
              const choices = [];
              if (page > 0) choices.push({name: 'Previous', value: 'prev'});
              if (page < totalPages - 1)
                choices.push({name: 'Next', value: 'next'});
              choices.push({name: 'Exit', value: 'exit'});
              const nav = await select({
                message: 'Navigate pages:',
                choices,
                default: page < totalPages - 1 ? 'next' : 'exit',
              });
              if (nav === 'prev') page--;
              else if (nav === 'next') page++;
              else exit = true;
              if (!exit) console.clear();
            }
          } else {
            renderPage(0);
          }
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
