import type {CommandOption} from '../types.js';
import chalk from 'chalk';

export const verboseOption: CommandOption = {
  flags: '--verbose',
  description: chalk.white('Show detailed status and debug information'),
};
