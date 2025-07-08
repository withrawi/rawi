# Provider System

The provider system enables integration with multiple AI services through a unified interface.

## Overview

Each AI provider is implemented as a separate module that exports:

- Provider configuration
- Model definitions
- Text generation function
- Provider-specific settings

## Provider Interface

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
```

## Implemented Providers

### OpenAI Provider

- **Models**: GPT-4, GPT-4 Turbo, GPT-3.5, o1, o3
- **Features**: Function calling, streaming, custom base URLs
- **Settings**: API key, organization, base URL

### Anthropic Provider

- **Models**: Claude 3 Opus, Claude 3 Sonnet, Claude 3 Haiku
- **Features**: Large context windows, tool use
- **Settings**: API key, base URL

### Google Provider

- **Models**: Gemini Pro, Gemini Pro Vision, Gemini Flash
- **Features**: Multimodal support, large context
- **Settings**: API key, base URL

### Azure Provider

- **Models**: Azure OpenAI deployments
- **Features**: Enterprise security, custom deployments
- **Settings**: API key, resource name, API version

### Bedrock Provider

- **Models**: Claude, Jurassic, Titan, Cohere
- **Features**: AWS integration, managed service
- **Settings**: AWS credentials, region

### Ollama Provider

- **Models**: Llama 2, Mistral, CodeLlama, custom models
- **Features**: Local inference, privacy
- **Settings**: Base URL

### xAI Provider

- **Models**: Grok
- **Features**: Real-time information
- **Settings**: API key, base URL

### Qwen Provider

- **Models**: Qwen-Max, Qwen-Plus, Qwen-Turbo
- **Features**: Chinese language support
- **Settings**: API key, base URL

### LM Studio Provider

- **Models**: Local models via LM Studio
- **Features**: Local inference, model management
- **Settings**: Base URL

## Usage Examples

### Basic Provider Usage

```typescript
import { getProvider } from "@rawi/core";

const provider = getProvider("openai");
const response = await provider.generateText(credentials, "Hello world");
```

### Provider Configuration

```typescript
const credentials = {
  provider: "openai",
  model: "gpt-4o",
  apiKey: "sk-...",
  temperature: 0.7,
  maxTokens: 2048,
};
```

### Custom Provider Settings

```typescript
// OpenAI with custom base URL
const openAICredentials = {
  provider: "openai",
  model: "gpt-4o",
  apiKey: "sk-...",
  baseURL: "https://api.openai.com/v1",
};

// Azure with resource name
const azureCredentials = {
  provider: "azure",
  model: "gpt-4",
  apiKey: "key123",
  resourceName: "my-resource",
  apiVersion: "2024-02-01",
};
```

## Adding New Providers

1. Create a new provider file in `providers/`
2. Implement the provider interface
3. Add to the provider registry
4. Update type definitions

### Provider Implementation Template

```typescript
// providers/myprovider.provider.ts
import type { ProviderConfig, MyProviderCredentials } from "../shared/types.js";

export const myProviderConfig: ProviderConfig = {
  name: "myprovider",
  displayName: "My Provider",
  models: [
    {
      name: "model-1",
      displayName: "Model 1",
      description: "Fast general-purpose model",
    },
    {
      name: "model-2",
      displayName: "Model 2",
      description: "Advanced reasoning model",
    },
  ],
};

export async function generateText(
  credentials: MyProviderCredentials,
  prompt: string,
  options: any = {}
): Promise<string> {
  // Implementation here
  const response = await fetch("https://api.myprovider.com/generate", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: credentials.model,
      prompt,
      temperature: credentials.temperature,
      max_tokens: credentials.maxTokens,
    }),
  });

  const data = await response.json();
  return data.text;
}
```

### Type Definitions

```typescript
// shared/types.ts
export interface MyProviderCredentials extends BaseCredentials {
  provider: "myprovider";
  apiKey: string;
  baseURL?: string;
}

export interface MyProviderSettings {
  apiKey: string;
  baseURL?: string;
}
```

### Registry Registration

```typescript
// providers/index.ts
import {
  myProviderConfig,
  generateText as myProviderGenerate,
} from "./myprovider.provider.js";

const providers = {
  // ... existing providers
  myprovider: {
    config: myProviderConfig,
    generateText: myProviderGenerate,
  },
};
```

## Error Handling

Providers should handle common errors:

```typescript
export async function generateText(credentials: Credentials, prompt: string) {
  try {
    const response = await apiCall(credentials, prompt);
    return response.text;
  } catch (error) {
    if (error.status === 401) {
      throw new Error("Invalid API key");
    } else if (error.status === 429) {
      throw new Error("Rate limit exceeded");
    } else if (error.status === 500) {
      throw new Error("Provider service error");
    }
    throw error;
  }
}
```

## Testing Providers

```typescript
// Test provider integration
import { getProvider } from "@rawi/core";

const testProvider = async (providerName: string) => {
  const provider = getProvider(providerName);
  const credentials = {
    provider: providerName,
    model: "default-model",
    apiKey: "test-key",
  };

  try {
    const response = await provider.generateText(credentials, "Test prompt");
    console.log("Provider working:", response);
  } catch (error) {
    console.error("Provider error:", error);
  }
};
```

## Best Practices

1. **Error Handling**: Always wrap API calls in try-catch blocks
2. **Validation**: Validate credentials before making requests
3. **Timeouts**: Implement request timeouts
4. **Retry Logic**: Add retry logic for transient errors
5. **Rate Limiting**: Respect provider rate limits
6. **Documentation**: Document provider-specific features
7. **Testing**: Include unit tests for each provider
