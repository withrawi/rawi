import {
  type EmbeddingModelV2,
  TooManyEmbeddingValuesForCallError,
} from '@ai-sdk/provider';
import {createJsonResponseHandler, postJsonToApi} from '@ai-sdk/provider-utils';
import {z} from 'zod';

import type {
  OllamaEmbeddingModelId,
  OllamaEmbeddingSettings,
} from './ollama-embedding-settings.js';
import {ollamaFailedResponseHandler} from './ollama-error.js';

type OllamaEmbeddingConfig = {
  baseURL: string;
  fetch?: typeof fetch;
  headers: () => Record<string, string | undefined>;
  provider: string;
};
export class OllamaEmbeddingModel implements EmbeddingModelV2<string> {
  readonly #config: OllamaEmbeddingConfig;
  readonly #settings: OllamaEmbeddingSettings;

  readonly specificationVersion = 'v2';
  readonly modelId: OllamaEmbeddingModelId;

  get provider(): string {
    return this.#config.provider;
  }

  get maxEmbeddingsPerCall(): number {
    return this.#settings.maxEmbeddingsPerCall ?? 2048;
  }

  get supportsParallelCalls(): boolean {
    return false;
  }

  constructor(
    modelId: OllamaEmbeddingModelId,
    settings: OllamaEmbeddingSettings,
    config: OllamaEmbeddingConfig,
  ) {
    this.modelId = modelId;
    this.#settings = settings;
    this.#config = config;
  }

  async doEmbed({
    abortSignal,
    values,
  }: Parameters<EmbeddingModelV2<string>['doEmbed']>[0]): Promise<
    Awaited<ReturnType<EmbeddingModelV2<string>['doEmbed']>>
  > {
    if (values.length > this.maxEmbeddingsPerCall) {
      throw new TooManyEmbeddingValuesForCallError({
        maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
        modelId: this.modelId,
        provider: this.provider,
        values,
      });
    }

    const {responseHeaders, value: response} = await postJsonToApi({
      abortSignal,
      body: {
        input: values,
        model: this.modelId,
      },
      failedResponseHandler: ollamaFailedResponseHandler,
      fetch: this.#config.fetch,
      headers: this.#config.headers(),
      successfulResponseHandler: createJsonResponseHandler(
        ollamaTextEmbeddingResponseSchema as any,
      ),
      url: `${this.#config.baseURL}/embed`,
    });

    // Type the response properly
    const typedResponse = response as z.infer<
      typeof ollamaTextEmbeddingResponseSchema
    >;

    return {
      embeddings: typedResponse.embeddings,
      response: {headers: responseHeaders},
      usage: typedResponse.prompt_eval_count
        ? {tokens: typedResponse.prompt_eval_count}
        : undefined,
    };
  }
}

const ollamaTextEmbeddingResponseSchema = z.object({
  embeddings: z.array(z.array(z.number())),
  prompt_eval_count: z.number().nullable(),
});
