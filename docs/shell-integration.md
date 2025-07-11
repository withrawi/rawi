# Shell Integration

Harness the full power of Rawi by integrating it seamlessly into your terminal workflow with pipes, redirects, and automation.

## Navigation

- [📖 Wiki Home](./README.md)
- [💬 Ask Command](./commands/ask.md)
- [🔄 Workflows](./workflows/README.md)
- [🚀 Quick Start](./quickstart.md)

---

## Overview

Rawi is designed to be a true command-line citizen, integrating naturally with shell pipes, redirects, file operations, and automation scripts. This makes it incredibly powerful for developer workflows.

## Basic Pipe Integration

### Input Pipes

Send data directly to Rawi for analysis:

```bash
# Analyze code files
cat server.js | rawi ask "Review this Node.js code for security issues"

# Process command output
ls -la | rawi ask "Explain these file permissions"

# Analyze logs
tail -100 /var/log/app.log | rawi ask "Summarize these error patterns"

# Git workflow integration
git diff | rawi ask "Write a conventional commit message for these changes"
```

### Multiple File Processing

```bash
# Analyze multiple files
cat src/*.js | rawi ask "Review this JavaScript codebase architecture"

# Process all Python files
find . -name "*.py" -exec cat {} \; | rawi ask "Suggest improvements for this Python project"

# Combine different file types
cat package.json README.md | rawi ask "Is the documentation consistent with the package configuration?"
```

## Output Redirection

### File Output

Save AI responses directly to files:

```bash
# Generate documentation
rawi ask "Create API documentation for a REST user service" > api-docs.md

# Create configuration files
rawi ask "Generate Dockerfile for Node.js app" > Dockerfile

# Generate code templates
rawi ask "Create React component template" > Component.tsx

# Write scripts
rawi ask "Create backup script for PostgreSQL" > backup.sh
```

### Append to Files

```bash
# Add to existing files
rawi ask "Add error handling section" >> documentation.md

# Build files incrementally
rawi ask "Add unit tests section" >> project-plan.md
```

## Advanced Pipe Workflows

### Data Processing Pipelines

```bash
# Multi-stage data processing
curl -s api.example.com/data | \
  jq '.' | \
  rawi ask "Analyze this API response structure" | \
  tee analysis.md

# Log analysis pipeline
grep ERROR /var/log/app.log | \
  head -50 | \
  rawi ask "Categorize these errors and suggest fixes" | \
  mail -s "Error Analysis" admin@company.com
```

### Code Review Workflows

```bash
# Comprehensive code review
git diff HEAD~1 | \
  rawi ask --act code-reviewer "Review changes for quality, security, and performance" > \
  review-$(date +%Y%m%d).md

# Security-focused review
find . -name "*.js" -newer yesterday.tmp -exec cat {} \; | \
  rawi ask --act security-expert "Scan for security vulnerabilities"
```

### Documentation Generation

```bash
# Auto-generate documentation
for file in src/*.js; do
  echo "## $(basename $file)" >> docs.md
  cat "$file" | rawi ask "Document this JavaScript module" >> docs.md
  echo "" >> docs.md
done
```

## Shell Functions and Aliases

### Useful Aliases

```bash
# Add to your ~/.bashrc or ~/.zshrc

# Quick AI assistance
alias ai="rawi ask"
alias aic="rawi ask --act code-reviewer"
alias ais="rawi ask --act security-expert"
alias ail="rawi ask --profile local"

# File analysis
alias aifile="rawi ask 'Analyze this file:' <"
alias ailog="tail -100 | rawi ask 'Analyze these logs:'"

# Git integration
alias aicommit="git diff --cached | rawi ask 'Write a conventional commit message'"
alias aireview="git diff | rawi ask --act code-reviewer"
```

### Shell Functions

```bash
# Smart AI helper function
ai_help() {
  local context="$1"
  shift
  local question="$*"

  case "$context" in
    "code")
      rawi ask --act software-engineer "$question"
      ;;
    "debug")
      rawi ask --act debugging-expert "$question"
      ;;
    "security")
      rawi ask --act security-expert "$question"
      ;;
    "data")
      rawi ask --act data-scientist "$question"
      ;;
    *)
      rawi ask "$context $question"
      ;;
  esac
}

# Usage: ai_help code "How do I optimize this algorithm?"
# Usage: ai_help security "Is this authentication secure?"
```

### File Processing Functions

