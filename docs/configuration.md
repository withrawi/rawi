# Configuration Guide

This guide covers all configuration options for Rawi, including detailed setup for each AI provider.

## 📁 Configuration Structure

Rawi stores configuration in your home directory:

```
~/.rawi/
└── credentials    # Encrypted configuration file
```

## 🔧 Basic Configuration

### Interactive Configuration

The simplest way to configure Rawi:

```bash
rawi configure
```

This wizard will guide you through:

- Provider selection
- Model selection
- API key entry
- Advanced settings (temperature, max tokens, language)

### Command-Line Configuration

For automation or quick setup:

```bash
rawi configure \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-key-here \
  --temperature 0.7 \
  --max-tokens 2048 \
  --language english
```

## 👤 Profile Management

### Creating Profiles

```bash
# Create a work profile
rawi configure --profile work --provider openai --model gpt-4o

# Create a personal profile
rawi configure --profile personal --provider anthropic --model claude-3-sonnet-20240229

# Create a local profile
rawi configure --profile local --provider ollama --model llama3.2
```

### Managing Profiles

```bash
# List all profiles
rawi configure --list

# Show specific profile
rawi configure --show --profile work

# Delete a profile
rawi configure --delete personal

# List all supported providers
rawi provider --list

# List all models for a provider
rawi provider --list-models openai
```

### Using Profiles

```bash
# Use specific profile
rawi ask "Your question" --profile work

# Default profile (if not specified)
rawi ask "Your question"  # Uses 'default' profile
```

## 🤖 Provider-Specific Configuration

### OpenAI

```bash
# Basic setup
rawi configure \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-openai-key

# With custom base URL (for compatible APIs)
rawi configure \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-key \
  --base-url https://api.openai.com/v1
```

**Available Models:**

- `gpt-4o` - Latest GPT-4 Optimized
- `gpt-4` - GPT-4
- `gpt-4-turbo` - GPT-4 Turbo
- `gpt-3.5-turbo` - GPT-3.5 Turbo
- `o1-preview` - O1 Preview
- `o1-mini` - O1 Mini

### Anthropic Claude

```bash
# Basic setup
rawi configure \
  --provider anthropic \
  --model claude-3-5-sonnet-20241022 \
  --api-key sk-ant-your-key

# With custom base URL
rawi configure \
  --provider anthropic \
  --model claude-3-sonnet-20240229 \
  --api-key sk-ant-your-key \
  --base-url https://api.anthropic.com
```

**Available Models:**

- `claude-3-5-sonnet-20241022` - Latest Claude 3.5 Sonnet
- `claude-3-5-haiku-20241022` - Claude 3.5 Haiku
- `claude-3-sonnet-20240229` - Claude 3 Sonnet
- `claude-3-haiku-20240307` - Claude 3 Haiku

### Google Gemini

```bash
# Basic setup
rawi configure \
  --provider google \
  --model gemini-2.0-flash-exp \
  --api-key AIza-your-google-key

# With custom base URL
rawi configure \
  --provider google \
  --model gemini-1.5-pro \
  --api-key AIza-your-key \
  --base-url https://generativelanguage.googleapis.com/v1beta
```

**Available Models:**

- `gemini-2.0-flash-exp` - Gemini 2.0 Flash (Experimental)
- `gemini-1.5-pro` - Gemini 1.5 Pro
- `gemini-1.5-flash` - Gemini 1.5 Flash
- `gemini-1.0-pro` - Gemini 1.0 Pro

### Ollama (Local AI)

```bash
# Basic setup (no API key needed)
rawi configure \
  --provider ollama \
  --model llama3.2

# With custom base URL (if Ollama is on different host)
rawi configure \
  --provider ollama \
  --model llama3.2 \
  --base-url http://localhost:11434/api
```

**Popular Models:**

- `llama3.2` - Llama 3.2 (3B/7B)
- `llama3.1` - Llama 3.1 (8B/70B)
- `codellama` - Code Llama (optimized for code)
- `mistral` - Mistral 7B
- `qwen2.5` - Qwen 2.5 (multilingual)
- `phi3` - Microsoft Phi-3

### Azure OpenAI

```bash
# Basic setup
rawi configure \
  --provider azure \
  --model your-deployment-name \
  --api-key your-azure-key \
  --resource-name your-resource-name \
  --api-version 2024-10-01-preview
```

**Required Parameters:**

- `--resource-name`: Your Azure OpenAI resource name
- `--api-version`: API version (default: 2024-10-01-preview)
- `--model`: Your deployment name (not the model name)

### Amazon Bedrock

#### Using AWS Credential Provider Chain

```bash
# Uses AWS CLI credentials, environment variables, or IAM roles
rawi configure \
  --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --use-provider-chain \
  --region us-east-1
```

#### Using Explicit Credentials

```bash
# With explicit AWS credentials
rawi configure \
  --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --access-key-id AKIA... \
  --secret-access-key your-secret-key \
  --region us-east-1
```

**Available Models:**

