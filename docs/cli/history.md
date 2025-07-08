# rawi history

Manage chat history and sessions.

## Usage

```
rawi history [options]
```

## Options

- `-p, --profile <profile>` — Profile to show history for (default: default)
- `-l, --limit <number>` — Number of sessions to show (default: 50)
- `--all` — Show all sessions (ignore limit)
- `--all-profiles` — Show sessions from all profiles
- `-s, --search <query>` — Search messages containing text
- `--provider <provider>` — Filter by AI provider
- `--model <model>` — Filter by AI model
- `--from <date>` — Show sessions from date (YYYY-MM-DD)
- `--to <date>` — Show sessions to date (YYYY-MM-DD)

## Subcommands

- `sessions` — List and manage chat sessions
- `show <sessionId>` — Show all messages in a session
- `delete <sessionId>` — Delete a session
- `stats` — Show usage statistics
- `cleanup` — Clean up old sessions
- `export` — Export history to a file

## Description

Search, filter, export, and clean up your AI chat history. Use --limit for pagination, --search for filtering.

## Examples

```
rawi history
rawi history --profile work
rawi history sessions
rawi history show abc123
rawi history delete abc123
rawi history stats
rawi history cleanup --days 7
rawi history export --output backup.json
```
