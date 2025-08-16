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
  #client;
  #dbPath: string;

  constructor() {
    try {
      this.#dbPath = getDatabaseFilePath();

      this.#ensureConfigDir();

      this.#ensureDatabaseFileExists();

      const dbUrl = `file:${this.#dbPath}`;
      this.#client = createClient({
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

  #ensureConfigDir(): void {
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

  #ensureDatabaseFileExists(): void {
    try {
      const dbDir = dirname(this.#dbPath);
      if (!existsSync(dbDir)) {
        debugLog(`Database directory not found, creating it: ${dbDir}`);
        mkdirSync(dbDir, {recursive: true});
      }

      if (!existsSync(this.#dbPath)) {
        debugLog('Database file not found, creating it:', this.#dbPath);

        writeFileSync(this.#dbPath, '');

        if (!existsSync(this.#dbPath)) {
          throw new Error(`Failed to create database file at ${this.#dbPath}`);
        }

        debugLog('Empty database file created successfully');
      } else {
        debugLog('Database file already exists');

        try {
          accessSync(this.#dbPath, constants.W_OK);
          debugLog('Database file is writable');
        } catch (accessError) {
          console.error(
            'Database file exists but is not writable!',
            accessError,
          );
          throw new Error(`Database file at ${this.#dbPath} is not writable`);
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

        this.#ensureConfigDir();

        this.#ensureDatabaseFileExists();

        const tableResult = await this.#client.execute(`
          SELECT count(*) as table_count FROM sqlite_master 
          WHERE type='table' AND name IN ('sessions', 'messages');
        `);

        const tableCount = Number(tableResult.rows[0].table_count);

        if (tableCount === 2) {
          debugLog('Database schema verified, both tables exist');

          try {
            await this.#client.execute('SELECT COUNT(*) FROM sessions');
            await this.#client.execute('SELECT COUNT(*) FROM messages');
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
        await this.#initialize();
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

                if (this.#client) {
                  try {
                    await this.#client.close();
                  } catch (e: unknown) {
                    debugLog(
                      'Error closing client:',
                      e instanceof Error ? e.message : 'Unknown error',
                    );
                  }
                }

                try {
                  if (existsSync(this.#dbPath)) {
                    unlinkSync(this.#dbPath);
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

                this.#ensureDatabaseFileExists();

                this.#client = createClient({
                  url: `file:${this.#dbPath}`,
                });

                debugLog(
                  'Reconnected to fresh database. Attempting initialization...',
                );
                await this.#initialize();
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
                if (this.#client) {
                  try {
                    await this.#client.close();
                  } catch (e: unknown) {
                    debugLog(
                      'Error closing client:',
                      e instanceof Error ? e.message : 'Unknown error',
                    );
                  }
                }

                this.#ensureDatabaseFileExists();

                this.#client = createClient({
                  url: `file:${this.#dbPath}`,
                });

                debugLog(
                  'Reconnected to database. Attempting initialization...',
                );
                await this.#initialize();
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
            await this.#initialize();
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

  async #initialize(): Promise<void> {
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
      try {
        this.#ensureConfigDir();

        this.#ensureDatabaseFileExists();

        try {
          await this.#client.execute('PRAGMA quick_check;');
          debugLog('Database connection verified');
        } catch (connError: unknown) {
          console.error(
            'Database connection test failed:',
            connError instanceof Error ? connError.message : 'Unknown error',
          );

          try {
            if (this.#client) {
              try {
                await this.#client.close();
              } catch {}
            }

            this.#client = createClient({
              url: `file:${this.#dbPath}`,
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
          await this.#client.execute('PRAGMA journal_mode = WAL;');
        } catch (error: unknown) {
          const pragmaError =
            error instanceof Error ? error.message : 'Unknown error';
          debugLog('Warning: Failed to set journal_mode pragma:', pragmaError);
        }

        try {
          await this.#client.execute('PRAGMA synchronous = NORMAL;');
        } catch (error: unknown) {
          const pragmaError =
            error instanceof Error ? error.message : 'Unknown error';
          debugLog('Warning: Failed to set synchronous pragma:', pragmaError);
        }

        try {
          await this.#client.execute('PRAGMA foreign_keys = ON;');
        } catch (error: unknown) {
          const pragmaError =
            error instanceof Error ? error.message : 'Unknown error';
          debugLog('Warning: Failed to set foreign_keys pragma:', pragmaError);
        }

        await this.#client.execute(`
          CREATE TABLE IF NOT EXISTS sessions (
            id TEXT PRIMARY KEY,
            profile TEXT NOT NULL,
            type TEXT NOT NULL DEFAULT 'ask',
            title TEXT,
            description TEXT,
            status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'archived', 'paused', 'pending', 'completed', 'failed')),
            created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
            updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
            last_accessed_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
            message_count INTEGER NOT NULL DEFAULT 0,
            query TEXT,
            files_processed TEXT,
            content_filtered INTEGER DEFAULT 0,
            conversation_context TEXT,
            max_messages INTEGER,
            is_private INTEGER DEFAULT 0,
            tags TEXT
          );
        `);

        debugLog('Created sessions table');

        await this.#client.execute(`
          CREATE TABLE IF NOT EXISTS messages (
            id TEXT PRIMARY KEY,
            session_id TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'assistant', 'system')),
            content TEXT NOT NULL,
            timestamp INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
            message_order INTEGER NOT NULL,
            provider TEXT NOT NULL,
            model TEXT NOT NULL,
            temperature REAL,
            max_tokens INTEGER,
            processing_time REAL,
            token_usage TEXT,
            metadata TEXT,
            parent_message_id TEXT,
            is_edited INTEGER DEFAULT 0,
            edit_history TEXT,
            reactions TEXT,
            FOREIGN KEY (session_id) REFERENCES sessions (id) ON DELETE CASCADE
          );
        `);

        debugLog('Created messages table');

        await this.#client.execute(`
          CREATE TABLE IF NOT EXISTS act_templates (
            id TEXT PRIMARY KEY,
            label TEXT NOT NULL,
            category TEXT NOT NULL,
            description TEXT NOT NULL,
            template TEXT NOT NULL,
            is_built_in INTEGER NOT NULL DEFAULT 0,
            created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
            updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
          );
        `);

        debugLog('Created act_templates table');

        try {
          await this.#client.execute(`
            CREATE TRIGGER IF NOT EXISTS update_session_message_count_insert
            AFTER INSERT ON messages
            BEGIN
              UPDATE sessions 
              SET message_count = (
                SELECT COUNT(*) FROM messages WHERE session_id = NEW.session_id
              ),
              updated_at = strftime('%s', 'now')
              WHERE id = NEW.session_id;
            END;
          `);

          await this.#client.execute(`
            CREATE TRIGGER IF NOT EXISTS update_session_message_count_delete
            AFTER DELETE ON messages
            BEGIN
              UPDATE sessions 
              SET message_count = (
                SELECT COUNT(*) FROM messages WHERE session_id = OLD.session_id
              ),
              updated_at = strftime('%s', 'now')
              WHERE id = OLD.session_id;
            END;
          `);

          await this.#client.execute(`
            CREATE TRIGGER IF NOT EXISTS generate_session_title
            AFTER INSERT ON messages
            WHEN NEW.role = 'user' AND (
              SELECT title FROM sessions WHERE id = NEW.session_id
            ) IS NULL
            BEGIN
              UPDATE sessions 
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
          await this.#client.execute(`
            CREATE INDEX IF NOT EXISTS idx_sessions_profile 
            ON sessions (profile);
          `);

          await this.#client.execute(`
            CREATE INDEX IF NOT EXISTS idx_sessions_created_at 
            ON sessions (created_at DESC);
          `);

          await this.#client.execute(`
            CREATE INDEX IF NOT EXISTS idx_sessions_type 
            ON sessions (type);
          `);

          await this.#client.execute(`
            CREATE INDEX IF NOT EXISTS idx_sessions_status 
            ON sessions (status);
          `);

          await this.#client.execute(`
            CREATE INDEX IF NOT EXISTS idx_messages_session_id 
            ON messages (session_id);
          `);

          await this.#client.execute(`
            CREATE INDEX IF NOT EXISTS idx_messages_timestamp 
            ON messages (timestamp DESC);
          `);

          await this.#client.execute(`
            CREATE INDEX IF NOT EXISTS idx_messages_provider 
            ON messages (provider);
          `);

          await this.#client.execute(`
            CREATE INDEX IF NOT EXISTS idx_messages_content_fts 
            ON messages (content);
          `);

          await this.#client.execute(`
            CREATE INDEX IF NOT EXISTS idx_messages_order 
            ON messages (session_id, message_order);
          `);

          debugLog('Created indexes');
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error ? error.message : 'Unknown error';
          debugLog('Warning: Failed to create indexes:', errorMessage);
          debugLog('Continuing with basic functionality');
        }

        const tableResult = await this.#client.execute(`
          SELECT count(*) as table_count FROM sqlite_master 
          WHERE type='table' AND name IN ('sessions', 'messages');
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

  async createSession(
    profile: string,
    title?: string,
    type: 'ask' | 'chat' | 'exec' = 'ask',
  ): Promise<string> {
    await this.ensureDatabaseInitialized();

    const sessionId = uuidv4();

    await this.#client.execute({
      sql: 'INSERT INTO sessions (id, profile, title, type) VALUES (?, ?, ?, ?)',
      args: [sessionId, profile, title || null, type],
    });

    return sessionId;
  }

  async getSession(sessionId: string): Promise<ChatSession | null> {
    await this.ensureDatabaseInitialized();
    const result = await this.#client.execute({
      sql: 'SELECT * FROM sessions WHERE id = ?',
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
      createdAt: new Date(Number(row.created_at) * 1000).toISOString(),
      updatedAt: new Date(Number(row.updated_at) * 1000).toISOString(),
      messageCount: Number(row.message_count),
    };
  }

  async getSessions(options: ChatHistoryOptions = {}): Promise<ChatSession[]> {
    await this.ensureDatabaseInitialized();
    const {profile, limit = 10, fromDate, toDate, type} = options;

    let sql = `
      SELECT * FROM sessions
      WHERE 1=1
    `;
    const args: any[] = [];

    if (profile) {
      sql += ' AND profile = ?';
      args.push(profile);
    }

    if (type) {
      sql += ' AND type = ?';
      args.push(type);
    }

    if (fromDate) {
      sql += ' AND created_at >= ?';
      args.push(Math.floor(new Date(fromDate).getTime() / 1000));
    }

    if (toDate) {
      sql += ' AND created_at <= ?';
      args.push(Math.floor(new Date(toDate).getTime() / 1000));
    }

    sql += ' ORDER BY updated_at DESC LIMIT ?';
    args.push(limit);

    const result = await this.#client.execute({sql, args});

    return result.rows.map((row) => ({
      id: row.id as string,
      profile: row.profile as string,
      title: (row.title as string) ?? undefined,
      createdAt: new Date(Number(row.created_at) * 1000).toISOString(),
      updatedAt: new Date(Number(row.updated_at) * 1000).toISOString(),
      messageCount: Number(row.message_count),
    }));
  }

  async deleteSession(sessionId: string): Promise<boolean> {
    await this.ensureDatabaseInitialized();
    const result = await this.#client.execute({
      sql: 'DELETE FROM sessions WHERE id = ?',
      args: [sessionId],
    });

    return result.rowsAffected > 0;
  }

  async updateSessionTitle(sessionId: string, title: string): Promise<boolean> {
    const result = await this.#client.execute({
      sql: `UPDATE sessions SET title = ?, updated_at = strftime('%s', 'now') WHERE id = ?`,
      args: [title, sessionId],
    });

    return result.rowsAffected > 0;
  }

  async addMessage(
    sessionId: string,
    role: 'user' | 'assistant' | 'system',
    content: string,
    provider: string,
    model: string,
    temperature?: number,
    maxTokens?: number,
    metadata?: any,
  ): Promise<string> {
    await this.ensureDatabaseInitialized();
    const messageId = uuidv4();

    const orderResult = await this.#client.execute({
      sql: 'SELECT COALESCE(MAX(message_order), 0) + 1 as next_order FROM messages WHERE session_id = ?',
      args: [sessionId],
    });
    const messageOrder = Number(orderResult.rows[0].next_order);

    await this.#client.execute({
      sql: `INSERT INTO messages (
        id, session_id, role, content, provider, model, 
        message_order, temperature, max_tokens, metadata
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        messageId,
        sessionId,
        role,
        content,
        provider,
        model,
        messageOrder,
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
      SELECT * FROM messages 
      WHERE session_id = ? 
      ORDER BY message_order ASC
    `;
    const args: any[] = [sessionId];

    if (limit) {
      sql += ' LIMIT ?';
      args.push(limit);
    }

    const result = await this.#client.execute({sql, args});

    return result.rows.map((row) => ({
      id: row.id as string,
      sessionId: row.session_id as string,
      role: row.role as 'user' | 'assistant' | 'system',
      content: row.content as string,
      timestamp: new Date(Number(row.timestamp) * 1000).toISOString(),
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
      SELECT m.* FROM messages m
      JOIN sessions s ON m.session_id = s.id
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
      args.push(Math.floor(new Date(fromDate).getTime() / 1000));
    }

    if (toDate) {
      sql += ' AND m.timestamp <= ?';
      args.push(Math.floor(new Date(toDate).getTime() / 1000));
    }

    sql += ' ORDER BY m.timestamp DESC LIMIT ?';
    args.push(limit);

    const result = await this.#client.execute({sql, args});

    return result.rows.map((row) => ({
      id: row.id as string,
      sessionId: row.session_id as string,
      role: row.role as 'user' | 'assistant' | 'system',
      content: row.content as string,
      timestamp: new Date(Number(row.timestamp) * 1000).toISOString(),
      provider: row.provider as SupportedProvider,
      model: row.model as string,
      temperature: row.temperature as number | undefined,
      maxTokens: row.max_tokens as number | undefined,
      metadata: row.metadata ? JSON.parse(row.metadata as string) : null,
    }));
  }

  async getStats(profile?: string): Promise<HistoryStats> {
    await this.ensureDatabaseInitialized();
    let sql = 'SELECT COUNT(*) as count FROM sessions';
    const args: any[] = [];

    if (profile) {
      sql += ' WHERE profile = ?';
      args.push(profile);
    }

    const sessionResult = await this.#client.execute({sql, args});
    const totalSessions = Number(sessionResult.rows[0].count);

    let messageSql = `
      SELECT 
        COUNT(*) as total_count,
        SUM(CASE WHEN role = 'user' THEN 1 ELSE 0 END) as user_count,
        SUM(CASE WHEN role = 'assistant' THEN 1 ELSE 0 END) as assistant_count
      FROM messages
    `;
    const messageArgs: any[] = [];

    if (profile) {
      messageSql += `
        JOIN sessions ON messages.session_id = sessions.id
        WHERE sessions.profile = ?
      `;
      messageArgs.push(profile);
    }

    const messageResult = await this.#client.execute({
      sql: messageSql,
      args: messageArgs,
    });

    const totalMessages = Number(messageResult.rows[0].total_count);

    let providerSql = `
      SELECT provider, COUNT(*) as count
      FROM messages
    `;
    const providerArgs: any[] = [];

    if (profile) {
      providerSql += `
        JOIN sessions ON messages.session_id = sessions.id
        WHERE sessions.profile = ?
      `;
      providerArgs.push(profile);
    }

    providerSql += ' GROUP BY provider ORDER BY count DESC';

    const providerResult = await this.#client.execute({
      sql: providerSql,
      args: providerArgs,
    });

    const messagesByProvider: Record<string, number> = {};
    providerResult.rows.forEach((row) => {
      messagesByProvider[row.provider as string] = Number(row.count);
    });

    let modelSql = `
      SELECT model, COUNT(*) as count
      FROM messages
    `;
    const modelArgs: any[] = [];

    if (profile) {
      modelSql += `
        JOIN sessions ON messages.session_id = sessions.id
        WHERE sessions.profile = ?
      `;
      modelArgs.push(profile);
    }

    modelSql += ' GROUP BY model ORDER BY count DESC';

    const modelResult = await this.#client.execute({
      sql: modelSql,
      args: modelArgs,
    });

    const messagesByModel: Record<string, number> = {};
    modelResult.rows.forEach((row) => {
      messagesByModel[row.model as string] = Number(row.count);
    });

    const profileSql = `
      SELECT sessions.profile, COUNT(*) as count
      FROM messages
      JOIN sessions ON messages.session_id = sessions.id
      GROUP BY sessions.profile
      ORDER BY count DESC
    `;

    const profileResult = await this.#client.execute({sql: profileSql});

    const messagesByProfile: Record<string, number> = {};
    profileResult.rows.forEach((row) => {
      messagesByProfile[row.profile as string] = Number(row.count);
    });

    let timeRangeSql = `
      SELECT 
        MIN(timestamp) as oldest,
        MAX(timestamp) as newest
      FROM messages
    `;
    const timeRangeArgs: any[] = [];

    if (profile) {
      timeRangeSql += `
        JOIN sessions ON messages.session_id = sessions.id
        WHERE sessions.profile = ?
      `;
      timeRangeArgs.push(profile);
    }

    const timeRangeResult = await this.#client.execute({
      sql: timeRangeSql,
      args: timeRangeArgs,
    });

    return {
      totalSessions,
      totalMessages,
      messagesByProvider,
      messagesByModel,
      messagesByProfile,
      oldestMessage: timeRangeResult.rows[0].oldest
        ? new Date(Number(timeRangeResult.rows[0].oldest) * 1000).toISOString()
        : undefined,
      newestMessage: timeRangeResult.rows[0].newest
        ? new Date(Number(timeRangeResult.rows[0].newest) * 1000).toISOString()
        : undefined,
    };
  }

  async deleteOldSessions(profile: string, days: number): Promise<number> {
    await this.ensureDatabaseInitialized();
    const date = new Date();
    date.setDate(date.getDate() - days);
    const cutoffTimestamp = Math.floor(date.getTime() / 1000);

    const result = await this.#client.execute({
      sql: `
        DELETE FROM sessions 
        WHERE profile = ? AND created_at < ?
      `,
      args: [profile, cutoffTimestamp],
    });

    return result.rowsAffected;
  }

  async vacuum(): Promise<void> {
    await this.ensureDatabaseInitialized();
    await this.#client.execute({sql: 'VACUUM'});
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

  async #ensureActTemplatesTable(): Promise<void> {
    await this.ensureDatabaseInitialized();

    await this.#client.execute(`
      CREATE TABLE IF NOT EXISTS act_templates (
        id TEXT PRIMARY KEY,
        label TEXT NOT NULL,
        category TEXT NOT NULL,
        description TEXT NOT NULL,
        template TEXT NOT NULL,
        is_built_in INTEGER NOT NULL DEFAULT 0,
        created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now')),
        updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
      );
    `);
  }

  async createActTemplate(template: {
    id: string;
    label: string;
    category: string;
    description: string;
    template: string;
  }): Promise<void> {
    await this.#ensureActTemplatesTable();

    const now = Math.floor(Date.now() / 1000);
    await this.#client.execute(
      `INSERT INTO act_templates (id, label, category, description, template, is_built_in, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        template.id,
        template.label,
        template.category,
        template.description,
        template.template,
        0,
        now,
        now,
      ],
    );
  }

  async updateActTemplate(
    id: string,
    updates: Partial<{
      label: string;
      category: string;
      description: string;
      template: string;
    }>,
  ): Promise<boolean> {
    await this.#ensureActTemplatesTable();

    const setClause = [];
    const values = [];

    if (updates.label !== undefined) {
      setClause.push('label = ?');
      values.push(updates.label);
    }
    if (updates.category !== undefined) {
      setClause.push('category = ?');
      values.push(updates.category);
    }
    if (updates.description !== undefined) {
      setClause.push('description = ?');
      values.push(updates.description);
    }
    if (updates.template !== undefined) {
      setClause.push('template = ?');
      values.push(updates.template);
    }

    if (setClause.length === 0) {
      return false;
    }

    setClause.push('updated_at = ?');
    values.push(Math.floor(Date.now() / 1000));
    values.push(id);
    const result = await this.#client.execute(
      `UPDATE act_templates SET ${setClause.join(', ')} 
         WHERE id = ? AND is_built_in = 0`,
      values,
    );

    return result.rowsAffected > 0;
  }

  async deleteActTemplate(id: string): Promise<boolean> {
    await this.#ensureActTemplatesTable();
    const result = await this.#client.execute(
      'DELETE FROM act_templates WHERE id = ? AND is_built_in = 0',
      [id],
    );

    return result.rowsAffected > 0;
  }

  async getActTemplate(id: string): Promise<any | null> {
    await this.#ensureActTemplatesTable();
    const result = await this.#client.execute(
      'SELECT * FROM act_templates WHERE id = ? LIMIT 1',
      [id],
    );

    return result.rows.length > 0 ? result.rows[0] : null;
  }

  async listActTemplates(customOnly = false): Promise<any[]> {
    await this.#ensureActTemplatesTable();
    const whereClause = customOnly ? 'WHERE is_built_in = 0' : '';

    const result = await this.#client.execute(
      `SELECT * FROM act_templates ${whereClause} ORDER BY created_at DESC`,
      [],
    );

    return result.rows;
  }

  async templateExists(id: string): Promise<boolean> {
    await this.#ensureActTemplatesTable();
    const result = await this.#client.execute(
      'SELECT 1 FROM act_templates WHERE id = ? LIMIT 1',
      [id],
    );

    return result.rows.length > 0;
  }

  async close(): Promise<void> {
    await this.#client.close();
  }
}
