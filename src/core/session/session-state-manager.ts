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

/**
 * Manages session state persistence and restoration
 */
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
      saveInterval: 30000, // 30 seconds
      maxHistoryEntries: 100,
      ...options,
    };
  }

  /**
   * Load and restore a session state
   */
  async restoreSessionState(
    sessionId: string,
    options: SessionRestoreOptions = {},
  ): Promise<SessionState> {
    try {
      // Check if session is already in memory
      const cachedState = this.#activeSessions.get(sessionId);
      if (cachedState) {
        await this.#updateLastAccessed(sessionId);
        return cachedState;
      }

      // Load session from database
      const session = await this.#databaseManager.getSession(sessionId);
      if (!session) {
        throw new SessionNotFoundError(sessionId, 'unknown');
      }

      // Load messages
      const {includeMessages = true, messageLimit = 100} = options;

      let messages: ChatMessage[] = [];
      if (includeMessages) {
        messages = await this.#databaseManager.getMessages(sessionId);

        // Apply filtering if needed
        if (messageLimit && messages.length > messageLimit) {
          messages = messages.slice(-messageLimit);
        }
      }

      // Create session state
      const sessionState: SessionState = {
        session,
        messages,
        isActive: true,
        lastAccessedAt: new Date().toISOString(),
        messageCount: session.messageCount,
        metadata: await this.#loadSessionMetadata(sessionId),
      };

      // Cache the session state
      this.#activeSessions.set(sessionId, sessionState);

      // Record access in history
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

  /**
   * Persist session state to database
   */
  async persistSessionState(sessionId: string): Promise<void> {
    try {
      const sessionState = this.#activeSessions.get(sessionId);
      if (!sessionState) {
        throw new SessionNotFoundError(sessionId, 'unknown');
      }

      // Update session metadata in database
      await this.#saveSessionMetadata(sessionId, sessionState.metadata);

      // Update last accessed timestamp
      sessionState.lastAccessedAt = new Date().toISOString();

      // Record persistence in history
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

  /**
   * Add a message to session state and persist if auto-save is enabled
   */
  async addMessageToSession(
    sessionId: string,
    message: ChatMessage,
  ): Promise<void> {
    try {
      const sessionState = this.#activeSessions.get(sessionId);
      if (!sessionState) {
        // Load session state first
        await this.restoreSessionState(sessionId);
        return this.addMessageToSession(sessionId, message);
      }

      // Add message to state
      sessionState.messages.push(message);
      sessionState.messageCount = sessionState.messages.length;
      sessionState.lastAccessedAt = new Date().toISOString();

      // Update metadata
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

      // Auto-persist if enabled
      if (this.#persistenceOptions.autoSave) {
        await this.persistSessionState(sessionId);
      }

      // Record in history
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

  /**
   * Update session title in state
   */
  async updateSessionTitle(sessionId: string, title: string): Promise<void> {
    try {
      const sessionState = this.#activeSessions.get(sessionId);
      if (sessionState) {
        sessionState.session.title = title;
        sessionState.lastAccessedAt = new Date().toISOString();
      }

      // Update in database
      await this.#databaseManager.updateSessionTitle(sessionId, title);

      // Auto-persist if enabled
      if (this.#persistenceOptions.autoSave) {
        await this.persistSessionState(sessionId);
      }

      // Record in history
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

  /**
   * Get session history
   */
  async getSessionHistory(_sessionId: string): Promise<SessionHistoryEntry[]> {
    try {
      // This would typically be stored in a separate table
      // For now, return empty array as placeholder
      return [];
    } catch {
      throw new DatabaseConnectionError(
        'Failed to get session history',
        undefined,
      );
    }
  }

  /**
   * Deactivate a session (remove from memory but keep in database)
   */
  async deactivateSession(sessionId: string): Promise<void> {
    try {
      const sessionState = this.#activeSessions.get(sessionId);
      if (sessionState) {
        // Persist final state before deactivation
        await this.persistSessionState(sessionId);

        // Mark as inactive
        sessionState.isActive = false;

        // Remove from active sessions
        this.#activeSessions.delete(sessionId);
      }
    } catch (error) {
      throw new DatabaseConnectionError(
        `Failed to deactivate session: ${error instanceof Error ? error.message : 'Unknown error'}`,
        error instanceof Error ? error : undefined,
      );
    }
  }

  /**
   * Get active session IDs
   */
  getActiveSessionIds(): string[] {
    return Array.from(this.#activeSessions.keys());
  }

  /**
   * Get active session state (from memory)
   */
  getActiveSessionState(sessionId: string): SessionState | undefined {
    return this.#activeSessions.get(sessionId);
  }

  /**
   * Clean up inactive sessions from memory
   */
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

  // Private helper methods

  async #updateLastAccessed(sessionId: string): Promise<void> {
    const sessionState = this.#activeSessions.get(sessionId);
    if (sessionState) {
      sessionState.lastAccessedAt = new Date().toISOString();
    }
  }

  async #loadSessionMetadata(sessionId: string): Promise<SessionMetadata> {
    try {
      // Load messages to extract metadata
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
    } catch (error) {
      // Return default metadata if loading fails
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
    // This would typically save to a metadata table
    // For now, just store in memory as it's already cached
  }

  async #addHistoryEntry(
    sessionId: string,
    action: SessionHistoryEntry['action'],
    details: string,
    _metadata?: Record<string, any>,
  ): Promise<void> {
    // This would typically save to a session_history table
    // For now, just log for debugging
    console.debug(`Session ${sessionId}: ${action} - ${details}`);
  }
}
