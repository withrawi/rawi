# Code Review Workflow

**ID: WF-001**  
**Category: Development**  
**Complexity: Intermediate**  
**Time: 5-15 minutes per review**

## Overview

Automate and enhance your code review process using Rawi's AI capabilities for comprehensive code analysis, security auditing, and quality assessment.

## Prerequisites

- Rawi configured with a suitable provider (recommended: `openai`, `anthropic`, or `claude`)
- Git repository with code to review
- Basic understanding of your codebase

## Workflow Steps

### 1. Quick Code Review

Review individual files for general quality:

```bash
# Review a single file
rawi ask --file src/components/UserProfile.tsx --act code-reviewer "Review this component for best practices, performance, and maintainability"

# Review with specific focus
rawi ask --file api/auth.js --act security-expert "Audit this authentication code for security vulnerabilities"
```

### 2. Git-Based Review

Review changes in your Git workflow:

```bash
# Review staged changes
git diff --cached | rawi ask --act code-reviewer "Review these staged changes for quality and potential issues"

# Review specific commit
git show HEAD | rawi ask --act code-reviewer "Analyze this commit for code quality and breaking changes"

# Review branch differences
git diff main..feature-branch | rawi ask --act code-reviewer "Review this feature branch for integration concerns"
```

### 3. Batch Code Review

Review multiple files at once:

```bash
# Review all JavaScript/TypeScript files
rawi ask --batch "src/**/*.{js,ts,jsx,tsx}" --act code-reviewer "Analyze all source files for consistency and best practices"

# Review specific directory
rawi ask --batch "src/services/*.js" --act security-expert "Security audit for all service layer files"

# Parallel processing for large codebases
rawi ask --batch "src/**/*.py" --parallel --act code-reviewer "Review Python codebase for PEP 8 compliance and best practices"
```

### 4. Automated Review Script

Create a comprehensive review automation script:

```bash
#!/bin/bash
# code-review.sh - Comprehensive AI Code Review

set -e

BRANCH=${1:-"main"}
OUTPUT_DIR="reviews/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$OUTPUT_DIR"

echo "🔍 Starting comprehensive code review..."

# 1. Review staged changes
echo "📝 Reviewing staged changes..."
if git diff --cached --quiet; then
    echo "No staged changes to review"
else
    git diff --cached | rawi ask --act code-reviewer "
    Review these staged changes for:
    - Code quality and best practices
    - Potential bugs or issues
    - Performance implications
    - Security concerns
    " > "$OUTPUT_DIR/staged-changes-review.md"
fi

# 2. Review recent commits
echo "📊 Reviewing recent commits..."
git log --oneline -10 --pretty=format:"%h %s" > "$OUTPUT_DIR/recent-commits.txt"
git log -10 --stat | rawi ask --act code-reviewer "
Analyze these recent commits for:
- Code quality trends
- Breaking changes
- Documentation needs
" > "$OUTPUT_DIR/recent-commits-analysis.md"

# 3. Security audit
echo "🔒 Performing security audit..."
rawi ask --batch "src/**/*.{js,ts,py,php}" --act security-expert "
Perform security audit focusing on:
- Authentication and authorization
- Input validation
- SQL injection vulnerabilities
- XSS prevention
- Sensitive data exposure
" > "$OUTPUT_DIR/security-audit.md"

# 4. Performance analysis
echo "⚡ Analyzing performance..."
rawi ask --batch "src/**/*.{js,ts}" --act performance-engineer "
Analyze code for performance issues:
- Algorithm efficiency
- Memory usage
- Database query optimization
- Bundle size impact
" > "$OUTPUT_DIR/performance-analysis.md"

# 5. Documentation review
echo "📚 Reviewing documentation..."
rawi ask --batch "**/*.md" "
Review documentation for:
- Completeness and accuracy
- Clarity and organization
- Missing sections
- Outdated information
" > "$OUTPUT_DIR/documentation-review.md"

echo "✅ Code review complete! Results saved to: $OUTPUT_DIR"
echo "📄 Review summary:"
ls -la "$OUTPUT_DIR"
```

### 5. Focused Review Types

#### Security Review

```bash
# Authentication systems
rawi ask --file src/auth/login.js --act security-expert "Audit this login system for security vulnerabilities"

# API endpoints
rawi ask --batch "api/**/*.js" --act security-expert "Review API endpoints for security best practices"

# Database queries
rawi ask --file src/models/User.js --act security-expert "Review database model for SQL injection and data validation"
```

