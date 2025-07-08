# Core Architecture

The core module provides the foundational functionality for the Rawi CLI tool, including configuration management, database operations, shared utilities, and template processing.

## Overview

The core architecture is organized into several key modules:

- **[Config](./config/README.md)** - Configuration management and AI provider integration
- **[Database](./database/README.md)** - Chat history and session management
- **[Shared](./shared/README.md)** - Common types, utilities, and constants
- **[Template](./template/README.md)** - Act template system for specialized prompts

## Module Structure

```
src/core/
├── config/           # Configuration and provider management
├── database/         # Chat history and session storage
├── shared/          # Common utilities and types
└── template/        # Act template system
```

## Key Features

### Multi-Provider Support

- **OpenAI** - GPT models with various configurations
- **Anthropic** - Claude models
- **Google** - Gemini models
- **Azure OpenAI** - Enterprise OpenAI integration
- **Amazon Bedrock** - AWS-hosted AI models
- **Ollama** - Local model support
- **xAI** - Grok models
- **Qwen** - Alibaba Cloud models
- **LM Studio** - Local model server

### Session Management

- Persistent chat history
- Session-based conversations
- Profile-specific configurations
- SQLite database storage

### Template System

- Pre-built expert prompts
- Categorized templates
- Custom template support
- Variable substitution

## Quick Start

```typescript
import { ConfigManager, DatabaseManager } from "@rawi/core";

// Initialize managers
const configManager = new ConfigManager();
const dbManager = new DatabaseManager();

// Get configuration
const credentials = configManager.getCredentials("default");

// Create chat session
const sessionId = await dbManager.createSession("default", "My Chat");
```

## Configuration

The core system uses a JSON-based configuration stored in `~/.rawi/credentials`:

```json
{
  "default": {
    "provider": "openai",
    "model": "gpt-4o",
    "apiKey": "sk-...",
    "temperature": 0.7,
    "maxTokens": 2048,
    "language": "english"
  }
}
```

## Error Handling

The core modules implement comprehensive error handling:

- Configuration validation
- Provider authentication
- Database connection management
- Graceful degradation

## Security

- API keys are masked in logs
- Secure credential storage
- Input validation
- Safe file operations

## Development

To extend the core functionality:

1. **Adding Providers**: Create new provider implementations in `config/providers/`
2. **Database Schema**: Modify schema in `database/schema/`
3. **Shared Types**: Add common types in `shared/types.ts`
4. **Templates**: Add new templates in `template/act.ts`

## Dependencies

- `@ai-sdk/*` - AI provider integrations
- `better-sqlite3` - Database operations
- `inquirer` - Interactive prompts
- `chalk` - Terminal styling
- `uuid` - Unique identifiers
