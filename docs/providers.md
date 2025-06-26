# AI Providers Guide

Comprehensive guide to all AI providers supported by Rawi, including setup instructions, model details, and best practices.

## 🌟 Provider Overview

| Provider                          | Status    | API Key    | Local | Best For                    |
| --------------------------------- | --------- | ---------- | ----- | --------------------------- |
| [OpenAI](#openai)                 | ✅ Active | Required   | ❌    | General purpose, coding     |
| [Anthropic](#anthropic)           | ✅ Active | Required   | ❌    | Safety, long-form content   |
| [Google](#google)                 | ✅ Active | Required   | ❌    | Fast inference, multimodal  |
| [Ollama](#ollama)                 | ✅ Active | Not needed | ✅    | Privacy, offline, free      |
| [Azure OpenAI](#azure-openai)     | ✅ Active | Required   | ❌    | Enterprise, compliance      |
| [Amazon Bedrock](#amazon-bedrock) | ✅ Active | AWS Creds  | ❌    | AWS integration, enterprise |
| [Qwen](#qwen)                     | ✅ Active | Required   | ❌    | Multilingual, Chinese       |
| [xAI](#xai)                       | ✅ Active | Required   | ❌    | Real-time, conversational   |

---

## 🔵 OpenAI

**Best for**: General-purpose AI tasks, code generation, analysis, and creative writing.

### Setup

#### Quick Setup

```bash
rawi configure --provider openai --model gpt-4o --api-key sk-your-key
```

#### Interactive Setup

```bash
rawi configure --provider openai
```

#### Get API Key

1. Visit [OpenAI API Keys](https://platform.openai.com/api-keys)
2. Create new secret key
3. Copy the key (starts with `sk-`)

### Available Models

| Model           | Context | Best For                  | Cost |
| --------------- | ------- | ------------------------- | ---- |
| `gpt-4o`        | 128K    | Latest, most capable      | $$$  |
| `gpt-4o-mini`   | 128K    | Fast, cost-effective      | $    |
| `gpt-4-turbo`   | 128K    | High-quality reasoning    | $$$  |
| `gpt-4`         | 8K      | Reliable, proven          | $$$  |
| `gpt-3.5-turbo` | 16K     | Fast, affordable          | $    |
| `o1-preview`    | 128K    | Complex reasoning         | $$$$ |
| `o1-mini`       | 128K    | Reasoning, cost-effective | $$   |

### Configuration Options

```bash
# Basic configuration
rawi configure \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-key

# Advanced configuration
rawi configure \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-key \
  --temperature 0.7 \
  --max-tokens 4096 \
  --base-url https://api.openai.com/v1
```

### Best Practices

- **Use GPT-4o** for most tasks (best performance/cost ratio)
- **Use GPT-3.5-turbo** for simple questions to save costs
- **Use O1 models** for complex reasoning and math problems
- **Set temperature 0.3-0.7** for factual responses
- **Set temperature 0.8-1.2** for creative tasks

### Example Usage

```bash
# Code generation
rawi ask "Create a React component for user authentication" --profile openai

# Code review
git diff | rawi ask "Review this code" --profile openai

# Debugging
rawi ask "Why is my Python script throwing a TypeError?" --profile openai
```

---

## 🟣 Anthropic

**Best for**: Safety-conscious applications, long-form content, and detailed analysis.

### Setup

#### Quick Setup

```bash
rawi configure --provider anthropic --model claude-3-5-sonnet-20241022 --api-key sk-ant-your-key
```

#### Get API Key

1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Generate new API key
3. Copy the key (starts with `sk-ant-`)

### Available Models

| Model                        | Context | Best For             | Cost |
| ---------------------------- | ------- | -------------------- | ---- |
| `claude-3-5-sonnet-20241022` | 200K    | Latest, most capable | $$$  |
| `claude-3-5-haiku-20241022`  | 200K    | Fast, cost-effective | $    |
| `claude-3-sonnet-20240229`   | 200K    | Balanced performance | $$   |
| `claude-3-haiku-20240307`    | 200K    | Speed and efficiency | $    |

### Configuration Options

```bash
# Basic configuration
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

### Best Practices

- **Use Claude 3.5 Sonnet** for complex analysis and reasoning
- **Use Claude 3.5 Haiku** for quick questions and cost savings
- **Great for** ethical analysis, content moderation, and safety checks
- **Excellent context** handling (200K tokens)
- **Strong at** following instructions precisely

### Example Usage

```bash
# Safety analysis
rawi ask "Review this user-generated content for safety issues" --profile claude

# Long document analysis
cat long-document.md | rawi ask "Summarize key points and recommendations" --profile claude

# Ethical considerations
rawi ask "What are the ethical implications of this AI feature?" --profile claude
```

---

## 🔴 Google

**Best for**: Fast inference, multimodal tasks, and integrated Google services.

### Setup

#### Quick Setup

```bash
rawi configure --provider google --model gemini-2.0-flash-exp --api-key AIza-your-key
```

#### Get API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create API key
3. Copy the key (starts with `AIza`)

### Available Models

| Model                  | Context | Best For               | Cost |
| ---------------------- | ------- | ---------------------- | ---- |
| `gemini-2.0-flash-exp` | 1M      | Latest, experimental   | $$   |
| `gemini-1.5-pro`       | 2M      | High-quality reasoning | $$$  |
| `gemini-1.5-flash`     | 1M      | Fast, efficient        | $    |
| `gemini-1.0-pro`       | 32K     | Reliable, proven       | $    |

### Configuration Options

```bash
# Basic configuration
rawi configure \
  --provider google \
  --model gemini-2.0-flash-exp \
  --api-key AIza-your-key

# With custom base URL
rawi configure \
  --provider google \
  --model gemini-1.5-pro \
  --api-key AIza-your-key \
  --base-url https://generativelanguage.googleapis.com/v1beta
```

### Best Practices

- **Use Gemini 2.0 Flash** for latest capabilities
- **Use Gemini 1.5 Pro** for complex reasoning tasks
- **Excellent** large context handling (up to 2M tokens)
- **Fast** inference times
- **Good** for code analysis and generation

### Example Usage

```bash
# Large file analysis
cat huge-dataset.json | rawi ask "Analyze this data structure" --profile google

# Fast responses
rawi ask "Quick explanation of Docker containers" --profile google

# Code optimization
rawi ask "Optimize this algorithm for performance" --profile google
```

---

## 🟢 Ollama

**Best for**: Privacy, offline usage, free local AI, and sensitive data.

### Setup

#### 1. Install Ollama

**macOS:**

```bash
brew install ollama
```

**Linux:**

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

**Windows:**
Download from [ollama.com/download](https://ollama.com/download)

#### 2. Start Ollama Service

```bash
ollama serve
```

#### 3. Pull a Model

```bash
# Popular models
ollama pull llama3.2        # 3B parameters, good balance
ollama pull llama3.1:8b     # 8B parameters, better quality
ollama pull codellama       # Optimized for code
ollama pull mistral         # Fast and efficient
ollama pull qwen2.5         # Multilingual support
```

#### 4. Configure Rawi

```bash
rawi configure --provider ollama --model llama3.2
```

### Available Models

| Model            | Size | Best For            | Speed  |
| ---------------- | ---- | ------------------- | ------ |
| `llama3.2`       | 3B   | General tasks, fast | ⚡⚡⚡ |
| `llama3.1:8b`    | 8B   | Better quality      | ⚡⚡   |
| `codellama`      | 7B   | Code generation     | ⚡⚡   |
| `mistral`        | 7B   | Efficient reasoning | ⚡⚡   |
| `qwen2.5`        | 7B   | Multilingual        | ⚡⚡   |
| `phi3`           | 3.8B | Microsoft model     | ⚡⚡⚡ |
| `deepseek-coder` | 6.7B | Code specialist     | ⚡⚡   |

### Configuration Options

```bash
# Basic configuration
rawi configure \
  --provider ollama \
  --model llama3.2

# Custom Ollama host
rawi configure \
  --provider ollama \
  --model llama3.2 \
  --base-url http://192.168.1.100:11434/api
```

### Best Practices

- **Start with llama3.2** for good balance of speed and quality
- **Use codellama** specifically for coding tasks
- **Choose smaller models** (3B-7B) for faster responses
- **Choose larger models** (8B+) for better quality
- **Run on local machine** for best privacy
- **Use GPU** if available for faster inference

### Hardware Requirements

| Model Size | RAM Required | GPU VRAM | Speed  |
| ---------- | ------------ | -------- | ------ |
| 3B         | 4GB          | 2GB      | Fast   |
| 7B         | 8GB          | 4GB      | Medium |
| 8B         | 12GB         | 6GB      | Medium |
| 13B        | 16GB         | 8GB      | Slower |

### Example Usage

```bash
# Private code review
cat sensitive-code.py | rawi ask "Review this code" --profile local

# Offline development
rawi ask "Create a Python function for encryption" --profile ollama

# Learning without data sharing
rawi ask "Explain machine learning concepts" --profile privacy
```

---

## 🔷 Azure OpenAI

**Best for**: Enterprise applications, compliance requirements, and Microsoft ecosystem integration.

### Setup

#### Prerequisites

1. Azure subscription
2. Azure OpenAI resource
3. Model deployment

#### Quick Setup

```bash
rawi configure \
  --provider azure \
  --model your-deployment-name \
  --api-key your-azure-key \
  --resource-name your-resource-name
```

#### Get Credentials

1. Visit [Azure Portal](https://portal.azure.com)
2. Navigate to your Azure OpenAI resource
3. Go to "Keys and Endpoint"
4. Copy Key and Endpoint

### Available Models

Models depend on your Azure OpenAI deployment:

| Base Model    | Deployment Name | Best For            |
| ------------- | --------------- | ------------------- |
| GPT-4o        | gpt-4o          | Latest capabilities |
| GPT-4         | gpt-4           | High quality        |
| GPT-3.5-turbo | gpt-35-turbo    | Cost effective      |

### Configuration Options

```bash
# Complete Azure setup
rawi configure \
  --provider azure \
  --model your-deployment-name \
  --api-key your-azure-key \
  --resource-name your-resource-name \
  --api-version 2024-10-01-preview
```

### Best Practices

- **Use deployment names** (not model names) for `--model`
- **Keep API version updated** for latest features
- **Monitor usage** through Azure portal
- **Set up proper RBAC** for team access
- **Use managed identity** in Azure environments

### Example Usage

```bash
# Enterprise code review
rawi ask "Review this enterprise application code" --profile azure-prod

# Compliance-focused analysis
rawi ask "Check this code for GDPR compliance" --profile azure-compliance
```

---

## 🟠 Amazon Bedrock

**Best for**: AWS integration, enterprise scale, and managed AI services.

### Setup

#### Prerequisites

1. AWS account
2. Bedrock access enabled
3. Model access requested

#### Using AWS Credential Provider Chain

```bash
# Uses AWS CLI, environment variables, or IAM roles
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

### Available Models

| Model ID                                    | Provider  | Best For        |
| ------------------------------------------- | --------- | --------------- |
| `anthropic.claude-3-5-sonnet-20241022-v2:0` | Anthropic | Latest Claude   |
| `anthropic.claude-3-sonnet-20240229-v1:0`   | Anthropic | Balanced Claude |
| `anthropic.claude-3-haiku-20240307-v1:0`    | Anthropic | Fast Claude     |
| `meta.llama3-1-8b-instruct-v1:0`            | Meta      | Open source     |
| `amazon.titan-text-premier-v1:0`            | Amazon    | Titan models    |

### Configuration Options

```bash
# With provider chain (recommended)
rawi configure \
  --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --use-provider-chain \
  --region us-west-2

# With explicit credentials
rawi configure \
  --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --access-key-id AKIA... \
  --secret-access-key your-secret \
  --region us-east-1
```

### Best Practices

- **Use provider chain** in AWS environments (EC2, Lambda, ECS)
- **Request model access** before configuration
- **Choose appropriate region** for latency and compliance
- **Monitor costs** through AWS Cost Explorer
- **Use IAM policies** for access control

### Example Usage

```bash
# AWS-integrated analysis
rawi ask "Review this CloudFormation template" --profile bedrock-aws

# Scalable processing
rawi ask "Analyze this application architecture" --profile bedrock-enterprise
```

---

## 🟡 Qwen

**Best for**: Multilingual tasks, Chinese language processing, and Alibaba Cloud integration.

### Setup

#### Quick Setup

```bash
rawi configure --provider qwen --model qwen-max --api-key sk-your-qwen-key
```

#### Get API Key

1. Visit [Dashscope Console](https://dashscope.console.aliyun.com/)
2. Create API key
3. Copy the key

### Available Models

| Model        | Parameters | Best For                    | Cost |
| ------------ | ---------- | --------------------------- | ---- |
| `qwen-max`   | Latest     | Most capable, complex tasks | $$$  |
| `qwen-plus`  | Mid-tier   | Balanced performance        | $$   |
| `qwen-turbo` | Efficient  | Fast responses              | $    |

### Configuration Options

```bash
# Basic configuration
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

### Best Practices

- **Use qwen-max** for complex multilingual tasks
- **Use qwen-turbo** for quick responses
- **Excellent** for Chinese language processing
- **Good** multilingual capabilities
- **Integrated** with Alibaba Cloud services

### Example Usage

```bash
# Multilingual translation
rawi ask "Translate this to Chinese and explain cultural context" --profile qwen

# Chinese language analysis
rawi ask "分析这段代码的性能问题" --profile qwen-chinese
```

---

## 🤖 xAI

**Best for**: Real-time information, conversational AI, and Grok capabilities.

### Setup

#### Quick Setup

```bash
rawi configure --provider xai --model grok-beta --api-key xai-your-key
```

#### Get API Key

1. Visit [xAI Console](https://console.x.ai/)
2. Generate API key
3. Copy the key (starts with `xai-`)

### Available Models

| Model         | Context | Best For                 | Features           |
| ------------- | ------- | ------------------------ | ------------------ |
| `grok-beta`   | 128K    | Latest Grok capabilities | Real-time data     |
| `grok-2-1212` | 128K    | Grok 2 (December 2024)   | Improved reasoning |

### Configuration Options

```bash
# Basic configuration
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

### Best Practices

- **Use Grok-beta** for latest features
- **Good for** conversational interactions
- **Strong** real-time information access
- **Unique** perspective and personality

### Example Usage

```bash
# Real-time questions
rawi ask "What's happening in the tech world today?" --profile xai

# Conversational analysis
rawi ask "Give me a witty analysis of this code" --profile grok
```

---

## 🔄 Provider Comparison

### Performance Comparison

| Provider  | Speed    | Quality    | Context | Cost | Privacy    |
| --------- | -------- | ---------- | ------- | ---- | ---------- |
| OpenAI    | ⚡⚡⚡   | ⭐⭐⭐⭐⭐ | 128K    | $$$  | Cloud      |
| Anthropic | ⚡⚡     | ⭐⭐⭐⭐⭐ | 200K    | $$$  | Cloud      |
| Google    | ⚡⚡⚡⚡ | ⭐⭐⭐⭐   | 2M      | $$   | Cloud      |
| Ollama    | ⚡⚡     | ⭐⭐⭐     | 32K     | Free | Local      |
| Azure     | ⚡⚡⚡   | ⭐⭐⭐⭐⭐ | 128K    | $$$  | Enterprise |
| Bedrock   | ⚡⚡     | ⭐⭐⭐⭐   | 200K    | $$$  | AWS        |
| Qwen      | ⚡⚡⚡   | ⭐⭐⭐⭐   | 32K     | $$   | Cloud      |
| xAI       | ⚡⚡⚡   | ⭐⭐⭐     | 128K    | $$   | Cloud      |

### Use Case Recommendations

| Use Case                | Recommended Provider    | Alternative            |
| ----------------------- | ----------------------- | ---------------------- |
| **General Development** | OpenAI (GPT-4o)         | Anthropic (Claude 3.5) |
| **Code Review**         | Anthropic (Claude 3.5)  | OpenAI (GPT-4o)        |
| **Privacy/Sensitive**   | Ollama (Llama 3.2)      | -                      |
| **Enterprise**          | Azure OpenAI            | Amazon Bedrock         |
| **Large Documents**     | Google (Gemini 1.5 Pro) | Anthropic (Claude 3.5) |
| **Multilingual**        | Qwen                    | Google (Gemini)        |
| **Real-time Info**      | xAI (Grok)              | -                      |
| **Cost-Effective**      | Google (Gemini Flash)   | Qwen (Turbo)           |

---

## 🛠️ Advanced Provider Configuration

### Environment Variables

Override configuration with environment variables:

```bash
# Provider-specific overrides
export RAWI_OPENAI_API_KEY="sk-your-key"
export RAWI_ANTHROPIC_API_KEY="sk-ant-your-key"
export RAWI_GOOGLE_API_KEY="AIza-your-key"

# General overrides
export RAWI_PROVIDER="openai"
export RAWI_MODEL="gpt-4o"
export RAWI_TEMPERATURE="0.8"
```

### Multiple Profiles by Provider

```bash
# Create provider-specific profiles
rawi configure --profile openai-dev --provider openai --model gpt-4o
rawi configure --profile openai-prod --provider openai --model gpt-4
rawi configure --profile claude-analysis --provider anthropic --model claude-3-5-sonnet-20241022
rawi configure --profile ollama-privacy --provider ollama --model llama3.2
```

### Provider Switching Workflow

```bash
#!/bin/bash
# switch-provider.sh - Quick provider switching

case $1 in
  "fast")
    rawi ask "$2" --profile google-flash
    ;;
  "quality")
    rawi ask "$2" --profile claude-sonnet
    ;;
  "privacy")
    rawi ask "$2" --profile ollama-local
    ;;
  "cheap")
    rawi ask "$2" --profile openai-mini
    ;;
  *)
    echo "Usage: $0 {fast|quality|privacy|cheap} 'your question'"
    ;;
esac
```

For troubleshooting provider-specific issues, see [Troubleshooting Guide](./troubleshooting.md).
