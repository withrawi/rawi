import type {cerebras} from '@ai-sdk/cerebras';
import {createCerebras} from '@ai-sdk/cerebras';
import {streamText} from 'ai';
import type {
  CerebrasSettings,
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
  StreamingResponse,
} from '../shared/index.js';

type LooseCerebrasModelId = Parameters<typeof cerebras>[0];
export type CerebrasModelId = LooseToStrict<LooseCerebrasModelId>;

export const cerebrasModelIds = [
  'qwen-3-235b-a22b',
  'qwen-3-32b',
  'llama3.1-8b',
  'llama-3.3-70b',
  'deepseek-r1-distill-llama-70b',
  'llama-4-scout-17b-16e-instruct',
] as const;

export const cerebrasModels: ModelInfo[] = cerebrasModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const cerebrasProvider = {
  name: 'cerebras' as const,
  displayName: '🧠 Cerebras',
  models: cerebrasModels,
};

export const streamWithCerebras = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const settings = credentials.providerSettings as
      | CerebrasSettings
      | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Cerebras');
    }

    const baseURL = settings?.baseURL || 'https://api.cerebras.ai/v1';

    const cerebrasProvider = createCerebras({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: cerebrasProvider(credentials.model),
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
      `Error calling Cerebras streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
