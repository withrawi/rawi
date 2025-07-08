# Database Management

The database system handles chat history, session management, and message storage using SQLite.

## Overview

The database module provides:

- **DatabaseManager** - High-level database operations
- **DatabaseAdapter** - Low-level database interface
- **Schema Management** - Database structure and migrations
- **Session Management** - Chat session lifecycle
- **Message Storage** - Persistent message history

## DatabaseManager

The `DatabaseManager` class provides the main interface for database operations.

### Usage

```typescript
import { DatabaseManager } from "@rawi/core";

const db = new DatabaseManager();

// Create a new chat session
const sessionId = await db.createSession("default", "My Chat");

// Add messages to session
await db.addMessage(
  sessionId,
  "user",
  "Hello, how are you?",
  "openai",
  "gpt-4o"
);

await db.addMessage(
  sessionId,
  "assistant",
  "I am doing well, thank you!",
  "openai",
  "gpt-4o"
);

// Get session history
const sessions = await db.getSessions({ profile: "default" });
const messages = await db.getMessages(sessionId);
```

### Methods

#### Session Management

##### `createSession(profile: string, title?: string): Promise<string>`

Creates a new chat session and returns the session ID.

##### `getSession(sessionId: string): Promise<ChatSession | null>`

Retrieves a specific session by ID.

##### `getSessions(options: ChatHistoryOptions): Promise<ChatSession[]>`

Gets sessions with filtering and pagination options.

##### `deleteSession(sessionId: string): Promise<boolean>`

Deletes a session and all its messages.

##### `updateSessionTitle(sessionId: string, title: string): Promise<boolean>`

Updates the title of an existing session.

#### Message Management

##### `addMessage(sessionId, role, content, provider, model, temperature?, maxTokens?, metadata?): Promise<string>`

Adds a new message to a session.

##### `getMessages(sessionId: string, options?: MessageOptions): Promise<ChatMessage[]>`

Retrieves messages from a session.

##### `deleteMessage(messageId: string): Promise<boolean>`

Deletes a specific message.

##### `updateMessage(messageId: string, content: string): Promise<boolean>`

Updates message content.

#### Statistics

##### `getStats(profile?: string): Promise<HistoryStats>`

Gets usage statistics for a profile.

##### `clearHistory(profile?: string): Promise<number>`

Clears chat history for a profile.

## Data Models

### ChatSession

```typescript
interface ChatSession {
  id: string;
  profile: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messageCount: number;
  lastMessage?: string;
}
```

### ChatMessage

```typescript
interface ChatMessage {
  id: string;
  sessionId: string;
  role: "user" | "assistant";
  content: string;
  provider: string;
  model: string;
  temperature?: number;
  maxTokens?: number;
  metadata?: any;
  createdAt: string;
}
```

### HistoryStats

```typescript
interface HistoryStats {
  totalSessions: number;
  totalMessages: number;
  totalTokens: number;
  averageSessionLength: number;
  mostUsedProvider: string;
  mostUsedModel: string;
  oldestSession: string;
  newestSession: string;
}
```

## Query Options

### ChatHistoryOptions

```typescript
interface ChatHistoryOptions {
  profile?: string;
  limit?: number;
  offset?: number;
  search?: string;
  startDate?: string;
  endDate?: string;
  provider?: string;
  model?: string;
}
```

### MessageOptions

```typescript
interface MessageOptions {
  limit?: number;
  offset?: number;
  role?: "user" | "assistant";
  search?: string;
}
```

## Database Schema

The database uses SQLite with the following tables:

### sessions

```sql
CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  profile TEXT NOT NULL,
  title TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### messages

```sql
CREATE TABLE messages (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  provider TEXT NOT NULL,
  model TEXT NOT NULL,
  temperature REAL,
  max_tokens INTEGER,
  metadata TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE CASCADE
);
```

### Indexes

```sql
CREATE INDEX idx_sessions_profile ON sessions(profile);
CREATE INDEX idx_sessions_created_at ON sessions(created_at);
CREATE INDEX idx_messages_session_id ON messages(session_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
CREATE INDEX idx_messages_role ON messages(role);
CREATE INDEX idx_messages_provider ON messages(provider);
```

## Database Location

The database is stored in the user's configuration directory:

- **Linux/macOS**: `~/.rawi/database.sqlite`
- **Windows**: `%USERPROFILE%\.rawi\database.sqlite`

## Usage Examples

### Basic Session Management

```typescript
const db = new DatabaseManager();

// Create and use a session
const sessionId = await db.createSession("work", "Code Review Discussion");

// Add user message
await db.addMessage(
  sessionId,
  "user",
  "Please review this TypeScript code",
  "openai",
  "gpt-4o",
  0.3,
  2048
);

// Add assistant response
await db.addMessage(
  sessionId,
  "assistant",
  "I can help review your code. Please share it.",
  "openai",
  "gpt-4o",
  0.3,
  2048
);
```

### Querying History

```typescript
// Get recent sessions
const recentSessions = await db.getSessions({
  profile: "default",
  limit: 10,
});

// Search sessions
const searchResults = await db.getSessions({
  search: "code review",
  limit: 5,
});

// Filter by date range
const weekSessions = await db.getSessions({
  startDate: "2024-01-01",
  endDate: "2024-01-07",
});
```

### Statistics and Analytics

```typescript
// Get usage statistics
const stats = await db.getStats("default");
console.log(`Total sessions: ${stats.totalSessions}`);
console.log(`Most used provider: ${stats.mostUsedProvider}`);

// Profile-specific stats
const workStats = await db.getStats("work");
```

## Error Handling

The database system handles common errors:

- **Database Connection**: Automatic retry on connection failures
- **Schema Validation**: Ensures data integrity
- **Concurrent Access**: Handles multiple operations safely
- **Corruption Recovery**: Automatic backup and recovery

## Performance Considerations

- **Indexing**: Optimized queries with proper indexes
- **Pagination**: Large result sets are paginated
- **Connection Pooling**: Efficient database connection management
- **Query Optimization**: Optimized SQL queries for performance

## Backup and Recovery

- **Automatic Backups**: Regular database backups
- **Export/Import**: JSON export/import functionality
- **Migration Support**: Schema version management
- **Data Integrity**: Validation and consistency checks

## Development

### Adding New Tables

```typescript
// In schema/index.ts
export const migrations = [
  {
    version: 1,
    sql: `
      CREATE TABLE new_table (
        id TEXT PRIMARY KEY,
        data TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `,
  },
];
```

### Custom Queries

```typescript
// In adapter.ts
async customQuery(params: any): Promise<any[]> {
  const stmt = this.db.prepare(`
    SELECT * FROM sessions
    WHERE profile = ? AND title LIKE ?
  `);
  return stmt.all(params.profile, `%${params.search}%`);
}
```
