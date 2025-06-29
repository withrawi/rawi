import {select} from '@inquirer/prompts';
import chalk from 'chalk';
import Table from 'cli-table3';
import {Command} from 'commander';
import {actTemplates} from '../../template/index.js';
import {showActTemplate} from '../../template/utils.js';

export const createActCommand = (): Command => {
  const actCommand = new Command('act');

  actCommand
    .description(
      [
        chalk.bold('List and explore act templates for specialized prompts.'),
        '',
        chalk.gray('Use these to quickly apply expert prompt patterns.'),
        chalk.gray(
          'Use --list to see all templates, --show <template> for details.',
        ),
      ].join('\n'),
    )
    .option('-l, --list', chalk.white('List all available act templates'))
    .option(
      '-s, --show <template>',
      chalk.white('Show details of a specific act template'),
    )
    .addHelpText(
      'after',
      [
        chalk.bold.cyan('\nSee also:'),
        chalk.gray('  rawi ask --profile <profile> --act <template> <query>'),
        chalk.gray('  rawi configure --show'),
        chalk.gray('  rawi provider --list'),
        chalk.gray('  rawi act --list'),
      ].join('\n'),
    )
    .action(async (options) => {
      if (options.list) {
        const templates: Array<{
          id: string;
          label: string;
          category: string;
          description?: string;
        }> = actTemplates;
        if (!templates || templates.length === 0) {
          console.log(chalk.yellow('No act templates found.'));
          return;
        }
        const pageSize = 10;
        let page = 0;
        const totalPages = Math.ceil(templates.length / pageSize);
        const table = new Table({
          head: [
            chalk.cyan('ID'),
            chalk.cyan('Label'),
            chalk.cyan('Category'),
            chalk.cyan('Description'),
          ],
          style: {head: ['cyan']},
          colWidths: [40, 22, 18, 36],
          wordWrap: true,
        });
        const renderPage = (pageIdx: number) => {
          table.length = 0;
          templates
            .slice(pageIdx * pageSize, (pageIdx + 1) * pageSize)
            .forEach((tpl) => {
              table.push([
                chalk.cyan(tpl.id),
                tpl.label,
                tpl.category,
                tpl.description || '',
              ]);
            });
          console.log(table.toString());
          console.log(chalk.gray(`Page ${pageIdx + 1} of ${totalPages}`));
        };
        if (templates.length > pageSize) {
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
      if (options.show) {
        showActTemplate(options.show);
        return;
      }
      actCommand.help();
    });

  return actCommand;
};
