import type {CommandOption} from '../types.js';
import chalk from 'chalk';

export const showFilteredOption: CommandOption = {
  flags: '--show-filtered',
  description: chalk.white(
    'Show which information was filtered and display filtering statistics',
  ),
};
