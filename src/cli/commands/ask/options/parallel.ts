import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const parallelOption: CommandOption = {
  flags: '--parallel',
  description: chalk.white(
    'Process multiple files in parallel (faster for many files)',
  ),
};
