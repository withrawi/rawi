# Session Management

Learn how to effectively manage your AI conversations with Rawi's powerful session management system.

## Navigation

- [📖 Wiki Home](./README.md)
- [📊 History Command](./commands/history.md)
- [💬 Ask Command](./commands/ask.md)
- [⚙️ Configuration](./commands/configure.md)

---

## What Are Sessions?

Sessions in Rawi are persistent conversation threads that maintain context across multiple interactions. Each session:

- **Preserves context** — AI remembers previous messages in the conversation
- **Belongs to a profile** — Organized by your configured AI provider profiles
- **Has metadata** — Tracks creation time, message count, and usage statistics
- **Can be continued** — Resume conversations from where you left off
- **Stores history** — All messages are saved and searchable

## Basic Session Usage

### Automatic Session Management

Rawi handles sessions automatically:

```bash
# First message creates a new session
rawi ask "Help me design a REST API"

# Follow-up messages continue the same session
rawi ask "What about authentication?"
rawi ask "How should I handle rate limiting?"
```

### Explicit Session Control

Take control of your conversation flow:

```bash
# Start a new session explicitly
rawi ask "Let's plan a new project" --new-session

# Continue a specific session
rawi ask "What were we discussing?" --session abc123-def456

# Get session ID for later use
rawi history sessions --limit 1
```

## Session Lifecycle

### 1. Session Creation

Sessions are created automatically or explicitly:

```bash
# Automatic creation (first message for profile)
rawi ask "Hello, I need help with Python"

# Explicit creation
rawi ask "Start fresh discussion" --new-session

# Profile-specific sessions
rawi ask "Help with deployment" --profile work --new-session
```

### 2. Session Continuation

Resume conversations seamlessly:

```bash
# Continue current session (default behavior)
rawi ask "Can you expand on that?"

# Continue specific session
rawi ask "What about error handling?" --session abc123-def456

# Switch between sessions
rawi ask "Different topic" --session xyz789-abc123
```

### 3. Session History

Access your conversation history:

```bash
# View recent sessions
rawi history sessions

# Show specific session
rawi history show abc123-def456

# Search across sessions
rawi history --search "docker deployment"
```

## Advanced Session Management

### Multiple Concurrent Sessions

Manage different conversation threads:

```bash
# Work project session
rawi ask "Design microservices architecture" --profile work --new-session
# Session ID: work-session-1

# Personal learning session
rawi ask "Explain quantum computing" --profile personal --new-session
# Session ID: personal-session-1

# Switch between them
rawi ask "Add API gateway details" --session work-session-1
rawi ask "What about quantum algorithms?" --session personal-session-1
```

### Profile-Based Session Organization

Sessions are organized by profile:

```bash
# Development profile sessions
rawi ask "Review this code" --profile development

# Analysis profile sessions
rawi ask "Analyze this dataset" --profile analysis

# Local profile sessions
rawi ask "Quick question" --profile local

# View sessions by profile
rawi history sessions --profile development
```

### Session Naming and Organization

Sessions can have meaningful titles:

```bash
# Sessions auto-generate titles based on content
rawi ask "Help me build a React component" --new-session
# Creates session with title like "React Component Development"

# View sessions with titles
rawi history sessions
```

## Session Context Management

### Understanding Context Windows

Each session maintains conversation context:

- **Full context** — AI sees all previous messages in the session
- **Token limits** — Longer sessions may hit model token limits
- **Smart truncation** — Rawi manages context when approaching limits
- **Fresh start** — New sessions start with clean context

### Context Strategies

Choose the right approach for your use case:

```bash
# Long-form discussions (maintain context)
rawi ask "Let's architect a complex system" --new-session
rawi ask "What about the database layer?"
rawi ask "How do we handle scalability?"

# Quick questions (start fresh)
rawi ask "Quick Python syntax question" --new-session
rawi ask "Another unrelated question" --new-session

# Project-specific contexts
rawi ask "Working on mobile app" --profile mobile --new-session
rawi ask "Backend API questions" --profile backend --new-session
```

## Session Discovery and Navigation

### Listing Sessions

Find your conversations:

```bash
# Recent sessions
rawi history sessions

# More sessions
rawi history sessions --limit 20

# All sessions
rawi history sessions --all

# Profile-specific
rawi history sessions --profile work
```

### Searching Sessions

Find specific conversations:

