# CLI Commands Reference

Complete reference for all Rawi CLI commands and their options.

## 📋 Command Overview

| Command                           | Description                                  |
| --------------------------------- | -------------------------------------------- |
| [`ask`](#ask-command)             | Ask AI a question and get a response         |
| [`configure`](#configure-command) | Configure AI provider settings               |
| [`history`](#history-command)     | Manage chat history and sessions             |
| [`info`](#info-command)           | Display system and configuration information |

## 🗣️ Ask Command

Ask AI a question and get a response.

### Basic Usage

```bash
rawi ask [query] [options]

# Example with verbose output
rawi ask "What is the difference between JavaScript and TypeScript?" --verbose
```

### Arguments

- `query` - The question or prompt to send to the AI

### Options

| Option | Alias | Description | Default |
| `--profile <profile>` | `-p` | Profile to use for AI configuration | `default` |
| `--session <sessionId>` | | Continue an existing chat session | |
| `--new-session` | | Start a new chat session | |
| `--act <template>` | | Use an act template by ID | |
| `--list-acts` | | List all available act templates | |
| `--show` | | Show act template details (with --act) | |
| `--verbose` | | Show detailed status and debug information | |

### Examples

#### Basic Questions

```bash
# Simple question
rawi ask "What is TypeScript?"

# Multi-word question (quotes recommended)
rawi ask "How do I deploy a Node.js application?"

# Code-related question
rawi ask "Explain async/await in JavaScript"
```

#### Using Profiles

```bash
# Use specific profile
rawi ask "Review this code" --profile work
rawi ask "Review this code" -p work

# Use different providers
rawi ask "Generate documentation" --profile openai-profile
rawi ask "Analyze performance" --profile claude-profile
```

#### Session Management

```bash
# Start a new session
rawi ask "Hello, I'm working on a React project" --new-session

# Continue existing session
rawi ask "Can you help me with state management?" --session abc123-def456

# Ask follow-up questions
rawi ask "What about Redux?" --session abc123-def456
```

#### Act Templates

Use predefined act templates to get specialized responses from AI:

```bash
# List all available act templates
rawi ask --list-acts

# Show details of a specific template
rawi ask --act ethereum-developer --show

# Use act template with your query
rawi ask --act ethereum-developer "explain smart contract security"

# Use with profile and template
rawi ask -p ollama --act linux-terminal "ls -la /home"

# Use template with piped input
cat contract.sol | rawi ask --act ethereum-developer "review this contract"
```

**Available Templates Categories:**

- **Development**: ethereum-developer, linux-terminal, javascript-console
- **Language**: english-translator-improver, english-pronunciation-helper, spoken-english-teacher
- **Tools**: excel-sheet
- **Lifestyle**: travel-guide

#### Pipe Integration

```bash
# Analyze file contents
cat package.json | rawi ask "What does this package.json do?"

# Code review
git diff | rawi ask "Review these changes for potential issues"

# Log analysis
tail -100 /var/log/app.log | rawi ask "Summarize any errors in this log"

# JSON analysis
curl -s api.example.com/data | rawi ask "Explain this API response structure"
```

#### Output Redirection

```bash
# Save response to file
rawi ask "Create a README template for a Node.js project" > README.md

# Generate scripts
rawi ask "Create a backup script for PostgreSQL" > backup.sh

# Append to existing file
rawi ask "Add error handling to this code" >> improvements.txt
```

### Error Handling

```bash
# Invalid query (no arguments)
rawi ask
# Shows help message

# Invalid profile
rawi ask "question" --profile nonexistent
# Error: Profile 'nonexistent' does not exist

# Invalid session
rawi ask "question" --session invalid-id
# Error: Session 'invalid-id' not found
```

---

## ⚙️ Configure Command

Configure Rawi AI provider settings and manage profiles.

### Basic Usage

```bash
rawi configure [options]
```

### Configuration Options

| Option                        | Description                | Example                                |
| ----------------------------- | -------------------------- | -------------------------------------- |
| `--profile <profile>`         | Configuration profile name | `--profile work`                       |
| `--provider <provider>`       | AI provider                | `--provider openai`                    |
| `--model <model>`             | AI model name              | `--model gpt-4o`                       |
| `--api-key <apiKey>`          | API key for the provider   | `--api-key sk-...`                     |
| `--base-url <baseURL>`        | Custom base URL            | `--base-url https://api.openai.com/v1` |
| `--temperature <temperature>` | Temperature value (0-2)    | `--temperature 0.7`                    |
| `--max-tokens <maxTokens>`    | Maximum tokens             | `--max-tokens 2048`                    |
| `--language <language>`       | Language (english, arabic) | `--language english`                   |

### Provider-Specific Options

#### Azure OpenAI

| Option                           | Description         | Required                         |
| -------------------------------- | ------------------- | -------------------------------- |
| `--resource-name <resourceName>` | Azure resource name | ✅                               |
| `--api-version <apiVersion>`     | API version         | ❌ (default: 2024-10-01-preview) |

#### Amazon Bedrock

| Option                                  | Description                       | Required                |
| --------------------------------------- | --------------------------------- | ----------------------- |
| `--region <region>`                     | AWS region                        | ❌ (default: us-east-1) |
| `--access-key-id <accessKeyId>`         | AWS access key ID                 | ❌\*                    |
| `--secret-access-key <secretAccessKey>` | AWS secret access key             | ❌\*                    |
| `--session-token <sessionToken>`        | AWS session token                 | ❌                      |
| `--use-provider-chain`                  | Use AWS credential provider chain | ❌\*                    |

\*Either explicit credentials or provider chain required

### Management Options

| Option                     | Description                       |
| -------------------------- | --------------------------------- |
| `--show`                   | Show current configuration        |
| `--list`                   | List all profiles                 |
| `--list-providers`         | List all available AI providers   |
| `--list-models <provider>` | List models for specific provider |
| `--delete <profile>`       | Delete a configuration profile    |

### Examples

#### Interactive Configuration

```bash
# Interactive setup (recommended for beginners)
rawi configure

# Interactive with specific profile
rawi configure --profile work
```

#### Quick Setup

```bash
# OpenAI setup
rawi configure --provider openai --model gpt-4o --api-key sk-your-key

# Anthropic setup
rawi configure --provider anthropic --model claude-3-sonnet-20240229 --api-key sk-ant-your-key

# Local Ollama setup
rawi configure --provider ollama --model llama3.2

# Google Gemini setup
rawi configure --provider google --model gemini-1.5-pro --api-key AIza-your-key
```

#### Advanced Configuration

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

# Azure OpenAI setup
rawi configure \
  --profile azure-prod \
  --provider azure \
  --model your-deployment-name \
  --api-key your-azure-key \
  --resource-name your-resource \
  --api-version 2024-10-01-preview

# Amazon Bedrock with provider chain
rawi configure \
  --profile bedrock-dev \
  --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --use-provider-chain \
  --region us-west-2
```

#### Profile Management

```bash
# List all profiles
rawi configure --list

# Show specific profile
rawi configure --show --profile work

# Show default profile
rawi configure --show

# Delete profile
rawi configure --delete old-profile
```

#### Provider Information

```bash
# List all supported providers
rawi configure --list-providers

# List OpenAI models
rawi configure --list-models openai

# List Anthropic models
rawi configure --list-models anthropic

# List Ollama models (shows popular models)
rawi configure --list-models ollama
```

---

## 📚 History Command

Manage chat history and sessions.

### Basic Usage

```bash
rawi history [options]
```

### Options

| Option                  | Alias | Description                          | Default   |
| ----------------------- | ----- | ------------------------------------ | --------- |
| `--profile <profile>`   | `-p`  | Profile to show history for          | `default` |
| `--limit <number>`      | `-l`  | Number of sessions to show           | `50`      |
| `--search <query>`      | `-s`  | Search messages containing text      |           |
| `--provider <provider>` |       | Filter by AI provider                |           |
| `--model <model>`       |       | Filter by AI model                   |           |
| `--from <date>`         |       | Show sessions from date (YYYY-MM-DD) |           |
| `--to <date>`           |       | Show sessions to date (YYYY-MM-DD)   |           |

### Subcommands

#### Sessions Management

```bash
rawi history sessions [options]
```

**Options:**

- `--profile <profile>` - Profile to show sessions for
- `--limit <number>` - Number of sessions to show

#### Show Specific Session

```bash
rawi history show <sessionId>
```

#### Delete Session

```bash
rawi history delete <sessionId>
```

#### Usage Statistics

```bash
rawi history stats [options]
```

**Options:**

- `--profile <profile>` - Profile to show stats for

#### Cleanup Old Sessions

```bash
rawi history cleanup [options]
```

**Options:**

- `--profile <profile>` - Profile to clean up (default: default)
- `--days <number>` - Delete sessions older than N days (default: 30)
- `--confirm` - Confirm deletion without prompt

#### Export History

```bash
rawi history export [options]
```

**Options:**

- `--profile <profile>` - Profile to export
- `--output <file>` - Output file path (default: rawi-history-export.json)

### Examples

#### Basic History Viewing

```bash
# Show recent conversations
rawi history

# Show more conversations
rawi history --limit 100

# Show history for specific profile
rawi history --profile work
```

#### Search and Filter

```bash
# Search for specific content
rawi history --search "TypeScript"
rawi history --search "React hooks"

# Filter by provider
rawi history --provider openai
rawi history --provider anthropic

# Filter by model
rawi history --model gpt-4o
rawi history --model claude-3-sonnet-20240229

# Filter by date range
rawi history --from 2024-01-01 --to 2024-01-31

# Combine filters
rawi history --search "deployment" --provider openai --from 2024-01-01
```

#### Session Management

```bash
# List all sessions
rawi history sessions

# List sessions for specific profile
rawi history sessions --profile work

# Show specific session details
rawi history show abc123-def456

# Delete specific session
rawi history delete abc123-def456
```

#### Statistics and Analytics

```bash
# Show usage statistics
rawi history stats

# Show stats for specific profile
rawi history stats --profile work
```

#### Maintenance

```bash
# Clean up old sessions (30 days)
rawi history cleanup

# Clean up with custom retention
rawi history cleanup --days 7

# Clean up specific profile
rawi history cleanup --profile old-project --days 1

# Auto-confirm cleanup
rawi history cleanup --confirm --days 90
```

#### Export and Backup

```bash
# Export all history
rawi history export

# Export specific profile
rawi history export --profile work --output work-history.json

# Export with custom filename
rawi history export --output backup-$(date +%Y%m%d).json
```

---

## ℹ️ Info Command

Display information about Rawi and its capabilities.

### Basic Usage

```bash
rawi info [options]
```

### Options

| Option        | Description                 |
| ------------- | --------------------------- |
| `--profiles`  | Show configured profiles    |
| `--providers` | Show supported AI providers |

### Examples

#### General Information

```bash
# Show general system information
rawi info
```

Displays:

- Version information
- Author and license
- Configuration status
- Profile count
- Supported provider count

#### Profile Information

```bash
# Show all configured profiles
rawi info --profiles
```

Displays:

- Profile names
- Provider for each profile
- Model for each profile
- Language setting

#### Provider Information

```bash
# Show all supported providers
rawi info --providers
```

Displays:

- Provider names and display names
- API key requirements
- Local support status
- Available model count

### Sample Output

```bash
$ rawi info

🚀 About Rawi (راوي)
A developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses.

📋 System Information
  Version: 0.0.0-beta.12
  Author: Mohammad Abu Mattar
  License: MIT

⚙️  Configuration Status
  Profiles: 3 configured
  Providers: 8 supported

👤 Active Profiles:
  - default (OpenAI GPT-4o)
  - work (Anthropic Claude)
  - local (Ollama Llama3.2)
```

---

## 🔧 Global Options

These options work with all commands:

| Option      | Description                                |
| ----------- | ------------------------------------------ |
| `--help`    | Show help for command                      |
| `--version` | Show version information                   |
| `--verbose` | Show detailed status and debug information |

### Examples

```bash
# Show general help
rawi --help

# Show command-specific help
rawi ask --help
rawi configure --help
rawi history --help

# Show version
rawi --version
```

---

## 🔗 Command Chaining

Rawi works seamlessly with shell pipes and command chaining:

### Input Pipes

```bash
# File analysis
cat README.md | rawi ask "Summarize this documentation"

# Code review
git diff HEAD~1 | rawi ask "Review these changes"

# Log analysis
tail -f app.log | rawi ask "Monitor for errors"

# API data analysis
curl -s https://api.github.com/user | rawi ask "Explain this JSON structure"
```

### Output Redirection

```bash
# Save responses
rawi ask "Create a deployment guide" > deploy.md

# Append to files
rawi ask "Add security considerations" >> deploy.md

# Generate scripts
rawi ask "Create a backup script" > backup.sh
chmod +x backup.sh
```

### Command Substitution

```bash
# Use response in other commands
echo "$(rawi ask 'Generate a random password')" | pbcopy

# Generate configuration
rawi ask "Create nginx config for Node.js app" > /etc/nginx/sites-available/myapp
```

---

## 🔍 Exit Codes

Rawi uses standard exit codes:

| Code | Meaning              |
| ---- | -------------------- |
| `0`  | Success              |
| `1`  | General error        |
| `2`  | Configuration error  |
| `3`  | Network/API error    |
| `4`  | Authentication error |

### Examples

```bash
# Check if command succeeded
rawi ask "test" && echo "Success" || echo "Failed"

# Use in scripts
if rawi configure --show >/dev/null 2>&1; then
    echo "Configuration exists"
else
    echo "Need to configure Rawi"
    rawi configure
fi
```

---

## 📖 Command Examples by Use Case

### Development Workflow

```bash
# Code review
git diff | rawi ask "Review this code for bugs and improvements"

# Generate tests
cat src/utils.js | rawi ask "Generate unit tests for these functions"

# Documentation
rawi ask "Create API documentation for Express routes" --profile work

# Commit messages
git diff --cached | rawi ask "Generate a conventional commit message"
```

### Learning and Research

```bash
# Quick explanations
rawi ask "Explain React hooks with examples"

# Compare technologies
rawi ask "Compare PostgreSQL vs MongoDB for a social media app"

# Best practices
rawi ask "Security best practices for Node.js APIs"
```

### Data Analysis

```bash
# CSV analysis
cat sales-data.csv | rawi ask "Analyze this sales data and find trends"

# Log investigation
grep ERROR app.log | rawi ask "Categorize these errors by type"

# Configuration review
cat docker-compose.yml | rawi ask "Review this Docker configuration"
```

### Content Generation

```bash
# Documentation
rawi ask "Create README for a TypeScript CLI tool" > README.md

# Scripts
rawi ask "Create a deployment script for PM2" > deploy.sh

# Configuration
rawi ask "Generate ESLint config for React TypeScript" > .eslintrc.js
```

For more practical examples, see the [Usage Examples](./examples.md) guide.
