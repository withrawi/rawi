# RAWI(1) — AI-Powered CLI Tool

## NAME

**rawi** \- Developer-friendly AI-powered CLI for answers, summaries, and analyses

## SYNOPSIS

**rawi** _command_ [*options*] [*arguments*]

**rawi** **ask** [*query*] [*options*]

**rawi** **chat** [*options*]

**rawi** **exec** [*description*] [*options*]

**rawi** **configure** [*options*]

**rawi** **history** **ask**|**chat**|**exec** [*options*]

**rawi** **act** [*options*]

**rawi** **provider** [*options*]

**rawi** **info** [*options*]

| Provider         | Top Models                            | API Key | Local | Best For                       |
| ---------------- | ------------------------------------- | ------- | ----- | ------------------------------ |
| **🔵 OpenAI**    | GPT-4o, GPT-4, O1, O3, GPT-4o-mini    | ✅      | ❌    | General development, coding    |
| **🟣 Anthropic** | Claude 3.5 Sonnet, Claude 3.5 Haiku   | ✅      | ❌    | Analysis, safety, long content |
| **🔴 Google**    | Gemini 2.0 Flash, Gemini 1.5 Pro      | ✅      | ❌    | Fast inference, multimodal     |
| **� DeepSeek**   | DeepSeek-Chat, DeepSeek-Reasoner      | ✅      | ❌    | Cost-effective, reasoning      |
| **�🟢 Ollama**   | Llama 3.2, CodeLlama, Qwen, +100 more | ❌      | ✅    | Privacy, offline, free         |
| **🔧 LM Studio** | Llama 3.3, Phi-4, Gemma-3, Qwen-3     | ❌      | ✅    | Local models, GUI management   |
| **🟠 Mistral**   | Mistral Large, Mistral Small, Pixtral | ✅      | ❌    | European AI, multilingual      |
| **⚡ Cerebras**  | Llama 3.3 70B, Llama 3.1 70B/8B       | ✅      | ❌    | Ultra-fast inference, speed    |
| **🔷 Azure**     | Enterprise OpenAI deployments         | ✅      | ❌    | Enterprise, compliance         |
| **🟠 Bedrock**   | Claude, Llama, Titan via AWS          | ✅      | ❌    | AWS integration, scale         |
| **🤖 xAI**       | Grok-3, Grok-2, Grok-Beta             | ✅      | ❌    | Real-time, conversational      |

## DESCRIPTION

(راوي) is a modern, developer-friendly CLI tool for interacting with multiple AI providers including OpenAI, Anthropic, Google, Amazon Bedrock, Azure OpenAI, Ollama, xAI, and LM Studio. Inspired by Jordanian storytelling tradition, Rawi delivers clear answers, summaries, and analyses with a focus on usability, discoverability, and actionable output.

**Key Features:**

- **Multi-provider support** \- Use different AI providers seamlessly
- **Profile management** \- Multiple configurations for different contexts
- **Enhanced session management** \- Persistent chat sessions with interactive selection, naming, and full ID display
- **Session analytics** \- Comprehensive usage statistics and conversation insights
- **Template system** \- Expert prompt templates for specialized tasks
- **Interactive command handling** \- Secure handling of passwords, passphrases, and interactive prompts
- **Piped input** \- Unix-style stdin support for scripting
- **Interactive mode** \- Guided configuration and template selection
- **Modern formatting** \- Clean, readable output with syntax highlighting
- **Export capabilities** \- Backup sessions and conversation history

## GLOBAL OPTIONS

**-v, --version**

Show version information including platform and Node.js version

**-h, --help**

Show help for command with usage examples

## COMMANDS

### ask \- Ask AI questions with piped input support

**Synopsis:**

**rawi ask** [*query*] [*options*]
**echo** "_text_" **|** **rawi ask** [*query*] [*options*]
**cat** _file_ **|** **rawi ask** [*query*] [*options*]
**rawi ask** [*query*] **--file** _path_ [*options*]
**rawi ask** [*query*] **--files** _path1_ _path2_ ... [*options*]
**rawi ask** [*query*] **--batch** "_pattern_" [*options*]

**Description:**
Send questions or prompts to AI providers. Supports stdin piping for processing command output, direct file processing for documents and data files, and batch processing for multiple files. Can continue previous conversations or start new sessions.

**Arguments:**

_query_

The question or prompt to send to the AI. Can be combined with piped input from stdin.

