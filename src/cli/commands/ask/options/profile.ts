import type { CommandOption } from '../types.js';
import chalk from 'chalk';
import {DEFAULT_PROFILE} from '../../../../core/shared/constants.js';

export const profileOption: CommandOption = {
  flags: '-p, --profile <profile>',
  description: chalk.white('Profile to use for AI configuration'),
  defaultValue: DEFAULT_PROFILE,
};
