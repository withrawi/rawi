import {createOpenAICompatible as createLMStudio} from '@ai-sdk/lmstudio';
import type {ModelMessage} from 'ai';
import {streamText} from 'ai';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
} from './types.js';

export const lmstudioChatProvider: ChatProvider = {
  name: 'lmstudio',
  displayName: '🔗 LM Studio',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const baseURL = settings.baseURL || 'http://localhost:1234/v1';

    const lmstudioProvider = createLMStudio({
      name: 'lmstudio',
      baseURL: baseURL,
    });

    const result = streamText({
      model: lmstudioProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};
