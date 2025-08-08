import {createMistral, type mistral} from '@ai-sdk/mistral';
import {streamText} from 'ai';
import type {
  LooseToStrict,
  MistralSettings,
  ModelInfo,
  RawiCredentials,
  StreamingResponse,
} from '../../shared/index.js';

type LooseMistralModelId = Parameters<typeof mistral>[0];
export type MistralModelId = LooseToStrict<LooseMistralModelId>;

export const mistralModelIds = [
  'ministral-3b-latest',
  'ministral-8b-latest',
  'mistral-large-latest',
  'mistral-medium-latest',
  'mistral-medium-2505',
  'mistral-small-latest',
  'pixtral-large-latest',
  'magistral-small-2506',
  'magistral-medium-2506',
  'pixtral-12b-2409',
  'open-mistral-7b',
  'open-mixtral-8x7b',
  'open-mixtral-8x22b',
] as const;

export const mistralModels: ModelInfo[] = mistralModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const mistralProvider = {
  name: 'mistral' as const,
  displayName: '🟠 Mistral AI',
  models: mistralModels,
};

export const streamWithMistral = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const settings = credentials.providerSettings as
      | MistralSettings
      | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Mistral');
    }

    const baseURL = settings?.baseURL || 'https://api.mistral.ai/v1';

    const mistralProvider = createMistral({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: mistralProvider(credentials.model),
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
      `Error calling Mistral streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
