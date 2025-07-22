import type { CommandOption } from '../types.js';
import chalk from 'chalk';

export const newSessionOption: CommandOption = {
  flags: '-n, --new-session',
  description: chalk.white('Start a new chat session'),
};
