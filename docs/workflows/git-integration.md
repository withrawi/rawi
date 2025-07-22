# Git Integration Workflow

**ID: WF-002**  
**Category: Development**  
**Complexity: Beginner to Advanced**  
**Time: 2-10 minutes per operation**

## Overview

Integrate Rawi seamlessly with Git workflows for intelligent commit messages, branch analysis, release notes generation, and repository insights.

## Prerequisites

- Rawi configured with any provider
- Git repository
- Basic Git knowledge

## Workflow Steps

### 1. Smart Commit Messages

Generate conventional commit messages automatically:

```bash
# Generate commit message from staged changes
git add .
git diff --cached | rawi ask "Generate a conventional commit message for these changes"

# Generate commit message with specific type
git diff --cached | rawi ask "Generate a conventional commit message with type 'feat' for these changes"

# Generate detailed commit message
git diff --cached | rawi ask "Generate a detailed conventional commit message with body and footer"
```

### 2. Branch Analysis

Analyze branch differences and changes:

```bash
# Compare feature branch with main
git diff main..feature-branch | rawi ask "Summarize the changes in this feature branch"

# Analyze branch for merge readiness
git diff main..feature-branch | rawi ask --act code-reviewer "Is this branch ready for merge? Check for breaking changes and quality issues"

# Generate branch summary
git log main..feature-branch --oneline | rawi ask "Create a summary of work done in this branch"
```

### 3. Release Notes Generation

Automate release notes creation:

```bash
# Generate release notes between tags
git log v1.0.0..v1.1.0 --oneline | rawi ask "Generate release notes for version 1.1.0"

# Generate changelog from commits
git log --since="1 month ago" --pretty=format:"%h %s" | rawi ask "Generate a changelog for the last month of development"

# Categorized release notes
git log v1.0.0..HEAD --oneline | rawi ask "Generate categorized release notes (Features, Bug Fixes, Breaking Changes, etc.)"
```

### 4. Repository Analysis

Get insights about your repository:

```bash
# Analyze repository structure
find . -name "*.js" -o -name "*.ts" -o -name "*.py" | head -20 | rawi ask "Analyze this repository structure and suggest improvements"

# Review recent activity
git log --oneline -20 | rawi ask "Analyze recent development activity and identify patterns"

# Contributor analysis
git shortlog -sn | rawi ask "Analyze contributor activity and suggest team collaboration improvements"
```

### 5. Automated Git Workflow Scripts

#### Smart Commit Script

```bash
#!/bin/bash
# smart-commit.sh - AI-powered commit workflow

set -e

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "❌ No staged changes found. Stage your changes first with 'git add'"
    exit 1
fi

echo "🤖 Generating smart commit message..."

# Generate commit message
COMMIT_MSG=$(git diff --cached | rawi ask "
Generate a conventional commit message for these changes. Format:
type(scope): description

body (if needed)

footer (if needed)

Use these types: feat, fix, docs, style, refactor, test, chore
Keep description under 50 characters
Add body for complex changes
Add footer for breaking changes or issue references
")

echo "📝 Proposed commit message:"
echo "----------------------------------------"
echo "$COMMIT_MSG"
echo "----------------------------------------"

# Ask for confirmation
read -p "Use this commit message? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git commit -m "$COMMIT_MSG"
    echo "✅ Committed successfully!"
else
    echo "❌ Commit cancelled"
fi
```

#### Branch Review Script

```bash
#!/bin/bash
# branch-review.sh - Comprehensive branch analysis

BRANCH=${1:-$(git branch --show-current)}
BASE=${2:-main}

echo "🔍 Analyzing branch: $BRANCH against $BASE"

# 1. Code changes analysis
echo "📊 Analyzing code changes..."
git diff "$BASE..$BRANCH" | rawi ask --act code-reviewer "
Analyze this branch for:
- Overall code quality
- Breaking changes
- Security implications
- Performance impact
- Testing requirements
" > "branch-review-$BRANCH.md"

# 2. Commit history analysis
echo "📈 Analyzing commit history..."
git log "$BASE..$BRANCH" --oneline | rawi ask "
Analyze these commits for:
- Development progression
- Commit message quality
- Logical grouping
- Missing commits or work
" >> "branch-review-$BRANCH.md"

# 3. File changes summary
echo "📁 Analyzing file changes..."
git diff --name-status "$BASE..$BRANCH" | rawi ask "
Analyze these file changes for:
- Architecture impact
- Dependency changes
- Configuration updates
- Documentation needs
" >> "branch-review-$BRANCH.md"

echo "✅ Branch review complete: branch-review-$BRANCH.md"
```

