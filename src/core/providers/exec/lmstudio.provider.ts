import {createOpenAICompatible as createLMStudio} from '@ai-sdk/lmstudio';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  LMStudioSettings,
  LooseToStrict,
  RawiCredentials,
} from '../../shared/index.js';

type LooseLMStudioModelId = string;
export type LMStudioModelId = LooseToStrict<LooseLMStudioModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithLMStudio = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const settings = options.credentials.providerSettings as
      | LMStudioSettings
      | undefined;

    const baseURL = settings?.baseURL || 'http://localhost:1234/v1';

    const lmstudioProvider = createLMStudio({
      name: 'lmstudio',
      baseURL: baseURL,
      apiKey: options.credentials.apiKey || 'not-required',
    });

    const result = await generateText({
      model: lmstudioProvider(options.credentials.model),
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
    throw new Error(`LM Studio exec generation failed: ${error}`);
  }
};
