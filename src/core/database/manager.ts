import {v4 as uuidv4} from 'uuid';
import {
  type ChatHistoryOptions,
  type ChatMessage,
  type ChatSession,
  debugLog,
  type HistoryStats,
} from '../shared/index.js';
import {DatabaseAdapter} from './adapter.js';

export class DatabaseManager {
  private adapter: DatabaseAdapter;
  private initialized = false;
  private initPromise: Promise<void> | null = null;

  constructor() {
    this.adapter = new DatabaseAdapter();

    this.initPromise = this.adapter
      .ensureDatabaseInitialized()
      .then(() => {
        this.initialized = true;
        debugLog('Database manager initialization complete');
      })
      .catch((err) => {
        console.error(
          'Failed to initialize database during construction:',
          err,
        );
      });
  }

  private async ensureInitialized(): Promise<void> {
    if (this.initialized) {
      return;
    }

    if (this.initPromise) {
      try {
        await this.initPromise;
        return;
      } catch (_error) {
        debugLog('Initial initialization failed, trying again');
      }
    }

    try {
      debugLog('Explicitly initializing database');
      await this.adapter.ensureDatabaseInitialized();
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize database:', error);
      throw new Error('Database initialization failed');
    }
  }

  async createSession(profile: string, title?: string): Promise<string> {
    await this.ensureInitialized();
    return this.adapter.createSession(profile, title);
  }

  async getSession(sessionId: string): Promise<ChatSession | null> {
    await this.ensureInitialized();
    return this.adapter.getSession(sessionId);
  }

  async getSessions(options: ChatHistoryOptions = {}): Promise<ChatSession[]> {
    await this.ensureInitialized();
    return this.adapter.getSessions(options);
  }

  async deleteSession(sessionId: string): Promise<boolean> {
    await this.ensureInitialized();
    return this.adapter.deleteSession(sessionId);
  }

  async updateSessionTitle(sessionId: string, title: string): Promise<boolean> {
    await this.ensureInitialized();
    return this.adapter.updateSessionTitle(sessionId, title);
  }

  async addMessage(
    sessionId: string,
    role: 'user' | 'assistant',
    content: string,
    provider: string,
    model: string,
    temperature?: number,
    maxTokens?: number,
    metadata?: any,
  ): Promise<string> {
    await this.ensureInitialized();
    return this.adapter.addMessage(
      sessionId,
      role,
      content,
      provider,
      model,
      temperature,
      maxTokens,
      metadata,
    );
  }

  async getMessages(sessionId: string, limit?: number): Promise<ChatMessage[]> {
    await this.ensureInitialized();
    return this.adapter.getMessages(sessionId, limit);
  }

  async searchMessages(
    options: ChatHistoryOptions = {},
  ): Promise<ChatMessage[]> {
    await this.ensureInitialized();
    return this.adapter.searchMessages(options);
  }

  async getStats(profile?: string): Promise<HistoryStats> {
    await this.ensureInitialized();
    return this.adapter.getStats(profile);
  }

  async close(): Promise<void> {
    await this.adapter.close();
  }

  async getCurrentSession(profile: string): Promise<string> {
    try {
      await this.ensureInitialized();

      const sessions = await this.getSessions({profile, limit: 1});

      if (sessions.length > 0) {
        return sessions[0].id;
      }

      debugLog('No existing sessions found, creating a new one');
      return this.createSession(profile);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      debugLog('Error getting current session:', errorMessage);

      try {
        debugLog(
          'Attempting to ensure database is initialized before creating new session',
        );
        await this.adapter.ensureDatabaseInitialized();
        this.initialized = true;

        debugLog('Creating new session');
        return this.createSession(profile);
      } catch (initError: unknown) {
        const initErrorMessage =
          initError instanceof Error ? initError.message : 'Unknown error';
        console.error(
          'Serious error: Cannot initialize database or create session normally:',
          initErrorMessage,
        );
        debugLog('Attempting emergency session creation');

        return this.createEmergencySession(profile);
      }
    }
  }

  async deleteOldSessions(profile: string, days: number): Promise<number> {
    await this.ensureInitialized();
    return this.adapter.deleteOldSessions(profile, days);
  }

  async vacuum(): Promise<void> {
    await this.ensureInitialized();
    return this.adapter.vacuum();
  }

  async exportChatHistory(options: ChatHistoryOptions = {}): Promise<{
    sessions: ChatSession[];
    messages: Record<string, ChatMessage[]>;
    stats: HistoryStats;
  }> {
    await this.ensureInitialized();
    return this.adapter.exportChatHistory(options);
  }

  async createEmergencySession(profile: string): Promise<string> {
    try {
      debugLog('Creating emergency session without database checks');
      return this.adapter.createSession(profile);
    } catch (_error) {
      const sessionId = uuidv4();
      debugLog('Generated emergency session ID directly:', sessionId);
      return sessionId;
    }
  }
}
