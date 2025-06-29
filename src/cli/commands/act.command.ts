import {Command} from 'commander';
import {listActTemplates, showActTemplate} from '../../template/utils.js';

export const createActCommand = (): Command => {
  const actCommand = new Command('act');

  actCommand
    .description(
      'List and explore act templates for specialized prompts. Use these to quickly apply expert prompt patterns.',
    )
    .option('--list', 'List all available act templates')
    .option('--show <template>', 'Show details of a specific act template')
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
