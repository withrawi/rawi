import chalk from 'chalk';
import {ContentFilter} from '../../../../core/content-filter/content-filter.js';
import type {DatabaseManager} from '../../../../core/database/manager.js';
import {processQuery} from '../../../../core/providers/ask/utils.js';
import {spinnerManager} from '../../../../core/shared/spinner.js';

export const streamAIResponse = async (
  credentials: any,
  sessionId: string,
  filteredQuery: string,
  dbManager: DatabaseManager,
  filteringEnabled: boolean,
  filterTypes: string[] | undefined,
  options: any,
): Promise<void> => {
  await dbManager.addMessage(
    sessionId,
    'user',
    filteredQuery,
    credentials.provider,
    credentials.model,
    credentials.temperature,
    credentials.maxTokens,
  );

  if (options.verbose) {
    spinnerManager.start(
      'generation',
      `Streaming response using ${credentials.provider} (${credentials.model})...`,
      {color: 'cyan'},
    );
  }

  console.log(`${chalk.cyan('Result:')}`);

  let response: string;
  let hasStartedStreaming = false;

  try {
    let fullResponseBuffer = '';
    const needResponseStats =
      filteringEnabled && (options.verbose || options.showFiltered);

    response = await processQuery(credentials, filteredQuery, {
      streaming: true,
      filtering: filteringEnabled
        ? {
            enabled: true,
            types: filterTypes,
            showFiltered: false,
          }
        : undefined,
      onChunk: (chunk: string) => {
        if (!hasStartedStreaming) {
          if (options.verbose) {
            spinnerManager.succeed(
              'generation',
              'Starting to stream response...',
            );
          }
          hasStartedStreaming = true;
        }

        if (needResponseStats) {
          fullResponseBuffer += chunk;
        }

        process.stdout.write(chunk);
      },
      onComplete: () => {
        console.log();

        if (needResponseStats) {
          const highlightFilter = new ContentFilter({
            enabled: true,
            types: filterTypes,
            showFiltered: false,
            highlightFiltered: options.highlightFiltered || false,
          });

          const fullFilterResult =
            highlightFilter.filterContent(fullResponseBuffer);
          const filterCount = fullFilterResult.filterCount;

          if (Object.keys(filterCount).length > 0) {
            if (options.verbose) {
              console.log(chalk.yellow('📊 Filtering Summary:'));
              console.log(chalk.yellow('───────────────────'));

              const totalFiltered = Object.values(filterCount).reduce(
                (sum, count) => sum + count,
                0,
              );
              console.log(
                chalk.yellow(`Total filtered items: ${totalFiltered}`),
              );

              console.log(chalk.yellow('\nBreakdown by type:'));
              for (const [type, count] of Object.entries(filterCount)) {
                const percentage = Math.round((count / totalFiltered) * 100);
                const bar = '█'.repeat(
                  Math.min(20, Math.floor(percentage / 5)),
                );
                console.log(
                  chalk.yellow(
                    `  ${type.padEnd(15)}: ${count.toString().padStart(3)} (${percentage}%) ${bar}`,
                  ),
                );
              }
            } else {
              const totalFiltered = Object.values(filterCount).reduce(
                (sum, count) => sum + count,
                0,
              );
              console.log(
                chalk.yellow(
                  `📊 Filtered ${totalFiltered} sensitive items from response`,
                ),
              );

              const sortedTypes = Object.entries(filterCount)
                .sort(([, countA], [, countB]) => countB - countA)
                .slice(0, 3);

              if (sortedTypes.length > 0) {
                const typesList = sortedTypes
                  .map(([type, count]) => `${type} (${count})`)
                  .join(', ');
                console.log(chalk.yellow(`   Most common: ${typesList}`));
              }

              console.log(
                chalk.dim('   Use --verbose for detailed filtering statistics'),
              );
            }

            if (options.highlightFiltered && fullFilterResult.highlightedText) {
              console.log(
                chalk.yellow('\n🔍 Highlighted sensitive content in response:'),
              );
              console.log('─────────────────────────────────────────');
              console.log(fullFilterResult.highlightedText);
              console.log('─────────────────────────────────────────');
            }
          } else if (options.verbose) {
            console.log(
              chalk.dim('✅ No sensitive information detected in response'),
            );
          }
        }

        if (options.verbose) {
          console.log(chalk.dim('✅ Streaming completed'));
        }
      },
      onError: (error: Error) => {
        if (options.verbose) {
          spinnerManager.fail('generation', 'Failed to generate response');
          console.error(chalk.red(`❌ ${error.message}`));
        }
      },
    });

    await dbManager.addMessage(
      sessionId,
      'assistant',
      response,
      credentials.provider,
      credentials.model,
      credentials.temperature,
      credentials.maxTokens,
    );

    if (options.verbose) {
      spinnerManager.succeed('generation', 'Response streamed successfully!');
    }
  } catch (error) {
    if (options.verbose) {
      spinnerManager.fail('generation', 'Failed to generate response');
      console.error(
        chalk.red(
          `❌ ${error instanceof Error ? error.message : String(error)}`,
        ),
      );
    }
    response = `Unable to generate response using ${credentials.provider} (${credentials.model}). Error: ${error instanceof Error ? error.message : String(error)}`;

    await dbManager.addMessage(
      sessionId,
      'assistant',
      response,
      credentials.provider,
      credentials.model,
      credentials.temperature,
      credentials.maxTokens,
      {error: true},
    );
  }
};
