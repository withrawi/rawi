import type {anthropic} from '@ai-sdk/anthropic';
import {createAnthropic} from '@ai-sdk/anthropic';
import {generateText} from 'ai';
import type {
  AnthropicSettings,
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
} from '../shared/index.js';

type LooseAnthropicModelId = Parameters<typeof anthropic>[0];
export type AnthropicModelId = LooseToStrict<LooseAnthropicModelId>;

const anthropicModelIds = [
  'claude-4-opus-20250514',
  'claude-4-sonnet-20250514',
  'claude-3-7-sonnet-20250219',
  'claude-3-5-sonnet-latest',
  'claude-3-5-sonnet-20241022',
  'claude-3-5-sonnet-20240620',
  'claude-3-5-haiku-latest',
  'claude-3-5-haiku-20241022',
  'claude-3-opus-latest',
  'claude-3-opus-20240229',
  'claude-3-sonnet-20240229',
  'claude-3-haiku-20240307',
] as const;

export const anthropicModels: ModelInfo[] = anthropicModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const anthropicProvider = {
  name: 'anthropic' as const,
  displayName: '🟣 Anthropic (Claude)',
  models: anthropicModels,
};

export const generateWithAnthropic = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<string> => {
  try {
    const settings = credentials.providerSettings as
      | AnthropicSettings
      | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;
    if (!apiKey) {
      throw new Error('API key is required for Anthropic');
    }

    const baseURL = settings?.baseURL || 'https://api.anthropic.com';

    const anthropicProvider = createAnthropic({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = await generateText({
      model: anthropicProvider(credentials.model),
      prompt,
      temperature: credentials.temperature || 0.7,
      maxTokens: credentials.maxTokens || 2048,
    });

    return result.text;
  } catch (error) {
    throw new Error(
      `Error calling Anthropic API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
