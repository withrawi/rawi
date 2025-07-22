# Research and Analysis Workflow

This guide shows how to use Rawi for research tasks, data analysis, and information synthesis.

## Overview

Rawi can assist with various research and analysis tasks:

- Information gathering and synthesis
- Data analysis and interpretation
- Competitive research
- Academic research assistance
- Market analysis
- Technical research

## Research Setup

### 1. Configure Research Profile

```bash
# Create a research-focused profile
rawi configure --profile research --provider openai  # Good for analytical tasks
```

### 2. Research Session Management

```bash
# Start a research session with a clear topic
rawi ask "I'm researching the impact of remote work on productivity. Let's begin." --session remote-work-research
```

## Research Workflows

### Information Gathering

#### Topic Exploration

```bash
# Start with broad questions
rawi ask --act data-analyst "What are the key factors that influence remote work productivity?" --session remote-work-research

# Drill down into specific areas
rawi ask --act data-analyst "What does recent research say about communication challenges in remote teams?" --session remote-work-research

# Identify knowledge gaps
rawi ask --act data-analyst "What aspects of remote work productivity need more research?" --session remote-work-research
```

#### Source Analysis

```bash
# Analyze research papers
rawi ask --act data-analyst "Summarize the key findings from this research paper:" < research-paper.txt

# Compare multiple sources
cat study1.txt study2.txt study3.txt | rawi ask --act data-analyst "Compare the findings from these three studies on remote work:"

# Extract specific information
rawi ask --act data-analyst "Extract all statistical data about productivity metrics from this report:" < productivity-report.txt
```

### Data Analysis

#### Quantitative Analysis

```bash
# Analyze datasets
rawi ask --act data-analyst "Analyze this CSV data and identify key trends:" < survey-data.csv

# Statistical interpretation
rawi ask --act data-analyst "Interpret these statistical results and explain their significance:" < stats-output.txt

# Data visualization suggestions
rawi ask --act data-analyst "Suggest the best ways to visualize this data for a research presentation:" < dataset.csv
```

#### Qualitative Analysis

```bash
# Analyze interview transcripts
rawi ask --act data-analyst "Identify common themes in these interview responses:" < interview-transcripts.txt

# Sentiment analysis
rawi ask --act data-analyst "Analyze the sentiment and key concerns in these customer feedback responses:" < feedback.txt

# Content analysis
rawi ask --act data-analyst "Perform a content analysis of these social media posts about remote work:" < social-posts.txt
```

### Literature Review

#### Academic Research

```bash
# Research synthesis
rawi ask --act data-analyst "Create a literature review on the effectiveness of different remote work tools" --session lit-review

# Gap analysis
cat paper1.md paper2.md paper3.md | rawi ask --act data-analyst "Based on these papers, what research gaps exist in remote work studies?"

# Citation and referencing
rawi ask --act tech-writer "Help me properly cite these sources in APA format and create a bibliography:" < source-list.txt
```

#### Systematic Review Process

```bash
# Search strategy development
rawi ask --act data-analyst "Help me develop search terms and criteria for a systematic review on AI in education"

# Inclusion/exclusion criteria
rawi ask --act data-analyst "Create inclusion and exclusion criteria for studies about remote work productivity"

# Quality assessment
rawi ask --act data-analyst "Assess the methodology quality of this research study:" < study-methodology.txt
```

### Competitive Research

#### Market Analysis

````bash
# Competitor analysis
cat competitor1-analysis.txt competitor2-analysis.txt | rawi ask --act business-analyst "Analyze these competitor websites and identify their key features and positioning:"

```bash
# SWOT analysis
rawi ask --act business-analyst "Create a SWOT analysis based on this competitive research data:" < market-research.txt

# Trend identification
rawi ask --act business-analyst "Identify emerging trends in this industry based on these market reports:" < industry-reports.txt
````

#### Product Research

```bash
# Feature comparison
rawi ask --act business-analyst "Create a comprehensive feature comparison between these products:" < product-specs.txt

# User feedback analysis
rawi ask --act data-analyst "Analyze user reviews to identify common pain points and desired features:" < user-reviews.txt

# Pricing analysis
rawi ask --act business-analyst "Analyze pricing strategies across these competitors and suggest optimal pricing:" < pricing-data.txt
```

## Advanced Research Techniques

### Cross-Domain Research

#### Interdisciplinary Analysis

```bash
# Multi-field perspective
rawi ask --act data-analyst "Analyze this problem from both psychological and technological perspectives:" < research-question.txt

# Methodology transfer
rawi ask --act data-analyst "How could research methods from psychology be applied to this software engineering study?"

# Synthesis across domains
cat psych-paper.txt tech-paper.txt business-paper.txt | rawi ask --act data-analyst "Synthesize findings from these papers across different disciplines:"
```

### Research Methodology

#### Study Design

```bash
# Research design assistance
rawi ask --act data-analyst "Help me design a study to investigate the impact of AI tools on developer productivity"

