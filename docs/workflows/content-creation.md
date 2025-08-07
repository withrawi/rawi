# Content Creation Workflow

This guide demonstrates how to use Rawi for content creation, including writing, editing, and research tasks.

## Overview

Rawi excels at content creation tasks:

- Writing and editing articles, blogs, documentation
- Research and fact-checking
- Content optimization and SEO
- Creative writing assistance
- Technical writing and tutorials

## Setup for Content Creation

### 1. Configure Content Profile

```bash
# Create a profile optimized for writing
rawi configure --profile writing --provider anthropic  # Good for long-form content
```

### 2. Content-Specific Templates

```bash
# Use built-in writing templates
rawi ask --act tech-writer "Help me write a blog post about AI in software development"
rawi ask --act editor "Please edit this draft for clarity and flow" < draft.md
```

## Content Types and Workflows

### Blog Posts and Articles

#### Planning Phase

```bash
# Start with topic research
rawi ask "Generate 10 blog post ideas about sustainable technology" --profile blog-planning

# Develop outline
rawi ask "Create a detailed outline for a blog post about renewable energy trends in 2024" --profile blog-planning

# Research key points
rawi ask "What are the latest statistics on solar energy adoption globally?" --profile blog-planning
```

#### Writing Phase

```bash
# Start writing profile
rawi ask --act tech-writer "Help me write an engaging introduction for a blog post about remote work productivity" --profile productivity-post

# Develop sections
rawi ask --act tech-writer "Write a section about time management tools, around 300 words" --profile productivity-post

# Add examples and data
rawi ask --act data-analyst "Provide 3 real-world examples of companies with successful remote work policies" --profile productivity-post
```

#### Editing Phase

```bash
# Review and edit
rawi ask --act editor "Edit this draft for clarity, flow, and engagement:" < productivity-draft.md --profile productivity-post

# SEO optimization
rawi ask --act tech-writer "Suggest SEO improvements for this blog post, including meta description and keywords:" < final-draft.md
```

### Technical Documentation

#### API Documentation

```bash
# Generate API docs from code
rawi ask --act api-documenter "Create comprehensive API documentation for these endpoints:" < api-routes.js

# User guide creation
rawi ask --act tech-writer "Write a user-friendly guide for this API, including examples:" < api-spec.json
```

#### Tutorial Creation

```bash
# Step-by-step tutorials
rawi ask --act tech-writer "Create a beginner tutorial for setting up a React development environment"

# Code examples with explanations
rawi ask --act tech-writer "Write a tutorial on implementing authentication in Express.js with code examples"
```

### Creative Writing

#### Story Development

```bash
# Character development
rawi ask "Help me develop a complex character for a sci-fi story: a programmer in the year 2080" --profile story-dev

# Plot assistance
rawi ask "Suggest plot twists for a mystery novel about a missing AI researcher" --profile story-dev

# Dialogue writing
rawi ask "Write realistic dialogue between two software engineers discussing an ethical dilemma" --profile story-dev
```

#### Poetry and Creative Text

```bash
# Poetry assistance
rawi ask "Help me write a poem about the relationship between technology and nature"

# Creative descriptions
rawi ask "Write a vivid description of a futuristic city powered entirely by renewable energy"
```

## Advanced Content Workflows

### Research-Driven Content

#### Fact-Checking and Research

```bash
# Research current trends
rawi ask "What are the latest developments in quantum computing as of 2024?"

# Verify information
rawi ask "Can you fact-check these claims about renewable energy efficiency?" < claims.txt

# Find supporting data
rawi ask "Find recent statistics to support an argument about the benefits of remote work"
```

#### Source Integration

```bash
# Synthesize multiple sources
cat paper1.txt paper2.txt paper3.txt | rawi ask "Summarize these three research papers and highlight key findings:"

# Create citations
rawi ask "Help me properly cite these sources in APA format:" < source-list.txt
```

### Collaborative Writing

#### Multi-Author Projects

