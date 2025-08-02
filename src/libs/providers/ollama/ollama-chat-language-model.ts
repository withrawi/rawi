import type {
  LanguageModelV2,
  LanguageModelV2CallWarning,
  LanguageModelV2Content,
  LanguageModelV2FinishReason,
  LanguageModelV2StreamPart,
  LanguageModelV2Usage,
} from '@ai-sdk/provider';
import {
  combineHeaders,
  createJsonResponseHandler,
  generateId,
  type ParseResult,
  postJsonToApi,
} from '@ai-sdk/provider-utils';
import {z} from 'zod';

import {convertToOllamaChatMessages} from './convert-to-ollama-chat-messages.js';
import {InferToolCallsFromStream} from './generate-tool/infer-tool-calls-from-stream.js';
import {getResponseMetadata} from './get-response-metadata.js';
import {mapOllamaFinishReason} from './map-ollama-finish-reason.js';
import type {
  OllamaChatModelId,
  OllamaChatSettings,
} from './ollama-chat-settings.js';
import {ollamaFailedResponseHandler} from './ollama-error.js';
import {prepareTools} from './prepare-tools.js';
import {
  createJsonStreamResponseHandler,
  removeUndefined,
} from './utils/index.js';

interface OllamaChatConfig {
  baseURL: string;
  fetch?: typeof fetch;
  headers: () => Record<string, string | undefined>;
  provider: string;
}

type getArgumentsProperties = Parameters<LanguageModelV2['doGenerate']>[0];

export class OllamaChatLanguageModel implements LanguageModelV2 {
  readonly specificationVersion = 'v2';
  readonly defaultObjectGenerationMode = 'json';
  readonly supportsImageUrls = true;
  readonly supportedUrls:
    | Record<string, RegExp[]>
    | PromiseLike<Record<string, RegExp[]>> = {};

  constructor(
    public readonly modelId: OllamaChatModelId,
    public readonly settings: OllamaChatSettings,
    public readonly config: OllamaChatConfig,
  ) {}

  get supportsStructuredOutputs(): boolean {
    return this.settings.structuredOutputs ?? false;
  }

  get provider(): string {
    return this.config.provider;
  }

  private async getArguments({
    frequencyPenalty,
    maxOutputTokens,
    presencePenalty,
    prompt,
    providerOptions,
    responseFormat,
    seed,
    stopSequences,
    temperature,
    toolChoice,
    tools,
    topK,
    topP,
  }: getArgumentsProperties) {
    const warnings: LanguageModelV2CallWarning[] = [];

    if (
      responseFormat !== undefined &&
      responseFormat.type === 'json' &&
      responseFormat.schema !== undefined &&
      !this.supportsStructuredOutputs
    ) {
      warnings.push({
        details:
          'JSON response format schema is only supported with structuredOutputs',
        setting: 'responseFormat',
        type: 'unsupported-setting',
      });
    }

    const baseArguments = {
      format:
        responseFormat?.type === 'json'
          ? (responseFormat.schema ?? 'json')
          : undefined,
      model: this.modelId,
      options: removeUndefined({
        f16_kv: this.settings.f16Kv,
        frequency_penalty: frequencyPenalty,
        low_vram: this.settings.lowVram,
        main_gpu: this.settings.mainGpu,
        min_p: this.settings.minP,
        mirostat: this.settings.mirostat,
        mirostat_eta: this.settings.mirostatEta,
        mirostat_tau: this.settings.mirostatTau,
        num_batch: this.settings.numBatch,
        num_ctx: this.settings.numCtx,
        num_gpu: this.settings.numGpu,
        num_keep: this.settings.numKeep,
        num_predict: maxOutputTokens,
        num_thread: this.settings.numThread,
        numa: this.settings.numa,
        penalize_newline: this.settings.penalizeNewline,
        presence_penalty: presencePenalty,
        repeat_last_n: this.settings.repeatLastN,
        repeat_penalty: this.settings.repeatPenalty,
        seed,
        stop: stopSequences,
        temperature,
        tfs_z: this.settings.tfsZ,
        top_k: topK,
        top_p: topP,
        typical_p: this.settings.typicalP,
        use_mlock: this.settings.useMlock,
        use_mmap: this.settings.useMmap,
        vocab_only: this.settings.vocabOnly,
      }),
      providerOptions,
    };

    const {tools: ollamaTools, toolWarnings} = prepareTools({
      prompt,
      toolChoice,
      tools,
    });

    return {
      args: {
        ...baseArguments,
        messages: convertToOllamaChatMessages(prompt),
        tools: ollamaTools,
      },
      warnings: [...warnings, ...toolWarnings],
    };
  }

