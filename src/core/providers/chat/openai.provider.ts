import {createOpenAI} from '@ai-sdk/openai';
import type {ModelMessage} from 'ai';
import {streamText} from 'ai';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
} from './types.js';

export const openaiChatProvider: ChatProvider = {
  name: 'openai',
  displayName: '🔵 OpenAI (GPT)',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const apiKey = settings.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for OpenAI');
    }

    const openaiProvider = createOpenAI({
      apiKey: apiKey,
      baseURL: settings.baseURL || 'https://api.openai.com/v1',
    });

    const result = streamText({
      model: openaiProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};
