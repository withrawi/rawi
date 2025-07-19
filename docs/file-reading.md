# 📄 File Reading & Document Processing

Rawi provides powerful file reading capabilities that allow you to process and analyze various document formats seamlessly. Extract content from PDFs, Word documents, Excel spreadsheets, and text files to enhance your AI conversations with rich document context.

## 🚀 Quick Start

```bash
# Process a single file
rawi ask --file document.pdf "Summarize this document"

# Multiple files
rawi ask --files config.json package.json "Compare these configurations"

# Batch processing with patterns
rawi ask --batch "src/**/*.js" "Review all JavaScript files"
```

## 📋 Supported File Formats

### 📄 PDF Documents (.pdf)

Extract text content from PDF documents for analysis and summarization.

```bash
# Basic PDF processing
rawi ask --file report.pdf "What are the main conclusions?"

# Detailed analysis
rawi ask --file financial-report.pdf --act data-analyst "Analyze the financial trends"

# Research paper review
rawi ask --file research.pdf --act academic-researcher "Summarize the methodology and findings"
```

**Features:**

- ✅ Text extraction from standard PDFs
- ✅ Multi-page document support
- ✅ Automatic content cleaning
- ⚠️ Limited support for image-heavy PDFs
- ⚠️ Encrypted PDFs require manual unlock

### 📝 Microsoft Word Documents (.docx)

Process Word documents with full text extraction and formatting awareness.

```bash
# Document analysis
rawi ask --file requirements.docx "Extract all functional requirements"

# Content review
rawi ask --file proposal.docx --act tech-writer "Review this proposal for clarity"

# Template generation
rawi ask --file example.docx "Create a similar document template"
```

**Features:**

- ✅ Complete text extraction
- ✅ Table content preservation
- ✅ Header and footer inclusion
- ✅ Embedded formatting context
- ⚠️ Images and charts not processed

### 📊 Microsoft Excel Spreadsheets (.xlsx)

Analyze Excel data with sheet selection and intelligent data formatting.

```bash
# Data analysis
rawi ask --file sales-data.xlsx "Identify sales trends and patterns"

# Specific sheet processing
rawi ask --file workbook.xlsx --sheet "Q4 Results" "Analyze Q4 performance"

# Financial modeling
rawi ask --file budget.xlsx --act financial-analyst "Review this budget for accuracy"
```

**Features:**

- ✅ Multiple sheet support
- ✅ Automatic data formatting
- ✅ Header row detection
- ✅ Formula result extraction
- ✅ Sheet name listing
- ⚠️ Charts and pivot tables not processed

### 📋 Text & Source Files

Process various text-based files with intelligent content type detection.

```bash
# Source code review
rawi ask --file app.js "Review this code for best practices"

# Configuration analysis
rawi ask --file docker-compose.yml "Optimize this Docker configuration"

# Documentation processing
rawi ask --file README.md "Improve this documentation"

# Data file processing
rawi ask --file data.json "Validate and summarize this JSON structure"
```

**Supported Extensions:**

- **Code:** `.js`, `.ts`, `.py`, `.java`, `.cpp`, `.go`, `.rs`, `.php`
- **Config:** `.json`, `.yml`, `.yaml`, `.xml`, `.toml`, `.ini`
- **Docs:** `.md`, `.txt`, `.rst`, `.tex`
- **Data:** `.csv`, `.sql`, `.log`
- **Web:** `.html`, `.css`, `.scss`, `.vue`, `.jsx`

## 🛠️ Advanced Usage

### Multiple File Processing

Process several files simultaneously to compare, analyze, or merge content.

```bash
# Compare configurations
rawi ask --files package.json composer.json "Compare these dependency files"

# Analyze related files
rawi ask --files index.html style.css script.js "Review this web page implementation"

# Process documentation set
rawi ask --files *.md "Create a comprehensive documentation index"
```

### Batch Processing with Glob Patterns

Use powerful glob patterns to process multiple files matching specific criteria.

```bash
# Process all JavaScript files
rawi ask --batch "src/**/*.js" "Find potential security vulnerabilities"

# Analyze all configuration files
rawi ask --batch "**/*.{json,yml,yaml}" "Review all configuration files"

# Documentation review
rawi ask --batch "docs/**/*.md" "Create a table of contents"

# Test file analysis
rawi ask --batch "test/**/*.spec.js" "Analyze test coverage patterns"
```

**Glob Pattern Examples:**

- `**/*.js` — All JavaScript files recursively
- `src/**/*.{ts,tsx}` — TypeScript files in src directory
- `config/*.json` — JSON files in config directory only
- `**/*test*` — All files containing "test" in name
- `!node_modules/**` — Exclude node_modules (automatic)

### Parallel Processing

Enable parallel processing for faster batch operations.