  async doGenerate(
    options: Parameters<LanguageModelV2['doGenerate']>[0],
  ): Promise<Awaited<ReturnType<LanguageModelV2['doGenerate']>>> {
    const {args, warnings} = await this.getArguments(options);
    const body = {
      ...args,
      stream: false,
    };

    const {responseHeaders, value: response} = await postJsonToApi({
      abortSignal: options.abortSignal,
      body,
      failedResponseHandler: ollamaFailedResponseHandler,
      fetch: this.config.fetch,
      headers: combineHeaders(this.config.headers(), options.headers),
      successfulResponseHandler: createJsonResponseHandler(
        ollamaChatResponseSchema as any,
      ),
      url: `${this.config.baseURL}/chat`,
    });

    // Type the response properly
    const typedResponse = response as OllamaChatResponseSchema;

    const content: Array<LanguageModelV2Content> = [];

    if (typedResponse.message.content) {
      content.push({
        text: typedResponse.message.content,
        type: 'text',
      });
    }

    const toolCalls = typedResponse.message.tool_calls ?? [];
    for (const toolCall of toolCalls) {
      content.push({
        input: JSON.stringify(toolCall.function.arguments),
        toolCallId: toolCall.id ?? generateId(),
        toolName: toolCall.function.name,
        type: 'tool-call',
      });
    }

    return {
      content,
      finishReason: mapOllamaFinishReason({
        finishReason: typedResponse.done_reason,
        hasToolCalls: toolCalls !== undefined && toolCalls.length > 0,
      }),
      request: {body: JSON.stringify(body)},
      response: {
        body: JSON.stringify(typedResponse),
        headers: responseHeaders,
      },
      usage: {
        inputTokens: typedResponse.prompt_eval_count || 0,
        outputTokens: typedResponse.eval_count || 0,
        totalTokens:
          (typedResponse.prompt_eval_count || 0) +
          (typedResponse.eval_count || 0),
      },
      warnings,
    };
  }

