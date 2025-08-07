import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const sessionOption: CommandOption = {
  flags: '-s, --session <sessionId>',
  description: chalk.white('Continue an existing chat session'),
};