**Options:**

**-p, --profile** _profile_

Use a specific configuration profile (default: "default")

**-s, --session** _sessionId_

Continue an existing chat session by providing the session ID

**-n, --new-session**

Force creation of a new chat session instead of continuing the last one

**--session-name** _name_

Create a new session with a custom name for better organization

**--list-sessions**

Interactively select from existing sessions to continue

**--show-session-id**

Display the session ID in the output for reference

**--export-session** _sessionId_

Export a specific session to JSON format for backup

**--rename-session** _name_

Rename the current or specified session

**--act** _template_

Apply an expert prompt template. Use **rawi act --list** to see available templates. Templates provide specialized prompts for tasks like code review, documentation, analysis, etc. Templates work globally across all profiles.

**-f, --file** _path_

Process content from a single file. Supports multiple file formats including PDF, DOCX, PPTX, XLSX, ODT, ODP, ODS, TXT, and more. File content is automatically extracted and included in the AI prompt.

**-F, --files** _paths..._

Process content from multiple files simultaneously. Specify multiple file paths separated by spaces. All file contents are combined and sent in a single request.

**-b, --batch** _patterns..._

Process files matching glob patterns. Use standard glob syntax to match multiple files (e.g., "src/\*_/_.js" "docs/\*.md"). Powerful for bulk processing of codebases or document collections.

**--parallel**

Process multiple files in parallel for improved performance when handling many files. Use with **--files** or **--batch** options.

**--max-concurrency** _number_

Maximum number of files to process concurrently when using **--parallel** (default: 5). Higher values may improve speed but increase system resource usage.

**--continue-on-error**

Continue processing remaining files if one file fails to read or process. By default, processing stops on the first error.

**--file-type** _type_

Override automatic file type detection. Useful when file extensions don't match content or for files without extensions. Supported types: pdf, docx, pptx, xlsx, odt, odp, ods, txt, etc.

**--verbose**

Show detailed status information, debug output, and processing steps

**--filter-sensitive**

Filter sensitive information from prompts and responses. Automatically detects and replaces sensitive data like email addresses, phone numbers, credit card numbers, etc.

**--filter-types** _types_

Comma-separated list of information types to filter (e.g., email,phone,creditcard,ssn,ip,url,address). Use this to specify which types of sensitive information should be filtered.

**--show-filtered**

Show which information was filtered and display filtering statistics. Provides a summary of filtered content by type.

**--highlight-filtered**

Show filtered content with highlighting in terminal output. Visually identifies sensitive information that was detected.

**--save-filter-config**

Save current filtering configuration as default for future use. Persists your filtering preferences.

**--reset-filter-config**

Reset filtering configuration to defaults (enables all filter types).

**Examples:**

# Basic question

**rawi ask** "What is TypeScript?"

# Use with piped input

**cat** README.md **|** **rawi ask** "Summarize this documentation"

# Git integration

**git diff** **|** **rawi ask** "Review these code changes"

# Process single file

**rawi ask** "What is this document about?" **--file** report.pdf

# Process multiple files

**rawi ask** "Analyze these files" **--files** file1.js file2.py file3.md

# Batch process with glob patterns

**rawi ask** "Review source code" **--batch** "src/\*_/_.{js,ts}"

# Parallel processing for performance

**rawi ask** "Analyze documentation" **--batch** "docs/**/\*.md" **--parallel\*\*

# Continue on errors for bulk processing

**rawi ask** "Check configurations" **--batch** "**/\*.{json,yml}" **--continue-on-error\*\*

# Override file type detection

**rawi ask** "Parse this data" **--file** data.unknown **--file-type** json

# Use expert template with file input

# Use expert template with file input

**rawi ask** **--act** code-reviewer **--file** src/app.js "Review this code"

# Session management examples

**rawi ask** "Start new project discussion" **--new-session** **--session-name** "Project Alpha"

**rawi ask** "Continue where we left off" **--list-sessions**

**rawi ask** "Show me the session details" **--show-session-id**

**rawi ask** "Update discussion name" **--rename-session** "Updated Project Alpha"

**rawi ask** "Export this conversation" **--export-session** abc123

# Filter sensitive information

# Combine piped input with file processing

**echo** "Additional context" **|** **rawi ask** "Analyze with context" **--file** data.json

# Filter sensitive information from files

**rawi ask** "Analyze this data" **--file** customer-data.csv **--filter-sensitive**

