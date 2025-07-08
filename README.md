<div align="center">
  <a href="https://rawi.mkabumattar.com/" target="_blank" rel="noreferrer">
    <img src="./.github/logo.svg" alt="Rawi Logo" width="400"/>
  </a>
</div>

<div align="center">

# 🤖 Rawi (راوي)

_Your AI-powered terminal companion for developers_

<div align="center">
  <a href="https://github.com/withrawi/rawi" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
  </a>

  <a href="https://github.com/withrawi/rawi/releases" target="_blank" rel="noreferrer">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/withrawi/rawi?color=%23ce712e&label=Latest%20release&style=for-the-badge&logo=github" />
  </a>

  <a href="https://www.npmjs.com/package/rawi/v/latest" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/npm/v/rawi/latest?style=for-the-badge&logo=npm&logoColor=white&color=ce712e" alt="Latest NPM Version"/>
  </a>

  <a href="https://www.npmjs.com/package/rawi/v/beta" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/npm/v/rawi/beta?style=for-the-badge&logo=npm&logoColor=white&color=ce712e" alt="Beta NPM Version"/>
  </a>

  <a href="/LICENSE" target="_blank" rel="noreferrer">
    <img alt="GitHub License" src="https://img.shields.io/github/license/withrawi/rawi?color=%23ce712e&style=for-the-badge">
  </a>

  <a href="https://github.com/withrawi/rawi/stargazers" target="_blank" rel="noreferrer">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/withrawi/rawi?color=%23ce712e&label=GitHub%20Stars&style=for-the-badge">
  </a>
</div>

