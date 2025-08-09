export type LooseToStrict<T> = T extends any
  ? string extends T
    ? never
    : T
  : never;

export type SupportedLanguage = 'english' | 'arabic';

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
  | 'lmstudio'
  | 'deepseek'
  | 'mistral'
  | 'cerebras';

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

export interface DeepSeekSettings {
  apiKey: string;
  baseURL?: string;
}

export interface MistralSettings {
  apiKey: string;
  baseURL?: string;
}

export interface CerebrasSettings {
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
  | LMStudioSettings
  | DeepSeekSettings
  | MistralSettings
  | CerebrasSettings;

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
  type?: 'ask' | 'chat';
  title?: string;
  description?: string;
  status?:
    | 'active'
    | 'archived'
    | 'paused'
    | 'pending'
    | 'completed'
    | 'failed';
  createdAt: string;
  updatedAt: string;
  lastAccessedAt?: string;
  messageCount: number;

  query?: string;
  filesProcessed?: any;
  contentFiltered?: boolean;

  conversationContext?: any;
  maxMessages?: number;
  isPrivate?: boolean;
  tags?: any;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  provider: SupportedProvider;
  model: string;
  temperature?: number;
  maxTokens?: number;
  metadata?: any;
  messageOrder?: number;
  processingTime?: number;
  tokenUsage?: any;
  parentMessageId?: string;
  isEdited?: boolean;
  editHistory?: any;
  reactions?: any;
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
  type?: 'ask' | 'chat';
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
