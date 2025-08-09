import type {ChatMessage, ChatSession} from '../shared/types.js';

export interface SessionState {
  session: ChatSession;
  messages: ChatMessage[];
  isActive: boolean;
  lastAccessedAt: string;
  messageCount: number;
  metadata: SessionMetadata;
}

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

export interface SessionRestoreOptions {
  includeMessages?: boolean;
  messageLimit?: number;
  fromDate?: string;
  toDate?: string;
}

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

export interface SessionPersistenceOptions {
  autoSave?: boolean;
  saveInterval?: number;
  maxHistoryEntries?: number;
}
