import {
  accessSync,
  constants,
  existsSync,
  mkdirSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import {dirname} from 'node:path';
import {createClient} from '@libsql/client';
import {v4 as uuidv4} from 'uuid';
import {
  type ChatHistoryOptions,
  type ChatMessage,
  type ChatSession,
  DEFAULT_SESSION_TITLE_LENGTH,
  debugLog,
  getConfigDir,
  type HistoryStats,
  type SupportedProvider,
} from '../shared/index.js';
import {getDatabaseFilePath} from './config/paths.js';

export class DatabaseAdapter {
  private client;
  private dbPath: string;

  constructor() {
    try {
      this.dbPath = getDatabaseFilePath();

      this.ensureConfigDir();

      this.ensureDatabaseFileExists();

      const dbUrl = `file:${this.dbPath}`;
      this.client = createClient({
        url: dbUrl,
      });

      debugLog('Database adapter initialized with URL:', dbUrl);
    } catch (error) {
      console.error('Error initializing database adapter:', error);
      throw new Error(
        `Failed to initialize database adapter: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  private ensureConfigDir(): void {
    try {
      const configDir = getConfigDir();
      debugLog('Ensuring config directory exists:', configDir);

      if (!existsSync(configDir)) {
        debugLog('Config directory not found, creating it');
        mkdirSync(configDir, {recursive: true});
        debugLog('Config directory created successfully');
      } else {
        debugLog('Config directory already exists');
      }
    } catch (error) {
      console.error('Error ensuring config directory exists:', error);
      throw new Error(
        `Failed to create config directory: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  private ensureDatabaseFileExists(): void {
    try {
      const dbDir = dirname(this.dbPath);
      if (!existsSync(dbDir)) {
        debugLog(`Database directory not found, creating it: ${dbDir}`);
        mkdirSync(dbDir, {recursive: true});
      }

      if (!existsSync(this.dbPath)) {
        debugLog('Database file not found, creating it:', this.dbPath);

        writeFileSync(this.dbPath, '');

        if (!existsSync(this.dbPath)) {
          throw new Error(`Failed to create database file at ${this.dbPath}`);
        }

        debugLog('Empty database file created successfully');
      } else {
        debugLog('Database file already exists');

        try {
          accessSync(this.dbPath, constants.W_OK);
          debugLog('Database file is writable');
        } catch (accessError) {
          console.error(
            'Database file exists but is not writable!',
            accessError,
          );
          throw new Error(`Database file at ${this.dbPath} is not writable`);
        }
      }
    } catch (error) {
      console.error('Error ensuring database file exists:', error);
      throw new Error(
        `Failed to create or access database file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  public async ensureDatabaseInitialized(): Promise<void> {
    let attempt = 1;
    const maxAttempts = 3;

    while (attempt <= maxAttempts) {
      try {
        debugLog(`Checking if database schema exists (attempt ${attempt})...`);

        this.ensureConfigDir();

        this.ensureDatabaseFileExists();

        const tableResult = await this.client.execute(`
          SELECT count(*) as table_count FROM sqlite_master 
          WHERE type='table' AND name IN ('chat_sessions', 'chat_messages');
        `);

        const tableCount = Number(tableResult.rows[0].table_count);

        if (tableCount === 2) {
          debugLog('Database schema verified, both tables exist');

          try {
            await this.client.execute('SELECT COUNT(*) FROM chat_sessions');
            await this.client.execute('SELECT COUNT(*) FROM chat_messages');
            debugLog('Database tables are accessible');
            return;
          } catch (queryError) {
            console.error(
              'Tables exist but querying them failed:',
              queryError instanceof Error
                ? queryError.message
                : 'Unknown error',
            );
          }
        }

        debugLog(
          `Found only ${tableCount} of 2 required tables, initializing schema...`,
        );
        await this.initialize();
        return;
      } catch (error) {
        debugLog(`Error checking database schema (attempt ${attempt})`);

        if (error instanceof Error) {
          debugLog('Error details:', error.message);

          const isMissingTable =
            error.message.includes('no such table') ||
            error.message.includes('unable to open database file');

          if (isMissingTable) {
            debugLog(
              'Database tables missing or database file issues. Initializing schema...',
            );

            if (attempt === maxAttempts) {
              try {
                debugLog(
                  'Last attempt - recreating database file from scratch',
                );

                if (this.client) {
                  try {
                    await this.client.close();
                  } catch (e: unknown) {
                    debugLog(
                      'Error closing client:',
                      e instanceof Error ? e.message : 'Unknown error',
                    );
                  }
                }

                try {
                  if (existsSync(this.dbPath)) {
                    unlinkSync(this.dbPath);
                    debugLog('Deleted existing database file');
                  }
                } catch (fsError) {
                  console.error(
                    'Error deleting database file:',
                    fsError instanceof Error
                      ? fsError.message
                      : 'Unknown error',
                  );
                }

                this.ensureDatabaseFileExists();

                this.client = createClient({
                  url: `file:${this.dbPath}`,
                });

                debugLog(
                  'Reconnected to fresh database. Attempting initialization...',
                );
                await this.initialize();
                return;
              } catch (recreateError) {
                console.error(
                  'Failed to recreate and initialize database:',
                  recreateError instanceof Error
                    ? recreateError.message
                    : 'Unknown error',
                );
                throw new Error(
                  `Database recreation failed after ${maxAttempts} attempts`,
                );
              }
            } else {
              try {
                if (this.client) {
                  try {
                    await this.client.close();
                  } catch (e: unknown) {
                    debugLog(
                      'Error closing client:',
                      e instanceof Error ? e.message : 'Unknown error',
                    );
                  }
                }

                this.ensureDatabaseFileExists();

                this.client = createClient({
                  url: `file:${this.dbPath}`,
                });

                debugLog(
                  'Reconnected to database. Attempting initialization...',
                );
                await this.initialize();
                return;
              } catch (reconnectError) {
                console.error(
                  'Failed to reconnect and initialize database:',
                  reconnectError instanceof Error
                    ? reconnectError.message
                    : 'Unknown error',
                );
              }
            }
          } else {
            console.error(
              'Unexpected database error, not related to missing tables:',
              error,
            );
          }
        } else {
          debugLog(
            'Unknown error type detected during initialization:',
            typeof error,
          );
          try {
            await this.initialize();
            return;
          } catch (initError) {
            console.error(
              'Failed to initialize after unknown error:',
              initError instanceof Error ? initError.message : 'Unknown error',
            );
          }
        }
      }

      attempt++;

      if (attempt <= maxAttempts) {
        const delay = 500 * attempt;
        debugLog(`Waiting ${delay}ms before attempt ${attempt}...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    throw new Error(
      `Failed to initialize database after ${maxAttempts} attempts`,
    );
  }

  private async initialize(): Promise<void> {
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
      try {
        this.ensureConfigDir();

        this.ensureDatabaseFileExists();

        try {
          await this.client.execute('PRAGMA quick_check;');
          debugLog('Database connection verified');
        } catch (connError: unknown) {
          console.error(
            'Database connection test failed:',
            connError instanceof Error ? connError.message : 'Unknown error',
          );

          try {
            if (this.client) {
              try {
                await this.client.close();
              } catch {}
            }

            this.client = createClient({
              url: `file:${this.dbPath}`,
            });

            debugLog('Database client recreated');
          } catch (recreateError: unknown) {
            console.error(
              'Failed to recreate database client:',
              recreateError instanceof Error
                ? recreateError.message
                : 'Unknown error',
            );
            throw new Error('Cannot connect to database');
          }
        }

        debugLog(
          `Creating database schema step by step (attempt ${retryCount + 1})...`,
        );

        try {
          await this.client.execute('PRAGMA journal_mode = WAL;');
        } catch (error: unknown) {
          const pragmaError =
            error instanceof Error ? error.message : 'Unknown error';
          debugLog('Warning: Failed to set journal_mode pragma:', pragmaError);
        }

        try {
          await this.client.execute('PRAGMA synchronous = NORMAL;');
        } catch (error: unknown) {
          const pragmaError =
            error instanceof Error ? error.message : 'Unknown error';
          debugLog('Warning: Failed to set synchronous pragma:', pragmaError);
        }

        try {
          await this.client.execute('PRAGMA foreign_keys = ON;');
        } catch (error: unknown) {
          const pragmaError =
            error instanceof Error ? error.message : 'Unknown error';
          debugLog('Warning: Failed to set foreign_keys pragma:', pragmaError);
        }

        await this.client.execute(`
          CREATE TABLE IF NOT EXISTS chat_sessions (
            id TEXT PRIMARY KEY,
            profile TEXT NOT NULL,
            title TEXT,
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            updated_at TEXT NOT NULL DEFAULT (datetime('now')),
            message_count INTEGER NOT NULL DEFAULT 0
          );
        `);

        debugLog('Created chat_sessions table');

        await this.client.execute(`
          CREATE TABLE IF NOT EXISTS chat_messages (
            id TEXT PRIMARY KEY,
            session_id TEXT NOT NULL,
            role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
            content TEXT NOT NULL,
            timestamp TEXT NOT NULL DEFAULT (datetime('now')),
            provider TEXT NOT NULL,
            model TEXT NOT NULL,
            temperature REAL,
            max_tokens INTEGER,
            metadata TEXT,
            FOREIGN KEY (session_id) REFERENCES chat_sessions (id) ON DELETE CASCADE
          );
        `);

        debugLog('Created chat_messages table');

        try {
          await this.client.execute(`
            CREATE TRIGGER IF NOT EXISTS update_session_message_count_insert
            AFTER INSERT ON chat_messages
            BEGIN
              UPDATE chat_sessions 
              SET message_count = (
                SELECT COUNT(*) FROM chat_messages WHERE session_id = NEW.session_id
              ),
              updated_at = datetime('now')
              WHERE id = NEW.session_id;
            END;
          `);

          await this.client.execute(`
            CREATE TRIGGER IF NOT EXISTS update_session_message_count_delete
            AFTER DELETE ON chat_messages
            BEGIN
              UPDATE chat_sessions 
              SET message_count = (
                SELECT COUNT(*) FROM chat_messages WHERE session_id = OLD.session_id
              ),
              updated_at = datetime('now')
              WHERE id = OLD.session_id;
            END;
          `);

          await this.client.execute(`
            CREATE TRIGGER IF NOT EXISTS generate_session_title
            AFTER INSERT ON chat_messages
            WHEN NEW.role = 'user' AND (
              SELECT title FROM chat_sessions WHERE id = NEW.session_id
            ) IS NULL
            BEGIN
              UPDATE chat_sessions 
              SET title = CASE 
                WHEN length(NEW.content) > ${DEFAULT_SESSION_TITLE_LENGTH} 
                THEN substr(NEW.content, 1, ${DEFAULT_SESSION_TITLE_LENGTH}) || '...'
                ELSE NEW.content
              END
              WHERE id = NEW.session_id;
            END;
          `);

          debugLog('Created triggers');
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error ? error.message : 'Unknown error';
          debugLog('Warning: Failed to create triggers:', errorMessage);
          debugLog('Continuing with basic functionality');
        }

        try {
          await this.client.execute(`
            CREATE INDEX IF NOT EXISTS idx_chat_sessions_profile 
            ON chat_sessions (profile);
          `);

          await this.client.execute(`
            CREATE INDEX IF NOT EXISTS idx_chat_sessions_created_at 
            ON chat_sessions (created_at DESC);
          `);

          await this.client.execute(`
            CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id 
            ON chat_messages (session_id);
          `);

          await this.client.execute(`
            CREATE INDEX IF NOT EXISTS idx_chat_messages_timestamp 
            ON chat_messages (timestamp DESC);
          `);

          await this.client.execute(`
            CREATE INDEX IF NOT EXISTS idx_chat_messages_provider 
            ON chat_messages (provider);
          `);

          await this.client.execute(`
            CREATE INDEX IF NOT EXISTS idx_chat_messages_content_fts 
            ON chat_messages (content);
          `);

          debugLog('Created indexes');
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error ? error.message : 'Unknown error';
          debugLog('Warning: Failed to create indexes:', errorMessage);
          debugLog('Continuing with basic functionality');
        }

        const tableResult = await this.client.execute(`
          SELECT count(*) as table_count FROM sqlite_master 
          WHERE type='table' AND name IN ('chat_sessions', 'chat_messages');
        `);

        const tableCount = Number(tableResult.rows[0].table_count);

        if (tableCount !== 2) {
          throw new Error(`Expected 2 tables but found ${tableCount}`);
        }

        debugLog('Database schema initialized successfully');
        return;
      } catch (error) {
        console.error(
          `Error initializing database schema (attempt ${retryCount + 1}):`,
          error,
        );
        retryCount++;

        if (retryCount < maxRetries) {
          const delay = 500 * retryCount;
          debugLog(`Waiting ${delay}ms before retry...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    throw new Error(
      `Failed to initialize database after ${maxRetries} attempts`,
    );
  }

  async createSession(profile: string, title?: string): Promise<string> {
    await this.ensureDatabaseInitialized();

    const sessionId = uuidv4();

    await this.client.execute({
      sql: 'INSERT INTO chat_sessions (id, profile, title) VALUES (?, ?, ?)',
      args: [sessionId, profile, title || null],
    });

    return sessionId;
  }

  async getSession(sessionId: string): Promise<ChatSession | null> {
    await this.ensureDatabaseInitialized();
    const result = await this.client.execute({
      sql: 'SELECT * FROM chat_sessions WHERE id = ?',
      args: [sessionId],
    });

    if (result.rows.length === 0) {
      return null;
    }

    const row = result.rows[0];
    return {
      id: row.id as string,
      profile: row.profile as string,
      title: (row.title as string) ?? undefined,
      createdAt: row.created_at as string,
      updatedAt: row.updated_at as string,
      messageCount: Number(row.message_count),
    };
  }

  async getSessions(options: ChatHistoryOptions = {}): Promise<ChatSession[]> {
    await this.ensureDatabaseInitialized();
    const {profile, limit = 10, fromDate, toDate} = options;

    let sql = `
      SELECT * FROM chat_sessions
      WHERE 1=1
    `;
    const args: any[] = [];

    if (profile) {
      sql += ' AND profile = ?';
      args.push(profile);
    }

    if (fromDate) {
      sql += ' AND created_at >= ?';
      args.push(fromDate);
    }

    if (toDate) {
      sql += ' AND created_at <= ?';
      args.push(toDate);
    }

    sql += ' ORDER BY updated_at DESC LIMIT ?';
    args.push(limit);

    const result = await this.client.execute({sql, args});

    return result.rows.map((row) => ({
      id: row.id as string,
      profile: row.profile as string,
      title: (row.title as string) ?? undefined,
      createdAt: row.created_at as string,
      updatedAt: row.updated_at as string,
      messageCount: Number(row.message_count),
    }));
  }

  async deleteSession(sessionId: string): Promise<boolean> {
    await this.ensureDatabaseInitialized();
    const result = await this.client.execute({
      sql: 'DELETE FROM chat_sessions WHERE id = ?',
      args: [sessionId],
    });

    return result.rowsAffected > 0;
  }

  async updateSessionTitle(sessionId: string, title: string): Promise<boolean> {
    const result = await this.client.execute({
      sql: `UPDATE chat_sessions SET title = ?, updated_at = datetime('now') WHERE id = ?`,
      args: [title, sessionId],
    });

    return result.rowsAffected > 0;
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
    await this.ensureDatabaseInitialized();
    const messageId = uuidv4();

    await this.client.execute({
      sql: `INSERT INTO chat_messages (
        id, session_id, role, content, provider, model, 
        temperature, max_tokens, metadata
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        messageId,
        sessionId,
        role,
        content,
        provider,
        model,
        temperature || null,
        maxTokens || null,
        metadata ? JSON.stringify(metadata) : null,
      ],
    });

    return messageId;
  }

  async getMessages(sessionId: string, limit?: number): Promise<ChatMessage[]> {
    await this.ensureDatabaseInitialized();
    let sql = `
      SELECT * FROM chat_messages 
      WHERE session_id = ? 
      ORDER BY timestamp ASC
    `;
    const args: any[] = [sessionId];

    if (limit) {
      sql += ' LIMIT ?';
      args.push(limit);
    }

    const result = await this.client.execute({sql, args});

    return result.rows.map((row) => ({
      id: row.id as string,
      sessionId: row.session_id as string,
      role: row.role as 'user' | 'assistant',
      content: row.content as string,
      timestamp: row.timestamp as string,
      provider: row.provider as SupportedProvider,
      model: row.model as string,
      temperature: row.temperature as number | undefined,
      maxTokens: row.max_tokens as number | undefined,
      metadata: row.metadata ? JSON.parse(row.metadata as string) : null,
    }));
  }

  async searchMessages(
    options: ChatHistoryOptions = {},
  ): Promise<ChatMessage[]> {
    await this.ensureDatabaseInitialized();
    const {
      profile,
      search,
      limit = 10,
      fromDate,
      toDate,
      provider,
      model,
    } = options;

    let sql = `
      SELECT m.* FROM chat_messages m
      JOIN chat_sessions s ON m.session_id = s.id
      WHERE 1=1
    `;
    const args: any[] = [];

    if (profile) {
      sql += ' AND s.profile = ?';
      args.push(profile);
    }

    if (search) {
      sql += ' AND m.content LIKE ?';
      args.push(`%${search}%`);
    }

    if (provider) {
      sql += ' AND m.provider = ?';
      args.push(provider);
    }

    if (model) {
      sql += ' AND m.model = ?';
      args.push(model);
    }

    if (fromDate) {
      sql += ' AND m.timestamp >= ?';
      args.push(fromDate);
    }

    if (toDate) {
      sql += ' AND m.timestamp <= ?';
      args.push(toDate);
    }

    sql += ' ORDER BY m.timestamp DESC LIMIT ?';
    args.push(limit);

    const result = await this.client.execute({sql, args});

    return result.rows.map((row) => ({
      id: row.id as string,
      sessionId: row.session_id as string,
      role: row.role as 'user' | 'assistant',
      content: row.content as string,
      timestamp: row.timestamp as string,
      provider: row.provider as SupportedProvider,
      model: row.model as string,
      temperature: row.temperature as number | undefined,
      maxTokens: row.max_tokens as number | undefined,
      metadata: row.metadata ? JSON.parse(row.metadata as string) : null,
    }));
  }

  async getStats(profile?: string): Promise<HistoryStats> {
    await this.ensureDatabaseInitialized();
    let sql = 'SELECT COUNT(*) as count FROM chat_sessions';
    const args: any[] = [];

    if (profile) {
      sql += ' WHERE profile = ?';
      args.push(profile);
    }

    const sessionResult = await this.client.execute({sql, args});
    const totalSessions = Number(sessionResult.rows[0].count);

    let messageSql = `
      SELECT 
        COUNT(*) as total_count,
        SUM(CASE WHEN role = 'user' THEN 1 ELSE 0 END) as user_count,
        SUM(CASE WHEN role = 'assistant' THEN 1 ELSE 0 END) as assistant_count
      FROM chat_messages
    `;
    const messageArgs: any[] = [];

    if (profile) {
      messageSql += `
        JOIN chat_sessions ON chat_messages.session_id = chat_sessions.id
        WHERE chat_sessions.profile = ?
      `;
      messageArgs.push(profile);
    }

    const messageResult = await this.client.execute({
      sql: messageSql,
      args: messageArgs,
    });

    const totalMessages = Number(messageResult.rows[0].total_count);

    let providerSql = `
      SELECT provider, COUNT(*) as count
      FROM chat_messages
    `;
    const providerArgs: any[] = [];

    if (profile) {
      providerSql += `
        JOIN chat_sessions ON chat_messages.session_id = chat_sessions.id
        WHERE chat_sessions.profile = ?
      `;
      providerArgs.push(profile);
    }

    providerSql += ' GROUP BY provider ORDER BY count DESC';

    const providerResult = await this.client.execute({
      sql: providerSql,
      args: providerArgs,
    });

    const messagesByProvider: Record<string, number> = {};
    providerResult.rows.forEach((row) => {
      messagesByProvider[row.provider as string] = Number(row.count);
    });

    let modelSql = `
      SELECT model, COUNT(*) as count
      FROM chat_messages
    `;
    const modelArgs: any[] = [];

    if (profile) {
      modelSql += `
        JOIN chat_sessions ON chat_messages.session_id = chat_sessions.id
        WHERE chat_sessions.profile = ?
      `;
      modelArgs.push(profile);
    }

    modelSql += ' GROUP BY model ORDER BY count DESC';

    const modelResult = await this.client.execute({
      sql: modelSql,
      args: modelArgs,
    });

    const messagesByModel: Record<string, number> = {};
    modelResult.rows.forEach((row) => {
      messagesByModel[row.model as string] = Number(row.count);
    });

    const profileSql = `
      SELECT chat_sessions.profile, COUNT(*) as count
      FROM chat_messages
      JOIN chat_sessions ON chat_messages.session_id = chat_sessions.id
      GROUP BY chat_sessions.profile
      ORDER BY count DESC
    `;

    const profileResult = await this.client.execute({sql: profileSql});

    const messagesByProfile: Record<string, number> = {};
    profileResult.rows.forEach((row) => {
      messagesByProfile[row.profile as string] = Number(row.count);
    });

    let timeRangeSql = `
      SELECT 
        MIN(timestamp) as oldest,
        MAX(timestamp) as newest
      FROM chat_messages
    `;
    const timeRangeArgs: any[] = [];

    if (profile) {
      timeRangeSql += `
        JOIN chat_sessions ON chat_messages.session_id = chat_sessions.id
        WHERE chat_sessions.profile = ?
      `;
      timeRangeArgs.push(profile);
    }

    const timeRangeResult = await this.client.execute({
      sql: timeRangeSql,
      args: timeRangeArgs,
    });

    return {
      totalSessions,
      totalMessages,
      messagesByProvider,
      messagesByModel,
      messagesByProfile,
      oldestMessage: timeRangeResult.rows[0].oldest as string,
      newestMessage: timeRangeResult.rows[0].newest as string,
    };
  }

  async deleteOldSessions(profile: string, days: number): Promise<number> {
    await this.ensureDatabaseInitialized();
    const date = new Date();
    date.setDate(date.getDate() - days);
    const cutoffDate = date.toISOString();

    const result = await this.client.execute({
      sql: `
        DELETE FROM chat_sessions 
        WHERE profile = ? AND created_at < ?
      `,
      args: [profile, cutoffDate],
    });

    return result.rowsAffected;
  }

  async vacuum(): Promise<void> {
    await this.ensureDatabaseInitialized();
    await this.client.execute({sql: 'VACUUM'});
  }

  async exportChatHistory(options: ChatHistoryOptions = {}): Promise<{
    sessions: ChatSession[];
    messages: Record<string, ChatMessage[]>;
    stats: HistoryStats;
  }> {
    await this.ensureDatabaseInitialized();
    const {profile} = options;

    const sessions = await this.getSessions({
      profile,
      limit: 1000,
    });

    const messages: Record<string, ChatMessage[]> = {};
    for (const session of sessions) {
      messages[session.id] = await this.getMessages(session.id);
    }

    const stats = await this.getStats(profile);

    return {
      sessions,
      messages,
      stats,
    };
  }

  async close(): Promise<void> {
    await this.client.close();
  }
}
