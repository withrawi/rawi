import {type cerebras, createCerebras} from '@ai-sdk/cerebras';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  CerebrasSettings,
  LooseToStrict,
  RawiCredentials,
} from '../../shared/index.js';

type LooseCerebrasModelId = Parameters<typeof cerebras>[0];
export type CerebrasModelId = LooseToStrict<LooseCerebrasModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithCerebras = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const settings = options.credentials.providerSettings as
      | CerebrasSettings
      | undefined;

    const apiKey = settings?.apiKey || options.credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Cerebras');
    }

    const baseURL = settings?.baseURL || 'https://api.cerebras.ai/v1';

    const cerebrasProvider = createCerebras({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = await generateText({
      model: cerebrasProvider(options.credentials.model),
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
    throw new Error(`Cerebras exec generation failed: ${error}`);
  }
};
