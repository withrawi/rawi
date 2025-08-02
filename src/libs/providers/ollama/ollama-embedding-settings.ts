import type {OllamaChatModelId} from './ollama-chat-settings.js';

export type OllamaEmbeddingModelId =
  | 'all-minilm'
  | 'all-minilm:22m'
  | 'all-minilm:33m'
  | 'bge-large'
  | 'bge-m3'
  | 'granite-embedding'
  | 'granite-embedding:30m'
  | 'granite-embedding:278m'
  | 'mxbai-embed-large'
  | 'nomic-embed-text'
  | 'paraphrase-multilingual'
  | 'snowflake-arctic-embed'
  | 'snowflake-arctic-embed:110m'
  | 'snowflake-arctic-embed:137m'
  | 'snowflake-arctic-embed:22m'
  | 'snowflake-arctic-embed:335m'
  | 'snowflake-arctic-embed:33m'
  | 'snowflake-arctic-embed2'
  | 'snowflake-arctic-embed2:568m'
  | OllamaChatModelId
  | (string & NonNullable<unknown>);

export interface OllamaEmbeddingSettings {
  maxEmbeddingsPerCall?: number;
  truncate?: boolean;
}
