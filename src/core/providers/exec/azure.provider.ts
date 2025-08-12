import {type azure, createAzure} from '@ai-sdk/azure';
import {generateText} from 'ai';
import {parseCommandFromResponse} from '../../exec/parser.js';
import type {
  AzureSettings,
  LooseToStrict,
  RawiCredentials,
} from '../../shared/index.js';

type LooseAzureModelId = Parameters<typeof azure>[0];
export type AzureModelId = LooseToStrict<LooseAzureModelId>;

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const generateWithAzure = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    if (!options.credentials.apiKey) {
      throw new Error('API key is required for Azure OpenAI');
    }

    const settings = options.credentials.providerSettings as AzureSettings;

    if (!settings?.resourceName) {
      throw new Error('Azure resource name is required');
    }

    const resourceName = settings.resourceName;
    const apiVersion = settings.apiVersion || '2024-10-01-preview';

    const azureProvider = createAzure({
      apiKey: options.credentials.apiKey,
      resourceName: resourceName,
      apiVersion: apiVersion,
    });

    const result = await generateText({
      model: azureProvider(options.credentials.model),
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
    throw new Error(`Azure exec generation failed: ${error}`);
  }
};
