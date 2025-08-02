import type {OllamaChatModelId} from './ollama-chat-settings.js';

export type OllamaImageModelId =
  | 'llava:7b'
  | 'llava:13b'
  | 'llava:34b'
  | OllamaChatModelId
  | (string & NonNullable<unknown>);

export interface OllamaImageSettings {
  maxImagesPerCall?: number;
}
