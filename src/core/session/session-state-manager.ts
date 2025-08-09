import {
  DatabaseConnectionError,
  SessionNotFoundError,
} from '../../cli/commands/chat/types.js';
import {DatabaseManager} from '../database/manager.js';
import type {ChatMessage} from '../shared/types.js';
import type {
  SessionHistoryEntry,
  SessionMetadata,
  SessionPersistenceOptions,
  SessionRestoreOptions,
  SessionState,
} from './session-state.js';

export class SessionStateManager {
  #databaseManager: DatabaseManager;
  #activeSessions: Map<string, SessionState> = new Map();
  #persistenceOptions: SessionPersistenceOptions;

  constructor(
    databaseManager?: DatabaseManager,
    options: SessionPersistenceOptions = {},
  ) {
    this.#databaseManager = databaseManager || new DatabaseManager();
    this.#persistenceOptions = {
      autoSave: true,
      saveInterval: 30000,
      maxHistoryEntries: 100,
      ...options,
    };
  }

  async restoreSessionState(
    sessionId: string,
    options: SessionRestoreOptions = {},
  ): Promise<SessionState> {
    try {
      const cachedState = this.#activeSessions.get(sessionId);
      if (cachedState) {
        await this.#updateLastAccessed(sessionId);
        return cachedState;
      }

      const session = await this.#databaseManager.getSession(sessionId);
      if (!session) {
        throw new SessionNotFoundError(sessionId, 'unknown');
      }

      const {includeMessages = true, messageLimit = 100} = options;

      let messages: ChatMessage[] = [];
      if (includeMessages) {
        messages = await this.#databaseManager.getMessages(sessionId);

        if (messageLimit && messages.length > messageLimit) {
          messages = messages.slice(-messageLimit);
        }
      }

      const sessionState: SessionState = {
        session,
        messages,
        isActive: true,
        lastAccessedAt: new Date().toISOString(),
        messageCount: session.messageCount,
        metadata: await this.#loadSessionMetadata(sessionId),
      };

      this.#activeSessions.set(sessionId, sessionState);

      await this.#addHistoryEntry(sessionId, 'accessed', 'Session restored');

      return sessionState;
    } catch (error) {
      if (error instanceof SessionNotFoundError) {
        throw error;
      }
      throw new DatabaseConnectionError(
        `Failed to restore session state: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async persistSessionState(sessionId: string): Promise<void> {
    try {
      const sessionState = this.#activeSessions.get(sessionId);
      if (!sessionState) {
        throw new SessionNotFoundError(sessionId, 'unknown');
      }

      await this.#saveSessionMetadata(sessionId, sessionState.metadata);

      sessionState.lastAccessedAt = new Date().toISOString();

      await this.#addHistoryEntry(
        sessionId,
        'updated',
        'Session state persisted',
      );
    } catch (error) {
      throw new DatabaseConnectionError(
        `Failed to persist session state: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async addMessageToSession(
    sessionId: string,
    message: ChatMessage,
  ): Promise<void> {
    try {
      const sessionState = this.#activeSessions.get(sessionId);
      if (!sessionState) {
        await this.restoreSessionState(sessionId);
        return this.addMessageToSession(sessionId, message);
      }

      sessionState.messages.push(message);
      sessionState.messageCount = sessionState.messages.length;
      sessionState.lastAccessedAt = new Date().toISOString();

      if (
        message.provider &&
        !sessionState.metadata.providers.includes(message.provider)
      ) {
        sessionState.metadata.providers.push(message.provider);
        sessionState.metadata.lastProvider = message.provider;
      }
      if (
        message.model &&
        !sessionState.metadata.models.includes(message.model)
      ) {
        sessionState.metadata.models.push(message.model);
        sessionState.metadata.lastModel = message.model;
      }

      if (this.#persistenceOptions.autoSave) {
        await this.persistSessionState(sessionId);
      }

      await this.#addHistoryEntry(
        sessionId,
        'message_added',
        `${message.role} message added`,
      );
    } catch (error) {
      throw new DatabaseConnectionError(
        `Failed to add message to session: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async updateSessionTitle(sessionId: string, title: string): Promise<void> {
    try {
      const sessionState = this.#activeSessions.get(sessionId);
      if (sessionState) {
        sessionState.session.title = title;
        sessionState.lastAccessedAt = new Date().toISOString();
      }

      await this.#databaseManager.updateSessionTitle(sessionId, title);

      if (this.#persistenceOptions.autoSave) {
        await this.persistSessionState(sessionId);
      }

      await this.#addHistoryEntry(
        sessionId,
        'title_changed',
        `Title changed to: ${title}`,
      );
    } catch (error) {
      throw new DatabaseConnectionError(
        `Failed to update session title: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  async getSessionHistory(_sessionId: string): Promise<SessionHistoryEntry[]> {
    try {
      return [];
    } catch {
      throw new DatabaseConnectionError(
        'Failed to get session history',
        undefined,
      );
    }
  }

  async deactivateSession(sessionId: string): Promise<void> {
    try {
      const sessionState = this.#activeSessions.get(sessionId);
      if (sessionState) {
        await this.persistSessionState(sessionId);

        sessionState.isActive = false;

        this.#activeSessions.delete(sessionId);
      }
    } catch (error) {
      throw new DatabaseConnectionError(
        `Failed to deactivate session: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  getActiveSessionIds(): string[] {
    return Array.from(this.#activeSessions.keys());
  }

  getActiveSessionState(sessionId: string): SessionState | undefined {
    return this.#activeSessions.get(sessionId);
  }

  async cleanupInactiveSessions(maxAge = 3600000): Promise<void> {
    const now = Date.now();
    const sessionsToRemove: string[] = [];

    for (const [sessionId, state] of this.#activeSessions.entries()) {
      const lastAccessed = new Date(state.lastAccessedAt).getTime();
      if (now - lastAccessed > maxAge) {
        sessionsToRemove.push(sessionId);
      }
    }

    for (const sessionId of sessionsToRemove) {
      await this.deactivateSession(sessionId);
    }
  }

  async #updateLastAccessed(sessionId: string): Promise<void> {
    const sessionState = this.#activeSessions.get(sessionId);
    if (sessionState) {
      sessionState.lastAccessedAt = new Date().toISOString();
    }
  }

  async #loadSessionMetadata(sessionId: string): Promise<SessionMetadata> {
    try {
      const messages = await this.#databaseManager.getMessages(sessionId);

      const providers = [
        ...new Set(messages.map((m) => m.provider).filter(Boolean)),
      ];
      const models = [...new Set(messages.map((m) => m.model).filter(Boolean))];

      return {
        providers,
        models,
        lastProvider: providers[providers.length - 1],
        lastModel: models[models.length - 1],
        tags: [],
        customData: {},
      };
    } catch (_error) {
      return {
        providers: [],
        models: [],
        tags: [],
        customData: {},
      };
    }
  }

  async #saveSessionMetadata(
    _sessionId: string,
    _metadata: SessionMetadata,
  ): Promise<void> {
    // TODO: This would typically save to a metadata table
    // TODO:For now, just store in memory as it's already cached
  }

  async #addHistoryEntry(
    sessionId: string,
    action: SessionHistoryEntry['action'],
    details: string,
    _metadata?: Record<string, any>,
  ): Promise<void> {
    console.debug(`Session ${sessionId}: ${action} - ${details}`);
  }
}
