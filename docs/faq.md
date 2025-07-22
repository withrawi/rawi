# Frequently Asked Questions (FAQ)

Common questions and answers about Rawi usage, configuration, and troubleshooting.

## Navigation

- [📖 Wiki Home](README.md)
- [🚀 Quick Start](quickstart.md)
- [🔧 Troubleshooting](troubleshooting.md)
- [⚙️ Configuration](commands/configure.md)

---

## General Questions

### What is Rawi?

Rawi is a powerful command-line interface (CLI) tool that brings AI assistance directly to your terminal. It allows you to interact with various AI providers (OpenAI, Anthropic, Google, etc.) to help with coding, writing, analysis, and many other tasks.

### How is Rawi different from other AI tools?

- **Terminal-native**: Works directly in your command line
- **Multiple providers**: Support for OpenAI, Anthropic, Google, Ollama, and more
- **Session management**: Maintain conversation context across commands
- **Act templates**: Pre-built prompts for specific tasks
- **Shell integration**: Pipe data in/out of other commands
- **Profile support**: Different configurations for different use cases

### Is Rawi free to use?

Rawi itself is free and open-source. However, you'll need API access to AI providers:

- **Free options**: Ollama (local), some providers offer free tiers
- **Paid options**: OpenAI, Anthropic, Google (pay per usage)
- **Cost**: Typically cents per request for most use cases

---

## Installation and Setup

### What are the system requirements?

- **Node.js**: Version 16 or higher
- **Operating System**: Windows, macOS, or Linux
- **Internet**: Required for cloud AI providers (not needed for local providers like Ollama)
- **API Keys**: Required for cloud providers

### How do I install Rawi?

```bash
# Install globally via npm
npm install -g @withrawi/rawi

# Verify installation
rawi --version
```

See our [Installation Guide](installation.md) for detailed instructions.

### Can I use Rawi without an internet connection?

Yes, but with limitations:

- **Local providers**: Use Ollama for offline AI capabilities
- **Cloud providers**: Require internet connection
- **Setup**: `rawi provider set ollama` (requires Ollama installation)

### How do I get an API key?

**OpenAI**:

