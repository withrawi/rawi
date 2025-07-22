import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const batchOption: CommandOption = {
  flags: '-b, --batch <patterns...>',
  description: chalk.white(
    'Process files matching glob patterns (e.g., "src/**/*.js" "docs/*.md")',
  ),
};
