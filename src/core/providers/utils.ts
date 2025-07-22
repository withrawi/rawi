import {ContentFilter} from '../content-filter/content-filter.js';
import {applyContentFiltering} from '../content-filter/middleware.js';
import type {RawiCredentials, StreamingResponse} from '../shared/index.js';
import {
  streamWithAnthropic,
  streamWithAzure,
  streamWithBedrock,
  streamWithCerebras,
  streamWithDeepSeek,
  streamWithGoogle,
  streamWithLMStudio,
  streamWithMistral,
  streamWithOllama,
  streamWithOpenAI,
  streamWithQwen,
  streamWithXAI,
} from './index.js';

export interface StreamResponseOptions {
  filtering?: {
    enabled: boolean;
    types?: string[];
    showFiltered?: boolean;
    highlightFiltered?: boolean;
  };
}

export const streamResponse = async (
  credentials: RawiCredentials,
  prompt: string,
  options: StreamResponseOptions = {},
): Promise<StreamingResponse> => {
  let streamFn: any;
  switch (credentials.provider) {
    case 'google':
      streamFn = streamWithGoogle;
      break;
    case 'ollama':
      streamFn = streamWithOllama;
      break;
    case 'anthropic':
      streamFn = streamWithAnthropic;
      break;
    case 'openai':
      streamFn = streamWithOpenAI;
      break;
    case 'xai':
      streamFn = streamWithXAI;
      break;
    case 'azure':
      streamFn = streamWithAzure;
      break;
    case 'bedrock':
      streamFn = streamWithBedrock;
      break;
    case 'qwen':
      streamFn = streamWithQwen;
      break;
    case 'lmstudio':
      streamFn = streamWithLMStudio;
      break;
    case 'deepseek':
      streamFn = streamWithDeepSeek;
      break;
    case 'mistral':
      streamFn = streamWithMistral;
      break;
    case 'cerebras':
      streamFn = streamWithCerebras;
      break;
    default:
      throw new Error(`Unsupported provider: ${credentials.provider}`);
  }

  if (options.filtering?.enabled) {
    const filter = new ContentFilter({
      enabled: true,
      types: options.filtering.types,
      showFiltered: options.filtering.showFiltered,
      highlightFiltered: options.filtering.highlightFiltered,
    });

    const filteredStreamFn = applyContentFiltering(streamFn, {
      filter,
      logStats: false,
    });

    return await filteredStreamFn(credentials, prompt);
  }

  return await streamFn(credentials, prompt);
};

export const processQuery = async (
  credentials: RawiCredentials,
  prompt: string,
  options: {
    streaming?: boolean;
    onChunk?: (chunk: string) => void;
    onComplete?: (fullResponse: string) => void;
    onError?: (error: Error) => void;
    filtering?: {
      enabled: boolean;
      types?: string[];
      showFiltered?: boolean;
      highlightFiltered?: boolean;
    };
  } = {},
): Promise<string> => {
  try {
    const streamingResponse = await streamResponse(credentials, prompt, {
      filtering: options.filtering,
    });
    let fullResponse = '';

    for await (const chunk of streamingResponse.textStream) {
      fullResponse += chunk;
      if (options.onChunk) {
        options.onChunk(chunk);
      }
    }

    if (options.onComplete) {
      options.onComplete(fullResponse);
    }

    return fullResponse;
  } catch (error) {
    if (options.onError) {
      options.onError(
        error instanceof Error ? error : new Error(String(error)),
      );
    }
    throw error;
  }
};