# Filter specific types from files

**rawi ask** "Process this info" **--file** employee-records.xlsx **--filter-types** email,phone,ssn

# Use expert template

**rawi ask** **--act** code-reviewer "Review this function"

# Continue specific session

**rawi ask** **--session** abc123 "Follow up question"

# Use work profile with template

**rawi ask** **--profile** work **--act** technical-writer "Document this API"

# Verbose output for debugging

**rawi ask** **--verbose** "Explain machine learning"

# Filter sensitive information

**rawi ask** **--filter-sensitive** "Analyze this data with my email john@example.com"

# Filter specific types of information

**rawi ask** **--filter-types** email,phone,creditcard "Process this customer data"

# Show filtering statistics

**rawi ask** **--filter-sensitive** **--show-filtered** "Check this text with sensitive info"

# Highlight filtered content

**rawi ask** **--filter-sensitive** **--highlight-filtered** "Process this data"

# Save filtering preferences

**rawi ask** **--filter-types** email,phone **--save-filter-config** "Save my settings"

# Reset to default filtering settings

**rawi ask** **--reset-filter-config**

### chat \- Interactive conversations with AI

**Synopsis:**

**rawi chat** [*options*]

**Description:**
Start an interactive chat session for back-and-forth conversations with AI. Unlike the **ask** command which handles single requests, **chat** maintains conversation context throughout the session, making it ideal for collaborative problem-solving, code reviews, and extended discussions.

**Options:**

**-p, --profile** _profile_

Use a specific configuration profile (default: "default")

**--act** _template_

Apply an expert prompt template for the entire chat session. The AI will maintain this persona throughout the conversation. Use **rawi act --list** to see available templates.

**--verbose**

Show detailed status information, connection details, and debug output during the chat session

**--session** _sessionId_

Continue a specific chat session by ID

**--new-session**

Force creation of a new chat session

**--session-name** _name_

Start a new session with a custom name

**--list-sessions**

List and select from existing sessions interactively

**--show-session-id**

Display the current session ID during chat

**--export-session** _sessionId_

Export a specific session to JSON format

**--rename-session** _name_

Rename the current session

**--session-stats**

Show statistics for the current session

**Chat Commands:**

Once in a chat session, you can use special commands:

**/help**

Show available chat commands and instructions

**/quit** or **/exit**

End the chat session and return to terminal

**/clear**

Clear the conversation history while staying in the chat

**/session**

Show current session information including ID and metadata

**/sessions**

List all available sessions for navigation

**/export**

Export the current session to JSON format

**/rename** _name_

Rename the current session

**/new**

Start a new session while keeping the current chat open

**Examples:**

# Start basic interactive chat

**rawi chat**

# Use specific profile for chat

**rawi chat** **--profile** work

# Apply expert persona for entire chat

**rawi chat** **--act** ethereum-developer

# Start chat with verbose information

**rawi chat** **--verbose**

# Combined options

**rawi chat** **--profile** work **--act** code-reviewer **--verbose**

# Session management examples

**rawi chat** **--session-name** "Sprint Planning Session"

**rawi chat** **--list-sessions**

**rawi chat** **--session** abc123

**rawi chat** **--new-session** **--act** debugging-expert

**rawi chat** **--show-session-id** **--session-stats**

**Use Cases:**

- **Code Reviews**: Multi-round feedback and improvements
- **Problem Solving**: Step-by-step debugging and exploration
- **Learning**: Ask follow-up questions and dive deeper
- **Brainstorming**: Interactive idea development
- **Planning**: Collaborative project and architecture discussions

### exec \- Convert natural language to executable CLI commands

**Synopsis:**

**rawi exec** [*description*] [*options*]
**echo** "_description_" **|** **rawi exec** [*options*]
**rawi exec** [*options*]

**Description:**
Convert natural language descriptions into executable CLI commands. Describe what you want to accomplish and get the right command with safety validation and optional dry-run mode. Supports interactive prompts when no description is provided and can read from piped input. Automatically detects and handles commands that require interactive input, such as password prompts and passphrases.

**Arguments:**

_description_

Description of what you want to accomplish with the command. If not provided, rawi will prompt interactively or read from stdin.

**Options:**

**-p, --profile** _profile_

Use a specific configuration profile (default: "default")

**-d, --dry-run**

Show the generated command without executing it. Useful for validation and learning.

