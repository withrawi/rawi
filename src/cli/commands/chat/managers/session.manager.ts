import {writeFileSync} from 'node:fs';
import {confirm, select} from '@inquirer/prompts';
import chalk from 'chalk';
import type {DatabaseManager} from '../../../../core/database/manager.js';
import {
  type ChatOptions,
  type ChatSession,
  DatabaseConnectionError,
  type DeleteSessionOptions,
  type EnhancedChatSession,
  type ExportSessionsOptions,
  type ListSessionsOptions,
  ProfileMismatchError,
  SessionNotFoundError,
} from '../types.js';

export class SessionManager {
  private dbManager: DatabaseManager;

  constructor(dbManager: DatabaseManager) {
    this.dbManager = dbManager;
  }

  async handleSessionStart(options: ChatOptions): Promise<string> {
    try {
      const profile = options.profile || 'default';

      if (options.newSession) {
        return await this.createNewSession(profile);
      }

      if (options.session) {
        const session = await this.continueSession(options.session, profile);
        return session.sessionId;
      }

      const recentSessions = await this.getRecentSessions(profile, 5);

      if (recentSessions.length === 0) {
        console.log(
          chalk.dim('No recent sessions found. Creating a new session...'),
        );
        return await this.createNewSession(profile);
      }

      const selectedSessionId =
        await this.displaySessionSelection(recentSessions);

      if (selectedSessionId === null) {
        return await this.createNewSession(profile);
      }

      await this.continueSession(selectedSessionId, profile);
      return selectedSessionId;
    } catch (error) {
      if (
        error instanceof SessionNotFoundError ||
        error instanceof ProfileMismatchError
      ) {
        console.error(chalk.red(`❌ ${error.message}`));
        console.log(chalk.dim('Falling back to creating a new session...'));
        return await this.createNewSession(options.profile || 'default');
      }

      if (error instanceof DatabaseConnectionError) {
        console.error(chalk.red(`❌ Database error: ${error.message}`));
        console.log(chalk.dim('Creating temporary session...'));
        return await this.dbManager.createEmergencySession(
          options.profile || 'default',
        );
      }

      throw error;
    }
  }

