import {createXai, type xai} from '@ai-sdk/xai';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  LooseToStrict,
  RawiCredentials,
  XAISettings,
} from '../../shared/index.js';

type LooseXaiModelId = Parameters<typeof xai>[0];
export type XaiModelId = LooseToStrict<LooseXaiModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithXAI = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const xaiSettings = options.credentials.providerSettings as XAISettings;

    const xaiProvider = createXai({
      apiKey: options.credentials.apiKey,
      baseURL: xaiSettings?.baseURL,
    });

    const result = await generateText({
      model: xaiProvider(options.credentials.model),
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
    throw new Error(`xAI exec generation failed: ${error}`);
  }
};
