import type {ModelMessage} from 'ai';
import type {RawiCredentials} from '../shared/index.js';

export interface ExecGenerationOptions {
  credentials: RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

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