#### Performance Review

```bash
# Frontend performance
rawi ask --file src/components/DataTable.tsx --act performance-engineer "Analyze this component for rendering performance"

# Backend performance
rawi ask --file src/services/analytics.js --act performance-engineer "Review this service for database and API performance"

# Algorithm efficiency
rawi ask --file src/utils/sorting.js --act algorithm-expert "Analyze algorithm efficiency and suggest optimizations"
```

#### Architecture Review

```bash
# System design
rawi ask --batch "src/architecture/**/*.md" --act software-architect "Review system architecture documentation"

# Module structure
rawi ask --batch "src/**/*.js" --act software-architect "Analyze module organization and dependencies"

# API design
rawi ask --file api/openapi.yml --act api-architect "Review API design for RESTful best practices"
```

## Review Checklist

### Code Quality

- [ ] Follows coding standards and conventions
- [ ] Proper error handling and validation
- [ ] Adequate test coverage
- [ ] Clear and meaningful variable/function names
- [ ] Appropriate comments and documentation

### Security

- [ ] Input validation and sanitization
- [ ] Authentication and authorization checks
- [ ] No hardcoded secrets or credentials
- [ ] SQL injection prevention
- [ ] XSS and CSRF protection

### Performance

- [ ] Efficient algorithms and data structures
- [ ] Optimized database queries
- [ ] Proper caching strategies
- [ ] Minimal resource usage
- [ ] Bundle size considerations

### Maintainability

- [ ] Modular and reusable code
- [ ] Clear separation of concerns
- [ ] Consistent architectural patterns
- [ ] Updated documentation
- [ ] Version control best practices

## Integration with CI/CD

### GitHub Actions Integration

```yaml
# .github/workflows/ai-code-review.yml
name: AI Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Rawi
        run: |
          npm install -g rawi
          rawi configure --provider openai --api-key ${{ secrets.OPENAI_API_KEY }}

      - name: AI Code Review
        run: |
          git diff origin/main...HEAD | rawi ask --act code-reviewer "
          Review this pull request for:
          - Code quality and best practices
          - Security vulnerabilities
          - Performance implications
          - Breaking changes
          " > ai-review.md

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

## Advanced Techniques

### Global Template Usage

Templates work consistently across all configurations:

```bash
# Templates work with any profile automatically
rawi ask --file complex-algorithm.js --act code-reviewer "Deep architectural analysis"

# Security reviews work globally
rawi ask --file auth-system.js --act security-expert "Security vulnerability assessment"

# Use different providers with same templates
rawi ask --file utils.js --act code-reviewer "Quick syntax and style check"
```

### Template Customization

Create custom review templates:

```bash
# Custom security template
rawi ask --file payment-processor.js --act custom-security-auditor "
Act as a payment security expert. Review this code for:
1. PCI DSS compliance
2. Encryption standards
3. Audit trail requirements
4. Data retention policies
5. Regulatory compliance
"
```

## Troubleshooting

### Common Issues

**Large file processing**

```bash
# Split large files into smaller chunks
split -l 1000 large-file.js chunk-
for chunk in chunk-*; do
    rawi ask --file "$chunk" --act code-reviewer "Review this code section"
done
```

**Rate limiting**

```bash
# Add delays between requests
rawi ask --batch "src/**/*.js" --max-concurrency 2 "Review code with rate limiting"
```

**Memory issues with large batches**

```bash
# Process in smaller batches
find src -name "*.js" | head -10 | xargs -I {} rawi ask --file {} --act code-reviewer "Review this file"
```

## Best Practices

1. **Use specific templates** for targeted reviews
2. **Combine multiple perspectives** (security, performance, maintainability)
3. **Review in context** of recent changes and project goals
4. **Document findings** and track improvements over time
5. **Integrate with CI/CD** for automated quality gates
6. **Use appropriate models** for different complexity levels
7. **Batch similar files** for consistency analysis

## Related Workflows

- [Development Workflow](development.md) - Complete development process
- [Git Integration Workflow](git-integration.md) - Advanced Git workflows
- [Documentation Generation](documentation-generation.md) - Auto-generate docs

---

**Navigation:**

- [← Back to Workflows](README.md)
- [Next: Git Integration →](git-integration.md)
