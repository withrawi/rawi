# RAWI(1) -- AI-Powered CLI Tool

## NAME

rawi \- A developer-friendly AI-powered CLI tool for clear answers, summaries, and analyses

## SYNOPSIS

**rawi** [command] [options]

## DESCRIPTION

Rawi (راوي) is a developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses. It supports multiple AI providers, including OpenAI, Google, Amazon Bedrock, and more.

## COMMAND OVERVIEW

| Command       | Description                                  |
| ------------- | -------------------------------------------- |
| **ask**       | Ask AI a question and get a response         |
| **configure** | Configure AI provider settings               |
| **history**   | Manage chat history and sessions             |
| **info**      | Display system and configuration information |

## CLI COMMAND TREE

```
rawi
├── ask [query] [options]
│     └── --verbose
├── configure [options]
├── history [options]
│   ├── sessions [options]
│   ├── show <sessionId>
│   ├── delete <sessionId>
│   ├── stats [options]
│   ├── cleanup [options]
│   └── export [options]
└── info [options]
```

## COMMANDS

### ask

Ask AI a question and get a response.

**Usage:**
rawi ask [query] [options]

**Options:**
--profile, -p <profile> Profile to use for AI configuration (default: default)
--session <sessionId> Continue an existing chat session
--new-session Start a new chat session
--act <template> Use an act template by ID
--list-acts List all available act templates
--show Show act template details (with --act)
--verbose Show detailed status and debug information

**Examples:**
rawi ask "What is TypeScript?"
rawi ask "Review this code" --profile work
rawi ask --act ethereum-developer "explain smart contract security"
rawi ask "What is the difference between JavaScript and TypeScript?" --verbose
cat contract.sol | rawi ask --act ethereum-developer "review this contract"

### configure

Configure Rawi AI provider settings and manage profiles.

**Usage:**
rawi configure [options]

**Options:**
--profile <profile> Configuration profile name
--provider <provider> AI provider
--model <model> AI model name
--api-key <apiKey> API key for the provider
--base-url <baseURL> Custom base URL
--temperature <temperature> Temperature value (0-2)
--max-tokens <maxTokens> Maximum tokens
--language <language> Language (english, arabic)
--show Show current configuration
--list List all profiles
--list-providers List all available AI providers
--list-models <provider> List models for specific provider
--delete <profile> Delete a configuration profile

**Examples:**
rawi configure --provider openai --model gpt-4o --api-key sk-your-key
rawi configure --list
rawi configure --show --profile work

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
