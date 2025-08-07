import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const showFilteredOption: CommandOption = {
  flags: '--show-filtered',
  description: chalk.white(
    'Show which information was filtered and display filtering statistics',
  ),
};
