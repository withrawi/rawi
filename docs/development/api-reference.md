# API Reference

This document provides a comprehensive reference for the Rawi CLI tool's programmatic API.

## Core Modules

### ConfigManager

Configuration management for AI providers and user profiles.

```typescript
import { ConfigManager } from "@rawi/core";
```

#### Constructor

```typescript
new ConfigManager();
```

Creates a new configuration manager instance.

#### Methods

##### `getCredentials(profile?: string): RawiCredentials | null`

Retrieves credentials for a specific profile.

**Parameters:**

- `profile` (optional): Profile name (defaults to 'default')

**Returns:** Credentials object or null if not found

**Example:**

```typescript
const config = new ConfigManager();
const credentials = config.getCredentials("work");
```

##### `setCredentials(profile: string, credentials: RawiCredentials): void`

Saves credentials for a profile.

**Parameters:**

- `profile`: Profile name
- `credentials`: Credentials object

**Example:**

```typescript
config.setCredentials("work", {
  provider: "openai",
  model: "gpt-4o",
  apiKey: "sk-...",
  temperature: 0.7,
});
```

##### `configure(options: ConfigureOptions): Promise<void>`

Interactive configuration wizard.

**Parameters:**

- `options`: Configuration options

**Example:**

```typescript
await config.configure({
  profile: "default",
  provider: "anthropic",
});
```

##### `showConfiguration(profile?: string): void`

Displays current configuration with masked API keys.

##### `listProfiles(): string[]`

Returns array of all profile names.

##### `deleteProfile(profile: string): boolean`

Deletes a profile and its credentials.

---

### DatabaseManager

Chat history and session management.

```typescript
import { DatabaseManager } from "@rawi/core";
```

#### Constructor

```typescript
new DatabaseManager();
```

Creates a new database manager instance.

#### Session Methods

##### `createSession(profile: string, title?: string): Promise<string>`

Creates a new chat session.

**Parameters:**

- `profile`: Profile name
- `title` (optional): Session title

**Returns:** Session ID

**Example:**

```typescript
const db = new DatabaseManager();
const sessionId = await db.createSession("default", "My Chat");
```

##### `getSession(sessionId: string): Promise<ChatSession | null>`

Retrieves a specific session.

**Parameters:**

- `sessionId`: Session ID

**Returns:** Session object or null

##### `getSessions(options?: ChatHistoryOptions): Promise<ChatSession[]>`

Gets sessions with filtering options.

**Parameters:**

- `options` (optional): Query options

**Returns:** Array of sessions

**Example:**

```typescript
const sessions = await db.getSessions({
  profile: "default",
  limit: 10,
});
```

##### `deleteSession(sessionId: string): Promise<boolean>`

Deletes a session and all its messages.

##### `updateSessionTitle(sessionId: string, title: string): Promise<boolean>`

Updates session title.

#### Message Methods

##### `addMessage(sessionId: string, role: 'user' | 'assistant', content: string, provider: string, model: string, temperature?: number, maxTokens?: number, metadata?: any): Promise<string>`

Adds a message to a session.

**Parameters:**

- `sessionId`: Session ID
- `role`: Message role ('user' or 'assistant')
- `content`: Message content
- `provider`: AI provider name
- `model`: AI model name
- `temperature` (optional): Sampling temperature
- `maxTokens` (optional): Maximum tokens
- `metadata` (optional): Additional metadata

**Returns:** Message ID

##### `getMessages(sessionId: string, options?: MessageOptions): Promise<ChatMessage[]>`

Gets messages from a session.

##### `deleteMessage(messageId: string): Promise<boolean>`

Deletes a specific message.

##### `updateMessage(messageId: string, content: string): Promise<boolean>`

Updates message content.

#### Statistics Methods

##### `getStats(profile?: string): Promise<HistoryStats>`

Gets usage statistics.

**Example:**

```typescript
const stats = await db.getStats("default");
console.log(`Total sessions: ${stats.totalSessions}`);
```

##### `clearHistory(profile?: string): Promise<number>`

Clears chat history for a profile.

---

### Provider System

AI provider integration utilities.

```typescript
import { getProvider, getAllProviders } from "@rawi/core";
```

#### Functions

##### `getProvider(name: string): Provider`

Gets a provider by name.

**Parameters:**

- `name`: Provider name

**Returns:** Provider instance

**Example:**

```typescript
const provider = getProvider("openai");
const response = await provider.generateText(credentials, prompt);
```

##### `getAllProviders(): ProviderConfig[]`

Gets all available providers.

**Returns:** Array of provider configurations

---

### Template System

Act template management.

```typescript
import { getActTemplate, getAllActTemplates } from "@rawi/core";
```

#### Functions

##### `getActTemplate(id: string): ActTemplate | undefined`

Gets a template by ID.

**Parameters:**

- `id`: Template ID

**Returns:** Template object or undefined

**Example:**

```typescript
const template = getActTemplate("code-reviewer");
if (template) {
  console.log(template.description);
}
```

##### `getAllActTemplates(): ActTemplate[]`

Gets all available templates.

**Returns:** Array of template objects

##### `searchTemplates(query: string): ActTemplate[]`

