export type LooseToStrict<T> = T extends any
  ? string extends T
    ? never
    : T
  : never;

export type SupportedLanguage = 'english' | 'arabic';

// Streaming interfaces
export interface StreamingResponse {
  textStream: AsyncIterable<string>;
  fullResponse: Promise<string>;
}

export interface GenerateOptions {
  prompt: string;
  temperature?: number;
  maxTokens?: number;
}

export interface StreamOptions extends GenerateOptions {
  onChunk?: (chunk: string) => void;
  onComplete?: (fullResponse: string) => void;
  onError?: (error: Error) => void;
}

export interface ModelInfo {
  name: string;
  displayName?: string;
  description?: string;
}

export interface ProviderConfig {
  name: string;
  displayName: string;
  models: ModelInfo[];
}

export type SupportedProvider =
  | 'anthropic'
  | 'google'
  | 'ollama'
  | 'openai'
  | 'xai'
  | 'azure'
  | 'bedrock'
  | 'qwen'
  | 'lmstudio';

export interface BaseCredentials {
  provider: SupportedProvider;
  model: string;
  temperature?: number;
  maxTokens?: number;
  language?: SupportedLanguage;
}

export interface OllamaSettings {
  baseURL?: string;
}

export interface LMStudioSettings {
  baseURL?: string;
}

export interface GoogleSettings {
  apiKey: string;
  baseURL?: string;
}

export interface OpenAISettings {
  apiKey: string;
  baseURL?: string;
}

export interface AnthropicSettings {
  apiKey: string;
  baseURL?: string;
}

export interface XAISettings {
  apiKey: string;
  baseURL?: string;
}

export interface AzureSettings {
  resourceName: string;
  apiVersion?: string;
}

export interface BedrockSettings {
  region?: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  useProviderChain?: boolean;
}

export interface QwenSettings {
  apiKey: string;
  baseURL?: string;
}

export type ProviderSettings =
  | OllamaSettings
  | GoogleSettings
  | OpenAISettings
  | AnthropicSettings
  | XAISettings
  | AzureSettings
  | BedrockSettings
  | QwenSettings
  | LMStudioSettings;

export interface RawiCredentials extends BaseCredentials {
  apiKey?: string;
  providerSettings?: ProviderSettings;
}

export interface RawiConfig {
  [profileName: string]: RawiCredentials;
}

export interface ConfigureOptions {
  profile?: string;
  provider?: SupportedProvider;
  model?: string;
  apiKey?: string;
  temperature?: number;
  maxTokens?: number;
  language?: SupportedLanguage;
  interactive?: boolean;
  baseURL?: string;
  resourceName?: string;
  apiVersion?: string;
  region?: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  useProviderChain?: boolean;
}

export interface ChatSession {
  id: string;
  profile: string;
  title?: string;
  createdAt: string;
  updatedAt: string;
  messageCount: number;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  provider: SupportedProvider;
  model: string;
  temperature?: number;
  maxTokens?: number;
  metadata?: string;
}

export interface ChatHistoryOptions {
  profile?: string;
  limit?: number;
  sessionId?: string;
  search?: string;
  fromDate?: string;
  toDate?: string;
  provider?: SupportedProvider;
  model?: string;
}

export interface HistoryStats {
  totalSessions: number;
  totalMessages: number;
  messagesByProvider: Record<string, number>;
  messagesByModel: Record<string, number>;
  messagesByProfile: Record<string, number>;
  oldestMessage?: string;
  newestMessage?: string;
}
