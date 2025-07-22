# Rawi Commands Reference

## Description

Complete reference for all Rawi CLI commands and their usage patterns.

Rawi provides a comprehensive set of commands for AI interaction, configuration management, and system administration. This reference covers all commands, options, and usage patterns.

## Synopsis

```
rawi <command> [options] [arguments]
rawi [global-options]
```

## Commands

### Core Commands

`ask`

> Ask AI questions and get intelligent responses. Supports conversation sessions, act templates, and piped input.

`configure`

> Configure AI provider settings and manage configuration profiles.

`history`

> Manage chat history, sessions, and conversation data.

### Discovery Commands

`act`

> List and explore act templates for specialized prompts.

`provider`

> Show information about supported AI providers and their models.

`info`

> Display system information, version details, and configuration status.

## Global Options

`-h, --help`

> Display help information for commands.

`-v, --version`

> Display the version of Rawi.

`--verbose`

> Show detailed status and debug information (available for most commands).

## Command Categories

### AI Interaction

**Primary Command**

- `ask` - Main interface for AI conversations

**Supporting Commands**

- `act` - Browse and use expert prompt templates
- `history` - Manage conversation sessions

### Configuration & Setup

**Configuration Management**

- `configure` - Set up providers, models, and profiles

**System Information**

- `provider` - Explore available AI providers and models
- `info` - View system and configuration details

## Common Usage Patterns

### Basic AI Interaction

```bash
# Simple question
rawi ask "What is TypeScript?"

# With expert template
rawi ask --act developer "Review this code"

# With file input
cat file.txt | rawi ask "Summarize this"
```

### Configuration Workflow

```bash
# Set up first provider
rawi configure --provider openai --model gpt-4 --api-key sk-xxx

# Create work profile
rawi configure --profile work --provider anthropic --model claude-3

# View configuration
rawi configure --show
```

### Session Management

```bash
# Continue previous session
rawi ask --session abc123 "Continue our discussion"

# Start new session
rawi ask --new-session "Fresh conversation"

# View session history
rawi history show abc123
```

### Discovery and Exploration

```bash
# Find available templates
rawi act --list

# Explore providers
rawi provider --list

# Check specific provider models
rawi provider --list-models anthropic
```

- Pipeline integration

### ⚙️ Configuration & Setup

- **[`configure`](./configure.md)** — Set up and manage AI providers
  - Interactive and manual configuration
  - Profile management
  - Provider switching
  - Credential management

### 📚 Data Management

- **[`history`](./history.md)** — Manage your conversation data
  - Search conversations
  - Export history
  - Session management
  - Usage analytics

### 🔍 Discovery & Information

- **[`act`](./act.md)** — Explore expert templates
- **[`provider`](./provider.md)** — Browse AI providers
- **[`info`](./info.md)** — System information

---

## Common Patterns

### Basic Usage Pattern

```bash
# 1. Configure (one-time setup)
rawi configure --provider openai --model gpt-4o --api-key sk-xxx

# 2. Ask questions
rawi ask "Your question here"

# 3. Use advanced features
rawi ask --act code-reviewer "Review this code" < file.js
```

### Profile-Based Workflow

```bash
# Set up profiles for different use cases
rawi configure --profile work --provider openai --model gpt-4o
rawi configure --profile analysis --provider anthropic --model claude-3-sonnet-20240229
rawi configure --profile local --provider ollama --model llama3.2

# Use profiles for specific tasks
rawi ask "Generate code" --profile work
rawi ask "Analyze data" --profile analysis
rawi ask "Quick question" --profile local
```

### Session-Based Conversations

```bash
# Start a focused conversation
rawi ask "I'm building a React app" --new-session

# Continue the conversation
rawi ask "How should I structure components?"
rawi ask "What about state management?"

# Return to the conversation later
rawi ask "What about testing?" --session abc123-def456
```

### Pipeline Integration

```bash
# Analyze files
cat file.js | rawi ask --act code-reviewer "Review this code"

# Process git changes
git diff | rawi ask "Write a commit message"

# Analyze data
curl -s api.com/data | rawi ask "Explain this API response"

# Save output
rawi ask "Create a README" > README.md
```

---

## Command Chaining

