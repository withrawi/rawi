import type {RawiCredentials, StreamingResponse} from '../shared/index.js';
import {ContentFilter, type FilterOptions} from './content-filter.js';

export interface FilterMiddlewareOptions {
  filter?: ContentFilter;
  filterOptions?: Partial<FilterOptions>;
  logStats?: boolean;
}

export function createFilterMiddleware(options: FilterMiddlewareOptions = {}) {
  const filter =
    options.filter ||
    new ContentFilter(options.filterOptions, !options.filterOptions);

  return function filterMiddleware(
    providerFn: (
      credentials: RawiCredentials,
      prompt: string,
    ) => Promise<StreamingResponse>,
  ) {
    return async function wrappedProviderFn(
      credentials: RawiCredentials,
      prompt: string,
    ): Promise<StreamingResponse> {
      const filteredPromptResult = filter.filterContent(prompt);
      const filteredPrompt = filteredPromptResult.filteredText;

      if (
        options.logStats &&
        Object.keys(filteredPromptResult.filterCount).length > 0
      ) {
        const totalFiltered = Object.values(
          filteredPromptResult.filterCount,
        ).reduce((sum, count) => sum + count, 0);

        console.log('📊 Filtered sensitive information from prompt:');
        console.log(`Total filtered items: ${totalFiltered}`);

        console.log('\nBreakdown by type:');
        for (const [type, count] of Object.entries(
          filteredPromptResult.filterCount,
        )) {
          const percentage = Math.round((count / totalFiltered) * 100);
          console.log(`  ${type.padEnd(15)}: ${count} (${percentage}%)`);
        }
      }

      const originalResponse = await providerFn(credentials, filteredPrompt);

      return {
        ...originalResponse,
        textStream: (async function* () {
          for await (const chunk of originalResponse.textStream) {
            const filteredChunk = filter.filterContent(chunk);
            yield filteredChunk.filteredText;
          }
        })(),
      };
    };
  };
}

export function applyContentFiltering(
  providerFn: (
    credentials: RawiCredentials,
    prompt: string,
  ) => Promise<StreamingResponse>,
  options: FilterMiddlewareOptions = {},
) {
  return createFilterMiddleware(options)(providerFn);
}
