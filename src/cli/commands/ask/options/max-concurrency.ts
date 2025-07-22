import type {CommandOption} from '../types.js';
import chalk from 'chalk';

export const maxConcurrencyOption: CommandOption = {
  flags: '--max-concurrency <number>',
  description: chalk.white(
    'Maximum number of files to process concurrently (default: 5)',
  ),
  defaultValue: '5',
};
