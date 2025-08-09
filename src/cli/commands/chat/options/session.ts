import type {CommandOption} from '../types.js';

export const sessionOption: CommandOption = {
  flags: '--session <id>',
  description: 'Continue a specific chat session by ID or name',
};

export const newSessionOption: CommandOption = {
  flags: '--new-session',
  description: 'Force creation of a new chat session',
  defaultValue: false,
};

export const listSessionsOption: CommandOption = {
  flags: '--list-sessions',
  description: 'List all available chat sessions',
  defaultValue: false,
};

export const deleteSessionOption: CommandOption = {
  flags: '--delete-session <id>',
  description: 'Delete a specific chat session by ID or name',
};

export const exportSessionsOption: CommandOption = {
  flags: '--export-sessions [format]',
  description: 'Export chat sessions (format: json|markdown)',
  defaultValue: false,
};

export const renameSessionOption: CommandOption = {
  flags: '--rename-session <id>',
  description: 'Rename a specific chat session by ID',
};

export const newTitleOption: CommandOption = {
  flags: '--new-title <title>',
  description: 'New title for session rename operation',
};
