import {createAmazonBedrock} from '@ai-sdk/amazon-bedrock';
import type {ModelMessage} from 'ai';
import {streamText} from 'ai';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
} from './types.js';

export const bedrockChatProvider: ChatProvider = {
  name: 'bedrock',
  displayName: '🟠 Amazon Bedrock',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const accessKeyId = settings.accessKeyId || credentials.apiKey;
    const secretAccessKey = settings.secretAccessKey;
    const region = settings.region || 'us-east-1';

    if (!accessKeyId || !secretAccessKey) {
      throw new Error(
        'AWS access key ID and secret access key are required for Amazon Bedrock',
      );
    }

    const bedrockProvider = createAmazonBedrock({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
    });

    const result = streamText({
      model: bedrockProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};
