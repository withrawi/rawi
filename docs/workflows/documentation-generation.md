# Documentation Generation Workflow

**ID: WF-003**  
**Category: Development**  
**Complexity: Intermediate**  
**Time: 10-30 minutes per project**

## Overview

Automate documentation creation and maintenance using Rawi for README files, API documentation, code comments, tutorials, and comprehensive project documentation.

## Prerequisites

- Rawi configured with a suitable provider (recommended: `openai`, `anthropic`)
- Project codebase
- Basic understanding of documentation standards

## Workflow Steps

### 1. README Generation

Create comprehensive README files:

```bash
# Generate basic README
rawi ask "Create a professional README for a Node.js CLI tool called 'rawi' that provides AI assistance" > README.md

# Generate README from package.json
rawi ask --file package.json "Create a comprehensive README based on this package.json" > README.md

# Update existing README
rawi ask --file README.md "Update this README with modern best practices and missing sections"
```

### 2. API Documentation

Generate API documentation from code:

```bash
# Document API endpoints
rawi ask --file src/routes/users.js --act api-documenter "Generate OpenAPI/Swagger documentation for these routes"

# Create API reference
rawi ask --batch "src/api/**/*.js" --act api-documenter "Generate comprehensive API documentation"

# Document REST API
rawi ask --file server.js "Generate API documentation in markdown format for this Express server"
```

### 3. Code Documentation

Add comprehensive code comments:

```bash
# Add JSDoc comments
rawi ask --file src/utils/helpers.js "Add comprehensive JSDoc comments to all functions"

# Add TypeScript documentation
rawi ask --file src/types/index.ts "Add TSDoc comments for all types and interfaces"

# Add Python docstrings
rawi ask --file src/models.py "Add comprehensive docstrings following Google style"
```

### 4. Tutorial Creation

Generate step-by-step tutorials:

```bash
# Create getting started guide
rawi ask --act tech-writer "Create a getting started tutorial for a CLI tool with installation, configuration, and basic usage"

# Generate workflow tutorials
rawi ask --act tech-writer "Create a tutorial for setting up a development environment with Node.js, TypeScript, and testing"

# Create advanced guides
rawi ask --file src/advanced-features.js --act tech-writer "Create advanced usage tutorial based on this code"
```

### 5. Automated Documentation Script

Create comprehensive documentation automation:

```bash
#!/bin/bash
# generate-docs.sh - Comprehensive documentation generation

set -e

PROJECT_NAME=$(basename "$(pwd)")
DOCS_DIR="docs"
GENERATED_DIR="$DOCS_DIR/generated"

echo "📚 Generating documentation for $PROJECT_NAME..."

# Create docs structure
mkdir -p "$GENERATED_DIR"/{api,guides,reference}

# 1. Generate main README
echo "📝 Generating README..."
if [ -f "package.json" ]; then
    rawi ask --file package.json "
    Create a comprehensive README.md for this project including:
    - Project description and features
    - Installation instructions
    - Quick start guide
    - Configuration options
    - Usage examples
    - API reference (if applicable)
    - Contributing guidelines
    - License information

    Make it professional and user-friendly.
    " > README.md
else
    rawi ask "
    Create a professional README.md template for a $PROJECT_NAME project.
    Include all standard sections and placeholder content.
    " > README.md
fi

# 2. Generate API documentation
echo "🔌 Generating API documentation..."
if find . -name "*.js" -o -name "*.ts" | grep -E "(route|api|endpoint)" > /dev/null; then
    rawi ask --batch "**/routes/**/*.{js,ts}" --act api-documenter "
    Generate comprehensive API documentation including:
    - Endpoint descriptions
    - Request/response schemas
    - Authentication requirements
    - Error codes and responses
    - Usage examples

    Format as markdown.
    " > "$GENERATED_DIR/api/endpoints.md"
fi

# 3. Generate installation guide
echo "💿 Generating installation guide..."
rawi ask --file package.json "
Create detailed installation and setup guide including:
- System requirements
- Installation methods (npm, yarn, git)
- Configuration steps
- Environment variables
- Troubleshooting common issues
- Verification steps
" > "$GENERATED_DIR/guides/installation.md"

# 4. Generate usage examples
echo "💡 Generating usage examples..."
rawi ask --batch "src/**/*.{js,ts}" "
Create comprehensive usage examples and tutorials based on this codebase:
- Basic usage scenarios
- Advanced use cases
- Best practices
- Common patterns
- Integration examples
- Troubleshooting guide
" > "$GENERATED_DIR/guides/usage.md"

# 5. Generate configuration documentation
echo "⚙️  Generating configuration guide..."
if find . -name "*.json" -o -name "*.yml" -o -name "*.yaml" | grep -E "(config|settings)" > /dev/null; then
    rawi ask --batch "**/*config*.{json,yml,yaml}" "
    Document all configuration options including:
    - Configuration file structure
    - Available options and defaults
    - Environment variable overrides
    - Examples for different environments
    - Validation rules
    " > "$GENERATED_DIR/guides/configuration.md"
fi

# 6. Generate code reference
echo "🔍 Generating code reference..."
rawi ask --batch "src/**/*.{js,ts}" "
Generate code reference documentation including:
- Module descriptions
- Class and function documentation
- Type definitions
- Usage patterns
- Internal architecture
" > "$GENERATED_DIR/reference/code-reference.md"

# 7. Generate troubleshooting guide
echo "🔧 Generating troubleshooting guide..."
rawi ask "
Create a comprehensive troubleshooting guide for $PROJECT_NAME including:
- Common issues and solutions
- Error message explanations
- Debugging techniques
- Performance optimization
- FAQ section
- Getting help resources
" > "$GENERATED_DIR/guides/troubleshooting.md"

# 8. Generate contributing guide
echo "🤝 Generating contributing guide..."
rawi ask "
Create a contributing guide for an open-source project including:
- Development setup
- Code style guidelines
- Testing requirements
- Pull request process
- Issue reporting
- Code of conduct
" > CONTRIBUTING.md

# 9. Create documentation index
echo "📚 Creating documentation index..."
rawi ask "
Create a comprehensive documentation index for the following files:
$(find $DOCS_DIR -name "*.md" | sort)

Include:
- Table of contents
- Brief descriptions
- Recommended reading order
- Quick reference links
" > "$DOCS_DIR/README.md"

echo "✅ Documentation generation complete!"
echo "📄 Generated files:"
find $DOCS_DIR -name "*.md" | sort
```

