import {createGoogleGenerativeAI, type google} from '@ai-sdk/google';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  GoogleSettings,
  LooseToStrict,
  RawiCredentials,
} from '../../shared/index.js';

type LooseGoogleModelId = Parameters<typeof google>[0];
export type GoogleModelId = LooseToStrict<LooseGoogleModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithGoogle = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const googleSettings = options.credentials
      .providerSettings as GoogleSettings;

    const googleProvider = createGoogleGenerativeAI({
      apiKey: options.credentials.apiKey,
      baseURL: googleSettings?.baseURL,
    });

    const result = await generateText({
      model: googleProvider(options.credentials.model),
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
    throw new Error(`Google exec generation failed: ${error}`);
  }
};
