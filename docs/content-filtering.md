# Content Filtering Guide

This guide explains how to use Rawi's content filtering feature to protect sensitive information when interacting with AI services.

## Overview

The content filtering feature automatically detects and replaces sensitive information in both your prompts to AI models and the responses you receive. This helps protect your privacy and prevents accidental exposure of sensitive data.

## Available Filter Types

Rawi can detect and filter the following types of sensitive information:

| Type | Description | Example | Replacement |
|------|-------------|---------|------------|
| `email` | Email addresses | user@example.com | `[EMAIL]` |
| `phone` | Phone numbers (various formats) | (123) 456-7890 | `[PHONE]` |
| `creditcard` | Credit card numbers | 1234 5678 9012 3456 | `[CREDIT_CARD]` |
| `ssn` | Social Security Numbers (US) | 123-45-6789 | `[SSN]` |
| `ip` | IP addresses (IPv4) | 192.168.1.1 | `[IP_ADDRESS]` |
| `url` | URLs | https://example.com | `[URL]` |
| `address` | Physical addresses | 123 Main Street | `[ADDRESS]` |

## Basic Usage

To enable content filtering for a single command:

```bash
rawi ask "Analyze this data" --filter-sensitive
```

This will filter all supported types of sensitive information from both your prompt and the AI's response.

## Customizing Filter Types

You can specify which types of sensitive information to filter:

```bash
rawi ask "Process this info" --filter-types email,phone,creditcard
```

This will only filter email addresses, phone numbers, and credit card numbers, ignoring other types.

## Viewing Filtered Content

To see statistics about what was filtered:

```bash
rawi ask "Check this text" --filter-sensitive --show-filtered
```

For more detailed statistics, add the `--verbose` flag:

```bash
rawi ask "Check this text" --filter-sensitive --show-filtered --verbose
```

To highlight filtered content in the terminal output:

```bash
rawi ask "Analyze this data" --filter-sensitive --highlight-filtered
```

This will display the original text with sensitive information highlighted in yellow.

## Saving Filter Configuration

To save your current filtering settings as the default:

```bash
rawi ask "Save my settings" --filter-types email,phone --save-filter-config
```

This will save your configuration for future use. The next time you use `--filter-sensitive`, it will use these saved settings.

## Resetting Filter Configuration

To reset to the default filtering settings (all filter types enabled):

```bash
rawi ask --reset-filter-config
```

## Using with File Processing

Content filtering works seamlessly with file processing:

```bash
rawi ask "Analyze this data" --file customer-data.csv --filter-sensitive
```

This will filter sensitive information from both the file content and the AI's response.

## Advanced Usage

### Combining with Verbosity

For detailed information about filtering operations:

```bash
rawi ask "Process this data" --filter-sensitive --verbose
```

This will show detailed statistics about what was filtered, including counts by type.

### Filtering in Chat Sessions

Content filtering works in ongoing chat sessions:

```bash
rawi ask "Process this data" --filter-sensitive --session my-session
```

The filtering will be applied to all messages in the session.

## Best Practices

1. **Always filter sensitive data**: Use `--filter-sensitive` when working with potentially sensitive information.
2. **Verify filtering**: Use `--show-filtered` or `--highlight-filtered` to verify that sensitive information is being properly detected.
3. **Save your preferences**: Use `--save-filter-config` to save your preferred filtering settings.
4. **Be specific**: Use `--filter-types` to specify only the types of information you need to filter, which can improve performance.
5. **Check before sharing**: Always review filtered content before sharing it with others.

## Limitations

- The filtering system uses regular expressions and may not catch all variations of sensitive information.
- Some legitimate content might be incorrectly identified as sensitive information.
- Performance may be affected when filtering very large amounts of text.

## Troubleshooting

If filtering isn't working as expected:

1. Use `--verbose` to see detailed information about what's being filtered.
2. Try `--highlight-filtered` to visually identify what's being detected.
3. Reset to default settings with `--reset-filter-config` if your configuration might be causing issues.
4. Check that you're using the correct filter types for your data.

## Command Reference

| Option | Description |
|--------|-------------|
| `--filter-sensitive` | Enable content filtering for prompts and responses |
| `--filter-types <types>` | Specify which types to filter (comma-separated) |
| `--show-filtered` | Show filtering statistics |
| `--highlight-filtered` | Highlight filtered content in terminal output |
| `--save-filter-config` | Save current filtering settings as default |
| `--reset-filter-config` | Reset to default filtering settings |