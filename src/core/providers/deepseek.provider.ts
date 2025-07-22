import {createDeepSeek, type deepseek} from '@ai-sdk/deepseek';
import {streamText} from 'ai';
import type {
  DeepSeekSettings,
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
  StreamingResponse,
} from '../shared/index.js';

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
      maxTokens: credentials.maxTokens || 2048,
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
