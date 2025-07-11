import {sql} from 'drizzle-orm';
import {integer, real, sqliteTable, text} from 'drizzle-orm/sqlite-core';

export const chatSessions = sqliteTable('chat_sessions', {
  id: text('id').primaryKey(),
  profile: text('profile').notNull(),
  title: text('title'),
  createdAt: text('created_at').notNull().default(sql`datetime('now')`),
  updatedAt: text('updated_at').notNull().default(sql`datetime('now')`),
  messageCount: integer('message_count').notNull().default(0),
});

export const chatMessages = sqliteTable('chat_messages', {
  id: text('id').primaryKey(),
  sessionId: text('session_id')
    .notNull()
    .references(() => chatSessions.id, {onDelete: 'cascade'}),
  role: text('role', {enum: ['user', 'assistant']}).notNull(),
  content: text('content').notNull(),
  timestamp: text('timestamp').notNull().default(sql`datetime('now')`),
  provider: text('provider').notNull(),
  model: text('model').notNull(),
  temperature: real('temperature'),
  maxTokens: integer('max_tokens'),
  metadata: text('metadata'),
});
