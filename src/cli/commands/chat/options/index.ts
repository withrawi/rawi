import type {CommandOption} from '../types.js';
import {actOption} from './act.js';
import {profileOption} from './profile.js';
import {verboseOption} from './verbose.js';
import {
  sessionOption,
  newSessionOption,
  listSessionsOption,
  deleteSessionOption,
  exportSessionsOption,
  renameSessionOption,
  newTitleOption,
} from './session.js';
import {
  limitOption,
  fromDateOption,
  toDateOption,
  formatOption,
  statsOption,
  backupOption,
  restoreOption,
  batchDeleteOption,
  archiveOption,
} from './advanced.js';

export {actOption} from './act.js';
export {profileOption} from './profile.js';
export {verboseOption} from './verbose.js';
export * from './session.js';
export * from './advanced.js';

export const chatCommandOptions: CommandOption[] = [
  // Core options
  profileOption,
  actOption,
  verboseOption,

  // Session management options
  sessionOption,
  newSessionOption,
  listSessionsOption,
  deleteSessionOption,
  exportSessionsOption,
  renameSessionOption,
  newTitleOption,

  // Advanced options
  limitOption,
  fromDateOption,
  toDateOption,
  formatOption,
  statsOption,
  backupOption,
  restoreOption,
  batchDeleteOption,
  archiveOption,
];
