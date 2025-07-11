import type {qwen} from '@ai-sdk-community/qwen';
import {createQwen} from '@ai-sdk-community/qwen';
import {generateText} from 'ai';
import type {
  LooseToStrict,
  ModelInfo,
  QwenSettings,
  RawiCredentials,
} from '../shared/types.js';

type LooseQwenModelId = Parameters<typeof qwen>[0];
export type QwenModelId = LooseToStrict<LooseQwenModelId>;

const qwenModelIds = [
  'qwen2.5-14b-instruct-1m',
  'qwen2.5-72b-instruct',
  'qwen2.5-32b-instruct',
  'qwen2.5-14b-instruct',
  'qwen2.5-7b-instruct',
  'qwen2-57b-a14b-instruct',
  'qwen2.5-7b-instruct-1m',
  'qwen-max',
  'qwen-max-latest',
  'qwen-max-2025-01-25',
  'qwen-plus',
  'qwen-plus-latest',
  'qwen-plus-2025-01-25',
  'qwen-turbo',
  'qwen-turbo-latest',
  'qwen-turbo-2024-11-01',
  'qwen-vl-max',
  'qwen-vl-plus',
  'qwen2.5-vl-72b-instruct',
  'qwen2.5-vl-7b-instruct',
  'qwen2.5-vl-3b-instruct',
] as const;

export const qwenModels: ModelInfo[] = qwenModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const qwenProvider = {
  name: 'qwen' as const,
  displayName: '🟡 Qwen (Alibaba Cloud)',
  models: qwenModels,
};

export const generateWithQwen = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<string> => {
  try {
    const settings = credentials.providerSettings as QwenSettings | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;
    if (!apiKey) {
      throw new Error('API key is required for Qwen');
    }

    const baseURL =
      settings?.baseURL ||
      'https://dashscope-intl.aliyuncs.com/compatible-mode/v1';

    const qwenProvider = createQwen({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = await generateText({
      model: qwenProvider(credentials.model),
      prompt,
      temperature: credentials.temperature || 0.7,
      maxTokens: credentials.maxTokens || 2048,
    });

    return result.text;
  } catch (error) {
    throw new Error(
      `Error calling Qwen API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
