import type {
  LanguageModelV2CallOptions,
  LanguageModelV2FinishReason,
  LanguageModelV2StreamPart,
} from '@ai-sdk/provider';
import {generateId} from '@ai-sdk/provider-utils';
import {parse} from 'partial-json';

type ToolCall = {
  function: {
    arguments: string;
    name: string;
  };
  id: string;
  type: 'function';
};

export class InferToolCallsFromStream {
  #firstMessage: boolean;
  readonly #toolCalls: ToolCall[];
  readonly #tools?: LanguageModelV2CallOptions['tools'];
  #toolPartial: string;
  #detectedToolCall: boolean;

  constructor({tools}: {tools?: LanguageModelV2CallOptions['tools']}) {
    this.#firstMessage = true;
    this.#tools = tools;
    this.#toolPartial = '';
    this.#toolCalls = [];
    this.#detectedToolCall = false;
  }

  get toolCalls(): ToolCall[] {
    return this.#toolCalls;
  }

  get detectedToolCall(): boolean {
    return this.#detectedToolCall;
  }

  parse({
    controller,
    delta,
  }: {
    controller: TransformStreamDefaultController<LanguageModelV2StreamPart>;
    delta: string;
  }): boolean {
    this.#detectToolCall(delta);

    if (!this.#detectedToolCall) {
      return false;
    }

    this.#toolPartial += delta;

    let parsedFunctions = parse(this.#toolPartial);
    if (!Array.isArray(parsedFunctions)) {
      parsedFunctions = [parsedFunctions];
    }

    for (const [index, parsedFunction] of parsedFunctions.entries()) {
      const parsedArguments = JSON.stringify(parsedFunction?.parameters) ?? '';

      if (parsedArguments === '') {
        continue;
      }

      if (!this.#toolCalls[index]) {
        this.#toolCalls[index] = {
          function: {
            arguments: '',
            name: parsedFunction.name,
          },
          id: generateId(),
          type: 'function',
        };
      }

      const toolCall = this.#toolCalls[index];
      toolCall.function.arguments = parsedArguments;

      controller.enqueue({
        input: delta,
        toolCallId: toolCall.id,
        toolName: toolCall.function.name,
        type: 'tool-call',
      });
    }

    return true;
  }

  finish({
    controller,
  }: {
    controller: TransformStreamDefaultController<LanguageModelV2StreamPart>;
  }): LanguageModelV2FinishReason {
    for (const toolCall of this.toolCalls) {
      controller.enqueue({
        input: toolCall.function.arguments,
        toolCallId: toolCall.id,
        toolName: toolCall.function.name,
        type: 'tool-call',
      });
    }

    return this.#finishReason();
  }

  #detectToolCall(delta: string) {
    if (!this.#tools || this.#tools.length === 0) {
      return;
    }

    if (this.#firstMessage) {
      if (delta.trim().startsWith('{') || delta.trim().startsWith('[')) {
        this.#detectedToolCall = true;
      }

      this.#firstMessage = false;
    }
  }

  #finishReason(): LanguageModelV2FinishReason {
    if (!this.detectedToolCall) {
      return 'stop';
    }

    return 'tool-calls';
  }
}
