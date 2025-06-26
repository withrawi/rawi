# Development Guide

Complete guide for contributing to Rawi, including setup, development workflow, and contribution guidelines.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **pnpm**: Version 8.0.0 or higher (recommended package manager)
- **Git**: Latest version
- **TypeScript**: Experience with TypeScript development

### Development Environment Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/MKAbuMattar/rawi.git
cd rawi
```

#### 2. Install Dependencies

```bash
# Install with pnpm (recommended)
pnpm install

# Or with npm
npm install

# Or with yarn
yarn install
```

#### 3. Build the Project

```bash
# Build for development
pnpm run build

# Or build with watch mode
pnpm run dev
```

#### 4. Run Development Version

```bash
# Run directly with tsx
pnpm run dev

# Or test built version
node dist/index.js --help
```

#### 5. Set Up Development Configuration

```bash
# Create a development profile
node dist/index.js configure --profile dev --provider ollama --model llama3.2

# Test the setup
node dist/index.js ask "Hello, world!" --profile dev
```

## 📝 Available Scripts

| Script                   | Description                         |
| ------------------------ | ----------------------------------- |
| `pnpm run build`         | Build the project for production    |
| `pnpm run dev`           | Run the project in development mode |
| `pnpm run start`         | Run the built project               |
| `pnpm run test`          | Run the test suite                  |
| `pnpm run test:coverage` | Run tests with coverage report      |
| `pnpm run lint`          | Lint the codebase                   |
| `pnpm run lint:fix`      | Lint and fix auto-fixable issues    |
| `pnpm run fmt`           | Check code formatting               |
| `pnpm run fmt:fix`       | Format code                         |
| `pnpm run typecheck`     | Run TypeScript type checking        |

## 🏗️ Project Structure Deep Dive

### Core Directories

```
src/
├── cli/                    # Command-line interface
├── config/                 # Configuration management
├── database/               # Data persistence
├── shared/                 # Shared utilities
└── data/                   # Static data
```

### Development Files

```
.
├── biome.jsonc            # Biome configuration (linting & formatting)
├── tsconfig.json          # TypeScript configuration
├── tsup.config.ts         # Build configuration
├── vite.config.mts        # Vite configuration
├── vitest.config.ts       # Test configuration
└── package.json           # Package configuration
```

## 🧪 Testing

### Test Structure

```
tests/ (to be created)
├── unit/                  # Unit tests
│   ├── cli/
│   ├── config/
│   ├── database/
│   └── shared/
├── integration/           # Integration tests
├── e2e/                   # End-to-end tests
└── fixtures/              # Test data and mocks
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run specific test file
pnpm test src/config/manager.test.ts

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

#### Unit Test Example

```typescript
// src/config/manager.test.ts
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { ConfigManager } from "./manager.js";
import type { RawiCredentials } from "../shared/types.js";

describe("ConfigManager", () => {
  let configManager: ConfigManager;

  beforeEach(() => {
    configManager = new ConfigManager();
  });

  afterEach(() => {
    // Cleanup test files
  });

  it("should create a new profile", () => {
    const credentials: RawiCredentials = {
      provider: "openai",
      model: "gpt-4o",
      temperature: 0.7,
      maxTokens: 2048,
      providerSettings: {
        apiKey: "sk-test-key",
      },
    };

    configManager.setCredentials(credentials, "test");
    const retrieved = configManager.getCredentials("test");

    expect(retrieved).toEqual(credentials);
  });
});
```

#### Integration Test Example

```typescript
// tests/integration/cli.test.ts
import { describe, it, expect } from "vitest";
import { execSync } from "child_process";

describe("CLI Integration", () => {
  it("should show help when run without arguments", () => {
    const output = execSync("node dist/index.js", { encoding: "utf8" });
    expect(output).toContain("Usage:");
    expect(output).toContain("ask");
    expect(output).toContain("configure");
  });

  it("should handle configure command", () => {
    const output = execSync("node dist/index.js configure --help", {
      encoding: "utf8",
    });
    expect(output).toContain("Configure Rawi AI settings");
  });
});
```

