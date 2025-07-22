# 🚀 Getting Started with File Processing

This guide will help you get started with Rawi's powerful file processing capabilities. Learn how to analyze documents, review code, and extract insights from various file formats.

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ Rawi installed (`npm install -g rawi`)
- ✅ At least one AI provider configured (`rawi configure`)
- ✅ Basic familiarity with the `rawi ask` command

If you haven't set up Rawi yet, check out our [Quick Start Guide](./quickstart.md).

---

## 🎯 Your First File Processing

Let's start with a simple example using a text file:

### Step 1: Create a Test File

```bash
# Create a simple text file
echo "Hello, this is a test document for Rawi file processing!" > test.txt
```

### Step 2: Process the File

```bash
# Ask Rawi to analyze the file
rawi ask --file test.txt "What does this file contain?"
```

**Expected Output:**

```
This file contains a simple greeting message that introduces Rawi's file processing functionality. It's a plain text file with a single sentence welcoming users to test document analysis features.
```

🎉 **Congratulations!** You've just processed your first file with Rawi.

---

## 📄 Working with Different File Types

### PDF Documents

PDF files are great for reports, research papers, and documentation.

```bash
# Download a sample PDF (or use your own)
curl -o sample.pdf "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"

# Analyze the PDF
rawi ask --file sample.pdf "Summarize this document"

# Extract specific information
rawi ask --file report.pdf "What are the main recommendations?"
```

### Microsoft Word Documents (.docx)

Word documents are common for business documents and reports.

```bash
# Analyze a Word document
rawi ask --file proposal.docx "Extract the key points from this proposal"

# Review with a specific template
rawi ask --file requirements.docx --act business-analyst "Analyze these requirements"
```

### Excel Spreadsheets (.xlsx)

Excel files are perfect for data analysis and financial reports.

```bash
# Analyze data trends
rawi ask --file sales-data.xlsx "What trends do you see in this data?"

# Process a specific sheet
rawi ask --file workbook.xlsx --sheet "Q4 Results" "Analyze Q4 performance"

# Financial analysis with expert template
rawi ask --file budget.xlsx --act financial-analyst "Review this budget"
```

### Source Code Files

Analyze and review code files for improvements, security, and best practices.

```bash
# Review JavaScript code
rawi ask --file app.js "Review this code for potential improvements"

# Security analysis
rawi ask --file auth.py --act security-expert "Check for security vulnerabilities"

# Code explanation
rawi ask --file algorithm.cpp "Explain what this algorithm does"
```

---

## 🚀 Advanced File Processing

### Multiple Files

Process several related files together:

```bash
# Compare configuration files
rawi ask --files package.json composer.json "Compare these dependency files"

# Analyze a web page
rawi ask --files index.html style.css script.js "Review this web page implementation"

# Document analysis
rawi ask --files chapter1.pdf chapter2.pdf "Compare these chapters"
```

### Batch Processing

Process multiple files matching patterns:

```bash
# Analyze all JavaScript files in a project
rawi ask --batch "src/**/*.js" "Find potential issues in these files"

# Review all documentation
rawi ask --batch "docs/*.md" "Create a summary of all documentation"

# Validate all configuration files
rawi ask --batch "**/*.{json,yml}" "Check these configuration files"
```

### Parallel Processing

Speed up batch operations with parallel processing:

```bash
# Process files in parallel (faster)
rawi ask --batch "src/**/*.js" --parallel "Review all source files"

# Control concurrency
rawi ask --batch "docs/**/*.pdf" --parallel --max-concurrency 3 "Process PDFs"

# Continue on errors
rawi ask --batch "**/*.json" --parallel --continue-on-error "Validate all JSON"
```

---

## 🎭 Using Expert Templates

Combine file processing with AI expert templates for specialized analysis:

### Code Review

```bash
# General code review
rawi ask --file src/app.js --act code-reviewer "Review this code"

# Security audit
rawi ask --file login.php --act security-expert "Audit for vulnerabilities"

# Performance analysis
rawi ask --file algorithm.py --act performance-engineer "Optimize this code"
```

### Data Analysis

```bash
# Business analysis
rawi ask --file sales-report.xlsx --act business-analyst "Generate insights"

# Financial review
rawi ask --file budget.xlsx --act financial-analyst "Analyze this budget"

# Statistical analysis
rawi ask --file dataset.csv --act data-scientist "Perform statistical analysis"
```

### Documentation

```bash
# Technical writing
rawi ask --file api-spec.yml --act tech-writer "Create user documentation"

# API documentation
rawi ask --file swagger.json --act api-documenter "Generate API docs"

# Tutorial creation
rawi ask --file example.js --act tutorial-creator "Create a learning tutorial"
```

---

## 🔧 Common Workflows

### Document Analysis Workflow

