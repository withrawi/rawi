import {select} from '@inquirer/prompts';
import chalk from 'chalk';
import Table from 'cli-table3';
import {Command} from 'commander';
import {DatabaseManager} from '../../core/database/manager.js';
import {
  DEFAULT_HISTORY_LIMIT,
  DEFAULT_PROFILE,
} from '../../core/shared/constants.js';
import type {ChatHistoryOptions} from '../../core/shared/types.js';
import {formatRelativeTime, truncateText} from '../../core/shared/utils.js';

export const createHistoryCommand = (): Command => {
  const historyCommand = new Command('history');

  historyCommand.description(
    [
      chalk.bold('Manage chat history and sessions.'),
      '',
      chalk.gray('Search, filter, export, and clean up your AI chat history.'),
      chalk.gray(
        'Use "rawi history ask" or "rawi history chat" to view specific session types.',
      ),
    ].join('\n'),
  );

  historyCommand
    .command('ask')
    .description(
      [
        chalk.bold('Show ask session history.'),
        '',
        chalk.gray('View and search your ask sessions and messages.'),
      ].join('\n'),
    )
    .option(
      '-p, --profile <profile>',
      chalk.white('Profile to show history for'),
      DEFAULT_PROFILE,
    )
    .option(
      '-l, --limit <number>',
      chalk.white('Number of sessions to show'),
      DEFAULT_HISTORY_LIMIT.toString(),
    )
    .option('--all', chalk.white('Show all sessions without pagination limit'))
    .option('--all-profiles', chalk.white('Show sessions from all profiles'))
    .option(
      '-s, --search <query>',
      chalk.white('Search messages containing text'),
    )
    .option('--provider <provider>', chalk.white('Filter by AI provider'))
    .option('--model <model>', chalk.white('Filter by AI model'))
    .option(
      '--from <date>',
      chalk.white('Show sessions from date (YYYY-MM-DD)'),
    )
    .option('--to <date>', chalk.white('Show sessions to date (YYYY-MM-DD)'))
    .action(async (options) => {
      await handleHistoryAction(options, 'ask');
    });

  historyCommand
    .command('chat')
    .description(
      [
        chalk.bold('Show chat session history.'),
        '',
        chalk.gray('View and search your chat sessions and messages.'),
      ].join('\n'),
    )
    .option(
      '-p, --profile <profile>',
      chalk.white('Profile to show history for'),
      DEFAULT_PROFILE,
    )
    .option(
      '-l, --limit <number>',
      chalk.white('Number of sessions to show'),
      DEFAULT_HISTORY_LIMIT.toString(),
    )
    .option('--all', chalk.white('Show all sessions without pagination limit'))
    .option('--all-profiles', chalk.white('Show sessions from all profiles'))
    .option(
      '-s, --search <query>',
      chalk.white('Search messages containing text'),
    )
    .option('--provider <provider>', chalk.white('Filter by AI provider'))
    .option('--model <model>', chalk.white('Filter by AI model'))
    .option(
      '--from <date>',
      chalk.white('Show sessions from date (YYYY-MM-DD)'),
    )
    .option('--to <date>', chalk.white('Show sessions to date (YYYY-MM-DD)'))
    .action(async (options) => {
      await handleHistoryAction(options, 'chat');
    });

  return historyCommand;
};

