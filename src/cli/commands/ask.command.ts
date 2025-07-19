import chalk from 'chalk';
import {Command} from 'commander';
import {getCredentials, isConfigured} from '../../core/configs/utils.js';
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
      '--file-type <type>',
      chalk.white(
        'Override automatic file type detection (pdf, docx, pptx, xlsx, odt, odp, ods, txt, etc.)',
      ),
    )
    .option(
      '--verbose',
      chalk.white('Show detailed status and debug information'),
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

        // Process file if provided
        if (options.file) {
          if (options.verbose) {
            console.log(chalk.dim(`📄 Processing file: ${options.file}`));
          }

          try {
            // Override file type if specified
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

            const result = await fileReaderManager.readFile(options.file);

            if (result.success && result.content) {
              fileContent = result.content.text;
              if (options.verbose) {
                console.log(
                  chalk.dim(
                    `✅ Successfully processed ${result.content.metadata.fileType} file`,
                  ),
                );
                console.log(
                  chalk.dim(
                    `📊 Content length: ${fileContent.length} characters`,
                  ),
                );
              }
            } else {
              console.error(
                chalk.red(`❌ Failed to process file: ${result.error}`),
              );
              process.exit(1);
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

        // Combine query, stdin content, and file content
        let finalQuery: string;
        const contentParts = [query, stdinContent, fileContent].filter(Boolean);

        if (contentParts.length === 0) {
          askCommand.help();
          return;
        }

        finalQuery = contentParts.join('\n\n');

        if (options.act) {
          try {
            finalQuery = applyActTemplate(options.act, finalQuery);
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
            `Processing query: ${finalQuery.length > 100 ? `${finalQuery.substring(0, 100)}...` : finalQuery}`,
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
          finalQuery,
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
          response = await processQuery(credentials, finalQuery, {
            streaming: true,
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
              process.stdout.write(chunk);
            },
            onComplete: () => {
              console.log(); // Add newline after streaming
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
