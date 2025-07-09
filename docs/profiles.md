# Profile Management

Master Rawi's profile system to efficiently manage multiple AI providers, models, and configurations for different use cases.

## Navigation

- [📖 Wiki Home](./README.md)
- [⚙️ Configuration Command](./commands/configure.md)
- [ℹ️ System Info](./commands/info.md)
- [🏠 Providers Guide](./providers/README.md)

---

## What Are Profiles?

Profiles in Rawi are named configurations that store:

- **AI Provider** — Which AI service to use (OpenAI, Anthropic, Ollama, etc.)
- **Model Selection** — Specific model within the provider
- **Authentication** — API keys and credentials
- **Generation Settings** — Temperature, max tokens, language preferences
- **Provider Settings** — Custom endpoints, regions, and provider-specific options

## Profile Benefits

### Multiple Use Cases

```bash
# Different profiles for different needs
rawi configure --profile work --provider openai --model gpt-4o
rawi configure --profile analysis --provider anthropic --model claude-3-sonnet-20240229
rawi configure --profile local --provider ollama --model llama3.2
rawi configure --profile budget --provider openai --model gpt-3.5-turbo
```

### Easy Switching

```bash
# Use specific profiles for tasks
rawi ask "Review this code" --profile work
rawi ask "Analyze this data" --profile analysis
rawi ask "Quick question" --profile local
```

### Isolated Configurations

Each profile maintains separate:

- Conversation history
- Usage statistics
- Session management
- Provider credentials

## Basic Profile Management

### Creating Profiles

```bash
# Interactive profile creation
rawi configure --profile myprofile

# Quick profile setup
rawi configure --profile work \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-key

# Copy existing profile settings
rawi configure --profile backup --provider openai --model gpt-4o
```

### Viewing Profiles

```bash
# List all profiles
rawi configure --list

# Show specific profile
rawi configure --profile work --show

# Show all profile details
rawi info --profiles

# Quick profile overview
rawi info
```

### Using Profiles

```bash
# Use default profile
rawi ask "How are you?"

# Use specific profile
rawi ask "Code review question" --profile work

# Switch between profiles
rawi ask "Data analysis task" --profile analysis
rawi ask "Quick local question" --profile local
```

## Profile Configuration Strategies

### By Use Case

**Development Profile:**

```bash
rawi configure --profile development \
  --provider openai \
  --model gpt-4o \
  --temperature 0.2 \
  --max-tokens 4096
```

**Creative Writing Profile:**

```bash
rawi configure --profile creative \
  --provider anthropic \
  --model claude-3-opus-20240229 \
  --temperature 0.8 \
  --max-tokens 2048
```

**Analysis Profile:**

```bash
rawi configure --profile analysis \
  --provider anthropic \
  --model claude-3-sonnet-20240229 \
  --temperature 0.1 \
  --max-tokens 4096
```

**Local/Private Profile:**

```bash
rawi configure --profile private \
  --provider ollama \
  --model llama3.2 \
  --temperature 0.5
```

### By Performance Needs

**High Performance:**

```bash
rawi configure --profile performance \
  --provider openai \
  --model gpt-4o \
  --max-tokens 4096
```

**Cost Effective:**

```bash
rawi configure --profile budget \
  --provider openai \
  --model gpt-3.5-turbo \
  --max-tokens 2048
```

**Speed Optimized:**

```bash
rawi configure --profile fast \
  --provider anthropic \
  --model claude-3-haiku-20240307 \
  --max-tokens 1024
```

### By Context Requirements

**Long Context:**

```bash
rawi configure --profile longcontext \
  --provider anthropic \
  --model claude-3-sonnet-20240229 \
  --max-tokens 8192
```

**Short Context:**

```bash
rawi configure --profile quick \
  --provider openai \
  --model gpt-3.5-turbo \
  --max-tokens 1024
```

## Advanced Profile Management

### Profile Templates

Common profile configurations:

**Software Development:**

```bash
# Primary development profile
rawi configure --profile dev-main \
  --provider openai \
  --model gpt-4o \
  --temperature 0.2 \
  --language english

# Code review profile
rawi configure --profile dev-review \
  --provider anthropic \
  --model claude-3-sonnet-20240229 \
  --temperature 0.1 \
  --language english

# Local development profile
rawi configure --profile dev-local \
  --provider ollama \
  --model codellama \
  --temperature 0.3
```

**Data Science:**

```bash
# Analysis profile
rawi configure --profile data-analysis \
  --provider anthropic \
  --model claude-3-opus-20240229 \
  --temperature 0.1 \
  --max-tokens 4096

# Visualization profile
rawi configure --profile data-viz \
  --provider openai \
  --model gpt-4o \
  --temperature 0.3 \
  --max-tokens 2048
```

**Content Creation:**

```bash
# Writing profile
rawi configure --profile writing \
  --provider anthropic \
  --model claude-3-opus-20240229 \
  --temperature 0.7 \
  --max-tokens 3072

# Editing profile
rawi configure --profile editing \
  --provider openai \
  --model gpt-4o \
  --temperature 0.3 \
  --max-tokens 2048
```

### Multi-Provider Setups

Use different providers for different strengths:

```bash
# OpenAI for coding
rawi configure --profile coding \
  --provider openai \
  --model gpt-4o

# Anthropic for analysis
rawi configure --profile analysis \
  --provider anthropic \
  --model claude-3-sonnet-20240229

# Ollama for privacy
rawi configure --profile private \
  --provider ollama \
  --model llama3.2

# Google for multimodal
rawi configure --profile multimodal \
  --provider google \
  --model gemini-pro
```

## Profile-Specific Features

### Independent Histories