## 🔧 Code Style and Standards

### TypeScript Configuration

The project uses strict TypeScript settings:

```json
// tsconfig.json highlights
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
```

### Linting and Formatting

The project uses [Biome](https://biomejs.dev/) for linting and formatting:

```bash
# Check code style
pnpm run lint

# Fix auto-fixable issues
pnpm run lint:fix

# Format code
pnpm run fmt:fix
```

### Code Style Guidelines

#### 1. File Naming

- Use kebab-case for files: `user-manager.ts`
- Use PascalCase for classes: `ConfigManager`
- Use camelCase for functions and variables: `getUserCredentials`

#### 2. Import/Export Patterns

```typescript
// Use explicit imports
import { ConfigManager } from "./config/manager.js";
import type { RawiCredentials } from "./shared/types.js";

// Use named exports
export { ConfigManager };
export type { RawiCredentials };

// Use re-exports in index files
export * from "./manager.js";
export * from "./utils.js";
```

#### 3. Error Handling

```typescript
// Use specific error types
class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConfigurationError";
  }
}

// Handle errors gracefully
try {
  const config = await loadConfig();
  return config;
} catch (error) {
  if (error instanceof ConfigurationError) {
    console.error(`Configuration error: ${error.message}`);
    process.exit(2);
  }
  throw error;
}
```

#### 4. Async/Await

```typescript
// Prefer async/await over Promises
async function processQuery(query: string): Promise<string> {
  try {
    const response = await apiCall(query);
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw new Error("Failed to process query");
  }
}

// Handle multiple async operations
async function processMultiple(queries: string[]): Promise<string[]> {
  const results = await Promise.all(
    queries.map((query) => processQuery(query))
  );
  return results;
}
```

#### 5. Type Definitions

```typescript
// Use specific types over 'any'
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Use union types for known values
type LogLevel = "debug" | "info" | "warn" | "error";

// Use generics for reusable types
interface Repository<T> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}
```

## 🛠️ Development Workflow

### 1. Feature Development

#### Step 1: Create Feature Branch

```bash
git checkout main
git pull origin main
git checkout -b feature/new-provider-support
```

#### Step 2: Implement Feature

```bash
# Make your changes
# Add tests
# Update documentation

# Test your changes
pnpm test
pnpm run lint
pnpm run typecheck
```

#### Step 3: Commit Changes

```bash
# Use conventional commits
git add .
git commit -m "feat: add support for new AI provider"

# Or for fixes
git commit -m "fix: resolve configuration validation issue"

# Or for documentation
git commit -m "docs: update provider setup guide"
```

#### Step 4: Create Pull Request

```bash
git push origin feature/new-provider-support
# Create PR on GitHub
```

### 2. Bug Fix Workflow

#### Step 1: Reproduce the Bug

```bash
# Create test that reproduces the bug
# Document the expected vs actual behavior
```

#### Step 2: Fix the Issue

```bash
# Implement the fix
# Ensure the test passes
# Verify no regression
```

#### Step 3: Submit Fix

```bash
git commit -m "fix: resolve issue with API key validation"
```

### 3. Adding New Providers

#### Step 1: Create Provider Configuration

```typescript
// src/config/providers/new-provider.provider.ts
import type { ProviderConfig } from "../../shared/types.js";

export const newProvider: ProviderConfig = {
  name: "new-provider",
  displayName: "🆕 New Provider",
  models: [
    {
      name: "model-1",
      displayName: "Model 1",
      description: "Primary model",
    },
  ],
};
```

#### Step 2: Add Provider Settings Type

```typescript
// In src/shared/types.ts
export interface NewProviderSettings {
  apiKey: string;
  baseURL?: string;
  customOption?: string;
}

// Update ProviderSettings union
export type ProviderSettings =
  | OllamaSettings
  | GoogleSettings
  | OpenAISettings
  | AnthropicSettings
  | XAISettings
  | AzureSettings
  | BedrockSettings
  | QwenSettings
  | NewProviderSettings; // Add this line

// Update SupportedProvider union
export type SupportedProvider =
  | "anthropic"
  | "google"
  | "ollama"
  | "openai"
  | "xai"
  | "azure"
  | "bedrock"
  | "qwen"
  | "new-provider"; // Add this line
```

#### Step 3: Register Provider

```typescript
// In src/config/providers/index.ts
import { newProvider } from "./new-provider.provider.js";

export const providers: Record<SupportedProvider, ProviderConfig> = {
  // ... existing providers
  "new-provider": newProvider,
};
```

#### Step 4: Add Configuration Logic

```typescript
// In src/cli/commands/configure.command.ts
// Add configuration logic for the new provider
```

#### Step 5: Add Ask Command Support

```typescript
// In src/cli/commands/ask.command.ts
// Add API call logic for the new provider
```

### 4. Adding New Commands

#### Step 1: Create Command File

```typescript
// src/cli/commands/new-command.command.ts
import { Command } from "commander";

export const createNewCommand = (): Command => {
  const command = new Command("new-command");

  return command
    .description("Description of the new command")
    .option("--option <value>", "Command option")
    .action(async (options) => {
      console.log("New command executed with options:", options);
    });
};
```

#### Step 2: Register Command

```typescript
// In src/cli/commands/index.ts
export * from "./new-command.command.js";

// In src/cli/program.ts
import { createNewCommand } from "./commands/index.js";

// Add to program
program.addCommand(createNewCommand());
```

## 🔍 Debugging

### 1. Development Debugging

#### Using Console Logs

```typescript
// Add temporary debug logs
console.log("Debug: Configuration loaded:", config);
console.error("Error occurred:", error);

// Use conditional logging
if (process.env.DEBUG) {
  console.log("Debug info:", data);
}
```

#### Using Node.js Debugger

```bash
# Run with debugger
node --inspect-brk dist/index.js ask "test question"

# Connect with Chrome DevTools
# Open chrome://inspect in Chrome
```

### 2. Production Debugging

#### Error Tracking

```typescript
// Add error context
try {
  await processRequest();
} catch (error) {
  console.error("Request processing failed:", {
    error: error.message,
    stack: error.stack,
    context: { user: "test", action: "ask" },
  });
  throw error;
}
```

#### Logging Best Practices

```typescript
// Use structured logging
const logContext = {
  command: "ask",
  profile: "default",
  provider: "openai",
  model: "gpt-4o",
};

console.log("Processing request:", logContext);
```

## 📚 Documentation

### 1. Code Documentation

#### JSDoc Comments

````typescript
/**
 * Processes a user query using the configured AI provider
 * @param query - The user's question or prompt
 * @param options - Configuration options for the request
 * @returns Promise that resolves to the AI response
 * @throws {ConfigurationError} When provider is not configured
 * @throws {NetworkError} When API request fails
 *
 * @example
 * ```typescript
 * const response = await processQuery("What is TypeScript?", {
 *   provider: "openai",
 *   model: "gpt-4o"
 * });
 * ```
 */
async function processQuery(
  query: string,
  options: QueryOptions
): Promise<string> {
  // Implementation
}
````

#### README Updates

When adding features, update relevant documentation:

- Main README.md
- docs/ files
- Code examples
- Configuration guides

### 2. Commit Messages

Follow conventional commit format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:

```
feat(providers): add support for Claude 3.5 Sonnet

Add configuration and API integration for Anthropic's
latest Claude 3.5 Sonnet model with improved reasoning.

Closes #123
```

```
fix(config): resolve API key validation for Azure OpenAI

The validation was incorrectly rejecting valid Azure API keys
due to different format requirements.

Fixes #456
```

## 🚀 Release Process

### 1. Version Management

The project uses semantic versioning (semver):

- `MAJOR.MINOR.PATCH`
- `MAJOR`: Breaking changes
- `MINOR`: New features (backwards compatible)
- `PATCH`: Bug fixes (backwards compatible)

### 2. Release Workflow

#### Step 1: Prepare Release

```bash
# Update version in package.json
# Update CHANGELOG.md
# Ensure all tests pass
pnpm test

# Build and verify
pnpm run build
```

#### Step 2: Create Release

```bash
# Create release branch
git checkout -b release/v1.2.0

# Commit version changes
git commit -m "chore: bump version to 1.2.0"

# Create tag
git tag v1.2.0

# Push changes
git push origin release/v1.2.0
git push origin v1.2.0
```

#### Step 3: Publish

```bash
# Publish to npm
pnpm publish

# Create GitHub release
# Update documentation
```

## 🤝 Contributing Guidelines

### 1. Before Contributing

- Check existing issues and PRs
- Discuss major changes in an issue first
- Ensure you can commit to maintaining the feature

### 2. Pull Request Process

#### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Tests added for new functionality
- [ ] Documentation updated
- [ ] All tests pass
- [ ] No linting errors
- [ ] Commit messages follow conventional format

#### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Documentation

- [ ] Code comments added
- [ ] README updated
- [ ] Documentation updated
```

### 3. Code Review Process

#### As a Contributor

- Respond to review comments promptly
- Make requested changes
- Update tests and documentation as needed

#### As a Reviewer

- Be constructive and helpful
- Focus on code quality and maintainability
- Check for security issues
- Verify tests cover new functionality

## 📊 Performance Guidelines

### 1. Optimization Best Practices

#### Memory Usage

```typescript
// Use streams for large data
import { createReadStream } from "fs";

async function processLargeFile(filePath: string) {
  const stream = createReadStream(filePath);
  // Process in chunks
}

// Clean up resources
async function cleanup() {
  await database.close();
  spinner.clear();
}
```

#### Async Operations

```typescript
// Use Promise.all for concurrent operations
const [config, session, providers] = await Promise.all([
  loadConfig(),
  getCurrentSession(),
  loadProviders(),
]);

// Use async iterators for large datasets
async function* processMessages(sessionId: string) {
  for await (const message of database.getMessages(sessionId)) {
    yield processMessage(message);
  }
}
```

### 2. Monitoring Performance

#### Timing Operations

```typescript
async function timedOperation<T>(
  operation: () => Promise<T>,
  name: string
): Promise<T> {
  const start = Date.now();
  try {
    const result = await operation();
    const duration = Date.now() - start;
    console.log(`${name} completed in ${duration}ms`);
    return result;
  } catch (error) {
    const duration = Date.now() - start;
    console.error(`${name} failed after ${duration}ms:`, error);
    throw error;
  }
}
```

## 🔒 Security Guidelines

### 1. Secure Coding Practices

#### Input Validation

```typescript
function validateApiKey(key: string): boolean {
  // Validate format
  if (typeof key !== "string") return false;
  if (key.length < 20) return false;

  // Validate pattern (example for OpenAI)
  if (key.startsWith("sk-") && key.length === 51) return true;

  return false;
}
```

#### Secure Storage

```typescript
import { createCipher, createDecipher } from "crypto";

function encryptApiKey(key: string, password: string): string {
  const cipher = createCipher("aes192", password);
  let encrypted = cipher.update(key, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}
```

### 2. Security Review Checklist

- [ ] No hardcoded secrets
- [ ] Input validation implemented
- [ ] Secure file permissions
- [ ] No sensitive data in logs
- [ ] Dependencies regularly updated
- [ ] Error messages don't leak information

## 🆘 Getting Help

### 1. Community Support

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For general questions and ideas
- **Discord**: Real-time community chat (coming soon)

### 2. Development Resources

- **TypeScript Docs**: https://www.typescriptlang.org/docs/
- **Commander.js**: https://github.com/tj/commander.js
- **Vitest**: https://vitest.dev/
- **Biome**: https://biomejs.dev/

### 3. Contact

- **Maintainer**: Mohammad Abu Mattar
- **Email**: mohammad.khaled@outlook.com
- **GitHub**: @MKAbuMattar

Thank you for contributing to Rawi! 🎉
