# Workflow Examples

Discover proven patterns and real-world workflows for integrating Rawi into your development, analysis, and creative processes.

## Navigation

- [📖 Wiki Home](../README.md)
- [🔗 Shell Integration](../shell-integration.md)
- [🎯 Act Templates](../templates/README.md)
- [💬 Ask Command](../commands/ask.md)

---

## Overview

This section provides practical, real-world examples of how to integrate Rawi into your daily workflows. Each workflow includes step-by-step instructions, shell commands, and automation scripts.

## Available Workflows

### 📝 [Development Workflow](development.md) **[WF-100]**

Integrate Rawi into your software development process for code review, debugging, documentation, refactoring assistance, and command generation.

### ✍️ [Content Creation Workflow](content-creation.md) **[WF-101]**

Use Rawi for writing, editing, and optimizing content including blog posts, documentation, and creative writing.

### 🔍 [Research and Analysis Workflow](research.md) **[WF-102]**

Leverage Rawi for information gathering, data analysis, literature reviews, and research documentation.

### 🔍 [Code Review Workflow](code-review.md) **[WF-001]**

Automate and enhance code review processes with AI-powered analysis, security auditing, and quality assessment.

### 🔀 [Git Integration Workflow](git-integration.md) **[WF-002]**

Integrate Rawi with Git workflows for smart commit messages, branch analysis, and release notes generation.

### 📚 [Documentation Generation Workflow](documentation-generation.md) **[WF-003]**

Automate creation of README files, API documentation, code comments, and comprehensive project guides.

### 🔌 [API Development Workflow](api-development.md) **[WF-004]**

Streamline API development with design assistance, implementation guidance, testing, optimization, and command generation.

### 🧪 [Testing Workflow](testing.md) **[WF-005]**

Comprehensive testing strategies including unit tests, integration tests, e2e tests, performance testing, and test command generation.

### 📊 [Data Analysis Workflow](data-analysis.md) **[WF-006]**

Advanced data analysis workflows for exploration, statistical analysis, visualization, and machine learning.

---

## Quick Workflow Index

### 🛠️ Development Workflows

- [**Code Review Workflow**](code-review.md) **[WF-001]** — Automated code analysis and review
- [**Git Integration Workflow**](git-integration.md) **[WF-002]** — Smart commit messages and change analysis
- [**Documentation Generation**](documentation-generation.md) **[WF-003]** — Auto-generate project documentation
- [**API Development Workflow**](api-development.md) **[WF-004]** — Design and document APIs with AI
- [**Testing Workflow**](testing.md) **[WF-005]** — Comprehensive testing strategies

### 📊 Data Analysis Workflows

