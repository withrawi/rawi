import type {CommandOption} from '../types.js';
import {actOption} from './act.js';
import {profileOption} from './profile.js';
import {verboseOption} from './verbose.js';

export {actOption} from './act.js';
export {profileOption} from './profile.js';
export {verboseOption} from './verbose.js';

export const chatCommandOptions: CommandOption[] = [
  profileOption,
  actOption,
  verboseOption,
];
