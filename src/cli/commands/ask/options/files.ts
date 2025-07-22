import type { CommandOption } from '../types.js';
import chalk from 'chalk';

export const filesOption: CommandOption = {
  flags: '-F, --files <paths...>',
  description: chalk.white('Process content from multiple files'),
};
