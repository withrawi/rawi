import {sql} from 'drizzle-orm';
import {integer, real, sqliteTable, text} from 'drizzle-orm/sqlite-core';

export const sessions = sqliteTable('sessions', {
  id: text('id').primaryKey(),
  profile: text('profile').notNull(),
  type: text('type', {enum: ['ask', 'chat', 'exec']})
    .notNull()
    .default('ask'),
  title: text('title'),
  description: text('description'),
  status: text('status', {
    enum: ['active', 'archived', 'paused', 'pending', 'completed', 'failed'],
  })
    .notNull()
    .default('active'),
  createdAt: integer('created_at', {mode: 'timestamp'})
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer('updated_at', {mode: 'timestamp'})
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  lastAccessedAt: integer('last_accessed_at', {mode: 'timestamp'})
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  messageCount: integer('message_count').notNull().default(0),
  query: text('query'),
  filesProcessed: text('files_processed', {mode: 'json'}),
  contentFiltered: integer('content_filtered', {mode: 'boolean'}).default(
    false,
  ),
  conversationContext: text('conversation_context', {mode: 'json'}),
  maxMessages: integer('max_messages'),
  isPrivate: integer('is_private', {mode: 'boolean'}).default(false),
  tags: text('tags', {mode: 'json'}),
});

export const messages = sqliteTable('messages', {
  id: text('id').primaryKey(),
  sessionId: text('session_id')
    .notNull()
    .references(() => sessions.id, {onDelete: 'cascade'}),
  role: text('role', {enum: ['user', 'assistant', 'system']})
    .notNull()
    .default('user'),
  content: text('content').notNull(),
  timestamp: integer('timestamp', {mode: 'timestamp'})
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  messageOrder: integer('message_order').notNull(),
  provider: text('provider').notNull(),
  model: text('model').notNull(),
  temperature: real('temperature'),
  maxTokens: integer('max_tokens'),
  processingTime: real('processing_time'),
  tokenUsage: text('token_usage', {mode: 'json'}),
  metadata: text('metadata', {mode: 'json'}),
  parentMessageId: text('parent_message_id'),
  isEdited: integer('is_edited', {mode: 'boolean'}).default(false),
  editHistory: text('edit_history', {mode: 'json'}),
  reactions: text('reactions', {mode: 'json'}),
});

export const actTemplates = sqliteTable('act_templates', {
  id: text('id').primaryKey(),
  label: text('label').notNull(),
  category: text('category').notNull(),
  description: text('description').notNull(),
  template: text('template').notNull(),
  isBuiltIn: integer('is_built_in', {mode: 'boolean'}).notNull().default(false),
  createdAt: integer('created_at', {mode: 'timestamp'})
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
  updatedAt: integer('updated_at', {mode: 'timestamp'})
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});
