import type {CommandOption} from '../types.js';
import chalk from 'chalk';

export const filterTypesOption: CommandOption = {
  flags: '--filter-types <types>',
  description: chalk.white(
    'Comma-separated list of information types to filter (e.g., email,phone,creditcard)',
  ),
};
