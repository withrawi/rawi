# Rawi Documentation

Comprehensive documentation for the Rawi AI-powered CLI tool.

## Table of Contents

- [CLI Commands](#cli-commands)
- [Core Architecture](#core-architecture)
- [Development Guide](#development-guide)
- [API Reference](#api-reference)

## CLI Commands

Documentation for all available CLI commands:

- **[ask](./cli/ask.md)** - Ask AI questions and get responses
- **[act](./cli/act.md)** - Use expert prompt templates
- **[configure](./cli/configure.md)** - Configure AI providers and profiles
- **[history](./cli/history.md)** - Manage chat history and sessions
- **[info](./cli/info.md)** - Display system information
- **[provider](./cli/provider.md)** - Manage AI providers

## Core Architecture

Technical documentation for the core system:

### [Core Overview](./core/README.md)

High-level architecture and module organization.

### [Configuration System](./core/config/README.md)

- Configuration management
- [Provider system](./core/config/providers.md)
- Profile management
- Credential storage

### [Database System](./core/database/README.md)

- Chat history storage
- Session management
- Message persistence
- Statistics and analytics

### [Shared Utilities](./core/shared/README.md)

- Common types and interfaces
- Utility functions
- Constants and defaults
- Validation helpers

### [Template System](./core/template/README.md)

- Act template management
- Expert prompt system
- Variable substitution
- Template categories

## Development Guide

Resources for developers working on Rawi:

### [Development Setup](./development/README.md)

- Getting started
- Project structure
- Development workflow
- Testing and debugging

### [CLI Architecture](./development/cli-architecture.md)

- Command structure
- Program configuration
- Error handling
- Input/output patterns

### [API Reference](./development/api-reference.md)

- Complete API documentation
- Type definitions
- Usage examples
- Error handling patterns

## Quick Start

### Installation

```bash
npm install -g rawi
```

### Basic Usage

```bash
# Configure your AI provider
rawi configure

# Ask a question
rawi ask "What is TypeScript?"

# Use expert prompts
rawi ask --act code-reviewer "Review this code"

# Manage history
rawi history --list
```

### Configuration

```bash
# Interactive configuration
rawi configure

# Quick setup
rawi configure --provider openai --model gpt-4o --api-key sk-...

# List profiles
rawi configure --list

# Show current config
rawi configure --show
```

## Features

### Multi-Provider Support

- **OpenAI** - GPT models
- **Anthropic** - Claude models
- **Google** - Gemini models
- **Azure OpenAI** - Enterprise OpenAI
- **Amazon Bedrock** - AWS-hosted models
- **Ollama** - Local models
- **xAI** - Grok models
- **Qwen** - Alibaba Cloud models
- **LM Studio** - Local model server

### Advanced Features

- **Session Management** - Persistent chat history
- **Profile Support** - Multiple configurations
- **Template System** - Expert prompt templates
- **Piped Input** - Unix-style input piping
- **Interactive Mode** - Conversational interface
- **Multilingual** - English and Arabic support

## Architecture Overview

```
Rawi CLI Tool
├── CLI Interface
│   ├── Commands (ask, configure, history, etc.)
│   ├── Argument Parsing
│   └── User Interface
├── Core System
│   ├── Configuration Management
│   ├── Provider Integration
│   ├── Database Operations
│   └── Template Processing
└── External Integrations
    ├── AI Provider APIs
    ├── Local Database (SQLite)
    └── File System
```

## Contributing

We welcome contributions! Please see our [Development Guide](./development/README.md) for details on:

- Setting up the development environment
- Code style and conventions
- Testing procedures
- Submitting pull requests

## Support

- **Documentation**: Browse this documentation for detailed guides
- **Issues**: Report bugs or request features on GitHub
- **Discussions**: Join community discussions for questions and ideas

## License

This project is licensed under the MIT License - see the LICENSE file for details.
