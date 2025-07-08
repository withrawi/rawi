# CLI Architecture

The CLI module provides the command-line interface for the Rawi tool, built with a modular command structure.

## Overview

The CLI system includes:

- **Program Setup** - Main CLI configuration and argument parsing
- **Command System** - Modular command implementations
- **Interactive Prompts** - User input and configuration wizards
- **Error Handling** - Comprehensive error management

## Structure

```
src/cli/
├── index.ts          # CLI entry point
├── program.ts        # Main program configuration
└── commands/         # Individual command implementations
    ├── index.ts      # Command exports
    ├── ask.command.ts
    ├── act.command.ts
    ├── configure.command.ts
    ├── history.command.ts
    ├── info.command.ts
    └── provider.command.ts
```

## Program Configuration

The main program is configured in `program.ts`:

```typescript
import { Command } from "commander";
import { askCommand } from "./commands/ask.command.js";
import { actCommand } from "./commands/act.command.js";
import { configureCommand } from "./commands/configure.command.js";
import { historyCommand } from "./commands/history.command.js";
import { infoCommand } from "./commands/info.command.js";
import { providerCommand } from "./commands/provider.command.js";

const program = new Command();

program
  .name("rawi")
  .description("AI-powered CLI tool for developers")
  .version("0.0.5-beta.8");

// Register commands
program.addCommand(askCommand);
program.addCommand(actCommand);
program.addCommand(configureCommand);
program.addCommand(historyCommand);
program.addCommand(infoCommand);
program.addCommand(providerCommand);

export { program };
```

## Command Pattern

Each command follows a consistent pattern:

```typescript
import { Command } from "commander";
import { CommandOptions } from "../types.js";

export const myCommand = new Command("my-command")
  .description("Command description")
  .option("-o, --option <value>", "Option description")
  .action(async (options: CommandOptions) => {
    try {
      // Command implementation
      await executeCommand(options);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  });
```

## Command Implementations

### Ask Command

```typescript
// ask.command.ts
export const askCommand = new Command("ask")
  .description("Ask AI a question and get a response")
  .argument("[query]", "The question to ask")
  .option("-p, --profile <profile>", "Use a specific configuration profile")
  .option("-s, --session <sessionId>", "Continue an existing chat session")
  .option("-n, --new-session", "Start a new chat session")
  .option("--act <template>", "Use an act template for expert prompts")
  .option("--verbose", "Show detailed status and debug info")
  .action(async (query, options) => {
    // Implementation
  });
```

### Configure Command

```typescript
// configure.command.ts
export const configureCommand = new Command("configure")
  .description("Configure AI provider settings and manage profiles")
  .option("-p, --profile <profile>", "Profile name to configure")
  .option("--provider <provider>", "AI provider")
  .option("--model <model>", "AI model name")
  .option("--api-key <apiKey>", "API key for the provider")
  .option("-s, --show", "Show current configuration")
  .option("-l, --list", "List all profiles")
  .option("-d, --delete <profile>", "Delete a profile")
  .action(async (options) => {
    // Implementation
  });
```

### History Command

```typescript
// history.command.ts
export const historyCommand = new Command("history")
  .description("Manage chat history and sessions")
  .option("-l, --list", "List chat sessions")
  .option("-d, --delete <sessionId>", "Delete a session")
  .option("-c, --clear", "Clear all history")
  .option("-s, --search <query>", "Search chat history")
  .option("--limit <number>", "Limit number of results")
  .action(async (options) => {
    // Implementation
  });
```

## Error Handling

### Global Error Handler

```typescript
// In program.ts
program.exitOverride((err) => {
  if (err.code === "commander.help") {
    process.exit(0);
  }
  if (err.code === "commander.version") {
    process.exit(0);
  }
  console.error(chalk.red(`Error: ${err.message}`));
  process.exit(1);
});
```

### Command-Level Error Handling

```typescript
// In each command
.action(async (options) => {
  try {
    await executeCommand(options);
  } catch (error) {
    if (error instanceof ConfigurationError) {
      console.error(chalk.red(`Configuration error: ${error.message}`));
      console.log(chalk.yellow('Run "rawi configure" to set up your configuration'));
    } else if (error instanceof NetworkError) {
      console.error(chalk.red(`Network error: ${error.message}`));
      console.log(chalk.yellow('Please check your internet connection and try again'));
    } else {
      console.error(chalk.red(`Error: ${error.message}`));
    }
    process.exit(1);
  }
});
```

## Input Handling

### Stdin Support