```bash
# Search message content
rawi history --search "docker deployment"

# Search with filters
rawi history --search "react components" --profile frontend

# Time-based search
rawi history --from 2024-01-01 --search "authentication"
```

### Session Details

Get comprehensive session information:

```bash
# Full session conversation
rawi history show abc123-def456

# Session metadata
rawi history sessions | grep abc123-def456
```

## Session Analytics

### Usage Statistics

Monitor your AI usage:

```bash
# Overall statistics
rawi history stats

# Profile-specific stats
rawi history stats --profile work

# Statistics include:
# - Total sessions
# - Total messages
# - Usage by provider
# - Usage by model
# - Time ranges
```

### Session Metrics

Understanding your conversation patterns:

```bash
# View session list with metrics
rawi history sessions
# Shows: ID, title, message count, creation time

# Detailed statistics
rawi history stats
# Shows: Provider usage, model preferences, activity patterns
```

## Session Cleanup and Maintenance

### Managing Old Sessions

Keep your history organized:

```bash
# Delete specific session
rawi history delete abc123-def456

# Clean up old sessions (30+ days)
rawi history cleanup --days 30

# Clean up specific profile
rawi history cleanup --profile old-project --days 7
```

### Exporting Sessions

Backup your conversation history:

```bash
# Export all history
rawi history export --output backup.json

# Export specific profile
rawi history export --profile work --output work-conversations.json

# Export specific time range
rawi history export --from 2024-01-01 --to 2024-03-31 --output q1-history.json
```

## Best Practices

### Session Organization

1. **Use meaningful profiles** — Separate work, personal, and project contexts
2. **Start new sessions for new topics** — Avoid mixing unrelated discussions
3. **Continue sessions for related work** — Maintain context for ongoing projects
4. **Clean up regularly** — Remove old or unnecessary sessions

### Context Management

1. **Monitor session length** — Very long sessions may lose early context
2. **Start fresh when needed** — New sessions for significantly different topics
3. **Use explicit session IDs** — For important conversations you want to continue
4. **Leverage search** — Find relevant past discussions quickly

### Workflow Integration

```bash
# Daily workflow example
rawi ask "Review today's priorities" --profile work --new-session
rawi ask "What about the deployment issue from yesterday?" --session yesterday-session

# Research workflow
rawi ask "Learning about machine learning" --profile learning --new-session
rawi ask "Can you elaborate on neural networks?"
rawi ask "What about training data?"

# Problem-solving workflow
rawi ask "Debugging authentication issue" --profile support --new-session
rawi ask "The JWT token seems invalid"
rawi ask "How do I validate the signature?"
```

## Integration with Other Features

### Session + Act Templates

Combine sessions with expert templates:

```bash
# Start expert consultation
rawi ask --act security-expert "Review authentication system" --new-session
rawi ask "What about password policies?"
rawi ask "How about two-factor authentication?"

# Continue with different expert
rawi ask --act database-admin "Optimize user queries" --session auth-session
```

### Session + Profiles

Use sessions across different AI providers:

```bash
# Start with powerful model
rawi ask "Complex architecture question" --profile claude --new-session

# Continue with faster model for follow-up
rawi ask "Quick clarification" --profile local --session arch-session

# Switch back for complex analysis
rawi ask "Deep dive into performance" --profile claude --session arch-session
```

## Troubleshooting Sessions

### Common Issues

**Session not found:**

```bash
# Check if session exists
rawi history sessions | grep abc123

# List recent sessions
rawi history sessions --limit 10
```

**Context lost:**

```bash
# Very long sessions may hit token limits
# Start a new session with a summary:
rawi ask "Summarize our previous discussion about X" --new-session
```

**Session conflicts:**

```bash
# Sessions belong to specific profiles
# Use correct profile to access session:
rawi ask "Continue discussion" --profile correct-profile --session abc123
```

### Session Recovery

```bash
# View session details
rawi history show abc123-def456

# Export session for backup
rawi history export --session abc123-def456 --output session-backup.json

# Search for similar discussions
rawi history --search "relevant keywords"
```

## Related Documentation

- [📊 History Command Reference](./commands/history.md)
- [💬 Ask Command Usage](./commands/ask.md)
- [👤 Profile Management](./profiles.md)
- [🔍 Search and Discovery](./commands/history.md#searching-and-filtering)

---

**Next Steps:**

- [Learn about history management](./commands/history.md)
- [Master the ask command](./commands/ask.md)
- [Set up multiple profiles](./profiles.md)
