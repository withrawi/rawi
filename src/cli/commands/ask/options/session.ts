import type { CommandOption } from '../types.js';
import chalk from 'chalk';

export const sessionOption: CommandOption = {
  flags: '-s, --session <sessionId>',
  description: chalk.white('Continue an existing chat session'),
};
