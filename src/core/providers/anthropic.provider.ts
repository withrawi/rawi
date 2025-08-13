import {type anthropic, createAnthropic} from '@ai-sdk/anthropic';
import type {ModelMessage} from 'ai';
import {generateText, streamText} from 'ai';
import {parseCommandFromResponse} from '../exec/parser.js';
import type {
  AnthropicSettings,
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

type LooseAnthropicModelId = Parameters<typeof anthropic>[0];
export type AnthropicModelId = LooseToStrict<LooseAnthropicModelId>;

const anthropicModelIds = [
  'claude-opus-4-20250514',
  'claude-sonnet-4-20250514',
  'claude-3-7-sonnet-20250219',
  'claude-3-5-sonnet-latest',
  'claude-3-5-sonnet-20241022',
  'claude-3-5-sonnet-20240620',
  'claude-3-5-haiku-latest',
  'claude-3-5-haiku-20241022',
  'claude-3-opus-latest',
  'claude-3-opus-20240229',
  'claude-3-sonnet-20240229',
  'claude-3-haiku-20240307',
] as const;

export const anthropicModels: ModelInfo[] = anthropicModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const anthropicProvider = {
  name: 'anthropic' as const,
  displayName: '🟣 Anthropic (Claude)',
  models: anthropicModels,
};

export const streamWithAnthropic = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const settings = credentials.providerSettings as
      | AnthropicSettings
      | undefined;

    const apiKey = settings?.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Anthropic');
    }

    const baseURL = settings?.baseURL || 'https://api.anthropic.com';

    const anthropicProvider = createAnthropic({
      apiKey: apiKey,
      baseURL: baseURL,
    });

    const result = streamText({
      model: anthropicProvider(credentials.model),
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
      `Error calling Anthropic streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};

export const anthropicChatProvider: ChatProvider = {
  name: 'anthropic',
  displayName: '🟠 Anthropic (Claude)',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings || {};
    const apiKey = settings.apiKey || credentials.apiKey;

    if (!apiKey) {
      throw new Error('API key is required for Anthropic');
    }

    const anthropicProvider = createAnthropic({
      apiKey: apiKey,
    });

    const result = streamText({
      model: anthropicProvider(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};

export const generateWithAnthropic = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const anthropicSettings = options.credentials
      .providerSettings as AnthropicSettings;

    const anthropicProvider = createAnthropic({
      apiKey: options.credentials.apiKey,
      baseURL: anthropicSettings?.baseURL,
    });

    const result = await generateText({
      model: anthropicProvider(options.credentials.model),
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
    throw new Error(`Anthropic exec generation failed: ${error}`);
  }
};
