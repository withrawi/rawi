// Re-export all session-related types from the main types file for convenience
export type {
  ChatMessage,
  // Data types
  ChatSession,
  DatabaseConnectionError,
  DeleteSessionOptions,
  EnhancedChatSession,
  ExportSessionsOptions,
  // Options interfaces
  ListSessionsOptions,
  MessageMetadata,
  ProfileMismatchError,
  SessionDisplayInfo,
  // Error types
  SessionError,
  // Core interfaces
  SessionManager,
  SessionNotFoundError,
  // Selection and display types
  SessionSelectionResult,
  SessionStats,
} from './types.js';
