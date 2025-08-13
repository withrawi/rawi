import type {ModelMessage} from 'ai';
import {generateText, streamText} from 'ai';
import {
  ollamaModelIds as _ollamaModelIds,
  createOllama,
  ollama,
} from '../../libs/providers/ollama/index.js';
import {parseCommandFromResponse} from '../exec/parser.js';
import type {
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

type LooseOllamaModelId = Parameters<typeof ollama>[0];
export type OllamaModelId = LooseToStrict<LooseOllamaModelId>;

const ollamaModelIds = _ollamaModelIds as readonly OllamaModelId[];

export const ollamaModels: ModelInfo[] = ollamaModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const ollamaProvider = {
  name: 'ollama' as const,
  displayName: '🟢 Ollama',
  models: ollamaModels,
} as const;

export const streamWithOllama = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const ollamaSettings: Record<string, any> = {};

    if (
      credentials.providerSettings &&
      'baseURL' in credentials.providerSettings
    ) {
      ollamaSettings.baseURL = credentials.providerSettings.baseURL;
    }

    const ollamaProvider = createOllama(
      Object.keys(ollamaSettings).length > 0 ? ollamaSettings : undefined,
    );

    const result = streamText({
      model: ollamaProvider(credentials.model),
      prompt,
      temperature: credentials.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || 2048,
    });

    return {
      textStream: result.textStream,
      fullResponse: result.text,
    };
  } catch (error) {
    throw new Error(
      `Error calling Ollama streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};

export const ollamaChatProvider: ChatProvider = {
  name: 'ollama',
  displayName: '🟢 Ollama',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const ollamaSettings: Record<string, any> = {};

    if (
      credentials.providerSettings &&
      'baseURL' in credentials.providerSettings
    ) {
      ollamaSettings.baseURL = credentials.providerSettings.baseURL;
    }

    const result = streamText({
      model: ollama(credentials.model, ollamaSettings),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};

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
