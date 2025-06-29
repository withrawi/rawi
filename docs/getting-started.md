# Getting Started with Rawi

This guide will help you install, configure, and start using Rawi (راوي) in minutes.

## 📦 Installation

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm/pnpm/yarn**: Package manager of your choice

### Global Installation (Recommended)

```bash
# Using npm
npm install -g rawi

# Using pnpm
pnpm add -g rawi

# Using yarn
yarn global add rawi
```

### Local Installation

```bash
# Using npm
npm install rawi

# Using pnpm
pnpm add rawi

# Using yarn
yarn add rawi
```

### Verify Installation

```bash
rawi --version
rawi info
```

## 🔧 First Configuration

### Quick Setup (Interactive)

The easiest way to get started is with the interactive configuration:

```bash
rawi configure
```

This will guide you through:

1. Choosing an AI provider
2. Selecting a model
3. Entering your API key
4. Setting preferences (temperature, language, etc.)

### Manual Configuration

You can also configure manually with command-line flags:

```bash
# OpenAI setup
rawi configure --provider openai --model gpt-4o --api-key your-api-key

# Anthropic setup
rawi configure --provider anthropic --model claude-3-5-sonnet-20241022 --api-key your-api-key

# Local Ollama setup (no API key needed)
rawi configure --provider ollama --model llama3.2
```

## 🚀 Your First Query

Once configured, you can start asking questions:

```bash
# Simple question
rawi ask "What is the difference between TypeScript and JavaScript?"

# Code analysis
rawi ask "Explain this function: console.log('Hello World')"

# Get help
rawi ask "How do I create a React component?"
```

## 📊 Basic Commands

### Ask Questions

```bash
# Basic usage
rawi ask "Your question here"

# With specific profile
rawi ask "Your question" --profile production

# Start new session
rawi ask "Hello" --new-session

# Continue session
rawi ask "Follow up question" --session session-id
```

### Configuration Management

```bash
# Show current config
rawi configure --show

# List all profiles
rawi configure --list

# List all supported providers
rawi provider --list

# List all models for a provider
rawi provider --list-models openai
```

# List models for a provider

rawi configure --list-models openai

````

### Chat History

```bash
# View recent conversations
rawi history

# Search in history
rawi history --search "TypeScript"

# View specific session
rawi history show session-id

# List all sessions
rawi history sessions
````

### System Information

```bash
# Show app info
rawi info

# Show configured profiles
rawi info --profiles

# Show supported providers
rawi info --providers
```

## 🔄 Shell Integration

Rawi works seamlessly with shell pipes and redirects:

```bash
# Analyze file contents
cat package.json | rawi ask "What does this package.json do?"

# Generate documentation
rawi ask "Create a README for this project" > README.md

# Chain with other commands
curl -s api.endpoint.com/data | rawi ask "Summarize this API response" | head -10
```

## 📝 Multiple Profiles

You can create different profiles for different contexts:

```bash
# Work profile with GPT-4
rawi configure --profile work --provider openai --model gpt-4o

# Personal profile with Claude
rawi configure --profile personal --provider anthropic --model claude-3-sonnet-20240229

# Local profile with Ollama
rawi configure --profile local --provider ollama --model llama3.2

# Use specific profile
rawi ask "Analyze this code" --profile work
```

## 🔒 Setting Up Ollama (Local AI)

For complete privacy, you can use Ollama for local AI processing:

### 1. Install Ollama

```bash
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows
# Download from https://ollama.com/download
```

### 2. Pull a Model

```bash
# Pull Llama 3.2 (3B parameters, good for most tasks)
ollama pull llama3.2

# Pull CodeLlama (optimized for code)
ollama pull codellama

# Pull Qwen (multilingual support)
ollama pull qwen2.5
```

### 3. Configure Rawi

```bash
rawi configure --provider ollama --model llama3.2
```

### 4. Start Using

```bash
rawi ask "Explain machine learning" # Uses local Ollama
```

## 🌍 Language Support

Rawi supports multiple languages:

```bash
# Set language to Arabic
rawi configure --language arabic

# Set language to English (default)
rawi configure --language english
```

## 📖 Next Steps

Now that you're set up, explore more advanced features:

- [Configuration Guide](./configuration.md) - Detailed provider setup
- [CLI Commands Reference](./commands.md) - All available commands
- [Usage Examples](./examples.md) - Real-world scenarios
- [Providers Guide](./providers.md) - Provider-specific setup

## 🆘 Troubleshooting

### Common Issues

**Command not found**: Ensure Rawi is installed globally or use `npx rawi`

**API Key errors**: Verify your API key is correct and has proper permissions

**Network issues**: Check your internet connection for cloud providers

**Ollama connection**: Ensure Ollama service is running (`ollama serve`)

For more help, see [Troubleshooting Guide](./troubleshooting.md).