Each profile maintains separate conversation history:

```bash
# Work conversations
rawi ask "Project planning" --profile work
rawi history sessions --profile work

# Personal conversations
rawi ask "Learning topic" --profile personal
rawi history sessions --profile personal

# Histories don't mix between profiles
```

### Profile Statistics

Monitor usage per profile:

```bash
# Overall statistics
rawi history stats

# Profile-specific statistics
rawi history stats --profile work
rawi history stats --profile analysis

# Compare profile usage
rawi info --profiles
```

### Profile-Based Session Management

Sessions are tied to profiles:

```bash
# Start session in work profile
rawi ask "Architecture discussion" --profile work --new-session

# Continue session (must use same profile)
rawi ask "Add database details" --profile work --session abc123

# Different profile = different sessions
rawi ask "Personal question" --profile personal --new-session
```

## Profile Workflows

### Development Workflow

```bash
# Daily development routine
morning_standup() {
  rawi ask "Review today's priorities" --profile dev-main --new-session
}

code_review() {
  rawi ask "Review this PR" --profile dev-review < changes.diff
}

architecture_planning() {
  rawi ask "Design system architecture" --profile dev-architect --new-session
}

local_testing() {
  rawi ask "Quick debugging help" --profile dev-local
}
```

### Research Workflow

```bash
# Research and analysis routine
initial_research() {
  rawi ask "Overview of topic X" --profile research --new-session
}

deep_analysis() {
  rawi ask "Detailed analysis of Y" --profile analysis
}

creative_synthesis() {
  rawi ask "Synthesize findings creatively" --profile creative
}

final_review() {
  rawi ask "Review and critique" --profile review
}
```

### Content Creation Workflow

```bash
# Content development process
brainstorm() {
  rawi ask "Generate content ideas" --profile creative --new-session
}

draft() {
  rawi ask "Write first draft" --profile writing
}

edit() {
  rawi ask "Edit and improve" --profile editing
}

optimize() {
  rawi ask "SEO and readability" --profile marketing
}
```

## Profile Best Practices

### Naming Conventions

Use clear, descriptive profile names:

```bash
# Good naming
rawi configure --profile work-frontend
rawi configure --profile personal-learning
rawi configure --profile client-projectx
rawi configure --profile analysis-financial

# Avoid generic names
rawi configure --profile test
rawi configure --profile temp
rawi configure --profile profile1
```

### Profile Organization

Structure profiles by:

1. **Context** — work, personal, client
2. **Purpose** — development, analysis, creative
3. **Provider** — openai-main, anthropic-analysis
4. **Performance** — fast-responses, detailed-analysis

### Configuration Management

Keep configurations organized:

```bash
# Document your profiles
rawi info --profiles > profiles-backup.txt

# Regular profile cleanup
rawi configure --list
rawi configure --delete unused-profile

# Backup important configurations
rawi configure --profile important --show > important-profile.config
```

## Profile Switching and Automation

### Quick Profile Switching

```bash
# Set up aliases for common profiles
alias rawi-work="rawi ask --profile work"
alias rawi-analysis="rawi ask --profile analysis"
alias rawi-local="rawi ask --profile local"

# Use aliases
rawi-work "Review this architecture"
rawi-analysis "Analyze this dataset"
rawi-local "Quick question"
```

### Scripted Profile Usage

```bash
#!/bin/bash
# Smart profile selection script

task_type=$1
question=$2

case $task_type in
  "code")
    rawi ask "$question" --profile development
    ;;
  "analyze")
    rawi ask "$question" --profile analysis
    ;;
  "write")
    rawi ask "$question" --profile creative
    ;;
  "quick")
    rawi ask "$question" --profile local
    ;;
  *)
    rawi ask "$question" --profile default
    ;;
esac
```

### Environment-Based Profiles

```bash
# Set profile based on environment
if [[ "$PWD" == *"/work/"* ]]; then
  export RAWI_PROFILE="work"
elif [[ "$PWD" == *"/personal/"* ]]; then
  export RAWI_PROFILE="personal"
else
  export RAWI_PROFILE="default"
fi

# Use environment-based profile
rawi ask "Context-aware question" --profile $RAWI_PROFILE
```

## Profile Troubleshooting

### Common Issues

**Profile not found:**

```bash
# Check available profiles
rawi configure --list

# Create missing profile
rawi configure --profile missing-profile
```

**Authentication errors:**

```bash
# Check profile configuration
rawi configure --profile problematic --show

# Reconfigure credentials
rawi configure --profile problematic --api-key new-key
```

**Model not available:**

```bash
# Check provider models
rawi provider --list-models your-provider

# Update model selection
rawi configure --profile your-profile --model available-model
```

### Profile Cleanup

```bash
# Remove unused profiles
rawi configure --delete old-profile

# Clean up profile history
rawi history cleanup --profile old-profile --days 0

# Reset profile configuration
rawi configure --profile reset-me # Reconfigure interactively
```

### Profile Migration

```bash
# Backup current profiles
rawi info --profiles > profiles-backup.txt

# Export profile history
rawi history export --profile old-profile --output old-profile-history.json

# Create new profile with same settings
rawi configure --profile new-profile --provider same --model same

# Clean up old profile
rawi configure --delete old-profile
```

## Related Documentation

- [⚙️ Configuration Command](./commands/configure.md)
- [🏠 AI Providers Guide](./providers/README.md)
- [📊 Session Management](./sessions.md)
- [ℹ️ System Information](./commands/info.md)

---

**Next Steps:**

- [Configure your first profile](./commands/configure.md)
- [Explore AI providers](./providers/README.md)
- [Learn session management](./sessions.md)
