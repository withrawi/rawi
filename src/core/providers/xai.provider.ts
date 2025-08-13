import type {xai} from '@ai-sdk/xai';
import {createXai} from '@ai-sdk/xai';
import type {ModelMessage} from 'ai';
import {generateText, streamText} from 'ai';
import {parseCommandFromResponse} from '../exec/parser.js';
import type {
  LooseToStrict,
  ModelInfo,
  RawiCredentials,
  StreamingResponse,
  XAISettings,
} from '../shared/index.js';
import type {
  ChatCredentials,
  ChatProvider,
  ChatStreamOptions,
  ExecGenerationOptions,
  ExecGenerationResult,
} from './types.js';

type LooseXaiModelId = Parameters<typeof xai>[0];
export type XaiModelId = LooseToStrict<LooseXaiModelId>;

const xaiModelIds = [
  'grok-4',
  'grok-4-0709',
  'grok-4-latest',
  'grok-3',
  'grok-3-latest',
  'grok-3-fast',
  'grok-3-fast-latest',
  'grok-3-mini',
  'grok-3-mini-latest',
  'grok-3-mini-fast',
  'grok-3-mini-fast-latest',
  'grok-2-vision-1212',
  'grok-2-vision',
  'grok-2-vision-latest',
  'grok-2-image-1212',
  'grok-2-image',
  'grok-2-image-latest',
  'grok-2-1212',
  'grok-2',
  'grok-2-latest',
  'grok-vision-beta',
  'grok-beta',
] as const;

export const xaiModels: ModelInfo[] = xaiModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const xaiProvider = {
  name: 'xai' as const,
  displayName: '🤖 xAI (Grok)',
  models: xaiModels,
};

export const streamWithXAI = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const settings = credentials.providerSettings as XAISettings | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for xAI');
    }

    const baseURL = settings?.baseURL || 'https://api.x.ai/v1';

    const xaiProvider = createXai({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: xaiProvider(credentials.model),
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
      `Error calling xAI streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};

export const xaiChatProvider: ChatProvider = {
  name: 'xai',
  displayName: '🤖 xAI (Grok)',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const apiKey = settings.apiKey || credentials.apiKey;
    const baseURL = settings.baseURL || 'https://api.x.ai/v1';

    if (!apiKey) {
      throw new Error('API key is required for xAI');
    }

    const xaiProvider = createXai({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: xaiProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};

export const generateWithXAI = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const xaiSettings = options.credentials.providerSettings as XAISettings;

    const xaiProvider = createXai({
      apiKey: options.credentials.apiKey,
      baseURL: xaiSettings?.baseURL,
    });

    const result = await generateText({
      model: xaiProvider(options.credentials.model),
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
    throw new Error(`xAI exec generation failed: ${error}`);
  }
};
