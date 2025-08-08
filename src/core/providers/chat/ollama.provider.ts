import type {ModelMessage} from 'ai';
import {streamText} from 'ai';
import {ollama} from '../../../libs/providers/ollama/index.js';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
} from './types.js';

export const ollamaChatProvider: ChatProvider = {
  name: 'ollama',
  displayName: '🟢 Ollama',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const ollamaSettings: Record<string, any> = {};

    if (
      credentials.providerSettings &&
      'baseURL' in credentials.providerSettings
    ) {
      ollamaSettings.baseURL = credentials.providerSettings.baseURL;
    }

    const result = streamText({
      model: ollama(credentials.model, ollamaSettings),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};
