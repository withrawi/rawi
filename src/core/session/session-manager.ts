import type {
  DeleteSessionOptions,
  ExportSessionsOptions,
  ListSessionsOptions,
  SessionDisplayInfo,
  SessionSelectionResult,
  SessionStats,
} from '../../cli/commands/chat/types.js';
import {
  DatabaseConnectionError,
  ProfileMismatchError,
  SessionNotFoundError,
} from '../../cli/commands/chat/types.js';
import {DatabaseManager} from '../database/manager.js';
import type {ChatMessage, ChatSession, HistoryStats} from '../shared/types.js';

export interface SessionCreationOptions {
  title?: string;
  generateTitle?: boolean;
  type?: 'ask' | 'chat';
}

export class SessionManager {
  #databaseManager: DatabaseManager;

  constructor(databaseManager?: DatabaseManager) {
    this.#databaseManager = databaseManager || new DatabaseManager();
  }

  async createSession(
    profile: string,
    options: SessionCreationOptions = {},
  ): Promise<string> {
    try {
      const {title, generateTitle, type = 'ask'} = options;

      let finalTitle = title;
      if (generateTitle && !title) {
        finalTitle = await this.#generateSessionTitle(profile);
      }

      const sessionId = await this.#databaseManager.createSession(
        profile,
        finalTitle,
        type,
      );

      return sessionId;
    } catch (error) {
      throw new DatabaseConnectionError(
        `Failed to create session: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async getSession(sessionId: string, profile?: string): Promise<ChatSession> {
    try {
      const session = await this.#databaseManager.getSession(sessionId);

      if (!session) {
        throw new SessionNotFoundError(sessionId, profile || 'unknown');
      }

      if (profile && session.profile !== profile) {
        throw new ProfileMismatchError(sessionId, profile, session.profile);
      }

      return session;
    } catch (error) {
      if (
        error instanceof SessionNotFoundError ||
        error instanceof ProfileMismatchError
      ) {
        throw error;
      }
      throw new DatabaseConnectionError(
        `Failed to retrieve session: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async listSessions(
    options: ListSessionsOptions = {},
  ): Promise<SessionDisplayInfo[]> {
    try {
      const {profile, limit = 10, fromDate, toDate, type} = options;

      const sessions = await this.#databaseManager.getSessions({
        profile,
        limit,
        fromDate,
        toDate,
        type,
      });

      return sessions.map((session) => this.#toDisplayInfo(session));
    } catch (error) {
      throw new DatabaseConnectionError(
        `Failed to list sessions: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async deleteSession(
    sessionId: string,
    options: DeleteSessionOptions = {},
  ): Promise<boolean> {
    try {
      const {force = false} = options;

      if (!force) {
        await this.getSession(sessionId);
      }

      const deleted = await this.#databaseManager.deleteSession(sessionId);

      if (!deleted && !force) {
        throw new SessionNotFoundError(sessionId, 'unknown');
      }

      return deleted;
    } catch (error) {
      if (
        error instanceof SessionNotFoundError ||
        error instanceof ProfileMismatchError
      ) {
        throw error;
      }
      throw new DatabaseConnectionError(
        `Failed to delete session: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async updateSessionTitle(
    sessionId: string,
    title: string,
    profile?: string,
  ): Promise<boolean> {
    try {
      await this.getSession(sessionId, profile);

      const updated = await this.#databaseManager.updateSessionTitle(
        sessionId,
        title,
      );

      if (!updated) {
        throw new SessionNotFoundError(sessionId, profile || 'unknown');
      }

      return updated;
    } catch (error) {
      if (
        error instanceof SessionNotFoundError ||
        error instanceof ProfileMismatchError
      ) {
        throw error;
      }
      throw new DatabaseConnectionError(
        `Failed to update session title: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async exportSessions(
    _format: 'json' | 'markdown',
    options: Omit<ExportSessionsOptions, 'format'> = {},
  ): Promise<{
    sessions: ChatSession[];
    messages: Record<string, ChatMessage[]>;
    stats: HistoryStats;
  }> {
    try {
      const {profile, sessions: sessionIds} = options;

      let sessions: ChatSession[];
      let messages: Record<string, ChatMessage[]> = {};

      if (sessionIds && sessionIds.length > 0) {
        sessions = [];
        for (const sessionId of sessionIds) {
          try {
            const session = await this.getSession(sessionId, profile);
            sessions.push(session);
            messages[sessionId] =
              await this.#databaseManager.getMessages(sessionId);
          } catch (error) {
            if (
              !(
                error instanceof SessionNotFoundError ||
                error instanceof ProfileMismatchError
              )
            ) {
              throw error;
            }
          }
        }
      } else {
        const exportData = await this.#databaseManager.exportChatHistory({
          profile,
        });
        sessions = exportData.sessions;
        messages = exportData.messages;
      }

      const stats = await this.#databaseManager.getStats(profile);

      return {sessions, messages, stats};
    } catch (error) {
      throw new DatabaseConnectionError(
        `Failed to export sessions: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async getSessionStats(profile?: string): Promise<SessionStats> {
    try {
      const stats = await this.#databaseManager.getStats(profile);
      const sessions = await this.#databaseManager.getSessions({
        profile,
        limit: 1000,
      });

      return {
        messageCount: stats.totalMessages,
        createdAt:
          sessions.length > 0 ? sessions[sessions.length - 1].createdAt : '',
        updatedAt: sessions.length > 0 ? sessions[0].updatedAt : '',
        duration: this.#calculateDuration(sessions),
        providers: this.#extractProviders(),
        models: this.#extractModels(),
      };
    } catch (error) {
      throw new DatabaseConnectionError(
        `Failed to get session statistics: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async selectSession(): Promise<SessionSelectionResult> {
    throw new Error('Session selection must be implemented in CLI layer');
  }

  #toDisplayInfo(session: ChatSession): SessionDisplayInfo {
    const now = new Date();
    const updatedAt = new Date(session.updatedAt);
    const timeDiff = now.getTime() - updatedAt.getTime();

    return {
      id: session.id,
      title: session.title || 'Untitled Chat',
      profile: session.profile,
      createdAt: session.createdAt,
      updatedAt: session.updatedAt,
      messageCount: session.messageCount,
      lastActivity: session.updatedAt,
      age: this.#formatTimeDiff(timeDiff),
    };
  }

  #formatTimeDiff(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return `${seconds}s ago`;
  }

  #calculateDuration(sessions: ChatSession[]): string {
    if (sessions.length === 0) return '0';

    const oldest = new Date(sessions[sessions.length - 1].createdAt);
    const newest = new Date(sessions[0].createdAt);
    const diffDays = Math.floor(
      (newest.getTime() - oldest.getTime()) / (1000 * 60 * 60 * 24),
    );

    return `${diffDays} days`;
  }

  #extractProviders(): string[] {
    return [];
  }

  #extractModels(): string[] {
    return [];
  }

  async #generateSessionTitle(profile: string): Promise<string> {
    const sessions = await this.#databaseManager.getSessions({
      profile,
      limit: 1000,
    });
    const nextNumber = sessions.length + 1;
    return `Chat Session ${nextNumber}`;
  }
}
