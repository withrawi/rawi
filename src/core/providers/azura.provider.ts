import type {azure} from '@ai-sdk/azure';
import {createAzure} from '@ai-sdk/azure';
import {generateText} from 'ai';
import type {
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
} from '../shared/index.js';

type LooseAzureModelId = Parameters<typeof azure>[0];
export type AzureModelId = LooseToStrict<LooseAzureModelId>;

export const azureModels: ModelInfo[] = [];

export const azureProvider = {
  name: 'azure' as const,
  displayName: '🔷 Azure OpenAI',
  models: azureModels,
};

export const generateWithAzure = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<string> => {
  try {
    if (!credentials.apiKey) {
      throw new Error('API key is required for Azure OpenAI');
    }

    if (
      !credentials.providerSettings ||
      !('resourceName' in credentials.providerSettings)
    ) {
      throw new Error('Azure resource name is required');
    }

    const resourceName = credentials.providerSettings.resourceName;
    const apiVersion =
      'apiVersion' in credentials.providerSettings
        ? credentials.providerSettings.apiVersion
        : '2024-10-01-preview';

    const azureProvider = createAzure({
      apiKey: credentials.apiKey,
      resourceName: resourceName,
      apiVersion: apiVersion,
    });

    const result = await generateText({
      model: azureProvider(credentials.model),
      prompt,
      temperature: credentials.temperature || 0.7,
      maxTokens: credentials.maxTokens || 2048,
    });

    return result.text;
  } catch (error) {
    if (
      error instanceof Error &&
      (error.message.includes('not found') ||
        error.message.includes('does not exist') ||
        error.message.includes('deployment'))
    ) {
      throw new Error(
        `Error calling Azure OpenAI API: Deployment "${credentials.model}" not found. ` +
          `Make sure you've correctly entered your deployment name (not the model name like "gpt-4"). ` +
          `Original error: ${error.message}`,
      );
    }

    throw new Error(
      `Error calling Azure OpenAI API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