```bash
# Enable parallel processing
rawi ask --batch "src/**/*.js" --parallel "Analyze all source files"

# Control concurrency
rawi ask --batch "docs/**/*.md" --parallel --max-concurrency 3 "Process documentation"

# Handle errors gracefully
rawi ask --batch "**/*.json" --parallel --continue-on-error "Validate JSON files"
```

**Performance Benefits:**

- 🚀 Up to 5x faster for multiple files
- 🔄 Configurable concurrency limits
- 🛡️ Automatic error isolation
- 📊 Progress tracking and reporting

### File Type Override

Override automatic file type detection when needed.

```bash
# Process unknown extension as text
rawi ask --file data.custom --file-type txt "Analyze this data file"

# Force PDF processing
rawi ask --file document.unknown --file-type pdf "Extract text from this file"

# Treat as JSON despite extension
rawi ask --file config.bak --file-type json "Validate this backup configuration"
```

## 🎯 Expert Templates for File Processing

Combine file processing with specialized AI templates for enhanced analysis.

### Data Analysis Templates

```bash
# Financial analysis
rawi ask --file quarterly-report.xlsx --act financial-analyst "Analyze financial performance"

# Statistical analysis
rawi ask --file dataset.csv --act data-scientist "Perform statistical analysis"

# Business intelligence
rawi ask --file sales-data.xlsx --act business-analyst "Generate business insights"
```

### Code Review Templates

```bash
# Security audit
rawi ask --file auth.js --act security-expert "Audit for security vulnerabilities"

# Performance review
rawi ask --file algorithm.py --act performance-engineer "Optimize for performance"

# Architecture review
rawi ask --file system-design.md --act software-architect "Review system architecture"
```

### Documentation Templates

```bash
# Technical writing
rawi ask --file api-spec.yml --act tech-writer "Create user-friendly documentation"

# API documentation
rawi ask --file endpoints.json --act api-documenter "Generate API documentation"

# Tutorial creation
rawi ask --file example-code.js --act tutorial-creator "Create a step-by-step tutorial"
```

## 📊 Performance & Limitations

### File Size Limits

| File Type | Recommended Max | Hard Limit | Notes                                  |
| --------- | --------------- | ---------- | -------------------------------------- |
| PDF       | 10 MB           | 50 MB      | Depends on text density                |
| DOCX      | 5 MB            | 25 MB      | Complex formatting may slow processing |
| XLSX      | 15 MB           | 100 MB     | Large datasets may hit token limits    |
| Text      | 1 MB            | 10 MB      | Plain text processes fastest           |

### Processing Speed

| Operation        | Files | Typical Time  | With Parallel          |
| ---------------- | ----- | ------------- | ---------------------- |
| Single file      | 1     | < 1 second    | N/A                    |
| Multiple files   | 5-10  | 3-5 seconds   | 1-2 seconds            |
| Batch processing | 20+   | 10-30 seconds | 3-8 seconds            |
| Large batches    | 100+  | 1-5 minutes   | 30 seconds - 2 minutes |

### Memory Usage

- **PDF**: ~2-3x file size in memory
- **DOCX**: ~1.5-2x file size in memory
- **XLSX**: ~3-4x file size in memory
- **Text**: ~1x file size in memory

## 🔧 Troubleshooting

### Common Issues

**File Not Found**

```bash
# Check file path
ls -la /path/to/file

# Use absolute path
rawi ask --file /absolute/path/to/document.pdf "Analyze this"

# Check current directory
rawi ask --file ./relative/path/document.pdf "Analyze this"
```

**Permission Denied**

```bash
# Check file permissions
ls -l document.pdf

# Fix permissions if needed
chmod 644 document.pdf
```

**Unsupported File Type**

```bash
# Override file type detection
rawi ask --file unknown.ext --file-type txt "Process as text"

# Convert to supported format first
pandoc document.rtf -o document.docx
rawi ask --file document.docx "Analyze this document"
```

**Memory Issues with Large Files**

```bash
# Process in smaller batches
rawi ask --batch "part1/*.pdf" "Analyze first batch"
rawi ask --batch "part2/*.pdf" "Analyze second batch"

# Use more specific glob patterns
rawi ask --batch "*.pdf" --max-concurrency 2 "Process PDFs slowly"
```

**Empty or Corrupted Content**

```bash
# Verify file integrity
file document.pdf

# Check file size
ls -lh document.pdf

# Test with different tool
pdftotext document.pdf test.txt
```

### Debugging Tips

**Enable Verbose Output**

```bash
# See detailed processing information
rawi ask --file document.pdf --verbose "Analyze this document"
```

**Check File Type Detection**

```bash
# See what file type was detected
rawi ask --file document.unknown --verbose "What type is this file?"
```

**Test with Simple Files**

```bash
# Create test file
echo "Hello, world!" > test.txt
rawi ask --file test.txt "What does this say?"
```

## 🎯 Best Practices

### File Organization

