import type {CommandOption} from '../types.js';
import chalk from 'chalk';

export const parallelOption: CommandOption = {
  flags: '--parallel',
  description: chalk.white(
    'Process multiple files in parallel (faster for many files)',
  ),
};
