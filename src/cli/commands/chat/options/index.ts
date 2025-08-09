import type {CommandOption} from '../types.js';
import {actOption} from './act.js';
import {
  archiveOption,
  backupOption,
  batchDeleteOption,
  formatOption,
  fromDateOption,
  limitOption,
  restoreOption,
  statsOption,
  toDateOption,
} from './advanced.js';
import {profileOption} from './profile.js';
import {
  deleteSessionOption,
  exportSessionsOption,
  listSessionsOption,
  newSessionOption,
  newTitleOption,
  renameSessionOption,
  sessionOption,
} from './session.js';
import {verboseOption} from './verbose.js';

export {actOption} from './act.js';
export * from './advanced.js';
export {profileOption} from './profile.js';
export * from './session.js';
export {verboseOption} from './verbose.js';

export const chatCommandOptions: CommandOption[] = [
  profileOption,
  actOption,
  verboseOption,

  sessionOption,
  newSessionOption,
  listSessionsOption,
  deleteSessionOption,
  exportSessionsOption,
  renameSessionOption,
  newTitleOption,

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
