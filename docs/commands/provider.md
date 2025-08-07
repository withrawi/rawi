# Provider Command

Explore and discover AI providers, their models, and capabilities supported by Rawi.

## Navigation

- [← Commands Overview](./README.md)
- [📖 Wiki Home](../README.md)
- [⚙️ Configuration](./configure.md)
- [ℹ️ System Info](./info.md)

---

## Basic Usage

```bash
# List all supported providers
rawi provider --list

# Show models for a specific provider
rawi provider --list-models openai

# Interactive provider explorer
rawi provider
```

## Command Options

| Option                         | Description                                   |
| ------------------------------ | --------------------------------------------- |
| `-l, --list`                   | Display all supported AI providers            |
| `-m, --list-models <provider>` | Show available models for a specific provider |
| `--help`                       | Show command help and examples                |

## Examples

### 1. List All Providers

Get an overview of all supported AI providers:

```bash
rawi provider --list
```

**Shows:**

- Provider names and icons
- Current status (configured/available)
- Key features and capabilities
- Setup requirements

### 2. Explore Provider Models

View available models for a specific provider:

```bash
# OpenAI models
rawi provider --list-models openai

# Anthropic models
rawi provider --list-models anthropic

# Local Ollama models
rawi provider --list-models ollama
```

### 3. Interactive Mode

Run without options for an interactive explorer:

```bash
rawi provider
```

This opens an interactive menu to:

- Browse providers
- View model details
- Compare capabilities
- Get setup instructions

## Supported Providers

### Cloud Providers

| Provider           | Icon | Models             | Key Features                 |
| ------------------ | ---- | ------------------ | ---------------------------- |
| **OpenAI**         | 🔵   | GPT-4, GPT-3.5     | Industry leading, versatile  |
| **Anthropic**      | 🟣   | Claude-3, Claude-2 | Safety-focused, long context |
| **Google**         | 🔴   | Gemini Pro, PaLM   | Multimodal, code-optimized   |
| **Azure OpenAI**   | 🔷   | GPT-4, GPT-3.5     | Enterprise, compliance       |
| **Amazon Bedrock** | 🟠   | Multiple models    | AWS integration, variety     |
| **xAI**            | ⚫   | Grok models        | Real-time, conversational    |

### Local Providers

| Provider      | Icon | Models                     | Key Features           |
| ------------- | ---- | -------------------------- | ---------------------- |
| **Ollama**    | 🟢   | Llama2, Mistral, CodeLlama | Privacy, offline, fast |
| **LM Studio** | 🔗   | Various local models       | GUI, model management  |

## Provider Details

### OpenAI

```
🔵 OpenAI
├─ Models: gpt-4, gpt-4-turbo, gpt-3.5-turbo
├─ Context: Up to 128k tokens
├─ Features: Function calling, vision, code interpreter
├─ Setup: API key required
└─ Cost: Pay-per-use
```

### Anthropic

```
🟣 Anthropic
├─ Models: claude-3-opus, claude-3-sonnet, claude-3-haiku
├─ Context: Up to 200k tokens
├─ Features: Constitutional AI, safety-focused
├─ Setup: API key required
└─ Cost: Pay-per-use
```

### Ollama (Local)

```
🟢 Ollama
├─ Models: llama2, mistral, codellama, phi, gemma
├─ Context: Varies by model
├─ Features: Completely offline, privacy-first
├─ Setup: Local installation required
└─ Cost: Free (compute only)
```

## Model Information

When viewing models for a provider:

```bash
rawi provider --list-models openai
```

**Output includes:**

- Model name and version
- Context window size
- Capabilities (text, code, vision)
- Recommended use cases
- Performance characteristics
- Cost information

## Setup Requirements

### API-Based Providers

Most cloud providers require:

1. Account registration
2. API key generation
3. Configuration in Rawi

```bash
# Configure after getting API key
rawi configure --profile myprofile
```

### Local Providers

For Ollama and LM Studio:

1. Install the software locally
2. Download/pull models
3. Ensure service is running

```bash
# Example Ollama setup
ollama pull llama2
ollama serve

# Then configure in Rawi
rawi configure --profile local
```

## Use Cases

### 1. Provider Research

Before configuring, explore what's available:

```bash
rawi provider --list
rawi provider --list-models anthropic
```

### 2. Model Comparison

Compare models across providers:

```bash
# Check OpenAI options
rawi provider --list-models openai

# Compare with Anthropic
rawi provider --list-models anthropic

# Consider local alternatives
rawi provider --list-models ollama
```

### 3. Capability Discovery

Find providers with specific features:

- Vision capabilities
- Long context windows
- Code generation
- Multilingual support

## Integration Examples

### Scripting with Provider Info

```bash
#!/bin/bash
# Check if local provider is available
if rawi provider --list-models ollama | grep -q "llama2"; then
    echo "Using local Ollama"
    rawi ask --profile local "Hello world"
else
    echo "Falling back to OpenAI"
    rawi ask --profile cloud "Hello world"
fi
```

### Configuration Automation

```bash
# Auto-configure based on available providers
for provider in openai anthropic ollama; do
    if rawi provider --list-models $provider >/dev/null 2>&1; then
        echo "$provider is available"
        # Configure if desired
    fi
done
```

## Related Commands

- [`configure`](./configure.md) — Set up providers after exploration
- [`info`](./info.md) — See currently configured providers
- [`ask`](./ask.md) — Use specific providers for conversations

## Troubleshooting

### Provider Not Available

If a provider doesn't appear in the list:

1. Check your internet connection (for cloud providers)
2. Verify local installations (Ollama, LM Studio)
3. Update Rawi to the latest version

### No Models Listed

When `--list-models` returns empty:

- **Cloud providers:** Check API key configuration
- **Ollama:** Ensure models are pulled and service is running
- **LM Studio:** Verify models are downloaded and server is active

### Connection Issues

For cloud providers:

```bash
# Test connectivity
curl -I https://api.openai.com/v1/models

# Check configuration
rawi info --profiles
```

For local providers:

```bash
# Test Ollama
curl http://localhost:11434/api/tags

# Check if service is running
ps aux | grep ollama
```

---

**Next Steps:**

- [Configure a provider](./configure.md)
- [Start using AI assistance](./ask.md)
- [Explore act templates](./act.md)
