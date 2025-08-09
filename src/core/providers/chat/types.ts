import type {ModelMessage} from 'ai';

export interface ChatProvider {
  name: string;
  displayName: string;
  streamChat: (
    credentials: any,
    messages: ModelMessage[],
    options?: ChatStreamOptions,
  ) => Promise<AsyncIterable<string>>;
}

export interface ChatStreamOptions {
  temperature?: number;
  maxTokens?: number;
  onChunk?: (chunk: string) => void;
  onComplete?: (fullResponse: string) => void;
  onError?: (error: Error) => void;
}

export interface ChatCredentials {
  provider: string;
  model: string;
  apiKey?: string;
  temperature?: number;
  maxTokens?: number;
  providerSettings?: Record<string, any>;
}
