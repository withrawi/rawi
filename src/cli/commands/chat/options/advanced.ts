import type {CommandOption} from '../types.js';

export const limitOption: CommandOption = {
  flags: '--limit <number>',
  description: 'Limit the number of sessions returned',
  defaultValue: '10',
};

export const fromDateOption: CommandOption = {
  flags: '--from-date <date>',
  description: 'Filter sessions created after this date (YYYY-MM-DD)',
};

export const toDateOption: CommandOption = {
  flags: '--to-date <date>',
  description: 'Filter sessions created before this date (YYYY-MM-DD)',
};

export const formatOption: CommandOption = {
  flags: '--format <type>',
  description: 'Output format for session operations (json|table|summary)',
  defaultValue: 'table',
};

export const statsOption: CommandOption = {
  flags: '--stats',
  description: 'Show session statistics and analytics',
  defaultValue: false,
};

export const backupOption: CommandOption = {
  flags: '--backup <path>',
  description: 'Backup all sessions to specified path',
};

export const restoreOption: CommandOption = {
  flags: '--restore <path>',
  description: 'Restore sessions from backup file',
};

export const batchDeleteOption: CommandOption = {
  flags: '--batch-delete <pattern>',
  description: 'Delete multiple sessions matching pattern',
};

export const archiveOption: CommandOption = {
  flags: '--archive',
  description: 'Archive old sessions instead of deleting them',
  defaultValue: false,
};