```bash
# Maintain consistency
cat chapter-new.md chapter1.md chapter2.md | rawi ask --act editor "Review this chapter for consistency with the writing style in these previous chapters:"

# Merge different writing styles
cat section-a.md section-b.md | rawi ask --act editor "Help harmonize the writing style between these two sections written by different authors:"
```

#### Review and Feedback

```bash
# Peer review assistance
rawi ask "Provide constructive feedback on this article draft, focusing on structure and clarity:" < article-draft.md

# Incorporate feedback
rawi ask "Help me revise this paragraph based on this feedback: 'Too technical, needs simpler language'" < technical-paragraph.txt
```

### Content Optimization

#### SEO and Readability

```bash
# SEO analysis
rawi ask "Analyze this blog post for SEO opportunities and suggest improvements:" < blog-post.md

# Readability improvement
rawi ask "Simplify this technical explanation for a general audience:" < complex-explanation.txt

# Headlines and titles
rawi ask "Generate 10 compelling headlines for this article about sustainable technology" < article-content.md
```

#### Social Media Adaptation

```bash
# Create social posts
rawi ask "Create Twitter/X posts to promote this blog article:" < blog-post.md

# LinkedIn content
rawi ask "Write a professional LinkedIn post summarizing this technical article:" < tech-article.md

# Multiple platform versions
rawi ask "Adapt this content for different social media platforms (Twitter, LinkedIn, Facebook):" < original-content.txt
```

## Content Management

### Version Control for Writing

```bash
# Track writing profile
rawi ask "I'm starting a new article about AI ethics" --profile ai-ethics-article

# Continue development
rawi ask "Add a section about bias in machine learning algorithms" --profile ai-ethics-article

# Export for archival
rawi history --profile ai-ethics-article --format markdown > ai-ethics-development.md
```

### Content Planning

#### Editorial Calendar

```bash
# Generate content ideas
rawi ask "Create a 3-month content calendar for a software development blog"

# Topic research
rawi ask "Suggest trending topics in web development for the next quarter"

# Content series planning
rawi ask "Plan a 5-part series about modern JavaScript frameworks"
```

## Quality Assurance

### Editing and Proofreading

```bash
# Grammar and style
rawi ask "Proofread this article for grammar, spelling, and style issues:" < article.md

# Consistency check
rawi ask "Check this document for consistent terminology and style:" < long-document.md

# Final review
rawi ask "Perform a final editorial review of this piece, checking for clarity, flow, and impact:" < final-draft.md
```

### Audience Testing

```bash
# Audience adaptation
rawi ask "Adapt this technical article for a non-technical audience:" < technical-article.md

# Tone adjustment
rawi ask "Rewrite this formal article in a more conversational tone:" < formal-article.md
```

## Publishing Preparation

### Format Conversion

```bash
# Markdown to other formats
rawi ask "Convert this Markdown article to HTML with proper semantic markup:" < article.md

# Create excerpts
rawi ask "Create a 150-word excerpt from this article for use in email newsletters:" < full-article.md

# Meta content
rawi ask "Generate meta descriptions, title tags, and social media previews for this article:" < article.md
```

### Final Checklist

Use this template for final content review:

```bash
rawi ask "Review this content against this checklist:
1. Clear and engaging headline
2. Strong introduction that hooks the reader
3. Logical flow and structure
4. Proper use of subheadings
5. Engaging conclusion with call-to-action
6. SEO optimization
7. Fact-checking and accuracy
8. Appropriate tone for target audience

Content to review:" < final-content.md
```

## Related Documentation

- [Act Templates](../templates/README.md) - Writing and editing templates
- [Session Management](../sessions.md) - Managing writing sessions
- [Commands Reference](../commands/README.md) - All available commands
- [Workflows Overview](README.md) - Other workflow examples
- [Main Documentation](../README.md) - Return to main wiki

---

_Part of the [Rawi Documentation Wiki](../README.md)_