# Survey development
rawi ask --act data-analyst "Create survey questions to measure remote work satisfaction and productivity"

# Interview guide creation
rawi ask --act data-analyst "Develop an interview guide for studying user experience with collaboration tools"
```

#### Data Collection Planning

```bash
# Sampling strategy
rawi ask --act data-analyst "Suggest an appropriate sampling strategy for this research study:" < study-description.txt

# Data collection methods
rawi ask --act data-analyst "What are the best methods to collect data on remote work productivity?"

# Ethical considerations
rawi ask --act data-analyst "What ethical considerations should I address in this research study?" < study-proposal.txt
```

### Research Validation

#### Fact-Checking

```bash
# Verify claims
rawi ask --act data-analyst "Fact-check these claims about remote work statistics:" < claims.txt

# Source verification
rawi ask --act data-analyst "Assess the credibility and reliability of these sources:" < source-list.txt

# Cross-reference findings
rawi ask --act data-analyst "Cross-reference these findings with other published research:" < findings.txt
```

#### Bias Analysis

```bash
# Identify potential bias
rawi ask --act data-analyst "Analyze this research for potential sources of bias:" < research-methodology.txt

# Counterargument development
rawi ask --act data-analyst "Develop counterarguments to these research conclusions:" < conclusions.txt

# Alternative interpretations
rawi ask --act data-analyst "Suggest alternative interpretations of these research findings:" < results.txt
```

## Research Documentation

### Note-Taking and Organization

```bash
# Research notes synthesis
rawi ask --act data-analyst "Organize these research notes into coherent themes:" < research-notes.txt --session research-org

# Timeline creation
rawi ask --act data-analyst "Create a timeline of developments in this field based on my research:" --session research-org

# Concept mapping
rawi ask "Create a concept map showing relationships between these research topics:" < topics-list.txt
```

### Report Writing

#### Research Reports

```bash
# Executive summary
rawi ask "Write an executive summary of this research project:" < full-research.txt

# Methodology section
rawi ask "Write a methodology section based on this study design:" < study-design.txt

# Results and discussion
rawi ask "Help me write a results and discussion section for these findings:" < research-results.txt
```

#### Presentation Materials

```bash
# Research presentation
rawi ask "Create an outline for a 20-minute research presentation:" < research-summary.txt

# Visual content suggestions
rawi ask "Suggest charts, graphs, and visuals to represent this research data:" < data-summary.txt

# Key takeaways
rawi ask "Identify the 5 most important takeaways from this research for stakeholders:" < research-findings.txt
```

## Research Quality Assurance

### Peer Review Preparation

```bash
# Self-review checklist
rawi ask "Review this research against standard academic quality criteria:" < research-draft.txt

# Methodology validation
rawi ask "Assess the validity and reliability of this research methodology:" < methodology.txt

# Conclusion validation
rawi ask "Evaluate whether these conclusions are supported by the presented evidence:" < conclusions.txt
```

### Research Ethics

```bash
# Ethical review
rawi ask --act data-analyst "Review this research proposal for ethical considerations and potential issues:" < proposal.txt

# Privacy assessment
rawi ask --act data-analyst "Assess the privacy implications of this data collection methodology:" < data-plan.txt

# Consent considerations
rawi ask --act data-analyst "Help me develop appropriate informed consent procedures for this study:" < study-description.txt
```

## Collaborative Research

### Team Research Projects

```bash
# Research coordination
rawi ask --act business-analyst "Help coordinate research tasks among team members for this project:" < project-overview.txt

# Progress synthesis
cat member1-findings.txt member2-findings.txt member3-findings.txt | rawi ask --act data-analyst "Synthesize research findings from multiple team members:"

# Consistency checking
cat section1.txt section2.txt | rawi ask --act data-analyst "Check for consistency in terminology and methodology across these research sections:"
```

### Research Communication

```bash
# Stakeholder updates
rawi ask --act tech-writer "Create a progress update for research stakeholders:" < progress-summary.txt

# Findings presentation
rawi ask --act tech-writer "Adapt these technical research findings for a non-academic audience:" < technical-findings.txt

# Research proposal
rawi ask --act tech-writer "Help me write a compelling research proposal based on these preliminary findings:" < pilot-study.txt
```

## Research Session Management

### Tracking Research Progress

```bash
# Session review
rawi history --session remote-work-research --format markdown > research-log.md

# Progress assessment
rawi ask --act data-analyst "Based on our research session, what key questions remain unanswered?" --session remote-work-research

# Next steps planning
rawi ask --act business-analyst "What should be the next research priorities based on our findings so far?" --session remote-work-research
```

## Related Documentation

- [Session Management](../sessions.md) - Managing research sessions
- [Commands Reference](../commands/README.md) - All available commands
- [Act Templates](../templates/README.md) - Research-focused templates
- [Workflows Overview](README.md) - Other workflow examples
- [Main Documentation](../README.md) - Return to main wiki

---

_Part of the [Rawi Documentation Wiki](../README.md)_
