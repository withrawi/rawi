import chalk from 'chalk';
import {Command} from 'commander';
import {getCredentials, isConfigured} from '../../core/configs/utils.js';
import {ContentFilter} from '../../core/content-filter/content-filter.js';
import {getAvailablePatternTypes} from '../../core/content-filter/patterns.js';
import {DatabaseManager} from '../../core/database/manager.js';
import {SupportedFileType} from '../../core/file-readers/interfaces/types.js';
import {FileReaderManager} from '../../core/file-readers/managers/file-reader.manager.js';
import {processQuery} from '../../core/providers/utils.js';
import {DEFAULT_PROFILE} from '../../core/shared/constants.js';
import {spinnerManager} from '../../core/shared/spinner.js';
import {applyActTemplate} from '../../core/templates/utils.js';

const readStdin = (): Promise<string> => {
  return new Promise((resolve) => {
    let data = '';

    if (process.stdin.isTTY) {
      resolve('');
      return;
    }

    process.stdin.setEncoding('utf8');

    process.stdin.on('data', (chunk) => {
      data += chunk;
    });

    process.stdin.on('end', () => {
      resolve(data.trim());
    });
  });
};

export const createAskCommand = (): Command => {
  const askCommand = new Command('ask');

  askCommand
    .description(
      [
        chalk.bold('Ask AI a question and get a response.'),
        '',
        chalk.gray('Supports piped input from stdin and file processing.'),
        chalk.gray('Use --act <template> for expert prompt templates.'),
        chalk.gray('See all templates with "rawi act --list".'),
      ].join('\n'),
    )
    .argument(
      '[query]',
      chalk.white(
        'The question or prompt to send to the AI (can be combined with piped input or file content)',
      ),
    )
    .option(
      '-p, --profile <profile>',
      chalk.white('Profile to use for AI configuration'),
      DEFAULT_PROFILE,
    )
    .option(
      '-s, --session <sessionId>',
      chalk.white('Continue an existing chat session'),
    )
    .option('-n, --new-session', chalk.white('Start a new chat session'))
    .option(
      '--act <template>',
      chalk.white('Use an act template (e.g., ethereum-developer)'),
    )
    .option(
      '-f, --file <path>',
      chalk.white(
        'Process content from a file (PDF, DOCX, PPTX, XLSX, ODT, ODP, ODS, TXT, etc.)',
      ),
    )
    .option(
      '-F, --files <paths...>',
      chalk.white('Process content from multiple files'),
    )
    .option(
      '-b, --batch <patterns...>',
      chalk.white(
        'Process files matching glob patterns (e.g., "src/**/*.js" "docs/*.md")',
      ),
    )
    .option(
      '--parallel',
      chalk.white('Process multiple files in parallel (faster for many files)'),
    )
    .option(
      '--max-concurrency <number>',
      chalk.white(
        'Maximum number of files to process concurrently (default: 5)',
      ),
      '5',
    )
    .option(
      '--continue-on-error',
      chalk.white('Continue processing other files if one fails'),
    )
    .option(
      '--file-type <type>',
      chalk.white(
        'Override automatic file type detection (pdf, docx, pptx, xlsx, odt, odp, ods, txt, etc.)',
      ),
    )
    .option(
      '--verbose',
      chalk.white('Show detailed status and debug information'),
    )
    .option(
      '--filter-sensitive',
      chalk.white('Filter sensitive information from prompts and responses'),
    )
    .option(
      '--filter-types <types>',
      chalk.white(
        'Comma-separated list of information types to filter (e.g., email,phone,creditcard)',
      ),
    )
    .option(
      '--show-filtered',
      chalk.white(
        'Show which information was filtered and display filtering statistics',
      ),
    )
    .option(
      '--highlight-filtered',
      chalk.white('Show filtered content with highlighting in terminal output'),
    )
    .option(
      '--save-filter-config',
      chalk.white(
        'Save current filtering configuration as default for future use',
      ),
    )
    .option(
      '--reset-filter-config',
      chalk.white(
        'Reset filtering configuration to defaults (enables all filter types)',
      ),
    )
    .addHelpText(
      'after',
      [
        chalk.bold.cyan('\nExamples:'),
        chalk.gray(
          '  rawi ask "What is this document about?" --file report.pdf',
        ),
        chalk.gray('  rawi ask "Analyze this data" --file data.xlsx'),
        chalk.gray('  rawi ask "Review this code" --file src/app.js'),
        chalk.gray(
          '  rawi ask "Summarize" --file document.docx --act technical-writer',
        ),
        chalk.gray(
          '  echo "Additional context" | rawi ask "Analyze" --file data.json',
        ),
        '',
        chalk.bold.cyan('Batch Processing:'),
        chalk.gray(
          '  rawi ask "Review these files" --files file1.js file2.py file3.md',
        ),
        chalk.gray(
          '  rawi ask "Analyze source code" --batch "src/**/*.{js,ts}"',
        ),
        chalk.gray(
          '  rawi ask "Review docs" --batch "docs/**/*.md" --parallel',
        ),
        chalk.gray(
          '  rawi ask "Check configs" --batch "**/*.{json,yml,yaml}" --continue-on-error',
        ),
        '',
        chalk.bold.cyan('Content Filtering:'),
        chalk.gray('  rawi ask "Analyze this data" --filter-sensitive'),
        chalk.gray(
          '  rawi ask "Process this info" --filter-types email,phone,creditcard',
        ),
        chalk.gray(
          '  rawi ask "Check this text" --filter-sensitive --show-filtered',
        ),
        chalk.gray(
          '  rawi ask "Analyze this data" --filter-sensitive --highlight-filtered',
        ),
        chalk.gray(
          '  rawi ask "Process this file" --file customer-data.csv --filter-sensitive --verbose',
        ),
        chalk.gray(
          '  rawi ask "Save my settings" --filter-types email,phone --save-filter-config',
        ),
        chalk.gray('  rawi ask --reset-filter-config'),
        chalk.gray(
          '  rawi ask "What filter types are available?" --filter-sensitive --verbose',
        ),
        '',
        chalk.bold.cyan('See also:'),
        chalk.gray('  rawi act --list'),
        chalk.gray('  rawi provider --list'),
        chalk.gray('  rawi configure --show'),
        chalk.gray('  rawi ask --help'),
      ].join('\n'),
    )
    .action(async (query: string, options: any) => {
      let dbManager: DatabaseManager | null = null;

      try {
        const stdinContent = await readStdin();
        let fileContent = '';

        if (options.file || options.files || options.batch) {
          if (options.verbose) {
            console.log(chalk.dim('📄 Processing files...'));
          }

          try {
            let forceFileType: SupportedFileType | undefined;
            if (options.fileType) {
              const fileTypeKey = options.fileType.toUpperCase();
              if (fileTypeKey in SupportedFileType) {
                forceFileType =
                  SupportedFileType[
                    fileTypeKey as keyof typeof SupportedFileType
                  ];
              } else {
                console.error(
                  chalk.red(`❌ Unsupported file type: ${options.fileType}`),
                );
                console.log(
                  chalk.yellow(
                    'Supported types: pdf, docx, pptx, xlsx, odt, odp, ods, txt, js, jsx, ts, tsx, py, java, cpp, c, go, rs, rb, kt, swift, dart, scala, php, json, md, yml, yaml, xml, html, css, sql, sh, bash, env, ini, conf, toml, log, and more',
                  ),
                );
                process.exit(1);
              }
            }

            const fileReaderManager = new FileReaderManager({
              verbose: options.verbose,
              forceFileType,
            });

            let result: any;
            let totalFiles = 0;

            if (options.file) {
              result = await fileReaderManager.readFile(options.file);
              if (result.success && result.content) {
                fileContent = result.content.text;
                totalFiles = 1;
              } else {
                console.error(
                  chalk.red(`❌ Failed to process file: ${result.error}`),
                );
                process.exit(1);
              }
            } else {
              const maxConcurrency =
                Number.parseInt(options.maxConcurrency) || 5;
              const batchOptions = {
                parallel: options.parallel,
                maxConcurrency,
                continueOnError: options.continueOnError,
                fileType: options.fileType,
                onProgress: options.verbose
                  ? (processed: number, total: number, currentFile: string) => {
                      console.log(
                        chalk.dim(
                          `📝 [${processed}/${total}] Processing: ${currentFile}`,
                        ),
                      );
                    }
                  : undefined,
              };

              let summary: any;
              if (options.files) {
                summary = await fileReaderManager.processMultipleFiles(
                  options.files,
                  batchOptions,
                );
              } else if (options.batch) {
                summary = await fileReaderManager.processGlobPatterns(
                  options.batch,
                  batchOptions,
                );
              }

              if (summary) {
                const contentParts: string[] = [];
                let successCount = 0;

                for (const fileResult of summary.results) {
                  if (fileResult.result.success && fileResult.result.content) {
                    contentParts.push(
                      `=== ${fileResult.filePath} ===\n${fileResult.result.content.text}\n`,
                    );
                    successCount++;
                  }
                }

                fileContent = contentParts.join('\n');
                totalFiles = summary.totalFiles;

                if (options.verbose) {
                  console.log(
                    chalk.dim(
                      `✅ Successfully processed ${successCount}/${summary.totalFiles} files`,
                    ),
                  );
                  console.log(
                    chalk.dim(
                      `⏱️  Total time: ${(summary.totalProcessingTime / 1000).toFixed(2)}s`,
                    ),
                  );
                  console.log(
                    chalk.dim(
                      `📊 Total content length: ${fileContent.length} characters`,
                    ),
                  );

                  if (summary.failedFiles > 0) {
                    console.log(
                      chalk.yellow(
                        `⚠️  ${summary.failedFiles} files failed to process:`,
                      ),
                    );
                    for (const error of summary.errors) {
                      console.log(
                        chalk.yellow(`   • ${error.filePath}: ${error.error}`),
                      );
                    }
                  }
                }

                if (successCount === 0) {
                  console.error(
                    chalk.red('❌ No files were processed successfully'),
                  );
                  process.exit(1);
                }
              }
            }

            if (options.verbose && totalFiles === 1) {
              console.log(chalk.dim('✅ Successfully processed file'));
              console.log(
                chalk.dim(
                  `📊 Content length: ${fileContent.length} characters`,
                ),
              );
            }
          } catch (error) {
            const errorMessage =
              error instanceof Error ? error.message : 'Unknown error occurred';
            console.error(
              chalk.red(`❌ Error processing file: ${errorMessage}`),
            );
            process.exit(1);
          }
        }

        let finalQuery: string;
        const contentParts = [query, stdinContent, fileContent].filter(Boolean);

        if (contentParts.length === 0) {
          askCommand.help();
          return;
        }

        finalQuery = contentParts.join('\n\n');

        if (options.resetFilterConfig) {
          const contentFilter = new ContentFilter({}, true);
          const success = contentFilter.resetConfiguration();

          if (success) {
            console.log(
              chalk.green('✅ Filter configuration reset to defaults'),
            );
            if (options.verbose) {
              console.log(
                chalk.dim('Default filter types:'),
                contentFilter.getAvailableFilterTypes().join(', '),
              );
            }
          } else {
            console.error(chalk.red('❌ Failed to reset filter configuration'));
          }

          if (!finalQuery || finalQuery.trim() === '') {
            return;
          }
        }

        const filteringEnabled = options.filterSensitive || (options.filterTypes && options.filterTypes.trim() !== '');
        let filterTypes: string[] | undefined;

        if (filteringEnabled && options.filterTypes) {
          filterTypes = options.filterTypes
            .split(',')
            .map((type: string) => type.trim());

          if (options.verbose) {
            console.log(
              chalk.dim(
                `🔒 Content filtering enabled with types: ${filterTypes?.join(', ') || ''}`,
              ),
            );
          }
        } else if (filteringEnabled) {
          filterTypes = getAvailablePatternTypes();

          if (options.verbose) {
            console.log(
              chalk.dim(
                '🔒 Content filtering enabled with all available types',
              ),
            );
          }
        }

        const contentFilter = new ContentFilter(
          {
            enabled: filteringEnabled,
            types: filterTypes || getAvailablePatternTypes(),
            showFiltered: options.showFiltered || false,
            highlightFiltered: options.highlightFiltered || false,
          },
          true,
        );

        let filteredQuery = finalQuery;
        if (filteringEnabled) {
          const filterResult = contentFilter.filterContent(finalQuery);
          filteredQuery = filterResult.filteredText;

          if (options.verbose) {
            console.log(chalk.yellow('\n🔍 Query after filtering:'));
            console.log(chalk.yellow('─────────────────────────'));
            console.log(filteredQuery);
            console.log(chalk.yellow('─────────────────────────'));
          }
        }

        if (options.saveFilterConfig) {
          const success = contentFilter.saveConfiguration();

          if (success) {
            console.log(
              chalk.green('✅ Filter configuration saved successfully'),
            );
            if (options.verbose) {
              const config = contentFilter.getOptions();
              console.log(chalk.dim('Enabled:'), config.enabled);
              console.log(chalk.dim('Filter types:'), config.types.join(', '));
              console.log(chalk.dim('Show filtered:'), config.showFiltered);
            }
          } else {
            console.error(chalk.red('❌ Failed to save filter configuration'));
          }

          if (!finalQuery || finalQuery.trim() === '') {
            return;
          }
        }

        if (
          filteringEnabled &&
          (options.verbose || options.showFiltered || options.highlightFiltered)
        ) {
          const filterResult = contentFilter.filterContent(finalQuery);

          if (Object.keys(filterResult.filterCount).length > 0) {
            if (options.verbose) {
              console.log(chalk.yellow('📊 Prompt Filtering Summary:'));
              console.log(chalk.yellow('─────────────────────────'));

              const totalFiltered = Object.values(
                filterResult.filterCount,
              ).reduce((sum, count) => sum + count, 0);
              console.log(
                chalk.yellow(`Total filtered items: ${totalFiltered}`),
              );

              console.log(chalk.yellow('\nBreakdown by type:'));
              for (const [type, count] of Object.entries(
                filterResult.filterCount,
              )) {
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
              const totalFiltered = Object.values(
                filterResult.filterCount,
              ).reduce((sum, count) => sum + count, 0);
              console.log(
                chalk.yellow(
                  `📊 Filtered ${totalFiltered} sensitive items from prompt`,
                ),
              );

              const sortedTypes = Object.entries(filterResult.filterCount)
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

            if (options.highlightFiltered && filterResult.highlightedText) {
              console.log(
                chalk.yellow('\n🔍 Highlighted sensitive content in prompt:'),
              );
              console.log('─────────────────────────────────────────');
              console.log(filterResult.highlightedText);
              console.log('─────────────────────────────────────────');
            }
          }
        }

        if (options.act) {
          try {
            filteredQuery = applyActTemplate(options.act, filteredQuery);
            if (options.verbose) {
              console.log(chalk.dim(`🎭 Using act template: ${options.act}`));
            }
          } catch (error) {
            const errorMessage =
              error instanceof Error ? error.message : 'Unknown error occurred';
            if (options.verbose) {
              console.error(chalk.red(`❌ ${errorMessage}`));
              console.log(
                chalk.yellow(
                  '💡 Use "rawi act --list" to see available templates.',
                ),
              );
            }
            return;
          }
        }

        const profile = options.profile || DEFAULT_PROFILE;

        if (!isConfigured(profile)) {
          if (options.verbose) {
            console.error(
              chalk.red(
                `❌ Profile '${profile}' does not exist or is not properly configured.`,
              ),
            );
            console.error(
              chalk.yellow(
                `Run 'rawi configure -p ${profile}' to set up this profile.`,
              ),
            );
          }
          process.exit(1);
        }

        dbManager = new DatabaseManager();

        let sessionId: string;
        if (options.newSession) {
          sessionId = await dbManager.createSession(profile);
          if (options.verbose) {
            console.log(chalk.dim(`🆕 Started new session: ${sessionId}`));
          }
        } else if (options.session) {
          sessionId = options.session;
          const session = await dbManager.getSession(sessionId);
          if (!session) {
            if (options.verbose) {
              console.error(chalk.red(`❌ Session '${sessionId}' not found.`));
            }
            process.exit(1);
          }
          if (session.profile !== profile) {
            if (options.verbose) {
              console.error(
                chalk.red(
                  `❌ Session '${sessionId}' belongs to profile '${session.profile}', not '${profile}'.`,
                ),
              );
            }
            process.exit(1);
          }
          if (options.verbose) {
            console.log(chalk.dim(`🔄 Continuing session: ${sessionId}`));
          }
        } else {
          sessionId = await dbManager.getCurrentSession(profile);
          if (options.verbose) {
            console.log(chalk.dim(`📝 Using current session: ${sessionId}`));
          }
        }

        if (options.verbose) {
          console.log(`Using profile: ${profile}`);
          console.log(
            `Processing query: ${filteredQuery.length > 100 ? `${filteredQuery.substring(0, 100)}...` : filteredQuery}`,
          );
        }

        if (options.verbose) {
          spinnerManager.start('validation', 'Validating configuration...');
        }

        const credentials = getCredentials(profile);

        if (!credentials) {
          if (options.verbose) {
            spinnerManager.fail(
              'validation',
              'Configuration validation failed',
            );
            console.error(
              chalk.red(
                `❌ Unable to load credentials for profile '${profile}'.`,
              ),
            );
          }
          process.exit(1);
        }

        if (options.verbose) {
          spinnerManager.succeed(
            'validation',
            'Configuration validated successfully',
          );
        }

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
                      const percentage = Math.round(
                        (count / totalFiltered) * 100,
                      );
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
                      chalk.dim(
                        '   Use --verbose for detailed filtering statistics',
                      ),
                    );
                  }

                  if (
                    options.highlightFiltered &&
                    fullFilterResult.highlightedText
                  ) {
                    console.log(
                      chalk.yellow(
                        '\n🔍 Highlighted sensitive content in response:',
                      ),
                    );
                    console.log('─────────────────────────────────────────');
                    console.log(fullFilterResult.highlightedText);
                    console.log('─────────────────────────────────────────');
                  }
                } else if (options.verbose) {
                  console.log(
                    chalk.dim(
                      '✅ No sensitive information detected in response',
                    ),
                  );
                }
              }

              if (options.verbose) {
                console.log(chalk.dim('✅ Streaming completed'));
              }
            },
            onError: (error: Error) => {
              if (options.verbose) {
                spinnerManager.fail(
                  'generation',
                  'Failed to generate response',
                );
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
            spinnerManager.succeed(
              'generation',
              'Response streamed successfully!',
            );
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

        if (options.verbose) {
          const session = await dbManager.getSession(sessionId);
          if (session) {
            console.log(
              chalk.dim(
                `\n💬 Session: ${sessionId} (${session.messageCount} messages)`,
              ),
            );
          }
        }
      } catch (error) {
        if (options.verbose) {
          console.error('Error processing query:', error);
        }
        process.exit(1);
      } finally {
        if (dbManager) {
          dbManager.close();
        }
      }
    });

  return askCommand;
};
