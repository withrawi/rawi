# history — Conversation Management

The `history` command lets you search, manage, export, and analyze your AI conversation history and sessions.

## 📋 Table of Contents

- [Basic Usage](#basic-usage)
- [Options](#options)
- [Subcommands](#subcommands)
- [Search and Filtering](#search-and-filtering)
- [Session Management](#session-management)
- [Analytics and Statistics](#analytics-and-statistics)
- [Data Export](#data-export)
- [Maintenance](#maintenance)
- [Examples](#examples)

---

## Basic Usage

```bash
rawi history [options]
```

### Quick Commands

```bash
# Show recent conversations
rawi history

# Search conversations
rawi history --search "docker"

# Show session details
rawi history show abc123-def456

# List all sessions
rawi history sessions
```

---

## Options

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

## Subcommands

### Sessions Management

```bash
rawi history sessions [options]
```

List and manage chat sessions.

**Options:**

- `--profile <profile>` — Profile to show sessions for
- `--limit <number>` — Number of sessions to show
- `--all` — Show all sessions

### Show Specific Session

```bash
rawi history show <sessionId>
```

Display all messages in a specific session.

### Delete Session

```bash
rawi history delete <sessionId>
```

Delete a specific session and all its messages.

### Usage Statistics

```bash
rawi history stats [options]
```

Show usage statistics for your chat history.

**Options:**

- `--profile <profile>` — Profile to show stats for

### Cleanup Old Sessions

```bash
rawi history cleanup [options]
```

Delete sessions older than a specified number of days.

**Options:**

- `--profile <profile>` — Profile to clean up (default: default)
- `--days <number>` — Delete sessions older than N days (default: 30)
- `--confirm` — Confirm deletion without prompt

### Export History

```bash
rawi history export [options]
```

Export chat history to JSON file.

**Options:**

- `--profile <profile>` — Profile to export
- `--output <file>` — Output file path (default: rawi-history-export.json)

---

## Search and Filtering

### Text Search

Search for specific content in your conversations:

```bash
# Basic search
rawi history --search "docker deployment"

# Case-insensitive search
rawi history --search "TypeScript"

# Search with filters
rawi history --search "security" --provider openai
```

### Provider and Model Filtering

Filter conversations by AI provider or model:

```bash
# Filter by provider
rawi history --provider openai
rawi history --provider anthropic
rawi history --provider ollama

# Filter by model
rawi history --model gpt-4o
rawi history --model claude-3-5-sonnet-20241022
rawi history --model llama3.2

# Combine filters
rawi history --provider openai --model gpt-4o
```

### Date Range Filtering

Filter conversations by date:

```bash
# Show sessions from specific date
rawi history --from 2024-01-01

# Show sessions in date range
rawi history --from 2024-01-01 --to 2024-01-31

# Recent sessions (last week)
rawi history --from $(date -d '1 week ago' +%Y-%m-%d)

# Combine with other filters
rawi history --from 2024-01-01 --provider openai --search "deployment"
```

### Profile Filtering

Filter by specific profiles:

```bash
# Specific profile
rawi history --profile work

# All profiles
rawi history --all-profiles

# Compare profiles
rawi history --profile work --limit 10
rawi history --profile personal --limit 10
```

---

## Session Management

### List Sessions

```bash
# List recent sessions
rawi history sessions

# List all sessions
rawi history sessions --all

# List sessions for specific profile
rawi history sessions --profile work
```

**Example output:**

```bash
💬 Sessions for profile "default":

Introduction to TypeScript
   ID: abc123-def456-ghi789
   Messages: 5
   Created: 2 hours ago
   Updated: 1 hour ago

Docker Deployment Help
   ID: def456-ghi789-jkl012
   Messages: 8
   Created: 1 day ago
   Updated: 1 day ago
```

### Show Session Details

```bash
# Show full conversation
rawi history show abc123-def456-ghi789
```

**Example output:**

```bash
💬 Session: Introduction to TypeScript
Profile: default • Created: 2 hours ago
═══════════════════════════════════════════════════════════

👤 USER:
What is TypeScript and how is it different from JavaScript?

🤖 ASSISTANT:
TypeScript is a statically typed superset of JavaScript...
2 hours ago • openai/gpt-4o

👤 USER:
Can you show me some examples?

🤖 ASSISTANT:
Certainly! Here are some practical TypeScript examples...
2 hours ago • openai/gpt-4o
```

### Delete Sessions

```bash
# Delete specific session
rawi history delete abc123-def456-ghi789

# Delete with confirmation
rawi history delete abc123-def456-ghi789
# Prompts: Are you sure you want to delete this session? (y/N)
```

---

## Analytics and Statistics

### Usage Statistics

Get insights into your AI usage:

```bash
# Overall statistics
rawi history stats

# Statistics for specific profile
rawi history stats --profile work
```

**Example output:**

```bash
📊 Usage Statistics:

Overall:
  Sessions: 45
  Messages: 234
  First message: 2 weeks ago
  Latest message: 10 minutes ago

By Provider:
  openai: 156 messages
  anthropic: 45 messages
  ollama: 33 messages

Top Models:
  gpt-4o: 123 messages
  claude-3-5-sonnet-20241022: 45 messages
  llama3.2: 33 messages
  gpt-4o-mini: 33 messages

By Profile:
  default: 178 messages
  work: 56 messages
```

### Usage Patterns

Analyze your usage patterns:

```bash
# See which providers you use most
rawi history stats | grep "By Provider" -A 10

# Check model preferences
rawi history stats | grep "Top Models" -A 10

# Profile usage distribution
rawi history stats --profile work
rawi history stats --profile personal
```

---

## Data Export

### Export All History

```bash
# Export all history to JSON
rawi history export

# Export to specific file
rawi history export --output my-ai-conversations.json

# Export specific profile
rawi history export --profile work --output work-conversations.json
```

### Export Format

The exported JSON contains:

```json
{
  "exportedAt": "2024-01-15T10:30:00Z",
  "sessions": [
    {
      "id": "abc123-def456",
      "profile": "default",
      "title": "TypeScript Questions",
      "createdAt": "2024-01-15T09:00:00Z",
      "updatedAt": "2024-01-15T10:00:00Z",
      "messageCount": 4
    }
  ],
  "messages": {
    "abc123-def456": [
      {
        "id": "msg123",
        "role": "user",
        "content": "What is TypeScript?",
        "timestamp": "2024-01-15T09:00:00Z",
        "provider": "openai",
        "model": "gpt-4o"
      }
    ]
  }
}
```

### Use Exported Data

```bash
# Pretty print JSON
cat rawi-history-export.json | jq '.'

# Extract specific sessions
cat rawi-history-export.json | jq '.sessions[] | select(.profile == "work")'

# Count messages by provider
cat rawi-history-export.json | jq '.messages | to_entries | map(.value[]) | group_by(.provider) | map({provider: .[0].provider, count: length})'
```

---

## Maintenance

### Cleanup Old Sessions

Remove old conversations to keep your history manageable:

```bash
# Clean up sessions older than 30 days (default)
rawi history cleanup --confirm

# Clean up sessions older than 7 days
rawi history cleanup --days 7 --confirm

# Clean up specific profile
rawi history cleanup --profile old-project --days 1 --confirm

# Preview what would be deleted (without --confirm)
rawi history cleanup --days 30
```

**Example output:**

```bash
⚠️  This will delete sessions older than 30 days for profile "default".
   Add --confirm to proceed.

# With --confirm:
✅ Deleted 12 old sessions.
💾 Database optimized.
```

### Database Optimization

The cleanup command automatically optimizes the database, but you can also:

```bash
# Manual cleanup with optimization
rawi history cleanup --days 90 --confirm

# The database is automatically optimized after cleanup
```

---

## Examples

### Basic History Viewing

```bash
# Show recent conversations
rawi history

# Show more conversations
rawi history --limit 100

# Show history for specific profile
rawi history --profile work
```

### Search and Filter Examples

```bash
# Search for Docker-related conversations
rawi history --search "docker"

# Find TypeScript discussions
rawi history --search "TypeScript"

# Search in specific provider
rawi history --search "deployment" --provider openai

# Find recent OpenAI conversations
rawi history --provider openai --from 2024-01-01

# Complex filter: Recent Claude conversations about security
rawi history --provider anthropic --search "security" --from 2024-01-01
```

### Session Management Examples

```bash
# List all sessions
rawi history sessions

# Show specific conversation
rawi history show abc123-def456

# Delete old session
rawi history delete def456-ghi789

# List sessions for work profile
rawi history sessions --profile work
```

### Analytics Examples

```bash
# Overall usage statistics
rawi history stats

# Work profile statistics
rawi history stats --profile work

# Export work conversations
rawi history export --profile work --output work-backup.json
```

### Maintenance Examples

```bash
# Clean up old conversations (30+ days)
rawi history cleanup --confirm

# Aggressive cleanup (7+ days)
rawi history cleanup --days 7 --confirm

# Clean up specific profile
rawi history cleanup --profile experiment --days 1 --confirm

# Preview cleanup (don't actually delete)
rawi history cleanup --days 30
```

### Workflow Examples

```bash
# Daily routine: Check recent activity
rawi history --limit 10

# Weekly review: Export important conversations
rawi history export --profile work --output "work-$(date +%Y%m%d).json"

# Monthly cleanup: Remove old sessions
rawi history cleanup --days 30 --confirm

# Project handover: Export project-specific conversations
rawi history --search "project-x" > project-x-conversations.txt
rawi history export --profile project-x --output project-x-full.json
```

---

## Advanced Usage

### Scripting with History

```bash
#!/bin/bash
# backup-ai-conversations.sh

# Create timestamped backup
BACKUP_FILE="rawi-backup-$(date +%Y%m%d-%H%M%S).json"
rawi history export --output "$BACKUP_FILE"

# Compress backup
gzip "$BACKUP_FILE"

# Clean up old sessions
rawi history cleanup --days 90 --confirm

echo "✅ Backup created: ${BACKUP_FILE}.gz"
echo "✅ Old sessions cleaned up"
```

### Integration with Other Tools

```bash
# Find sessions and continue conversations
SESSION_ID=$(rawi history sessions | grep "TypeScript" | head -1 | awk '{print $3}')
rawi ask "Can you continue our TypeScript discussion?" --session "$SESSION_ID"

# Export and analyze with jq
rawi history export --output temp.json
MOST_USED_PROVIDER=$(cat temp.json | jq -r '.messages | to_entries | map(.value[]) | group_by(.provider) | max_by(length) | .[0].provider')
echo "Most used provider: $MOST_USED_PROVIDER"

# Search and pipe to other tools
rawi history --search "error" | grep -i "python" | head -5
```

---

## Troubleshooting

### Common Issues

**"No sessions found"**

```bash
# Check if you have any conversations
rawi info
rawi ask "Hello" --new-session  # Create a test session
```

**"Session not found"**

```bash
# List available sessions
rawi history sessions
# Use correct session ID
```

**"Export file too large"**

```bash
# Export specific profile or date range
rawi history export --profile specific --output smaller.json
rawi history export --from 2024-01-01 --output recent.json
```

**"Database issues"**

```bash
# Clean up database
rawi history cleanup --days 30 --confirm
# This also optimizes the database
```

---

## Navigation

- [← Back to Commands](./README.md)
- [Next: act Command →](./act.md)

Related Pages:

- [Session Management](../sessions.md)
- [ask Command](./ask.md)
- [Troubleshooting](../troubleshooting.md)