**-t, --timeout** _timeout_

Maximum execution time for the generated command in milliseconds (default: 30000)

**-v, --verbose**

Show detailed information including provider type, model used, and execution steps

**-c, --confirm**

Always prompt for confirmation before executing commands, even for safe operations

**--skip-tool-validation**

Skip checking if required tools are installed before execution

**-s, --shell** _shell_

Specify which shell to use for command execution

**-w, --working-directory** _directory_

Set the working directory for command execution

**Examples:**

# Basic command generation

**rawi exec** "list all files in current directory"

# Use with piped input

**echo** "show disk usage" **|** **rawi exec**

# Interactive mode (prompts for description)

**rawi exec**

# Dry run to see command without executing

**rawi exec** "find large files over 100MB" **--dry-run**

# Use specific profile

**rawi exec** "restart nginx service" **--profile** server

# Set timeout and confirmation

**rawi exec** "backup database" **--timeout** 300000 **--confirm**

# Interactive commands with secure input handling

**rawi exec** "generate a new SSH key named work-key"

**rawi exec** "create a GPG signing key for git"

**rawi exec** "connect to remote MySQL database"

# Using advanced options

**rawi exec** "install docker" **--verbose**

**rawi exec** "run specialized tool" **--skip-tool-validation**

**rawi exec** "build project" **--working-directory** ~/projects **--shell** /bin/zsh

**Use Cases:**

- **System Administration**: Generate commands for server management and maintenance
- **Security Operations**: Generate SSH/GPG keys and handle interactive security prompts
- **File Operations**: Create complex find, grep, and file manipulation commands
- **Development**: Generate build, test, and deployment commands
- **Learning**: Discover CLI tools and their proper usage
- **Access Management**: Handle user, permission, and credential operations securely
- **Automation**: Create one-off commands for specific tasks

**Safety Features:**

- Command validation and safety checks before execution
- Dry-run mode for command preview
- Timeout protection for long-running commands
- User confirmation for potentially dangerous operations
- Session logging for command history and review

### configure \- Manage AI provider settings and profiles

**Synopsis:**

**rawi configure** [*options*]

**Description:**
Configure AI provider settings, manage multiple profiles, and set up authentication credentials. Supports both interactive and command-line configuration modes.

**Options:**

**-p, --profile** _profile_

Profile name to configure (default: "default")

**--provider** _provider_

AI provider name. Supported providers: **openai**, **anthropic**, **google**, **azure**, **bedrock**, **ollama**, **xai**, **lmstudio**

**--model** _model_

AI model name. Use **rawi provider --list-models** _provider_ to see available models

**--api-key** _key_

API key for the provider (not required for Ollama and LM Studio)

**--base-url** _url_

Custom base URL for provider API (useful for self-hosted instances)

**--resource-name** _name_

Azure OpenAI resource name (required for Azure provider)

**--api-version** _version_

Azure OpenAI API version (default: "2024-10-01-preview")

**--region** _region_

AWS region for Amazon Bedrock (default: "us-east-1")

**--access-key-id** _id_

AWS access key ID for Amazon Bedrock

**--secret-access-key** _key_

AWS secret access key for Amazon Bedrock

**--session-token** _token_

AWS session token for Amazon Bedrock (for temporary credentials)

**--use-provider-chain**

Use AWS credential provider chain instead of explicit credentials for Bedrock

**--temperature** _value_

Sampling temperature (0.0-2.0). Higher values make output more creative, lower values more focused

**--max-tokens** _number_

Maximum tokens for response (1-100000)

**--language** _lang_

Response language preference: **english** or **arabic**

**-s, --show**

Display current configuration with masked API keys

**-l, --list**

List all configured profiles

**-d, --delete** _profile_

Delete a configuration profile and all its settings

**Examples:**

# Interactive configuration

**rawi configure**

# Quick OpenAI setup

**rawi configure** **--provider** openai **--model** gpt-4o **--api-key** sk-...

# Configure work profile for Anthropic

**rawi configure** **--profile** work **--provider** anthropic **--model** claude-3-opus

# Azure OpenAI setup

**rawi configure** **--provider** azure **--resource-name** my-resource **--api-key** ...

# Local Ollama setup

**rawi configure** **--provider** ollama **--model** llama2 **--base-url** http://localhost:11434

# Show current configuration

**rawi configure** **--show**

# List all profiles

**rawi configure** **--list**

