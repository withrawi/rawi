import type {CommandOption} from '../types.js';
import chalk from 'chalk';

export const filterSensitiveOption: CommandOption = {
  flags: '--filter-sensitive',
  description: chalk.white(
    'Filter sensitive information from prompts and responses',
  ),
};