  async doStream(
    options: Parameters<LanguageModelV2['doStream']>[0],
  ): Promise<Awaited<ReturnType<LanguageModelV2['doStream']>>> {
    const {args: body, warnings} = await this.getArguments(options);

    const {responseHeaders, value: response} = await postJsonToApi({
      abortSignal: options.abortSignal,
      body,
      failedResponseHandler: ollamaFailedResponseHandler,
      fetch: this.config.fetch,
      headers: combineHeaders(this.config.headers(), options.headers),
      successfulResponseHandler: createJsonStreamResponseHandler(
        ollamaChatStreamChunkSchema,
      ),
      url: `${this.config.baseURL}/chat`,
    });

    const inferToolCallsFromStream = new InferToolCallsFromStream({
      tools: options.tools,
    });

    let finishReason: LanguageModelV2FinishReason = 'unknown';
    let usage: LanguageModelV2Usage = {
      inputTokens: undefined,
      outputTokens: undefined,
      totalTokens: undefined,
    };

    let isFirstChunk = true;
    let activeText = false;
    return {
      request: {body: JSON.stringify(body)},
      response: {
        headers: responseHeaders,
      },
      stream: response.pipeThrough(
        new TransformStream<
          ParseResult<z.infer<typeof ollamaChatStreamChunkSchema>>,
          LanguageModelV2StreamPart
        >({
          async flush(controller) {
            if (activeText) {
              controller.enqueue({id: '0', type: 'text-end'});
            }

            controller.enqueue({
              finishReason,
              type: 'finish',
              usage,
            });
          },
          start(controller) {
            controller.enqueue({type: 'stream-start', warnings});
          },

          async transform(chunk, controller) {
            if (!chunk.success) {
              controller.enqueue({error: chunk.error, type: 'error'});
              return;
            }

            const {value} = chunk;

            if (isFirstChunk) {
              isFirstChunk = false;

              controller.enqueue({
                type: 'response-metadata',
                ...getResponseMetadata(value),
              });
            }

            if (value.done) {
              finishReason = inferToolCallsFromStream.finish({controller});
              usage = {
                inputTokens: value.prompt_eval_count || 0,
                outputTokens: value.eval_count,
                totalTokens: (value.prompt_eval_count || 0) + value.eval_count,
              };

              return;
            }

            const text = value.message.content;

            if (text && text.length > 0) {
              if (!activeText) {
                controller.enqueue({id: '0', type: 'text-start'});
                activeText = true;
              }

              controller.enqueue({
                delta: text,
                id: '0',
                type: 'text-delta',
              });
            }

            if (value.message.tool_calls) {
              for (const toolCall of value.message.tool_calls) {
                const toolCallId = toolCall.id;
                const toolName = toolCall.function.name;
                const input = JSON.stringify(toolCall.function.arguments);

                controller.enqueue({
                  id: toolCallId ?? generateId(),
                  toolName,
                  type: 'tool-input-start',
                });

                controller.enqueue({
                  delta: input,
                  id: toolCallId ?? generateId(),
                  type: 'tool-input-delta',
                });

                controller.enqueue({
                  id: toolCallId ?? generateId(),
                  type: 'tool-input-end',
                });

                controller.enqueue({
                  input,
                  toolCallId: toolCallId ?? generateId(),
                  toolName,
                  type: 'tool-call',
                });
              }
            }
          },
        }),
      ),
    };
  }
}

const ollamaChatResponseSchema = z.object({
  created_at: z.string(),
  done: z.literal(true),
  done_reason: z.string().optional().nullable(),
  eval_count: z.number(),
  eval_duration: z.number(),
  load_duration: z.number().optional(),
  message: z.object({
    content: z.string(),
    images: z.array(z.string()).optional().nullable(),
    role: z.string(),
    tool_calls: z
      .array(
        z.object({
          function: z.object({
            arguments: z.record(z.string(), z.any()),
            name: z.string(),
          }),
          id: z.string().optional(),
        }),
      )
      .optional()
      .nullable(),
  }),
  model: z.string(),
  prompt_eval_count: z.number().optional(),
  prompt_eval_duration: z.number().optional(),
  total_duration: z.number(),
});

export type OllamaChatResponseSchema = z.infer<typeof ollamaChatResponseSchema>;

const ollamaChatStreamChunkSchema = z.discriminatedUnion('done', [
  z.object({
    created_at: z.string(),
    done: z.literal(false),
    message: z.object({
      content: z.string(),
      images: z
        .array(
          z.object({
            type: z.string(),
            url: z.string(),
          }),
        )
        .optional()
        .nullable(),
      role: z.string(),
      thinking: z.string().optional(),
      tool_calls: z
        .array(
          z.object({
            function: z.object({
              arguments: z.record(z.string(), z.any()),
              name: z.string(),
            }),
            id: z.string().optional(),
          }),
        )
        .optional()
        .nullable(),
      tool_name: z.string().optional(),
    }),
    model: z.string(),
  }),
  z.object({
    created_at: z.string(),
    done: z.literal(true),
    eval_count: z.number(),
    eval_duration: z.number(),
    load_duration: z.number().optional(),
    model: z.string(),
    prompt_eval_count: z.number().optional(),
    prompt_eval_duration: z.number().optional(),
    total_duration: z.number(),
  }),
]);
