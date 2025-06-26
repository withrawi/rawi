# API Reference

Internal API documentation for Rawi's TypeScript modules and interfaces.

## 📋 Table of Contents

- [Core Types](#core-types)
- [Configuration API](#configuration-api)
- [Database API](#database-api)
- [Provider API](#provider-api)
- [CLI API](#cli-api)
- [Utilities](#utilities)

---

## 🔧 Core Types

### SupportedProvider

Union type representing all supported AI providers.

```typescript
type SupportedProvider =
  | "anthropic"
  | "google"
  | "ollama"
  | "openai"
  | "xai"
  | "azure"
  | "bedrock"
  | "qwen";
```

### SupportedLanguage

Supported interface languages.

```typescript
type SupportedLanguage = "english" | "arabic";
```

### ModelInfo

Information about an AI model.

```typescript
interface ModelInfo {
  name: string; // Model identifier
  displayName?: string; // Human-readable name
  description?: string; // Model description
}
```

### ProviderConfig

Configuration for an AI provider.

```typescript
interface ProviderConfig {
  name: string; // Provider identifier
  displayName: string; // Human-readable name
  models: ModelInfo[]; // Available models
}
```

### BaseCredentials

Base configuration for AI providers.

```typescript
interface BaseCredentials {
  provider: SupportedProvider;
  model: string;
  temperature?: number; // 0.0 to 2.0
  maxTokens?: number; // Token limit
  language?: SupportedLanguage;
}
```

### Provider-Specific Settings

#### OllamaSettings

```typescript
interface OllamaSettings {
  baseURL?: string; // Default: http://localhost:11434/api
}
```

#### OpenAISettings

```typescript
interface OpenAISettings {
  apiKey: string;
  baseURL?: string; // Default: https://api.openai.com/v1
}
```

#### AnthropicSettings

```typescript
interface AnthropicSettings {
  apiKey: string;
  baseURL?: string; // Default: https://api.anthropic.com
}
```

#### GoogleSettings

```typescript
interface GoogleSettings {
  apiKey: string;
  baseURL?: string; // Default: https://generativelanguage.googleapis.com/v1beta
}
```

#### XAISettings

```typescript
interface XAISettings {
  apiKey: string;
  baseURL?: string; // Default: https://api.x.ai/v1
}
```

#### AzureSettings

```typescript
interface AzureSettings {
  resourceName: string; // Required
  apiVersion?: string; // Default: 2024-10-01-preview
}
```

#### BedrockSettings

```typescript
interface BedrockSettings {
  region?: string; // Default: us-east-1
  accessKeyId?: string; // Required if not using provider chain
  secretAccessKey?: string; // Required if not using provider chain
  sessionToken?: string; // Optional
  useProviderChain?: boolean; // Use AWS credential provider chain
}
```

#### QwenSettings

```typescript
interface QwenSettings {
  apiKey: string;
  baseURL?: string; // Default: https://dashscope-intl.aliyuncs.com/compatible-mode/v1
}
```

### RawiCredentials

Complete credential configuration.

```typescript
interface RawiCredentials extends BaseCredentials {
  apiKey?: string; // Legacy API key field
  providerSettings?: ProviderSettings; // Provider-specific settings
}

type ProviderSettings =
  | OllamaSettings
  | GoogleSettings
  | OpenAISettings
  | AnthropicSettings
  | XAISettings
  | AzureSettings
  | BedrockSettings
  | QwenSettings;
```

### RawiConfig

Configuration file structure.

```typescript
interface RawiConfig {
  [profileName: string]: RawiCredentials;
}
```

---

## ⚙️ Configuration API

### ConfigManager

Main configuration management class.

```typescript
class ConfigManager {
  constructor();

  // Credential management
  getCredentials(profile?: string): RawiCredentials | null;
  setCredentials(credentials: RawiCredentials, profile?: string): void;

  // Profile management
  listProfiles(): string[];
  deleteProfile(profile: string): boolean;

  // Configuration methods
  interactiveConfigure(options?: ConfigureOptions): Promise<void>;
  manualConfigure(credentials: RawiCredentials, profile?: string): void;
  showConfig(profile?: string): void;
}
```

#### Methods

##### `getCredentials(profile?: string): RawiCredentials | null`

Retrieves credentials for a profile.

**Parameters:**

- `profile` - Profile name (default: 'default')

**Returns:**

- `RawiCredentials | null` - Credentials or null if not found

**Example:**

```typescript
const configManager = new ConfigManager();
const credentials = configManager.getCredentials("work");
```

##### `setCredentials(credentials: RawiCredentials, profile?: string): void`

Sets credentials for a profile.

**Parameters:**

- `credentials` - Credential configuration
- `profile` - Profile name (default: 'default')

**Example:**

```typescript
const credentials: RawiCredentials = {
  provider: "openai",
  model: "gpt-4o",
  temperature: 0.7,
  maxTokens: 2048,
  providerSettings: {
    apiKey: "sk-your-key",
  },
};

configManager.setCredentials(credentials, "work");
```

##### `listProfiles(): string[]`

Lists all configured profiles.

**Returns:**

- `string[]` - Array of profile names

##### `deleteProfile(profile: string): boolean`

Deletes a profile.

**Parameters:**

- `profile` - Profile name

**Returns:**

- `boolean` - Success status

##### `interactiveConfigure(options?: ConfigureOptions): Promise<void>`

Interactive configuration wizard.

**Parameters:**

- `options` - Optional pre-filled configuration

##### `manualConfigure(credentials: RawiCredentials, profile?: string): void`

Direct configuration without interaction.

**Parameters:**

- `credentials` - Complete credentials
- `profile` - Profile name

##### `showConfig(profile?: string): void`

Displays current configuration.

**Parameters:**

- `profile` - Specific profile to show

### Configuration Options

```typescript
interface ConfigureOptions {
  profile?: string;
  provider?: SupportedProvider;
  model?: string;
  apiKey?: string;
  temperature?: number;
  maxTokens?: number;
  language?: SupportedLanguage;
  interactive?: boolean;
  baseURL?: string;
  resourceName?: string;
  apiVersion?: string;
  region?: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  useProviderChain?: boolean;
}
```

### Utility Functions

#### `getCredentials(profile?: string): RawiCredentials | null`

Convenience function to get credentials.

#### `isConfigured(profile?: string): boolean`

Check if a profile is properly configured.

#### `requireCredentials(profile?: string): RawiCredentials`

Get credentials or exit with error.

---

## 💾 Database API

### DatabaseManager

Manages chat history and sessions.

```typescript
class DatabaseManager {
  constructor();

  // Session management
  createSession(profile: string): Promise<string>;
  getSession(sessionId: string): Promise<ChatSession | null>;
  getCurrentSession(profile: string): Promise<string>;
  getSessions(options: Partial<ChatHistoryOptions>): Promise<ChatSession[]>;
  deleteSession(sessionId: string): Promise<void>;

  // Message management
  addMessage(
    sessionId: string,
    role: "user" | "assistant",
    content: string,
    provider: SupportedProvider,
    model: string,
    temperature?: number,
    maxTokens?: number,
    metadata?: string
  ): Promise<void>;

  getMessages(sessionId: string): Promise<ChatMessage[]>;
  searchMessages(options: ChatHistoryOptions): Promise<ChatMessage[]>;

  // Statistics
  getStats(profile?: string): Promise<HistoryStats>;

  // Maintenance
  cleanup(profile: string, olderThanDays: number): Promise<number>;
  exportHistory(profile?: string): Promise<any>;

  // Connection management
  close(): Promise<void>;
}
```

### Chat Types

#### ChatSession

```typescript
interface ChatSession {
  id: string; // Unique session ID
  profile: string; // Profile used
  title?: string; // Optional session title
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
  messageCount: number; // Number of messages
}
```

#### ChatMessage

```typescript
interface ChatMessage {
  id: string; // Unique message ID
  sessionId: string; // Session reference
  role: "user" | "assistant"; // Message role
  content: string; // Message content
  timestamp: string; // ISO timestamp
  provider: SupportedProvider; // AI provider used
  model: string; // Model used
  temperature?: number; // Temperature setting
  maxTokens?: number; // Token limit
  metadata?: string; // Additional data
}
```

#### ChatHistoryOptions

```typescript
interface ChatHistoryOptions {
  profile?: string; // Filter by profile
  limit?: number; // Result limit
  sessionId?: string; // Specific session
  search?: string; // Text search
  fromDate?: string; // Date range start
  toDate?: string; // Date range end
  provider?: SupportedProvider; // Filter by provider
  model?: string; // Filter by model
}
```

#### HistoryStats

```typescript
interface HistoryStats {
  totalSessions: number;
  totalMessages: number;
  messagesByProvider: Record<string, number>;
  messagesByModel: Record<string, number>;
  messagesByProfile: Record<string, number>;
  oldestMessage?: string; // ISO timestamp
  newestMessage?: string; // ISO timestamp
}
```

---

## 🤖 Provider API

### Provider Management

#### `getAllProviders(): ProviderConfig[]`

Get all available providers.

**Returns:**

- `ProviderConfig[]` - Array of provider configurations

#### `getProvider(name: SupportedProvider): ProviderConfig`

Get specific provider configuration.

**Parameters:**

- `name` - Provider name

**Returns:**

- `ProviderConfig` - Provider configuration

#### `getProviderNames(): SupportedProvider[]`

Get all provider names.

**Returns:**

- `SupportedProvider[]` - Array of provider names

### Provider Configurations

Each provider exports a configuration object:

```typescript
// Example: OpenAI provider
export const openaiProvider: ProviderConfig = {
  name: "openai",
  displayName: "🔵 OpenAI (GPT)",
  models: [
    {
      name: "gpt-4o",
      displayName: "GPT-4o",
      description: "Latest GPT-4 Optimized model",
    },
    {
      name: "gpt-4",
      displayName: "GPT-4",
      description: "High-quality reasoning model",
    },
    // ... more models
  ],
};
```

---

## 🖥️ CLI API

### Command Creation

#### `createAskCommand(): Command`

Creates the 'ask' command.

**Returns:**

- `Command` - Commander.js command object

#### `createConfigureCommand(): Command`

Creates the 'configure' command.

#### `createHistoryCommand(): Command`

Creates the 'history' command.

#### `createInfoCommand(): Command`

Creates the 'info' command.

### Program Creation

#### `createProgram(): Command`

Creates the main CLI program.

**Returns:**

- `Command` - Main program with all commands

**Example:**

```typescript
import { createProgram } from "./cli/program.js";

const program = createProgram();
program.parse(process.argv);
```

---

## 🛠️ Utilities

### Constants

#### Application Constants

```typescript
export const APP_NAME = "rawi";
export const CONFIG_DIR_NAME = ".rawi";
export const CREDENTIALS_FILE_NAME = "credentials";
export const DEFAULT_PROFILE = "default";
```

#### Default Values

```typescript
export const DEFAULT_TEMPERATURE = 0.7;
export const DEFAULT_MAX_TOKENS = 2048;
export const DEFAULT_LANGUAGE = "english";
export const DEFAULT_HISTORY_LIMIT = 50;
export const MAX_HISTORY_LIMIT = 1000;
```

#### Limits

```typescript
export const TEMPERATURE_LIMITS = {
  min: 0,
  max: 2,
} as const;

export const TOKEN_LIMITS = {
  min: 1,
  max: 100000,
} as const;
```

### Utility Functions

#### File System Utilities

##### `getConfigDir(): string`

Get configuration directory path.

**Returns:**

- `string` - Full path to config directory

##### `getCredentialsFilePath(): string`

Get credentials file path.

**Returns:**

- `string` - Full path to credentials file

#### Validation Utilities

##### `validateApiKey(key: string): boolean`

Validate API key format.

**Parameters:**

- `key` - API key to validate

**Returns:**

- `boolean` - Validation result

##### `validateTemperature(temp: number): boolean`

Validate temperature value.

**Parameters:**

- `temp` - Temperature value

**Returns:**

- `boolean` - Validation result

##### `validateMaxTokens(tokens: number): boolean`

Validate max tokens value.

**Parameters:**

- `tokens` - Token count

**Returns:**

- `boolean` - Validation result

#### Formatting Utilities

##### `maskApiKey(key: string): string`

Mask API key for display.

**Parameters:**

- `key` - API key to mask

**Returns:**

- `string` - Masked key (e.g., "sk-...abc123")

##### `formatTimestamp(timestamp: string): string`

Format ISO timestamp for display.

**Parameters:**

- `timestamp` - ISO timestamp string

**Returns:**

- `string` - Formatted timestamp

### Spinner Manager

#### `spinnerManager`

Global spinner management utility.

```typescript
interface SpinnerManager {
  start(id: string, text: string, options?: { color?: string }): void;
  succeed(id: string, text: string): void;
  fail(id: string, text: string): void;
  stop(id: string): void;
  clear(): void;
}
```

**Methods:**

##### `start(id: string, text: string, options?: { color?: string }): void`

Start a spinner.

##### `succeed(id: string, text: string): void`

Mark spinner as successful.

##### `fail(id: string, text: string): void`

Mark spinner as failed.

##### `stop(id: string): void`

Stop a spinner without status.

##### `clear(): void`

Clear all spinners.

**Example:**

```typescript
import { spinnerManager } from "./shared/spinner.js";

spinnerManager.start("config", "Loading configuration...");
// ... async operation
spinnerManager.succeed("config", "Configuration loaded");
```

---

## 🔧 Error Handling

### Error Types

Custom error types used throughout the application:

```typescript
class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConfigurationError";
  }
}

class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}
```

### Exit Codes

Standard exit codes used by the CLI:

```typescript
export const EXIT_CODES = {
  SUCCESS: 0,
  GENERAL_ERROR: 1,
  CONFIGURATION_ERROR: 2,
  NETWORK_ERROR: 3,
  AUTHENTICATION_ERROR: 4,
} as const;
```

---

## 📚 Usage Examples

### Basic Configuration

```typescript
import { ConfigManager } from "./config/manager.js";

const config = new ConfigManager();

// Set up OpenAI
const credentials: RawiCredentials = {
  provider: "openai",
  model: "gpt-4o",
  temperature: 0.7,
  maxTokens: 2048,
  providerSettings: {
    apiKey: "sk-your-key",
  },
};

config.setCredentials(credentials, "work");
```

### Database Operations

```typescript
import { DatabaseManager } from "./database/manager.js";

const db = new DatabaseManager();

// Create session and add message
const sessionId = await db.createSession("default");
await db.addMessage(
  sessionId,
  "user",
  "Hello, world!",
  "openai",
  "gpt-4o",
  0.7,
  2048
);

// Get session history
const messages = await db.getMessages(sessionId);
```

### Provider Usage

```typescript
import { getAllProviders, getProvider } from "./config/providers/index.js";

// List all providers
const providers = getAllProviders();
console.log(providers.map((p) => p.displayName));

// Get specific provider
const openai = getProvider("openai");
console.log(openai.models);
```

This API reference provides the foundation for extending Rawi or integrating its functionality into other applications.
