# Template System

The template system provides pre-built expert prompts (called "acts") that help users get specialized responses from AI providers.

## Overview

The template system includes:

- **Act Templates** - Pre-built expert prompts
- **Template Categories** - Organized by use case
- **Variable Substitution** - Dynamic content injection
- **Template Management** - Finding and using templates

## ActTemplate Interface

```typescript
export interface ActTemplate {
  label: string;
  id: string;
  category: string;
  description: string;
  template: string;
}
```

## Usage

### Basic Template Usage

```typescript
import { getActTemplate, getAllActTemplates } from "@rawi/core";

// Get a specific template
const template = getActTemplate("code-reviewer");

// Get all templates
const allTemplates = getAllActTemplates();

// Get templates by category
const techTemplates = getAllActTemplates().filter(
  (t) => t.category === "Technical Support"
);
```

### Using Templates with Variables

Templates support variable substitution using `{variableName}` syntax:

```typescript
// Template with variables
const template = `
Act as a ${role}.
Please help with: {userInput}
Additional context: {context}
`;

// Substitute variables
const prompt = template
  .replace("{role}", "code reviewer")
  .replace("{userInput}", "Review this TypeScript code")
  .replace("{context}", "This is a React component");
```

### Command Line Usage

```bash
# List all templates
rawi act --list

# Search templates
rawi act --search "code"

# Use template with ask command
rawi ask --act code-reviewer "Review this code"

# Use template with piped input
cat file.js | rawi ask --act code-reviewer "Review this file"
```

## Template Categories

### Technical Support

- **Tech Troubleshooter** - Device and software troubleshooting
- **Code Reviewer** - Code review and feedback
- **DevOps Engineer** - Infrastructure and deployment
- **Security Analyst** - Security assessment and recommendations

### Content Creation

- **Technical Writer** - Documentation and guides
- **Copywriter** - Marketing and promotional content
- **Content Strategist** - Content planning and strategy
- **SEO Specialist** - Search engine optimization

### Business & Strategy

- **Business Analyst** - Business analysis and insights
- **Product Manager** - Product strategy and roadmaps
- **Project Manager** - Project planning and management
- **Marketing Consultant** - Marketing strategy and advice

### Education & Learning

- **Tutor** - Educational support and explanations
- **Language Teacher** - Language learning assistance
- **Study Guide Creator** - Study materials and guides
- **Curriculum Designer** - Educational curriculum development

### Creative & Design

- **Creative Director** - Creative strategy and direction
- **UX Designer** - User experience design
- **Brand Strategist** - Brand identity and positioning
- **Social Media Manager** - Social media strategy

## Example Templates

### Code Reviewer Template

```typescript
{
  label: 'Code Reviewer',
  id: 'code-reviewer',
  category: 'Technical Support',
  description: 'Reviews code for best practices, bugs, and improvements',
  template: `Act as a Code Reviewer.

You are an experienced software engineer reviewing code. When I provide code, your role is to:
- Identify bugs, security vulnerabilities, and performance issues
- Suggest improvements for readability, maintainability, and best practices
- Provide specific, actionable feedback with examples
- Focus on code quality, design patterns, and architectural concerns
- Be constructive and educational in your feedback

Please review the following code: {userInput}`
}
```

### Technical Writer Template

```typescript
{
  label: 'Technical Writer',
  id: 'technical-writer',
  category: 'Content Creation',
  description: 'Creates clear, comprehensive technical documentation',
  template: `Act as a Technical Writer.

You are a skilled technical writer. When given content or requirements, your role is to:
- Create clear, well-structured documentation
- Use appropriate technical terminology while remaining accessible
- Include examples, code snippets, and practical guidance
- Organize information logically with proper headings and sections
- Ensure accuracy and completeness of technical information

Please help with the following documentation task: {userInput}`
}
```

### Business Analyst Template

```typescript
{
  label: 'Business Analyst',
  id: 'business-analyst',
  category: 'Business & Strategy',
  description: 'Analyzes business problems and provides strategic insights',
  template: `Act as a Business Analyst.

You are an experienced business analyst. When presented with business scenarios, your role is to:
- Analyze problems and identify root causes
- Provide data-driven insights and recommendations
- Consider market trends, competitive landscape, and industry best practices
- Suggest actionable solutions with implementation steps
- Focus on business value, ROI, and strategic alignment