### 6. Interactive Documentation

Create interactive documentation with examples:

```bash
# Generate documentation with runnable examples
rawi ask --file src/cli.js "
Create documentation with interactive examples that users can copy and run.
Include:
- Code snippets with expected output
- Step-by-step tutorials
- Common use cases
- Error handling examples
"
```

### 7. Documentation Templates

#### API Documentation Template

```bash
rawi ask --act api-documenter "
Create an API documentation template including:
- Authentication section
- Endpoint documentation format
- Request/response examples
- Error handling
- Rate limiting
- Pagination
- Versioning
Format as markdown template.
"
```

#### User Guide Template

```bash
rawi ask --act tech-writer "
Create a user guide template including:
- Getting started section
- Feature overview
- Step-by-step tutorials
- Best practices
- Troubleshooting
- FAQ
Format as markdown template.
"
```

### 8. Documentation Maintenance

#### Update Existing Documentation

```bash
# Update README with new features
rawi ask --file README.md --file src/new-features.js "Update the README to include these new features"

# Sync documentation with code changes
rawi ask --file docs/api.md --file src/api-changes.js "Update API documentation to reflect these code changes"

# Version documentation
rawi ask --file CHANGELOG.md "Add entry for version 2.0.0 with breaking changes and new features"
```

#### Documentation Review

```bash
# Review documentation quality
rawi ask --file docs/user-guide.md --act tech-writer "Review this documentation for clarity, completeness, and accuracy"

# Check for outdated content
rawi ask --files docs/*.md --batch "src/**/*.js" "Identify any outdated documentation that doesn't match the current code"

# Improve documentation structure
rawi ask --batch "docs/**/*.md" "Analyze documentation structure and suggest improvements for better organization"
```

### 9. Specialized Documentation

#### CLI Tool Documentation

```bash
# Generate CLI help documentation
rawi ask --file src/cli.js "Generate comprehensive CLI documentation including all commands, options, and examples"

# Create man page
rawi ask --file package.json "Generate a man page for this CLI tool"

# Command reference
rawi ask --file src/commands/ "Create detailed command reference with all options and examples"
```

#### Library Documentation

```bash
# API reference for library
rawi ask --file src/index.js "Generate API reference documentation for this JavaScript library"

# Usage examples
rawi ask --file src/examples/ "Create comprehensive usage examples for this library"

# Integration guides
rawi ask "Create integration guides for using this library with popular frameworks (React, Vue, Angular)"
```

#### Database Documentation

