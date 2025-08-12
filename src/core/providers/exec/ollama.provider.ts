import {generateText} from 'ai';
import {
  createOllama,
  type ollama,
} from '../../../libs/providers/ollama/index.js';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {LooseToStrict, RawiCredentials} from '../../shared/index.js';

type LooseOllamaModelId = Parameters<typeof ollama>[0];
export type OllamaModelId = LooseToStrict<LooseOllamaModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithOllama = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const ollamaSettings: Record<string, any> = {};

    if (
      options.credentials.providerSettings &&
      'baseURL' in options.credentials.providerSettings
    ) {
      ollamaSettings.baseURL = options.credentials.providerSettings.baseURL;
    }

    const ollamaProvider = createOllama(
      Object.keys(ollamaSettings).length > 0 ? ollamaSettings : undefined,
    );

    const result = await generateText({
      model: ollamaProvider(options.credentials.model),
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
    throw new Error(`Ollama exec generation failed: ${error}`);
  }
};
