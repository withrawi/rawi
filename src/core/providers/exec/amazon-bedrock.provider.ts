import {type bedrock, createAmazonBedrock} from '@ai-sdk/amazon-bedrock';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  BedrockSettings,
  LooseToStrict,
  RawiCredentials,
} from '../../shared/index.js';

type LooseBedrockModelId = Parameters<typeof bedrock>[0];
export type BedrockModelId = LooseToStrict<LooseBedrockModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithBedrock = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const settings = options.credentials.providerSettings as BedrockSettings;

    if (!settings?.region) {
      throw new Error('AWS region is required for Bedrock');
    }

    const bedrockProvider = createAmazonBedrock({
      region: settings.region,
      accessKeyId: settings.accessKeyId || options.credentials.apiKey,
      secretAccessKey: settings.secretAccessKey,
      sessionToken: settings.sessionToken,
    });

    const result = await generateText({
      model: bedrockProvider(options.credentials.model),
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
    throw new Error(`Amazon Bedrock exec generation failed: ${error}`);
  }
};
