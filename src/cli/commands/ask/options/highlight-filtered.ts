import type { CommandOption } from '../types.js';
import chalk from 'chalk';

export const highlightFilteredOption: CommandOption = {
  flags: '--highlight-filtered',
  description: chalk.white('Show filtered content with highlighting in terminal output'),
};
