import chalk from 'chalk';
import {Command} from 'commander';
import {DatabaseManager} from '../../core/database/manager.js';
import {chatCommandOptions, startChatSession} from './chat/index.js';
import type {ChatOptions} from './chat/types.js';

export const createChatCommand = (): Command => {
  const chatCommand = new Command('chat');

  chatCommand.description(
    [
      chalk.bold('Start an interactive chat session with AI.'),
      '',
      chalk.gray('Engage in back-and-forth conversations with AI models.'),
      chalk.gray('Use --act <template> for expert prompt templates.'),
      chalk.gray('Type /quit or /exit to end the chat session.'),
      '─'.repeat(80),
    ].join('\n'),
  );

  chatCommandOptions.forEach((option) => {
    if ('defaultValue' in option && option.defaultValue !== undefined) {
      chatCommand.option(option.flags, option.description, option.defaultValue);
    } else {
      chatCommand.option(option.flags, option.description);
    }
  });

  chatCommand.action(async (options: ChatOptions) => {
    let dbManager: DatabaseManager | null = null;

    try {
      if (options.verbose) {
        console.log(chalk.dim('🚀 Starting chat session...'));
      }

      dbManager = new DatabaseManager();
      await startChatSession(dbManager, options);
    } catch (error) {
      if (options.verbose) {
        console.error('Error in chat session:', error);
      }
      process.exit(1);
    } finally {
      if (dbManager) {
        dbManager.close();
      }
    }
  });

  return chatCommand;
};
