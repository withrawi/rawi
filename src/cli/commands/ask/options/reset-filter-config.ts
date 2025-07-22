import type {CommandOption} from '../types.js';
import chalk from 'chalk';

export const resetFilterConfigOption: CommandOption = {
  flags: '--reset-filter-config',
  description: chalk.white(
    'Reset filtering configuration to defaults (enables all filter types)',
  ),
};
