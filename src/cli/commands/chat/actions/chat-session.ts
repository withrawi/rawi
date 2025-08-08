import * as readline from 'node:readline/promises';
import chalk from 'chalk';
import type {DatabaseManager} from '../../../../core/database/manager.js';
import {DEFAULT_PROFILE} from '../../../../core/shared/constants.js';
import {
  processActTemplate,
  validateCredentials,
  validateProfile,
} from '../../ask/actions/index.js';
import type {ChatOptions} from '../types.js';
import {streamChatResponse} from './response-handler.js';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const startChatSession = async (
  _dbManager: DatabaseManager,
  options: ChatOptions,
): Promise<void> => {
  const profile = options.profile || DEFAULT_PROFILE;
  validateProfile(profile, options);

  const credentials = validateCredentials(profile, options);

  if (options.verbose) {
    console.log(
      chalk.dim(
        `🔗 Connected to ${credentials.provider} (${credentials.model})`,
      ),
    );
    console.log(chalk.dim(`📁 Profile: ${profile}`));
    if (options.act) {
      console.log(chalk.dim(`🎭 Act template: ${options.act}`));
    }
    console.log(chalk.dim('💬 Type "/quit" or "/exit" to end the chat\n'));
  }

  const messages: ChatMessage[] = [];

  if (options.act) {
    try {
      const systemPrompt = processActTemplate(options.act, '', options);
      if (systemPrompt?.trim()) {
        messages.push({
          role: 'assistant',
          content: `I'm now acting as: ${options.act}. How can I help you?`,
        });

        if (options.verbose) {
          console.log(chalk.dim(`🎭 Applied act template: ${options.act}`));
        }
      }
    } catch (error) {
      console.error(chalk.red(`❌ Error applying act template: ${error}`));
      return;
    }
  }

  console.log(chalk.bold.blue('🤖 Welcome to Rawi Chat!'));
  console.log(
    chalk.gray(
      'Start typing your message. Use /quit or /exit to end the chat.\n',
    ),
  );

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    while (true) {
      let userInput: string;

      try {
        userInput = await terminal.question(chalk.blue('You: '));
      } catch (error) {
        if (
          error instanceof Error &&
          'code' in error &&
          error.code === 'ERR_USE_AFTER_CLOSE'
        ) {
          console.log(chalk.yellow('\n👋 Chat session ended (stdin closed)'));
          break;
        }
        throw error;
      }

      if (userInput.trim() === '/quit' || userInput.trim() === '/exit') {
        console.log(chalk.yellow('\n👋 Goodbye!'));
        break;
      }

      if (userInput.trim() === '/help') {
        console.log(chalk.cyan('\n📚 Chat Commands:'));
        console.log(chalk.gray('  /help  - Show this help message'));
        console.log(chalk.gray('  /quit  - Exit the chat'));
        console.log(chalk.gray('  /exit  - Exit the chat'));
        console.log(chalk.gray('  /clear - Clear message history'));
        console.log('');
        continue;
      }

      if (userInput.trim() === '/clear') {
        messages.length = 0;
        console.log(chalk.dim('🧹 Message history cleared\n'));
        continue;
      }

      if (userInput.trim() === '') {
        continue;
      }

      messages.push({
        role: 'user',
        content: userInput.trim(),
      });

      try {
        const assistantResponse = await streamChatResponse(
          credentials,
          messages,
          options,
          terminal,
        );

        messages.push({
          role: 'assistant',
          content: assistantResponse,
        });
      } catch (error) {
        console.error(chalk.red(`❌ Error: ${error}`));
      }
    }
  } catch (error) {
    console.error(chalk.red(`❌ Error in chat session: ${error}`));
  } finally {
    terminal.close();
  }
};