- [**Data Analysis Workflow**](data-analysis.md) **[WF-006]** — Advanced data exploration and insights
- [**Statistical Analysis Pipeline**](#statistical-analysis-workflow) **[WF-007]** — Statistical modeling and inference
- [**Performance Monitoring**](#performance-monitoring-workflow) **[WF-008]** — Monitor and optimize system performance
- [**Business Intelligence**](#business-intelligence-workflow) **[WF-009]** — Business metrics and KPI analysis

### 🔒 Security Workflows

- [**Security Audit Workflow**](#security-audit-workflow) **[WF-010]** — Comprehensive security assessment
- [**Vulnerability Assessment**](#vulnerability-assessment-workflow) **[WF-011]** — Identify and prioritize security risks
- [**Compliance Checking**](#compliance-workflow) **[WF-012]** — Ensure regulatory compliance

### 🚀 DevOps Workflows

- [**CI/CD Integration**](#cicd-integration-workflow) **[WF-013]** — Automated deployment pipelines
- [**Infrastructure as Code**](#infrastructure-workflow) **[WF-014]** — Manage infrastructure with AI assistance
- [**Monitoring and Alerting**](#monitoring-workflow) **[WF-015]** — Intelligent system monitoring

### 📝 Content Creation Workflows

- [**Technical Writing**](content-creation.md) **[WF-101]** — Professional documentation and guides
- [**Blog Content Creation**](#blog-workflow) **[WF-016]** — SEO-optimized blog posts and articles
- [**Marketing Content**](#marketing-workflow) **[WF-017]** — Marketing copy and campaign materials

### 🔬 Research Workflows

- [**Academic Research**](research.md) **[WF-102]** — Literature reviews and research papers
- [**Market Research**](#market-research-workflow) **[WF-018]** — Competitive analysis and market insights
- [**User Research**](#user-research-workflow) **[WF-019]** — UX research and user insights

### 🎨 Content Creation Workflows

- [**Technical Writing**](#technical-writing-workflow) — Create and improve technical content
- [**Blog Post Creation**](#blog-writing-workflow) — End-to-end blog writing process
- [**Documentation Review**](#documentation-review-workflow) — Review and improve existing docs

### ⚙️ DevOps Workflows

- [**Infrastructure Review**](#infrastructure-review-workflow) — Analyze and optimize infrastructure
- [**Security Scanning**](#security-scanning-workflow) — Automated security analysis
- [**Deployment Planning**](#deployment-workflow) — Plan and validate deployments

---

## Development Workflows

### Code Review Workflow

Comprehensive AI-powered code review process:

```bash
#!/bin/bash
# code-review-workflow.sh

PROJECT_NAME=$(basename "$PWD")
REVIEW_DIR="reviews/$(date +%Y%m%d)"
mkdir -p "$REVIEW_DIR"

echo "🔍 Starting AI Code Review for $PROJECT_NAME"

# 1. Overall codebase analysis
echo "📊 Analyzing codebase structure..."
find . -name "*.js" -o -name "*.ts" -o -name "*.py" | \
  head -20 | \
  xargs wc -l | \
  rawi ask --act software-engineer "Analyze this codebase structure and suggest improvements" > \
  "$REVIEW_DIR/structure-analysis.md"

# 2. Security review
echo "🔒 Security analysis..."
find . -name "*.js" -o -name "*.py" | \
  xargs grep -l "password\|token\|secret\|key" | \
  head -5 | \
  xargs cat | \
  rawi ask --act security-expert "Review for security vulnerabilities" > \
  "$REVIEW_DIR/security-review.md"

# 3. Performance analysis
echo "⚡ Performance review..."
find . -name "*.js" -o -name "*.py" | \
  xargs grep -l "loop\|query\|fetch\|request" | \
  head -5 | \
  xargs cat | \
  rawi ask --act performance-engineer "Analyze for performance issues" > \
  "$REVIEW_DIR/performance-review.md"

# 4. Code quality assessment
echo "✨ Code quality review..."
git log --oneline -20 | \
  rawi ask --act code-reviewer "Analyze commit patterns and suggest code quality improvements" > \
  "$REVIEW_DIR/quality-assessment.md"

# 5. Generate summary report
echo "📋 Generating summary..."
cat "$REVIEW_DIR"/*.md | \
  rawi ask "Create an executive summary of this code review" > \
  "$REVIEW_DIR/summary.md"

echo "✅ Code review complete! Results in $REVIEW_DIR"
```

### Git Integration Workflow

Smart Git operations with AI assistance:

```bash
# Add to your shell profile (.bashrc, .zshrc)

# Smart commit messages
git_ai_commit() {
  if git diff --cached --quiet; then
    echo "No staged changes to commit"
    return 1
  fi

  echo "🤖 Generating commit message..."
  COMMIT_MSG=$(git diff --cached | rawi ask "Write a conventional commit message for these changes")

  echo "Suggested commit message:"
  echo "$COMMIT_MSG"
  echo ""
  read -p "Use this message? [y/N] " confirm

  if [[ "$confirm" =~ ^[Yy]$ ]]; then
    git commit -m "$COMMIT_MSG"
  else
    echo "Commit cancelled"
  fi
}

# Pre-push review
git_ai_review() {
  local target_branch="${1:-main}"

  echo "🔍 Reviewing changes since $target_branch..."
  git diff "$target_branch"..HEAD | \
    rawi ask --act code-reviewer "Review these changes before push. Focus on potential issues." | \
    tee "review-$(date +%Y%m%d-%H%M).md"
}

# Branch analysis
git_ai_branch_summary() {
  echo "📊 Analyzing current branch..."
  git log --oneline "$(git merge-base HEAD main)"..HEAD | \
    rawi ask "Summarize the work done in this branch"
}

# Conflict resolution help
git_ai_conflict_help() {
  git status --porcelain | grep "^UU" | while read -r status file; do
    echo "🔧 Analyzing conflict in $file..."
    cat "$file" | \
      rawi ask "Help resolve this Git merge conflict. Explain the conflicting changes." | \
      tee "conflict-help-$(basename "$file").md"
  done
}
```

### Documentation Generation

Automated documentation creation:

```bash
#!/bin/bash
# generate-project-docs.sh

PROJECT_ROOT="$PWD"
DOCS_DIR="docs/generated"
mkdir -p "$DOCS_DIR"

echo "📚 Generating comprehensive project documentation..."

# 1. Project overview
echo "Creating project overview..."
{
  echo "# Project Overview"
  echo ""
  if [[ -f README.md ]]; then cat README.md; fi
  if [[ -f package.json ]]; then cat package.json; fi
  if [[ -f requirements.txt ]]; then cat requirements.txt; fi
} | rawi ask "Create a comprehensive project overview" > "$DOCS_DIR/overview.md"

# 2. Architecture documentation
echo "Analyzing architecture..."
find src -type f \( -name "*.js" -o -name "*.ts" -o -name "*.py" \) | \
  head -15 | \
  xargs cat | \
  rawi ask --act software-architect "Document the software architecture" > \
  "$DOCS_DIR/architecture.md"

# 3. API documentation
echo "Generating API docs..."
grep -r "app\.\|router\.\|@app\.\|def.*:" src/ | \
  head -30 | \
  rawi ask --act api-documenter "Create API documentation" > \
  "$DOCS_DIR/api.md"

# 4. Setup guide
echo "Creating setup guide..."
{
  if [[ -f package.json ]]; then echo "Node.js project detected"; cat package.json; fi
  if [[ -f requirements.txt ]]; then echo "Python project detected"; cat requirements.txt; fi
  if [[ -f Dockerfile ]]; then echo "Docker configuration:"; cat Dockerfile; fi
} | rawi ask "Create a comprehensive setup and installation guide" > "$DOCS_DIR/setup.md"

# 5. Contributing guide
echo "Creating contributing guide..."
git log --format="%an" | sort | uniq -c | sort -rn | head -10 | \
  rawi ask "Create a contributing guide based on this contributor activity" > \
  "$DOCS_DIR/contributing.md"

# 6. Create index
echo "Building documentation index..."
{
  echo "# Documentation Index"
  echo ""
  echo "Generated on $(date)"
  echo ""
  for doc in "$DOCS_DIR"/*.md; do
    filename=$(basename "$doc" .md)
    title=$(head -1 "$doc" | sed 's/^# //')
    echo "- [$title](./$filename.md)"
  done
} > "$DOCS_DIR/index.md"

echo "✅ Documentation generated in $DOCS_DIR"
```

### Debugging Workflow

AI-assisted debugging process:

```bash
# Debugging helper functions

# Analyze error logs
debug_logs() {
  local log_file="$1"
  local lines="${2:-50}"

  echo "🐛 Analyzing recent errors..."
  tail -n "$lines" "$log_file" | \
    grep -i "error\|exception\|fail" | \
    rawi ask --act debugging-expert "Analyze these errors and suggest debugging steps"
}

# Code analysis for specific function
debug_function() {
  local file="$1"
  local function_name="$2"

  echo "🔍 Analyzing function: $function_name in $file"
  grep -A 20 -B 5 "$function_name" "$file" | \
    rawi ask --act debugging-expert "Debug this function for potential issues"
}

# Stack trace analysis
debug_stack_trace() {
  echo "📋 Paste your stack trace, then press Ctrl+D:"
  rawi ask --act debugging-expert "Analyze this stack trace and suggest debugging approach"
}

# Performance debugging
debug_performance() {
  local command="$*"

  echo "⚡ Performance analysis for: $command"
  time $command 2>&1 | \
    rawi ask --act performance-engineer "Analyze this command performance and suggest optimizations"
}
```

---

## Data Analysis Workflows

### Log Analysis Workflow

Intelligent log monitoring and analysis:

```bash
#!/bin/bash
# log-analysis-workflow.sh

LOG_FILE="${1:-/var/log/app.log}"
ANALYSIS_DIR="log-analysis/$(date +%Y%m%d)"
mkdir -p "$ANALYSIS_DIR"

echo "📊 Starting log analysis for $(basename "$LOG_FILE")"

# 1. Error pattern analysis
echo "🔍 Analyzing error patterns..."
grep -i "error\|exception\|fail\|critical" "$LOG_FILE" | \
  tail -100 | \
  rawi ask --act sysadmin "Categorize these errors and identify patterns" > \
  "$ANALYSIS_DIR/error-patterns.md"

# 2. Performance insights
echo "⚡ Performance analysis..."
grep -i "slow\|timeout\|latency\|performance" "$LOG_FILE" | \
  tail -50 | \
  rawi ask --act performance-engineer "Analyze performance issues" > \
  "$ANALYSIS_DIR/performance-issues.md"

# 3. Security analysis
echo "🔒 Security analysis..."
grep -i "auth\|login\|security\|access\|denied" "$LOG_FILE" | \
  tail -50 | \
  rawi ask --act security-expert "Analyze for security concerns" > \
  "$ANALYSIS_DIR/security-analysis.md"

# 4. Usage patterns
echo "📈 Usage pattern analysis..."
awk '{print $1, $4, $7}' "$LOG_FILE" | \
  tail -200 | \
  rawi ask --act data-analyst "Analyze these access patterns" > \
  "$ANALYSIS_DIR/usage-patterns.md"

# 5. Recommendations
echo "💡 Generating recommendations..."
cat "$ANALYSIS_DIR"/*.md | \
  rawi ask "Summarize log analysis and provide actionable recommendations" > \
  "$ANALYSIS_DIR/recommendations.md"

echo "✅ Log analysis complete! Results in $ANALYSIS_DIR"
```

### Data Processing Workflow

Process and analyze datasets with AI assistance:

```bash
#!/bin/bash
# data-processing-workflow.sh

DATA_FILE="$1"
OUTPUT_DIR="analysis/$(date +%Y%m%d)"
mkdir -p "$OUTPUT_DIR"

if [[ ! -f "$DATA_FILE" ]]; then
  echo "Usage: $0 <data-file>"
  exit 1
fi

echo "📊 Processing dataset: $(basename "$DATA_FILE")"

# 1. Data exploration
echo "🔍 Exploring data structure..."
head -20 "$DATA_FILE" | \
  rawi ask --act data-scientist "Analyze this dataset structure and suggest processing approach" > \
  "$OUTPUT_DIR/data-exploration.md"

# 2. Data quality assessment
echo "✅ Assessing data quality..."
{
  echo "File size: $(wc -l < "$DATA_FILE") lines"
  echo "Sample data:"
  head -10 "$DATA_FILE"
  echo "Data types detected:"
  head -100 "$DATA_FILE" | awk -F',' '{for(i=1;i<=NF;i++) print $i}' | sort | uniq -c
} | rawi ask --act data-scientist "Assess data quality and identify issues" > \
  "$OUTPUT_DIR/quality-assessment.md"

# 3. Statistical analysis
echo "📈 Statistical analysis..."
if command -v python3 &> /dev/null; then
  python3 -c "
import pandas as pd
import sys
try:
    df = pd.read_csv('$DATA_FILE')
    print('Dataset shape:', df.shape)
    print('Basic statistics:')
    print(df.describe())
    print('Missing values:')
    print(df.isnull().sum())
except Exception as e:
    print('Error processing CSV:', e)
" | rawi ask --act data-scientist "Interpret these statistics and suggest analysis directions" > \
  "$OUTPUT_DIR/statistical-analysis.md"
fi

# 4. Generate insights
echo "💡 Generating insights..."
cat "$OUTPUT_DIR"/*.md | \
  rawi ask --act data-scientist "Summarize findings and suggest next steps for analysis" > \
  "$OUTPUT_DIR/insights.md"

echo "✅ Data processing complete! Results in $OUTPUT_DIR"
```

---

## Content Creation Workflows

### Technical Writing Workflow

End-to-end technical content creation:

```bash
#!/bin/bash
# technical-writing-workflow.sh

TOPIC="$1"
OUTPUT_DIR="content/$(echo "$TOPIC" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')"
mkdir -p "$OUTPUT_DIR"

if [[ -z "$TOPIC" ]]; then
  echo "Usage: $0 'Article Topic'"
  exit 1
fi

echo "✍️ Creating technical content for: $TOPIC"

# 1. Research and outline
echo "📋 Creating outline..."
rawi ask --act technical-writer "Create a detailed outline for a technical article about '$TOPIC'" > \
  "$OUTPUT_DIR/outline.md"

# 2. Introduction
echo "📖 Writing introduction..."
rawi ask --act technical-writer "Write an engaging introduction for an article about '$TOPIC'" > \
  "$OUTPUT_DIR/introduction.md"

# 3. Technical sections
echo "🔧 Creating technical content..."
cat "$OUTPUT_DIR/outline.md" | \
  rawi ask --act technical-writer "Expand this outline into detailed technical sections with code examples" > \
  "$OUTPUT_DIR/technical-content.md"

# 4. Code examples
echo "💻 Generating code examples..."
rawi ask --act software-engineer "Create practical code examples for '$TOPIC'" > \
  "$OUTPUT_DIR/code-examples.md"

# 5. Conclusion and next steps
echo "🎯 Writing conclusion..."
rawi ask --act technical-writer "Write a conclusion and next steps section for an article about '$TOPIC'" > \
  "$OUTPUT_DIR/conclusion.md"

# 6. Compile final article
echo "📄 Compiling final article..."
{
  cat "$OUTPUT_DIR/introduction.md"
  echo ""
  cat "$OUTPUT_DIR/technical-content.md"
  echo ""
  echo "## Code Examples"
  cat "$OUTPUT_DIR/code-examples.md"
  echo ""
  cat "$OUTPUT_DIR/conclusion.md"
} > "$OUTPUT_DIR/final-article.md"

# 7. Review and improve
echo "✨ Final review..."
cat "$OUTPUT_DIR/final-article.md" | \
  rawi ask --act technical-writer "Review this article for clarity, accuracy, and engagement. Suggest improvements." > \
  "$OUTPUT_DIR/review-feedback.md"

echo "✅ Technical article complete! Files in $OUTPUT_DIR"
```

---

## DevOps Workflows

### Infrastructure Review Workflow

Comprehensive infrastructure analysis:

```bash
#!/bin/bash
# infrastructure-review-workflow.sh

REVIEW_DIR="infrastructure-review/$(date +%Y%m%d)"
mkdir -p "$REVIEW_DIR"

echo "🏗️ Starting infrastructure review..."

# 1. Docker analysis
if [[ -f Dockerfile ]]; then
  echo "🐳 Analyzing Dockerfile..."
  cat Dockerfile | \
    rawi ask --act devops-engineer "Review this Dockerfile for best practices and security" > \
    "$REVIEW_DIR/dockerfile-review.md"
fi

# 2. Kubernetes analysis
if find . -name "*.yaml" -o -name "*.yml" | grep -q k8s; then
  echo "☸️ Analyzing Kubernetes configs..."
  find . -name "*.yaml" -o -name "*.yml" | \
    xargs grep -l "apiVersion\|kind:" | \
    xargs cat | \
    rawi ask --act kubernetes-expert "Review these Kubernetes configurations" > \
    "$REVIEW_DIR/k8s-review.md"
fi

# 3. CI/CD pipeline analysis
if [[ -d .github/workflows ]] || [[ -f .gitlab-ci.yml ]] || [[ -f Jenkinsfile ]]; then
  echo "🔄 Analyzing CI/CD pipelines..."
  find . -path ".github/workflows/*" -o -name ".gitlab-ci.yml" -o -name "Jenkinsfile" | \
    xargs cat | \
    rawi ask --act devops-engineer "Review these CI/CD configurations" > \
    "$REVIEW_DIR/cicd-review.md"
fi

# 4. Security configuration
echo "🔒 Security configuration review..."
find . -name "*.env*" -o -name "config*" -o -name "*.conf" | \
  head -5 | \
  xargs cat 2>/dev/null | \
  rawi ask --act security-engineer "Review these configurations for security issues" > \
  "$REVIEW_DIR/security-review.md"

# 5. Infrastructure summary
echo "📊 Generating infrastructure summary..."
cat "$REVIEW_DIR"/*.md | \
  rawi ask --act cloud-architect "Summarize infrastructure review findings and provide recommendations" > \
  "$REVIEW_DIR/summary.md"

echo "✅ Infrastructure review complete! Results in $REVIEW_DIR"
```

## Workflow Automation

### Scheduled Analysis Script

```bash
#!/bin/bash
# scheduled-analysis.cron
# Add to crontab: 0 9 * * 1 /path/to/scheduled-analysis.sh

ANALYSIS_DIR="weekly-analysis/$(date +%Y-week-%U)"
mkdir -p "$ANALYSIS_DIR"

echo "📅 Weekly automated analysis - $(date)"

# Code quality trends
git log --since="1 week ago" --oneline | \
  rawi ask --act software-engineer "Analyze this week's development activity" > \
  "$ANALYSIS_DIR/development-summary.md"

# Error log analysis
find /var/log -name "*.log" -mtime -7 | \
  xargs grep -i error | \
  head -100 | \
  rawi ask --act sysadmin "Summarize this week's error patterns" > \
  "$ANALYSIS_DIR/error-summary.md"

# Performance monitoring
uptime | \
  rawi ask --act performance-engineer "Analyze system uptime and suggest monitoring improvements" > \
  "$ANALYSIS_DIR/performance-summary.md"

# Send weekly report
cat "$ANALYSIS_DIR"/*.md | \
  mail -s "Weekly AI Analysis Report" admin@company.com
```

## Best Practices for Workflows

### Workflow Structure

1. **Modular Design** — Break workflows into reusable functions
2. **Error Handling** — Add proper error checking and fallbacks
3. **Progress Indicators** — Show progress for long-running workflows
4. **Output Organization** — Organize results in dated directories
5. **Documentation** — Include usage examples and explanations

### Performance Optimization

```bash
# Good: Limit data size
head -100 large-file.log | rawi ask "analyze this sample"

# Good: Use appropriate profiles
rawi ask "quick question" --profile local

# Good: Cache expensive operations
if [[ ! -f analysis-cache.md ]]; then
  expensive_analysis | rawi ask "analyze" > analysis-cache.md
fi
cat analysis-cache.md
```

### Security Considerations

```bash
# Good: Avoid sensitive data in prompts
grep -v "password\|token\|secret" config.file | rawi ask "review config"

# Good: Use local profiles for sensitive analysis
rawi ask "analyze internal system" --profile local

# Good: Clean up temporary files
trap 'rm -f /tmp/analysis-*.tmp' EXIT
```

## Related Documentation

- [🔗 Shell Integration Guide](../shell-integration.md)
- [🎯 Act Templates](../templates/README.md)
- [💬 Ask Command](../commands/ask.md)
- [📊 History Management](../commands/history.md)

---

**Next Steps:**

- [Explore specific workflow](./development.md)
- [Learn shell integration](../shell-integration.md)
- [Master act templates](../templates/README.md)
