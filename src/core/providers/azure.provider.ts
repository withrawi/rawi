import {type azure, createAzure} from '@ai-sdk/azure';
import type {ModelMessage} from 'ai';
import {generateText, streamText} from 'ai';
import {parseCommandFromResponse} from '../exec/parser.js';
import type {
  AzureSettings,
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
  StreamingResponse,
} from '../shared/index.js';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
  ExecGenerationOptions,
  ExecGenerationResult,
} from './types.js';

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

export const azureChatProvider: ChatProvider = {
  name: 'azure',
  displayName: '🔷 Azure OpenAI',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const apiKey = settings.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Azure OpenAI');
    }

    if (!settings.resourceName) {
      throw new Error('Azure resource name is required');
    }

    const resourceName = settings.resourceName;
    const apiVersion = settings.apiVersion || '2024-10-01-preview';

    const azureProvider = createAzure({
      apiKey: apiKey,
      resourceName: resourceName,
      apiVersion: apiVersion,
    });

    const result = streamText({
      model: azureProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};

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