Searches templates by label, description, or category.

**Parameters:**

- `query`: Search query

**Returns:** Array of matching templates

---

### Utility Functions

Common utility functions.

```typescript
import {
  validateApiKey,
  validateTemperature,
  maskApiKey,
  formatDate,
} from "@rawi/core";
```

#### Validation Functions

##### `validateApiKey(apiKey: string): boolean`

Validates API key format.

##### `validateTemperature(temperature: number): boolean`

Validates temperature value (0-2).

##### `validateMaxTokens(maxTokens: number): boolean`

Validates max tokens value (1-100000).

##### `validateLanguage(language: string): boolean`

Validates language setting.

#### Formatting Functions

##### `maskApiKey(apiKey: string): string`

Masks API key for display.

##### `formatDate(dateString: string): string`

Formats date for display.

##### `truncateText(text: string, maxLength: number): string`

Truncates text with ellipsis.

---

### Spinner Manager

Loading indicator management.

```typescript
import { spinnerManager } from "@rawi/core";
```

#### Methods

##### `start(text: string): void`

Starts spinner with text.

##### `stop(): void`

Stops spinner.

##### `succeed(text?: string): void`

Stops spinner with success message.

##### `fail(text?: string): void`

Stops spinner with error message.

##### `update(text: string): void`

Updates spinner text.

**Example:**

```typescript
spinnerManager.start("Loading...");
await someAsyncOperation();
spinnerManager.succeed("Operation completed");
```

## Type Definitions

### Core Types

```typescript
interface RawiCredentials {
  provider: SupportedProvider;
  model: string;
  apiKey?: string;
  temperature?: number;
  maxTokens?: number;
  language?: SupportedLanguage;
  // Provider-specific settings
}

interface ChatSession {
  id: string;
  profile: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messageCount: number;
  lastMessage?: string;
}

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

interface ActTemplate {
  label: string;
  id: string;
  category: string;
  description: string;
  template: string;
}
```

### Options Types

```typescript
interface ConfigureOptions {
  profile?: string;
  provider?: SupportedProvider;
  model?: string;
  apiKey?: string;
  baseURL?: string;
  temperature?: number;
  maxTokens?: number;
  language?: SupportedLanguage;
  show?: boolean;
  list?: boolean;
  delete?: string;
}

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

interface MessageOptions {
  limit?: number;
  offset?: number;
  role?: "user" | "assistant";
  search?: string;
}
```

### Provider Types

```typescript
interface ProviderConfig {
  name: string;
  displayName: string;
  models: ModelInfo[];
}

interface ModelInfo {
  name: string;
  displayName?: string;
  description?: string;
}

// Provider-specific credential types
interface OpenAICredentials extends BaseCredentials {
  provider: "openai";
  apiKey: string;
  baseURL?: string;
  organization?: string;
}

interface AnthropicCredentials extends BaseCredentials {
  provider: "anthropic";
  apiKey: string;
  baseURL?: string;
}

interface GoogleCredentials extends BaseCredentials {
  provider: "google";
  apiKey: string;
  baseURL?: string;
}
```

## Error Handling

### Error Types

```typescript
class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConfigurationError";
  }
}

class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}

class ProviderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProviderError";
  }
}
```

### Error Handling Patterns

```typescript
// Async/await with try-catch
try {
  const response = await provider.generateText(credentials, prompt);
  console.log(response);
} catch (error) {
  if (error instanceof ProviderError) {
    console.error("Provider error:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}

// Promise-based error handling
provider
  .generateText(credentials, prompt)
  .then((response) => console.log(response))
  .catch((error) => console.error("Error:", error.message));
```

## Usage Examples

### Basic Configuration

```typescript
import { ConfigManager } from "@rawi/core";

const config = new ConfigManager();

// Set up OpenAI
await config.configure({
  profile: "default",
  provider: "openai",
  model: "gpt-4o",
  apiKey: "sk-...",
});

// Get credentials
const credentials = config.getCredentials("default");
```

### Chat Session Management

```typescript
import { DatabaseManager } from "@rawi/core";

const db = new DatabaseManager();

// Create session
const sessionId = await db.createSession("default", "Code Review");

// Add messages
await db.addMessage(sessionId, "user", "Review this code", "openai", "gpt-4o");
await db.addMessage(
  sessionId,
  "assistant",
  "I can help with that",
  "openai",
  "gpt-4o"
);

// Get session history
const sessions = await db.getSessions({ limit: 10 });
```

### Provider Integration

```typescript
import { getProvider } from "@rawi/core";

const provider = getProvider("openai");
const credentials = {
  provider: "openai",
  model: "gpt-4o",
  apiKey: "sk-...",
};

const response = await provider.generateText(credentials, "Hello world");
console.log(response);
```

### Template Usage

```typescript
import { getActTemplate } from "@rawi/core";

const template = getActTemplate("code-reviewer");
if (template) {
  const prompt = template.template.replace("{userInput}", "Review this code");
  // Use prompt with provider
}
```

This API reference provides comprehensive documentation for all public APIs in the Rawi CLI tool. Use these interfaces and functions to integrate Rawi functionality into your applications or extend the tool's capabilities.
