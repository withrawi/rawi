import {type cerebras, createCerebras} from '@ai-sdk/cerebras';
import type {ModelMessage} from 'ai';
import {generateText, streamText} from 'ai';
import {parseCommandFromResponse} from '../exec/parser.js';
import type {
  CerebrasSettings,
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

type LooseCerebrasModelId = Parameters<typeof cerebras>[0];
export type CerebrasModelId = LooseToStrict<LooseCerebrasModelId>;

export const cerebrasModelIds = [
  'llama3.1-8b',
  'llama3.1-70b',
  'llama3.3-70b',
] as const;

export const cerebrasModels: ModelInfo[] = cerebrasModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const cerebrasProvider = {
  name: 'cerebras' as const,
  displayName: '🧠 Cerebras',
  models: cerebrasModels,
};

export const streamWithCerebras = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const settings = credentials.providerSettings as
      | CerebrasSettings
      | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Cerebras');
    }

    const baseURL = settings?.baseURL || 'https://api.cerebras.ai/v1';

    const cerebrasProvider = createCerebras({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: cerebrasProvider(credentials.model),
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
      `Error calling Cerebras streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};

export const cerebrasChatProvider: ChatProvider = {
  name: 'cerebras',
  displayName: '🧠 Cerebras',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const apiKey = settings.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Cerebras');
    }

    const cerebrasProvider = createCerebras({
      apiKey: apiKey,
      baseURL: settings.baseURL || 'https://api.cerebras.ai/v1',
    });

    const result = streamText({
      model: cerebrasProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};

export const generateWithCerebras = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const settings = options.credentials.providerSettings as
      | CerebrasSettings
      | undefined;

    const apiKey = settings?.apiKey || options.credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Cerebras');
    }

    const cerebrasProvider = createCerebras({
      apiKey: apiKey,
      baseURL: settings?.baseURL || 'https://api.cerebras.ai/v1',
    });

    const result = await generateText({
      model: cerebrasProvider(options.credentials.model),
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
    throw new Error(`Cerebras exec generation failed: ${error}`);
  }
};
