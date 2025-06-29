import {Command} from 'commander';
import {listActTemplates, showActTemplate} from '../../template/utils.js';

export const createActCommand = (): Command => {
  const actCommand = new Command('act');

  actCommand
    .description('Manage and explore act templates for specialized prompts.')
    .option('--list', 'List all available act templates')
    .option('--show <template>', 'Show details of the specified act template')
    .action((options) => {
      if (options.list) {
        listActTemplates();
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
