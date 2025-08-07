import {createOpenAI, type openai} from '@ai-sdk/openai';
import {streamText} from 'ai';
import type {
  LooseToStrict,
  ModelInfo,
  OpenAISettings,
  RawiCredentials,
  StreamingResponse,
} from '../shared/index.js';

type LooseOpenAIModelId = Parameters<typeof openai>[0];
export type OpenAIModelId = LooseToStrict<LooseOpenAIModelId>;

const openAIModelIds = [
  'o1',
  'o1-2024-12-17',
  'o1-mini',
  'o1-mini-2024-09-12',
  'o1-preview',
  'o1-preview-2024-09-12',
  'o3-mini',
  'o3-mini-2025-01-31',
  'o3',
  'o3-2025-04-16',
  'o4-mini',
  'o4-mini-2025-04-16',
  'gpt-4.1',
  'gpt-4.1-2025-04-14',
  'gpt-4.1-mini',
  'gpt-4.1-mini-2025-04-14',
  'gpt-4.1-nano',
  'gpt-4.1-nano-2025-04-14',
  'gpt-4o',
  'gpt-4o-2024-05-13',
  'gpt-4o-2024-08-06',
  'gpt-4o-2024-11-20',
  'gpt-4o-audio-preview',
  'gpt-4o-audio-preview-2024-10-01',
  'gpt-4o-audio-preview-2024-12-17',
  'gpt-4o-search-preview',
  'gpt-4o-search-preview-2025-03-11',
  'gpt-4o-mini-search-preview',
  'gpt-4o-mini-search-preview-2025-03-11',
  'gpt-4o-mini',
  'gpt-4o-mini-2024-07-18',
  'gpt-4-turbo',
  'gpt-4-turbo-2024-04-09',
  'gpt-4-turbo-preview',
  'gpt-4-0125-preview',
  'gpt-4-1106-preview',
  'gpt-4',
  'gpt-4-0613',
  'gpt-4.5-preview',
  'gpt-4.5-preview-2025-02-27',
  'gpt-3.5-turbo-0125',
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-1106',
  'chatgpt-4o-latest',
] as const;

export const openaiModels: ModelInfo[] = openAIModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const openaiProvider = {
  name: 'openai' as const,
  displayName: '🔵 OpenAI (GPT)',
  models: openaiModels,
};

export const streamWithOpenAI = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const settings = credentials.providerSettings as OpenAISettings | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;

    if (!credentials.apiKey) {
      throw new Error('API key is required for OpenAI');
    }

    const baseURL = settings?.baseURL || 'https://api.openai.com/v1';

    const openaiProvider = createOpenAI({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: openaiProvider(credentials.model),
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
      `Error calling OpenAI streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
