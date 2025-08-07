import {EmptyResponseBodyError} from '@ai-sdk/provider';
import {
  extractResponseHeaders,
  type ParseResult,
  type ResponseHandler,
  safeParseJSON,
} from '@ai-sdk/provider-utils';
import type {ZodSchema} from 'zod';

import {TextLineStream} from './text-line-stream.js';

export const createJsonStreamResponseHandler =
  <T>(
    chunkSchema: ZodSchema<T>,
  ): ResponseHandler<ReadableStream<ParseResult<T>>> =>
  async ({response}: {response: Response}) => {
    const responseHeaders = extractResponseHeaders(response);

    if (response.body === null) {
      throw new EmptyResponseBodyError({});
    }

    return {
      responseHeaders,
      value: response.body
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new TextLineStream())
        .pipeThrough(
          new TransformStream<string, ParseResult<T>>({
            async transform(chunkText, controller) {
              controller.enqueue(
                await safeParseJSON({
                  schema: chunkSchema,
                  text: chunkText,
                }),
              );
            },
          }),
        ),
    };
  };