```typescript
// Read from stdin if no argument provided
const getInput = async (argument?: string): Promise<string> => {
  if (argument) {
    return argument;
  }

  // Check if stdin has data
  if (process.stdin.isTTY) {
    throw new Error("No input provided");
  }

  // Read from stdin
  let input = "";
  process.stdin.setEncoding("utf8");

  for await (const chunk of process.stdin) {
    input += chunk;
  }

  return input.trim();
};
```

### Interactive Prompts

```typescript
import { input, select, confirm } from "@inquirer/prompts";

// Text input
const apiKey = await input({
  message: "Enter your API key:",
  mask: true,
  validate: (value) => {
    if (!value || value.length === 0) {
      return "API key is required";
    }
    return true;
  },
});

// Selection
const provider = await select({
  message: "Select AI provider:",
  choices: [
    { name: "OpenAI", value: "openai" },
    { name: "Anthropic", value: "anthropic" },
    { name: "Google", value: "google" },
  ],
});

// Confirmation
const proceed = await confirm({
  message: "Save configuration?",
  default: true,
});
```

## Output Formatting

### Consistent Styling

```typescript
import chalk from "chalk";

// Success messages
console.log(chalk.green("✓ Configuration saved successfully"));

// Error messages
console.error(chalk.red("✗ Failed to save configuration"));

// Warning messages
console.log(chalk.yellow("⚠ Warning: API key not provided"));

// Info messages
console.log(chalk.blue("ℹ Using default profile"));

// Highlighted text
console.log(`Profile: ${chalk.cyan("default")}`);
console.log(`Model: ${chalk.magenta("gpt-4o")}`);
```

### Tables and Lists

```typescript
// Table output
console.table([
  { Profile: "default", Provider: "OpenAI", Model: "gpt-4o" },
  { Profile: "work", Provider: "Anthropic", Model: "claude-3-opus" },
]);

// List output
const sessions = await db.getSessions();
sessions.forEach((session) => {
  console.log(`${session.id} - ${session.title} (${session.createdAt})`);
});
```

## Development Guidelines

### Adding New Commands

1. Create command file in `commands/`
2. Implement command using Commander.js
3. Add error handling
4. Export from `commands/index.ts`
5. Register in `program.ts`
6. Add documentation

### Command Structure Template

```typescript
// commands/newcommand.command.ts
import { Command } from "commander";
import chalk from "chalk";

interface NewCommandOptions {
  option1?: string;
  option2?: boolean;
}

export const newCommand = new Command("new-command")
  .description("Description of the new command")
  .option("-o, --option1 <value>", "Option description")
  .option("-f, --option2", "Flag description")
  .action(async (options: NewCommandOptions) => {
    try {
      // Validate options
      validateOptions(options);

      // Execute command logic
      await executeNewCommand(options);

      // Success message
      console.log(chalk.green("✓ Command completed successfully"));
    } catch (error) {
      console.error(chalk.red(`Error: ${error.message}`));
      process.exit(1);
    }
  });

async function executeNewCommand(options: NewCommandOptions): Promise<void> {
  // Implementation
}

function validateOptions(options: NewCommandOptions): void {
  // Validation logic
}
```

### Best Practices

1. **Consistent Error Handling**: Use try-catch blocks and meaningful error messages
2. **Input Validation**: Validate all user inputs
3. **Graceful Degradation**: Handle missing configurations gracefully
4. **User Feedback**: Provide clear feedback for all operations
5. **Help Text**: Include comprehensive help text
6. **Examples**: Provide usage examples in help text

### Testing Commands

```typescript
// Test command functionality
import { execSync } from "child_process";

describe("CLI Commands", () => {
  it("should show help", () => {
    const output = execSync("rawi --help", { encoding: "utf8" });
    expect(output).toContain("Usage: rawi [options] [command]");
  });

  it("should configure provider", () => {
    const output = execSync("rawi configure --show", { encoding: "utf8" });
    expect(output).toContain("Configuration:");
  });
});
```

## Integration Examples

### Using Core Modules

```typescript
// In command implementation
import { ConfigManager, DatabaseManager } from "../../core/index.js";

const configManager = new ConfigManager();
const dbManager = new DatabaseManager();

// Get configuration
const credentials = configManager.getCredentials(options.profile);

// Create session
const sessionId = await dbManager.createSession(
  options.profile || "default",
  "CLI Session"
);
```

### Provider Integration

```typescript
// Using providers in commands
import { getProvider } from "../../core/index.js";

const provider = getProvider(credentials.provider);
const response = await provider.generateText(credentials, prompt);
```

This CLI architecture provides a robust, extensible foundation for the Rawi tool with clear separation of concerns and consistent user experience patterns.
