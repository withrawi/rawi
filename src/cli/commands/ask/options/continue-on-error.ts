import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const continueOnErrorOption: CommandOption = {
  flags: '--continue-on-error',
  description: chalk.white('Continue processing other files if one fails'),
};
