import chalk from 'chalk';
import type {DatabaseManager} from '../../../../core/database/manager.js';
import type {ChatOptions} from '../types.js';
import {startEnhancedChatSession} from './enhanced-chat-session.js';

export const startChatSession = async (
  dbManager: DatabaseManager,
  options: ChatOptions,
): Promise<void> => {
  if (options.verbose) {
    console.log(
      chalk.dim('🚀 Starting enhanced chat session with session management...'),
    );
  }

  await startEnhancedChatSession(dbManager, options);
};
