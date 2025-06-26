<div align="center">
  <img src="./.github/logo.svg" alt="Rawi Logo" width="800"/>
</div>

# Rawi (راوي)

<div align="center">
  <a href="https://github.com/MKAbuMattar/rawi" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
  </a>

  <a href="https://github.com/MKAbuMattar/rawi/releases" target="_blank" rel="noreferrer">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/MKAbuMattar/rawi?color=%23ce712e&label=Latest%20release&style=for-the-badge&logo=github" />
  </a>

  <a href="https://www.npmjs.com/package/rawi/v/latest" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/npm/v/rawi/latest?style=for-the-badge&logo=npm&logoColor=white&color=ce712e" alt="Latest NPM Version"/>
  </a>

  <a href="https://www.npmjs.com/package/rawi/v/beta" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/npm/v/rawi/beta?style=for-the-badge&logo=npm&logoColor=white&color=ce712e" alt="Beta NPM Version"/>
  </a>

  <a href="/LICENSE" target="_blank" rel="noreferrer">
    <img alt="GitHub License" src="https://img.shields.io/github/license/MKAbuMattar/rawi?color=%23ce712e&style=for-the-badge">
  </a>

  <a href="https://github.com/MKAbuMattar/rawi/stargazers" target="_blank" rel="noreferrer">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/MKAbuMattar/rawi?color=%23ce712e&label=GitHub%20Stars&style=for-the-badge">
  </a>
</div>

<div align="center">

> _Bringing the art of storytelling to your command line._

</div>

**Rawi** (راوي) is a developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses directly in your terminal. Inspired by the rich Jordanian storytelling tradition, Rawi transforms your command line into an intelligent assistant for your development workflow.

---

## ✨ Features

- **Multi-Provider Support**: 8 AI providers (OpenAI, Anthropic, Google, Ollama (local), Azure, Bedrock, Qwen, xAI)
- **Profile Management**: Multiple configurations for different projects and teams
- **Shell Integration**: Works perfectly with pipes, redirects, and automation
- **Privacy First**: Local AI support with Ollama for sensitive data
- **Session & History**: Persistent chat history and session management
- **Developer Focused**: Built for coding workflows and technical tasks

---

## 🚀 Quick Start

```bash
# Install globally
npm install -g rawi

# Configure your first provider (interactive)
rawi configure

# Ask your first question
rawi ask "What is TypeScript?"
```

---

## 📚 Documentation

- [Getting Started](docs/getting-started.md)
- [Configuration Guide](docs/configuration.md)
- [CLI Commands Reference](docs/commands.md)
- [Providers Guide](docs/providers.md)
- [Usage Examples](docs/examples.md)
- [API Reference](docs/api.md)
- [Architecture](docs/architecture.md)
- [Development Guide](docs/development.md)
- [Troubleshooting](docs/troubleshooting.md)
- [FAQ](docs/faq.md)

---

## 🤖 Supported AI Providers

| Provider           | Models                                          | API Key Required | Local Support |
| ------------------ | ----------------------------------------------- | ---------------- | ------------- |
| **OpenAI**         | GPT-4o, GPT-4, GPT-3.5, O1, O3                  | ✅               | ❌            |
| **Anthropic**      | Claude 3.5 Sonnet, Claude 4, Haiku              | ✅               | ❌            |
| **Google**         | Gemini 2.0 Flash, Gemini 1.5 Pro/Flash          | ✅               | ❌            |
| **Ollama**         | Llama 3.2, Mistral, CodeLlama, Qwen + 100+ more | ❌               | ✅            |
| **Azure OpenAI**   | Enterprise OpenAI models                        | ✅               | ❌            |
| **Amazon Bedrock** | Claude, Llama, Titan                            | ✅               | ❌            |
| **Qwen**           | Qwen-Max, Qwen-Plus, Qwen-Turbo                 | ✅               | ❌            |
| **xAI**            | Grok-Beta, Grok-2                               | ✅               | ❌            |

---

## 🏗️ Architecture Overview

See [docs/architecture.md](docs/architecture.md) for a detailed diagram and explanation.

```
src/
├── cli/             # Command-line interface
│   ├── commands/    # Individual commands (ask, configure, history, info)
│   └── program.ts   # Main CLI program setup
├── config/          # Configuration management
│   ├── providers/   # AI provider configurations
│   ├── manager.ts   # Config file handling
│   └── utils.ts     # Configuration utilities
├── database/        # Chat history and session management
│   ├── schema/      # Database schema definitions
│   ├── adapter.ts   # Database adapter
│   └── manager.ts   # Database operations
├── shared/          # Shared utilities and types
│   ├── types.ts     # TypeScript type definitions
│   ├── constants.ts # Application constants
│   ├── utils.ts     # Utility functions
│   └── spinner.ts   # Loading indicators
└── data/            # Static data and prompts
```

