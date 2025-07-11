import {createOpenAICompatible as createLMStudio} from '@ai-sdk/lmstudio';
import {generateText} from 'ai';
import type {
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
} from '../shared/index.js';

type LooseLMStudioModelId = string;
export type LMStudioModelId = LooseToStrict<LooseLMStudioModelId>;

const lmstudioModelIds = [
  'deepseek/deepseek-r1-0528-qwen3-8b',
  'google/gemma-3-1b',
  'google/gemma-2-9b',
  'google/gemma-3-12b',
  'google/gemma-3-27b',
  'google/gemma-3-4b',
  'ibm/granite-3.1-8b',
  'ibm/granite-3.2-8b',
  'meta/llama-3.3-70b',
  'microsoft/phi-4',
  'microsoft/phi-4-mini-reasoning',
  'microsoft/phi-4-reasoning-plus',
  'mistralai/codestral-22b-v0.1',
  'mistralai/devstral-small-2505',
  'mistralai/magistral-small',
  'mistralai/mathstral-7b-v0.1',
  'mistralai/mistral-7b-instruct-v0.3',
  'mistralai/mistral-nemo-instruct-2407',
  'mistralai/mistral-small-3.2',
  'qwen/qwen2.5-coder-14b',
  'qwen/qwen2.5-coder-32b',
  'qwen/qwen2.5-vl-7b',
  'qwen/qwen3-1.7b',
  'qwen/qwen3-4b',
  'qwen/qwen3-8b',
  'qwen/qwen3-14b',
  'qwen/qwen3-235b-a22b',
  'qwen/qwen3-30b-a3b',
  'qwen/qwen3-32b',
  'qwen/qwq-32b',
] as const;

export const lmstudioModels: ModelInfo[] = lmstudioModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const lmstudioProvider = {
  name: 'lmstudio' as const,
  displayName: '🟣 LM Studio',
  models: lmstudioModels,
} as const;

export const generateWithLMStudio = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<string> => {
  try {
    const settings = credentials.providerSettings as
      | {baseURL?: string}
      | undefined;
    const baseURL = settings?.baseURL || 'http://localhost:1234/v1';

    const lmstudio = createLMStudio({
      baseURL,
      name: 'lmstudio',
    });

    const result = await generateText({
      model: lmstudio.chatModel(credentials.model),
      prompt,
      temperature: credentials.temperature || 0.7,
      maxTokens: credentials.maxTokens || 2048,
    });

    return result.text;
  } catch (error) {
    throw new Error(
      `Error calling LM Studio API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
