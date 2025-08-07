import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const filesOption: CommandOption = {
  flags: '-F, --files <paths...>',
  description: chalk.white('Process content from multiple files'),
};
