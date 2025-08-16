# Development Workflow

This guide shows how to integrate Rawi into your development workflow for code review, documentation, and problem-solving.

## Overview

Rawi can assist with various development tasks:

- Code review and analysis
- Bug investigation and debugging
- Documentation generation
- Refactoring assistance
- Testing strategy
- Command generation for development tasks

## Basic Development Setup

### 1. Configure Development Profile

```bash
# Create a development-specific profile
rawi configure --profile dev --provider openai
```

### 2. Enable Shell Integration

```bash
# Add to your shell configuration (interactive setup)
rawi configure
```

## Common Development Tasks

### Code Review

```bash
# Review a specific file
rawi ask --act code-reviewer "Review this code for potential issues:" < src/utils.ts

# Review git diff
git diff | rawi ask --act code-reviewer "Analyze these changes for potential issues"

# Review pull request
gh pr diff 123 | rawi ask --act code-reviewer "Review this PR for code quality and security"
```

### Bug Investigation

```bash
# Analyze error logs
rawi ask "Help me understand this error:" < error.log

# Debug function behavior
rawi ask --act debugging-expert "Why might this function be returning unexpected results?" < src/buggy-function.js

# Analyze stack trace
rawi ask --act debugging-expert "Explain this stack trace and suggest fixes:" < stack-trace.txt
```

### Command Generation for Development

```bash
# Development server management
rawi exec "start development server on port 3000"
rawi exec "run tests in watch mode"
rawi exec "build production bundle"

# Git operations
rawi exec "create new feature branch for user authentication"
rawi exec "commit all changes with descriptive message"
rawi exec "merge feature branch and delete it"

# Package management
rawi exec "install TypeScript as dev dependency"
rawi exec "update all npm packages to latest versions"
rawi exec "remove unused dependencies"

# Build and deploy
rawi exec "run linter and fix auto-fixable issues"
rawi exec "generate production build with source maps"
rawi exec "deploy to staging environment"
```

### Documentation Generation

```bash
# Generate README content
rawi ask --act tech-writer "Create a README for this project" < package.json

# Document API endpoints
rawi ask --act api-documenter "Generate API documentation for these routes:" < src/routes/api.js

# Create inline documentation
rawi ask --act tech-writer "Add JSDoc comments to this function:" < src/utils.js
```

### Refactoring Assistance

```bash
# Suggest improvements
rawi ask --act code-reviewer "How can I refactor this code to be more maintainable?" < src/legacy-code.js

# Convert between patterns
rawi ask --act code-reviewer "Convert this callback-based code to use async/await:" < src/callbacks.js

# Optimize performance
rawi ask --act code-reviewer "How can I optimize this function for better performance?" < src/slow-function.js
```

## Advanced Development Workflows

### Using Act Templates for Development

```bash
# Use coding assistant template
rawi ask --act code-reviewer "Help me implement a user authentication system"

# Use code reviewer template
rawi ask --act code-reviewer "Review this code for security and best practices" < src/new-feature.ts

# Use debugging assistant template
rawi ask --act debugging-expert "My React component isn't re-rendering when props change"
```

### Profile-Based Development

```bash
# Start a development profile
rawi ask "I'm working on implementing user authentication. Let's start." --profile auth-dev

# Continue the profile throughout development
rawi ask "Now I need to add password validation" --profile auth-dev
rawi ask "How should I handle password reset?" --profile auth-dev

# Review session for documentation
rawi history --session <session-id-auth-dev> --format markdown > auth-implementation.md
```

### Integration with Git Hooks

Create a pre-commit hook to review changes:

```bash
#!/bin/bash
# .git/hooks/pre-commit
git diff --cached | rawi ask "Quick review of these staged changes for obvious issues" --quiet
```

### CI/CD Integration

```bash
# In your CI pipeline
# Generate test reports
rawi ask --act data-analyst "Analyze this test output and suggest improvements:" < test-results.txt

# Security review
rawi ask --act security-expert "Review these changes for security vulnerabilities:" < <(git diff HEAD~1)
```

## Best Practices

### Effective Prompting for Development

1. **Provide Context**

   ```bash
   rawi ask --act debugging-expert "In the context of a Node.js Express API, how should I handle this error?" < error.log
   ```

2. **Be Specific**

   ```bash
   rawi ask --act code-reviewer "Optimize this TypeScript function for handling large arrays (>10k items):" < src/processor.ts
   ```

3. **Include Relevant Files**
   ```bash
   cat src/component.tsx src/api-client.ts | rawi ask --act code-reviewer "How should I modify this component to work with the new API?"
   ```

### Managing Development Sessions

- Use descriptive session names: `feature-auth`, `bug-fix-login`, `refactor-utils`
- Keep sessions focused on specific tasks or features
- Export session history for documentation or team sharing

### Template Customization

Create custom templates for your development workflow:

```bash
# Use existing templates for project-specific needs
rawi ask --act code-reviewer "Review this React/TypeScript code focusing on: 1) TypeScript best practices, 2) React patterns, 3) Performance implications, 4) Security concerns" < src/component.tsx
```

## Team Collaboration

### Sharing Sessions

```bash
# Export session for team review
rawi history --session feature-auth --format json > auth-development-session.json

# Share specific conversation
rawi history --last 5 --format markdown | pbcopy
```

### Code Review Process

1. **Initial Review**

   ```bash
   git diff main | rawi ask --act code-reviewer "Initial code review - highlight major concerns"
   ```

2. **Detailed Analysis**

   ```bash
   rawi ask --act security-expert "Detailed security and performance review:" < changed-files.diff
   ```

3. **Documentation**
   ```bash
   rawi ask "Generate PR description based on these changes:" < git-diff.txt
   ```

## Integration Examples

### VS Code Integration

Add Rawi commands to your VS Code tasks:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Review Current File",
      "type": "shell",
      "command": "rawi ask 'Review this file for issues:' < ${file}"
    }
  ]
}
```

### Vim Integration

Add to your `.vimrc`:

```vim
" Send current file to Rawi for review
command! RawiReview !rawi ask "Review this code:" < %
```

## Related Documentation

- [Commands Reference](../commands/README.md) - All available commands
- [Act Templates](../templates/README.md) - Pre-built development templates
- [Session Management](../sessions.md) - Working with conversation sessions
- [Shell Integration](../shell-integration.md) - Terminal integration setup
- [Main Documentation](../README.md) - Return to main wiki

---

_Part of the [Rawi Documentation Wiki](../README.md)_
