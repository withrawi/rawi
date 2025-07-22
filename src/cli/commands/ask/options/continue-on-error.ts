import type {CommandOption} from '../types.js';
import chalk from 'chalk';

export const continueOnErrorOption: CommandOption = {
  flags: '--continue-on-error',
  description: chalk.white('Continue processing other files if one fails'),
};
