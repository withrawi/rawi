import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const highlightFilteredOption: CommandOption = {
  flags: '--highlight-filtered',
  description: chalk.white(
    'Show filtered content with highlighting in terminal output',
  ),
};
