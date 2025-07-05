# RAWI(1) — AI-Powered CLI Tool

## NAME

rawi \- Developer-friendly AI-powered CLI for answers, summaries, and analyses

## SYNOPSIS

**rawi** <command> [options]

## DESCRIPTION

Rawi (راوي) is a modern, developer-friendly CLI for interacting with multiple AI providers (OpenAI, Google, Bedrock, Anthropic, Ollama, xAI, Qwen, and more). It delivers clear answers, summaries, and analyses, with a focus on usability, discoverability, and actionable output.

- Modern output formatting
- Helpful error messages
- Interactive and scriptable
- Supports profiles, history, and advanced prompt templates

## GLOBAL OPTIONS

-V, --version Show version information
-h, --help Show help for command

## COMMANDS

### ask

Ask AI a question and get a response. Supports piped input and prompt templates.

**Usage:**
rawi ask [query] [options]

**Options:**
-p, --profile <profile> Use a specific configuration profile
-s, --session <sessionId> Continue an existing chat session
-n, --new-session Start a new chat session
--act <template> Use an act template for expert prompts
--verbose Show detailed status and debug info

**Examples:**
rawi ask "What is TypeScript?"
cat file.txt | rawi ask --act summarize "Summarize this file"
rawi ask --profile work --act code-review "Review this code"

### act

List and explore act templates for specialized prompts.

**Usage:**
rawi act [options]

**Options:**
-l, --list List all available act templates
-s, --show <template> Show details of a specific act template

**Examples:**
rawi act --list
rawi act --show developer

### configure

Configure AI provider settings and manage profiles.

**Usage:**
rawi configure [options]

**Options:**
-p, --profile <profile> Profile name to configure (default: default)
--provider <provider> AI provider (openai, anthropic, google, ollama, xai, azure, bedrock, qwen)
--model <model> AI model name
--api-key <apiKey> API key for the provider
--base-url <baseURL> Custom base URL for the provider
--resource-name <name> Resource name (Azure only)
--api-version <version> API version (Azure only)
--temperature <value> Sampling temperature (0-2)
--max-tokens <number> Maximum tokens
--language <lang> Language (english, arabic)
-s, --show Show current configuration
-l, --list List all profiles
-d, --delete <profile> Delete a profile

**Examples:**
rawi configure --provider openai --model gpt-4o --api-key sk-xxx
rawi configure --list
rawi configure --show --profile work

### provider

Show supported AI providers and their models.

**Usage:**
rawi provider [options]

**Options:**
-l, --list List all supported AI providers
-m, --list-models <provider> List all models for a specific provider

**Examples:**
rawi provider --list
rawi provider --list-models ollama

### history

Manage chat history and sessions.

**Usage:**
rawi history [options]

**Options:**
-p, --profile <profile> Profile to show history for (default: default)
-l, --limit <number> Number of sessions to show (default: 50)
--all Show all sessions (ignore limit)
--all-profiles Show sessions from all profiles
-s, --search <query> Search messages containing text
--provider <provider> Filter by AI provider
--model <model> Filter by AI model
--from <date> Show sessions from date (YYYY-MM-DD)
--to <date> Show sessions to date (YYYY-MM-DD)

**Subcommands:**
sessions List and manage chat sessions
show <sessionId> Show all messages in a session
delete <sessionId> Delete a session
stats Show usage statistics
cleanup Clean up old sessions
export Export history to a file

**Examples:**
rawi history
rawi history --profile work
rawi history sessions
rawi history show abc123
rawi history delete abc123
rawi history stats
rawi history cleanup --days 7
rawi history export --output backup.json

### info

Display information about Rawi, configuration, and environment.

**Usage:**
rawi info [options]

**Options:**
--profiles Show configured profiles

**Examples:**
rawi info
rawi info --profiles

## EXAMPLES

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

Docs: https://rawi.mkabumattar.com
More examples: https://github.com/MKAbuMattar/rawi/tree/main/docs/examples.md
