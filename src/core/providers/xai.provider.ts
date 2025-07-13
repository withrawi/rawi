import type {xai} from '@ai-sdk/xai';
import {createXai} from '@ai-sdk/xai';
import {streamText} from 'ai';
import type {
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
  StreamingResponse,
  XAISettings,
} from '../shared/index.js';

type LooseXaiModelId = Parameters<typeof xai>[0];
export type XaiModelId = LooseToStrict<LooseXaiModelId>;

const xaiModelIds = [
  'grok-3',
  'grok-3-latest',
  'grok-3-fast',
  'grok-3-fast-latest',
  'grok-3-mini',
  'grok-3-mini-latest',
  'grok-3-mini-fast',
  'grok-3-mini-fast-latest',
  'grok-2-vision-1212',
  'grok-2-vision',
  'grok-2-vision-latest',
  'grok-2-image-1212',
  'grok-2-image',
  'grok-2-image-latest',
  'grok-2-1212',
  'grok-2',
  'grok-2-latest',
  'grok-vision-beta',
  'grok-beta',
] as const;

export const xaiModels: ModelInfo[] = xaiModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const xaiProvider = {
  name: 'xai' as const,
  displayName: '🤖 xAI (Grok)',
  models: xaiModels,
};

export const streamWithXAI = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const settings = credentials.providerSettings as XAISettings | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;
    if (!apiKey) {
      throw new Error('API key is required for xAI');
    }

    const baseURL = settings?.baseURL || 'https://api.x.ai/v1';

    const xaiProvider = createXai({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: xaiProvider(credentials.model),
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
      `Error calling xAI streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
