# Configuration Management

The configuration system handles AI provider settings, user profiles, and authentication credentials.

## Overview

The configuration module provides:

- **ConfigManager** - Central configuration management
- **Provider System** - AI provider abstractions
- **Profile Management** - Multiple configuration profiles
- **Credential Storage** - Secure API key management

## ConfigManager

The `ConfigManager` class handles all configuration operations including reading, writing, and validating settings.

### Usage

```typescript
import { ConfigManager } from "@rawi/core";

const config = new ConfigManager();

// Get credentials for a profile
const credentials = config.getCredentials("default");

// Set new credentials
await config.setCredentials("work", {
  provider: "openai",
  model: "gpt-4o",
  apiKey: "sk-...",
  temperature: 0.7,
  maxTokens: 2048,
});

// Interactive configuration
await config.configure({
  profile: "default",
  provider: "anthropic",
});
```

### Methods

#### `getCredentials(profile?: string): RawiCredentials | null`

Retrieves credentials for a specific profile.

#### `setCredentials(profile: string, credentials: RawiCredentials): void`

Saves credentials for a profile.

#### `configure(options: ConfigureOptions): Promise<void>`

Interactive configuration wizard.

#### `showConfiguration(profile?: string): void`

Displays current configuration with masked API keys.

#### `listProfiles(): string[]`

Lists all available profiles.

#### `deleteProfile(profile: string): boolean`

Removes a profile and its credentials.

## Provider System

Each AI provider is implemented as a separate module with standardized interfaces.

### Supported Providers

- **OpenAI** - GPT models
- **Anthropic** - Claude models
- **Google** - Gemini models
- **Azure** - Enterprise OpenAI
- **Bedrock** - AWS hosted models
- **Ollama** - Local models
- **xAI** - Grok models
- **Qwen** - Alibaba Cloud models
- **LM Studio** - Local model server

### Provider Interface

```typescript
interface Provider {
  name: string;
  displayName: string;
  models: ModelInfo[];
  generateText(credentials: RawiCredentials, prompt: string): Promise<string>;
}
```

### Adding New Providers

1. Create provider file in `providers/`
2. Implement the provider interface
3. Add to provider registry
4. Update type definitions

Example provider implementation:

```typescript
export const myProvider: ProviderConfig = {
  name: "myprovider",
  displayName: "My Provider",
  models: [
    { name: "model-1", displayName: "Model 1" },
    { name: "model-2", displayName: "Model 2" },
  ],
};

export async function generateText(
  credentials: MyProviderCredentials,
  prompt: string
): Promise<string> {
  // Implementation
}
```

## Configuration File

Configuration is stored in `~/.rawi/credentials` as JSON:

```json
{
  "default": {
    "provider": "openai",
    "model": "gpt-4o",
    "apiKey": "sk-...",
    "temperature": 0.7,
    "maxTokens": 2048,
    "language": "english"
  },
  "work": {
    "provider": "anthropic",
    "model": "claude-3-opus",
    "apiKey": "sk-ant-...",
    "temperature": 0.3,
    "maxTokens": 4096
  }
}
```

## Provider-Specific Settings

### OpenAI

```typescript
interface OpenAISettings {
  apiKey: string;
  baseURL?: string;
  organization?: string;
}
```

### Anthropic

```typescript
interface AnthropicSettings {
  apiKey: string;
  baseURL?: string;
}
```

### Google

```typescript
interface GoogleSettings {
  apiKey: string;
  baseURL?: string;
}
```

### Azure

```typescript
interface AzureSettings {
  apiKey: string;
  resourceName: string;
  apiVersion?: string;
}
```

### Bedrock

```typescript
interface BedrockSettings {
  region: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
  useProviderChain?: boolean;
}
```

## Security Features

- API keys are masked in display output
- Credentials stored in user's home directory
- File permissions set to user-only
- Input validation for all settings

## Interactive Configuration

The configuration wizard provides:

- Provider selection
- Model selection
- API key input (hidden)
- Parameter validation
- Configuration testing

## Error Handling

Common configuration errors:

- Invalid API keys
- Missing required fields
- Network connectivity issues
- File permission problems

All errors include helpful messages and recovery suggestions.
