import chalk from 'chalk';
import type {CommandOption} from '../types.js';

export const saveFilterConfigOption: CommandOption = {
  flags: '--save-filter-config',
  description: chalk.white(
    'Save current filtering configuration as default for future use',
  ),
};
