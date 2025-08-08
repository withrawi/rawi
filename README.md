<div align="center">
  <a href="https://rawi.mkabumattar.com/" target="_blank" rel="noreferrer">
    <img src="./.github/logo.svg" alt="Rawi Logo" width="400"/>
  </a>
</div>

<div align="center">

# 🤖 Rawi (راوي)

**The AI-Powered CLI That Transforms Your Terminal Into an Intelligent Workspace**

<div align="center">
  <a href="https://github.com/withrawi/rawi" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
  </a>

  <a href="https://github.com/withrawi/rawi/releases" target="_blank" rel="noreferrer">
    <img alt="GitHub Release" src="https://img.shields.io/github/v/release/withrawi/rawi?color=%23ce712e&label=Latest%20release&style=for-the-badge&logo=github" />
  </a>

  <a href="https://www.npmjs.com/package/rawi" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/npm/v/rawi?style=for-the-badge&logo=npm&logoColor=white&color=ce712e" alt="NPM Version"/>
  </a>

  <a href="/LICENSE" target="_blank" rel="noreferrer">
    <img alt="MIT License" src="https://img.shields.io/github/license/withrawi/rawi?color=%23ce712e&style=for-the-badge">
  </a>

  <a href="https://github.com/withrawi/rawi/stargazers" target="_blank" rel="noreferrer">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/withrawi/rawi?color=%23ce712e&label=GitHub%20Stars&style=for-the-badge">
  </a>

  <a href="https://www.npmjs.com/package/rawi" target="_blank" rel="noreferrer">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/rawi?color=%23ce712e&style=for-the-badge&logo=npm">
  </a>
</div>