1. Visit [platform.openai.com](https://platform.openai.com)
2. Sign up and navigate to API keys
3. Create a new key (starts with `sk-`)

**Anthropic**:

1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Sign up and go to API keys
3. Create a new key (starts with `sk-ant-`)

**Google**:

1. Visit [Google AI Studio](https://aistudio.google.com)
2. Create an API key
3. Key starts with `AIza`

---

## Configuration Questions

### How do I configure Rawi for the first time?

```bash
# Interactive setup
rawi configure

# Or set provider and API key directly
rawi provider set openai
rawi configure --api-key your-api-key
```

### Can I use multiple AI providers?

Yes! Rawi supports multiple providers:

```bash
# Switch providers anytime
rawi provider set openai
rawi provider set anthropic
rawi provider set google

# Use profiles for different providers
rawi configure --profile work
rawi provider set openai --profile work
```

### How do I reset my configuration?

```bash
# Reset everything to defaults
rawi configure --reset

# Reset specific profile
rawi configure --reset --profile work
```

### Where is my configuration stored?

- **Linux/macOS**: `~/.config/rawi/`
- **Windows**: `%APPDATA%\rawi\`

Files include:

- `config.json` - Main configuration
- `history/` - Conversation history
- `profiles/` - Profile-specific settings

---

## Usage Questions

### How do I ask a basic question?

```bash
# Simple question
rawi ask "What is TypeScript?"

# With file input
rawi ask "Explain this code:" < script.js

# From pipe
echo "Hello world" | rawi ask "Translate to Spanish"
```

### How do I maintain conversation context?

Use sessions to maintain context:

```bash
# Start a session
rawi ask "I'm building a web app" --session webapp

# Continue the conversation
rawi ask "What database should I use?" --session webapp
rawi ask "How do I connect to it?" --session webapp
```

### What are Act templates?

Act templates are pre-built prompts for specific roles:

```bash
# Available templates
rawi act --list

# Use a template
rawi act developer "Help me debug this function"
rawi act writer "Help me write a blog post about AI"
rawi act translator "Translate this to French: Hello world"
```

### How do I work with files?

```bash
# Analyze a file
rawi ask "Review this code for bugs:" < script.js

# Multiple files
rawi ask "Compare these files:" file1.txt file2.txt

# Pipe output
rawi ask "Generate tests for this:" < code.js > tests.js
```

### Can I use Rawi in scripts?

Yes! Rawi works great in automation:

```bash
#!/bin/bash
# Automated code review
git diff | rawi ask "Review these changes" > review.txt

# Generate documentation
rawi ask "Create README for this project:" < package.json > README.md
```

---

## Advanced Features

### How do profiles work?

Profiles allow different configurations:

```bash
# Create profiles
rawi configure --profile work    # For work projects
rawi configure --profile personal # For personal use

# Switch between profiles
rawi ask "Question" --profile work
rawi provider set anthropic --profile personal
```

### How do I manage conversation history?

```bash
# View recent history
rawi history

# View specific session
rawi history --session webapp

# Export history
rawi history --session webapp --format markdown > session.md

# Clear old history
rawi history --clear --older-than 30d
```

### Can I customize the output format?

Yes, Rawi supports different output formats:

```bash
# Markdown output
rawi ask "Explain APIs" --format markdown

# JSON output (for scripts)
rawi ask "List benefits of TypeScript" --format json

# Plain text (default)
rawi ask "What is Node.js?"
```

### How do I integrate with my shell?

Enable shell integration for enhanced features:

```bash
# Enable integration
rawi configure --shell-integration

# Use enhanced features
rawi ask "Explain this error:" < error.log
git log --oneline | rawi ask "Summarize recent changes"
```

---

## Troubleshooting

### Why am I getting "command not found"?

1. **Check installation**: `npm list -g @withrawi/rawi`
2. **Check PATH**: `echo $PATH` should include npm global bin
3. **Use npx**: `npx @withrawi/rawi --version`
4. **Reinstall**: `npm install -g @withrawi/rawi`

### Why are my API calls failing?

1. **Check API key**: `rawi info`
2. **Verify provider**: `rawi provider list`
3. **Test connection**: `rawi ask "test" --debug`
4. **Check credits**: Visit your provider's dashboard

### Why is Rawi slow?

1. **Try different provider**: `rawi provider set anthropic`
2. **Check network**: Test internet speed
3. **Use shorter prompts**: Be more concise
4. **Use local provider**: `rawi provider set ollama`

### How do I report bugs?

1. **Check troubleshooting**: [Troubleshooting Guide](troubleshooting.md)
2. **Gather info**: `rawi --version`, `rawi info`
3. **Reproduce**: Document exact steps
4. **Report**: Submit to GitHub issues

---

## Best Practices

### How should I write effective prompts?

1. **Be specific**: "Review this TypeScript function for performance issues"
2. **Provide context**: "In the context of a React app..."
3. **Use examples**: "Like this: [example]"
4. **Be clear about output**: "Provide bullet points"

### How can I save costs?

1. **Use appropriate models**: Smaller models for simple tasks
2. **Be concise**: Shorter prompts cost less
3. **Use sessions**: Maintain context without repeating information
4. **Local providers**: Use Ollama for free local processing
5. **Monitor usage**: Check your provider's usage dashboard

### What are security best practices?

1. **Protect API keys**: Never share or commit them
2. **Use environment variables**: `export RAWI_API_KEY="key"`
3. **Review permissions**: Limit API key permissions when possible
4. **Regular rotation**: Change API keys periodically
5. **Monitor usage**: Watch for unexpected usage patterns

### How should I organize my workflows?

1. **Use profiles**: Separate work/personal configurations
2. **Use sessions**: Group related conversations
3. **Use templates**: Standardize common tasks
4. **Export important**: Save valuable conversations
5. **Clean up**: Remove old history periodically

---

## Limitations and Considerations

### What are Rawi's limitations?

1. **Internet dependency**: Most providers require internet
2. **API costs**: Cloud providers charge per usage
3. **Rate limits**: Providers have usage limits
4. **Context limits**: Models have maximum input sizes
5. **File size limits**: Large files may exceed limits

### What about data privacy?

1. **Cloud providers**: Data sent to third-party APIs
2. **Local providers**: Data stays on your machine (Ollama)
3. **History storage**: Conversations stored locally
4. **API policies**: Review provider privacy policies
5. **Sensitive data**: Avoid sending confidential information

### Can I use Rawi commercially?

Yes, but consider:

1. **License**: Check Rawi's license terms
2. **Provider terms**: Review API provider terms of service
3. **Data handling**: Ensure compliance with your policies
4. **Cost management**: Monitor and budget API usage

---

## Getting Help

### Where can I find more information?

- [📖 Main Documentation](README.md) - Complete wiki
- [🚀 Quick Start](quickstart.md) - Get started quickly
- [📚 Commands Reference](commands/README.md) - All commands
- [🔧 Troubleshooting](troubleshooting.md) - Problem solving
- [🛠️ Configuration](commands/configure.md) - Setup guide

### How do I contribute or get support?

1. **GitHub Issues**: Bug reports and feature requests
2. **Documentation**: Contribute to this wiki
3. **Community**: Share tips and workflows
4. **Code**: Submit pull requests

### What's the roadmap for Rawi?

Check the GitHub repository for:

- Planned features
- Release notes
- Development progress
- Community discussions

---

## Quick Reference

### Essential Commands

```bash
# Setup
rawi configure                    # Interactive setup
rawi provider set openai         # Set AI provider

# Basic usage
rawi ask "question"              # Ask a question
rawi ask "question" --session s1 # Use session
rawi act developer "help"        # Use template

# Management
rawi history                     # View history
rawi info                       # Show configuration
rawi provider list              # List providers

# Help
rawi --help                     # General help
rawi ask --help                 # Command help
```

### Common Workflows

```bash
# Code review
git diff | rawi ask "Review changes"

# Documentation
rawi ask "Create README:" < package.json

# Learning
rawi ask "Explain this concept:" < article.txt

# Writing
rawi act writer "Help with blog post about AI"
```

---

_Part of the [Rawi Documentation Wiki](README.md)_