You can chain Rawi commands with other tools for powerful workflows:

### Development Workflows

```bash
# Code review and commit
git diff | rawi ask "Review changes" && \
git add . && \
git commit -m "$(git diff --cached | rawi ask 'Generate commit message')"

# Test and document
npm test && \
rawi ask "Document this API" < api.js > docs/api.md

# Analyze logs and report
tail -100 app.log | \
rawi ask "Summarize errors" | \
tee error-report.txt
```

### Data Processing

```bash
# Process and save analysis
cat data.csv | \
rawi ask "Analyze sales trends" | \
tee analysis-report.md

# API exploration
curl -s api.com/endpoints | \
rawi ask "Document these API endpoints" > api-docs.md

# Log analysis pipeline
grep ERROR app.log | \
rawi ask "Categorize errors" | \
sort | uniq -c | \
rawi ask "Interpret this error frequency data"
```

### Configuration Management

```bash
# Set up multiple providers in sequence
rawi configure --provider openai --model gpt-4o --api-key $OPENAI_KEY && \
rawi configure --profile claude --provider anthropic --model claude-3-sonnet-20240229 --api-key $ANTHROPIC_KEY && \
rawi configure --profile local --provider ollama --model llama3.2

# Backup and restore configuration
rawi configure --show > config-backup.txt
rawi history export --output history-backup.json
```

---

## Error Handling

### Common Error Patterns

```bash
# Check configuration before asking
rawi info && rawi ask "Your question"

# Use fallback profile
rawi ask "Question" --profile primary || \
rawi ask "Question" --profile fallback

# Validate configuration
if rawi configure --show > /dev/null 2>&1; then
    rawi ask "Your question"
else
    echo "Please configure Rawi first: rawi configure"
fi
```

### Verbose Mode

Use `--verbose` with the `ask` command to see detailed information:

```bash
rawi ask "Your question" --verbose
```

This shows:

- Configuration validation
- Session management
- Response generation progress
- Provider and model details

---

## Quick Reference

### Most Common Commands

```bash
# Basic usage
rawi ask "Your question"

# With template
rawi ask --act code-reviewer "Review this code"

# With profile
rawi ask "Question" --profile work

# Configuration
rawi configure
rawi configure --show

# History
rawi history
rawi history --search "topic"

# Information
rawi info
rawi act --list
rawi provider --list
```

### Command Shortcuts

```bash
# Short flags
rawi ask "Question" -p work    # --profile work
rawi history -s "topic"        # --search "topic"
rawi history -l 100           # --limit 100

# Quick config check
rawi info --profiles
rawi configure --list
```

---

## Advanced Usage Tips

### 1. Environment-Based Profiles

```bash
# Different profiles for different environments
rawi configure --profile dev --provider ollama --model llama3.2      # Fast, local
rawi configure --profile prod --provider openai --model gpt-4o       # Production quality
rawi configure --profile analysis --provider anthropic --model claude-3-sonnet-20240229  # Deep analysis
```

### 2. Template Specialization

```bash
# Use specific templates for tasks
rawi ask --act linux-terminal "ls -la"           # System administration
rawi ask --act security-expert "Audit this code" # Security analysis
rawi ask --act database-admin "Optimize query"   # Database work
```

### 3. Session Organization

```bash
# Organize sessions by project
rawi ask "Working on project X" --new-session    # Start project session
rawi history sessions                            # List all sessions
rawi ask "Continue project X" --session abc123   # Resume specific project
```

---

## Detailed Command Pages

Click on any command below for comprehensive documentation:

### Primary Commands

- **[`ask`](./ask.md)** — AI Assistant and conversation management
- **[`configure`](./configure.md)** — Provider setup and profile management
- **[`history`](./history.md)** — Conversation history and analytics

### Utility Commands

- **[`act`](./act.md)** — Expert template explorer
- **[`provider`](./provider.md)** — AI provider information
- **[`info`](./info.md)** — System and configuration information

---

## Navigation

- [← Back to Wiki Home](../README.md)
- [Next: ask Command →](./ask.md)

Related Pages:

- [Quick Start Guide](../quickstart.md)
- [Configuration Guide](../configuration.md)
- [Shell Integration](../shell-integration.md)
