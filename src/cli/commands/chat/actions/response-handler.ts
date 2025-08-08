import type {ModelMessage} from 'ai';
import chalk from 'chalk';
import {getChatProvider} from '../../../../core/providers/chat/index.js';
import {spinnerManager} from '../../../../core/shared/spinner.js';
import type {ChatOptions} from '../types.js';
import type {ChatMessage} from './chat-session.js';

export const streamChatResponse = async (
  credentials: any,
  messages: ChatMessage[],
  options: ChatOptions,
  terminal?: any,
): Promise<string> => {
  try {
    const modelMessages: ModelMessage[] = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    if (options.verbose) {
      spinnerManager.start('chat-response', 'Getting AI response...');
    }

    const chatProvider = getChatProvider(credentials.provider);

    const textStream = await chatProvider.streamChat(
      credentials,
      modelMessages,
    );

    let fullResponse = '';

    if (options.verbose) {
      spinnerManager.stop('chat-response');
    }

    if (terminal && typeof terminal.pause === 'function') {
      terminal.pause();
    }

    process.stdout.write(chalk.blue('\nAssistant: '));

    for await (const delta of textStream) {
      fullResponse += delta;
      process.stdout.write(delta);
    }

    process.stdout.write('\n\n');

    if (terminal && typeof terminal.resume === 'function') {
      terminal.resume();
    }

    return fullResponse;
  } catch (error) {
    if (options.verbose) {
      spinnerManager.fail('chat-response', 'Failed to get response');
    }

    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(chalk.red(`❌ Error getting AI response: ${errorMessage}`));

    if (options.verbose && error instanceof Error && error.stack) {
      console.error(chalk.dim('Stack trace:'));
      console.error(chalk.dim(error.stack));
    }

    throw error;
  }
};
