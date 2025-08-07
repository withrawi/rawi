import chalk from 'chalk';
import {Command} from 'commander';
import {DatabaseManager} from '../../core/database/manager.js';
import {DEFAULT_PROFILE} from '../../core/shared/constants.js';
import {
  assembleQuery,
  displayFilterStatistics,
  filterAndDisplayQuery,
  handleSession,
  logProcessingInfo,
  processActTemplate,
  processFiles,
  processFilterTypes,
  resetFilterConfig,
  saveFilterConfig,
  setupContentFilter,
  streamAIResponse,
  validateCredentials,
  validateProfile,
} from './ask/actions/index.js';
import {askCommandHelpText, askCommandOptions} from './ask/index.js';

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
    );

  askCommandOptions.forEach((option) => {
    if ('defaultValue' in option && option.defaultValue !== undefined) {
      askCommand.option(option.flags, option.description, option.defaultValue);
    } else {
      askCommand.option(option.flags, option.description);
    }
  });

  askCommand
    .addHelpText('after', askCommandHelpText)
    .action(async (query: string, options: any) => {
      let dbManager: DatabaseManager | null = null;

      try {
        let fileContent = '';
        if (options.file || options.files || options.batch) {
          const fileResult = await processFiles(options);
          fileContent = fileResult.fileContent;
        }

        const finalQuery = await assembleQuery(query, fileContent);

        if (!finalQuery || finalQuery.trim() === '') {
          askCommand.help();
          return;
        }

        if (options.resetFilterConfig) {
          resetFilterConfig(options);
          if (!finalQuery || finalQuery.trim() === '') {
            return;
          }
        }

        const filteringEnabled =
          options.filterSensitive ||
          (options.filterTypes && options.filterTypes.trim() !== '');
        const filterTypes = processFilterTypes(filteringEnabled, options);
        const contentFilter = setupContentFilter(
          filteringEnabled,
          filterTypes,
          options,
        );

        const filteredQuery = filterAndDisplayQuery(
          contentFilter,
          finalQuery,
          filteringEnabled,
          options,
        );
        displayFilterStatistics(
          contentFilter,
          finalQuery,
          filteringEnabled,
          options,
        );

        if (options.saveFilterConfig) {
          saveFilterConfig(contentFilter, options);
          if (!finalQuery || finalQuery.trim() === '') {
            return;
          }
        }

        let processedQuery = filteredQuery;
        if (options.act) {
          try {
            processedQuery = processActTemplate(
              options.act,
              filteredQuery,
              options,
            );
          } catch (_error) {
            return;
          }
        }

        const profile = options.profile || DEFAULT_PROFILE;
        validateProfile(profile, options);

        dbManager = new DatabaseManager();
        const sessionId = await handleSession(dbManager, profile, options);

        const credentials = validateCredentials(profile, options);
        logProcessingInfo(profile, processedQuery, options);

        await streamAIResponse(
          credentials,
          sessionId,
          processedQuery,
          dbManager,
          filteringEnabled,
          filterTypes,
          options,
        );

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
