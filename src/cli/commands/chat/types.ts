export interface CommandOption {
  flags: string;
  description: string;
  defaultValue?: string | boolean | string[];
}

export interface ChatOptions {
  profile?: string;
  act?: string;
  verbose?: boolean;

  session?: string;
  newSession?: boolean;
  listSessions?: boolean;
  deleteSession?: string;
  exportSessions?: boolean | string;
  renameSession?: string;
  newTitle?: string;

  limit?: number;
  fromDate?: string;
  toDate?: string;
  format?: 'json' | 'table' | 'summary';

  stats?: boolean;
  backup?: string;
  restore?: string;
  batchDelete?: string;
  archive?: boolean;
}

export interface SessionManager {
  handleSessionStart(options: ChatOptions): Promise<string>;
  createNewSession(profile: string, title?: string): Promise<string>;
  continueSession(
    sessionId: string,
    profile: string,
  ): Promise<EnhancedChatSession>;

  getRecentSessions(profile: string, limit?: number): Promise<ChatSession[]>;
  displaySessionSelection(sessions: ChatSession[]): Promise<string | null>;

  listSessions(options: ListSessionsOptions): Promise<void>;
  deleteSession(
    sessionId: string,
    options: DeleteSessionOptions,
  ): Promise<boolean>;
  renameSession(sessionId: string, newTitle: string): Promise<boolean>;
  exportSessions(options: ExportSessionsOptions): Promise<string>;
}

export interface EnhancedChatSession {
  sessionId: string;
  profile: string;
  title?: string;
  messages: ChatMessage[];

  displaySessionInfo(): void;
  displayConversationHistory(limit?: number): void;

  addUserMessage(content: string): Promise<void>;
  addAssistantMessage(
    content: string,
    metadata: MessageMetadata,
  ): Promise<void>;

  updateSessionTitle(title: string): Promise<void>;
  getSessionStats(): SessionStats;
}

export interface ChatSession {
  id: string;
  profile: string;
  type?: 'ask' | 'chat';
  title?: string;
  description?: string;
  status?:
    | 'active'
    | 'archived'
    | 'paused'
    | 'pending'
    | 'completed'
    | 'failed';
  createdAt: string;
  updatedAt: string;
  lastAccessedAt?: string;
  messageCount: number;
  query?: string;
  filesProcessed?: any;
  contentFiltered?: boolean;
  conversationContext?: any;
  maxMessages?: number;
  isPrivate?: boolean;
  tags?: any;
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  provider: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
  metadata?: any;
  messageOrder?: number;
  processingTime?: number;
  tokenUsage?: any;
  parentMessageId?: string;
  isEdited?: boolean;
  editHistory?: any;
  reactions?: any;
}

export interface MessageMetadata {
  provider: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
  [key: string]: any;
}

export interface SessionSelectionResult {
  action: 'new' | 'continue' | 'exit';
  sessionId?: string;
}

export interface SessionDisplayInfo {
  id: string;
  title: string;
  profile: string;
  createdAt: string;
  updatedAt: string;
  messageCount: number;
  lastActivity: string;
  age: string;
}

export interface SessionStats {
  messageCount: number;
  createdAt: string;
  updatedAt: string;
  duration: string;
  providers: string[];
  models: string[];
}

export interface ListSessionsOptions {
  profile?: string;
  limit?: number;
  fromDate?: string;
  toDate?: string;
  format?: 'table' | 'json' | 'summary';
  type?: 'ask' | 'chat';
}

export interface DeleteSessionOptions {
  force?: boolean;
  confirm?: boolean;
}

export interface ExportSessionsOptions {
  format: 'json' | 'markdown';
  output?: string;
  sessions?: string[];
  profile?: string;
  fromDate?: string;
  toDate?: string;
}

export interface SessionError extends Error {
  code: string;
  sessionId?: string;
  profile?: string;
}

export class SessionNotFoundError extends Error implements SessionError {
  code = 'SESSION_NOT_FOUND';
  sessionId: string;
  profile: string;

  constructor(sessionId: string, profile: string) {
    super(`Session '${sessionId}' not found for profile '${profile}'`);
    this.sessionId = sessionId;
    this.profile = profile;
    this.name = 'SessionNotFoundError';
  }
}

export class ProfileMismatchError extends Error implements SessionError {
  code = 'PROFILE_MISMATCH';
  sessionId: string;
  profile: string;
  expectedProfile: string;

  constructor(
    sessionId: string,
    expectedProfile: string,
    actualProfile: string,
  ) {
    super(
      `Session '${sessionId}' belongs to profile '${actualProfile}', not '${expectedProfile}'`,
    );
    this.sessionId = sessionId;
    this.profile = actualProfile;
    this.expectedProfile = expectedProfile;
    this.name = 'ProfileMismatchError';
  }
}

export class DatabaseConnectionError extends Error implements SessionError {
  code = 'DATABASE_CONNECTION_ERROR';
  cause?: Error;

  constructor(message: string, cause?: Error) {
    super(`Database connection error: ${message}`);
    this.name = 'DatabaseConnectionError';
    this.cause = cause;
  }
}
