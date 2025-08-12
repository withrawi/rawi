# Exec Command

## Description

Convert natural language descriptions into executable CLI commands with safety validation and confirmation prompts.

The `exec` command bridges the gap between what you want to accomplish and the exact command syntax needed. Describe your goal in plain language, and Rawi will generate and optionally execute the appropriate command.

## Synopsis

```bash
rawi exec [description] [options]
echo "description" | rawi exec [options]
rawi exec [options]  # Interactive mode
```

## Arguments

**`description`** _(optional)_

Natural language description of what you want to accomplish. If not provided, Rawi will:

1. Read from stdin if available (piped input)
2. Prompt interactively if running in a terminal
3. Show help if no input is available

## Options

### Core Options

**`-p, --profile <profile>`**

Use a specific configuration profile for AI provider settings.

```bash
rawi exec "list running processes" --profile work
```

**`--dry-run`**

Show the generated command without executing it. Useful for learning and validation.

```bash
rawi exec "backup my home directory" --dry-run
```

**`--timeout <seconds>`**

Set maximum execution time for the generated command (default: 30 seconds).

```bash
rawi exec "compile large project" --timeout 300
```

**`--verbose`**

Show detailed information including provider type, model used, and execution steps.

```bash
rawi exec "system diagnostics" --verbose
```

**`--confirm`**

Always prompt for confirmation before executing commands, even for safe operations.

```bash
rawi exec "restart service" --confirm
```

## Usage Examples

### Basic Command Generation

```bash
# Simple file operations
rawi exec "list all files in current directory"
rawi exec "show disk usage for home directory"
rawi exec "find all Python files"

# System operations
rawi exec "show running processes"
rawi exec "check memory usage"
rawi exec "display network interfaces"
```

### Piped Input

```bash
# From other commands
echo "compress all log files" | rawi exec
printf "backup database\n" | rawi exec --dry-run

# In scripts
TASK="monitor CPU usage for 30 seconds"
echo "$TASK" | rawi exec --timeout 60
```

### Interactive Mode

```bash
# Start interactive prompt
rawi exec

# Will prompt: "What would you like to do?"
# Enter: "find files modified in last 24 hours"
```

### Development and System Administration

```bash
# Development tasks
rawi exec "start development server on port 3000"
rawi exec "run tests in watch mode"
rawi exec "build production bundle"

# System administration
rawi exec "check disk space on all mounted drives"
rawi exec "show last 50 system log entries"
rawi exec "list active network connections"
```

### Safety and Validation

```bash
# Preview dangerous operations
rawi exec "delete old log files" --dry-run

# Force confirmation for system changes
rawi exec "restart network service" --confirm

# Use specific provider for consistent results
rawi exec "complex git operation" --profile production
```

## Use Cases

### 🛠️ System Administration

- **Server Management**: Generate commands for service control, monitoring, and maintenance
- **File Operations**: Create complex find, grep, and file manipulation commands
- **Network Diagnostics**: Generate networking and connectivity troubleshooting commands

### 👨‍💻 Development

- **Build & Deploy**: Generate commands for compilation, testing, and deployment
- **Git Operations**: Create complex git commands for version control
- **Environment Setup**: Generate commands for development environment configuration

### 📊 Data Processing

- **Log Analysis**: Generate commands for log parsing and analysis
- **File Processing**: Create commands for data transformation and processing
- **Monitoring**: Generate commands for system and application monitoring

### 🎓 Learning

- **Command Discovery**: Learn new CLI tools and their proper usage
- **Best Practices**: See recommended command patterns and options
- **Documentation**: Generate commands with proper flags and syntax

## Safety Features

### Command Validation

- **Syntax Checking**: Generated commands are validated for proper syntax
- **Safety Analysis**: Potentially dangerous operations are flagged
- **Context Awareness**: Commands are generated with awareness of current system state

### User Control

- **Dry Run Mode**: Preview commands before execution
- **Confirmation Prompts**: User approval required for execution
- **Timeout Protection**: Automatic termination of long-running commands

### Session Logging

- **Command History**: All generated commands are logged for review
- **Execution Results**: Command output and exit codes are recorded
- **Session Management**: Commands are organized by session for easy tracking

## Integration with Other Commands

### With History

```bash
# View exec command history
rawi history exec

# Search for specific commands
rawi history exec --search "docker"

# View exec sessions from specific profile
rawi history exec --profile production
```

### With Profiles

```bash
# Use different providers for different tasks
rawi exec "server deployment" --profile production
rawi exec "development setup" --profile personal
```

### With Templates

While exec doesn't directly use act templates, you can combine them:

```bash
# Use ask with template, then exec the result
rawi ask --act devops "What command should I use to monitor disk I/O?"
# Then use the suggestion with exec
rawi exec "monitor disk I/O in real-time"
```

## Best Practices

### Writing Effective Descriptions

**✅ Good Examples:**

- "list all files modified in the last 24 hours"
- "show running Docker containers with their resource usage"
- "backup the database to timestamped file"

**❌ Avoid:**

- "do something with files" (too vague)
- "ls -la" (already a command, describe the goal instead)
- "help" (use --help instead)

### Safety Guidelines

1. **Use `--dry-run` first** for unfamiliar operations
2. **Be specific** about what you want to accomplish
3. **Review generated commands** before execution
4. **Use `--confirm`** for system-critical operations
5. **Check command history** to track what was executed

### Profile Management

- Use different profiles for different environments (dev, staging, prod)
- Configure appropriate models for different complexity levels
- Set up dedicated profiles for specific use cases (security, development, etc.)

## Troubleshooting

### Common Issues

**"Command not found" errors**

- The generated command uses tools not installed on your system
- Install required tools or specify alternatives in your description

**Timeout errors**

- Increase timeout with `--timeout <seconds>`
- Use `--dry-run` to check if the command is appropriate

**Permission denied**

- Generated command requires elevated privileges
- Consider if `sudo` is needed or use a different approach

### Getting Better Results

1. **Be specific** about your environment and requirements
2. **Mention constraints** like operating system or available tools
3. **Use appropriate profiles** configured for your use case
4. **Provide context** about what you're trying to achieve

## Related Commands

- [`ask`](ask.md) - For general AI questions and explanations
- [`chat`](../commands/chat.md) - For interactive problem-solving sessions
- [`history`](history.md) - To review and manage exec command history
- [`configure`](configure.md) - To set up AI providers and profiles

## Examples by Category

### File Operations

```bash
rawi exec "find all JavaScript files larger than 1MB"
rawi exec "compress all log files older than 30 days"
rawi exec "copy all photos to backup directory"
```

### System Monitoring

```bash
rawi exec "show top 10 processes by CPU usage"
rawi exec "monitor memory usage every 5 seconds"
rawi exec "check network connectivity to specific host"
```

### Development

```bash
rawi exec "run TypeScript compiler in watch mode"
rawi exec "start Docker container with port mapping"
rawi exec "create new Git branch for feature development"
```

### Data Processing

```bash
rawi exec "extract specific columns from CSV file"
rawi exec "count lines in all Python files"
rawi exec "search for pattern in log files from last week"
```
