# ask — AI Assistant

The `ask` command is the heart of Rawi — your direct interface to AI assistance. Use it to ask questions, get code reviews, analyze data, and much more.

## 📋 Table of Contents

- [Basic Usage](#basic-usage)
- [Options](#options)
- [Session Management](#session-management)
- [Act Templates](#act-templates)
- [Profile Usage](#profile-usage)
- [Shell Integration](#shell-integration)
- [Examples](#examples)
- [Advanced Usage](#advanced-usage)

---

## Basic Usage

```bash
rawi ask [query] [options]
```

### Simple Questions

```bash
# Basic question
rawi ask "What is TypeScript?"

# Multi-word questions (quotes recommended)
rawi ask "How do I deploy a Node.js application to AWS?"

# Code-related questions
rawi ask "Explain async/await in JavaScript with examples"
```

---

## Options

| Option                       | Alias | Description                                  | Default   |
| ---------------------------- | ----- | -------------------------------------------- | --------- |
| `--profile <profile>`        | `-p`  | Profile to use for AI configuration          | `default` |
| `--session <sessionId>`      | `-s`  | Continue an existing chat session            |           |
| `--new-session`              | `-n`  | Start a new chat session                     |           |
| `--act <template>`           |       | Use an act template by ID                    |           |
| `--file <path>`              | `-f`  | Process content from a file                  |           |
| `--files <paths...>`         | `-F`  | Process content from multiple files          |           |
| `--batch <patterns...>`      | `-b`  | Process files matching glob patterns         |           |
| `--file-type <type>`         |       | Override automatic file type detection       |           |
| `--parallel`                 |       | Process multiple files in parallel           |           |
| `--max-concurrency <number>` |       | Maximum concurrent files to process          | `5`       |
| `--continue-on-error`        |       | Continue processing other files if one fails |           |
| `--verbose`                  |       | Show detailed status and debug information   |           |

### File Processing Options

**Supported File Types:**

- `pdf` — PDF documents
- `docx` — Microsoft Word documents
- `xlsx` — Excel spreadsheets
- `txt` — Plain text files
- Auto-detected: `.js`, `.ts`, `.py`, `.json`, `.md`, `.yml`, etc.

**File Type Override:**

```bash
# Process unknown file as text
rawi ask --file data.unknown --file-type txt "Analyze this data"

# Force PDF processing
rawi ask --file document --file-type pdf "Extract text from this"
```

---

## Session Management

Sessions allow you to have continuous conversations where each question remembers the previous context.

### Start a New Session

```bash
# Explicitly start a new session
rawi ask "I'm building a React application" --new-session

# Shorter version
rawi ask "I'm building a React application" -n
```

### Continue a Conversation

```bash
# Continue current session (automatic)
rawi ask "How should I structure my components?"

# Continue specific session
rawi ask "What about state management?" --session abc123-def456
```

### Session Workflow Example

```bash
# Start a project conversation
$ rawi ask "I'm building a REST API with Node.js and Express" --new-session
🤖 Great! I'd be happy to help you build a REST API with Node.js and Express.
What specific aspects would you like to focus on? Here are some areas I can assist with:
...

# Continue the conversation
$ rawi ask "How should I structure my project folders?"
🤖 Based on our discussion about your REST API, here's a recommended folder structure:
...

# Add more context
$ rawi ask "What about database integration with MongoDB?"
🤖 For your Express REST API, here's how to integrate MongoDB effectively:
...
```

---

## Act Templates

Act templates transform the AI into specialized experts for different domains.

### Using Templates

```bash
# Use template with question
rawi ask --act code-reviewer "Review this function for performance issues"

# Combine with file input
cat server.js | rawi ask --act security-expert "Analyze for vulnerabilities"

# Templates work with any profile (global templates)
rawi ask --act database-admin "Optimize this query"
```

### Popular Templates

#### Development

```bash
# Code review
rawi ask --act code-reviewer "Review this Python function"

# Linux terminal simulation
rawi ask --act linux-terminal "list files in /home with details"

# Ethereum development
rawi ask --act ethereum-developer "Explain smart contract security"
```

#### Security

```bash
# Security analysis
rawi ask --act security-expert "Audit this authentication code"

# Penetration testing
rawi ask --act penetration-tester "Assess web application vulnerabilities"
```

#### Documentation

```bash
# Technical writing
rawi ask --act tech-writer "Document this API endpoint"

# API documentation
rawi ask --act api-documenter "Create docs for these REST endpoints"
```

#### Database

```bash
# Database administration
rawi ask --act database-admin "Optimize this SQL query"

# Data analysis
rawi ask --act data-analyst "Analyze trends in this dataset"
```

### Browse Templates

```bash
# List all available templates
rawi act --list

# Show template details
rawi act --show code-reviewer
```

---

## Profile Usage

Profiles let you use different AI providers and configurations for different tasks.

### Using Specific Profiles

```bash
# Use work profile
rawi ask "Review this code" --profile work

# Use local profile (e.g., Ollama)
rawi ask "Quick question" --profile local

# Use analysis profile (e.g., Claude)
rawi ask "Analyze this data" --profile analysis
```

### Global Templates

Templates work across all profiles automatically:

```bash
# Templates are global - no --profile needed
rawi ask --act code-reviewer "Analyze architecture"

# Works with any profile configured
rawi ask --act linux-terminal "ls -la"

# Custom templates work everywhere too
rawi ask --act my-custom-template "Process this data"
```

---

## Shell Integration

The `ask` command integrates perfectly with shell pipes, redirects, and other command-line tools.

### Pipe Input

```bash
# Analyze file content
cat server.js | rawi ask "Review this Express server"

# Process git changes
git diff | rawi ask "Write a conventional commit message"

# Analyze command output
ls -la | rawi ask "Explain these file permissions"

# Process API responses
curl -s api.example.com/data | rawi ask "Explain this JSON structure"

# Analyze logs
tail -100 app.log | rawi ask "Summarize these error messages"
```

### Output Redirection

```bash
# Save response to file
rawi ask "Create a TypeScript interface for User" > user.ts

# Append to existing file
rawi ask "Add error handling examples" >> documentation.md

# Pipe to other commands
rawi ask "Generate CSS for button" | pbcopy  # macOS clipboard
rawi ask "Create shell script" | tee script.sh
```

### Command Chaining

```bash
# Review and commit changes
git diff | rawi ask "Review changes" && git add . && git commit

# Generate and test code
rawi ask "Create test function" > test.js && node test.js

# Analyze and save report
cat data.csv | rawi ask "Analyze trends" | tee report.md
```

---

## Examples

### Code Development

```bash
# Debug errors
rawi ask "Fix this Python error: NameError: name 'variable' is not defined"

# Code optimization
rawi ask --act code-reviewer "Optimize this function for performance" < function.py

# Generate code
rawi ask "Create a React component for file upload with drag-and-drop"

# Code explanation
rawi ask "Explain this regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
```

### File Processing

```bash
# Process PDF documents
rawi ask --file report.pdf "Summarize the key findings in this report"

# Analyze Excel spreadsheets
rawi ask --file sales-data.xlsx "What trends do you see in this quarterly data?"

# Review source code files
rawi ask --file src/app.js --act code-reviewer "Review this code for best practices"

# Process Word documents
rawi ask --file requirements.docx "Extract all functional requirements"

# Multiple file comparison
rawi ask --files package.json composer.json "Compare these dependency configurations"

# Batch processing with glob patterns
rawi ask --batch "src/**/*.{js,ts}" "Find potential security vulnerabilities"

# Process specific Excel sheets
rawi ask --file workbook.xlsx --sheet "Q4 Results" "Analyze Q4 performance metrics"

# Override file type detection
rawi ask --file data.unknown --file-type txt "Process this as plain text"

# Parallel processing for speed
rawi ask --batch "docs/**/*.md" --parallel "Create a comprehensive documentation index"

# Continue on errors for large batches
rawi ask --batch "**/*.json" --continue-on-error "Validate all JSON configuration files"

# Combine file processing with templates
rawi ask --file database-schema.sql --act database-admin "Optimize this schema"
```

### Git Workflows

```bash
# Generate commit messages
git diff --cached | rawi ask "Generate conventional commit message"

# Review changes before commit
git diff | rawi ask --act code-reviewer "Review these changes"

# Create release notes
git log --oneline v1.0.0..HEAD | rawi ask "Create release notes"

# Analyze branch differences
git diff main..feature-branch | rawi ask "Summarize changes in this branch"
```

### Data Analysis

```bash
# CSV analysis
cat sales-data.csv | rawi ask "Analyze sales trends and identify patterns"

# Log analysis
grep ERROR app.log | rawi ask "Categorize these errors by type"

# API exploration
curl -s api.github.com/repos/microsoft/typescript | \
  rawi ask "Explain this GitHub API response"

# Configuration review
cat docker-compose.yml | rawi ask "Review this Docker configuration"
```

### Documentation

```bash
# Generate README
rawi ask "Create comprehensive README for a CLI tool" > README.md

# API documentation
rawi ask --act api-documenter "Document these endpoints" < api-spec.json

# Code comments
cat function.js | rawi ask "Add comprehensive JSDoc comments"

# Tutorial creation
rawi ask --act tech-writer "Create tutorial for React hooks" > tutorial.md
```

### Learning & Research

```bash
# Compare technologies
rawi ask "Compare React vs Vue.js for a small team project"

# Explain concepts
rawi ask "Explain microservices architecture with pros and cons"

# Best practices
rawi ask --act security-expert "Web security best practices for Node.js"

# Troubleshooting
rawi ask "Common causes of 'CORS error' in web development"
```

### DevOps & Infrastructure

```bash
# Docker optimization
cat Dockerfile | rawi ask "Optimize this Dockerfile for production"

# CI/CD assistance
rawi ask "Create GitHub Actions workflow for Node.js deployment"

# Infrastructure as code
rawi ask "Generate Terraform config for AWS EC2 with security groups"

# Monitoring setup
rawi ask "Create Prometheus monitoring for Express.js application"
```

### Document & File Processing

```bash
# PDF document analysis
rawi ask --file report.pdf "Summarize the key findings"

# Code review from files
rawi ask --file src/app.js --act code-reviewer "Review for best practices"

# Excel data analysis
rawi ask --file sales-data.xlsx "What trends do you see in this data?"

# Word document processing
rawi ask --file requirements.docx "Extract all functional requirements"

# Multiple file analysis
rawi ask --files config.json package.json "Compare these configuration files"

# Batch processing with patterns
rawi ask --batch "src/**/*.js" "Find potential security issues"

# Process documentation files
rawi ask --batch "docs/*.md" "Create a table of contents"

# Parallel processing for speed
rawi ask --batch "test/**/*.js" --parallel "Analyze test coverage"

# Continue on errors for large batches
rawi ask --batch "**/*.json" --continue-on-error "Validate all JSON files"

# Combine with templates
rawi ask --file database.sql --act database-admin "Optimize this schema"

# Process with file type override
rawi ask --file data.backup --file-type json "Validate this backup file"
```

---

## Advanced Usage

### Verbose Mode

Use `--verbose` to see detailed execution information:

```bash
rawi ask "Your question" --verbose
```

**Output includes:**

- Configuration validation
- Session creation/continuation
- Provider and model information
- Response generation progress

**Example output:**

```bash
$ rawi ask "Hello" --verbose
Using profile: default
Processing query: Hello
✓ Configuration validated successfully
✓ Using current session: abc123-def456
✓ Generating response using openai (gpt-4o)...
✓ Response generated successfully!

🤖 Hello! I'm ready to help you with any questions or tasks...
```

### Complex Queries

For complex, multi-part queries:

```bash
# Multi-line questions
rawi ask "
I have a Node.js application with these requirements:
1. REST API with Express
2. MongoDB database
3. JWT authentication
4. File upload functionality

Can you provide a complete project structure and implementation plan?
"

# Contextual questions with templates
cat complex-algorithm.py | rawi ask --act code-reviewer "
Please review this algorithm for:
1. Time complexity
2. Space complexity
3. Edge cases
4. Code style
5. Potential optimizations
"
```

### Error Handling

```bash
# Check configuration before asking
if rawi info > /dev/null 2>&1; then
    rawi ask "Your question"
else
    echo "Please configure Rawi first: rawi configure"
fi

# Use fallback profiles
rawi ask "Question" --profile primary 2>/dev/null || \
rawi ask "Question" --profile fallback
```

### Scripting with Ask

```bash
#!/bin/bash
# ai-assistant.sh - Intelligent code review script

if [ -z "$1" ]; then
    echo "Usage: $0 <file-to-review>"
    exit 1
fi

echo "🔍 Reviewing $1 with AI..."
cat "$1" | rawi ask --act code-reviewer "
Please review this code for:
- Security vulnerabilities
- Performance issues
- Code style and best practices
- Potential bugs
- Suggestions for improvement
" > "review-$(basename $1).md"

echo "✅ Review saved to review-$(basename $1).md"
```

---

## Error Messages

### Common Errors and Solutions

**"No configuration found"**

```bash
# Solution: Configure a provider
rawi configure
```

**"Session not found"**

```bash
# Solution: Check session ID or start new session
rawi history sessions
rawi ask "Your question" --new-session
```

**"Profile does not exist"**

```bash
# Solution: List profiles or create the profile
rawi configure --list
rawi configure --profile new-profile
```

**"Incomplete configuration"**

```bash
# Solution: Check and update configuration
rawi configure --show
rawi configure --provider openai --api-key sk-your-key
```

---

## Performance Tips

### 1. Choose the Right Profile

```bash
# Fast responses: Use local models
rawi ask "Quick question" --profile ollama

# Quality responses: Use cloud models
rawi ask "Complex analysis" --profile openai

# Specialized tasks: Use appropriate models
rawi ask "Code review" --profile claude  # Good for analysis
```

### 2. Use Templates for Better Results

```bash
# ❌ Generic
rawi ask "Check my code"

# ✅ Specific with template
rawi ask --act code-reviewer "Review for security vulnerabilities" < code.js
```

### 3. Provide Context

```bash
# ❌ Vague
rawi ask "Fix this error"

# ✅ Specific with context
rawi ask "Fix this Python Flask error in a REST API: 'AttributeError: NoneType'"
```

---

## Navigation

- [← Back to Commands](./README.md)
- [Next: configure Command →](./configure.md)

Related Pages:

- [Session Management](../sessions.md)
- [Act Templates](../templates/README.md)
- [Profile Management](../profiles.md)
- [Shell Integration](../shell-integration.md)
