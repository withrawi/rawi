# act — Template Explorer

The `act` command helps you discover and explore the 200+ expert prompt templates that make AI responses more specialized and effective.

## 📋 Table of Contents

- [Basic Usage](#basic-usage)
- [Options](#options)
- [Template Categories](#template-categories)
- [Popular Templates](#popular-templates)
- [Using Templates](#using-templates)
- [Template Examples](#template-examples)
- [Advanced Usage](#advanced-usage)

---

## Basic Usage

```bash
rawi act [options]
```

### Quick Commands

```bash
# Browse all templates (interactive)
rawi act --list

# Show details of a specific template
rawi act --show code-reviewer

# Use a template with ask command
rawi ask --act ethereum-developer "explain smart contracts"
```

---

## Options

| Option              | Alias | Description                             |
| ------------------- | ----- | --------------------------------------- |
| `--list`            | `-l`  | List all available act templates        |
| `--show <template>` | `-s`  | Show details of a specific act template |

---

## Template Categories

Rawi includes 200+ templates organized into these categories:

### 🛠️ Technical Support

- **Code Review** — Code analysis and optimization
- **DevOps** — Infrastructure and deployment assistance
- **Troubleshooting** — System and application debugging
- **Database** — SQL optimization and database management

### 📝 Content Creation

- **Technical Writing** — Documentation and guides
- **API Documentation** — Endpoint documentation
- **Marketing** — Copy and content strategy
- **Educational** — Learning materials and tutorials

### 🔒 Security & Analysis

- **Security Expert** — Vulnerability analysis and auditing
- **Penetration Testing** — Security testing guidance
- **Code Security** — Secure coding practices

### 💼 Business & Strategy

- **Business Analysis** — Strategic planning and analysis
- **Project Management** — Planning and coordination
- **Consulting** — Expert advice and recommendations

### 🎨 Creative & Design

- **UX Design** — User experience guidance
- **Creative Direction** — Design and branding
- **Content Strategy** — Creative content planning

### 🌍 Languages & Communication

- **Translation** — Language translation and improvement
- **Communication** — Writing and speaking assistance
- **Cultural** — Cross-cultural communication

---

## Popular Templates

### Development Templates

#### `code-reviewer`

**Purpose**: Comprehensive code analysis and optimization

```bash
rawi ask --act code-reviewer "Review this function for performance issues"
```

#### `ethereum-developer`

**Purpose**: Smart contract development and security

```bash
rawi ask --act ethereum-developer "Explain smart contract security best practices"
```

#### `linux-terminal`

**Purpose**: Linux command line simulation and guidance

```bash
rawi ask --act linux-terminal "list files in home directory with details"
```

#### `database-admin`

**Purpose**: Database optimization and management

```bash
rawi ask --act database-admin "Optimize this SQL query for performance"
```

### Security Templates

#### `security-expert`

**Purpose**: Security analysis and vulnerability assessment

```bash
rawi ask --act security-expert "Analyze this authentication code for vulnerabilities"
```

#### `penetration-tester`

**Purpose**: Security testing and assessment guidance

```bash
rawi ask --act penetration-tester "Assess web application security"
```

### Documentation Templates

#### `tech-writer`

**Purpose**: Technical documentation creation

```bash
rawi ask --act tech-writer "Create documentation for this API endpoint"
```

#### `api-documenter`

**Purpose**: API documentation and examples

```bash
rawi ask --act api-documenter "Document these REST endpoints"
```

### Analysis Templates

#### `data-analyst`

**Purpose**: Data analysis and insights

```bash
rawi ask --act data-analyst "Analyze trends in this sales data"
```

#### `business-analyst`

**Purpose**: Business analysis and strategy

```bash
rawi ask --act business-analyst "Analyze market opportunity for this product"
```

---

## Using Templates

### With the ask Command

The primary way to use templates is with the `ask` command:

```bash
# Basic template usage
rawi ask --act <template-id> "your question"

# Examples
rawi ask --act code-reviewer "Review this Python function"
rawi ask --act security-expert "Audit this authentication system"
rawi ask --act tech-writer "Document this API"
```

### With File Input

Combine templates with file input for powerful analysis:

```bash
# Code review
cat server.js | rawi ask --act code-reviewer "Review for security and performance"

# API documentation
cat api-spec.json | rawi ask --act api-documenter "Create comprehensive docs"

# Security audit
cat auth.py | rawi ask --act security-expert "Analyze for vulnerabilities"

# Database optimization
cat queries.sql | rawi ask --act database-admin "Optimize these queries"
```

### With Profiles

Combine templates with specific profiles:

```bash
# Use Claude for deep analysis
rawi ask --act code-reviewer "Analyze architecture" --profile claude

# Use local AI for quick checks
rawi ask --act linux-terminal "ls -la" --profile ollama

# Use GPT-4 for documentation
rawi ask --act tech-writer "Create README" --profile openai
```

---

## Template Examples

### Development Workflows

#### Code Review

```bash
# Review specific function
rawi ask --act code-reviewer "Review this function for bugs and improvements" < function.py

# Architecture analysis
git diff | rawi ask --act code-reviewer "Review these architectural changes"

# Performance optimization
cat slow-function.js | rawi ask --act code-reviewer "Optimize for performance"
```

#### Database Work

```bash
# Query optimization
echo "SELECT * FROM users WHERE created_at > '2024-01-01'" | \
  rawi ask --act database-admin "Optimize this query"

# Schema design
rawi ask --act database-admin "Design database schema for e-commerce platform"

# Performance analysis
cat slow-queries.sql | rawi ask --act database-admin "Analyze performance issues"
```

#### DevOps and Infrastructure

```bash
# Docker optimization
cat Dockerfile | rawi ask --act devops-engineer "Optimize for production"

# CI/CD pipeline
rawi ask --act devops-engineer "Create GitHub Actions workflow for Node.js"

# Infrastructure as Code
rawi ask --act devops-engineer "Generate Terraform for AWS ECS deployment"
```

### Security Analysis

#### Security Auditing

```bash
# Authentication review
cat auth.js | rawi ask --act security-expert "Audit authentication implementation"

# API security
cat api-routes.py | rawi ask --act security-expert "Review for security vulnerabilities"

# Configuration security
cat nginx.conf | rawi ask --act security-expert "Review configuration security"
```

#### Penetration Testing

```bash
# Web app assessment
rawi ask --act penetration-tester "Test plan for web application security assessment"

# Network security
rawi ask --act penetration-tester "Analyze network security for small office"

# Mobile app security
rawi ask --act penetration-tester "Security testing approach for mobile app"
```

### Documentation Creation

#### Technical Writing

```bash
# API documentation
cat openapi.yaml | rawi ask --act tech-writer "Create user-friendly API docs"

# README creation
rawi ask --act tech-writer "Create comprehensive README for CLI tool"

# Tutorial writing
rawi ask --act tech-writer "Write tutorial for React hooks"
```

#### API Documentation

```bash
# Endpoint documentation
echo '{"endpoint": "/users", "method": "GET"}' | \
  rawi ask --act api-documenter "Document this endpoint"

# SDK documentation
cat sdk-methods.js | rawi ask --act api-documenter "Create SDK documentation"

# Integration guide
rawi ask --act api-documenter "Create integration guide for payment API"
```

### Data Analysis

#### Data Analysis

```bash
# CSV analysis
cat sales-data.csv | rawi ask --act data-analyst "Analyze sales trends and patterns"

# Log analysis
grep ERROR app.log | rawi ask --act data-analyst "Categorize and analyze errors"

# Performance metrics
cat metrics.json | rawi ask --act data-analyst "Analyze application performance"
```

#### Business Analysis

```bash
# Market analysis
rawi ask --act business-analyst "Analyze SaaS market opportunity for small businesses"

# Competitive analysis
rawi ask --act business-analyst "Compare our product with competitors"

# Business model
rawi ask --act business-analyst "Evaluate subscription vs one-time pricing"
```

---

## Advanced Usage

### Browsing Templates

#### Interactive List

```bash
rawi act --list
```

This shows a paginated, interactive list of all templates with:

- Template ID
- Display name
- Category
- Description

Navigate with:

- **Arrow keys** — Move between pages
- **Enter** — View template details
- **q** — Quit

#### Template Details

```bash
rawi act --show code-reviewer
```

Shows detailed information about a template:

- Full description
- Category
- Usage examples
- Template content

### Finding Templates

#### By Category

Use the interactive list and filter by category mentally, or search for keywords:

```bash
# Look for security-related templates
rawi act --list | grep -i security

# Find database templates
rawi act --list | grep -i database

# Find development templates
rawi act --list | grep -i code
```

#### By Use Case

Common use cases and their recommended templates:

| Use Case          | Templates                               |
| ----------------- | --------------------------------------- |
| **Code Review**   | `code-reviewer`, `security-expert`      |
| **Documentation** | `tech-writer`, `api-documenter`         |
| **DevOps**        | `devops-engineer`, `linux-terminal`     |
| **Security**      | `security-expert`, `penetration-tester` |
| **Database**      | `database-admin`, `data-analyst`        |
| **Business**      | `business-analyst`, `consultant`        |
| **Learning**      | `tutor`, `explainer`                    |

### Template Customization

While you can't modify built-in templates, you can customize their usage:

```bash
# Add context to template usage
rawi ask --act code-reviewer "
Review this Python Flask API for:
1. Security vulnerabilities
2. Performance issues
3. Code style and best practices
4. Error handling
" < api.py

# Combine multiple perspectives
cat code.js | rawi ask --act code-reviewer "Review for maintainability"
cat code.js | rawi ask --act security-expert "Review for security issues"
```

### Workflow Integration

#### Git Hooks

```bash
# Pre-commit hook using templates
git diff --cached | rawi ask --act code-reviewer "Quick review of staged changes"

# Commit message generation
git diff --cached | rawi ask --act tech-writer "Generate conventional commit message"
```

#### CI/CD Integration

```bash
# Security check in pipeline
cat src/**/*.js | rawi ask --act security-expert "Scan for vulnerabilities" > security-report.md

# Documentation generation
cat api-spec.yaml | rawi ask --act api-documenter "Generate API docs" > docs/api.md
```

#### Daily Workflows

```bash
# Morning code review
git diff HEAD~1 | rawi ask --act code-reviewer "Review yesterday's changes"

# Documentation updates
find . -name "*.py" -newer docs/ | head -5 | xargs cat | \
  rawi ask --act tech-writer "Update documentation for changed files"
```

---

## Template Best Practices

### 1. Choose the Right Template

```bash
# ❌ Generic
rawi ask "Check my code"

# ✅ Specific template
rawi ask --act code-reviewer "Review for performance and security" < code.py
```

### 2. Provide Context

```bash
# ❌ Minimal context
rawi ask --act security-expert "Check this"

# ✅ Clear context
rawi ask --act security-expert "Audit authentication in this Express.js API" < auth.js
```

### 3. Combine with Profiles

```bash
# Use appropriate AI model for the task
rawi ask --act code-reviewer "Deep architectural analysis" --profile claude
rawi ask --act linux-terminal "Quick command help" --profile ollama
```

### 4. Use Multiple Templates

```bash
# Different perspectives on the same code
cat api.py | rawi ask --act code-reviewer "Review code quality"
cat api.py | rawi ask --act security-expert "Review security"
cat api.py | rawi ask --act tech-writer "Document this API"
```

---

## Navigation

- [← Back to Commands](./README.md)
- [Next: provider Command →](./provider.md)

Related Pages:

- [ask Command](./ask.md)
- [Templates Overview](../templates/README.md)
- [Workflow Examples](../workflows/README.md)