  async createNewSession(profile: string, title?: string): Promise<string> {
    try {
      const sessionId = await this.dbManager.createSession(profile, title);
      console.log(chalk.green(`✅ Created new session: ${sessionId}`));
      return sessionId;
    } catch (error) {
      console.error(chalk.red(`❌ Failed to create session: ${error}`));
      throw new DatabaseConnectionError(
        'Failed to create new session',
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  }

  async continueSession(
    sessionId: string,
    profile: string,
  ): Promise<EnhancedChatSession> {
    try {
      const session = await this.dbManager.getSession(sessionId);

      if (!session) {
        throw new SessionNotFoundError(sessionId, profile);
      }

      if (session.profile !== profile) {
        throw new ProfileMismatchError(sessionId, profile, session.profile);
      }

      const messages = await this.dbManager.getMessages(sessionId);

      console.log(chalk.green(`✅ Continuing session: ${sessionId}`));
      if (session.title) {
        console.log(chalk.dim(`📝 Title: ${session.title}`));
      }
      console.log(chalk.dim(`💬 Messages: ${messages.length}`));

      return {
        sessionId: session.id,
        profile: session.profile,
        title: session.title,
        messages,
        displaySessionInfo: () => this.displaySessionInfo(session),
        displayConversationHistory: (limit?: number) =>
          this.displayConversationHistory(messages, limit),
        addUserMessage: async (content: string) => {
          await this.dbManager.addMessage(
            sessionId,
            'user',
            content,
            'unknown',
            'unknown',
          );
        },
        addAssistantMessage: async (content: string, metadata: any) => {
          await this.dbManager.addMessage(
            sessionId,
            'assistant',
            content,
            metadata.provider || 'unknown',
            metadata.model || 'unknown',
            metadata.temperature,
            metadata.maxTokens,
            metadata,
          );
        },
        updateSessionTitle: async (newTitle: string) => {
          await this.dbManager.updateSessionTitle(sessionId, newTitle);
        },
        getSessionStats: () => ({
          messageCount: messages.length,
          createdAt: session.createdAt,
          updatedAt: session.updatedAt,
          duration: this.calculateDuration(
            session.createdAt,
            session.updatedAt,
          ),
          providers: Array.from(new Set(messages.map((m) => m.provider))),
          models: Array.from(new Set(messages.map((m) => m.model))),
        }),
      };
    } catch (error) {
      if (
        error instanceof SessionNotFoundError ||
        error instanceof ProfileMismatchError
      ) {
        throw error;
      }

      console.error(chalk.red(`❌ Failed to continue session: ${error}`));
      throw new DatabaseConnectionError(
        'Failed to continue session',
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  }

  async getRecentSessions(profile: string, limit = 10): Promise<ChatSession[]> {
    try {
      return await this.dbManager.getSessions({profile, limit});
    } catch (error) {
      console.error(chalk.red(`❌ Failed to get recent sessions: ${error}`));
      throw new DatabaseConnectionError(
        'Failed to retrieve recent sessions',
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  }

  async displaySessionSelection(
    sessions: ChatSession[],
  ): Promise<string | null> {
    console.log(chalk.bold.blue('\n🔍 Recent Sessions:'));

    const choices = [
      {
        name: chalk.green('➕ Create new session'),
        value: 'new',
      },
      ...sessions.map((session) => ({
        name: this.formatSessionChoice(session),
        value: session.id,
      })),
    ];

    try {
      const answer = await select({
        message: 'Choose a session to continue or create a new one:',
        choices,
      });

      return answer === 'new' ? null : answer;
    } catch (error) {
      if (error instanceof Error && error.name === 'ExitPromptError') {
        console.log(chalk.yellow('\n👋 Session selection cancelled'));
        process.exit(0);
      }
      throw error;
    }
  }

  async listSessions(options: ListSessionsOptions): Promise<void> {
    try {
      const sessions = await this.dbManager.getSessions({
        profile: options.profile,
        limit: options.limit || 20,
        fromDate: options.fromDate,
        toDate: options.toDate,
      });

      if (sessions.length === 0) {
        console.log(chalk.dim('No sessions found.'));
        return;
      }

      const format = options.format || 'table';

      switch (format) {
        case 'json':
          console.log(JSON.stringify(sessions, null, 2));
          break;
        case 'summary':
          this.displaySessionsSummary(sessions);
          break;
        default:
          this.displaySessionsTable(sessions);
          break;
      }
    } catch (error) {
      console.error(chalk.red(`❌ Failed to list sessions: ${error}`));
      throw new DatabaseConnectionError(
        'Failed to list sessions',
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  }

  async deleteSession(
    sessionId: string,
    options: DeleteSessionOptions,
  ): Promise<boolean> {
    try {
      const session = await this.dbManager.getSession(sessionId);
      if (!session) {
        console.error(chalk.red(`❌ Session '${sessionId}' not found`));
        return false;
      }

      if (!options.force && options.confirm !== false) {
        const shouldDelete = await confirm({
          message: `Are you sure you want to delete session '${sessionId}'${session.title ? ` (${session.title})` : ''}? This will delete all ${session.messageCount} messages.`,
          default: false,
        });

        if (!shouldDelete) {
          console.log(chalk.dim('Session deletion cancelled.'));
          return false;
        }
      }

      const deleted = await this.dbManager.deleteSession(sessionId);

      if (deleted) {
        console.log(
          chalk.green(`✅ Session '${sessionId}' deleted successfully`),
        );
      } else {
        console.error(chalk.red(`❌ Failed to delete session '${sessionId}'`));
      }

      return deleted;
    } catch (error) {
      if (error instanceof Error && error.name === 'ExitPromptError') {
        console.log(chalk.yellow('\n👋 Session deletion cancelled'));
        return false;
      }

      console.error(chalk.red(`❌ Failed to delete session: ${error}`));
      throw new DatabaseConnectionError(
        'Failed to delete session',
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  }

  async renameSession(sessionId: string, newTitle: string): Promise<boolean> {
    try {
      const session = await this.dbManager.getSession(sessionId);
      if (!session) {
        console.error(chalk.red(`❌ Session '${sessionId}' not found`));
        return false;
      }

      if (!newTitle || newTitle.trim().length === 0) {
        console.error(chalk.red('❌ Session title cannot be empty'));
        return false;
      }

      const trimmedTitle = newTitle.trim();
      if (trimmedTitle.length > 200) {
        console.error(
          chalk.red('❌ Session title cannot exceed 200 characters'),
        );
        return false;
      }

      const updated = await this.dbManager.updateSessionTitle(
        sessionId,
        trimmedTitle,
      );

      if (updated) {
        console.log(
          chalk.green(`✅ Session '${sessionId}' renamed to: ${trimmedTitle}`),
        );
      } else {
        console.error(chalk.red(`❌ Failed to rename session '${sessionId}'`));
      }

      return updated;
    } catch (error) {
      console.error(chalk.red(`❌ Failed to rename session: ${error}`));
      throw new DatabaseConnectionError(
        'Failed to rename session',
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  }

  async exportSessions(options: ExportSessionsOptions): Promise<string> {
    try {
      const exportData = await this.dbManager.exportChatHistory({
        profile: options.profile,
        fromDate: options.fromDate,
        toDate: options.toDate,
      });

      let sessionsToExport = exportData.sessions;
      let messagesToExport = exportData.messages;

      if (options.sessions && options.sessions.length > 0) {
        sessionsToExport = exportData.sessions.filter((session) =>
          options.sessions!.includes(session.id),
        );
        messagesToExport = Object.fromEntries(
          Object.entries(exportData.messages).filter(([sessionId]) =>
            options.sessions!.includes(sessionId),
          ),
        );
      }

      if (sessionsToExport.length === 0) {
        console.log(chalk.dim('No sessions found to export.'));
        return '';
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename =
        options.output || `rawi-sessions-${timestamp}.${options.format}`;

      let content: string;

      switch (options.format) {
        case 'json':
          content = JSON.stringify(
            {
              exportedAt: new Date().toISOString(),
              sessions: sessionsToExport,
              messages: messagesToExport,
              stats: exportData.stats,
            },
            null,
            2,
          );
          break;
        case 'markdown':
          content = this.formatSessionsAsMarkdown(
            sessionsToExport,
            messagesToExport,
          );
          break;
        default:
          throw new Error(`Unsupported export format: ${options.format}`);
      }

      writeFileSync(filename, content, 'utf8');

      console.log(
        chalk.green(
          `✅ Exported ${sessionsToExport.length} sessions to: ${filename}`,
        ),
      );
      return filename;
    } catch (error) {
      console.error(chalk.red(`❌ Failed to export sessions: ${error}`));
      throw new DatabaseConnectionError(
        'Failed to export sessions',
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  }

  private formatSessionChoice(session: ChatSession): string {
    const age = this.formatAge(session.updatedAt);
    const title = session.title || 'Untitled';
    const messageCount = session.messageCount;

    return `${chalk.cyan(session.id.slice(0, 8))} - ${chalk.white(title)} ${chalk.dim(`(${messageCount} messages, ${age})`)}`;
  }

  private formatAge(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else {
      return `${diffDays}d ago`;
    }
  }

  private calculateDuration(createdAt: string, updatedAt: string): string {
    const created = new Date(createdAt);
    const updated = new Date(updatedAt);
    const diffMs = updated.getTime() - created.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 60) {
      return `${diffMins} minutes`;
    } else if (diffHours < 24) {
      return `${diffHours} hours`;
    } else {
      return `${diffDays} days`;
    }
  }

  private displaySessionInfo(session: ChatSession): void {
    console.log(chalk.dim(`ID: ${session.id}`));
    console.log(chalk.dim(`Profile: ${session.profile}`));
    if (session.title) {
      console.log(chalk.dim(`Title: ${session.title}`));
    }
    console.log(
      chalk.dim(`Created: ${new Date(session.createdAt).toLocaleString()}`),
    );
    console.log(
      chalk.dim(`Updated: ${new Date(session.updatedAt).toLocaleString()}`),
    );
    console.log(chalk.dim(`Messages: ${session.messageCount}`));
  }

  private displayConversationHistory(messages: any[], limit?: number): void {
    const messagesToShow = limit ? messages.slice(-limit) : messages;

    if (messagesToShow.length === 0) {
      console.log(chalk.dim('No previous messages in this session.'));
      return;
    }

    console.log(chalk.bold.blue('\n💬 Conversation History:'));
    messagesToShow.forEach((message) => {
      const role =
        message.role === 'user' ? chalk.blue('You') : chalk.green('Assistant');
      const content =
        message.content.length > 100
          ? `${message.content.substring(0, 100)}...`
          : message.content;
      console.log(`${role}: ${chalk.dim(content)}`);
    });
    console.log('');
  }

  private displaySessionsTable(sessions: ChatSession[]): void {
    console.log(chalk.bold.blue('\n📋 Sessions:'));
    console.log(
      chalk.dim(
        'ID'.padEnd(10) +
          'Title'.padEnd(30) +
          'Messages'.padEnd(10) +
          'Updated'.padEnd(20),
      ),
    );
    console.log(chalk.dim('-'.repeat(70)));

    sessions.forEach((session) => {
      const id = session.id.slice(0, 8);
      const title = (session.title || 'Untitled').slice(0, 28);
      const messages = session.messageCount.toString();
      const updated = this.formatAge(session.updatedAt);

      console.log(
        chalk.cyan(id.padEnd(10)) +
          chalk.white(title.padEnd(30)) +
          chalk.dim(messages.padEnd(10)) +
          chalk.dim(updated.padEnd(20)),
      );
    });
    console.log('');
  }

  private displaySessionsSummary(sessions: ChatSession[]): void {
    console.log(chalk.bold.blue('\n📋 Sessions Summary:'));
    sessions.forEach((session) => {
      console.log(chalk.cyan(`\n🔹 ${session.id.slice(0, 8)}`));
      console.log(chalk.white(`   Title: ${session.title || 'Untitled'}`));
      console.log(chalk.dim(`   Messages: ${session.messageCount}`));
      console.log(
        chalk.dim(
          `   Created: ${new Date(session.createdAt).toLocaleString()}`,
        ),
      );
      console.log(
        chalk.dim(
          `   Updated: ${new Date(session.updatedAt).toLocaleString()}`,
        ),
      );
    });
    console.log('');
  }

  private formatSessionsAsMarkdown(
    sessions: ChatSession[],
    messages: Record<string, any[]>,
  ): string {
    let markdown = '# Rawi Chat Sessions Export\n\n';
    markdown += `Exported on: ${new Date().toLocaleString()}\n\n`;
    markdown += `Total sessions: ${sessions.length}\n\n`;

    sessions.forEach((session) => {
      markdown += `## Session: ${session.title || 'Untitled'}\n\n`;
      markdown += `- **ID**: ${session.id}\n`;
      markdown += `- **Profile**: ${session.profile}\n`;
      markdown += `- **Created**: ${new Date(session.createdAt).toLocaleString()}\n`;
      markdown += `- **Updated**: ${new Date(session.updatedAt).toLocaleString()}\n`;
      markdown += `- **Messages**: ${session.messageCount}\n\n`;

      const sessionMessages = messages[session.id] || [];
      if (sessionMessages.length > 0) {
        markdown += '### Conversation\n\n';
        sessionMessages.forEach((message) => {
          const role = message.role === 'user' ? '**You**' : '**Assistant**';
          const timestamp = new Date(message.timestamp).toLocaleString();
          markdown += `${role} _(${timestamp})_:\n\n${message.content}\n\n---\n\n`;
        });
      }

      markdown += '\n';
    });

    return markdown;
  }
}
