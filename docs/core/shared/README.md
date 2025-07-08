# Shared Utilities and Types

The shared module contains common utilities, type definitions, constants, and helper functions used throughout the application.

## Overview

The shared module provides:

- **Types** - TypeScript type definitions
- **Constants** - Application-wide constants
- **Utils** - Common utility functions
- **Spinner** - Loading indicator management

## Types

Core type definitions for the application.

### Base Types

```typescript
export type SupportedLanguage = "english" | "arabic";

export type SupportedProvider =
  | "anthropic"
  | "google"
  | "ollama"
  | "openai"
  | "xai"
  | "azure"
  | "bedrock"
  | "qwen"
  | "lmstudio";
```

### Credential Types

```typescript
export interface BaseCredentials {
  provider: SupportedProvider;
  model: string;
  temperature?: number;
  maxTokens?: number;
  language?: SupportedLanguage;
}

export interface OpenAICredentials extends BaseCredentials {
  provider: "openai";
  apiKey: string;
  baseURL?: string;
  organization?: string;
}

export interface AnthropicCredentials extends BaseCredentials {
  provider: "anthropic";
  apiKey: string;
  baseURL?: string;
}
```

### Configuration Types

```typescript
export interface ConfigureOptions {
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

export interface RawiConfig {
  [profile: string]: RawiCredentials;
}
```

### Database Types

```typescript
export interface ChatSession {
  id: string;
  profile: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  messageCount: number;
  lastMessage?: string;
}

export interface ChatMessage {
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

export interface HistoryStats {
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

### Provider Types

```typescript
export interface ModelInfo {
  name: string;
  displayName?: string;
  description?: string;
}

export interface ProviderConfig {
  name: string;
  displayName: string;
  models: ModelInfo[];
}
```

## Constants

Application-wide constants and default values.

```typescript
// Application constants
export const APP_NAME = "rawi";
export const CONFIG_DIR_NAME = ".rawi";
export const CREDENTIALS_FILE_NAME = "credentials";
export const DEFAULT_PROFILE = "default";

// Default settings
export const DEFAULT_TEMPERATURE = 0.7;
export const DEFAULT_MAX_TOKENS = 2048;
export const DEFAULT_LANGUAGE = "english";

// History settings
export const DEFAULT_HISTORY_LIMIT = 50;
export const MAX_HISTORY_LIMIT = 1000;
export const DEFAULT_SESSION_TITLE_LENGTH = 50;

// Provider display names
export const PROVIDER_DISPLAY_NAMES = {
  anthropic: "🟣 Anthropic (Claude)",
  google: "🔴 Google (Gemini)",
  openai: "🔵 OpenAI (GPT)",
  xai: "🤖 xAI (Grok)",
} as const;

// Validation limits
export const TEMPERATURE_LIMITS = {
  min: 0,
  max: 2,
} as const;

export const TOKEN_LIMITS = {
  min: 1,
  max: 100000,
} as const;
```

## Utility Functions

Common helper functions for configuration, validation, and formatting.

### Configuration Utilities

```typescript
// Get configuration directory path
export const getConfigDir = (): string => {
  return join(homedir(), CONFIG_DIR_NAME);
};

// Get credentials file path
export const getCredentialsFilePath = (): string => {
  return join(getConfigDir(), CREDENTIALS_FILE_NAME);
};
```

### Security Utilities

```typescript
// Mask API key for display
export const maskApiKey = (apiKey: string): string => {
  if (!apiKey) return "";
  const visibleLength = Math.min(8, apiKey.length);
  const maskedLength = Math.max(0, apiKey.length - visibleLength);
  return `${apiKey.slice(0, visibleLength)}${"*".repeat(maskedLength)}`;
};

// Example: sk-proj-abc123***************
```

### Validation Utilities

```typescript
// Validate temperature value (0-2)
export const validateTemperature = (temperature: number): boolean => {
  return temperature >= 0 && temperature <= 2;
};

// Validate max tokens (1-100000)
export const validateMaxTokens = (maxTokens: number): boolean => {
  return maxTokens >= 1 && maxTokens <= 100000;
};

// Validate API key format
export const validateApiKey = (apiKey: string): boolean => {
  return Boolean(apiKey && apiKey.trim().length > 0);
};

// Validate language setting
export const validateLanguage = (language: string): boolean => {
  return ["english", "arabic"].includes(language);
};
```

### Text Utilities

```typescript
// Truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
};

// Format date for display
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

// Format relative time
export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  const minutes = Math.floor(diffMs / 60000);
  const hours = Math.floor(diffMs / 3600000);
  const days = Math.floor(diffMs / 86400000);

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
};
```

### Debug Utilities

```typescript
export const DEBUG_MODE = false;

export const debugLog = (...args: any[]): void => {
  if (DEBUG_MODE) {
    console.log(...args);
  }
};
```

## Spinner Management

Loading indicator system for long-running operations.

### SpinnerManager

```typescript
import { spinnerManager } from "@rawi/core";

// Start spinner
spinnerManager.start("Loading configuration...");

// Update message
spinnerManager.update("Validating credentials...");

// Stop with success
spinnerManager.succeed("Configuration loaded successfully");

// Stop with error
spinnerManager.fail("Failed to load configuration");

// Stop without message
spinnerManager.stop();
```

### Spinner Methods

```typescript
class SpinnerManager {
  start(text: string): void;
  stop(): void;
  succeed(text?: string): void;
  fail(text?: string): void;
  warn(text?: string): void;
  info(text?: string): void;
  update(text: string): void;
  isSpinning(): boolean;
}
```

### Usage Examples

```typescript
// Long operation with spinner
async function configureProvider() {
  spinnerManager.start("Configuring provider...");

  try {
    await validateCredentials();
    spinnerManager.update("Saving configuration...");
    await saveConfig();
    spinnerManager.succeed("Provider configured successfully");
  } catch (error) {
    spinnerManager.fail(`Configuration failed: ${error.message}`);
  }
}
```

## Usage Examples

### Type Usage

```typescript
import type { RawiCredentials, ConfigureOptions } from "@rawi/core";

const credentials: RawiCredentials = {
  provider: "openai",
  model: "gpt-4o",
  apiKey: "sk-...",
  temperature: 0.7,
  maxTokens: 2048,
  language: "english",
};

const options: ConfigureOptions = {
  profile: "work",
  provider: "anthropic",
  model: "claude-3-opus",
  show: true,
};
```

### Validation Example

```typescript
import { validateTemperature, validateApiKey } from "@rawi/core";

function validateConfig(config: any): boolean {
  if (!validateApiKey(config.apiKey)) {
    throw new Error("Invalid API key");
  }

  if (!validateTemperature(config.temperature)) {
    throw new Error("Temperature must be between 0 and 2");
  }

  return true;
}
```

### Utility Usage

```typescript
import { maskApiKey, truncateText, formatRelativeTime } from "@rawi/core";

// Display configuration safely
console.log(`API Key: ${maskApiKey("sk-proj-abc123...")}`);

// Truncate long text
const shortTitle = truncateText(longSessionTitle, 50);

// Show relative time
const timeAgo = formatRelativeTime(session.createdAt);
```

## Best Practices

1. **Type Safety**: Always use TypeScript types for better code quality
2. **Validation**: Validate all user inputs using provided validators
3. **Security**: Never log or display raw API keys
4. **Error Handling**: Use appropriate error messages with context
5. **Performance**: Use utility functions for common operations
6. **Consistency**: Follow established patterns and conventions
