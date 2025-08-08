import {createXai} from '@ai-sdk/xai';
import type {ModelMessage} from 'ai';
import {streamText} from 'ai';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
} from './types.js';

export const xaiChatProvider: ChatProvider = {
  name: 'xai',
  displayName: '🤖 xAI (Grok)',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const apiKey = settings.apiKey || credentials.apiKey;
    const baseURL = settings.baseURL || 'https://api.x.ai/v1';

    if (!apiKey) {
      throw new Error('API key is required for xAI');
    }

    const xaiProvider = createXai({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: xaiProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};