# Delete old profile

**rawi configure** **--delete** old-profile

### history \- Manage chat sessions and message history

**Synopsis:**

**rawi history ask** [*options*]

**rawi history chat** [*options*]

**rawi history exec** [*options*]

**Description:**
Manage chat history with separate views for ask, chat, and exec sessions. Search conversations, filter by various criteria, and organize your AI interactions by session type.

**Subcommands:**

**ask** [*options*]

Show ask session history. View and search your ask sessions and messages.

**chat** [*options*]

Show chat session history. View and search your chat sessions and messages.

**exec** [*options*]

Show exec session history. View and search your exec sessions and generated commands.

**Options (available for ask, chat, and exec subcommands):**

**-p, --profile** _profile_

Show history for specific profile (default: "default")

**-l, --limit** _number_

Number of sessions to display (default: 50)

**--all**

Show all sessions without pagination limit

**--all-profiles**

Show sessions from all profiles

**-s, --search** _query_

Search messages containing specific text

**--provider** _provider_

Filter sessions by AI provider

**--model** _model_

Filter sessions by AI model

**--from** _date_

Show sessions from date (YYYY-MM-DD format)

**--to** _date_

Show sessions to date (YYYY-MM-DD format)

**Examples:**

# Show ask session history

**rawi history ask**

# Show chat session history

**rawi history chat**

# Show exec session history

**rawi history exec**

# Show ask sessions from work profile

**rawi history ask** **--profile** work

# Search for specific content in chat sessions

**rawi history chat** **--search** "typescript"

# Search for specific commands in exec sessions

**rawi history exec** **--search** "docker"

# Filter ask sessions by provider and date

**rawi history ask** **--provider** openai **--from** 2024-01-01

# Show recent chat sessions with limit

**rawi history chat** **--limit** 10

# Show recent exec sessions

**rawi history exec** **--limit** 20

# Search ask sessions across all profiles

**rawi history ask** **--search** "docker" **--all-profiles**

# Filter chat sessions by model

**rawi history chat** **--model** gpt-4 **--provider** openai

# Filter exec sessions by provider

**rawi history exec** **--provider** anthropic

# Show ask sessions within date range

**rawi history ask** **--from** 2024-01-01 **--to** 2024-12-31

# Show all chat sessions without pagination

**rawi history chat** **--all**

# Show all exec sessions from all profiles

**rawi history exec** **--all-profiles**

### act \- Expert prompt template system

**Synopsis:**

**rawi act** [*options*]

**Description:**
Manage and explore expert prompt templates (called "acts") for specialized AI interactions. Templates provide pre-built prompts for common tasks like code review, documentation, analysis, and more. All templates work globally across all profiles.

**Options:**

**-l, --list**

List all available act templates with pagination

**-b, --built-in**

List only built-in act templates

**-c, --custom**

List only custom act templates

**-s, --show** _template_

Show detailed information about a specific template including its prompt text

**--create**

Create a new custom act template interactively

**--edit** _template_

Edit an existing custom act template

**--delete** _template_

Delete a custom act template

**Template Categories:**

- **Technical Support** \- Code review, troubleshooting, DevOps
- **Content Creation** \- Writing, documentation, marketing
- **Business & Strategy** \- Analysis, planning, consultation
- **Education & Learning** \- Tutoring, explanations, guides
- **Creative & Design** \- Creative direction, UX design, branding

**Examples:**

# List all templates

**rawi act** **--list**

# List only built-in templates

**rawi act** **--built-in**

# List only custom templates

**rawi act** **--custom**

# Show specific template details

**rawi act** **--show** code-reviewer

# Create a new custom template

**rawi act** **--create**

# Edit an existing custom template

**rawi act** **--edit** my-template

# Delete a custom template

**rawi act** **--delete** my-template

# Use template with ask command (works with any profile)

**rawi ask** **--act** technical-writer "Document this API"

# Combine with file input

**cat** component.js **|** **rawi ask** **--act** code-reviewer

### provider \- AI provider information and capabilities

**Synopsis:**

**rawi provider** [*options*]

**Description:**
Display information about supported AI providers, their capabilities, and available models. Useful for discovering what providers and models are available for configuration.

**Options:**

**-l, --list**

List all supported AI providers with descriptions

**-m, --list-models** _provider_

List all available models for a specific provider

**Supported Providers:**

