import {createAzure} from '@ai-sdk/azure';
import type {ModelMessage} from 'ai';
import {streamText} from 'ai';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
} from './types.js';

export const azureChatProvider: ChatProvider = {
  name: 'azure',
  displayName: '🔷 Azure OpenAI',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const apiKey = settings.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Azure OpenAI');
    }

    if (!settings.resourceName) {
      throw new Error('Azure resource name is required');
    }

    const resourceName = settings.resourceName;
    const apiVersion = settings.apiVersion || '2024-10-01-preview';

    const azureProvider = createAzure({
      apiKey: apiKey,
      resourceName: resourceName,
      apiVersion: apiVersion,
    });

    const result = streamText({
      model: azureProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};
