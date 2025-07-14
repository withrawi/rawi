# Rawi CLI Usage Guide

**Rawi (راوي)** — The AI-Powered CLI That Transforms Your Terminal Into an Intelligent Workspace

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Core Commands](#core-commands)
- [Advanced Features](#advanced-features)
- [Practical Examples](#practical-examples)
- [Troubleshooting](#troubleshooting)

---

## Introduction

Rawi is a developer-friendly AI-powered CLI tool that brings the power of multiple AI providers directly to your terminal. Whether you're debugging code, writing documentation, analyzing data, or learning new technologies, Rawi provides intelligent assistance through a simple command-line interface.

### What Rawi Does

- **AI-Powered Assistance**: Ask questions and get intelligent responses using state-of-the-art AI models
- **Multi-Provider Support**: Works with OpenAI, Anthropic, Google, Ollama, xAI, Azure, AWS Bedrock, Qwen, and LM Studio
- **Expert Templates**: 200+ specialized prompt templates for different domains and use cases
- **Session Management**: Persistent conversations with context awareness
- **Shell Integration**: Perfect integration with pipes, redirects, and shell scripting
- **Profile Management**: Multiple configurations for different projects or providers

### Why Use Rawi?

- ⚡ **Fast**: Get instant AI responses without leaving your terminal
- 🛡️ **Private**: Use local AI providers like Ollama for complete privacy
- 🔧 **Developer-Focused**: Built specifically for coding workflows and technical tasks
- 🌍 **Multilingual**: Full support for English and Arabic
- 📚 **Rich History**: Search, export, and manage your AI conversations

---

## Installation

### NPM (Recommended)

```bash
# Install globally via npm
npm install -g rawi

# Or using other package managers
yarn global add rawi
pnpm add -g rawi
bun add -g rawi
```

### Alternative Methods

```bash
# Using npx (no installation required)
npx rawi ask "What is TypeScript?"

# Verify installation
rawi --version
rawi info
```

### System Requirements

- **Node.js**: 18.0.0 or higher
- **Operating System**: Windows, macOS, Linux
- **Terminal**: Any modern terminal

---

## Quick Start

### 1. Install Rawi

```bash
npm install -g rawi
```

### 2. Configure Your First Provider

Choose one of these popular options:

**OpenAI (Recommended for beginners)**

```bash
# Get API key from: https://platform.openai.com/api-keys
rawi configure --provider openai --model gpt-4o --api-key sk-your-key
```

**Ollama (Free & Private)**

```bash
# Install Ollama first: https://ollama.com/download
ollama pull llama3.2
rawi configure --provider ollama --model llama3.2
```

**Anthropic Claude (Great for analysis)**

```bash
# Get API key from: https://console.anthropic.com/
rawi configure --provider anthropic --model claude-3-5-sonnet-20241022 --api-key sk-ant-xxx
```

**DeepSeek (Cost-effective with reasoning)**

```bash
# Get API key from: https://platform.deepseek.com/api_keys
rawi configure --provider deepseek --model deepseek-chat --api-key sk-your-deepseek-key
```

**Mistral (European AI)**

```bash
# Get API key from: https://console.mistral.ai/api-keys/
rawi configure --provider mistral --model mistral-large-latest --api-key your-mistral-key
```

### 3. Start Using Rawi

```bash
# Ask your first question
rawi ask "Explain the difference between REST and GraphQL"

# Try with code analysis
echo "console.log('Hello World')" | rawi ask "Optimize this JavaScript code"

# Use a specialized template
rawi ask --act security-expert "What are common web security vulnerabilities?"
```

---

## Core Commands

### `rawi ask` — Your AI Assistant

Ask questions and get intelligent responses.

**Basic Usage:**

```bash
rawi ask [query] [options]
```

**Options:**

- `-p, --profile <profile>` — Use specific profile (default: default)
- `-s, --session <sessionId>` — Continue existing session
- `-n, --new-session` — Start new session
- `--act <template>` — Use expert template
- `--verbose` — Show detailed information

**Examples:**

```bash
# Simple questions
rawi ask "How do I optimize this SQL query?"
rawi ask "What is the difference between TypeScript and JavaScript?"

# Use specific profile
rawi ask "Review this code" --profile work

# Continue conversations
rawi ask "How do I handle state management?" --new-session
rawi ask "What about Redux specifically?" --session abc123

# Use expert templates
rawi ask --act ethereum-developer "explain smart contract security"
rawi ask --act linux-terminal "list files in home directory"

# Pipe integration
git diff | rawi ask "Review these changes for potential issues"
cat server.js | rawi ask --act code-reviewer "Optimize this Express.js code"
```

### `rawi configure` — Setup & Management

Configure AI providers and manage profiles.

**Basic Usage:**

```bash
rawi configure [options]
```

**Options:**

- `-p, --profile <profile>` — Profile name (default: default)
- `--provider <provider>` — AI provider
- `--model <model>` — AI model name
- `--api-key <apiKey>` — API key
- `--temperature <temp>` — Sampling temperature (0-2)
- `--max-tokens <tokens>` — Maximum response tokens
- `--language <lang>` — Language (english, arabic)

**Management Options:**

- `--show` — Show current configuration
- `--list` — List all profiles
- `--delete <profile>` — Delete profile

**Examples:**

```bash
# Interactive setup (recommended)
rawi configure

# Quick provider setup
rawi configure --provider openai --model gpt-4o --api-key sk-your-key
rawi configure --provider anthropic --model claude-3-5-sonnet-20241022 --api-key sk-ant-xxx

# View configuration
rawi configure --show
rawi configure --list

# Multiple profiles
rawi configure --profile work --provider openai --model gpt-4o
rawi configure --profile personal --provider ollama --model llama3.2

# Delete profile
rawi configure --delete old-profile
```

### `rawi history` — Conversation Management

Manage your AI conversation history.

**Basic Usage:**

```bash
rawi history [options]
```

**Options:**

- `-p, --profile <profile>` — Profile to show (default: default)
- `-l, --limit <number>` — Number of sessions (default: 50)
- `-s, --search <query>` — Search messages
- `--provider <provider>` — Filter by provider
- `--model <model>` — Filter by model
- `--from <date>` — From date (YYYY-MM-DD)
- `--to <date>` — To date (YYYY-MM-DD)

**Subcommands:**

- `sessions` — List and manage sessions
- `show <sessionId>` — Show session details
- `delete <sessionId>` — Delete session
- `stats` — Show usage statistics
- `cleanup` — Clean old sessions
- `export` — Export history to file

**Examples:**

```bash
# View recent conversations
rawi history
rawi history --limit 100

# Search and filter
rawi history --search "docker deployment"
rawi history --provider openai --from 2024-01-01

# Session management
rawi history sessions
rawi history show abc123-def456
rawi history delete abc123-def456

# Statistics
rawi history stats
rawi history stats --profile work

# Cleanup and export
rawi history cleanup --days 30
rawi history export --output backup.json
```

### `rawi act` — Template Explorer

Discover and use specialized AI personas.

**Basic Usage:**

```bash
rawi act [options]
```

**Options:**

- `-l, --list` — List all templates
- `-s, --show <template>` — Show template details

**Examples:**

```bash
# Browse all templates
rawi act --list

# Show template details
rawi act --show ethereum-developer

# Use with ask command
rawi ask --act security-expert "Analyze authentication code"
```

### `rawi provider` — Provider Information

Explore available AI providers and models.

**Basic Usage:**

```bash
rawi provider [options]
```

**Options:**

- `-l, --list` — List all providers
- `-m, --list-models <provider>` — List models for provider

**Examples:**

```bash
# List all providers
rawi provider --list

# Show provider models
rawi provider --list-models openai
rawi provider --list-models anthropic
```

### `rawi info` — System Information

Get information about Rawi and your configuration.

**Basic Usage:**

```bash
rawi info [options]
```

**Options:**

- `--profiles` — Show profile details

**Examples:**

```bash
# System information
rawi info

# Profile information
rawi info --profiles
```

---

## Advanced Features

### Profile Management

Use multiple profiles for different projects or providers:

```bash
# Create profiles for different use cases
rawi configure --profile development --provider openai --model gpt-4o
rawi configure --profile analysis --provider anthropic --model claude-3-5-sonnet-20241022
rawi configure --profile local --provider ollama --model llama3.2

# Use specific profiles
rawi ask "Review this code" --profile development
rawi ask "Analyze this data" --profile analysis
rawi ask "Explain this concept" --profile local
```

### Session Management

Maintain conversation context across multiple interactions:

```bash
# Start a new session for a project
rawi ask "I'm building a React app with TypeScript" --new-session

# Continue the conversation (uses current session)
rawi ask "How do I implement state management?"
rawi ask "What about testing strategies?"

# Continue specific session later
rawi ask "Can you suggest some performance optimizations?" --session abc123-def456
```

### Expert Templates (Act System)

Use specialized AI personas for domain-specific assistance:

```bash
# Development templates
rawi ask --act ethereum-developer "review this smart contract"
rawi ask --act code-reviewer "analyze this Python function"
rawi ask --act linux-terminal "show disk usage"

# Security templates
rawi ask --act security-expert "audit authentication implementation"
rawi ask --act penetration-tester "assess vulnerability"

# Documentation templates
rawi ask --act tech-writer "create API documentation"
rawi ask --act api-documenter "document these endpoints"

# Browse all templates
rawi act --list
```

### Shell Integration

Rawi integrates seamlessly with shell pipes and redirects:

```bash
# Pipe input to Rawi
cat file.js | rawi ask "Review this code"
git diff | rawi ask "Write a commit message"
curl -s api.com/data | rawi ask "Explain this API response"

# Redirect output
rawi ask "Create a Docker setup for Node.js" > Dockerfile
rawi ask "Generate TypeScript interfaces" > types.ts

# Combine with other tools
grep ERROR app.log | rawi ask "Categorize these errors"
ls -la | rawi ask "Explain these file permissions"
```

---

## Practical Examples

### Development Workflow

```bash
# Code review
git diff | rawi ask "Review these changes for potential issues"

# Generate tests
cat src/utils.js | rawi ask "Generate unit tests for these functions"

# Debug errors
rawi ask "Fix this Python error: NameError: name 'x' is not defined"

# Create documentation
rawi ask "Create README for a TypeScript CLI tool" > README.md

# Generate commit messages
git diff --cached | rawi ask "Write a conventional commit message"
```

### Data Analysis

```bash
# Analyze CSV data
cat sales-data.csv | rawi ask "Analyze this sales data and find trends"

# Process logs
tail -100 /var/log/app.log | rawi ask "Summarize errors and suggest fixes"

# API analysis
curl -s api.example.com/data | rawi ask "Explain this API structure"
```

### Learning and Research

```bash
# Quick explanations
rawi ask "Explain React hooks with examples"

# Compare technologies
rawi ask "Compare PostgreSQL vs MongoDB for a social media app"

# Best practices
rawi ask "Security best practices for Node.js APIs"
```

### Configuration and Automation

```bash
# Generate configurations
rawi ask "Create ESLint config for React TypeScript" > .eslintrc.js
rawi ask "Generate Docker configuration for Node.js app"

# Create scripts
rawi ask "Create a backup script for PostgreSQL" > backup.sh
rawi ask "Generate CI/CD workflow for GitHub Actions"
```

---

## Troubleshooting

### Common Issues

**Configuration Problems:**

```bash
# Check current configuration
rawi configure --show
rawi info

# List all profiles
rawi configure --list

# Reconfigure if needed
rawi configure --provider openai --model gpt-4o --api-key your-new-key
```

**API Key Issues:**

```bash
# Check if API key is configured
rawi configure --show

# Update API key
rawi configure --api-key sk-your-new-key

# Test configuration
rawi ask "Hello, can you hear me?"
```

**Provider-Specific Issues:**

**Ollama:**

```bash
# Ensure Ollama is running
ollama serve

# Pull required model
ollama pull llama3.2

# Configure Rawi
rawi configure --provider ollama --model llama3.2
```

**Azure OpenAI:**

```bash
# Ensure all required parameters
rawi configure --provider azure \
  --model your-deployment-name \
  --api-key your-key \
  --resource-name your-resource
```

**AWS Bedrock:**

```bash
# Use provider chain (recommended)
rawi configure --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --use-provider-chain \
  --region us-east-1

# Or explicit credentials
rawi configure --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --access-key-id your-key \
  --secret-access-key your-secret
```

### Getting Help

```bash
# General help
rawi --help

# Command-specific help
rawi ask --help
rawi configure --help
rawi history --help

# System information
rawi info

# Check version
rawi --version
```

### Error Messages

**"No configuration found":**

```bash
# Set up configuration
rawi configure
```

**"Incomplete configuration":**

```bash
# Check what's missing
rawi configure --show

# Reconfigure with all required parameters
rawi configure --provider openai --model gpt-4o --api-key sk-your-key
```

**"Unknown command":**

```bash
# Check available commands
rawi --help

# Use correct command syntax
rawi ask "your question"
```

**Network/API errors:**

- Check your internet connection
- Verify API key is valid and has sufficient quota
- Check provider status pages

### Performance Tips

1. **Use appropriate models**: Larger models are more capable but slower
2. **Adjust temperature**: Lower values (0.1-0.3) for factual responses, higher (0.7-1.0) for creative tasks
3. **Manage token limits**: Set appropriate max-tokens for your use case
4. **Use profiles**: Create optimized profiles for different tasks
5. **Local providers**: Use Ollama or LM Studio for faster responses without API limits

---

For more detailed information, visit the [official documentation](https://rawi.mkabumattar.com) or check the [GitHub repository](https://github.com/withrawi/rawi).
