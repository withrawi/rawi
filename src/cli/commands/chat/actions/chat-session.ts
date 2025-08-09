import chalk from 'chalk';
import type {DatabaseManager} from '../../../../core/database/manager.js';
import type {ChatOptions} from '../types.js';
import {startEnhancedChatSession} from './enhanced-chat-session.js';

/**
 * Main entry point for chat sessions with enhanced session management
 */
export const startChatSession = async (
  dbManager: DatabaseManager,
  options: ChatOptions,
): Promise<void> => {
  if (options.verbose) {
    console.log(
      chalk.dim('🚀 Starting enhanced chat session with session management...'),
    );
  }

  // Use the enhanced chat session handler which includes all session management features
  await startEnhancedChatSession(dbManager, options);
};