- `anthropic.claude-3-5-sonnet-20241022-v2:0` - Claude 3.5 Sonnet
- `anthropic.claude-3-sonnet-20240229-v1:0` - Claude 3 Sonnet
- `anthropic.claude-3-haiku-20240307-v1:0` - Claude 3 Haiku
- `meta.llama3-1-8b-instruct-v1:0` - Llama 3.1 8B
- `amazon.titan-text-premier-v1:0` - Titan Text Premier

### Qwen (Alibaba Cloud)

```bash
# Basic setup
rawi configure \
  --provider qwen \
  --model qwen-max \
  --api-key sk-your-qwen-key

# With custom base URL
rawi configure \
  --provider qwen \
  --model qwen-plus \
  --api-key sk-your-key \
  --base-url https://dashscope-intl.aliyuncs.com/compatible-mode/v1
```

**Available Models:**

- `qwen-max` - Qwen Max (most capable)
- `qwen-plus` - Qwen Plus (balanced)
- `qwen-turbo` - Qwen Turbo (fastest)

### xAI (Grok)

```bash
# Basic setup
rawi configure \
  --provider xai \
  --model grok-beta \
  --api-key xai-your-key

# With custom base URL
rawi configure \
  --provider xai \
  --model grok-2-1212 \
  --api-key xai-your-key \
  --base-url https://api.x.ai/v1
```

**Available Models:**

- `grok-beta` - Grok Beta
- `grok-2-1212` - Grok 2 (December 2024)

## ⚙️ Advanced Configuration Options

### Temperature

Controls randomness in responses (0.0 to 2.0):

```bash
# Conservative (more focused)
rawi configure --temperature 0.3

# Balanced (default)
rawi configure --temperature 0.7

# Creative (more random)
rawi configure --temperature 1.2
```

### Max Tokens

Controls maximum response length:

```bash
# Short responses
rawi configure --max-tokens 512

# Medium responses (default)
rawi configure --max-tokens 2048

# Long responses
rawi configure --max-tokens 4096
```

### Language

Set the interface language:

```bash
# English (default)
rawi configure --language english

# Arabic
rawi configure --language arabic
```

## 🔍 Configuration Commands

### Viewing Configuration

```bash
# Show current configuration
rawi configure --show

# Show specific profile
rawi configure --show --profile work

# List all profiles
rawi configure --list
```

### Provider Information

```bash
# List all available providers
rawi configure --list-providers

# List models for a specific provider
rawi configure --list-models openai
rawi configure --list-models anthropic
rawi configure --list-models ollama
```

### Profile Management

```bash
# Delete a profile
rawi configure --delete profile-name

# Create multiple profiles
rawi configure --profile dev --provider openai --model gpt-4o
rawi configure --profile prod --provider anthropic --model claude-3-sonnet-20240229
```

## 🔐 Security Best Practices

### API Key Management

1. **Never commit API keys to version control**
2. **Use environment variables for CI/CD**:
   ```bash
   export OPENAI_API_KEY="sk-your-key"
   rawi configure --provider openai --model gpt-4o --api-key $OPENAI_API_KEY
   ```
3. **Rotate keys regularly**
4. **Use minimum required permissions**

### File Permissions

Rawi automatically sets secure permissions on the credentials file:

- Owner: read/write (600)
- Group/Others: no access

### Local AI for Sensitive Data

For sensitive data, consider using Ollama:

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull a model
ollama pull llama3.2

# Configure Rawi
rawi configure --provider ollama --model llama3.2
```

## 🔧 Configuration File Format

The configuration is stored in JSON format:

```json
{
  "default": {
    "provider": "openai",
    "model": "gpt-4o",
    "temperature": 0.7,
    "maxTokens": 2048,
    "language": "english",
    "providerSettings": {
      "apiKey": "sk-encrypted-key"
    }
  },
  "work": {
    "provider": "anthropic",
    "model": "claude-3-sonnet-20240229",
    "temperature": 0.5,
    "maxTokens": 4096,
    "language": "english",
    "providerSettings": {
      "apiKey": "sk-ant-encrypted-key"
    }
  }
}
```

## 🔄 Migrating Configuration

### Export/Import Profiles

```bash
# Export current configuration
cp ~/.rawi/credentials ~/rawi-backup.json

# Import on another machine
cp ~/rawi-backup.json ~/.rawi/credentials
```

### Environment Variables

You can override configuration with environment variables:

```bash
export RAWI_PROVIDER=openai
export RAWI_MODEL=gpt-4o
export RAWI_API_KEY=sk-your-key
export RAWI_TEMPERATURE=0.8

rawi ask "Your question"  # Uses environment variables
```

## 🆘 Troubleshooting Configuration

### Common Issues

**Configuration not found**: Run `rawi configure` to create initial config

**Permission errors**: Check file permissions on `~/.rawi/credentials`

**Invalid API key**: Verify key format and permissions with provider

**Model not available**: Check `rawi configure --list-models provider-name`

### Reset Configuration

```bash
# Delete all configuration
rm -rf ~/.rawi

# Reconfigure
rawi configure
```

For more troubleshooting help, see [Troubleshooting Guide](./troubleshooting.md).
