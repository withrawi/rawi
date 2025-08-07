import {
  type LanguageModelV2Prompt,
  UnsupportedFunctionalityError,
} from '@ai-sdk/provider';
import {convertUint8ArrayToBase64} from '@ai-sdk/provider-utils';

import type {OllamaChatPrompt} from './ollama-chat-prompt.js';

export function convertToOllamaChatMessages(
  prompt: LanguageModelV2Prompt,
): OllamaChatPrompt {
  const messages: OllamaChatPrompt = [];

  for (const {content, role} of prompt) {
    switch (role) {
      case 'system': {
        messages.push({content, role: 'system'});
        break;
      }

      case 'user': {
        messages.push({
          ...content.reduce<{content: string; images?: string[]}>(
            (previous, current) => {
              if (current.type === 'text') {
                previous.content += current.text;
              } else if (
                current.type === 'file' &&
                current.mediaType.startsWith('image/') &&
                current.data instanceof URL
              ) {
                throw new UnsupportedFunctionalityError({
                  functionality: 'Image URLs in user messages',
                });
              } else if (
                current.type === 'file' &&
                current.mediaType.startsWith('image/') &&
                typeof current.data === 'string'
              ) {
                previous.images = previous.images || [];
                previous.images.push(current.data);
              } else if (
                current.type === 'file' &&
                current.mediaType.startsWith('image/') &&
                current.data instanceof Uint8Array
              ) {
                previous.images = previous.images || [];
                previous.images.push(convertUint8ArrayToBase64(current.data));
              }

              return previous;
            },
            {content: ''},
          ),
          role: 'user',
        });
        break;
      }

      case 'assistant': {
        const text: Array<string> = [];
        const toolCalls: Array<{
          function: {arguments: object; name: string};
          id: string;
          type: 'function';
        }> = [];

        for (const part of content) {
          switch (part.type) {
            case 'text': {
              text.push(part.text);
              break;
            }
            case 'tool-call': {
              toolCalls.push({
                function: {
                  arguments: part.input as object,
                  name: part.toolName,
                },
                id: part.toolCallId,
                type: 'function',
              });
              break;
            }
            case 'tool-result': {
              // Tool results in assistant messages should be treated as text content
              if (
                part.output.type === 'text' ||
                part.output.type === 'error-text'
              ) {
                text.push(part.output.value);
              } else if (
                part.output.type === 'json' ||
                part.output.type === 'error-json'
              ) {
                text.push(JSON.stringify(part.output.value));
              } else if (part.output.type === 'content') {
                const contentText = part.output.value
                  .map((item) => (item.type === 'text' ? item.text : '[media]'))
                  .join('');
                text.push(contentText);
              }
              break;
            }
            case 'file':
            case 'reasoning': {
              // Handle new part types that are not supported yet
              break;
            }
            default: {
              const _exhaustiveCheck: never = part;
              throw new Error(`Unsupported part: ${_exhaustiveCheck}`);
            }
          }
        }

        messages.push({
          content: text.join(','),
          role: 'assistant',
          tool_calls: toolCalls.length > 0 ? toolCalls : undefined,
        });

        break;
      }

      case 'tool': {
        messages.push(
          ...content.map((part) => {
            // Handle the new output structure
            let contentValue: string;

            if (
              part.output.type === 'text' ||
              part.output.type === 'error-text'
            ) {
              contentValue = part.output.value;
            } else if (
              part.output.type === 'json' ||
              part.output.type === 'error-json'
            ) {
              contentValue = JSON.stringify(part.output.value);
            } else if (part.output.type === 'content') {
              contentValue = part.output.value
                .map((item) => (item.type === 'text' ? item.text : '[media]'))
                .join('');
            } else {
              contentValue = String(part.output);
            }

            return {
              // Non serialized contents are not accepted by ollama, triggering the following error:
              // "json: cannot unmarshal array into Go struct field ChatRequest.messages of type string"
              content: contentValue,
              role: 'tool' as const,
              tool_call_id: part.toolCallId,
            };
          }),
        );
        break;
      }

      default: {
        const _exhaustiveCheck: string = role;
        throw new Error(`Unsupported role: ${_exhaustiveCheck}`);
      }
    }
  }

  return messages;
}
