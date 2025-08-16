# history — Conversation Management

The `history` command lets you search, manage, and analyze your AI conversation history with separate views for ask, chat, and exec sessions.

## 📋 Table of Contents

- [Basic Usage](#basic-usage)
- [Subcommands](#subcommands)
- [Options](#options)
- [Search and Filtering](#search-and-filtering)
- [Examples](#examples)
- [Use Cases](#use-cases)

---

## Basic Usage

View your AI conversation history organized by session type:

```bash
# Show ask session history
rawi history ask

# Show chat session history
rawi history chat

# Show exec session history
rawi history exec
```

### Quick Commands

```bash
# Search ask sessions
rawi history ask --search "docker"

# Show recent chat sessions
rawi history chat --limit 10

# Show recent exec commands
rawi history exec --limit 20

# Filter by profile
rawi history ask --profile work
```

---

## Subcommands

### `ask`

Show ask session history. View and search your ask sessions and messages.

```bash
rawi history ask [options]
```

### `chat`

Show chat session history. View and search your chat sessions and messages.

```bash
rawi history chat [options]
```

### `exec`

Show exec session history. View and search your exec sessions and generated commands.

```bash
rawi history exec [options]
```

**Purpose:** View all your one-off questions and quick interactions with AI models.

### `chat`

Show chat session history. View and search your chat sessions and messages.

```bash
rawi history chat [options]
```

**Purpose:** View all your interactive chat conversations and longer discussions.

---

## Options

All options are available for both `ask` and `chat` subcommands:

| Option                  | Alias | Description                                | Default   |
| ----------------------- | ----- | ------------------------------------------ | --------- |
| `--profile <profile>`   | `-p`  | Profile to show history for                | `default` |
| `--limit <number>`      | `-l`  | Number of sessions to show                 | `50`      |
| `--search <query>`      | `-s`  | Search messages containing text            |           |
| `--provider <provider>` |       | Filter by AI provider                      |           |
| `--model <model>`       |       | Filter by AI model                         |           |
| `--from <date>`         |       | Show sessions from date (YYYY-MM-DD)       |           |
| `--to <date>`           |       | Show sessions to date (YYYY-MM-DD)         |           |
| `--all`                 |       | Show all sessions without pagination limit |           |
| `--all-profiles`        |       | Show sessions from all profiles            |           |

---

## Search and Filtering

### Text Search

Search for specific content in your ask or chat sessions:

```bash
# Search ask sessions
rawi history ask --search "docker deployment"

# Search chat sessions
rawi history chat --search "debugging"

# Case-insensitive search
rawi history ask --search "TypeScript"
```

### Provider and Model Filtering

Filter conversations by AI provider or model:

```bash
# Filter ask sessions by provider
rawi history ask --provider openai
rawi history chat --provider anthropic

# Filter by model
rawi history ask --model gpt-4o
rawi history chat --model claude-3-5-sonnet

# Combine filters
rawi history ask --provider openai --model gpt-4o
```

### Date Range Filtering

Filter conversations by date:

```bash
# Show ask sessions from specific date
rawi history ask --from 2024-01-01

# Show chat sessions within date range
rawi history chat --from 2024-01-01 --to 2024-12-31
```

### Profile Filtering

Filter by specific profiles:

```bash
# Show ask sessions from work profile
rawi history ask --profile work

# Show chat sessions from all profiles
rawi history chat --all-profiles
```

---

## Examples

### Basic Usage

```bash
# Show recent ask sessions
rawi history ask

# Show recent chat sessions
rawi history chat

# Show recent exec sessions
rawi history exec

# Limit results
rawi history ask --limit 5
rawi history chat --limit 10
rawi history exec --limit 15
```

**Example output:**

```bash
📚 Ask Session History (3 sessions):

┌──────────────────────┬──────────────────────────────────────┬────────────┬──────────┬──────────────────┐
│ Title                │ ID                                   │ Profile    │ Messages │ Updated          │
├──────────────────────┼──────────────────────────────────────┼────────────┼──────────┼──────────────────┤
│ Create React comp... │ abc123-def456-ghi789                 │ default    │ 2        │ 1 hour ago       │
│ Docker deployment    │ def456-ghi789-jkl012                 │ work       │ 4        │ 2 hours ago      │
│ TypeScript types     │ ghi789-jkl012-mno345                 │ default    │ 6        │ 1 day ago        │
└──────────────────────┴──────────────────────────────────────┴────────────┴──────────┴──────────────────┘

💡 Tips:
  • Use --session <id> with ask command to continue a session
  • Use --search <query> to search message content
```

### Search Examples

```bash
# Search for Docker-related ask sessions
rawi history ask --search "docker"

# Search for debugging in chat sessions
rawi history chat --search "debugging"

# Search for file operations in exec sessions
rawi history exec --search "file"

# Search across all profiles
rawi history ask --search "react" --all-profiles
rawi history exec --search "git" --all-profiles
```

### Advanced Filtering

```bash
# Ask sessions using OpenAI from January 2024
rawi history ask --provider openai --from 2024-01-01

# Chat sessions using GPT-4 in work profile
rawi history chat --model gpt-4 --profile work

# Exec sessions with commands from last week
rawi history exec --from $(date -d '1 week ago' +%Y-%m-%d)

# All exec sessions without pagination
rawi history exec --all

# Recent ask sessions from specific date range
rawi history ask --from 2024-01-01 --to 2024-01-31 --limit 20
```

### Cross-Session Type Analysis

```bash
# Compare ask vs chat vs exec activity
rawi history ask --limit 10
rawi history chat --limit 10
rawi history exec --limit 10

# Search same topic across all types
rawi history ask --search "kubernetes"
rawi history chat --search "kubernetes"
rawi history exec --search "kubernetes"

# Find all OpenAI interactions
rawi history ask --provider openai
rawi history chat --provider openai
rawi history exec --provider openai
```

---

## Use Cases

### Development Workflow

```bash
# Review recent coding help
rawi history ask --search "code review"
rawi history chat --search "debugging"

# Review command generation history
rawi history exec --search "docker"
rawi history exec --search "git"

# Find specific technology discussions
rawi history ask --search "typescript"
rawi history chat --search "react"
rawi history exec --search "npm"
```

### Project Organization

```bash
# Separate work and personal conversations
rawi history ask --profile work
rawi history chat --profile personal

# Find discussions about specific projects
rawi history ask --search "project-alpha"
rawi history chat --search "project-alpha"
```

### Learning and Research

```bash
# Track learning sessions
rawi history chat --search "tutorial"
rawi history ask --search "how to"

# Find AI model comparisons
rawi history ask --provider anthropic
rawi history ask --provider openai
```

### Data Analysis

```bash
# Usage patterns by provider
rawi history ask --provider ollama --limit 100
rawi history chat --provider gpt-4 --limit 100

# Time-based analysis
rawi history ask --from 2024-01-01 --to 2024-01-31
rawi history chat --from 2024-01-01 --to 2024-01-31
```

---

## Interactive Features

Both `ask` and `chat` history views support interactive navigation:

- **Pagination**: Navigate through multiple pages of results
- **Session details**: View complete session information
- **Smart filtering**: Results update based on your criteria

### Pagination Navigation

When you have more sessions than the display limit, you'll see pagination options:

```bash
Page 1 of 3 | Total: 25 sessions

? What would you like to do?
❯ Next page
  Previous page
  Exit
```

### Session Information Display

Each session shows:

- **Title**: Auto-generated or custom session name
- **ID**: Unique session identifier
- **Profile**: The profile used for the session
- **Messages**: Number of messages in the session
- **Updated**: Last activity timestamp

---

## Performance Tips

### Optimizing Large Histories

```bash
# Use limits for faster results
rawi history ask --limit 20

# Filter by recent dates
rawi history chat --from 2024-08-01

# Search specific profiles
rawi history ask --profile work
```

### Efficient Searching

```bash
# Use specific search terms
rawi history ask --search "docker compose"

# Combine filters to narrow results
rawi history chat --search "error" --provider openai --from 2024-08-01
```

---

## Navigation

- [← Back to Commands](./README.md)
- [Next: ask Command →](./ask.md)

Related Pages:

- [Sessions Management](../sessions.md)
- [Chat Command](./chat.md)
- [Profiles](../profiles.md)