async function handleHistoryAction(
  options: any,
  sessionType: 'ask' | 'chat',
): Promise<void> {
  let dbManager: DatabaseManager | null = null;

  try {
    dbManager = new DatabaseManager();

    const searchOptions: ChatHistoryOptions = {
      profile: options.allProfiles ? undefined : options.profile,
      limit: options.all
        ? 1000
        : Number.parseInt(options.limit) || DEFAULT_HISTORY_LIMIT,
      search: options.search,
      provider: options.provider,
      model: options.model,
      fromDate: options.from,
      toDate: options.to,
      type: sessionType, // Filter by session type
    };

    const pageSize = 10;

    if (options.search) {
      const messages = await dbManager.searchMessages(searchOptions);
      if (messages.length === 0) {
        console.log(chalk.yellow('📭 No messages found matching your search.'));
        return;
      }
      console.log(
        chalk.cyan(`🔍 Found ${messages.length} ${sessionType} messages:`),
      );
      console.log();
      const table = new Table({
        head: [
          chalk.cyan('Session'),
          chalk.cyan('Role'),
          chalk.cyan('Content'),
          chalk.cyan('Time'),
          chalk.cyan('Provider/Model'),
        ],
        style: {head: ['cyan']},
        colWidths: [15, 10, 35, 15, 20],
        wordWrap: true,
      });

      for (const message of messages) {
        table.push([
          truncateText(message.sessionId || 'Unknown', 13),
          message.role === 'user' ? chalk.blue('User') : chalk.green('AI'),
          truncateText(message.content, 33),
          formatRelativeTime(message.timestamp),
          `${message.provider || 'N/A'}/${truncateText(message.model || 'N/A', 8)}`,
        ]);
      }

      console.log(table.toString());
      return;
    }

    const sessions = await dbManager.getSessions(searchOptions);
    if (sessions.length === 0) {
      console.log(
        chalk.yellow(`📭 No ${sessionType} sessions found for this profile.`),
      );
      console.log();
      console.log(chalk.gray('💡 Tips:'));
      console.log(
        chalk.gray(
          `  • Start a new ${sessionType} session: rawi ${sessionType} <your-question>`,
        ),
      );
      console.log(chalk.gray('  • Use --all-profiles to search all profiles'));
      return;
    }

    console.log(
      chalk.cyan(
        `📚 ${sessionType.charAt(0).toUpperCase() + sessionType.slice(1)} Session History (${sessions.length} sessions):`,
      ),
    );
    console.log();

    const totalPages = Math.ceil(sessions.length / pageSize);
    let page = 0;

    const renderPage = (pageIdx: number) => {
      const table = new Table({
        head: [
          chalk.cyan('Title'),
          chalk.cyan('ID'),
          chalk.cyan('Profile'),
          chalk.cyan('Messages'),
          chalk.cyan('Updated'),
        ],
        style: {head: ['cyan']},
        colWidths: [22, 38, 12, 10, 18],
        wordWrap: true,
      });

      sessions
        .slice(pageIdx * pageSize, (pageIdx + 1) * pageSize)
        .forEach((session) => {
          table.push([
            truncateText(session.title || 'Untitled', 20),
            session.id,
            session.profile,
            session.messageCount?.toString() || '0',
            formatRelativeTime(session.updatedAt),
          ]);
        });

      console.log(table.toString());
      console.log();
      console.log(
        chalk.gray(
          `Page ${pageIdx + 1} of ${totalPages} | Total: ${sessions.length} sessions`,
        ),
      );
      console.log();
      console.log(chalk.gray('💡 Tips:'));
      console.log(
        chalk.gray(
          `  • Use --session <id> with ${sessionType} command to continue a session`,
        ),
      );
      console.log(
        chalk.gray('  • Use --search <query> to search message content'),
      );
    };

    if (sessions.length <= pageSize) {
      renderPage(0);
      return;
    }

    renderPage(page);

    while (page < totalPages - 1) {
      const action = await select({
        message: 'What would you like to do?',
        choices: [
          {name: 'Next page', value: 'next'},
          {name: 'Previous page', value: 'prev', disabled: page === 0},
          {name: 'Exit', value: 'exit'},
        ],
      });

      if (action === 'exit') {
        break;
      }
      if (action === 'next' && page < totalPages - 1) {
        page++;
        renderPage(page);
      } else if (action === 'prev' && page > 0) {
        page--;
        renderPage(page);
      }
    }
  } catch (error) {
    console.error(
      chalk.red(
        `❌ Error fetching ${sessionType} history: ${error instanceof Error ? error.message : String(error)}`,
      ),
    );
    process.exit(1);
  } finally {
    if (dbManager) {
      dbManager.close();
    }
  }
}
