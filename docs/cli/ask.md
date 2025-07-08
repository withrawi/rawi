# rawi ask

Ask AI a question and get a response. Supports piped input and prompt templates.

## Usage

```
rawi ask [query] [options]
```

## Options

- `-p, --profile <profile>` — Use a specific configuration profile
- `-s, --session <sessionId>` — Continue an existing chat session
- `-n, --new-session` — Start a new chat session
- `--act <template>` — Use an act template for expert prompts
- `--verbose` — Show detailed status and debug info

## Description

Send a question or prompt to the AI. Supports stdin piping and session management.

## Examples

```
rawi ask "What is TypeScript?"
cat file.txt | rawi ask --act summarize "Summarize this file"
rawi ask --profile work --act code-review "Review this code"
```