[🌐 Website](https://rawi.mkabumattar.com) • [📚 Documentation](https://rawi.mkabumattar.com/userguide) • [🚀 Quick Start](#-quick-start) • [💬 Support](https://github.com/withrawi/rawi/issues)

</div>

---

**Rawi (راوي)** is the developer-friendly AI CLI that brings the power of 11 major AI providers directly to your terminal. With seamless shell integration, persistent conversations, and 200+ specialized prompt templates, Rawi transforms your command line into an intelligent development workspace.

> _"راوي" means "storyteller" in Arabic — every great story starts with a question._

## ✨ Why Choose Rawi?

Rawi isn't just another AI CLI tool — it's your complete AI-powered development environment:

🔥 **11 AI Providers** — OpenAI, Anthropic, Google, DeepSeek, Ollama, LM Studio, Azure, Bedrock, Mistral, Cerebras, and xAI  
🛡️ **Privacy First** — Local AI support with Ollama and LM Studio — no data leaves your machine  
⚡ **Developer Optimized** — Built specifically for coding workflows and technical tasks  
🔄 **Shell Integration** — Perfect pipes, redirects, and script automation  
📊 **Smart Sessions** — Persistent conversations with context awareness  
🎯 **200+ Templates** — Expert-level prompt templates for specialized responses  
🌍 **Multilingual** — Full support for English and Arabic (راوي)  
📚 **Rich History** — Search, export, and manage your AI conversations  
🔧 **Profile Management** — Multiple configurations for different projects

## 🚀 Quick Start

Get your AI-powered terminal companion running in under 30 seconds:

```bash
# Install globally via npm
npm install -g rawi

# One-command setup (interactive)
rawi configure

# Start asking questions immediately
rawi ask "What's the difference between TypeScript and JavaScript?"
```

### 🎯 See Rawi in Action

```bash
# 💡 Quick coding help
rawi ask "Create a React component for file upload with drag-and-drop"

# 🐛 Debug errors instantly
rawi ask "Fix this Python error: NameError: name 'x' is not defined"

# 🎭 Get specialized AI personas
rawi ask --act security-expert "Analyze this authentication code for vulnerabilities"

# 💬 Continue conversations
rawi ask "How do I handle state management?" --new-session
rawi ask "What about Redux specifically?" --session abc123

# 🔧 Integrate with your workflow
git diff | rawi ask "Review these changes for potential issues"
cat server.js | rawi ask --act code-reviewer "Optimize this Express.js code"
```

## 🤖 AI Providers — Your Choice, Your Control

Access the best AI models through one unified interface:

| Provider         | Top Models                            | API Key | Local | Best For                       |
| ---------------- | ------------------------------------- | ------- | ----- | ------------------------------ |
| **🔵 OpenAI**    | GPT-4o, GPT-4, O1, O3, GPT-4o-mini    | ✅      | ❌    | General development, coding    |
| **🟣 Anthropic** | Claude 3.5 Sonnet, Claude 3.5 Haiku   | ✅      | ❌    | Analysis, safety, long content |
| **🔴 Google**    | Gemini 2.0 Flash, Gemini 1.5 Pro      | ✅      | ❌    | Fast inference, multimodal     |
| **� DeepSeek**   | DeepSeek-Chat, DeepSeek-Reasoner      | ✅      | ❌    | Cost-effective, reasoning      |
| **�🟢 Ollama**   | Llama 3.2, CodeLlama, Qwen, +100 more | ❌      | ✅    | Privacy, offline, free         |
| **🔧 LM Studio** | Llama 3.3, Phi-4, Gemma-3, Qwen-3     | ❌      | ✅    | Local models, GUI management   |
| **🟠 Mistral**   | Mistral Large, Mistral Small, Pixtral | ✅      | ❌    | European AI, multilingual      |
| **⚡ Cerebras**  | Llama 3.3 70B, Llama 3.1 70B/8B       | ✅      | ❌    | Ultra-fast inference, speed    |
| **🔷 Azure**     | Enterprise OpenAI deployments         | ✅      | ❌    | Enterprise, compliance         |
| **🟠 Bedrock**   | Claude, Llama, Titan via AWS          | ✅      | ❌    | AWS integration, scale         |
| **🤖 xAI**       | Grok-3, Grok-2, Grok-Beta             | ✅      | ❌    | Real-time, conversational      |

> **🛡️ Privacy Focused**: Use Ollama or LM Studio for complete privacy — all processing happens locally on your machine.

## 🎯 Act Templates — 200+ Specialized AI Personas

Transform your prompts with expertly crafted AI personas for specialized responses:

```bash
# 🔍 Browse all available templates
rawi act --list

# 📖 Get detailed template information
rawi act --show ethereum-developer

# 🚀 Use templates in conversations
rawi ask --act linux-terminal "list files in home directory with details"
rawi ask --act code-reviewer "analyze this Python function for improvements"
rawi ask --act security-expert "audit this authentication implementation"
```

### 🔥 Popular Templates by Category

**🛠️ Development**

- `ethereum-developer` — Smart contract development & security
- `linux-terminal` — Terminal command simulation
- `code-reviewer` — Code analysis and optimization

**🔒 Security**

- `security-expert` — Security analysis and auditing
- `penetration-tester` — Security testing and vulnerability assessment

**📝 Documentation**

- `tech-writer` — Technical documentation
- `api-documenter` — API documentation and examples

**🗄️ Database**

- `database-admin` — SQL optimization and database management
- `data-analyst` — Data analysis and insights

**🎨 Creative**

- `ux-designer` — User experience and interface design
- `marketing-expert` — Marketing copy and strategy

Use `rawi act --list` to explore all 200+ available templates across 15+ categories!

## 📋 Core Commands

Master Rawi's powerful command set:

### 🗣️ `rawi ask` — Your AI Assistant

The heart of Rawi - ask questions and get intelligent responses.

```bash
# Basic questions
rawi ask "How do I optimize this SQL query?"

# Use specific profiles for different projects
rawi ask "Review this code" --profile work

# Continue conversations with context
rawi ask "What about performance optimization?" --session abc123

# Apply specialized AI personas
rawi ask --act security-expert "Analyze this authentication logic"

# Pipe input for analysis
cat server.js | rawi ask "Review this Express server for security issues"
git diff | rawi ask "Write a conventional commit message for these changes"
```

### 💬 `rawi chat` — Interactive Conversations

Start interactive chat sessions for back-and-forth conversations with AI.

```bash
# Start an interactive chat session
rawi chat

# Use specific profile for the chat session
rawi chat --profile work

# Apply a specialized persona for the entire chat
rawi chat --act ethereum-developer

# Start chat with verbose information
rawi chat --verbose

# Chat commands within a session
# /help  - Show chat commands
# /quit  - Exit the chat (also /exit)
# /clear - Clear conversation history
```

**Perfect for:**

- Code reviews with multiple rounds of feedback
- Brainstorming sessions
- Technical discussions
- Learning and exploration
- Problem-solving conversations

### ⚙️ `rawi configure` — Setup & Management

Easy setup and profile management for all your AI providers.

```bash
# Interactive setup (recommended for beginners)
rawi configure

# Quick provider setup
rawi configure --provider openai --model gpt-4o --api-key sk-xxx

# Advanced configuration with all options
rawi configure --provider anthropic \
  --model claude-3-5-sonnet-20241022 \
  --api-key sk-ant-xxx \
  --temperature 0.7 \
  --max-tokens 4096

# Profile management
rawi configure --list                    # List all profiles
rawi configure --show                    # Show current config
rawi configure --show --profile work     # Show specific profile
rawi configure --delete old-profile      # Delete profile
```

### 📚 `rawi history` — Conversation Management

Powerful tools to manage your AI conversation history.

```bash
# View recent conversations
rawi history

# Search conversation history
rawi history --search "docker deployment"

# Show specific session details
rawi history show abc123

# Advanced filtering
rawi history --provider openai --model gpt-4o --from 2024-01-01

# Export and cleanup
rawi history export --output backup.json
rawi history cleanup --days 30
```

### 🎭 `rawi act` — Template Explorer

Discover and use specialized AI personas.

```bash
# Browse all available templates
rawi act --list

# Show detailed template information
rawi act --show ethereum-developer

# Search templates (use with grep)
rawi act --list | grep -i security
```

### 🔧 `rawi provider` — Provider Information

Explore AI providers and their capabilities.

```bash
# List all supported providers
rawi provider --list

# Show available models for specific provider
rawi provider --list-models openai
rawi provider --list-models anthropic
```

### ℹ️ `rawi info` — System Information

Get information about Rawi and your configuration.

```bash
# Show system information
rawi info

# Show profile details
rawi info --profiles
```

## 🛠️ Configuration Made Simple

Get up and running with any AI provider in minutes:

### 🚀 Quick Provider Setup

```bash
# OpenAI (most popular - great for general development)
rawi configure --provider openai --model gpt-4o --api-key sk-your-key

# Anthropic Claude (excellent for analysis and safety)
rawi configure --provider anthropic --model claude-3-5-sonnet-20241022 --api-key sk-ant-xxx

# Google Gemini (fast and efficient)
rawi configure --provider google --model gemini-2.0-flash-exp --api-key AIza-xxx

# DeepSeek (cost-effective with reasoning capabilities)
rawi configure --provider deepseek --model deepseek-chat --api-key sk-your-deepseek-key

# Ollama (completely free and private)
rawi configure --provider ollama --model llama3.2
```

### 🏢 Enterprise & Advanced

```bash
# Azure OpenAI for enterprise deployments
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

### 🎛️ Fine-Tuning Options

```bash
# Customize AI behavior
rawi configure --provider openai \
  --model gpt-4o \
  --temperature 0.7 \
  --max-tokens 4096 \
  --language english

# Multi-language support
rawi configure --language arabic  # Full Arabic support
```

## 💼 Developer Workflow Integration

See how Rawi integrates seamlessly into your development workflow:

### 🔍 Code Review & Analysis

```bash
# Review git changes before committing
git diff | rawi ask "Review these changes for potential issues"

# Security analysis of entire files
cat src/auth.js | rawi ask --act security-expert "Analyze for vulnerabilities"

# Get improvement suggestions
rawi ask --act code-reviewer "How can I optimize this function?" < utils.py

# Generate conventional commit messages
git diff --cached | rawi ask "Write a conventional commit message"

# Create release notes
git log --oneline $(git describe --tags --abbrev=0)..HEAD | \
  rawi ask "Create release notes from these commits"

# Summarize branch changes
git log --oneline main..feature-branch | \
  rawi ask "Summarize the changes in this feature branch"
```

### 🐛 Debugging & Problem Solving

```bash
# Debug specific error messages
rawi ask "Fix this Python error: NameError: name 'x' is not defined"

# Analyze application logs
tail -100 /var/log/app.log | rawi ask "Summarize errors and suggest fixes"

# Understand complex algorithms
rawi ask --act code-reviewer "Explain this algorithm step by step" < algorithm.py

# Database performance optimization
rawi ask --act database-admin "Optimize this slow query" < queries.sql
```

### 📝 Documentation & Generation

```bash
# Generate API documentation
rawi ask --act tech-writer "Document this API endpoint" < api.js

# Create comprehensive README files
rawi ask "Create a comprehensive README for this project" < package.json

# Write comprehensive test cases
rawi ask --act qa-engineer "Generate unit tests for this function" < utils.js

# Generate Docker configurations
rawi ask "Generate Docker configuration for this Node.js app"
```

### 🔧 Automation & Scripting

```bash
# Generate CI/CD workflows
rawi ask "Create a GitHub Actions workflow for CI/CD" > .github/workflows/deploy.yml

# Create backup scripts
rawi ask "Create a database backup script for PostgreSQL" > backup.sh

# Generate server configurations
rawi ask "Generate nginx config for this Express app" > nginx.conf

# Transform data formats
cat data.json | rawi ask "Transform this JSON into CSV format" > data.csv
```

### 📊 Data Analysis & Processing

```bash
# Analyze CSV datasets
cat sales-data.csv | rawi ask "Analyze this sales data and identify trends"

# Process API responses
curl -s api.example.com/data | rawi ask "Explain this API response structure"

# Log analysis and monitoring
grep ERROR app.log | rawi ask "Categorize these errors and suggest fixes"

# Configuration review
cat docker-compose.yml | rawi ask "Review this Docker configuration for best practices"
```

### 📄 Document & File Processing

Process and analyze various document formats with intelligent content extraction:

```bash
# PDF document analysis
rawi ask --file report.pdf "Summarize the key findings in this report"

# Code review from files
rawi ask --file src/app.js "Review this code for potential improvements"

# Excel data analysis
rawi ask --file sales-data.xlsx "What trends do you see in this data?"

# Microsoft Word document processing
rawi ask --file requirements.docx "Extract the main requirements from this document"

# Multiple file processing
rawi ask --files config.json package.json "Compare these configuration files"

# Batch processing with glob patterns
rawi ask --batch "src/**/*.{js,ts}" "Review all TypeScript/JavaScript files for consistency"

# Process files with specific templates
rawi ask --file database-schema.sql --act database-admin "Analyze this schema for optimization"

# Combine file content with prompts
rawi ask --file error-logs.txt "Analyze these logs and suggest solutions"
```

**Supported File Formats:**

- **📄 PDF** — Extract text from PDF documents
- **📝 DOCX** — Microsoft Word documents
- **📊 XLSX** — Excel spreadsheets with sheet selection
- **📋 Text Files** — .txt, .md, .json, .js, .py, .sql, .yml, etc.
- **🔍 Source Code** — All programming languages with syntax context

**Advanced File Features:**

```bash
# Process specific Excel sheets
rawi ask --file data.xlsx --sheet "Q4 Sales" "Analyze Q4 performance"

# Override file type detection
rawi ask --file data.unknown --file-type txt "Process this as plain text"

# Parallel processing for speed
rawi ask --batch "docs/**/*.md" --parallel "Create a documentation index"

# Continue processing on errors
rawi ask --batch "**/*.json" --continue-on-error "Validate all JSON files"

# Verbose output for debugging
rawi ask --file large-dataset.csv --verbose "Summarize this data"
```

## 📦 Installation

### NPM (Recommended)

```bash
# Install globally via npm
npm install -g rawi

# Or using yarn
yarn global add rawi

# Or using pnpm
pnpm add -g rawi

# Or using bun
bun add -g rawi
```

### Alternative Package Managers

```bash
# Using npx (no installation required)
npx rawi ask "What is TypeScript?"

# Using homebrew (macOS/Linux)
brew install rawi  # Coming soon

# Using scoop (Windows)
scoop install rawi  # Coming soon
```

### Verify Installation

```bash
rawi --version
rawi info
```

### System Requirements

- **Node.js**: 18.0.0 or higher
- **Operating System**: Windows, macOS, Linux
- **Terminal**: Any modern terminal (Terminal.app, iTerm2, Windows Terminal, etc.)

---

## 🚦 Getting Started Guide

### Step 1: Install Rawi

```bash
npm install -g rawi
```

### Step 2: Choose Your AI Provider

Pick one of these popular options:

**🔵 OpenAI (Recommended for beginners)**

```bash
# Get API key from: https://platform.openai.com/api-keys
rawi configure --provider openai --model gpt-4o --api-key sk-your-key
```

**🟢 Ollama (Free & Private)**

```bash
# Install Ollama first: https://ollama.com/download
ollama pull llama3.2
rawi configure --provider ollama --model llama3.2
```

**🟣 Anthropic Claude (Great for analysis)**

```bash
# Get API key from: https://console.anthropic.com/
rawi configure --provider anthropic --model claude-3-5-sonnet-20241022 --api-key sk-ant-xxx
```

### Step 3: Start Using Rawi

```bash
# Ask your first question
rawi ask "Explain the difference between REST and GraphQL"

# Try with code analysis
echo "console.log('Hello World')" | rawi ask "Optimize this JavaScript code"

# Use a specialized template
rawi ask --act security-expert "What are common web security vulnerabilities?"
```

### Step 4: Explore Advanced Features

```bash
# Browse available templates
rawi act --list

# Check your conversation history
rawi history

# See all available providers
rawi provider --list
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Found a Bug?

1. Check [existing issues](https://github.com/withrawi/rawi/issues)
2. Create a [new bug report](https://github.com/withrawi/rawi/issues/new?template=bug.yml)
3. Include Rawi version (`rawi --version`) and environment details

### 💡 Have an Idea?

1. Check [feature requests](https://github.com/withrawi/rawi/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)
2. Create a [new feature request](https://github.com/withrawi/rawi/issues/new?template=feat.yml)
3. Describe your use case and expected behavior

### 🔧 Want to Code?

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### 📝 Improve Documentation

- Fix typos and improve clarity
- Add more examples and use cases
- Translate documentation to other languages
- Create video tutorials and guides

**Read our full [Contributing Guide](./.github/CONTRIBUTING.md) for detailed information.**

---

## 📚 Documentation

- **[📖 Getting Started](https://rawi.mkabumattar.com/getting-started/)** — Complete setup guide
- **[⚙️ Configuration](https://rawi.mkabumattar.com/configure/)** — Provider setup and options
- **[🛠️ Commands](https://rawi.mkabumattar.com/reference/)** — Detailed command reference
- **[❓ FAQ](https://rawi.mkabumattar.com/help/faq)** — Common questions
- **[🛠️ Troubleshooting](https://rawi.mkabumattar.com/help/troubleshooting/)** — Fix common issues

---

## 📄 License

Rawi is licensed under the [MIT License](./LICENSE).

---

## 👨‍💻 Author

**Mohammad Abu Mattar**

- Website: [mkabumattar.github.io](https://mkabumattar.github.io)
- Email: [mohammad.khaled@outlook.com](mailto:mohammad.khaled@outlook.com)
- GitHub: [@MKAbuMattar](https://github.com/MKAbuMattar)

---

## ⭐ Show Your Support

If Rawi helps you be more productive, consider:

- ⭐ **Star this repository** on GitHub
- 🐛 **Report bugs** and suggest improvements
- 📝 **Contribute** to the codebase
- 📢 **Share** with your developer community
- 💝 **Sponsor** the project

---

<div align="center">

**Made with ❤️ for developers worldwide**

[🌐 Website](https://rawi.mkabumattar.com) • [📚 Docs](https://rawi.mkabumattar.com/userguide) • [💬 Discussions](https://github.com/withrawi/rawi/discussions) • [🐛 Issues](https://github.com/withrawi/rawi/issues)

</div>