```bash
# Analyze any file with appropriate context
analyze_file() {
  local file="$1"
  local extension="${file##*.}"

  case "$extension" in
    "py")
      cat "$file" | rawi ask --act python-expert "Review this Python code"
      ;;
    "js"|"ts")
      cat "$file" | rawi ask --act javascript-expert "Review this JavaScript/TypeScript code"
      ;;
    "sql")
      cat "$file" | rawi ask --act database-admin "Review this SQL code"
      ;;
    "yml"|"yaml")
      cat "$file" | rawi ask --act devops-engineer "Review this YAML configuration"
      ;;
    *)
      cat "$file" | rawi ask "Analyze this file"
      ;;
  esac
}
```

## CI/CD Integration

### GitHub Actions

```yaml
name: AI Code Review
on: [pull_request]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Rawi
        run: npm install -g rawi
      - name: Configure Rawi
        run: rawi configure --provider openai --api-key ${{ secrets.OPENAI_API_KEY }}
      - name: AI Code Review
        run: |
          git diff origin/main...HEAD | \
          rawi ask --act code-reviewer "Review this pull request" > \
          ai-review.md
      - name: Comment PR
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const review = fs.readFileSync('ai-review.md', 'utf8');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `## 🤖 AI Code Review\n\n${review}`
            });
```

### GitLab CI

```yaml
ai_review:
  stage: review
  script:
    - npm install -g rawi
    - rawi configure --provider anthropic --api-key $ANTHROPIC_API_KEY
    - git diff $CI_MERGE_REQUEST_TARGET_BRANCH_NAME..HEAD | rawi ask --act code-reviewer "Review this merge request" > review.md
  artifacts:
    reports:
      codequality: review.md
  only:
    - merge_requests
```

## Automation Scripts

### Daily Development Helper

```bash
#!/bin/bash
# daily-ai-helper.sh

echo "🤖 Daily AI Development Assistant"
echo "================================="

# Check git status
if git status --porcelain | grep -q .; then
  echo "📝 Uncommitted changes detected:"
  git status --porcelain | rawi ask "Suggest how to organize these changes"
  echo ""
fi

# Review recent commits
echo "📊 Recent commit analysis:"
git log --oneline -5 | rawi ask "Analyze this recent development activity"
echo ""

# Check for TODOs
echo "📋 TODO analysis:"
grep -r "TODO\|FIXME\|HACK" src/ 2>/dev/null | \
  head -10 | \
  rawi ask "Prioritize these TODO items"
```

### Project Documentation Generator

```bash
#!/bin/bash
# generate-docs.sh

PROJECT_NAME=$(basename "$PWD")
OUTPUT_DIR="docs/generated"
mkdir -p "$OUTPUT_DIR"

echo "📚 Generating documentation for $PROJECT_NAME..."

# Project overview
echo "# $PROJECT_NAME Documentation" > "$OUTPUT_DIR/README.md"
echo "" >> "$OUTPUT_DIR/README.md"

# Architecture overview
find src -name "*.js" -o -name "*.ts" -o -name "*.py" | \
  head -20 | \
  xargs cat | \
  rawi ask "Analyze this codebase and provide an architecture overview" >> \
  "$OUTPUT_DIR/architecture.md"

# API documentation
if [[ -f "package.json" ]] || [[ -f "requirements.txt" ]]; then
  find . -name "*route*" -o -name "*api*" -o -name "*endpoint*" | \
    xargs cat 2>/dev/null | \
    rawi ask "Generate API documentation from this code" >> \
    "$OUTPUT_DIR/api.md"
fi

# Setup guide
cat package.json README.md 2>/dev/null | \
  rawi ask "Create a setup and installation guide" >> \
  "$OUTPUT_DIR/setup.md"

echo "✅ Documentation generated in $OUTPUT_DIR"
```

### Intelligent Log Monitor

```bash
#!/bin/bash
# smart-log-monitor.sh

LOG_FILE="/var/log/app.log"
LAST_CHECK_FILE="/tmp/last_log_check"

# Get timestamp of last check
if [[ -f "$LAST_CHECK_FILE" ]]; then
  LAST_CHECK=$(cat "$LAST_CHECK_FILE")
else
  LAST_CHECK=$(date -d "1 hour ago" +%s)
fi

# Get new log entries
CURRENT_TIME=$(date +%s)
NEW_ENTRIES=$(find "$LOG_FILE" -newermt "@$LAST_CHECK" -exec tail -100 {} \;)

