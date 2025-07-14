# configure — Setup & Management

The `configure` command is your tool for setting up AI providers, managing profiles, and customizing Rawi's behavior.

## 📋 Table of Contents

- [Basic Usage](#basic-usage)
- [Options](#options)
- [Interactive Configuration](#interactive-configuration)
- [Manual Configuration](#manual-configuration)
- [Profile Management](#profile-management)
- [Provider-Specific Setup](#provider-specific-setup)
- [Examples](#examples)
- [Advanced Configuration](#advanced-configuration)

---

## Basic Usage

```bash
rawi configure [options]
```

### Quick Start

```bash
# Interactive setup (recommended for first-time users)
rawi configure

# View current configuration
rawi configure --show

# List all profiles
rawi configure --list
```

---

## Options

### Configuration Options

| Option                    | Description                | Example                                |
| ------------------------- | -------------------------- | -------------------------------------- |
| `-p, --profile <profile>` | Profile name to configure  | `--profile work`                       |
| `--provider <provider>`   | AI provider                | `--provider openai`                    |
| `--model <model>`         | AI model name              | `--model gpt-4o`                       |
| `--api-key <apiKey>`      | API key for the provider   | `--api-key sk-...`                     |
| `--base-url <baseURL>`    | Custom base URL            | `--base-url https://api.openai.com/v1` |
| `--temperature <temp>`    | Sampling temperature (0-2) | `--temperature 0.7`                    |
| `--max-tokens <tokens>`   | Maximum response tokens    | `--max-tokens 2048`                    |
| `--language <lang>`       | Language (english, arabic) | `--language english`                   |

### Provider-Specific Options

#### Azure OpenAI

| Option                    | Description         | Required                         |
| ------------------------- | ------------------- | -------------------------------- |
| `--resource-name <name>`  | Azure resource name | ✅                               |
| `--api-version <version>` | API version         | ❌ (default: 2024-10-01-preview) |

#### Amazon Bedrock

| Option                      | Description                       | Required                |
| --------------------------- | --------------------------------- | ----------------------- |
| `--region <region>`         | AWS region                        | ❌ (default: us-east-1) |
| `--access-key-id <id>`      | AWS access key ID                 | ❌\*                    |
| `--secret-access-key <key>` | AWS secret access key             | ❌\*                    |
| `--session-token <token>`   | AWS session token                 | ❌                      |
| `--use-provider-chain`      | Use AWS credential provider chain | ❌\*                    |

\*Either explicit credentials or provider chain required

### Management Options

| Option                   | Description                    |
| ------------------------ | ------------------------------ |
| `-s, --show`             | Show current configuration     |
| `-l, --list`             | List all profiles              |
| `-d, --delete <profile>` | Delete a configuration profile |

---

## Interactive Configuration

The interactive mode guides you through the setup process step by step.

### Start Interactive Setup

```bash
rawi configure
```

### Interactive Flow

1. **Choose Provider**: Select from available AI providers
2. **Select Model**: Pick from provider's available models
3. **Enter Credentials**: Provide API keys or authentication details
4. **Configure Options**: Set temperature, tokens, language
5. **Test Configuration**: Verify the setup works

### Example Interactive Session

```bash
$ rawi configure

🤖 Welcome to Rawi configuration!

? Select an AI provider: (Use arrow keys)
❯ OpenAI (GPT-4, GPT-3.5)
  Anthropic (Claude)
  Google (Gemini)
  Ollama (Local AI)
  Azure OpenAI
  AWS Bedrock
  xAI (Grok)
  Qwen
  LM Studio

? Select a model:
❯ gpt-4o (Latest GPT-4 model)
  gpt-4o-mini (Faster, cheaper GPT-4)
  gpt-3.5-turbo (Fast and efficient)

? Enter your OpenAI API key: sk-********************************

? Set temperature (0-2, higher = more creative): 0.7

? Set max tokens (1-100000): 2048

? Select language:
❯ English
  Arabic (العربية)

✅ Configuration saved successfully!
✅ Testing connection... Success!

You can now use: rawi ask "Hello, world!"
```

---

## Manual Configuration

For automation or advanced users, configure directly with command-line options.

### Quick Provider Setup

#### OpenAI

```bash
rawi configure \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-api-key
```

#### Anthropic Claude

```bash
rawi configure \
  --provider anthropic \
  --model claude-3-5-sonnet-20241022 \
  --api-key sk-ant-your-key
```

#### Google Gemini

```bash
rawi configure \
  --provider google \
  --model gemini-2.0-flash-exp \
  --api-key AIza-your-key
```

#### Ollama (Local)

```bash
# First, install and start Ollama, then pull a model
ollama pull llama3.2

# Configure Rawi
rawi configure \
  --provider ollama \
  --model llama3.2
```

#### Azure OpenAI

```bash
rawi configure \
  --provider azure \
  --model your-deployment-name \
  --api-key your-azure-key \
  --resource-name your-resource-name \
  --api-version 2024-10-01-preview
```

#### AWS Bedrock

```bash
# Using AWS credential provider chain (recommended)
rawi configure \
  --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --use-provider-chain \
  --region us-west-2

# Using explicit credentials
rawi configure \
  --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --access-key-id AKIA... \
  --secret-access-key your-secret \
  --region us-east-1
```

#### xAI

```bash
rawi configure \
  --provider xai \
  --model grok-beta \
  --api-key xai-your-key
```

#### DeepSeek

```bash
rawi configure \
  --provider deepseek \
  --model deepseek-chat \
  --api-key sk-your-deepseek-key
```

#### Qwen

```bash
rawi configure \
  --provider qwen \
  --model qwen-max \
  --api-key sk-your-qwen-key
```

#### LM Studio

```bash
# Make sure LM Studio is running locally
rawi configure \
  --provider lmstudio \
  --model your-loaded-model
```

---

## Profile Management

Profiles allow you to maintain multiple configurations for different use cases.

### Create Multiple Profiles

```bash
# Work profile with OpenAI
rawi configure \
  --profile work \
  --provider openai \
  --model gpt-4o \
  --api-key sk-work-key

# Personal profile with Ollama
rawi configure \
  --profile personal \
  --provider ollama \
  --model llama3.2

# Analysis profile with Claude
rawi configure \
  --profile analysis \
  --provider anthropic \
  --model claude-3-5-sonnet-20241022 \
  --api-key sk-ant-analysis-key
```

### View Profiles

```bash
# List all profiles
rawi configure --list

# Show specific profile
rawi configure --show --profile work

# Show default profile
rawi configure --show
```

### Manage Profiles

```bash
# Delete a profile
rawi configure --delete old-profile

# Copy profile configuration
rawi configure --show --profile work > work-config.backup
```

---

## Provider-Specific Setup

### OpenAI Setup

1. **Get API Key**: Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. **Choose Model**: `gpt-4o`, `gpt-4o-mini`, or `gpt-3.5-turbo`
3. **Configure**:

```bash
rawi configure \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-key \
  --temperature 0.7 \
  --max-tokens 4096
```

### Anthropic Setup

1. **Get API Key**: Visit [Anthropic Console](https://console.anthropic.com/)
2. **Choose Model**: `claude-3-5-sonnet-20241022` or `claude-3-5-haiku-20241022`
3. **Configure**:

```bash
rawi configure \
  --provider anthropic \
  --model claude-3-5-sonnet-20241022 \
  --api-key sk-ant-your-key
```

### Google Gemini Setup

1. **Get API Key**: Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. **Choose Model**: `gemini-2.0-flash-exp` or `gemini-1.5-pro`
3. **Configure**:

```bash
rawi configure \
  --provider google \
  --model gemini-2.0-flash-exp \
  --api-key AIza-your-key
```

### DeepSeek Setup

1. **Get API Key**: Visit [DeepSeek Platform](https://platform.deepseek.com/api_keys)
2. **Choose Model**: `deepseek-chat` or `deepseek-reasoner`
3. **Configure**:

```bash
rawi configure \
  --provider deepseek \
  --model deepseek-chat \
  --api-key sk-your-deepseek-key \
  --temperature 0.7 \
  --max-tokens 4096
```

### Ollama Setup (Local AI)

1. **Install Ollama**: Visit [ollama.com](https://ollama.com/download)
2. **Pull Models**:

```bash
# Popular models
ollama pull llama3.2          # General purpose
ollama pull codellama         # Code-focused
ollama pull mistral           # Efficient
ollama pull qwen2.5           # Multilingual
```

3. **Configure Rawi**:

```bash
rawi configure \
  --provider ollama \
  --model llama3.2
```

### Azure OpenAI Setup

1. **Create Resource**: Set up Azure OpenAI in Azure Portal
2. **Deploy Model**: Deploy a model (e.g., GPT-4)
3. **Configure**:

```bash
rawi configure \
  --provider azure \
  --model your-deployment-name \
  --api-key your-azure-key \
  --resource-name your-resource-name
```

### AWS Bedrock Setup

1. **Request Model Access**: Enable models in AWS Bedrock console
2. **Set Up Credentials**: Use IAM or provider chain
3. **Configure**:

```bash
# Using AWS credentials (recommended)
rawi configure \
  --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --use-provider-chain \
  --region us-west-2
```

---

## Examples

### Basic Configuration Examples

```bash
# Simple OpenAI setup
rawi configure --provider openai --model gpt-4o --api-key sk-xxx

# Local AI setup
rawi configure --provider ollama --model llama3.2

# Show current config
rawi configure --show
```

### Advanced Configuration Examples

```bash
# Complete OpenAI setup with all options
rawi configure \
  --profile production \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-key \
  --temperature 0.5 \
  --max-tokens 4096 \
  --language english

# Multi-language setup
rawi configure \
  --profile arabic \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-key \
  --language arabic

# Custom base URL (for proxies or custom endpoints)
rawi configure \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-key \
  --base-url https://custom-proxy.example.com/v1
```

### Environment-Based Profiles

```bash
# Development environment (fast, local)
rawi configure \
  --profile dev \
  --provider ollama \
  --model llama3.2 \
  --temperature 0.3

# Staging environment (balanced)
rawi configure \
  --profile staging \
  --provider openai \
  --model gpt-4o-mini \
  --temperature 0.5

# Production environment (high quality)
rawi configure \
  --profile prod \
  --provider openai \
  --model gpt-4o \
  --temperature 0.7 \
  --max-tokens 4096
```

### Team Setup

```bash
# Team lead profile (comprehensive analysis)
rawi configure \
  --profile lead \
  --provider anthropic \
  --model claude-3-5-sonnet-20241022 \
  --temperature 0.4

# Developer profile (code-focused)
rawi configure \
  --profile dev \
  --provider openai \
  --model gpt-4o \
  --temperature 0.6

# QA profile (testing-focused)
rawi configure \
  --profile qa \
  --provider openai \
  --model gpt-4o-mini \
  --temperature 0.3
```

---

## Advanced Configuration

### Environment Variables

Set up API keys via environment variables:

```bash
# Set environment variables
export OPENAI_API_KEY="sk-your-key"
export ANTHROPIC_API_KEY="sk-ant-your-key"
export GOOGLE_API_KEY="AIza-your-key"

# Configure without exposing keys in command history
rawi configure --provider openai --model gpt-4o --api-key $OPENAI_API_KEY
```

### Configuration File Location

Rawi stores configurations in:

- **Linux/macOS**: `~/.rawi/credentials`
- **Windows**: `%USERPROFILE%\.rawi\credentials`

### Backup and Restore

```bash
# Backup configuration
cp ~/.rawi/credentials ~/.rawi/credentials.backup

# View configuration (for documentation)
rawi configure --show > rawi-config.txt

# Restore configuration
cp ~/.rawi/credentials.backup ~/.rawi/credentials
```

### Security Best Practices

```bash
# Set proper file permissions (Linux/macOS)
chmod 600 ~/.rawi/credentials

# Use environment variables for CI/CD
export RAWI_OPENAI_KEY="$CI_OPENAI_KEY"
rawi configure --provider openai --api-key "$RAWI_OPENAI_KEY"

# Use different profiles for different security levels
rawi configure --profile secure --provider ollama --model llama3.2  # No API key needed
rawi configure --profile cloud --provider openai --api-key sk-xxx   # Requires API key
```

---

## Troubleshooting Configuration

### Common Issues

**"Invalid API key"**

```bash
# Verify API key format
rawi configure --show

# Test with a simple request
rawi ask "Hello" --verbose
```

**"Provider not responding"**

```bash
# Check internet connection
ping api.openai.com

# Verify provider service status
curl -s https://status.openai.com/api/v2/status.json
```

**"Model not available"**

```bash
# List available models for provider
rawi provider --list-models openai

# Use a different model
rawi configure --model gpt-3.5-turbo
```

**"Configuration file issues"**

```bash
# Check file exists
ls -la ~/.rawi/credentials

# Reset configuration
rm ~/.rawi/credentials
rawi configure
```

### Validation Commands

```bash
# Test configuration
rawi info
rawi configure --show

# Test connection
rawi ask "test" --verbose

# Debug profile issues
rawi configure --list
rawi configure --show --profile problematic-profile
```

---

## Navigation

- [← Back to Commands](./README.md)
- [Next: history Command →](./history.md)

Related Pages:

- [AI Providers](../providers/README.md)
- [Profile Management](../profiles.md)
- [Configuration Guide](../configuration.md)
- [Troubleshooting](../troubleshooting.md)
