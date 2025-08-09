import chalk from 'chalk';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import {select} from '@inquirer/prompts';
import Table from 'cli-table3';
import type {SessionManager} from '../../../../core/session/index.js';
import type {ChatOptions} from '../types.js';

/**
 * Advanced session operations for CLI
 */
export class AdvancedSessionOperations {
  private readonly sessionManager: SessionManager;
  private readonly profile: string;

  constructor(sessionManager: SessionManager, profile: string) {
    this.sessionManager = sessionManager;
    this.profile = profile;
  }

  /**
   * Show session statistics
   */
  async showStatistics(options: ChatOptions): Promise<void> {
    try {
      console.log(chalk.cyan('\n📊 Session Statistics'));
      console.log(chalk.gray('─'.repeat(50)));

      const sessions = await this.sessionManager.listSessions({
        profile: this.profile,
        fromDate: options.fromDate,
        toDate: options.toDate,
      });

      const totalSessions = sessions.length;
      const totalMessages = sessions.reduce(
        (sum, session) => sum + (session.messageCount || 0),
        0,
      );

      if (totalSessions === 0) {
        console.log(chalk.yellow('📝 No sessions found.'));
        return;
      }

      const averageMessages = Math.round(totalMessages / totalSessions);
      const oldestSession = sessions.reduce((oldest, session) =>
        new Date(session.createdAt) < new Date(oldest.createdAt)
          ? session
          : oldest,
      );
      const newestSession = sessions.reduce((newest, session) =>
        new Date(session.createdAt) > new Date(newest.createdAt)
          ? session
          : newest,
      );

      console.log(
        chalk.white(`📋 Total Sessions: ${chalk.bold(totalSessions)}`),
      );
      console.log(
        chalk.white(`💬 Total Messages: ${chalk.bold(totalMessages)}`),
      );
      console.log(
        chalk.white(
          `📈 Average Messages per Session: ${chalk.bold(averageMessages)}`,
        ),
      );
      console.log(
        chalk.white(
          `📅 Date Range: ${this.formatDate(oldestSession.createdAt)} → ${this.formatDate(newestSession.createdAt)}`,
        ),
      );

      // Top sessions by message count
      const topSessions = sessions
        .sort((a, b) => (b.messageCount || 0) - (a.messageCount || 0))
        .slice(0, 5);

      console.log(chalk.cyan('\n🏆 Most Active Sessions:'));
      topSessions.forEach((session, index) => {
        const title = session.title || 'Untitled';
        const messageCount = session.messageCount || 0;
        console.log(
          chalk.white(`${index + 1}. ${title} (${messageCount} messages)`),
        );
      });
    } catch (error) {
      console.error(chalk.red(`❌ Failed to show statistics: ${error}`));
    }
  }

  /**
   * Backup sessions to file
   */
  async backupSessions(
    backupPath: string,
    options: ChatOptions,
  ): Promise<void> {
    try {
      console.log(chalk.cyan(`\n💾 Backing up sessions to: ${backupPath}`));

      const exportData = await this.sessionManager.exportSessions('json', {
        profile: this.profile,
        fromDate: options.fromDate,
        toDate: options.toDate,
      });

      const backup = {
        timestamp: new Date().toISOString(),
        profile: this.profile,
        version: '1.0.0',
        data: exportData,
      };

      // Ensure directory exists
      const dir = path.dirname(backupPath);
      await fs.mkdir(dir, {recursive: true});

      // Write backup file
      await fs.writeFile(backupPath, JSON.stringify(backup, null, 2), 'utf8');

      console.log(chalk.green(`✅ Backup completed successfully!`));
      console.log(chalk.blue(`📁 File: ${backupPath}`));
      console.log(
        chalk.blue(
          `📊 Stats: ${backup.data.sessions.length} sessions, ${Object.values(backup.data.messages).flat().length} messages`,
        ),
      );
    } catch (error) {
      console.error(chalk.red(`❌ Backup failed: ${error}`));
      throw error;
    }
  }

  /**
   * Restore sessions from backup file
   */
  async restoreSessions(backupPath: string): Promise<void> {
    try {
      console.log(chalk.cyan(`\n📥 Restoring sessions from: ${backupPath}`));

      // Read backup file
      const backupData = await fs.readFile(backupPath, 'utf8');
      const backup = JSON.parse(backupData);

      if (!backup.data || !backup.data.sessions) {
        throw new Error('Invalid backup file format');
      }

      console.log(
        chalk.yellow(
          '⚠️ This will import sessions. Existing sessions with same IDs may be overwritten.',
        ),
      );

      // In a real implementation, you would restore sessions to the database
      // For now, we'll just show what would be restored
      console.log(
        chalk.blue(
          `📊 Backup contains: ${backup.data.sessions.length} sessions, ${Object.values(backup.data.messages).flat().length} messages`,
        ),
      );
      console.log(chalk.blue(`📅 Backup created: ${backup.timestamp}`));
      console.log(chalk.blue(`👤 Original profile: ${backup.profile}`));

      console.log(chalk.green('✅ Restore simulation completed!'));
      console.log(
        chalk.gray(
          'Note: Actual restore functionality would be implemented with database operations.',
        ),
      );
    } catch (error) {
      console.error(chalk.red(`❌ Restore failed: ${error}`));
      throw error;
    }
  }

