import type {OllamaChatModelId} from './ollama-chat-settings.js';
import type {OllamaEmbeddingModelId as _OllamaEmbeddingModelId} from './ollama-models-list.js';

export type OllamaEmbeddingModelId =
  | _OllamaEmbeddingModelId
  | OllamaChatModelId
  | (string & NonNullable<unknown>);

export interface OllamaEmbeddingSettings {
  maxEmbeddingsPerCall?: number;
  truncate?: boolean;
}
