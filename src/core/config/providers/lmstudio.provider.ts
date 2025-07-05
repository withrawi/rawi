import {createOpenAICompatible as createLMStudio} from '@ai-sdk/lmstudio';
import {generateText} from 'ai';
import type {
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
} from '../../shared/types.js';

// LM Studio supports any OpenAI-compatible model, so allow free-form string
type LooseLMStudioModelId = string;
export type LMStudioModelId = LooseToStrict<LooseLMStudioModelId>;

// Example default models (users can add their own)
const lmstudioModelIds = ['mistralai/mistral-small-3.2'] as const;

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
    // LM Studio is OpenAI-compatible, but does not require an API key
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
