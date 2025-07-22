import type {CommandOption} from '../types.js';
import chalk from 'chalk';

export const actOption: CommandOption = {
  flags: '--act <template>',
  description: chalk.white('Use an act template (e.g., ethereum-developer)'),
};
