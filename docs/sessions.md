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

# Start a session with a custom name
rawi ask "Begin architecture discussion" --session-name "Microservices Design"

# 🆕 Interactive session selection
rawi ask "Continue from where I left off" --list-sessions
rawi chat --list-sessions

# 🆕 Session management options
rawi ask "Show current session details" --show-session-id
rawi ask "Export this conversation" --export-session abc123-def456
rawi chat --rename-session "Updated Project Name"

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

Find your conversations with enhanced display options:

```bash
# Recent sessions (enhanced with full IDs)
rawi history sessions

# 🆕 Interactive session selection
rawi history sessions --interactive

# 🆕 Table format with full details
rawi history sessions --table

# 🆕 Session statistics and metrics
rawi history sessions --stats

# More sessions with limits
rawi history sessions --limit 20

# All sessions
rawi history sessions --all

# Profile-specific sessions
rawi history sessions --profile work

# 🆕 Advanced session operations
rawi history sessions --operations-menu
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

# 🆕 Session operations
rawi history rename abc123-def456 "New Session Name"
rawi history delete abc123-def456
rawi history export abc123-def456 --output session.json
```

## 🆕 Enhanced Session Features

### Interactive Session Management

The new interactive features make session management effortless:

```bash
# Interactive session selection with full IDs
rawi ask "Continue discussion" --list-sessions
# Displays: Complete session IDs, names, message counts, creation dates
# Allows: Easy selection with arrow keys and enter

# Table format display
rawi history sessions --table
# Shows: Organized table with full session details
# Includes: ID, Name, Messages, Created, Profile

# Session statistics dashboard
rawi history sessions --stats
# Displays: Total sessions, messages, usage patterns
# Metrics: Provider distribution, model usage, activity trends
```

### Advanced Session Operations

Comprehensive session management capabilities:

```bash
# Session naming and organization
rawi chat --session-name "Project Alpha Planning"
rawi history rename abc123 "Updated Project Name"

# Session export and backup
rawi history export abc123 --output "project-session.json"
rawi history export --profile work --output "work-backup.json"

# Session insights and analytics
rawi history stats --profile development
rawi history sessions --search "authentication" --table

# Batch operations
rawi history cleanup --days 30 --profile old-project
rawi history delete-multiple --interactive
```

### Full ID Display and No Truncation

All session identifiers are displayed in full:

- **Complete IDs** — No more truncated session identifiers
- **Clear Tables** — Formatted tables with all details visible
- **Easy Selection** — Interactive prompts with full context
- **Better Navigation** — Find and select sessions with confidence

## Session Analytics

### Usage Statistics

Monitor your AI usage with comprehensive analytics:

```bash
# Overall statistics dashboard
rawi history stats
# Shows: Total sessions, messages, providers, models, time patterns

# 🆕 Session-specific statistics
rawi history sessions --stats
# Displays: Session distribution, average messages, activity trends

# Profile-specific analytics
rawi history stats --profile work
# Shows: Work profile usage patterns and metrics

# Enhanced statistics include:
# - Total sessions and messages
# - Usage by provider and model
# - Time-based activity patterns
# - Session duration analytics
# - Message frequency insights
```

### Session Metrics

Understanding your conversation patterns with enhanced displays:

```bash
# 🆕 Enhanced session list with complete metrics
rawi history sessions --table
# Table shows: Full IDs, names, message counts, creation dates, profiles

# 🆕 Interactive session analytics
rawi history sessions --interactive --stats
# Combines: Session selection with statistical insights

# Detailed session-level statistics
rawi history stats --detailed
# Shows: Per-session metrics, usage trends, conversation analytics
```

## Session Cleanup and Maintenance

### Managing Sessions

Keep your history organized with enhanced management tools:

```bash
# 🆕 Enhanced session deletion
rawi history delete abc123-def456                 # Delete specific session
rawi history delete --interactive                 # Select sessions to delete

# 🆕 Session renaming
rawi history rename abc123-def456 "New Name"      # Rename specific session
rawi chat --rename-session "Updated Name"         # Rename current session

# Clean up old sessions with better filtering
rawi history cleanup --days 30                    # Remove sessions older than 30 days
rawi history cleanup --profile old-project --days 7 # Profile-specific cleanup

# 🆕 Batch operations
rawi history cleanup --interactive                 # Interactive cleanup selection
rawi history sessions --operations-menu           # Session management menu
```

### Exporting Sessions

Backup your conversation history with enhanced export options:

```bash
# 🆕 Enhanced export capabilities
rawi history export --output backup.json          # Export all history
rawi history export abc123 --output session.json  # Export specific session

# Advanced export options
rawi history export --profile work --output work-conversations.json
rawi history export --from 2024-01-01 --to 2024-03-31 --output q1-history.json

# 🆕 Export with full metadata preservation
rawi history export abc123 --include-metadata --output detailed-session.json
rawi history export --stats --output usage-report.json
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
# Check if session exists with enhanced display
rawi history sessions --table | grep abc123

# List recent sessions with full details
rawi history sessions --limit 10 --table
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

**🆕 Interactive selection issues:**

```bash
# If interactive selection doesn't work, try direct approach:
rawi history sessions --table                     # View all sessions
rawi ask "Continue" --session [specific-id]       # Use specific session ID

# Check terminal compatibility for interactive features
rawi history sessions --no-interactive            # Fallback to table display
```

### Session Recovery

Enhanced recovery options:

```bash
# View comprehensive session details
rawi history show abc123-def456 --detailed

# Export session for backup with full metadata
rawi history export abc123-def456 --include-metadata --output recovery.json

# Search for similar discussions with enhanced search
rawi history --search "relevant keywords" --table

# 🆕 Session analytics for pattern matching
rawi history stats --find-similar abc123-def456
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
