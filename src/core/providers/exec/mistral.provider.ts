import {createMistral, type mistral} from '@ai-sdk/mistral';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  LooseToStrict,
  MistralSettings,
  RawiCredentials,
} from '../../shared/index.js';

type LooseMistralModelId = Parameters<typeof mistral>[0];
export type MistralModelId = LooseToStrict<LooseMistralModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithMistral = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const settings = options.credentials.providerSettings as
      | MistralSettings
      | undefined;

    const apiKey = settings?.apiKey || options.credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Mistral');
    }

    const mistralProvider = createMistral({
      apiKey: apiKey,
    });

    const result = await generateText({
      model: mistralProvider(options.credentials.model),
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
    throw new Error(`Mistral exec generation failed: ${error}`);
  }
};
