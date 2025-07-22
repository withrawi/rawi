# Quick Start Guide

Get started with Rawi in just a few minutes! This guide will walk you through your first AI conversation and essential features.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Your First Question](#your-first-question)
- [Understanding Profiles](#understanding-profiles)
- [Using Act Templates](#using-act-templates)
- [Session Management](#session-management)
- [Shell Integration Basics](#shell-integration-basics)
- [Next Steps](#next-steps)

---

## Prerequisites

Before starting, make sure you have:

✅ **Rawi installed** — See [Installation Guide](./installation.md)  
✅ **At least one provider configured** — Run `rawi configure` if needed  
✅ **Terminal open** — Any modern terminal will work

### Quick Check

Verify your setup:

```bash
# Check version
rawi --version

# Verify configuration
rawi info
```

---

## Your First Question

Let's start with a simple question to test your setup:

```bash
rawi ask "What is the difference between JavaScript and TypeScript?"
```

### What You'll See

```bash
$ rawi ask "What is the difference between JavaScript and TypeScript?"

🤖 JavaScript and TypeScript are both programming languages, but TypeScript
is essentially JavaScript with static type checking. Here are the key
differences:

**JavaScript:**
- Dynamic typing (variables can change types)
- Runtime error detection
- No compilation step required
- Runs directly in browsers and Node.js
- More flexible but potentially error-prone

**TypeScript:**
- Static typing (types are checked at compile time)
- Compile-time error detection
- Compiles to JavaScript
- Better IDE support and autocomplete
- More verbose but safer for large applications

TypeScript is particularly useful for larger projects where type safety
helps prevent common programming errors.
```

🎉 **Congratulations!** You've just had your first AI conversation with Rawi.

---

## Understanding Profiles

Profiles allow you to use different AI providers for different tasks. Let's explore your current setup:

### Check Your Current Profile

```bash
# Show current configuration
rawi configure --show

# List all profiles
rawi configure --list
```

### Using Different Profiles

If you have multiple profiles configured:

```bash
# Use a specific profile
rawi ask "Explain React hooks" --profile work

# Shorter version
rawi ask "Explain React hooks" -p work
```

### Create Additional Profiles

```bash
# Create a profile for local AI
rawi configure --profile local --provider ollama --model llama3.2

# Create a profile for analysis work
rawi configure --profile analysis --provider anthropic --model claude-3-5-sonnet-20241022
```

---

## Using Act Templates

Act templates are pre-built prompts that make the AI behave like different experts. They're one of Rawi's most powerful features!

### Browse Available Templates

```bash
# List all templates (interactive)
rawi act --list

# Show details of a specific template
rawi act --show code-reviewer
```

### Use Templates in Questions

```bash
# Get a Linux terminal simulation
rawi ask --act linux-terminal "list files in home directory with details"

# Code review assistance
rawi ask --act code-reviewer "Review this Python function for improvements"

# Security expert analysis
rawi ask --act security-expert "What are common web vulnerabilities?"

# Ethereum developer guidance
rawi ask --act ethereum-developer "Explain smart contract security best practices"
```

### Popular Templates for Developers

- **`code-reviewer`** — Code analysis and optimization
- **`linux-terminal`** — Terminal command simulation
- **`security-expert`** — Security analysis and auditing
- **`tech-writer`** — Technical documentation
- **`database-admin`** — SQL optimization and database management
- **`api-documenter`** — API documentation and examples

---

## Session Management

Sessions allow you to have continuous conversations with context. Each question remembers previous ones in the same session.

### Basic Session Usage

```bash
# Start a new session
rawi ask "I'm building a React app with TypeScript" --new-session

# Continue the conversation (automatically uses current session)
rawi ask "How should I structure my components?"

# Ask a follow-up
rawi ask "What about state management?"
```

### Working with Specific Sessions

```bash
# Continue a specific session later
rawi ask "What about testing strategies?" --session abc123-def456

# Start a new session for a different topic
rawi ask "Now I want to learn Python" --new-session
```

### View Your Sessions

```bash
# Show recent conversations
rawi history

# Show sessions only
rawi history sessions

# Show details of a specific session
rawi history show abc123-def456
```

---

## Shell Integration Basics

Rawi integrates seamlessly with your shell, making it perfect for developer workflows.

### Pipe Input to Rawi

```bash
# Pipe file content for analysis
cat server.js | rawi ask "Review this Express.js server for security issues"

# Analyze git changes
git diff | rawi ask "Review these changes and suggest improvements"

# Process command output
ls -la | rawi ask "Explain these file permissions"

# Analyze logs
tail -100 app.log | rawi ask "Summarize these log entries"
```

### Save Output to Files

```bash
# Generate and save code
rawi ask "Create a TypeScript interface for a User" > user.ts

# Create documentation
rawi ask "Write README for a CLI tool" > README.md

# Generate configurations
rawi ask "Create ESLint config for React TypeScript" > .eslintrc.js
```

### Combine with Other Tools

```bash
# Search and analyze
grep ERROR app.log | rawi ask "Categorize these errors by type"

# Process API responses
curl -s api.example.com/data | rawi ask "Explain this API structure"

# Database analysis
echo "SELECT * FROM users LIMIT 5" | rawi ask --act database-admin "Optimize this query"
```

---

## Essential Commands Cheat Sheet

### Basic Usage

```bash
# Simple question
rawi ask "Your question here"

# With specific profile
rawi ask "Your question" --profile work

# With expert template
rawi ask --act code-reviewer "Your code question"

# Start new session
rawi ask "Your question" --new-session
```

### Configuration

```bash
# Interactive setup
rawi configure

# Show current config
rawi configure --show

# List all profiles
rawi configure --list
```

### History & Sessions

```bash
# Show recent conversations
rawi history

# Search conversations
rawi history --search "docker"

# Show session details
rawi history show session-id
```

### Information

```bash
# System info
rawi info

# Available providers
rawi provider --list

# Available templates
rawi act --list
```

---

## Common Use Cases

### Code Development

```bash
# Debug an error
rawi ask "Fix this Python error: NameError: name 'x' is not defined"

# Code review
git diff | rawi ask --act code-reviewer "Review these changes"

# Generate tests
cat utils.js | rawi ask "Generate unit tests for these functions"

# Create documentation
rawi ask --act tech-writer "Document this API endpoint" < api.js
```

### Learning & Research

```bash
# Quick explanations
rawi ask "Explain async/await in JavaScript"

# Compare technologies
rawi ask "Compare React vs Vue.js for a small project"

# Best practices
rawi ask --act security-expert "Web security best practices for Node.js"
```

### Data Analysis

```bash
# Analyze CSV data
cat data.csv | rawi ask "Analyze this sales data and identify trends"

# Process logs
grep ERROR app.log | rawi ask "What types of errors are most common?"

# Explain data structures
echo '{"users": [{"id": 1, "name": "John"}]}' | rawi ask "Explain this JSON structure"
```

---

## Tips for Better Results

### 1. Be Specific

```bash
# ❌ Vague
rawi ask "Help with code"

# ✅ Specific
rawi ask "Review this React component for performance issues" < component.jsx
```

### 2. Use Templates for Expertise

```bash
# ❌ Generic
rawi ask "Check my database query"

# ✅ With expert template
rawi ask --act database-admin "Optimize this SQL query for performance" < query.sql
```

### 3. Provide Context

```bash
# ❌ No context
rawi ask "Fix this error"

# ✅ With context
rawi ask "Fix this Python Flask error in a REST API: AttributeError: 'NoneType'"
```

### 4. Use Sessions for Complex Topics

```bash
# Start a session for a project
rawi ask "I'm building a microservices architecture with Node.js" --new-session

# Continue building context
rawi ask "How should I handle authentication between services?"
rawi ask "What about database design for this architecture?"
```

---

## Next Steps

Now that you're familiar with the basics, explore these advanced features:

1. **[Configuration Guide](./configuration.md)** — Set up multiple providers and profiles
2. **[Act Templates](./templates/README.md)** — Master the 200+ expert templates
3. **[Shell Integration](./shell-integration.md)** — Advanced terminal workflows
4. **[Session Management](./sessions.md)** — Deep dive into conversations
5. **[Commands Reference](./commands/README.md)** — Complete command documentation

---

## Need Help?

- **Stuck?** Check the [Troubleshooting Guide](./troubleshooting.md)
- **Questions?** Browse the [FAQ](./faq.md)
- **More Examples?** See [Workflow Guides](./workflows/README.md)
- **Community?** Join [GitHub Discussions](https://github.com/withrawi/rawi/discussions)

---

## Navigation

- [← Back to Installation](./installation.md)
- [Next: Configuration Guide →](./configuration.md)

Related Pages:

- [Commands Reference](./commands/README.md)
- [Act Templates](./templates/README.md)
- [Session Management](./sessions.md)