```bash
# Organize files for batch processing
project/
├── docs/           # Documentation files
├── config/         # Configuration files
├── src/           # Source code
└── data/          # Data files

# Use descriptive patterns
rawi ask --batch "docs/**/*.md" "Review documentation"
rawi ask --batch "config/*.{json,yml}" "Validate configurations"
```

### Effective Prompts

```bash
# Be specific about what you want
rawi ask --file report.pdf "Extract the top 3 recommendations from the executive summary"

# Provide context for better results
rawi ask --file code.js --act code-reviewer "Review this Express.js middleware for security issues"

# Ask for structured output
rawi ask --file data.xlsx "Create a bullet-point summary of key metrics"
```

### Performance Optimization

```bash
# Use parallel processing for multiple files
rawi ask --batch "src/**/*.js" --parallel "Find TODO comments"

# Limit concurrency for resource-constrained systems
rawi ask --batch "**/*.pdf" --max-concurrency 2 "Process PDFs"

# Continue on errors for large batches
rawi ask --batch "**/*.json" --continue-on-error "Validate all JSON"
```

### Error Handling

```bash
# Always use continue-on-error for large batches
rawi ask --batch "**/*" --continue-on-error "Process all files"

# Check results with verbose output
rawi ask --file problematic.pdf --verbose "Debug this file"

# Use file type override for edge cases
rawi ask --file weird.ext --file-type txt "Process as plain text"
```

## 🔗 Integration Examples

### Git Workflow Integration

```bash
# Review changed files
git diff --name-only | xargs rawi ask --files "Review these changes"

# Analyze commit content
git show --name-only HEAD | head -n -1 | xargs rawi ask --files "Summarize these changes"

# Pre-commit file review
git diff --cached --name-only | xargs rawi ask --files --act code-reviewer "Review for commit"
```

### CI/CD Integration

```bash
# Documentation validation
rawi ask --batch "docs/**/*.md" "Check for broken links and formatting issues"

# Configuration review
rawi ask --batch "**/*.{json,yml,yaml}" "Validate configuration syntax"

# Security scanning
rawi ask --batch "src/**/*.{js,ts}" --act security-expert "Scan for vulnerabilities"
```

### Data Pipeline Integration

```bash
# Process daily reports
rawi ask --file "reports/$(date +%Y-%m-%d).csv" "Generate daily summary"

# Analyze log files
rawi ask --file "/var/log/app/$(date +%Y%m%d).log" "Identify errors and trends"

# Validate data imports
rawi ask --file "imports/latest.json" "Validate data structure"
```

## 📈 Advanced Workflows

### Document Analysis Pipeline

```bash
#!/bin/bash
# Comprehensive document analysis workflow

# 1. Process all documents
rawi ask --batch "documents/**/*.{pdf,docx}" \
  "Create a brief summary of each document" > summaries.txt

# 2. Generate index
rawi ask --file summaries.txt \
  "Create a comprehensive index with document names and key topics"

# 3. Find related documents
rawi ask --file summaries.txt \
  "Identify groups of related documents and suggest organization"
```

### Code Quality Assessment

```bash
#!/bin/bash
# Multi-file code quality review

# 1. Security review
rawi ask --batch "src/**/*.{js,ts}" --act security-expert \
  "Identify security vulnerabilities" > security-report.txt

# 2. Performance analysis
rawi ask --batch "src/**/*.{js,ts}" --act performance-engineer \
  "Identify performance bottlenecks" > performance-report.txt

# 3. Best practices check
rawi ask --batch "src/**/*.{js,ts}" --act code-reviewer \
  "Review against best practices" > best-practices-report.txt

# 4. Generate summary
rawi ask --files security-report.txt performance-report.txt best-practices-report.txt \
  "Create executive summary of code quality assessment"
```

### Data Analysis Workflow

```bash
#!/bin/bash
# Comprehensive data analysis

# 1. Data validation
rawi ask --batch "data/**/*.{csv,json,xlsx}" \
  "Validate data structure and identify issues" > validation-report.txt

# 2. Statistical analysis
rawi ask --batch "data/**/*.{csv,xlsx}" --act data-scientist \
  "Perform statistical analysis" > stats-report.txt

# 3. Business insights
rawi ask --batch "data/**/*.{csv,xlsx}" --act business-analyst \
  "Generate business insights" > insights-report.txt

# 4. Recommendations
rawi ask --files validation-report.txt stats-report.txt insights-report.txt \
  --act consultant "Provide actionable recommendations"
```

---

## 🔗 Related Documentation

- [Getting Started Guide](./quickstart.md)
- [CLI Commands Reference](./commands/README.md)
- [AI Provider Setup](./providers/README.md)
- [Template Usage](./templates/README.md)
- [Troubleshooting Guide](./troubleshooting.md)

---

**Next Steps:**

- [Configure your first provider](./providers/README.md)
- [Explore AI templates](./templates/README.md)
- [Learn batch processing workflows](./workflows/README.md)
