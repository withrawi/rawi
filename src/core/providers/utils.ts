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

export const streamResponse = async (
  credentials: RawiCredentials,
  prompt: string,
): Promise<StreamingResponse> => {
  switch (credentials.provider) {
    case 'google':
      return await streamWithGoogle(credentials, prompt);
    case 'ollama':
      return await streamWithOllama(credentials, prompt);
    case 'anthropic':
      return await streamWithAnthropic(credentials, prompt);
    case 'openai':
      return await streamWithOpenAI(credentials, prompt);
    case 'xai':
      return await streamWithXAI(credentials, prompt);
    case 'azure':
      return await streamWithAzure(credentials, prompt);
    case 'bedrock':
      return await streamWithBedrock(credentials, prompt);
    case 'qwen':
      return await streamWithQwen(credentials, prompt);
    case 'lmstudio':
      return await streamWithLMStudio(credentials, prompt);
    case 'deepseek':
      return await streamWithDeepSeek(credentials, prompt);
    case 'mistral':
      return await streamWithMistral(credentials, prompt);
    case 'cerebras':
      return await streamWithCerebras(credentials, prompt);
    default:
      throw new Error(`Unsupported provider: ${credentials.provider}`);
  }
};

export const processQuery = async (
  credentials: RawiCredentials,
  prompt: string,
  options: {
    streaming?: boolean;
    onChunk?: (chunk: string) => void;
    onComplete?: (fullResponse: string) => void;
    onError?: (error: Error) => void;
  } = {},
): Promise<string> => {
  try {
    const streamingResponse = await streamResponse(credentials, prompt);
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
