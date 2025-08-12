import {createDeepSeek, type deepseek} from '@ai-sdk/deepseek';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  DeepSeekSettings,
  LooseToStrict,
  RawiCredentials,
} from '../../shared/index.js';

type LooseDeepSeekModelId = Parameters<typeof deepseek>[0];
export type DeepSeekModelId = LooseToStrict<LooseDeepSeekModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithDeepSeek = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const settings = options.credentials.providerSettings as
      | DeepSeekSettings
      | undefined;

    const apiKey = settings?.apiKey || options.credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for DeepSeek');
    }

    const baseURL = settings?.baseURL || 'https://api.deepseek.com/v1';

    const deepseekProvider = createDeepSeek({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = await generateText({
      model: deepseekProvider(options.credentials.model),
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
    throw new Error(`DeepSeek exec generation failed: ${error}`);
  }
};