---

## � Example Usage

```bash
# Code review with pipe
cat src/app.js | rawi ask "Review this code for security issues"

# Generate commit messages
git diff | rawi ask "Write a conventional commit message"

# Analyze data
curl -s api.example.com/data | rawi ask "Summarize this API response"

# Continue a conversation
rawi ask "Explain TypeScript generics" --session abc123
rawi ask "Show me an example" --session abc123

# Use different providers
rawi ask "Optimize this SQL query" -p production-profile
```

---

## � Security & Privacy

- **API Keys**: Stored locally and encrypted
- **Local AI**: Ollama support for complete privacy
- **No Telemetry**: Zero data collection or tracking
- **Secure Storage**: Credentials stored in home directory with proper permissions

---

## 🌍 Internationalization

- **English** (default)
- **Arabic** (راوي)

---

## �️ Development

See [docs/development.md](docs/development.md) for setup, build, and contribution guidelines.

---

## � License

MIT License - see [LICENSE](LICENSE) for details.

---

## 👥 Contributing

See [docs/development.md](docs/development.md) for contribution guidelines.

- [📄 License](#-license)

## 📦 Installation

### System Requirements

- **Node.js**: 18.0.0 or higher
- **Package Manager**: npm, pnpm, or yarn
- **Operating System**: Windows, macOS, or Linux

### Install Options

#### Global Installation (Recommended)

```bash
# Using npm
npm install -g rawi

# Using pnpm (faster)
pnpm add -g rawi

# Using yarn
yarn global add rawi
```

#### Alternative: Run without installing

```bash
# Use with npx (always gets latest version)
npx rawi ask "Hello, world!"

# Use with pnpm
pnpm dlx rawi configure
```

#### Development/Beta Versions

```bash
# Install beta versions
npm install -g rawi@beta

# Install from GitHub (latest main branch)
npm install -g MKAbuMattar/rawi
```

### Verify Installation

```bash
rawi --version
rawi info
```

## 🚀 Quick Start

Get up and running with Rawi in under 2 minutes:

```bash
# 1. Install Rawi globally
npm install -g rawi

# 2. Configure your first AI provider (interactive setup)
rawi configure

# 3. Start asking questions!
rawi ask "What is the difference between JavaScript and TypeScript?"

# 4. Use with your development workflow
git diff | rawi ask "Write a commit message for these changes"
```

**🎯 Choose Your Setup Style:**

- **Interactive** (recommended for first-time users): `rawi configure`
- **Command-line** (for automation): `rawi configure --provider openai --api-key YOUR_KEY --model gpt-4o`
- **Local/Privacy-first**: `rawi configure --provider ollama --model llama3.2` (no API key needed)

## ⚙️ Configuration

Rawi supports multiple configuration methods to fit your workflow, from interactive setup to fully automated deployment.

### 🎯 Interactive Setup (Recommended for First-Time Users)

The interactive mode provides a guided, step-by-step experience:

```bash
# Configure default profile
rawi configure

# Configure a named profile
rawi configure -p work-profile
```

**What the interactive setup covers:**

- ✅ AI provider selection with descriptions
- ✅ Model recommendations based on use case
- ✅ API credential setup (with validation)
- ✅ Performance tuning (temperature, max tokens)
- ✅ Language and response preferences

### ⚡ Command-Line Setup (Perfect for Automation)

For scripts, CI/CD, and power users who know exactly what they want:

```bash
# OpenAI setup
rawi configure -p openai-profile \
  --provider openai \
  --api-key $OPENAI_API_KEY \
  --model gpt-4o \
  --temperature 0.7 \
  --max-tokens 2048

# Local Ollama (no API key required)
rawi configure -p local-profile \
  --provider ollama \
  --model llama3.2 \
  --base-url http://localhost:11434

# Anthropic Claude
rawi configure -p claude-profile \
  --provider anthropic \
  --api-key $ANTHROPIC_API_KEY \
  --model claude-3-5-sonnet-latest

# Google Gemini
rawi configure -p gemini-profile \
  --provider google \
  --api-key $GOOGLE_AI_API_KEY \
  --model gemini-2.0-flash-exp

# Azure OpenAI
rawi configure -p azure-profile \
  --provider azure \
  --api-key $AZURE_OPENAI_API_KEY \
  --resource-name your-resource-name \
  --model your-deployment-name

# Amazon Bedrock (with AWS credentials)
rawi configure -p bedrock-profile \
  --provider bedrock \
  --model anthropic.claude-3-5-sonnet-20241022-v2:0 \
  --region us-east-1 \
  --access-key-id $AWS_ACCESS_KEY_ID \
  --secret-access-key $AWS_SECRET_ACCESS_KEY

# Amazon Bedrock (with AWS credential chain)
rawi configure -p bedrock-aws-profile \
  --provider bedrock \
  --model anthropic.claude-3-5-sonnet-20241022-v2:0 \
  --use-provider-chain

# Qwen (Alibaba Cloud)
rawi configure -p qwen-profile \
  --provider qwen \
  --api-key $QWEN_API_KEY \
  --model qwen-max

# xAI Grok
rawi configure -p grok-profile \
  --provider xai \
  --api-key $XAI_API_KEY \
  --model grok-beta
```

### 📋 Configuration Management

```bash
# List all available providers
rawi configure --list-providers

# List models for a specific provider
rawi configure --list-models openai
rawi configure --list-models anthropic
rawi configure --list-models ollama

# View configurations
rawi configure --show                    # Default profile
rawi configure -p work-profile --show    # Specific profile
rawi configure --list                    # All profiles

# Profile management
rawi configure --delete old-profile      # Delete a profile
```

### 🎛️ Advanced Options

```bash
# Fine-tune AI behavior
rawi configure -p creative --temperature 1.2     # More creative responses
rawi configure -p precise --temperature 0.1      # More focused responses
rawi configure -p brief --max-tokens 500         # Shorter responses
rawi configure -p detailed --max-tokens 4000     # Longer responses

# Language preferences
rawi configure -p arabic --language arabic       # Arabic responses
rawi configure -p english --language english     # English responses (default)

# Custom base URLs (for OpenAI-compatible APIs)
rawi configure -p custom --base-url https://api.custom-ai.com/v1
```

## 💬 Usage & Examples

### 🗣️ Basic Usage

```bash
# Simple questions
rawi ask "What is the difference between JavaScript and TypeScript?"
rawi ask "Explain how async/await works in JavaScript"
rawi ask "How do I optimize a PostgreSQL query?"

# Use specific profiles
rawi ask -p claude-profile "Explain quantum computing"
rawi ask -p local-profile "Review this confidential code"
```

### � Shell Integration & Workflow Examples

Rawi excels when integrated into your existing development workflow:

#### Code Analysis & Review

```bash
# Review current changes
git diff | rawi ask "Review these changes for potential issues"

# Analyze specific files
cat src/app.js | rawi ask "Find security vulnerabilities in this code"
rawi ask "Explain this function" < utils/helper.js

# Code quality assessment
find . -name "*.js" -exec cat {} + | rawi ask "Analyze code quality and suggest improvements"
```

#### Documentation & Content Generation

```bash
# Generate documentation
rawi ask "Create JSDoc comments for this function" < function.js > documented.js

# README generation
rawi ask "Create a comprehensive README for this project" > README.md

# API documentation
cat api-spec.json | rawi ask "Generate user-friendly API documentation"
```

#### Git Workflow Integration

```bash
# Smart commit messages
git diff --staged | rawi ask "Generate a conventional commit message"

# Release notes
git log --oneline $(git describe --tags --abbrev=0)..HEAD | \
  rawi ask "Create release notes from these commits"

# Branch summaries
git log --oneline main..feature-branch | \
  rawi ask "Summarize the changes in this feature branch"
```

#### Data Analysis & Processing

```bash
# CSV analysis
cat sales_data.csv | rawi ask "Analyze trends and provide insights"

# Log analysis
tail -n 100 /var/log/app.log | rawi ask "Identify error patterns and suggest fixes"

# JSON processing
curl -s https://api.github.com/users/octocat | \
  rawi ask "Summarize this GitHub user profile"
```

#### Development Workflow

```bash
# Error debugging
npm test 2>&1 | rawi ask "Explain these test failures and suggest fixes"

# Performance analysis
cat performance-report.json | rawi ask "Identify performance bottlenecks"

# Dependency analysis
npm audit --json | rawi ask "Prioritize these security vulnerabilities"
```

### 🎯 Advanced Usage Patterns

#### Multi-step Workflows

```bash
# Generate and process
rawi ask "Create 10 test user records in JSON format" | \
  jq '.[] | select(.age > 25)' | \
  rawi ask "Convert this filtered data to SQL INSERT statements"

# Chain analysis
cat config.yaml | \
  rawi ask "Validate this configuration and suggest improvements" | \
  tee config-review.md
```

#### Template and Scripting

```bash
#!/bin/bash
# Smart deploy script
CHANGES=$(git diff --name-only HEAD~1)
SUMMARY=$(echo "$CHANGES" | rawi ask "Assess deployment risk for these files")
echo "Deploy Risk Assessment: $SUMMARY"

if [[ "$SUMMARY" =~ "high risk" ]]; then
  echo "⚠️  High risk deployment detected. Manual review required."
  exit 1
fi
```

#### Cross-Platform Integration

```bash
# PowerShell (Windows)
Get-ChildItem *.cs | Get-Content | rawi ask "Review this C# code for best practices"

# With jq for JSON processing
rawi ask "Generate sample API response" | jq '.data[0]' | rawi ask "Validate this schema"

# With grep for filtering
rawi ask "List common JavaScript errors" | grep -i "reference" | head -5
```

### 👤 Profile-Based Workflows

```bash
# Different models for different tasks
rawi ask -p creative-gpt4 "Write a technical blog post about WebAssembly"
rawi ask -p precise-claude "Perform detailed code review" < critical-component.js
rawi ask -p local-llama "Analyze sensitive data" < private-logs.txt
rawi ask -p fast-gemini "Quick syntax check" < script.py
```

## 📚 Commands Reference

### `rawi ask`

Ask questions and get AI-powered responses.

```bash
rawi ask [query] [options]

Options:
  -p, --profile <profile>    Use specific configuration profile (default: "default")
  --session <sessionId>      Continue an existing chat session
  --new-session             Start a new chat session
  --act <template>          Use an act template (e.g., ethereum-developer)
  --list-acts               List all available act templates
  --show                    Show details of the specified act template (use with --act)
  -h, --help                Display help information

Examples:
  rawi ask "How does Docker work?"
  rawi ask -p claude-profile "Explain machine learning"
  echo "console.log('hello')" | rawi ask "What does this code do?"

  # Using act templates
  rawi ask --list-acts
  rawi ask --act ethereum-developer "explain smart contract security"
  rawi ask -p ollama --act linux-terminal "ls -la /home"
```

### `rawi configure`

Manage AI provider configurations and profiles.

```bash
rawi configure [options]

Configuration Options:
  -p, --profile <profile>              Profile name (default: "default")
  --provider <provider>                AI provider (openai, anthropic, google, ollama, xai, azure, bedrock, qwen)
  --model <model>                      AI model name
  --api-key <key>                      API key (not needed for Ollama)
  --base-url <url>                     Custom base URL for API
  --temperature <temp>                 Creativity level (0.0-2.0)
  --max-tokens <tokens>                Maximum response length
  --language <lang>                    Response language (english, arabic)

Azure-specific:
  --resource-name <name>               Azure resource name (required)
  --api-version <version>              API version (default: 2024-10-01-preview)

Bedrock-specific:
  --region <region>                    AWS region (default: us-east-1)
  --access-key-id <key>                AWS access key
  --secret-access-key <key>            AWS secret key
  --session-token <token>              AWS session token (optional)
  --use-provider-chain                 Use AWS credential provider chain

Management Options:
  --show                               Show current configuration
  --list                               List all profiles
  --list-providers                     List available AI providers
  --list-models <provider>             List models for specific provider
  --delete <profile>                   Delete a profile

Examples:
  rawi configure                                    # Interactive setup
  rawi configure --list-providers                   # Show all providers
  rawi configure --list-models openai               # Show OpenAI models
  rawi configure -p work --show                     # Show work profile
```

### `rawi info`

Display information about Rawi and its capabilities.

```bash
rawi info

Example:
  rawi info    # Shows version, author, and description
```

## 🤖 Supported AI Providers

Rawi supports 8 major AI providers with their latest models:

### 🔵 OpenAI

**Models**: GPT-4o, GPT-4-turbo, GPT-3.5-turbo, O1, O3, and more

- **API Key**: Required (get from [OpenAI Platform](https://platform.openai.com/api-keys))
- **Best for**: General-purpose tasks, coding, analysis
- **Custom Base URL**: Supported for OpenAI-compatible APIs

### 🟣 Anthropic (Claude)

**Models**: Claude 3.5 Sonnet, Claude 4, Claude 3 Haiku, and more

- **API Key**: Required (get from [Anthropic Console](https://console.anthropic.com/))
- **Best for**: Long-form content, analysis, safety-conscious tasks
- **Context Length**: Up to 200K tokens

### 🔴 Google (Gemini)

**Models**: Gemini 2.0 Flash, Gemini 1.5 Pro, Gemini 1.5 Flash, and more

- **API Key**: Required (get from [Google AI Studio](https://aistudio.google.com/))
- **Best for**: Multimodal tasks, real-time applications
- **Features**: Fast inference, large context windows

### 🟢 Ollama (Local AI)

**Models**: 100+ local models including Llama 3.2, Mistral, CodeLlama, Qwen, Phi, and more

- **API Key**: Not required (runs locally)
- **Best for**: Privacy, offline usage, local development
- **Setup**: Install [Ollama](https://ollama.ai/) and pull models locally
- **Benefits**: Free, private, offline capable

### 🔷 Azure OpenAI

**Models**: Enterprise versions of OpenAI models

- **API Key**: Required (Azure subscription needed)
- **Resource Name**: Your Azure OpenAI resource name required
- **Best for**: Enterprise applications, compliance requirements
- **Features**: Enterprise-grade security, SLA guarantees

### 🟠 Amazon Bedrock

**Models**: Claude, Llama, Titan, and more AWS-hosted models

- **Credentials**: AWS credentials or IAM roles
- **Best for**: AWS-integrated applications, enterprise scalability
- **Setup**: AWS account with Bedrock access required
- **Authentication**: Supports AWS credential chain or explicit keys

### 🟡 Qwen (Alibaba Cloud)

**Models**: Qwen-Max, Qwen-Plus, Qwen-Turbo, and specialized models

- **API Key**: Required (Alibaba Cloud account)
- **Best for**: Multilingual tasks, Chinese language processing
- **Features**: Strong performance in Asian languages

### 🤖 xAI (Grok)

**Models**: Grok-Beta, Grok-2, and other xAI models

- **API Key**: Required (xAI account)
- **Best for**: Real-time information, conversational AI
- **Features**: Access to real-time data, witty responses

## 🎯 Real-World Use Cases

### 👨‍💻 Development Workflows

**Code Review & Quality Assurance**

```bash
# Pre-commit hooks
git diff --cached | rawi ask "Review staged changes for issues"

# Pull request analysis
gh pr diff 123 | rawi ask "Summarize changes and identify potential risks"

# Code architecture review
find src/ -name "*.ts" | head -10 | xargs cat | \
  rawi ask "Analyze architecture patterns and suggest improvements"
```

**Debugging & Troubleshooting**

```bash
# Error log analysis
tail -f /var/log/app.log | rawi ask "Monitor for critical errors and explain them"

# Performance troubleshooting
cat performance.json | rawi ask "Identify bottlenecks and optimization opportunities"

# Dependency issue resolution
npm ls --depth=0 2>&1 | rawi ask "Resolve dependency conflicts"
```

**Documentation & Knowledge Management**

```bash
# API documentation generation
swagger-codegen generate -i api.yaml -l markdown | \
  rawi ask "Create user-friendly documentation from this spec"

# Code commenting
rawi ask "Add comprehensive comments to this function" < complex-algorithm.js

# Technical decision records
rawi ask "Create a technical decision record for switching to microservices"
```

### 🔒 Security & Compliance

**Security Analysis**

```bash
# Vulnerability assessment
cat package.json | rawi ask "Identify potential security risks in these dependencies"

# Code security review
rawi ask -p security-focused "Audit this authentication function for vulnerabilities" < auth.js

# Configuration security
cat nginx.conf | rawi ask "Review this config for security best practices"
```

**Compliance & Auditing**

```bash
# GDPR compliance check
find . -name "*.js" -exec grep -l "user.*data" {} + | \
  xargs cat | rawi ask "Check GDPR compliance for user data handling"

# Access control review
cat permissions.yaml | rawi ask "Validate access control policies"
```

### 📊 Data Analysis & Business Intelligence

**Log Analysis & Monitoring**

```bash
# Application metrics analysis
cat metrics.json | rawi ask "Analyze application performance trends"

# User behavior analysis
cat user-events.csv | rawi ask "Identify user engagement patterns"

# System health monitoring
df -h && free -h && top -bn1 | head -20 | \
  rawi ask "Assess system health and recommend optimizations"
```

**Business Intelligence**

```bash
# Sales data insights
cat quarterly-sales.csv | rawi ask "Provide business insights and recommendations"

# A/B test analysis
cat ab-test-results.json | rawi ask "Analyze test results and determine statistical significance"
```

### 🚀 DevOps & Infrastructure

**Infrastructure as Code**

```bash
# Terraform plan analysis
terraform plan | rawi ask "Review infrastructure changes and identify risks"

# Kubernetes manifest validation
cat deployment.yaml | rawi ask "Validate Kubernetes deployment for best practices"

# Docker optimization
cat Dockerfile | rawi ask "Optimize this Dockerfile for security and performance"
```

**CI/CD Pipeline Enhancement**

```bash
# Build failure analysis
cat build.log | rawi ask "Diagnose build failures and suggest fixes"

# Deployment strategy planning
rawi ask "Design a blue-green deployment strategy for a Node.js microservice"

# Pipeline optimization
cat .github/workflows/ci.yml | rawi ask "Optimize this CI pipeline for speed and reliability"
```

### 🎨 Content Creation & Marketing

**Technical Writing**

```bash
# Blog post creation
rawi ask -p creative-writer "Write a technical blog post about GraphQL vs REST APIs"

# Tutorial generation
rawi ask "Create a step-by-step tutorial for setting up Docker" > docker-tutorial.md

# Release notes
git log --oneline v1.0.0..HEAD | \
  rawi ask "Create user-friendly release notes from these commits"
```

**API & SDK Documentation**

```bash
# OpenAPI documentation
cat openapi.json | rawi ask "Generate comprehensive API documentation"

# SDK examples
rawi ask "Create code examples for this API endpoint" < endpoint-spec.json
```

### 🏢 Team Collaboration & Management

**Code Review Assistance**

```bash
# Review checklist generation
rawi ask "Create a code review checklist for React components"

# Architecture decision support
rawi ask "Compare pros and cons of microservices vs monolithic architecture for e-commerce"

# Technical onboarding
rawi ask "Create an onboarding guide for new developers joining a TypeScript project"
```

**Knowledge Sharing**

```bash
# Technical documentation
cat complex-system.md | rawi ask "Simplify this technical documentation for junior developers"

# Best practices documentation
rawi ask "Document coding standards and best practices for our Python team"
```

## 🛠️ Development

### Setting Up Development Environment

```bash
# Clone the repository
git clone https://github.com/MKAbuMattar/rawi.git
cd rawi

# Install dependencies
pnpm install

# Run in development mode
pnpm dev ask "Hello from development!"

# Build the project
pnpm build

# Run tests
pnpm test

# Lint and format code
pnpm lint
pnpm fmt
```

### Project Structure

```
src/
├── cli/                 # CLI commands and program setup
│   ├── commands/       # Individual command implementations
│   └── program.ts      # Main CLI program
├── config/             # Configuration management
│   ├── providers/      # AI provider implementations
│   ├── manager.ts      # Configuration manager
│   └── utils.ts        # Config utilities
├── shared/             # Shared utilities and types
│   ├── constants.ts    # App constants
│   ├── types.ts        # TypeScript types
│   └── utils.ts        # Utility functions
└── index.ts           # Main entry point
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help make Rawi even better.

### 🚀 Quick Start for Contributors

```bash
# 1. Fork and clone the repository
git clone https://github.com/YourUsername/rawi.git
cd rawi

# 2. Install dependencies
pnpm install

# 3. Run in development mode
pnpm dev ask "Hello from development!"

# 4. Run tests
pnpm test

# 5. Build the project
pnpm build
```

### 📁 Project Structure

```
src/
├── cli/                    # CLI commands and program setup
│   ├── commands/          # Individual command implementations
│   │   ├── ask.command.ts
│   │   ├── configure.command.ts
│   │   └── info.command.ts
│   └── program.ts         # Main CLI program
├── config/                # Configuration management
│   ├── providers/         # AI provider implementations
│   │   ├── openai.provider.ts
│   │   ├── anthropic.provider.ts
│   │   └── ...
│   ├── manager.ts         # Configuration manager
│   └── utils.ts          # Config utilities
├── shared/                # Shared utilities and types
│   ├── constants.ts      # App constants
│   ├── types.ts          # TypeScript types
│   ├── utils.ts          # Utility functions
│   └── spinner.ts        # Centralized spinner management
└── index.ts              # Main entry point
```

### 🛠️ Development Guidelines

**Code Quality**

- **TypeScript**: Strict typing required
- **ESLint & Prettier**: Enforced via Biome
- **Testing**: Write tests for new features
- **Documentation**: Update README and JSDoc comments

**Git Workflow**

```bash
# Create feature branch
git checkout -b feature/amazing-new-feature

# Make changes and commit
git add .
git commit -m "feat: add amazing new feature"

# Push and create PR
git push origin feature/amazing-new-feature
```

**Commit Convention**
We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### 🔌 Adding New AI Providers

1. **Create provider file**: `src/config/providers/newprovider.provider.ts`

```typescript
export const newProvider = {
  name: "newprovider" as const,
  displayName: "� New Provider",
  models: [
    { name: "model-1", displayName: "Model 1" },
    { name: "model-2", displayName: "Model 2" },
  ],
};

export const generateWithNewProvider = async (
  credentials: RawiCredentials,
  prompt: string
): Promise<string> => {
  // Implementation here
};
```

2. **Update types**: Add to `ProviderName` type in `src/shared/types.ts`
3. **Export provider**: Add to `src/config/providers/index.ts`
4. **Add configuration options**: Update CLI commands if needed
5. **Write tests**: Add test coverage for the new provider
6. **Update documentation**: Add to README and provider list

### 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run specific test file
pnpm test src/config/providers/openai.provider.test.ts

# Watch mode during development
pnpm test --watch
```

### 📝 Documentation

- **README updates**: Keep the README.md current
- **JSDoc comments**: Document all public functions
- **Examples**: Add usage examples for new features
- **CLI help**: Update command descriptions and help text

### 🚀 Release Process

1. **Version bump**: Follow semantic versioning
2. **Changelog**: Update CHANGELOG.md
3. **Testing**: Ensure all tests pass
4. **Build**: Verify clean build
5. **Publish**: Maintainers handle NPM publishing

### 💡 Areas for Contribution

**High Priority**

- 🤖 New AI provider integrations
- 🔧 Performance improvements
- 📖 Documentation enhancements
- 🐛 Bug fixes

**Medium Priority**

- 🎨 UI/UX improvements
- 🔒 Security enhancements
- 🌐 Internationalization
- 📱 Platform-specific features

**Ideas Welcome**

- 🔌 Plugin system
- 📊 Usage analytics (privacy-respecting)
- 🎯 Smart prompt templates
- 🔄 Response caching

### 📞 Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and community chat
- **Discord**: [Join our community server](https://discord.gg/rawi-community)
- **Email**: Contact maintainers directly

Thank you for contributing to Rawi! 🙏

## 🔧 Configuration Details

### File Locations

Rawi stores all configuration in your home directory:

```
~/.rawi/
└── credentials    # Encrypted configuration file containing:
                  │
                  ├── API keys and credentials
                  ├── Provider configurations
                  ├── Model preferences
                  ├── Generation settings (temperature, tokens)
                  ├── Language preferences
                  └── Custom base URLs
```

### Environment Variables

For CI/CD and automation scenarios:

```bash
# API Keys
export OPENAI_API_KEY="your-openai-key"
export ANTHROPIC_API_KEY="your-anthropic-key"
export GOOGLE_AI_API_KEY="your-google-key"
export XAI_API_KEY="your-xai-key"

# AWS (for Bedrock)
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_REGION="us-east-1"

# Azure
export AZURE_OPENAI_API_KEY="your-azure-key"
export AZURE_OPENAI_ENDPOINT="https://your-resource.openai.azure.com"

# Override default profile
export RAWI_PROFILE="production-profile"
```

### Configuration Schema

```typescript
interface RawiConfig {
  profiles: {
    [profileName: string]: {
      provider:
        | "openai"
        | "anthropic"
        | "google"
        | "ollama"
        | "azure"
        | "bedrock"
        | "qwen"
        | "xai";
      model: string;
      apiKey?: string;
      baseUrl?: string;
      temperature?: number; // 0.0-2.0
      maxTokens?: number; // 1-32000+
      language?: "english" | "arabic";

      // Provider-specific options
      azure?: {
        resourceName: string;
        apiVersion?: string;
      };
      bedrock?: {
        region: string;
        accessKeyId?: string;
        secretAccessKey?: string;
        sessionToken?: string;
        useProviderChain?: boolean;
      };
    };
  };
  defaultProfile: string;
}
```

## 🚀 Performance Tips

### ⚡ Speed Optimization

**Faster Response Times**

```bash
# Use local models for instant responses
rawi configure -p instant --provider ollama --model llama3.2

# Choose fast models for quick tasks
rawi configure -p quick --provider google --model gemini-2.0-flash-exp
rawi configure -p quick --provider openai --model gpt-3.5-turbo

# Optimize token limits for shorter responses
rawi configure -p brief --max-tokens 500
```

**Efficient Model Selection**

- **Quick answers**: Gemini Flash, GPT-3.5-turbo, Claude Haiku
- **Code analysis**: GPT-4o, Claude 3.5 Sonnet
- **Creative tasks**: GPT-4, Claude 3.5 Sonnet
- **Privacy/Local**: Ollama models (Llama, Mistral, CodeLlama)

### 💰 Cost Optimization

**Smart Token Management**

```bash
# Set reasonable limits to control costs
rawi configure -p cost-effective --max-tokens 1000

# Use cheaper models for simple tasks
rawi configure -p budget --provider openai --model gpt-3.5-turbo
rawi configure -p budget --provider anthropic --model claude-3-haiku-20240307
```

**Free Alternatives**

```bash
# Use Ollama for completely free inference
rawi configure -p free --provider ollama --model llama3.2

# Popular free local models
ollama pull llama3.2        # General purpose
ollama pull codellama       # Code-focused
ollama pull mistral         # Efficient and capable
ollama pull qwen2.5         # Multilingual
```

### 🎯 Quality Enhancement

**Better Results Through Configuration**

```bash
# Precise, factual responses
rawi configure -p factual --temperature 0.1

# Creative, varied responses
rawi configure -p creative --temperature 1.0

# Balanced responses
rawi configure -p balanced --temperature 0.7

# Detailed analysis
rawi configure -p detailed --max-tokens 3000
```

**Context and Prompting Tips**

```bash
# Provide context for better results
cat README.md package.json | rawi ask "Analyze this project structure"

# Be specific in your queries
rawi ask "Review this React component for accessibility issues" < Component.jsx

# Use role-based prompting
rawi ask "As a senior security engineer, audit this authentication function" < auth.js
```

## 🔒 Security & Privacy

### API Key Security

- API keys are stored securely in your home directory
- Keys are never logged or transmitted except to official provider APIs
- Use environment variables in CI/CD: `RAWI_API_KEY`

### Privacy Options

- **Ollama**: Complete privacy with local models
- **Profile isolation**: Separate configs for sensitive vs. general use
- **No telemetry**: Rawi doesn't collect usage data

### Best Practices

```bash
# Use local models for sensitive data
rawi configure -p private --provider ollama --model llama3.2

# Separate profiles for different security contexts
rawi configure -p public-cloud --provider openai
rawi configure -p enterprise --provider azure
rawi configure -p local-only --provider ollama
```

## 🌐 Multilingual Support

Rawi supports responses in multiple languages:

```bash
# Configure Arabic responses
rawi configure -p arabic --language arabic

# English responses (default)
rawi configure -p english --language english

# Ask in any language, get responses in configured language
rawi ask -p arabic "What is artificial intelligence?"
# Response will be in Arabic regardless of query language
```

## 🔍 Troubleshooting

### Common Issues

**"Profile not configured" error:**

```bash
# Check existing profiles
rawi configure --list

# Reconfigure the profile
rawi configure -p profile-name
```

**API key errors:**

```bash
# Verify your configuration
rawi configure --show

# Reconfigure with correct API key
rawi configure -p profile-name --api-key NEW_KEY
```

**Ollama connection issues:**

```bash
# Check if Ollama is running
ollama list

# Start Ollama service
ollama serve

# Configure custom Ollama URL
rawi configure -p ollama --base-url http://localhost:11434
```

**Model not found errors:**

```bash
# List available models for your provider
rawi configure --list-models openai

# Update to a valid model
rawi configure -p profile-name --model valid-model-name
```

### Getting Help

- Use `--help` flag with any command: `rawi ask --help`
- Check the [GitHub Issues](https://github.com/MKAbuMattar/rawi/issues)
- Review provider documentation for API key setup
- Ensure you have the latest version: `npm update -g rawi`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern TypeScript and Node.js
- Powered by the excellent [AI SDK](https://github.com/vercel/ai) by Vercel
- Thanks to all AI providers for making their APIs accessible

---

**Made with ❤️ by [Mohammad Abu Mattar](https://mkabumattar.github.io/)**

_Rawi (راوي) - Where ancient storytelling meets modern AI technology._

### 🔗 Links

- **🌐 Website**: [rawi.mkabumattar.com](https://rawi.mkabumattar.com/)
- **📦 NPM Package**: [npmjs.com/package/rawi](https://www.npmjs.com/package/rawi)
- **🐛 Report Issues**: [GitHub Issues](https://github.com/MKAbuMattar/rawi/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/MKAbuMattar/rawi/discussions)
- **📚 Documentation**: [Full Documentation](https://rawi.mkabumattar.com/docs)

### 🌟 Show Your Support

If Rawi has helped you in your development workflow, consider:

- ⭐ **Starring the repository** on GitHub
- 🐦 **Sharing on social media** with `#RawiCLI`
- 🤝 **Contributing** to the project
- 💬 **Spreading the word** to fellow developers

**Roadmap**: View our [development roadmap](https://github.com/MKAbuMattar/rawi/projects) to see what's coming next!