if [[ -n "$NEW_ENTRIES" ]]; then
  echo "🔍 Analyzing new log entries..."
  echo "$NEW_ENTRIES" | \
    rawi ask --act sysadmin "Analyze these log entries for issues and provide recommendations" | \
    mail -s "Log Analysis $(date)" admin@company.com
fi

# Update last check time
echo "$CURRENT_TIME" > "$LAST_CHECK_FILE"
```

## Environment Integration

### Bash Integration

```bash
# Add to ~/.bashrc

# AI-powered command suggestions
command_not_found_handle() {
  echo "Command '$1' not found. Getting AI suggestion..."
  rawi ask --profile local "I typed '$1' in bash but it wasn't found. What command did I probably mean?" | \
    head -3
}

# AI-powered man page summaries
aman() {
  man "$1" | rawi ask "Summarize this man page in simple terms with examples"
}

# Intelligent directory exploration
what_is_here() {
  ls -la | rawi ask "Explain what's in this directory and suggest next steps"
}
```

### Zsh Integration

```zsh
# Add to ~/.zshrc

# AI command explanation
explain_last_command() {
  fc -ln -1 | rawi ask "Explain what this command does: $(fc -ln -1)"
}

# Bind to key
bindkey '^[e' explain_last_command

# Smart directory suggestions
suggest_commands() {
  pwd | rawi ask "I'm in directory $(pwd). What useful commands could I run here?"
}
```

### Fish Shell Integration

```fish
# Add to ~/.config/fish/config.fish

# AI command suggestions
function ai_suggest
    rawi ask --profile local "Suggest shell commands for: $argv"
end

# Explain command before running
function explain_and_run
    echo "Command: $argv"
    rawi ask --profile local "Explain what this command does: $argv"
    read -p "Continue? [y/N] " confirm
    if test "$confirm" = "y"
        eval $argv
    end
end
```

## File Processing Patterns

### Batch File Analysis

```bash
# Analyze multiple configuration files
for config in *.conf *.ini *.yaml; do
  [[ -f "$config" ]] || continue
  echo "Analyzing $config..."
  cat "$config" | rawi ask "Review this configuration file for best practices" > "analysis-$config.md"
done
```

### Code Quality Scanning

```bash
# Security scan across project
find . -name "*.js" -o -name "*.py" -o -name "*.php" | \
while read -r file; do
  echo "Scanning $file..."
  cat "$file" | rawi ask --act security-expert "Scan for security vulnerabilities" | \
    grep -v "No issues found" >> security-report.md
done
```

### Documentation Update Automation

```bash
# Keep documentation in sync with code
git diff --name-only HEAD~1 | \
while read -r changed_file; do
  if [[ "$changed_file" == *.js ]] || [[ "$changed_file" == *.py ]]; then
    echo "Updating docs for $changed_file..."
    cat "$changed_file" | \
      rawi ask "Generate documentation updates for this changed code" >> \
      "docs/updates-$(date +%Y%m%d).md"
  fi
done
```

## Performance and Best Practices

### Efficient Pipe Usage

```bash
# Good: Process data efficiently
curl -s api.example.com/data | \
  jq '.results[]' | \
  head -100 | \
  rawi ask "Analyze this API data sample"

# Avoid: Processing too much data
# curl -s api.example.com/data | rawi ask "Analyze all this data"
```

### Error Handling in Pipes

```bash
# Robust pipeline with error handling
analyze_logs() {
  local log_file="$1"

  if [[ ! -f "$log_file" ]]; then
    echo "Error: Log file not found: $log_file" >&2
    return 1
  fi

  tail -100 "$log_file" | \
    rawi ask "Analyze these log entries" 2>/dev/null || \
    echo "Error: Failed to analyze logs" >&2
}
```

### Resource Management

```bash
# Limit resource usage
large_file_analysis() {
  local file="$1"
  local lines="${2:-100}"

  # Process only a sample for large files
  head -n "$lines" "$file" | \
    rawi ask "Analyze this file sample (first $lines lines)"
}
```

## Related Documentation

- [💬 Ask Command Reference](./commands/ask.md)
- [🔄 Workflow Examples](./workflows/README.md)
- [🎯 Act Templates](./templates/README.md)
- [⚙️ Configuration](./commands/configure.md)

---

**Next Steps:**

- [Master the ask command](./commands/ask.md)
- [Explore workflow examples](./workflows/README.md)
- [Learn about act templates](./templates/README.md)
