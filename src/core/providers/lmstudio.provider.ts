import {createOpenAICompatible as createLMStudio} from '@ai-sdk/lmstudio';
import type {ModelMessage} from 'ai';
import {generateText, streamText} from 'ai';
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

type LooseLMStudioModelId = string;
export type LMStudioModelId = LooseToStrict<LooseLMStudioModelId>;

const lmstudioModelIds = [
  'deepseek/deepseek-r1-0528-qwen3-8b',
  'google/gemma-3-1b',
  'google/gemma-2-9b',
  'google/gemma-3-12b',
  'google/gemma-3-27b',
  'google/gemma-3-4b',
  'ibm/granite-3.1-8b',
  'ibm/granite-3.2-8b',
  'meta/llama-3.3-70b',
  'microsoft/phi-4',
  'microsoft/phi-4-mini-reasoning',
  'microsoft/phi-4-reasoning-plus',
  'mistralai/codestral-22b-v0.1',
  'mistralai/devstral-small-2505',
  'mistralai/magistral-small',
  'mistralai/mathstral-7b-v0.1',
  'mistralai/mistral-7b-instruct-v0.3',
  'mistralai/mistral-nemo-instruct-2407',
  'mistralai/mistral-small-3.2',
  'qwen/qwen2.5-coder-14b',
  'qwen/qwen2.5-coder-32b',
  'qwen/qwen2.5-vl-7b',
  'qwen/qwen3-1.7b',
  'qwen/qwen3-4b',
  'qwen/qwen3-8b',
  'qwen/qwen3-14b',
  'qwen/qwen3-235b-a22b',
] as const;

export const lmstudioModels: ModelInfo[] = lmstudioModelIds.map((name) => ({
  name,
  displayName: name,
}));

export const lmstudioProvider = {
  name: 'lmstudio' as const,
  displayName: '🖥️ LM Studio',
  models: lmstudioModels,
};

export const streamWithLMStudio = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  try {
    const settings = credentials.providerSettings as any;
    const baseURL = settings?.baseURL || 'http://localhost:1234/v1';

    const lmstudioProvider = createLMStudio({
      baseURL,
      name: 'lmstudio',
    });

    const result = streamText({
      model: lmstudioProvider(credentials.model),
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
      `Error calling LM Studio streaming API: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
};

export const lmstudioChatProvider: ChatProvider = {
  name: 'lmstudio',
  displayName: '🖥️ LM Studio',

  async streamChat(
    credentials: ChatCredentials,
    messages: ModelMessage[],
    options: ChatStreamOptions = {},
  ): Promise<AsyncIterable<string>> {
    const settings = credentials.providerSettings as any;
    const baseURL = settings?.baseURL || 'http://localhost:1234/v1';

    const result = streamText({
      model: createLMStudio({
        baseURL,
        name: 'lmstudio',
      })(credentials.model),
      messages,
      temperature: credentials.temperature || options.temperature || 0.7,
      maxOutputTokens: credentials.maxTokens || options.maxTokens || 2048,
    });

    return result.textStream;
  },
};

export const generateWithLMStudio = async (
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> => {
  const startTime = Date.now();

  try {
    const settings = options.credentials.providerSettings as any;
    const baseURL = settings?.baseURL || 'http://localhost:1234/v1';

    const lmstudioProvider = createLMStudio({
      baseURL,
      name: 'lmstudio',
    });

    const result = await generateText({
      model: lmstudioProvider(options.credentials.model),
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
    throw new Error(`LM Studio exec generation failed: ${error}`);
  }
};
