import {writeFile} from 'node:fs/promises';
import {select} from '@inquirer/prompts';
import chalk from 'chalk';
import Table from 'cli-table3';
import {Command} from 'commander';
import {DatabaseManager} from '../../database/index.js';
import {
  DEFAULT_HISTORY_LIMIT,
  DEFAULT_PROFILE,
} from '../../shared/constants.js';
import type {ChatHistoryOptions} from '../../shared/types.js';
import {formatRelativeTime, truncateText} from '../../shared/utils.js';

export const createHistoryCommand = (): Command => {
  const historyCommand = new Command('history');

  historyCommand
    .description('Manage chat history')
    .option(
      '-p, --profile <profile>',
      'Profile to show history for',
      DEFAULT_PROFILE,
    )
    .option(
      '-l, --limit <number>',
      'Number of sessions to show',
      DEFAULT_HISTORY_LIMIT.toString(),
    )
    .option('-s, --search <query>', 'Search messages containing text')
    .option('--provider <provider>', 'Filter by AI provider')
    .option('--model <model>', 'Filter by AI model')
    .option('--from <date>', 'Show sessions from date (YYYY-MM-DD)')
    .option('--to <date>', 'Show sessions to date (YYYY-MM-DD)')
    .action(async (options) => {
      let dbManager: DatabaseManager | null = null;

      try {
        dbManager = new DatabaseManager();

        const searchOptions: ChatHistoryOptions = {
          profile: options.profile,
          limit: Number.parseInt(options.limit) || DEFAULT_HISTORY_LIMIT,
          search: options.search,
          provider: options.provider,
          model: options.model,
          fromDate: options.from,
          toDate: options.to,
        };

        const pageSize = 10;

        if (options.search) {
          const messages = await dbManager.searchMessages(searchOptions);
          if (messages.length === 0) {
            console.log(
              chalk.yellow('📭 No messages found matching your search.'),
            );
            return;
          }
          console.log(chalk.cyan(`🔍 Found ${messages.length} messages:`));
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
            colWidths: [18, 8, 40, 16, 22],
            wordWrap: true,
          });
          messages.forEach((message) => {
            table.push([
              truncateText(message.sessionId, 16),
              message.role === 'user'
                ? chalk.blue('👤 user')
                : chalk.green('🤖 assistant'),
              truncateText(message.content, 38),
              formatRelativeTime(message.timestamp),
              `${message.provider}/${message.model}`,
            ]);
          });
          console.log(table.toString());
        } else {
          const sessions = await dbManager.getSessions(searchOptions);
          if (sessions.length === 0) {
            console.log(chalk.yellow('📭 No chat sessions found.'));
            console.log(
              chalk.dim(
                `Run 'rawi ask "Hello"' to start your first conversation.`,
              ),
            );
            return;
          }
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
                  session.messageCount,
                  formatRelativeTime(session.updatedAt),
                ]);
              });
            console.log(table.toString());
            console.log(chalk.gray(`Page ${pageIdx + 1} of ${totalPages}`));
          };
          if (sessions.length > pageSize) {
            let exit = false;
            while (!exit) {
              renderPage(page);
              const choices = [];
              if (page > 0) choices.push({name: 'Previous', value: 'prev'});
              if (page < totalPages - 1)
                choices.push({name: 'Next', value: 'next'});
              choices.push({name: 'Exit', value: 'exit'});
              const nav = await select({
                message: 'Navigate pages:',
                choices,
                default: page < totalPages - 1 ? 'next' : 'exit',
              });
              if (nav === 'prev') page--;
              else if (nav === 'next') page++;
              else exit = true;
              if (!exit) console.clear();
            }
          } else {
            renderPage(0);
          }
        }

        console.log(chalk.dim('💡 Tips:'));
        console.log(chalk.dim('  • Use --search to find specific messages'));
        console.log(
          chalk.dim(
            '  • Use --session <id> with ask command to continue a session',
          ),
        );
        console.log(
          chalk.dim('  • Use "rawi history sessions" to manage sessions'),
        );
      } catch (error) {
        console.error(
          chalk.red(
            `❌ Error retrieving history: ${error instanceof Error ? error.message : String(error)}`,
          ),
        );
        process.exit(1);
      } finally {
        if (dbManager) {
          dbManager.close();
        }
      }
    });

  historyCommand
    .command('sessions')
    .description('List and manage chat sessions')
    .option(
      '-p, --profile <profile>',
      'Profile to show sessions for',
      DEFAULT_PROFILE,
    )
    .option(
      '-l, --limit <number>',
      'Number of sessions to show',
      DEFAULT_HISTORY_LIMIT.toString(),
    )
    .action(async (options) => {
      let dbManager: DatabaseManager | null = null;

      try {
        dbManager = new DatabaseManager();
        const sessions = await dbManager.getSessions({
          profile: options.profile,
          limit: Number.parseInt(options.limit) || DEFAULT_HISTORY_LIMIT,
        });

        if (sessions.length === 0) {
          console.log(chalk.yellow('📭 No sessions found.'));
          return;
        }

        console.log(
          chalk.cyan(`💬 Sessions for profile "${options.profile}":`),
        );
        console.log();

        for (const session of sessions) {
          const title = session.title || 'Untitled Session';

          console.log(chalk.bold(`${title}`));
          console.log(chalk.dim(`   ID: ${session.id}`));
          console.log(chalk.dim(`   Messages: ${session.messageCount}`));
          console.log(
            chalk.dim(`   Created: ${formatRelativeTime(session.createdAt)}`),
          );
          console.log(
            chalk.dim(`   Updated: ${formatRelativeTime(session.updatedAt)}`),
          );
          console.log();
        }
      } catch (error) {
        console.error(
          chalk.red(
            `❌ Error retrieving sessions: ${error instanceof Error ? error.message : String(error)}`,
          ),
        );
        process.exit(1);
      } finally {
        if (dbManager) {
          dbManager.close();
        }
      }
    });

  historyCommand
    .command('show <sessionId>')
    .description('Show all messages in a specific session')
    .action(async (sessionId) => {
      let dbManager: DatabaseManager | null = null;

      try {
        dbManager = new DatabaseManager();

        const session = await dbManager.getSession(sessionId);
        if (!session) {
          console.error(chalk.red(`❌ Session '${sessionId}' not found.`));
          process.exit(1);
        }

        const messages = await dbManager.getMessages(sessionId);

        console.log(
          chalk.cyan(`💬 Session: ${session.title || 'Untitled Session'}`),
        );
        console.log(
          chalk.dim(
            `Profile: ${session.profile} • Created: ${formatRelativeTime(session.createdAt)}`,
          ),
        );
        console.log(chalk.dim('═'.repeat(60)));
        console.log();

        for (const message of messages) {
          const icon = message.role === 'user' ? '👤' : '🤖';
          const roleColor = message.role === 'user' ? chalk.blue : chalk.green;

          console.log(roleColor.bold(`${icon} ${message.role.toUpperCase()}:`));
          console.log(message.content);
          console.log(
            chalk.dim(
              `${formatRelativeTime(message.timestamp)} • ${message.provider}/${message.model}`,
            ),
          );
          console.log();
        }
      } catch (error) {
        console.error(
          chalk.red(
            `❌ Error showing session: ${error instanceof Error ? error.message : String(error)}`,
          ),
        );
        process.exit(1);
      } finally {
        if (dbManager) {
          dbManager.close();
        }
      }
    });

  historyCommand
    .command('delete <sessionId>')
    .description('Delete a specific session')
    .action(async (sessionId) => {
      let dbManager: DatabaseManager | null = null;

      try {
        dbManager = new DatabaseManager();

        const session = await dbManager.getSession(sessionId);
        if (!session) {
          console.error(chalk.red(`❌ Session '${sessionId}' not found.`));
          process.exit(1);
        }

        const deleted = await dbManager.deleteSession(sessionId);
        if (deleted) {
          console.log(
            chalk.green(`✅ Deleted session: ${session.title || sessionId}`),
          );
        } else {
          console.error(
            chalk.red(`❌ Failed to delete session '${sessionId}'.`),
          );
          process.exit(1);
        }
      } catch (error) {
        console.error(
          chalk.red(
            `❌ Error deleting session: ${error instanceof Error ? error.message : String(error)}`,
          ),
        );
        process.exit(1);
      } finally {
        if (dbManager) {
          dbManager.close();
        }
      }
    });

  historyCommand
    .command('stats')
    .description('Show usage statistics')
    .option('-p, --profile <profile>', 'Profile to show stats for')
    .action(async (options) => {
      let dbManager: DatabaseManager | null = null;

      try {
        dbManager = new DatabaseManager();
        const stats = await dbManager.getStats(options.profile);

        console.log(chalk.cyan('📊 Usage Statistics:'));
        console.log();

        console.log(chalk.bold('Overall:'));
        console.log(`  Sessions: ${stats.totalSessions}`);
        console.log(`  Messages: ${stats.totalMessages}`);

        if (stats.oldestMessage) {
          console.log(
            `  First message: ${formatRelativeTime(stats.oldestMessage)}`,
          );
        }

        if (stats.newestMessage) {
          console.log(
            `  Latest message: ${formatRelativeTime(stats.newestMessage)}`,
          );
        }

        console.log();

        if (Object.keys(stats.messagesByProvider).length > 0) {
          console.log(chalk.bold('By Provider:'));
          for (const [provider, count] of Object.entries(
            stats.messagesByProvider,
          )) {
            console.log(`  ${provider}: ${count} messages`);
          }
          console.log();
        }

        if (Object.keys(stats.messagesByModel).length > 0) {
          console.log(chalk.bold('Top Models:'));
          const sortedModels = Object.entries(stats.messagesByModel)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 10);

          for (const [model, count] of sortedModels) {
            console.log(`  ${model}: ${count} messages`);
          }
          console.log();
        }

        if (
          !options.profile &&
          Object.keys(stats.messagesByProfile).length > 0
        ) {
          console.log(chalk.bold('By Profile:'));
          for (const [profile, count] of Object.entries(
            stats.messagesByProfile,
          )) {
            console.log(`  ${profile}: ${count} messages`);
          }
        }
      } catch (error) {
        console.error(
          chalk.red(
            `❌ Error retrieving stats: ${error instanceof Error ? error.message : String(error)}`,
          ),
        );
        process.exit(1);
      } finally {
        if (dbManager) {
          dbManager.close();
        }
      }
    });

  historyCommand
    .command('cleanup')
    .description('Clean up old sessions')
    .option('-p, --profile <profile>', 'Profile to clean up', DEFAULT_PROFILE)
    .option('-d, --days <number>', 'Delete sessions older than N days', '30')
    .option('--confirm', 'Confirm deletion without prompt')
    .action(async (options) => {
      let dbManager: DatabaseManager | null = null;

      try {
        dbManager = new DatabaseManager();
        const days = Number.parseInt(options.days) || 30;

        if (!options.confirm) {
          console.log(
            chalk.yellow(
              `⚠️  This will delete sessions older than ${days} days for profile "${options.profile}".`,
            ),
          );
          console.log(chalk.yellow('   Add --confirm to proceed.'));
          return;
        }

        const deletedCount = await dbManager.deleteOldSessions(
          options.profile,
          days,
        );

        if (deletedCount > 0) {
          console.log(chalk.green(`✅ Deleted ${deletedCount} old sessions.`));
          dbManager.vacuum();
          console.log(chalk.dim('💾 Database optimized.'));
        } else {
          console.log(chalk.blue('ℹ️  No old sessions found to delete.'));
        }
      } catch (error) {
        console.error(
          chalk.red(
            `❌ Error during cleanup: ${error instanceof Error ? error.message : String(error)}`,
          ),
        );
        process.exit(1);
      } finally {
        if (dbManager) {
          dbManager.close();
        }
      }
    });

  historyCommand
    .command('export')
    .description('Export chat history to JSON')
    .option('-p, --profile <profile>', 'Profile to export')
    .option(
      '-o, --output <file>',
      'Output file path',
      'rawi-history-export.json',
    )
    .action(async (options) => {
      let dbManager: DatabaseManager | null = null;

      try {
        dbManager = new DatabaseManager();
        const exportData = await dbManager.exportChatHistory({
          profile: options.profile,
        });

        const jsonData = JSON.stringify(exportData, null, 2);
        await writeFile(options.output, jsonData, 'utf8');

        console.log(
          chalk.green(`✅ Exported chat history to: ${options.output}`),
        );
        console.log(chalk.dim(`   Sessions: ${exportData.sessions.length}`));
        console.log(
          chalk.dim(
            `   Total messages: ${Object.values(exportData.messages).flat().length}`,
          ),
        );
      } catch (error) {
        console.error(
          chalk.red(
            `❌ Error exporting history: ${error instanceof Error ? error.message : String(error)}`,
          ),
        );
        process.exit(1);
      } finally {
        if (dbManager) {
          dbManager.close();
        }
      }
    });

  return historyCommand;
};
