import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const newSessionOption: CommandOption = {
  flags: '-n, --new-session',
  description: chalk.white('Start a new chat session'),
};
