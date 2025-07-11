import chalk from 'chalk';
import {Command} from 'commander';
import {getCredentials, isConfigured} from '../../core/configs/utils.js';
import {DatabaseManager} from '../../core/database/manager.js';
import {generateWithBedrock} from '../../core/providers/amazon-bedrock.provider.js';
import {generateWithAnthropic} from '../../core/providers/anthropic.provider.js';
import {generateWithAzure} from '../../core/providers/azura.provider.js';
import {generateWithGoogle} from '../../core/providers/google.provider.js';
import {generateWithLMStudio} from '../../core/providers/lmstudio.provider.js';
import {generateWithOllama} from '../../core/providers/ollama.provider.js';
import {generateWithOpenAI} from '../../core/providers/openai.provider.js';
import {generateWithQwen} from '../../core/providers/qwen.provider.js';
import {generateWithXAI} from '../../core/providers/xai.provider.js';
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
        chalk.gray('Supports piped input from stdin.'),
        chalk.gray('Use --act <template> for expert prompt templates.'),
        chalk.gray('See all templates with "rawi act --list".'),
      ].join('\n'),
    )
    .argument(
      '[query]',
      chalk.white(
        'The question or prompt to send to the AI (can be combined with piped input)',
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
      '--verbose',
      chalk.white('Show detailed status and debug information'),
    )
    .addHelpText(
      'after',
      [
        chalk.bold.cyan('\nSee also:'),
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

        let finalQuery: string;
        if (stdinContent) {
          if (query) {
            finalQuery = `${query}\n\n${stdinContent}`;
          } else {
            finalQuery = stdinContent;
          }
        } else if (query) {
          finalQuery = query;
        } else {
          askCommand.help();
          return;
        }

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
            `Generating response using ${credentials.provider} (${credentials.model})...`,
            {color: 'cyan'},
          );
        }

        if (!options.verbose) {
          spinnerManager.start('result', `${chalk.cyan('Result:')}`);
        }

        let response: string;

        try {
          if (credentials.provider === 'google') {
            response = await generateWithGoogle(credentials, finalQuery);
          } else if (credentials.provider === 'ollama') {
            response = await generateWithOllama(credentials, finalQuery);
          } else if (credentials.provider === 'anthropic') {
            response = await generateWithAnthropic(credentials, finalQuery);
          } else if (credentials.provider === 'openai') {
            response = await generateWithOpenAI(credentials, finalQuery);
          } else if (credentials.provider === 'xai') {
            response = await generateWithXAI(credentials, finalQuery);
          } else if (credentials.provider === 'azure') {
            response = await generateWithAzure(credentials, finalQuery);
          } else if (credentials.provider === 'bedrock') {
            response = await generateWithBedrock(credentials, finalQuery);
          } else if (credentials.provider === 'qwen') {
            response = await generateWithQwen(credentials, finalQuery);
          } else if (credentials.provider === 'lmstudio') {
            response = await generateWithLMStudio(credentials, finalQuery);
          } else {
            if (options.verbose) {
              spinnerManager.fail('generation', 'Unsupported provider');
              console.error(
                chalk.red(
                  `❌ Provider '${credentials.provider}' is not supported yet.`,
                ),
              );
            }
            response = `Unsupported provider: ${credentials.provider}. Please configure a supported provider (OpenAI, Anthropic, Google, Ollama, xAI, Azure, Bedrock, Qwen, or LM Studio).`;
          }

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
              'Response generated successfully!',
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
          console.log(`\n${chalk.cyan('Result:')}`);
        }
        if (!options.verbose) {
          spinnerManager.succeed(
            'result',
            `${chalk.cyan('Result:')}\n${response}`,
          );
        } else {
          console.log(response);
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
