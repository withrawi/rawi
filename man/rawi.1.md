# RAWI(1) -- AI-Powered CLI Tool

## NAME

rawi \- A developer-friendly AI-powered CLI tool for clear answers, summaries, and analyses

## SYNOPSIS

**rawi** [command] [options]

## DESCRIPTION

Rawi (راوي) is a developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses. It supports multiple AI providers, including OpenAI, Google, Amazon Bedrock, Anthropic, Ollama, xAI, Qwen, and more. Rawi is designed for clarity, consistency, and developer-friendliness, with modern output formatting, actionable error messages, and discoverable help.

## COMMAND OVERVIEW

| Command       | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| **ask**       | Ask AI a question and get a response                              |
| **act**       | List and explore act templates                                    |
| **configure** | Configure AI provider settings and profiles                       |
| **provider**  | Show supported AI providers and models                            |
| **history**   | Manage chat history and sessions (search, stats, export, cleanup) |
| **info**      | Display system and configuration information                      |

## CLI COMMAND TREE

```
rawi
├── ask [query] [options]
│     ├── --profile, -p <profile>
│     ├── --session, -s <sessionId>
│     ├── --new-session, -n
│     ├── --act <template>
│     ├── --verbose
├── act [options]
│     ├── --list, -l
│     └── --show, -s <template>
├── configure [options]
│     ├── --profile, -p <profile>
│     ├── --provider <provider>
│     ├── --model <model>
│     ├── --api-key <apiKey>
│     ├── --base-url <baseURL>
│     ├── --temperature <temperature>
│     ├── --max-tokens <maxTokens>
│     ├── --language <language>
│     ├── --show, -s
│     ├── --list, -l
│     └── --delete, -d <profile>
├── provider [options]
│     ├── --list, -l
│     └── --list-models, -m <provider>
├── history [options]
│   ├── --profile, -p <profile>
│   ├── --limit, -l <number>
│   ├── --search, -s <query>
│   ├── --provider <provider>
│   ├── --model <model>
│   ├── --from <date>
│   ├── --to <date>
│   ├── sessions [options]
│   ├── show <sessionId>
│   ├── delete <sessionId>
│   ├── stats [options]
│   ├── cleanup [options]
│   └── export [options]
└── info [options]
    └── --profiles
```

## COMMANDS

### ask

Ask AI a question and get a response. Supports piped input from stdin.

**Usage:**
rawi ask [query] [options]

**Options:**
--profile, -p <profile> Profile to use for AI configuration (default: default)
--session, -s <sessionId> Continue an existing chat session
--new-session, -n Start a new chat session
--act <template> Use an act template (e.g., ethereum-developer)
--verbose Show detailed status and debug information

💡 Use "rawi act --list" to see available templates.

**Examples:**
rawi ask "What is TypeScript?"
rawi ask "Review this code" --profile work
rawi ask --act ethereum-developer "explain smart contract security"
rawi ask "What is the difference between JavaScript and TypeScript?" --verbose
cat contract.sol | rawi ask --act ethereum-developer "review this contract"

### act

List and explore act templates for specialized prompts.

**Usage:**
rawi act [options]

**Options:**
--list, -l List all available act templates
--show, -s <template> Show details of a specific act template

**Examples:**
rawi act --list
rawi act --show ethereum-developer

💡 You can use act templates directly in `rawi ask` with `--act <template>`. See `rawi act --list` for all available templates.

### configure

Configure Rawi AI provider settings and manage profiles.

**Usage:**
rawi configure [options]

**Options:**
--profile, -p <profile> Configuration profile name
--provider <provider> AI provider (openai, anthropic, google, ollama, xai, azure, bedrock, qwen)
--model <model> AI model name
--api-key <apiKey> API key for the provider
--base-url <baseURL> Custom base URL
--temperature <temperature> Temperature value (0-2)
--max-tokens <maxTokens> Maximum tokens
--language <language> Language (english, arabic)
--show, -s Show current configuration
--list, -l List all profiles
--delete, -d <profile> Delete a configuration profile

**Examples:**
rawi configure --provider openai --model gpt-4o --api-key sk-your-key
rawi configure --list
rawi configure --show --profile work

### provider

Show information about supported AI providers and their models.

**Usage:**
rawi provider [options]

**Options:**
--list, -l List all supported AI providers
--list-models, -m <provider> List all models for a specific provider (with pagination)

**Examples:**
rawi provider --list
rawi provider --list-models ollama

sessions [options] List and manage chat sessions
show <sessionId> Show all messages in a specific session
delete <sessionId> Delete a session
stats [options] Show usage statistics
cleanup [options] Clean up old sessions
export [options] Export history to a file

### history

Manage chat history and sessions.

**Usage:**
rawi history [options]

**Options:**
--profile, -p <profile> Profile to show history for (default: default)
--limit, -l <number> Number of sessions to show (default: 50)
--search, -s <query> Search messages containing text
--provider <provider> Filter by AI provider
--model <model> Filter by AI model
--from <date> Show sessions from date (YYYY-MM-DD)
--to <date> Show sessions to date (YYYY-MM-DD)

**Subcommands:**
sessions [options] List and manage chat sessions
show <sessionId> Show all messages in a specific session
delete <sessionId> Delete a session
stats [options] Show usage statistics
cleanup [options] Clean up old sessions
export [options] Export history to a file

**Examples:**
rawi history
rawi history --profile work
rawi history sessions
rawi history show abc123-def456
rawi history delete abc123-def456
rawi history stats
rawi history cleanup --days 7
rawi history export --output backup.json

### info

Display information about Rawi and its capabilities.

**Usage:**
rawi info [options]

**Options:**
--profiles Show configured profiles
--providers Show supported AI providers

**Examples:**
rawi info
rawi info --profiles
rawi info --providers

## GLOBAL OPTIONS

    --help                       Show help for command
    --version                    Show version information

## COMMAND CHAINING & PIPES

Rawi works seamlessly with shell pipes and command chaining:

    cat README.md | rawi ask "Summarize this documentation"
    git diff | rawi ask "Review these changes"
    rawi ask "Create a deployment guide" > deploy.md

## EXIT CODES

| Code | Meaning              |
| ---- | -------------------- |
| 0    | Success              |
| 1    | General error        |
| 2    | Configuration error  |
| 3    | Network/API error    |
| 4    | Authentication error |

## SEE ALSO

For more examples and advanced usage, see the documentation and [Usage Examples](https://github.com/MKAbuMattar/rawi/tree/main/docs/examples.md).
