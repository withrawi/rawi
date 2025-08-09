import {createMistral} from '@ai-sdk/mistral';
import type {ModelMessage} from 'ai';
import {streamText} from 'ai';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
} from './types.js';

export const mistralChatProvider: ChatProvider = {
  name: 'mistral',
  displayName: '🟠 Mistral AI',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const apiKey = settings.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Mistral');
    }

    const mistralProvider = createMistral({
      apiKey: apiKey,
    });

    const result = streamText({
      model: mistralProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};
