# rawi configure

Configure AI provider settings and manage profiles.

## Usage

```
rawi configure [options]
```

## Options

- `-p, --profile <profile>` — Profile name to configure (default: default)
- `--provider <provider>` — AI provider (openai, anthropic, google, ollama, xai, azure, bedrock, qwen)
- `--model <model>` — AI model name
- `--api-key <apiKey>` — API key for the provider
- `--base-url <baseURL>` — Custom base URL for the provider
- `--resource-name <name>` — Resource name (Azure only)
- `--api-version <version>` — API version (Azure only)
- `--region <region>` — AWS region for Bedrock
- `--access-key-id <id>` — AWS access key ID for Bedrock
- `--secret-access-key <key>` — AWS secret access key for Bedrock
- `--session-token <token>` — AWS session token for Bedrock (optional)
- `--use-provider-chain` — Use AWS credential provider chain
- `--temperature <value>` — Sampling temperature (0-2)
- `--max-tokens <number>` — Maximum tokens
- `--language <lang>` — Language (english, arabic)
- `-s, --show` — Show current configuration
- `-l, --list` — List all profiles
- `-d, --delete <profile>` — Delete a profile

## Description

Set up providers, models, credentials, and advanced options. Supports interactive and manual configuration.

## Examples

```
rawi configure --provider openai --model gpt-4o --api-key sk-xxx
rawi configure --list
rawi configure --show --profile work
```
