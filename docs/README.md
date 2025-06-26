---
# Rawi (راوي) Documentation

Welcome to the comprehensive documentation for Rawi (راوي), a developer-friendly AI-powered CLI tool for your terminal.
---

## 📚 Documentation Structure

- [Getting Started](./getting-started.md) — Installation and first steps
- [Configuration Guide](./configuration.md) — Detailed configuration for all AI providers
- [CLI Commands Reference](./commands.md) — Complete command reference
- [Providers Guide](./providers.md) — AI provider setup and details
- [Usage Examples](./examples.md) — Real-world usage scenarios
- [API Reference](./api.md) — Internal API documentation
- [Architecture](./architecture.md) — Code structure and design decisions
- [Development Guide](./development.md) — Contributing and development setup
- [Troubleshooting](./troubleshooting.md) — Common issues and solutions
- [FAQ](./faq.md) — Frequently asked questions

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

## 🔧 Key Features

- **Multi-Provider Support**: 8 AI providers with easy switching
- **Profile Management**: Multiple configurations for different projects
- **Chat History**: Persistent conversation tracking with search
- **Shell Integration**: Perfect for pipes, redirects, and automation
- **Local AI Support**: Privacy-first with Ollama
- **Session Management**: Continue conversations across sessions

---

## 💡 Use Cases

- **Code Review**: Analyze code for security issues and improvements
- **Documentation**: Generate README files, API docs, and comments
- **Learning**: Get explanations of complex concepts
- **Automation**: Generate scripts and configuration files
- **Data Analysis**: Analyze logs, CSV files, and JSON data
- **Troubleshooting**: Debug errors and performance issues

---

## 📖 Example Usage

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

## 🏗️ Architecture Overview

See [architecture.md](./architecture.md) for a detailed diagram and explanation.

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

## 🔒 Security & Privacy

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

See [development.md](./development.md) for setup, build, and contribution guidelines.

---

## �📄 License

MIT License - see [LICENSE](../LICENSE) for details.

---

## 👥 Contributing

See [development.md](./development.md) for contribution guidelines.

See [Development Guide](./development.md) for contribution guidelines.

## 🆘 Support

- [GitHub Issues](https://github.com/MKAbuMattar/rawi/issues)
- [Documentation](https://rawi.mkabumattar.com/)
- [Discord Community](#) (Coming soon)
