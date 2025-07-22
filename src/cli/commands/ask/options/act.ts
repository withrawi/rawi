import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const actOption: CommandOption = {
  flags: '--act <template>',
  description: chalk.white('Use an act template (e.g., ethereum-developer)'),
};