```bash
# Schema documentation
rawi ask --file schema.sql --act database-admin "Generate database schema documentation with relationships and constraints"

# Migration guides
rawi ask --file migrations/ "Create migration guide documentation with upgrade/downgrade procedures"

# Query examples
rawi ask --file queries.sql "Generate query documentation with examples and explanations"
```

### 10. Documentation Quality Assurance

#### Automated Quality Checks

```bash
#!/bin/bash
# doc-quality-check.sh - Documentation quality assurance

echo "🔍 Checking documentation quality..."

# Check for broken links
rawi ask --batch "docs/**/*.md" "
Check for:
- Broken internal links
- Missing referenced files
- Outdated external links
- Inconsistent formatting
Report any issues found.
"

# Check completeness
rawi ask --batch "docs/**/*.md" --file src/ "
Compare documentation with codebase and identify:
- Undocumented features
- Outdated examples
- Missing API endpoints
- Inconsistent terminology
"

# Check accessibility
rawi ask --batch "docs/**/*.md" "
Review documentation for accessibility:
- Clear headings structure
- Alt text for images
- Descriptive link text
- Plain language usage
- Logical flow
"
```

#### Style Consistency

```bash
# Check writing style
rawi ask --batch "docs/**/*.md" --act tech-writer "
Review documentation for:
- Consistent voice and tone
- Grammar and spelling
- Technical accuracy
- User-friendly language
- Proper markdown formatting
"

# Standardize formatting
rawi ask --batch "docs/**/*.md" "
Standardize markdown formatting:
- Consistent heading styles
- Proper code block formatting
- Uniform list styles
- Table formatting
- Link formatting
"
```

## Documentation Best Practices

### 1. Structure and Organization

```bash
# Organize documentation logically
docs/
├── README.md              # Documentation index
├── guides/
│   ├── getting-started.md # Quick start guide
│   ├── installation.md    # Setup instructions
│   ├── configuration.md   # Configuration options
│   └── tutorials/         # Step-by-step tutorials
├── reference/
│   ├── api.md            # API documentation
│   ├── cli.md            # CLI reference
│   └── troubleshooting.md # Problem solving
└── examples/             # Code examples
    ├── basic/            # Simple examples
    └── advanced/         # Complex use cases
```

### 2. Documentation Types

- **README.md** - Project overview and quick start
- **Installation Guide** - Setup and configuration
- **User Guide** - How to use the software
- **API Reference** - Technical specifications
- **Tutorials** - Step-by-step learning
- **Examples** - Practical code samples
- **Troubleshooting** - Common issues and solutions
- **Contributing** - Development guidelines

### 3. Writing Guidelines

- Use clear, concise language
- Include practical examples
- Keep documentation up-to-date
- Use consistent formatting
- Test all code examples
- Consider your audience
- Use visual aids when helpful

## Integration with Development

### Pre-commit Documentation

```bash
#!/bin/sh
# .git/hooks/pre-commit - Documentation check

# Check if documentation needs updating
CHANGED_FILES=$(git diff --cached --name-only | grep -E '\.(js|ts|py)$')

if [ -n "$CHANGED_FILES" ]; then
    echo "🔍 Checking if documentation needs updating..."

    # Check for new functions/methods that need documentation
    for file in $CHANGED_FILES; do
        git diff --cached "$file" | rawi ask "
        Analyze these code changes and determine if documentation updates are needed.
        Look for:
        - New public functions/methods
        - Changed API signatures
        - New configuration options
        - Breaking changes

        Return 'DOCS_NEEDED' if documentation should be updated.
        "
    done
fi
```

### CI/CD Documentation

```yaml
# .github/workflows/docs.yml
name: Documentation

on:
  push:
    branches: [main]
  pull_request:

jobs:
  check-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Rawi
        run: |
          npm install -g rawi
          rawi configure --provider openai --api-key ${{ secrets.OPENAI_API_KEY }}

      - name: Check Documentation
        run: |
          # Check if docs are up to date
          rawi ask --batch "docs/**/*.md" --batch "src/**/*.js" "
          Compare documentation with code and identify:
          - Outdated documentation
          - Missing documentation for new features
          - Broken examples
          Report any issues.
          " > doc-check.md

      - name: Generate Missing Docs
        if: contains(steps.check-docs.outputs.result, 'MISSING')
        run: |
          # Auto-generate missing documentation
          bash scripts/generate-docs.sh
```

## Related Workflows

- [Code Review Workflow](code-review.md) - Review generated documentation
- [Development Workflow](development.md) - Integrate with development process
- [Content Creation Workflow](content-creation.md) - Advanced writing techniques

---

**Navigation:**

- [← Back to Workflows](README.md)
- [Next: API Development →](api-development.md)
