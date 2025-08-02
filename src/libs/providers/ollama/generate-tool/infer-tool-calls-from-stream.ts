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
  private _firstMessage: boolean;
  private readonly _toolCalls: ToolCall[];
  private readonly _tools?: LanguageModelV2CallOptions['tools'];
  private _toolPartial: string;
  private _detectedToolCall: boolean;

  constructor({tools}: {tools?: LanguageModelV2CallOptions['tools']}) {
    this._firstMessage = true;
    this._tools = tools;
    this._toolPartial = '';
    this._toolCalls = [];
    this._detectedToolCall = false;
  }

  get toolCalls(): ToolCall[] {
    return this._toolCalls;
  }

  get detectedToolCall(): boolean {
    return this._detectedToolCall;
  }

  parse({
    controller,
    delta,
  }: {
    controller: TransformStreamDefaultController<LanguageModelV2StreamPart>;
    delta: string;
  }): boolean {
    this.detectToolCall(delta);

    if (!this._detectedToolCall) {
      return false;
    }

    this._toolPartial += delta;

    let parsedFunctions = parse(this._toolPartial);
    if (!Array.isArray(parsedFunctions)) {
      parsedFunctions = [parsedFunctions];
    }

    for (const [index, parsedFunction] of parsedFunctions.entries()) {
      const parsedArguments = JSON.stringify(parsedFunction?.parameters) ?? '';

      if (parsedArguments === '') {
        continue;
      }

      if (!this._toolCalls[index]) {
        this._toolCalls[index] = {
          function: {
            arguments: '',
            name: parsedFunction.name,
          },
          id: generateId(),
          type: 'function',
        };
      }

      const toolCall = this._toolCalls[index];
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

    return this.finishReason();
  }

  private detectToolCall(delta: string) {
    if (!this._tools || this._tools.length === 0) {
      return;
    }

    if (this._firstMessage) {
      if (delta.trim().startsWith('{') || delta.trim().startsWith('[')) {
        this._detectedToolCall = true;
      }

      this._firstMessage = false;
    }
  }

  private finishReason(): LanguageModelV2FinishReason {
    if (!this.detectedToolCall) {
      return 'stop';
    }

    return 'tool-calls';
  }
}
