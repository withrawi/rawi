import {createDeepSeek} from '@ai-sdk/deepseek';
import type {ModelMessage} from 'ai';
import {streamText} from 'ai';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
} from './types.js';

export const deepseekChatProvider: ChatProvider = {
  name: 'deepseek',
  displayName: '🔵 DeepSeek',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const apiKey = settings.apiKey || credentials.apiKey;
    const baseURL = settings.baseURL || 'https://api.deepseek.com/v1';

    if (!apiKey) {
      throw new Error('API key is required for DeepSeek');
    }

    const deepseekProvider = createDeepSeek({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: deepseekProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};