Please analyze the following business scenario: {userInput}`
}
```

## Template Management

### Finding Templates

```typescript
// Get template by ID
const template = getActTemplate("code-reviewer");

// Search by label
const templates = getAllActTemplates().filter((t) =>
  t.label.toLowerCase().includes("code")
);

// Search by category
const techTemplates = getAllActTemplates().filter(
  (t) => t.category === "Technical Support"
);

// Search by description
const templates = getAllActTemplates().filter((t) =>
  t.description.toLowerCase().includes("review")
);
```

### Template Utilities

```typescript
// Get all categories
const categories = [...new Set(getAllActTemplates().map((t) => t.category))];

// Get templates by category
const getTemplatesByCategory = (category: string) => {
  return getAllActTemplates().filter((t) => t.category === category);
};

// Search templates
const searchTemplates = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return getAllActTemplates().filter(
    (t) =>
      t.label.toLowerCase().includes(lowerQuery) ||
      t.description.toLowerCase().includes(lowerQuery) ||
      t.category.toLowerCase().includes(lowerQuery)
  );
};
```

## Creating Custom Templates

### Template Structure

```typescript
const customTemplate: ActTemplate = {
  label: "My Custom Template",
  id: "my-custom-template",
  category: "Custom",
  description: "Description of what this template does",
  template: `Act as a {role}.

You are a {role}. When given {input_type}, your role is to:
- First responsibility
- Second responsibility
- Third responsibility

Please help with: {userInput}`,
};
```

### Adding Templates

```typescript
// Add to the actTemplates array
export const actTemplates: ActTemplate[] = [
  // ... existing templates
  customTemplate,
];
```

### Template Variables

Common variables used in templates:

- `{userInput}` - User's input/question
- `{context}` - Additional context
- `{role}` - Role specification
- `{language}` - Programming language
- `{format}` - Output format
- `{level}` - Difficulty level

## CLI Integration

### Act Command

```bash
# List all templates
rawi act --list

# Search templates
rawi act --search "code"

# Show template details
rawi act --show code-reviewer

# Get template categories
rawi act --categories
```

### Using with Ask Command

```bash
# Use template with question
rawi ask --act code-reviewer "Review this TypeScript function"

# Use template with piped input
cat component.jsx | rawi ask --act code-reviewer

# Use template with custom input
rawi ask --act technical-writer "Document this API endpoint"
```

## Best Practices

### Template Design

1. **Clear Role Definition**: Define the expert role clearly
2. **Specific Instructions**: Provide specific, actionable guidance
3. **Context Awareness**: Include relevant context and constraints
4. **Output Format**: Specify desired output format
5. **Examples**: Include examples when helpful

### Template Usage

1. **Choose Appropriate Template**: Select templates that match your task
2. **Provide Context**: Give sufficient context for good responses
3. **Iterate**: Refine prompts based on results
4. **Combine**: Use multiple templates for complex tasks
5. **Customize**: Modify templates for specific needs

### Template Organization

1. **Logical Categories**: Group templates by use case
2. **Clear Naming**: Use descriptive IDs and labels
3. **Good Descriptions**: Write helpful descriptions
4. **Consistent Format**: Follow established patterns
5. **Regular Updates**: Keep templates current and useful

## Advanced Usage

### Template Composition

```typescript
// Combine multiple templates
const compositeTemplate = `
${getActTemplate("code-reviewer").template}

Additionally, also act as a ${getActTemplate("security-analyst").template}
`;
```

### Dynamic Template Selection

```typescript
// Select template based on content
const selectTemplate = (content: string): ActTemplate => {
  if (content.includes("function") || content.includes("class")) {
    return getActTemplate("code-reviewer");
  }
  if (content.includes("deploy") || content.includes("server")) {
    return getActTemplate("devops-engineer");
  }
  return getActTemplate("tech-troubleshooter");
};
```

### Template Validation

```typescript
// Validate template structure
const validateTemplate = (template: ActTemplate): boolean => {
  return !!(
    template.label &&
    template.id &&
    template.category &&
    template.description &&
    template.template
  );
};
```
