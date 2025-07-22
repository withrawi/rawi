# Act Templates Guide

Discover and master Rawi's 200+ expert-level AI prompt templates designed to transform your AI interactions into specialized, professional consultations.

## Navigation

- [📖 Wiki Home](../README.md)
- [🎯 Act Command](../commands/act.md)
- [🗣️ Ask Command](../commands/ask.md)
- [🚀 Quick Start](../quickstart.md)

---

## What Are Act Templates?

Act templates are expertly crafted AI personas that transform your AI assistant into specialized experts across dozens of professional fields. Each template includes:

- **Professional expertise** — Deep domain knowledge and industry best practices
- **Specialized vocabulary** — Field-specific terminology and concepts
- **Structured responses** — Consistent, organized output formats
- **Contextual understanding** — Industry-aware problem-solving approaches

## Quick Start

```bash
# Browse all available templates
rawi act --list

# Get detailed information about a template
rawi act --show software-engineer

# Use a template in conversation
rawi ask --act linux-terminal "show disk usage by directory"
rawi ask --act code-reviewer "analyze this Python function for improvements"
```

## Template Categories

### 🛠️ Software Development (45+ templates)

**Core Development:**

- `software-engineer` — General software design and development
- `full-stack-developer` — End-to-end web application development
- `frontend-developer` — UI/UX focused development
- `backend-developer` — Server-side and API development
- `mobile-developer` — iOS/Android application development

**DevOps & Infrastructure:**

- `devops-engineer` — CI/CD, automation, and deployment
- `devsecops-engineer` — Security-integrated development operations
- `site-reliability-engineer` — System reliability and performance
- `cloud-architect` — Scalable cloud solution design
- `cloud-engineer` — Cloud infrastructure implementation

**Specialized Development:**

- `database-administrator` — SQL optimization and database management
- `data-engineer` — Data pipeline and ETL design
- `integration-engineer` — System integration and middleware
- `test-automation-engineer` — Automated testing frameworks

### 🔒 Security & Compliance (15+ templates)

**Security Engineering:**

- `security-engineer` — Application and infrastructure security
- `penetration-tester` — Security testing and vulnerability assessment
- `cloud-security-engineer` — Cloud-specific security measures
- `cybersecurity-analyst` — Threat analysis and incident response

**Compliance & Risk:**

- `compliance-officer` — Regulatory compliance and auditing
- `risk-analyst` — Security risk assessment and mitigation

### 🏗️ Engineering & Construction (35+ templates)

**Core Engineering:**

- `mechanical-engineer` — Mechanical systems and design
- `electrical-engineer` — Electrical systems and electronics
- `civil-engineer` — Infrastructure and construction projects
- `aerospace-engineer` — Aircraft and spacecraft design
- `chemical-engineer` — Process engineering and chemical systems

**Specialized Engineering:**

- `robotics-engineer` — Robot design and automation
- `materials-engineer` — Material science and selection
- `environmental-engineer` — Environmental protection systems
- `biomedical-engineer` — Medical device design
- `renewable-energy-engineer` — Sustainable energy systems

### 💼 Business & Management (25+ templates)

**Product & Strategy:**

- `product-manager` — Product lifecycle and strategy
- `project-manager` — Project planning and execution
- `business-analyst` — Business process optimization
- `management-consultant` — Strategic business advice

**Marketing & Sales:**

- `marketing-expert` — Marketing strategy and campaigns
- `digital-marketing-strategist` — Online marketing optimization
- `sales-representative` — Sales process and customer relations
- `brand-strategist` — Brand development and positioning

**Operations & Finance:**

- `supply-chain-manager` — Logistics and supply optimization
- `financial-advisor` — Financial planning and investment
- `hr-consultant` — Human resources and talent management

### 🎨 Design & Creative (20+ templates)

**Visual Design:**

- `ux-designer` — User experience and interface design
- `graphic-designer` — Visual communication and branding
- `web-designer` — Website design and user experience
- `product-designer` — Physical product design

**Content & Media:**

- `technical-writer` — Technical documentation and manuals
- `content-strategist` — Content planning and optimization
- `artist-advisor` — Creative arts guidance
- `event-planner` — Event organization and management

### 🧪 Science & Research (30+ templates)

**Life Sciences:**

- `bioengineer` — Biomedical and biological systems
- `bioinformatics-scientist` — Computational biology and data
- `marine-biologist` — Ocean and aquatic ecosystems
- `environmental-scientist` — Environmental research and analysis

**Physical Sciences:**

- `chemist` — Chemical reactions and molecular science
- `physicist` — Physical principles and phenomena
- `materials-scientist` — Advanced materials research
- `climatologist` — Climate science and weather patterns

**Technology Research:**

- `ai-researcher` — Artificial intelligence development
- `data-scientist` — Statistical analysis and machine learning
- `research-scientist` — General scientific methodology

### 🏥 Healthcare & Medicine (15+ templates)

**Clinical Specialties:**

- `medical-doctor` — General medical consultation
- `emergency-physician` — Emergency medical care
- `psychiatrist` — Mental health and therapy
- `speech-pathologist` — Communication disorders

**Health Support:**

- `nutritionist` — Diet and nutrition planning
- `fitness-trainer` — Exercise and wellness coaching
- `health-safety-officer` — Workplace health and safety

### 🎓 Education & Training (12+ templates)

**Academic Subjects:**

- `math-teacher` — Mathematics education and problem-solving
- `language-tutor` — Language learning and instruction
- `science-educator` — Science concepts and experiments

**Professional Development:**

- `corporate-trainer` — Employee training and development
- `career-counselor` — Career guidance and planning

### 🌍 Specialized Fields (25+ templates)

**Emerging Technologies:**

