import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const verboseOption: CommandOption = {
  flags: '--verbose',
  description: chalk.white('Show detailed status and debug information'),
};