#### Release Preparation Script

```bash
#!/bin/bash
# prepare-release.sh - Automated release preparation

VERSION=${1:-$(date +%Y%m%d)}
LAST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "HEAD~10")

echo "🚀 Preparing release $VERSION from $LAST_TAG"

# 1. Generate release notes
echo "📝 Generating release notes..."
git log "$LAST_TAG..HEAD" --oneline | rawi ask "
Generate comprehensive release notes for version $VERSION.
Include:
- New Features
- Bug Fixes
- Breaking Changes
- Improvements
- Technical Changes

Format as markdown with proper sections.
" > "RELEASE_NOTES_$VERSION.md"

# 2. Generate changelog entry
echo "📰 Updating changelog..."
git log "$LAST_TAG..HEAD" --pretty=format:"- %s (%h)" | rawi ask "
Convert these commits into a proper changelog entry.
Group by category and use proper formatting.
" > "changelog-entry-$VERSION.md"

# 3. Check for breaking changes
echo "⚠️  Checking for breaking changes..."
git diff "$LAST_TAG..HEAD" | rawi ask --act code-reviewer "
Analyze these changes for breaking changes.
List any:
- API changes
- Configuration changes
- Dependency updates
- Behavioral changes
that might affect users.
" > "breaking-changes-$VERSION.md"

echo "✅ Release preparation complete!"
echo "📄 Files generated:"
echo "  - RELEASE_NOTES_$VERSION.md"
echo "  - changelog-entry-$VERSION.md"
echo "  - breaking-changes-$VERSION.md"
```

### 6. Advanced Git Workflows

#### Pre-commit Hook Integration

```bash
#!/bin/sh
# .git/hooks/pre-commit - AI-powered pre-commit checks

echo "🤖 Running AI pre-commit checks..."

# Check staged changes for issues
STAGED_CHANGES=$(git diff --cached)

if [ -n "$STAGED_CHANGES" ]; then
    # Quick quality check
    QUALITY_CHECK=$(echo "$STAGED_CHANGES" | rawi ask --act code-reviewer "
    Quick pre-commit check:
    - Syntax errors
    - Obvious bugs
    - Security issues
    - Code style violations

    Return 'PASS' if no critical issues, or list issues found.
    ")

    if echo "$QUALITY_CHECK" | grep -q "PASS"; then
        echo "✅ Pre-commit checks passed"
        exit 0
    else
        echo "❌ Pre-commit checks failed:"
        echo "$QUALITY_CHECK"
        echo ""
        echo "Fix these issues before committing or use --no-verify to skip"
        exit 1
    fi
fi
```

#### Post-merge Analysis

```bash
#!/bin/bash
# post-merge-analysis.sh - Analyze merged changes

MERGE_COMMIT=${1:-HEAD}

echo "🔄 Analyzing merge: $MERGE_COMMIT"

# Get merge information
MERGE_INFO=$(git show --stat "$MERGE_COMMIT")

echo "$MERGE_INFO" | rawi ask "
Analyze this merge commit:
- Files affected and impact
- Potential integration issues
- Testing recommendations
- Deployment considerations
" > "merge-analysis-$(git rev-parse --short $MERGE_COMMIT).md"

echo "✅ Merge analysis complete"
```

### 7. Repository Health Checks

#### Code Quality Trends

```bash
# Analyze code quality over time
git log --since="1 month ago" --name-only --pretty=format: | sort | uniq -c | sort -nr | head -20 | rawi ask "
Analyze these most-changed files for:
- Code hotspots
- Maintenance burden
- Refactoring opportunities
- Quality concerns
"
```

#### Technical Debt Assessment

```bash
# Identify technical debt
git log --since="6 months ago" --grep="TODO\|FIXME\|HACK" --oneline | rawi ask "
Analyze these commits mentioning TODO/FIXME/HACK:
- Technical debt accumulation
- Priority areas for cleanup
- Maintenance recommendations
"
```