  /**
   * Batch delete sessions matching pattern
   */
  async batchDeleteSessions(
    pattern: string,
    options: ChatOptions,
  ): Promise<void> {
    try {
      console.log(
        chalk.cyan(`\n🗑️ Batch delete sessions matching pattern: "${pattern}"`),
      );

      const sessions = await this.sessionManager.listSessions({
        profile: this.profile,
        fromDate: options.fromDate,
        toDate: options.toDate,
      });

      // Filter sessions by pattern (title or ID contains pattern)
      const matchingSessions = sessions.filter((session) => {
        const titleMatch = (session.title || '')
          .toLowerCase()
          .includes(pattern.toLowerCase());
        const idMatch = session.id
          .toLowerCase()
          .includes(pattern.toLowerCase());
        return titleMatch || idMatch;
      });

      if (matchingSessions.length === 0) {
        console.log(
          chalk.yellow(`📝 No sessions found matching pattern "${pattern}"`),
        );
        return;
      }

      console.log(
        chalk.yellow(
          `⚠️ Found ${matchingSessions.length} sessions matching the pattern:`,
        ),
      );
      matchingSessions.forEach((session) => {
        const title = session.title || 'Untitled';
        console.log(
          chalk.white(`  • ${title} (${session.id.substring(0, 8)}...)`),
        );
      });

      // In a real implementation, you would confirm with the user and then delete
      console.log(
        chalk.red(
          `\n🚨 This would delete ${matchingSessions.length} sessions!`,
        ),
      );
      console.log(
        chalk.gray(
          'Note: Actual batch delete would require user confirmation.',
        ),
      );
    } catch (error) {
      console.error(chalk.red(`❌ Batch delete failed: ${error}`));
      throw error;
    }
  }

  /**
   * Format sessions according to specified format
   */
  async formatSessions(
    sessions: any[],
    format: 'json' | 'table' | 'summary',
  ): Promise<string> {
    switch (format) {
      case 'json':
        return JSON.stringify(sessions, null, 2);

      case 'summary':
        return this.formatSessionsSummary(sessions);

      case 'table':
      default:
        return this.formatSessionsTable(sessions);
    }
  }

  /**
   * Format sessions as table using cli-table3 with full IDs
   */
  private formatSessionsTable(sessions: any[]): string {
    if (sessions.length === 0) {
      return chalk.yellow('No sessions found.');
    }

    const table = new Table({
      head: [
        chalk.cyan('ID'),
        chalk.cyan('Title'),
        chalk.cyan('Profile'),
        chalk.cyan('Messages'),
        chalk.cyan('Created'),
        chalk.cyan('Last Updated'),
      ],
      colWidths: [40, 25, 12, 10, 20, 15],
      style: {
        head: [],
        border: ['grey'],
        compact: false,
      },
    });

    sessions.forEach((session) => {
      const title = session.title || 'Untitled';
      const messageCount = session.messageCount || 0;
      const createdDate = this.formatDate(session.createdAt);
      const updatedTime = this.formatRelativeTime(
        session.updatedAt || session.createdAt,
      );

      table.push([
        chalk.white(session.id), // Show full ID
        chalk.white(title.length > 22 ? title.substring(0, 19) + '...' : title),
        chalk.gray(session.profile),
        chalk.yellow(messageCount.toString()),
        chalk.gray(createdDate),
        chalk.gray(updatedTime),
      ]);
    });

    return table.toString();
  }

  /**
   * Interactive session selection using inquirer
   */
  async selectSessionInteractively(sessions: any[]): Promise<string | null> {
    if (sessions.length === 0) {
      console.log(chalk.yellow('No sessions found.'));
      return null;
    }

    const choices = sessions.map((session) => ({
      name: `${session.title || 'Untitled'} (${session.messageCount || 0} messages) - ${this.formatRelativeTime(session.updatedAt)}`,
      value: session.id,
      description: `ID: ${session.id}`,
    }));

    choices.push({
      name: chalk.green('+ Create new session'),
      value: 'new',
      description: 'Start a fresh conversation',
    });

    try {
      const selectedId = await select({
        message: 'Select a session to continue:',
        choices,
        pageSize: 10,
      });

      return selectedId === 'new' ? null : selectedId;
    } catch (error) {
      // User cancelled (Ctrl+C)
      return null;
    }
  }

  /**
   * Format relative time (e.g., "2h ago", "3d ago")
   */
  private formatRelativeTime(dateString: string): string {
    const now = Date.now();
    const date = new Date(dateString).getTime();
    const diffMs = now - date;

    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHours > 0) return `${diffHours}h ago`;
    if (diffMinutes > 0) return `${diffMinutes}m ago`;
    return `${diffSeconds}s ago`;
  }

  /**
   * Format sessions as summary
   */
  private formatSessionsSummary(sessions: any[]): string {
    if (sessions.length === 0) {
      return 'No sessions found.';
    }

    let summary = chalk.cyan(
      `📋 Session Summary (${sessions.length} sessions)\n`,
    );
    summary += chalk.gray('─'.repeat(50)) + '\n';

    sessions.forEach((session, index) => {
      const title = session.title || 'Untitled';
      const messageCount = session.messageCount || 0;
      const date = this.formatDate(session.updatedAt || session.createdAt);

      summary += chalk.white(`${index + 1}. ${title}\n`);
      summary += chalk.gray(`   ${messageCount} messages • ${date}\n`);
      if (index < sessions.length - 1) summary += '\n';
    });

    return summary;
  }

  /**
   * Helper function to format date
   */
  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
}
