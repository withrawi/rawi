import type {OllamaChatModelId as _OllamaChatModelId} from './ollama-models-list.js';
import {ollamaModelIds as _ollamaModelIds} from './ollama-models-list.js';

export type OllamaChatModelId =
  | _OllamaChatModelId
  | (string & NonNullable<unknown>);

export const ollamaModelIds = _ollamaModelIds;

export interface OllamaChatSettings {
  /**
   * Until Ollama officially supports tool calling in streams, the provider can try to detect function calls. Enabled by
   * default to maintain backward compatibility, disable it if you encounter any issues.
   *
   * @deprecated Use `simulateStreaming` instead.
   */
  experimentalStreamTools?: boolean;

  /**
   * Enables the use of half-precision floating point values for key-value memory. This helps in optimizing memory usage. (Default: true)
   */
  f16Kv?: boolean;

  /**
   * If set to true, reduces the VRAM usage by trading off speed for memory. (Default: false)
   */
  lowVram?: boolean;

  /**
   * Sets which GPU is the main one.
   */
  mainGpu?: number;

  /**
   * Minimum cumulative probability for tokens to be considered. (Default: 0.0)
   */
  minP?: number;

  /**
   * Enable Mirostat sampling for controlling perplexity. (default: 0, 0 = disabled, 1 = Mirostat, 2 = Mirostat 2.0)
   */
  mirostat?: 0 | 1 | 2;

  /**
   * Influences how quickly the algorithm responds to feedback from the generated text. A lower learning rate will
   * result in slower adjustments, while a higher learning rate will make the algorithm more responsive. (Default: 0.1)
   */
  mirostatEta?: number;

  /**
   * Controls the balance between coherence and diversity of the output. A lower value will result in more focused and
   * coherent text. (Default: 5.0)
   */
  mirostatTau?: number;

  /**
   * Controls whether to use Non-Uniform Memory Access (NUMA) for more efficient memory management. (Default: false)
   */
  numa?: boolean;

  /**
   * Sets the number of batches to be processed. (Default: 512)
   */
  numBatch?: number;

  /**
   * Sets the size of the context window used to generate the next token. (Default: 2048)
   */
  numCtx?: number;

  /**
   * Controls the number of GPUs to use for the operation. (Default: -1, indicates that NumGPU should be set dynamically)
   */
  numGpu?: number;

  /**
   * Keeps a number of tokens from the context. Controls how many of the previous tokens are retained. (Default: 4)
   */
  numKeep?: number;

  /**
   * Controls the number of tokens to predict in a single generation. (Default: -1)
   */
  numPredict?: number;

  /**
   * Sets the number of CPU threads to use. (Default: 0, indicates let the runtime decide)
   */
  numThread?: number;

  /**
   * Penalizes the model for generating newline characters. If set to true, it discourages the model from generating too many newlines. (Default: true)
   */
  penalizeNewline?: boolean;

  /**
   * Sets how far back for the model to look back to prevent repetition. (Default: 64, 0 = disabled, -1 = num_ctx)
   */
  repeatLastN?: number;

  /**
   * Sets how strongly to penalize repetitions. A higher value (e.g., 1.5) will penalize repetitions more strongly
   * , while a lower value (e.g., 0.9) will be more lenient. (Default: 1.1)
   */
  repeatPenalty?: number;

  /**
   * Whether to use structured outputs. Defaults to false.
   *
   * When enabled, tool calls and object generation will be strict and follow the provided schema.
   */
  structuredOutputs?: boolean;

  /**
   * Tail free sampling is used to reduce the impact of less probable tokens from the output. A higher value (e.g., 2.0)
   * will reduce the impact more, while a value of 1.0 disables this setting. (default: 1)
   */
  tfsZ?: number;

  /**
   * Controls the "typical" sampling probability. (Default: 1.0)
   */
  typicalP?: number;

  /**
   * Locks the memory to prevent swapping, which can be useful for performance optimization. (Default: false)
   */
  useMlock?: boolean;

  /**
   * Enables memory mapping to reduce RAM usage. (Default: false)
   */
  useMmap?: boolean;

  /**
   * If true, the model will only load the vocabulary without performing further computation. (Default: false)
   */
  vocabOnly?: boolean;
}
