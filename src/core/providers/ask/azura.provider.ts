import {type azure, createAzure} from '@ai-sdk/azure';
import {streamText} from 'ai';
import type {
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
  StreamingResponse,
} from '../../shared/index.js';

type LooseAzureModelId = Parameters<typeof azure>[0];
export type AzureModelId = LooseToStrict<LooseAzureModelId>;

export const azureModels: ModelInfo[] = [];

export const azureProvider = {
  name: 'azure' as const,
  displayName: '🔷 Azure OpenAI',
  models: azureModels,
};

export const streamWithAzure = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
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

    const result = streamText({
      model: azureProvider(credentials.model),
      prompt,
      temperature: credentials.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || 2048,
    });

    return {
      textStream: result.textStream,
      fullResponse: result.text,
    };
  } catch (error) {
    if (
      error instanceof Error &&
      (error.message.includes('not found') ||
        error.message.includes('does not exist') ||
        error.message.includes('deployment'))
    ) {
      throw new Error(
        `Error calling Azure OpenAI streaming API: Deployment "${credentials.model}" not found. ` +
          `Make sure you've correctly entered your deployment name (not the model name like "gpt-4"). ` +
          `Original error: ${error.message}`,
      );
    }

    throw new Error(
      `Error calling Azure OpenAI streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};
