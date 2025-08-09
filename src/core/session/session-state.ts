import type {ChatMessage, ChatSession} from '../shared/types.js';

/**
 * Represents the current state of a chat session
 */
export interface SessionState {
  session: ChatSession;
  messages: ChatMessage[];
  isActive: boolean;
  lastAccessedAt: string;
  messageCount: number;
  metadata: SessionMetadata;
}

/**
 * Session metadata for tracking additional information
 */
export interface SessionMetadata {
  providers: string[];
  models: string[];
  totalTokensUsed?: number;
  averageResponseTime?: number;
  lastModel?: string;
  lastProvider?: string;
  tags?: string[];
  customData?: Record<string, any>;
}

/**
 * Options for session restoration
 */
export interface SessionRestoreOptions {
  includeMessages?: boolean;
  messageLimit?: number;
  fromDate?: string;
  toDate?: string;
}

/**
 * Session history entry for tracking changes
 */
export interface SessionHistoryEntry {
  timestamp: string;
  action:
    | 'created'
    | 'updated'
    | 'message_added'
    | 'title_changed'
    | 'accessed';
  details: string;
  metadata?: Record<string, any>;
}

/**
 * Options for session persistence
 */
export interface SessionPersistenceOptions {
  autoSave?: boolean;
  saveInterval?: number; // in milliseconds
  maxHistoryEntries?: number;
}