[🌐 Website](https://rawi.mkabumattar.com) • [📚 Documentation](https://rawi.mkabumattar.com/docs) • [🚀 Quick Start](#-quick-start) • [💬 Support](https://github.com/withrawi/rawi/issues)

</div>

---

Transform your command line into an intelligent AI workspace. **Rawi** (راوي) is the developer-friendly CLI tool that brings 8 major AI providers directly to your terminal with seamless shell integration, persistent conversations, and 200+ specialized prompt templates.

> _"راوي" means "storyteller" in Arabic — and every great story starts with a question._

## ✨ Why Choose Rawi?

Rawi isn't just another AI CLI tool — it's your complete AI-powered development environment:

- **🔥 8 AI Providers**: OpenAI, Anthropic, Google, Ollama, Azure, Bedrock, Qwen, and xAI
- **🛡️ Privacy First**: Local AI support with Ollama — no data leaves your machine
- **⚡ Developer Optimized**: Built specifically for coding workflows and technical tasks
- **🔄 Shell Integration**: Perfect pipes, redirects, and script automation
- **📊 Smart Sessions**: Persistent conversations with context awareness
- **🎯 200+ Templates**: Expert-level prompt templates for specialized responses
- **🌍 Multilingual**: Full support for English and Arabic (راوي)

## 🚀 Quick Start

Get your AI-powered terminal companion running in seconds:

```bash
# Install globally
npm install -g rawi

# One-command setup (interactive)
rawi configure

# Start asking questions
rawi ask "What's the difference between TypeScript and JavaScript?"

# Use with code review
git diff | rawi ask "Review these changes for potential issues"
```

### 🎯 Instant Results

```bash
# Quick coding help
rawi ask "Create a React component for file upload"

# Debug errors instantly
rawi ask "Fix this Python error: NameError: name 'x' is not defined"

# Get specialized AI personas
rawi ask --act security-expert "Analyze this authentication code"

# Continue conversations
rawi ask "How do I handle state management?" --session abc123
```

## 🤖 AI Providers — Your Choice, Your Control

Access the best AI models through one unified interface:

| Provider         | Top Models                            | API Key | Local | Best For                       |
| ---------------- | ------------------------------------- | ------- | ----- | ------------------------------ |
| **🔵 OpenAI**    | GPT-4o, GPT-4, O1, O3, GPT-4o-mini    | ✅      | ❌    | General development, coding    |
| **🟣 Anthropic** | Claude 3.5 Sonnet, Claude 3.5 Haiku   | ✅      | ❌    | Analysis, safety, long content |
| **🔴 Google**    | Gemini 2.0 Flash, Gemini 1.5 Pro      | ✅      | ❌    | Fast inference, multimodal     |
| **🟢 Ollama**    | Llama 3.2, CodeLlama, Qwen, +100 more | ❌      | ✅    | Privacy, offline, free         |
| **� LM Studio**  | Llama 3.3, Phi-4, Gemma-3, Qwen-3     | ❌      | ✅    | Local models, GUI management   |
| **�🔷 Azure**    | Enterprise OpenAI deployments         | ✅      | ❌    | Enterprise, compliance         |
| **🟠 Bedrock**   | Claude, Llama, Titan via AWS          | ✅      | ❌    | AWS integration, scale         |
| **🟡 Qwen**      | Qwen-Max, Qwen-Plus, Qwen-Turbo       | ✅      | ❌    | Multilingual, Chinese          |
| **🤖 xAI**       | Grok-3, Grok-2, Grok-Beta             | ✅      | ❌    | Real-time, conversational      |

> **🛡️ Privacy Note**: Use Ollama or LM Studio for complete privacy — all processing happens locally on your machine.

## 🎯 Act Templates — Specialized AI Personas

Transform your prompts with 200+ expertly crafted AI personas:

```bash
# Browse all templates
rawi act --list

# Get template details
rawi act --show ethereum-developer

# Use templates in conversations
rawi ask --act linux-terminal "list files in home directory"
rawi ask --act code-reviewer "analyze this Python function"
rawi ask --act security-expert "check this auth implementation"
```

### 🔥 Popular Templates

| Template               | Use Case                              | Example                                                |
| ---------------------- | ------------------------------------- | ------------------------------------------------------ |
| **ethereum-developer** | Smart contract development & security | `--act ethereum-developer "review this Solidity code"` |
| **linux-terminal**     | Terminal command simulation           | `--act linux-terminal "show disk usage"`               |
| **code-reviewer**      | Code analysis and review              | `--act code-reviewer "optimize this algorithm"`        |
| **tech-writer**        | Technical documentation               | `--act tech-writer "document this API endpoint"`       |
| **security-expert**    | Security analysis and auditing        | `--act security-expert "analyze this auth flow"`       |
| **database-admin**     | Database optimization and queries     | `--act database-admin "optimize this SQL query"`       |

**Categories**: Development, Security, Writing, Education, Business, Creative, and more!

## 📋 Essential Commands

Master Rawi's core commands for maximum productivity:

### 🗣️ `rawi ask` — Your AI Assistant

```bash
# Basic question
rawi ask "How do I optimize this SQL query?"

# Use specific profile
rawi ask "Review this code" --profile work

# Continue conversation
rawi ask "What about performance?" --session abc123

# Apply AI persona
rawi ask --act security-expert "Analyze this authentication logic"

# Pipe input for analysis
cat server.js | rawi ask "Review this Express server"
```

### ⚙️ `rawi configure` — Setup & Manage

```bash
# Interactive setup (recommended)
rawi configure

# Quick provider setup
rawi configure --provider openai --model gpt-4o --api-key sk-xxx

# List all profiles
rawi configure --list

# Show current config
rawi configure --show

# Multiple profiles for different needs
rawi configure --profile work --provider anthropic --model claude-3-5-sonnet-20241022
```

### 📚 `rawi history` — Conversation Management

```bash
# View recent conversations
rawi history

# Search conversation history
rawi history --search "docker"

# Show specific session
rawi history show abc123

# Export history
rawi history export --output backup.json

# Clean up old sessions
rawi history cleanup --days 30
```

### 🎭 `rawi act` — Template Explorer

```bash
# Browse all templates
rawi act --list

# Show template details
rawi act --show ethereum-developer

# Search templates by category
rawi act --list | grep -i security
```

### 🔧 `rawi provider` — Provider Information

```bash
# List all providers
rawi provider --list

# Show models for specific provider
rawi provider --list-models openai

# Get provider details
rawi provider --info anthropic
```

### ℹ️ `rawi info` — System Information

```bash
# Show system info
rawi info

# Show profile details
rawi info --profiles

# Show provider capabilities
rawi info --providers
```

## 🛠️ Configuration Made Simple

Get up and running with any AI provider in minutes:

### 🚀 Quick Provider Setup

```bash
# OpenAI (most popular)
rawi configure --provider openai --model gpt-4o --api-key sk-your-key

# Anthropic Claude (great for analysis)
rawi configure --provider anthropic --model claude-3-5-sonnet-20241022 --api-key sk-ant-xxx

# Google Gemini (fast and efficient)
rawi configure --provider google --model gemini-2.0-flash-exp --api-key AIza-xxx

# Ollama (free and private)
rawi configure --provider ollama --model llama3.2
```

### 🏢 Enterprise & Advanced

```bash
# Azure OpenAI for enterprise
rawi configure --provider azure \
  --model your-deployment-name \
  --resource-name your-resource \
  --api-key your-azure-key

# AWS Bedrock with credential chain
rawi configure --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --use-provider-chain \
  --region us-west-2

# Multiple profiles for different projects
rawi configure --profile work --provider openai --model gpt-4o
rawi configure --profile personal --provider ollama --model llama3.2
rawi configure --profile enterprise --provider azure --model gpt-4o
```

### 🎛️ Advanced Options

```bash
# Fine-tune AI behavior
rawi configure --provider openai \
  --model gpt-4o \
  --temperature 0.7 \
  --max-tokens 4096 \
  --language english

# Different languages
rawi configure --language arabic  # Full Arabic support
```

## � Developer Workflow Integration

See how Rawi fits seamlessly into your development process:

### 🔍 Code Review & Analysis

```bash
# Review git changes
git diff | rawi ask "Review these changes for potential issues"

# Analyze entire files
cat src/auth.js | rawi ask --act security-expert "Analyze for vulnerabilities"

# Get improvement suggestions
rawi ask --act code-reviewer "How can I optimize this function?" < utils.py

# Generate commit messages
git diff --cached | rawi ask "Write a conventional commit message"

# Smart commit messages
git diff --staged | rawi ask "Generate a conventional commit message"

# Release notes
git log --oneline $(git describe --tags --abbrev=0)..HEAD | \
  rawi ask "Create release notes from these commits"

# Branch summaries
git log --oneline main..feature-branch | \
  rawi ask "Summarize the changes in this feature branch"

# Pull request descriptions
git diff origin/main | rawi ask "Write a pull request description for these changes"
```

### 🐛 Debugging & Problem Solving

```bash
# Debug error messages
rawi ask "Fix this Python error: NameError: name 'x' is not defined"

# Analyze log files
tail -100 /var/log/app.log | rawi ask "Summarize errors and suggest fixes"

# Understand complex code
rawi ask --act code-reviewer "Explain this algorithm" < algorithm.py

# Performance optimization
rawi ask --act database-admin "Optimize this slow query" < queries.sql
```

### 📝 Documentation & Generation

```bash
# Create documentation
rawi ask --act tech-writer "Document this API endpoint" < api.js

# Generate README files
rawi ask "Create a comprehensive README for this project" < package.json

# Write test cases
rawi ask --act qa-engineer "Generate unit tests for this function" < utils.js

# Create configuration files
rawi ask "Generate Docker configuration for this Node.js app"
```

### 🔧 Automation & Scripting

```bash
# Generate deployment scripts
rawi ask "Create a GitHub Actions workflow for CI/CD" > .github/workflows/deploy.yml

# Create backup scripts
rawi ask "Create a database backup script for PostgreSQL" > backup.sh

# Configuration generation
rawi ask "Generate nginx config for this Express app" > nginx.conf

# Data processing
cat data.json | rawi ask "Transform this JSON into CSV format" > data.csv
```

### 📊 Data Analysis & Processing

```bash
# Analyze CSV files
cat sales-data.csv | rawi ask "Analyze this sales data and find trends"

# Process API responses
curl -s api.example.com/data | rawi ask "Explain this API response structure"

# Log analysis
grep ERROR app.log | rawi ask "Categorize these errors and suggest fixes"

# Configuration analysis
cat docker-compose.yml | rawi ask "Review this Docker configuration"
```

## 🔒 Security & Privacy — Your Data, Your Control

Rawi is designed with security and privacy as core principles:

### 🛡️ Security Features

- **� Encrypted Storage**: All API keys and credentials encrypted at rest using AES-256
- **🏠 Local Processing**: Full local AI support with Ollama — no data leaves your machine
- **🚫 Zero Telemetry**: No data collection, tracking, or analytics
- **🔒 Secure Defaults**: Minimal permissions and secure configuration out of the box
- **🔑 Key Management**: OS-level secure key storage with proper access controls

### 🔐 Privacy Options

```bash
# Complete privacy with Ollama (local AI)
rawi configure --provider ollama --model llama3.2

# No internet required after setup
rawi ask "Review this sensitive code" --profile local

# Keep sensitive data local
cat confidential.py | rawi ask "Analyze this code" --profile ollama
```

### 🌍 Global & Multilingual Support

- **🇺🇸 English**: Full native support with optimized models
- **🇸🇦 Arabic**: Native Arabic support — راوي speaks your language
- **🌐 Multilingual**: All providers support multiple languages seamlessly

```bash
# Arabic language support
rawi configure --language arabic
rawi ask "اشرح لي هذا الكود"

# Switch between languages
rawi ask "Translate this to Arabic and explain" --language arabic
```

## 📊 Smart Session Management

Rawi remembers your conversations and maintains context across interactions:

### 🗣️ Conversation Flow

```bash
# Start a new session
rawi ask "I'm building a React app with TypeScript" --new-session

# Continue the conversation (auto-detects session)
rawi ask "How should I structure the components?"

# Use specific session
rawi ask "What about state management?" --session abc123-def456

# Resume from history
rawi history show abc123-def456
rawi ask "Let's continue from where we left off" --session abc123-def456
```

### 📚 History Management

```bash
# View recent conversations
rawi history

# Search your chat history
rawi history --search "docker deployment"

# Filter by provider or model
rawi history --provider openai --model gpt-4o

# Export for backup
rawi history export --output my-ai-conversations.json

# Clean up old sessions
rawi history cleanup --days 30
```

### 📈 Usage Analytics

```bash
# See usage statistics
rawi history stats

# Profile-specific stats
rawi history stats --profile work

# Track your AI usage patterns
rawi info --profiles
```

## � Installation & Setup

Multiple ways to get started — choose what works best for you:

### 📦 Package Managers

```bash
# NPM (recommended)
npm install -g rawi

# PNPM (faster)
pnpm add -g rawi

# Yarn
yarn global add rawi

# Try without installing
npx rawi ask "Hello, world!"
```

### ⚡ Quick Verification

```bash
# Check installation
rawi --version

# Test basic functionality
rawi ask "Test message"

# View system info
rawi info
```

## 🏗️ Architecture & Design

Rawi is built with modularity, extensibility, and developer experience in mind:

### 📐 Clean Architecture

```
rawi/
├── src/
│   ├── cli/                    # Command-line interface
│   │   ├── commands/           # ask, configure, history, info, act, provider
│   │   └── program.ts          # Main CLI program setup
│   ├── core/
│   │   ├── config/             # Configuration management
│   │   │   └── providers/      # AI provider integrations (8 providers)
│   │   ├── database/           # SQLite-based chat history & sessions
│   │   ├── shared/             # Utilities, types, and constants
│   │   └── template/           # Act templates system (200+ templates)
│   └── index.ts                # Application entry point
├── docs/                       # Comprehensive documentation
├── man/                        # Manual pages for CLI
└── tests/                      # Test suites
```

### 🔧 Core Technologies

- **TypeScript**: Type-safe development with excellent IDE support
- **Commander.js**: Robust CLI framework with intuitive command structure
- **AI SDK**: Unified interface for multiple AI providers
- **SQLite**: Lightweight, embedded database for session management
- **Secure Storage**: AES-256 encryption for credential protection

### 🎨 Design Principles

- **🔌 Extensibility**: Easy to add new providers and features
- **🛡️ Security**: Credentials encrypted at rest, minimal permissions
- **⚡ Performance**: Fast startup, efficient resource usage
- **🔧 Maintainability**: Clean code structure, comprehensive testing
- **🌍 Accessibility**: Works across platforms and environments

## 🔄 Why Rawi Beats the Competition

See how Rawi stacks up against other AI CLI tools:

| Feature                   | Rawi                     | Others             |
| ------------------------- | ------------------------ | ------------------ |
| **AI Providers**          | ✅ 8 major providers     | ❌ Usually 1-2     |
| **Local AI Support**      | ✅ Full Ollama support   | ❌ Cloud only      |
| **Specialized Templates** | ✅ 200+ act templates    | ❌ Basic prompts   |
| **Session Management**    | ✅ Persistent + search   | ❌ No context      |
| **Shell Integration**     | ✅ Pipes, redirects      | ❌ Limited         |
| **Privacy Options**       | ✅ Local + Cloud         | ❌ Cloud only      |
| **Multi-language**        | ✅ English + Arabic      | ❌ English only    |
| **Profile Management**    | ✅ Multiple profiles     | ❌ Single config   |
| **Conversation History**  | ✅ Full history + export | ❌ No history      |
| **Developer-focused**     | ✅ Built for developers  | ❌ General purpose |

### 🎯 What Makes Rawi Special

- **🔥 True Multi-Provider**: Switch between 8 AI providers without changing tools
- **🛡️ Privacy First**: Only tool with full local AI support via Ollama
- **🎭 Expert Templates**: 200+ specialized AI personas for any task
- **📊 Smart Sessions**: Persistent conversations with full context
- **🌍 Global Ready**: Native Arabic support alongside English
- **🔧 Developer Native**: Built specifically for technical workflows

## 📚 Documentation & Learning

Comprehensive resources to master Rawi:

### � Essential Guides

- **🚀 [Quick Start Guide](https://rawi.mkabumattar.com/docs/quick-start)** - Get up and running in minutes
- **🎯 [Act Templates Guide](https://rawi.mkabumattar.com/docs/templates)** - Master all 200+ AI personas
- **🔧 [Configuration Guide](https://rawi.mkabumattar.com/docs/configuration)** - Complete setup for all providers
- **🛠️ [Development Guide](https://rawi.mkabumattar.com/docs/development)** - Contributing and development
- **� [Command Reference](https://rawi.mkabumattar.com/docs/commands)** - Complete CLI documentation

### 💡 Advanced Resources

- **🔍 [Usage Examples](https://rawi.mkabumattar.com/docs/examples)** - Real-world scenarios and workflows
- **🤖 [Provider Guide](https://rawi.mkabumattar.com/docs/providers)** - Deep dive into each AI provider
- **🏗️ [Architecture](https://rawi.mkabumattar.com/docs/architecture)** - Technical implementation details
- **❓ [FAQ](https://rawi.mkabumattar.com/docs/faq)** - Common questions and troubleshooting
- **📈 [API Reference](https://rawi.mkabumattar.com/docs/api)** - Complete API documentation

### 🎓 Learning Path

1. **Start Here**: [Quick Start](https://rawi.mkabumattar.com/docs/quick-start) → Install and configure
2. **Explore**: [Act Templates](https://rawi.mkabumattar.com/docs/templates) → Discover AI personas
3. **Integrate**: [Usage Examples](https://rawi.mkabumattar.com/docs/examples) → Real workflows
4. **Master**: [Advanced Configuration](https://rawi.mkabumattar.com/docs/configuration) → Power user features
5. **Contribute**: [Development Guide](https://rawi.mkabumattar.com/docs/development) → Help improve Rawi

## 💬 Community & Support

Join our growing community and get help when you need it:

### 🆘 Get Help

- **🐛 [Report Issues](https://github.com/withrawi/rawi/issues)** - Bug reports and feature requests
- **💡 [Discussions](https://github.com/withrawi/rawi/discussions)** - Ideas, questions, and community chat
- **📧 [Email Support](mailto:mohammad.khaled@outlook.com)** - Direct support from the creator
- **📖 [Documentation](https://rawi.mkabumattar.com)** - Comprehensive guides and references

### 🤝 Contributing

We welcome contributions from developers of all levels:

```bash
# Clone the repository
git clone https://github.com/withrawi/rawi.git
cd rawi

# Install dependencies
pnpm install

# Start development
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

### 🌟 Ways to Contribute

- **🐛 Fix bugs** - Check our [issues](https://github.com/withrawi/rawi/issues)
- **✨ Add features** - Implement new providers or commands
- **📖 Improve docs** - Help others learn and use Rawi
- **🎭 Create templates** - Add new act templates
- **🧪 Write tests** - Improve code quality and coverage

### 🔄 Development Workflow

1. **Fork & Clone**: Fork the repo and clone locally
2. **Install**: Run `pnpm install` to setup dependencies
3. **Branch**: Create feature branch (`git checkout -b feature/awesome-feature`)
4. **Code**: Make your changes with tests
5. **Test**: Run `pnpm test` and `pnpm lint`
6. **Commit**: Use conventional commits
7. **Push**: Push to your fork and create a pull request

See our [Development Guide](https://rawi.mkabumattar.com/docs/development) for detailed instructions.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Mohammad Abu Mattar](https://mkabumattar.github.io)**

_Rawi (راوي) - Every great story starts with a question_

[![GitHub](https://img.shields.io/badge/GitHub-withrawi%2Frawi-blue?style=for-the-badge&logo=github)](https://github.com/withrawi/rawi)
[![Website](https://img.shields.io/badge/Website-rawi.mkabumattar.com-green?style=for-the-badge&logo=globe)](https://rawi.mkabumattar.com)
[![NPM](https://img.shields.io/badge/NPM-rawi-red?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/rawi)

</div>