```bash
# 1. First, get an overview
rawi ask --file document.pdf "Provide a brief summary of this document"

# 2. Extract key information
rawi ask --file document.pdf "What are the main points and recommendations?"

# 3. Ask specific questions
rawi ask --file document.pdf "What methodology was used in this research?"

# 4. Generate outputs
rawi ask --file document.pdf "Create a bullet-point summary for presentation"
```

### Code Review Workflow

```bash
# 1. General review
rawi ask --file src/app.js --act code-reviewer "Review this code"

# 2. Security check
rawi ask --file src/app.js --act security-expert "Check for security issues"

# 3. Performance analysis
rawi ask --file src/app.js --act performance-engineer "Identify performance bottlenecks"

# 4. Best practices
rawi ask --file src/app.js "How can this code be improved?"
```

### Data Analysis Workflow

```bash
# 1. Data overview
rawi ask --file data.xlsx "Describe the structure and content of this data"

# 2. Trend analysis
rawi ask --file data.xlsx "What trends and patterns do you see?"

# 3. Statistical insights
rawi ask --file data.xlsx --act data-scientist "Perform statistical analysis"

# 4. Business recommendations
rawi ask --file data.xlsx --act business-analyst "What are the business implications?"
```

---

## 💡 Pro Tips

### 1. Use Specific Prompts

Instead of generic questions, be specific about what you want:

```bash
# ❌ Generic
rawi ask --file report.pdf "Analyze this"

# ✅ Specific
rawi ask --file report.pdf "Extract the top 3 recommendations from the executive summary"
```

### 2. Filter Sensitive Information

When working with files that might contain sensitive data:

```bash
# Filter sensitive information from files
rawi ask --file customer-data.csv --filter-sensitive "Analyze this data"

# Filter specific types of information
rawi ask --file employee-records.xlsx --filter-types email,phone,ssn "Summarize employee data"

# See what's being filtered
rawi ask --file financial-report.pdf --filter-sensitive --show-filtered "Analyze this report"
```

### 3. Combine with Shell Commands

Integrate file processing into your existing workflows:

```bash
# Find and analyze recent log files
find /var/log -name "*.log" -mtime -1 | head -5 | \
  xargs rawi ask --files "Summarize errors from these logs"

# Process git-tracked files
git ls-files "*.js" | head -10 | \
  xargs rawi ask --files --act code-reviewer "Review these files"
```

### 4. Use Verbose Mode for Debugging

When things don't work as expected, use verbose mode:

```bash
rawi ask --file document.pdf --verbose "Analyze this document"
```

### 5. Save Useful Outputs

Save analysis results for later reference:

```bash
# Save summary to file
rawi ask --file report.pdf "Create executive summary" > summary.md

# Append to existing documentation
rawi ask --file data.xlsx "Key insights" >> analysis-notes.md
```

### 6. Handle Different File Types

Override file type detection when needed:

```bash
# Force text processing for unknown extensions
rawi ask --file data.backup --file-type txt "Analyze this data"

# Process binary file as specific type
rawi ask --file document --file-type pdf "Extract text from this"
```

---

## 🚨 Troubleshooting

### File Not Found

```bash
# Check if file exists
ls -la document.pdf

# Use absolute path
rawi ask --file "$(pwd)/document.pdf" "Analyze this"
```

### Permission Denied

```bash
# Check permissions
ls -l document.pdf

# Fix permissions
chmod 644 document.pdf
```

### Empty or Corrupted Content

```bash
# Verify file integrity
file document.pdf

# Use verbose mode for debugging
rawi ask --file document.pdf --verbose "Debug this file"
```

### Large File Issues

```bash
# Check file size
ls -lh large-file.pdf

# Process in smaller batches
rawi ask --batch "parts/*.txt" "Process in smaller pieces"
```

For more troubleshooting help, see our [Troubleshooting Guide](./troubleshooting.md#file-reading-issues).

---

## 🎯 Next Steps

Now that you've learned the basics of file processing with Rawi, here are some next steps:

1. **Explore Advanced Features**

   - [Read the complete File Processing Guide](./file-reading.md)
   - [Learn about AI Templates](./templates/README.md)
   - [Master Session Management](./sessions.md)

2. **Real-World Applications**

   - [Developer Workflows](./workflows/development.md)
   - [Content Creation Workflows](./workflows/content-creation.md)
   - [Research Workflows](./workflows/research.md)

3. **Get Help**
   - [Troubleshooting Guide](./troubleshooting.md)
   - [FAQ](./faq.md)
   - [Community Support](https://github.com/withrawi/rawi/issues)

---

## 📚 Related Documentation

- [Complete File Processing Reference](./file-reading.md)
- [Commands Reference](./commands/README.md)
- [AI Provider Setup](./providers/README.md)
- [Template Usage](./templates/README.md)
- [Content Filtering Guide](./content-filtering.md)
- [Workflow Examples](./workflows/README.md)

---

**Happy file processing! 🎉**

If you have questions or run into issues, don't hesitate to check our [troubleshooting guide](./troubleshooting.md) or [ask for help](https://github.com/withrawi/rawi/issues).
