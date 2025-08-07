import type {OllamaChatModelId} from './ollama-chat-settings.js';
import type {OllamaVisionModelId as _OllamaVisionModelId} from './ollama-models-list.js';

export type OllamaImageModelId =
  | _OllamaVisionModelId
  | OllamaChatModelId
  | (string & NonNullable<unknown>);

export interface OllamaImageSettings {
  maxImagesPerCall?: number;
}
