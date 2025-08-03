import type {ImageModelV2} from '@ai-sdk/provider';
import {createJsonResponseHandler, postJsonToApi} from '@ai-sdk/provider-utils';
import {z} from 'zod';

import {ollamaFailedResponseHandler} from './ollama-error.js';
import type {
  OllamaImageModelId,
  OllamaImageSettings,
} from './ollama-image-settings.js';

type OllamaEmbeddingConfig = {
  baseURL: string;
  fetch?: typeof fetch;
  headers: () => Record<string, string | undefined>;
  provider: string;
};
export class OllamaImageModel implements ImageModelV2 {
  readonly #config: OllamaEmbeddingConfig;
  readonly #settings: OllamaImageSettings;

  readonly specificationVersion = 'v2';
  readonly modelId: OllamaImageModelId;

  get provider(): string {
    return this.#config.provider;
  }

  get maxImagesPerCall(): number {
    return this.#settings.maxImagesPerCall ?? 2048;
  }

  get supportsParallelCalls(): boolean {
    return false;
  }

  constructor(
    modelId: OllamaImageModelId,
    settings: OllamaImageSettings,
    config: OllamaEmbeddingConfig,
  ) {
    this.modelId = modelId;
    this.#settings = settings;
    this.#config = config;
  }

  async doGenerate({
    abortSignal,
    prompt,
  }: Parameters<ImageModelV2['doGenerate']>[0]): Promise<
    Awaited<ReturnType<ImageModelV2['doGenerate']>>
  > {
    const {responseHeaders, value: response} = await postJsonToApi({
      abortSignal,
      body: {
        prompt: prompt,
        model: this.modelId,
      },
      failedResponseHandler: ollamaFailedResponseHandler,
      fetch: this.#config.fetch,
      headers: this.#config.headers(),
      successfulResponseHandler: createJsonResponseHandler(
        ollamaImageResponseSchema as any,
      ),
      url: `${this.#config.baseURL}/generate`,
    });

    // Type the response properly
    const typedResponse = response as z.infer<typeof ollamaImageResponseSchema>;

    return {
      images: typedResponse.images || [],
      warnings: [],
      response: {
        timestamp: new Date(),
        modelId: this.modelId,
        headers: responseHeaders,
      },
    };
  }
}

const ollamaImageResponseSchema = z.object({
  images: z.array(z.string()).optional(),
  prompt_eval_count: z.number().nullable(),
});