#### Dependency Analysis

```bash
# Analyze dependency changes
git log --oneline -p -- package.json package-lock.json | rawi ask "
Analyze dependency changes:
- Security implications
- Version compatibility
- Maintenance burden
- Update recommendations
"
```

## Git Aliases for Rawi Integration

Add these to your `.gitconfig`:

```ini
[alias]
    # Smart commit with AI
    scommit = "!f() { git diff --cached | rawi ask 'Generate conventional commit message' | git commit -F -; }; f"

    # Branch summary
    bsummary = "!f() { git diff main..HEAD | rawi ask 'Summarize branch changes'; }; f"

    # Release notes
    relnotes = "!f() { git log $1..HEAD --oneline | rawi ask 'Generate release notes'; }; f"

    # Code review
    aireview = "!f() { git diff $1 | rawi ask --act code-reviewer 'Review these changes'; }; f"

    # Commit analysis
    analyze = "!f() { git show $1 | rawi ask 'Analyze this commit for impact and quality'; }; f"
```

## GitHub/GitLab Integration

### GitHub Actions Workflow

```yaml
# .github/workflows/ai-git-analysis.yml
name: AI Git Analysis

on:
  pull_request:
    types: [opened, synchronize]
  push:
    branches: [main]

jobs:
  ai-analysis:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Rawi
        run: |
          npm install -g rawi
          rawi configure --provider openai --api-key ${{ secrets.OPENAI_API_KEY }}

      - name: Analyze Changes
        run: |
          if [ "${{ github.event_name }}" = "pull_request" ]; then
            git diff origin/main...HEAD | rawi ask "
            Analyze this PR:
            - Breaking changes
            - Security implications
            - Testing requirements
            - Documentation needs
            " > pr-analysis.md
          else
            git diff HEAD~1..HEAD | rawi ask "
            Analyze this push:
            - Change impact
            - Quality assessment
            - Deployment readiness
            " > push-analysis.md
          fi

      - name: Comment Results
        if: github.event_name == 'pull_request'
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const analysis = fs.readFileSync('pr-analysis.md', 'utf8');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `## 🤖 AI Analysis\n\n${analysis}`
            });
```

### GitLab CI Integration

```yaml
# .gitlab-ci.yml
stages:
  - ai-analysis

ai-git-analysis:
  stage: ai-analysis
  image: node:18
  before_script:
    - npm install -g rawi
    - rawi configure --provider openai --api-key $OPENAI_API_KEY
  script:
    - git diff origin/main...HEAD | rawi ask "Analyze merge request changes" > mr-analysis.md
  artifacts:
    reports:
      junit: mr-analysis.md
  only:
    - merge_requests
```

## Best Practices

### 1. Commit Message Guidelines

```bash
# Use consistent templates
git diff --cached | rawi ask "
Generate conventional commit message using format:
type(scope): description

Types: feat, fix, docs, style, refactor, test, chore
Scope: component or file affected
Description: imperative, present tense, lowercase, no period
"
```

### 2. Branch Naming

```bash
# Generate branch names
rawi ask "Generate a git branch name for: implementing user authentication with JWT tokens"
# Output: feat/user-authentication-jwt
```

### 3. Merge Strategy

```bash
# Analyze merge impact
git diff main..feature-branch | rawi ask --act devops-engineer "
Analyze merge impact:
- Database migrations needed
- Configuration changes
- Service dependencies
- Deployment order
"
```

## Troubleshooting

### Large Diff Analysis

```bash
# For large diffs, analyze in sections
git diff main..HEAD --name-only | head -10 | while read file; do
    git diff main..HEAD -- "$file" | rawi ask "Analyze changes in $file"
done
```

### Rate Limiting

```bash
# Add delays between API calls
git log --oneline -10 | while read commit; do
    git show "$commit" | rawi ask "Analyze this commit"
    sleep 2
done
```

## Related Workflows

- [Code Review Workflow](code-review.md) - Comprehensive code review
- [Development Workflow](development.md) - Full development process
- [CI/CD Integration](cicd-integration.md) - Automated pipelines

---

**Navigation:**

- [← Back to Workflows](README.md)
- [Next: Documentation Generation →](documentation-generation.md)
