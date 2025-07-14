# AI Providers Guide

Comprehensive guide to all AI providers supported by Rawi, their setup, and capabilities.

## Navigation

- [📖 Wiki Home](../README.md)
- [⚙️ Configuration](../commands/configure.md)
- [🔍 Provider Command](../commands/provider.md)
- [🚀 Quick Start](../quickstart.md)

---

## Overview

Rawi supports **10 different AI providers**, ranging from cutting-edge cloud services to privacy-focused local solutions. Choose the provider that best fits your needs, budget, and privacy requirements.

## Quick Provider Comparison

| Provider                              | Type  | Privacy    | Setup    | Best For                        |
| ------------------------------------- | ----- | ---------- | -------- | ------------------------------- |
| [**OpenAI**](#openai)                 | Cloud | Standard   | API Key  | General purpose, latest models  |
| [**Anthropic**](#anthropic)           | Cloud | High       | API Key  | Safety, long context, reasoning |
| [**Google**](#google)                 | Cloud | Standard   | API Key  | Multimodal, code generation     |
| [**DeepSeek**](#deepseek)             | Cloud | Standard   | API Key  | Cost-effective, reasoning       |
| [**Ollama**](#ollama)                 | Local | Maximum    | Install  | Privacy, offline, free          |
| [**LM Studio**](#lm-studio)           | Local | Maximum    | Install  | GUI management, local models    |
| [**Azure OpenAI**](#azure-openai)     | Cloud | Enterprise | API Key  | Enterprise, compliance          |
| [**Amazon Bedrock**](#amazon-bedrock) | Cloud | Enterprise | AWS Auth | AWS integration, variety        |
| [**Qwen**](#qwen)                     | Cloud | Standard   | API Key  | Multilingual, efficient         |
| [**xAI**](#xai)                       | Cloud | Standard   | API Key  | Real-time, conversational       |

---

## Cloud Providers

### OpenAI

**Industry-leading AI models with exceptional performance.**

```bash
# Quick setup
rawi configure --provider openai --model gpt-4o --api-key sk-your-key-here
```

**Available Models:**

- `gpt-4o` — Latest flagship model
- `gpt-4-turbo` — High performance, lower cost
- `gpt-3.5-turbo` — Fast and efficient

**Key Features:**

- 🏆 State-of-the-art performance
- 🔧 Function calling support
- 👀 Vision capabilities (GPT-4V)
- 💻 Code interpreter integration
- 📊 JSON mode for structured output

**Setup Requirements:**

1. Create account at [platform.openai.com](https://platform.openai.com)
2. Generate API key
3. Configure billing (pay-per-use)

**Configuration Example:**

```bash
rawi configure --provider openai \
  --model gpt-4o \
  --api-key sk-proj-your-key-here \
  --profile main
```

---

### Anthropic

**Safety-focused AI with exceptional reasoning capabilities.**

```bash
# Quick setup
rawi configure --provider anthropic --model claude-3-sonnet-20240229 --api-key sk-ant-your-key
```

**Available Models:**

- `claude-3-opus-20240229` — Most capable, highest cost
- `claude-3-sonnet-20240229` — Balanced performance and cost
- `claude-3-haiku-20240307` — Fastest, most efficient

**Key Features:**

- 🛡️ Constitutional AI for safety
- 📚 200k+ token context window
- 🧠 Superior reasoning and analysis
- 📝 Excellent for long-form content
- 🔍 Strong research capabilities

**Setup Requirements:**

1. Create account at [console.anthropic.com](https://console.anthropic.com)
2. Generate API key
3. Configure billing

**Configuration Example:**

```bash
rawi configure --provider anthropic \
  --model claude-3-sonnet-20240229 \
  --api-key sk-ant-api03-your-key \
  --profile claude
```

---

### Google

**Multimodal AI with strong code generation capabilities.**

```bash
# Quick setup
rawi configure --provider google --model gemini-pro --api-key your-google-api-key
```

**Available Models:**

- `gemini-pro` — Flagship model for text
- `gemini-pro-vision` — Multimodal capabilities
- `gemini-1.5-pro` — Enhanced reasoning

**Key Features:**

- 🎨 Multimodal (text, images, code)
- 💻 Excellent code generation
- 🌍 Multilingual support
- 📊 Data analysis capabilities
- ⚡ Fast inference

**Setup Requirements:**

1. Create Google Cloud project
2. Enable Vertex AI API
3. Generate API key or service account

---

### DeepSeek

**Cost-effective AI with strong reasoning capabilities and competitive performance.**

```bash
# Quick setup
rawi configure --provider deepseek --model deepseek-chat --api-key sk-your-deepseek-key
```

**Available Models:**

- `deepseek-chat` — Versatile model for general use
- `deepseek-reasoner` — Enhanced reasoning capabilities

**Key Features:**

- 💰 Highly cost-effective pricing
- 🧠 Strong reasoning capabilities
- ⚡ Fast inference speed
- 📊 Competitive performance
- 🔍 Context caching for efficiency

**Setup Requirements:**

1. Create account at [platform.deepseek.com](https://platform.deepseek.com)
2. Generate API key
3. Configure billing (pay-per-use)

**Configuration Example:**

```bash
rawi configure --provider deepseek \
  --model deepseek-chat \
  --api-key sk-your-deepseek-key \
  --profile deepseek
```

---

## Local Providers

### Ollama

**Privacy-first local AI with zero cloud dependencies.**

```bash
# Setup process
ollama pull llama3.2
rawi configure --provider ollama --model llama3.2
```

**Available Models:**

- `llama3.2` — Meta's latest model
- `mistral` — Efficient and capable
- `codellama` — Code-specialized
- `phi` — Microsoft's efficient model
- `gemma` — Google's open model

**Key Features:**

- 🔒 Complete privacy (offline)
- 💰 Free to use (hardware only)
- ⚡ Fast local inference
- 🔄 Easy model switching
- 📱 Cross-platform support

**Setup Requirements:**

1. Install Ollama from [ollama.ai](https://ollama.ai)
2. Pull desired models
3. Ensure service is running

**Configuration Example:**

```bash
# Pull model
ollama pull llama3.2

# Configure in Rawi
rawi configure --provider ollama \
  --model llama3.2 \
  --base-url http://localhost:11434 \
  --profile local
```

---

### LM Studio

**User-friendly local AI with GUI management.**

```bash
# Setup after installing LM Studio
rawi configure --provider lmstudio --model local-model --base-url http://localhost:1234
```

**Key Features:**

- 🖥️ Easy GUI for model management
- 📦 Automatic model downloads
- ⚙️ Hardware optimization
- 🔧 Fine-tuning capabilities
- 📊 Performance monitoring

**Setup Requirements:**

1. Download LM Studio from [lmstudio.ai](https://lmstudio.ai)
2. Download models through GUI
3. Start local server

---

## Enterprise Providers

### Azure OpenAI

**Enterprise-grade OpenAI with Microsoft's compliance and security.**

```bash
# Setup with Azure credentials
rawi configure --provider azure \
  --deployment your-deployment \
  --api-version 2024-02-01 \
  --api-key your-azure-key
```

**Key Features:**

- 🏢 Enterprise compliance (SOC 2, HIPAA)
- 🌍 Global availability
- 📊 Advanced analytics
- 🔐 Private networking
- 💼 Volume discounts

---

### Amazon Bedrock

**AWS-native AI with multiple model providers.**

```bash
# Setup with AWS credentials
rawi configure --provider bedrock \
  --region us-east-1 \
  --model anthropic.claude-3-sonnet-20240229-v1:0
```

**Available Models:**

- Anthropic Claude models
- Meta Llama models
- Cohere Command models
- Stability AI models

**Key Features:**

- ☁️ Native AWS integration
- 🔐 IAM-based security
- 🌍 Multi-region deployment
- 💰 AWS billing integration

---

## Specialized Providers

### Qwen

**Alibaba's multilingual AI with strong performance.**

```bash
rawi configure --provider qwen --model qwen-turbo --api-key your-qwen-key
```

**Key Features:**

- 🌍 Excellent multilingual support
- 💰 Cost-effective pricing
- ⚡ Fast inference
- 📊 Strong analytical capabilities

### xAI

**Elon Musk's conversational AI with real-time knowledge.**

```bash
rawi configure --provider xai --model grok-beta --api-key your-xai-key
```

**Key Features:**

- 🌐 Real-time information access
- 💬 Conversational and witty
- 🚀 Cutting-edge architecture
- 📈 Continuous updates

---

## Provider Selection Guide

### For Privacy-Conscious Users

1. **Ollama** — Complete privacy, free
2. **LM Studio** — User-friendly local option

### For Performance

1. **OpenAI GPT-4o** — Best overall performance
2. **Anthropic Claude-3 Opus** — Superior reasoning
3. **Google Gemini Pro** — Multimodal capabilities

### For Enterprise

1. **Azure OpenAI** — Compliance and security
2. **Amazon Bedrock** — AWS integration
3. **Google Vertex AI** — Google Cloud native

### For Cost Efficiency

1. **Ollama** — Free (local compute)
2. **OpenAI GPT-3.5** — Affordable cloud option
3. **Anthropic Claude-3 Haiku** — Efficient performance

### For Specific Use Cases

- **Code Generation:** Google Gemini, OpenAI GPT-4o
- **Long Documents:** Anthropic Claude (200k context)
- **Multilingual:** Qwen, Google Gemini
- **Real-time Info:** xAI Grok

---

## Configuration Tips

### Multiple Profiles Strategy

Set up different profiles for different needs:

```bash
# Main work profile
rawi configure --profile work --provider openai --model gpt-4o

# Privacy-focused profile
rawi configure --profile private --provider ollama --model llama3.2

# Cost-efficient profile
rawi configure --profile budget --provider openai --model gpt-3.5-turbo

# Analysis profile
rawi configure --profile analysis --provider anthropic --model claude-3-sonnet-20240229
```

### Fallback Configuration

Set up fallbacks for reliability:

```bash
# Primary: Cloud provider
rawi configure --profile primary --provider openai --model gpt-4o

# Fallback: Local provider
rawi configure --profile fallback --provider ollama --model llama3.2
```

## Troubleshooting

### Common Issues

**API Key Problems:**

```bash
# Verify API key configuration
rawi info --profiles

# Test connectivity
rawi ask "test" --profile your-profile
```

**Local Provider Issues:**

```bash
# Check Ollama status
ollama list
ollama ps

# Restart Ollama service
ollama serve
```

**Model Not Found:**

```bash
# List available models
rawi provider --list-models your-provider

# Update model list
ollama pull model-name  # For Ollama
```

### Performance Optimization

**For Local Providers:**

- Use GPU acceleration when available
- Ensure sufficient RAM (8GB+ recommended)
- Use SSD storage for model files

**For Cloud Providers:**

- Choose models appropriate for your use case
- Monitor API usage and costs
- Use appropriate timeouts

---

## Related Documentation

- [🚀 Quick Start Guide](../quickstart.md)
- [⚙️ Configuration Command](../commands/configure.md)
- [🔍 Provider Command](../commands/provider.md)
- [🗣️ Ask Command](../commands/ask.md)

---

**Next Steps:**

- [Configure your first provider](../commands/configure.md)
- [Start using AI assistance](../commands/ask.md)
- [Explore expert templates](../templates/README.md)
