import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const filterSensitiveOption: CommandOption = {
  flags: '--filter-sensitive',
  description: chalk.white(
    'Filter sensitive information from prompts and responses',
  ),
};