- **🔵 OpenAI** \- GPT models (gpt-4o, gpt-4, o1, o3, gpt-4o-mini)
- **🟣 Anthropic** \- Claude models (Claude 3.5 Sonnet, Claude 3.5 Haiku)
- **🔴 Google** \- Gemini models (Gemini 2.0 Flash, Gemini 1.5 Pro)
- **� DeepSeek** \- DeepSeek models (DeepSeek-Chat, DeepSeek-Reasoner)
- **�� Ollama** \- Local models (Llama 3.2, CodeLlama, Qwen, +100 more)
- **� LM Studio** \- Local model server (Llama 3.3, Phi-4, Gemma-3, Qwen-3)
- **� Mistral** \- Mistral models (Mistral Large, Mistral Small, Pixtral)
- **⚡ Cerebras** \- Cerebras models (Llama 3.3 70B, Llama 3.1 70B/8B)
- **🔷 Azure** \- Enterprise OpenAI deployments
- **🟠 Bedrock** \- AWS-hosted AI models (Claude, Llama, Titan via AWS)
- **🤖 xAI** \- Grok models (Grok-3, Grok-2, Grok-Beta)

**Examples:**

# List all providers

**rawi provider** **--list**

# List OpenAI models

**rawi provider** **--list-models** openai

# List Ollama models

**rawi provider** **--list-models** ollama

### info \- System and configuration information

**Synopsis:**

**rawi info** [*options*]

**Description:**
Display information about Rawi installation, version, configuration status, and system capabilities.

**Options:**

**--profiles**

Show detailed information about configured profiles

**Examples:**

# Show general system information

**rawi info**

# Show profile information

**rawi info** **--profiles**

## CONFIGURATION

### Configuration Files

Rawi stores configuration in the user's home directory:

**~/.rawi/credentials**

JSON file containing profile configurations, API keys, and provider settings

**~/.rawi/database.sqlite**

SQLite database storing chat history, sessions, and usage statistics

### Configuration Format

Configuration is stored as JSON with the following structure:

```~.rawi/credentials
{
  "default": {
    "provider": "openai",
    "model": "gpt-4o",
    "apiKey": "sk-...",
    "temperature": 0.7,
    "maxTokens": 2048,
    "language": "english"
  },
  "work": {
    "provider": "anthropic",
    "model": "claude-3-opus",
    "apiKey": "sk-ant-...",
    "temperature": 0.3,
    "maxTokens": 4096
  }
}
```

### Environment Variables

**RAWI_CONFIG_DIR**

Override default configuration directory (default: ~/.rawi)

**RAWI_DEBUG**

Enable debug logging (set to "true" or "1")

**OPENAI_API_KEY**

Default OpenAI API key (can be overridden by profile configuration)

**ANTHROPIC_API_KEY**

Default Anthropic API key (can be overridden by profile configuration)

## EXAMPLES

### Basic Usage Patterns

# Quick question

**rawi ask** "What is the difference between let and var in JavaScript?"

# Process file content

**cat** package.json **|** **rawi ask** "Explain this package.json file"

# Git workflow integration

**git log** --oneline -10 **|** **rawi ask** "Summarize recent changes"

# Code review workflow

**git diff** HEAD~1 **|** **rawi ask** **--act** code-reviewer "Review this commit"

### Profile Management

# Setup multiple profiles

**rawi configure** **--profile** personal **--provider** openai **--model** gpt-4o
**rawi configure** **--profile** work **--provider** anthropic **--model** claude-3-opus

# Use different profiles

**rawi ask** **--profile** personal "Help with my hobby project"
**rawi ask** **--profile** work "Generate business requirements"

### Template Workflows

# Documentation workflow

**cat** src/api.ts **|** **rawi ask** **--act** technical-writer "Document this API"

# Code analysis

**find** . -name "\*.js" -exec **cat** {} **;** **|** **rawi ask** **--act** code-reviewer

# Learning assistance

**rawi ask** **--act** tutor "Explain React hooks with examples"

### Advanced Scripting

#!/bin/bash

# Automated code review script

# Get changed files from last commit

changed_files=$(git diff --name-only HEAD~1)

for file in $changed_files; do
    echo "Reviewing $file..."
    cat "$file" | rawi ask --act code-reviewer "Review this file: $file" > "review_$file.md"
done

echo "Code reviews saved to review\_\*.md files"

### History and Session Management

# Start focused session with a name

