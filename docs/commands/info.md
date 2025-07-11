# Info Command

Get detailed information about your Rawi installation, configuration, and system status.

## Navigation

- [← Commands Overview](./README.md)
- [📖 Wiki Home](../README.md)
- [⚙️ Configuration](./configure.md)
- [🏠 Providers](./provider.md)

---

## Basic Usage

```bash
# Show general system information
rawi info

# Show configured profiles
rawi info --profiles
```

## Command Options

| Option       | Description                                        |
| ------------ | -------------------------------------------------- |
| `--profiles` | Display all configured profiles and their settings |
| `--help`     | Show command help and examples                     |

## Examples

### 1. System Information

Get a comprehensive overview of your Rawi installation:

```bash
rawi info
```

**Output includes:**

- Version information
- Author and license details
- Total number of configured profiles
- Available AI providers
- Current default profile
- Installation path
- Configuration location

### 2. Profile Overview

View all your configured profiles:

```bash
rawi info --profiles
```

**Shows for each profile:**

- Profile name and status
- Configured AI provider
- Default model
- Creation date
- Last used date
- Number of conversations

## Understanding the Output

### General Information Section

```
🚀 About Rawi (راوي)  https://rawi.mkabumattar.com
├─ Version: 1.0.0
├─ Author: Mahmoud Kabumattar
├─ License: MIT
└─ Description: AI-powered CLI tool for developers

📊 Configuration Status
├─ Profiles: 3 configured
├─ Default Profile: development
├─ Providers: 9 available
└─ Templates: 200+ expert prompts
```

### Profiles Information

```
👤 Configured Profiles
┌─────────────┬──────────┬─────────────┬─────────────┬──────────────┐
│ Profile     │ Provider │ Model       │ Created     │ Conversations│
├─────────────┼──────────┼─────────────┼─────────────┼──────────────┤
│ development │ openai   │ gpt-4       │ 2024-01-15  │ 42           │
│ local       │ ollama   │ llama2      │ 2024-01-20  │ 15           │
│ production  │ anthropic│ claude-3    │ 2024-01-25  │ 8            │
└─────────────┴──────────┴─────────────┴─────────────┴──────────────┘
```

## Use Cases

### 1. Troubleshooting Setup

When experiencing issues, run `rawi info` to check:

- Installation version
- Profile configuration
- Provider availability

### 2. Profile Management

Use `rawi info --profiles` to:

- Review all configured profiles
- Check which profile is set as default
- Monitor usage statistics

### 3. System Status Check

Regular health checks of your Rawi setup:

- Verify configuration integrity
- Check for available updates
- Monitor storage usage

## Integration with Other Commands

The `info` command works well with:

```bash
# Check configuration before asking
rawi info && rawi ask "What's the weather?"

# Review profiles before configuring
rawi info --profiles
rawi configure --profile work

# System check in scripts
if rawi info >/dev/null 2>&1; then
    echo "Rawi is properly configured"
else
    echo "Rawi needs configuration"
fi
```

## Related Commands

- [`configure`](./configure.md) — Modify settings shown in info
- [`provider`](./provider.md) — Detailed provider information
- [`history`](./history.md) — View conversation statistics

## Troubleshooting

### No Profiles Found

If `rawi info` shows no profiles:

```bash
# Create your first profile
rawi configure
```

### Outdated Information

Information is cached briefly. To force refresh:

```bash
# Restart terminal or clear any cache
rawi info --profiles
```

### Permission Issues

If you can't access configuration:

```bash
# Check configuration directory permissions
ls -la ~/.config/rawi/

# Fix permissions if needed
chmod 755 ~/.config/rawi/
```

---

**Next Steps:**

- [Set up a new profile](./configure.md)
- [Explore available providers](./provider.md)
- [Start your first conversation](./ask.md)