- `blockchain-developer` — Distributed ledger technologies
- `quantum-computing-researcher` — Quantum system development
- `space-systems-engineer` — Spacecraft and mission design
- `neurotechnology-engineer` — Brain-computer interfaces

**Industry Specialists:**

- `agriculture-specialist` — Farming and crop management
- `marine-engineer` — Ship and maritime systems
- `forensic-analyst` — Criminal investigation techniques
- `legal-advisor` — Legal research and compliance

## Using Templates Effectively

### 1. Basic Template Usage

```bash
# Simple template application
rawi ask --act software-engineer "How do I optimize database queries?"

# With additional context
rawi ask --act security-expert "Review this authentication code" < auth.py
```

### 2. Combining Templates with Input

```bash
# File analysis
rawi ask --act code-reviewer "Analyze this code for improvements" < script.js

# Pipe integration
curl -s api.github.com/users/octocat | rawi ask --act data-analyst "analyze this JSON"

# Multiple file context
cat *.py | rawi ask --act python-expert "suggest architectural improvements"
```

### 3. Template Workflows

```bash
# Development workflow
rawi ask --act software-engineer "Design a user authentication system"
rawi ask --act security-expert "What security considerations should I add?"
rawi ask --act database-admin "How should I structure the user data?"

# Research workflow
rawi ask --act research-scientist "Explain quantum entanglement"
rawi ask --act physicist "What are the practical applications?"
rawi ask --act technical-writer "Write a summary for non-scientists"
```

### 4. Template Customization

```bash
# Add context to templates
rawi ask --act python-developer "Write a web scraper for e-commerce sites {using BeautifulSoup and requests}"

# Specify output format
rawi ask --act data-scientist "Analyze this CSV {provide Python code and visualizations}" < data.csv

# Domain-specific modifications
rawi ask --act devops-engineer "Set up CI/CD pipeline {for Node.js app on AWS}"
```

## Advanced Template Features

### Professional Context

Each template includes:

- **Industry best practices** — Current standards and methodologies
- **Professional terminology** — Accurate field-specific language
- **Structured responses** — Organized, actionable outputs
- **Real-world experience** — Practical, implementable solutions

### Multi-Domain Expertise

Templates can work together:

- **Development + Security** — Secure coding practices
- **Business + Technical** — Technical feasibility analysis
- **Design + Engineering** — User-centered engineering solutions
- **Research + Practical** — Applied research insights

### Specialized Output Formats

Templates provide appropriate formats:

- **Code templates** — Properly structured and commented code
- **Technical documentation** — Clear, comprehensive guides
- **Business reports** — Executive summaries and recommendations
- **Research findings** — Methodology and evidence-based conclusions

## Template Discovery

### Browse by Category

```bash
# List templates in a specific category
rawi act --list --category "Software Development"
rawi act --list --category "Engineering"

# Search for specific expertise
rawi act --search "database"
rawi act --search "security"
rawi act --search "machine learning"
```

### Find the Right Template

**For Code Problems:**

- `software-engineer` — General programming issues
- `code-reviewer` — Code quality and best practices
- `debugging-expert` — Bug identification and fixes
- `performance-engineer` — Optimization and efficiency

**For System Design:**

- `solution-architect` — High-level system architecture
- `cloud-architect` — Scalable cloud solutions
- `devops-engineer` — Deployment and operations
- `security-engineer` — Secure system design

**For Business Questions:**

- `business-analyst` — Process optimization
- `product-manager` — Product strategy and features
- `management-consultant` — Strategic business advice
- `financial-advisor` — Financial planning and analysis

## Integration Examples

### Development Workflow

```bash
# 1. Design phase
rawi ask --act solution-architect "Design a microservices architecture for e-commerce"

# 2. Implementation guidance
rawi ask --act software-engineer "Implement user service with authentication"

# 3. Security review
rawi ask --act security-expert "Review the authentication implementation"

# 4. Testing strategy
rawi ask --act qa-engineer "Create test plan for user authentication"

# 5. Deployment planning
rawi ask --act devops-engineer "Set up CI/CD for the user service"
```

### Research and Analysis

```bash
# 1. Data exploration
rawi ask --act data-scientist "Analyze customer behavior patterns" < analytics.csv

# 2. Business insights
rawi ask --act business-analyst "What business recommendations follow from this data?"

# 3. Technical implementation
rawi ask --act software-engineer "How can we implement these recommendations?"

# 4. Documentation
rawi ask --act technical-writer "Document the new feature for users"
```

## Best Practices

### Template Selection

1. **Match expertise to problem domain** — Choose templates that align with your specific challenge
2. **Consider perspective** — Different templates offer different viewpoints on the same problem
3. **Combine complementary expertise** — Use multiple templates for complex, multi-domain problems

### Effective Prompting

1. **Provide context** — Include relevant details about your situation
2. **Specify output format** — Request the type of response you need
3. **Add constraints** — Mention limitations, requirements, or preferences
4. **Iterate and refine** — Build on previous responses for complex problems

### Professional Results

1. **Leverage deep expertise** — Templates provide professional-level insights
2. **Follow best practices** — Recommendations align with industry standards
3. **Get structured output** — Responses are organized and actionable
4. **Access specialized knowledge** — Benefit from domain-specific expertise

## Related Documentation

- [🎯 Act Command Reference](../commands/act.md)
- [🗣️ Using Templates with Ask](../commands/ask.md)
- [📋 Commands Overview](../commands/README.md)
- [🚀 Quick Start Guide](../quickstart.md)

---

**Next Steps:**

- [Explore act command usage](../commands/act.md)
- [Start using templates in conversations](../commands/ask.md)
- [Learn about AI providers](../providers/README.md)
