import {createOpenAI, type openai} from '@ai-sdk/openai';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  LooseToStrict,
  OpenAISettings,
  RawiCredentials,
} from '../../shared/index.js';

type LooseOpenAIModelId = Parameters<typeof openai>[0];
export type OpenAIModelId = LooseToStrict<LooseOpenAIModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithOpenAI = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const openAISettings = options.credentials
      .providerSettings as OpenAISettings;

    const openAIProvider = createOpenAI({
      apiKey: options.credentials.apiKey,
      baseURL: openAISettings?.baseURL,
    });

    const result = await generateText({
      model: openAIProvider(options.credentials.model),
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
    throw new Error(`OpenAI exec generation failed: ${error}`);
  }
};
