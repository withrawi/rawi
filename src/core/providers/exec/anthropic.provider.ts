import {type anthropic, createAnthropic} from '@ai-sdk/anthropic';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  AnthropicSettings,
  LooseToStrict,
  RawiCredentials,
} from '../../shared/index.js';

type LooseAnthropicModelId = Parameters<typeof anthropic>[0];
export type AnthropicModelId = LooseToStrict<LooseAnthropicModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithAnthropic = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const anthropicSettings = options.credentials
      .providerSettings as AnthropicSettings;

    const anthropicProvider = createAnthropic({
      apiKey: options.credentials.apiKey,
      baseURL: anthropicSettings?.baseURL,
    });

    const result = await generateText({
      model: anthropicProvider(options.credentials.model),
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
    throw new Error(`Anthropic exec generation failed: ${error}`);
  }
};
