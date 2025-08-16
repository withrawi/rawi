import {createDeepSeek, type deepseek} from '@ai-sdk/deepseek';
import type {ModelMessage} from 'ai';
import {generateText, streamText} from 'ai';
import {parseCommandFromResponse} from '../exec/parser.js';
import type {
  DeepSeekSettings,
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
  StreamingResponse,
} from '../shared/index.js';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
  ExecGenerationOptions,
  ExecGenerationResult,
} from './types.js';

type LooseDeepSeekModelId = Parameters<typeof deepseek>[0];
export type DeepSeekModelId = LooseToStrict<LooseDeepSeekModelId>;

export const deepSeekModelIds = ['deepseek-chat', 'deepseek-reasoner'] as const;

export const deepSeekModels: ModelInfo[] = deepSeekModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const deepSeekProvider = {
  name: 'deepseek' as const,
  displayName: '🔵 DeepSeek',
  models: deepSeekModels,
};

export const streamWithDeepSeek = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const settings = credentials.providerSettings as
      | DeepSeekSettings
      | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;

    if (!credentials.apiKey) {
      throw new Error('API key is required for DeepSeek');
    }

    const baseURL = settings?.baseURL || 'https://api.deepseek.com/v1';

    const deepseekProvider = createDeepSeek({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: deepseekProvider(credentials.model),
      prompt,
      temperature: credentials.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || 2048,
    });

    return {
      textStream: result.textStream,
      fullResponse: result.text,
    };
  } catch (error) {
    throw new Error(
      `Error calling DeepSeek streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};

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

export const generateWithDeepSeek = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const settings = options.credentials.providerSettings as
      | DeepSeekSettings
      | undefined;

    const apiKey = settings?.apiKey || options.credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for DeepSeek');
    }

    const baseURL = settings?.baseURL || 'https://api.deepseek.com/v1';

    const deepseekProvider = createDeepSeek({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = await generateText({
      model: deepseekProvider(options.credentials.model),
      system: options.systemPrompt,
      prompt: options.userPrompt,
    });

    const generationTime = Date.now() - startTime;

    const command = parseCommandFromResponse(result.text);

    return {
      command,
      generationTime,
    };
  } catch (error) {
    throw new Error(`DeepSeek exec generation failed: ${error}`);
  }
};