**rawi ask** **--new-session** **--session-name** "TypeScript Best Practices" "Let's discuss TypeScript patterns"

# Interactive session selection

**rawi ask** "Continue our previous discussion" **--list-sessions**

# Session operations

**rawi history** sessions **--table**

**rawi history** rename abc123 "Updated Session Name"

**rawi history** export abc123 **--output** typescript-discussion.json

# Advanced session management

**rawi chat** **--session-name** "Sprint Planning" **--act** project-manager

**rawi chat** **--show-session-id** **--session-stats**

# Session analytics

**rawi history** sessions **--stats**

**rawi history** stats **--profile** work

# Continue the session

**rawi ask** **--session** abc123 "What about error handling?"

**rawi ask** **--session** abc123 "How to handle async operations?"

# Review session later

**rawi history** show abc123

## INTEGRATION

### Shell Integration

Add to your shell configuration (.bashrc, .zshrc):

# Rawi aliases

alias explain='rawi ask --act tutor'
alias review='rawi ask --act code-reviewer'
alias document='rawi ask --act technical-writer'

# Function for quick explanations

explain_command() {
man "$1" 2>/dev/null | rawi ask "Explain this command concisely: $1"
}

### Git Integration

Add to your .gitconfig:

[alias]
ai-review = "!git diff | rawi ask --act code-reviewer 'Review these changes'"
ai-commit = "!git diff --cached | rawi ask 'Generate a commit message for these changes'"
ai-explain = "!git log --oneline -10 | rawi ask 'Summarize recent changes'"

### Editor Integration

For VS Code, create a task in .vscode/tasks.json:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Rawi Review Current File",
      "type": "shell",
      "command": "cat ${file} | rawi ask --act code-reviewer 'Review this file'",
      "group": "build"
    }
  ]
}
```

## FILES

**~/.rawi/credentials**

User configuration file containing profiles and API keys

**~/.rawi/database.sqlite**

SQLite database with chat history and sessions

**~/.rawi/backups/**

Automatic configuration and database backups

## EXIT STATUS

The **rawi** command exits with one of the following values:

**0**

Success - command completed successfully

**1**

General error - invalid arguments, file not found, or unexpected error

**2**

Configuration error - missing or invalid configuration, profile not found

**3**

Network or API error - connection failure, API timeout, or service unavailable

**4**

Authentication error - invalid API key, insufficient permissions, or quota exceeded

**5**

Database error - database corruption, disk full, or permission denied

## DIAGNOSTICS

### Common Issues

**"Configuration not found"**

Run **rawi configure** to set up your first profile

**"API key invalid"**

Verify your API key with **rawi configure --show** and update if needed

**"Model not available"**

Check available models with **rawi provider --list-models** _provider_

**"Rate limit exceeded"**

Wait before retrying or consider using a different model with lower rate limits

### Debug Mode

Enable verbose output for troubleshooting:

**rawi ask** **--verbose** "test query"
**RAWI_DEBUG=1** **rawi ask** "test query"

### Health Check

Verify your configuration:

# Check general info

**rawi info**

# Test each profile

**rawi configure** **--list**
**rawi configure** **--show** **--profile** _profile_

# Test providers

**rawi provider** **--list**

## SECURITY

### API Key Safety

- API keys are masked in output and logs
- Configuration files have restricted permissions (600)
- Keys are never transmitted in URLs or query parameters
- Use environment variables for CI/CD environments

### Best Practices

- Use separate profiles for different environments
- Regularly rotate API keys
- Monitor API usage through provider dashboards
- Use **--verbose** only when necessary (may expose sensitive data)
- Keep configuration backups secure

### Online Resources

**Project Homepage:**

https://rawi.mkabumattar.com

**Documentation:**

https://github.com/MKAbuMattar/rawi/tree/main/docs

**Issue Tracker:**

https://github.com/MKAbuMattar/rawi/issues

**Examples and Tutorials:**

https://github.com/MKAbuMattar/rawi/tree/main/docs/examples

## AUTHOR

Mohammad Abu Mattar <mohammad.khaled@outlook.com>

## LICENSE

MIT License - see LICENSE file for details

## BUGS

Report bugs at: https://github.com/MKAbuMattar/rawi/issues

When reporting bugs, include:

- Rawi version (**rawi --version**)
- Operating system and architecture
- Command that failed and error message
- Configuration details (with API keys masked)
- Use **--verbose** flag for detailed error information
