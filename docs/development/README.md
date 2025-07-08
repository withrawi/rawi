# Development Guide

This guide covers how to set up, develop, and contribute to the Rawi CLI tool.

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) or npm
- **TypeScript** knowledge
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/mkabumattar/rawi.git
cd rawi

# Install dependencies
pnpm install

# Build the project
pnpm build

# Link for local development
pnpm link --global
```

### Project Structure

```
rawi/
├── src/                    # Source code
│   ├── cli/               # CLI commands and interface
│   ├── core/              # Core functionality
│   └── index.ts           # Main entry point
├── docs/                  # Documentation
│   ├── cli/               # CLI command docs
│   ├── core/              # Core module docs
│   └── development/       # Development guides
├── man/                   # Manual pages
├── dist/                  # Built output
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
├── tsup.config.ts         # Build configuration
└── vitest.config.ts       # Test configuration
```

## Development Workflow

### Building

```bash
# Development build with watch mode
pnpm dev

# Production build
pnpm build

# Type checking
pnpm type-check
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run specific test file
pnpm test src/core/config/manager.test.ts
```

### Linting and Formatting

```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check
```

## Code Organization

### Module Structure

Each module should follow this structure:

```
module/
├── index.ts              # Public API exports
├── manager.ts            # Main implementation
├── types.ts              # Type definitions
├── utils.ts              # Utility functions
├── constants.ts          # Constants
└── __tests__/            # Test files
    ├── manager.test.ts
    └── utils.test.ts
```

### Import/Export Conventions

```typescript
// Public API (index.ts)
export { ConfigManager } from "./manager.js";
export { validateApiKey } from "./utils.js";
export type { RawiCredentials } from "./types.js";

// Internal imports
import { DEFAULT_PROFILE } from "./constants.js";
import type { RawiCredentials } from "./types.js";
```

### File Extensions

- Use `.js` extensions in imports for ESM compatibility
- TypeScript files use `.ts` extension
- Test files use `.test.ts` extension

## Adding Features

### Adding New Commands

1. **Create Command File**:

```typescript
// src/cli/commands/newcommand.command.ts
import { Command } from "commander";

export const newCommand = new Command("new-command")
  .description("Description of new command")
  .option("-o, --option <value>", "Option description")
  .action(async (options) => {
    // Implementation
  });
```

2. **Export Command**:

```typescript
// src/cli/commands/index.ts
export { newCommand } from "./newcommand.command.js";
```

3. **Register Command**:

```typescript
// src/cli/program.ts
import { newCommand } from "./commands/index.js";

program.addCommand(newCommand);
```

4. **Add Documentation**:

```markdown
# docs/cli/newcommand.md

# rawi new-command

Description and usage examples.
```

### Adding New Providers

1. **Create Provider File**:

```typescript
// src/core/config/providers/newprovider.provider.ts
import type { ProviderConfig } from "../../shared/types.js";

export const newProviderConfig: ProviderConfig = {
  name: "newprovider",
  displayName: "New Provider",
  models: [{ name: "model-1", displayName: "Model 1" }],
};

export async function generateText(
  credentials: NewProviderCredentials,
  prompt: string
): Promise<string> {
  // Implementation
}
```

2. **Add Type Definitions**:

```typescript
// src/core/shared/types.ts
export interface NewProviderCredentials extends BaseCredentials {
  provider: "newprovider";
  apiKey: string;
}

export type SupportedProvider = "openai" | "anthropic" | "newprovider"; // Add here
```

3. **Register Provider**:

```typescript
// src/core/config/providers/index.ts
import {
  newProviderConfig,
  generateText as newProviderGenerate,
} from "./newprovider.provider.js";

const providers = {
  newprovider: {
    config: newProviderConfig,
    generateText: newProviderGenerate,
  },
};
```

### Adding Database Features

1. **Update Schema**:

```typescript
// src/core/database/schema/index.ts
export const migrations = [
  {
    version: 2,
    sql: `
      CREATE TABLE new_table (
        id TEXT PRIMARY KEY,
        data TEXT NOT NULL
      );
    `,
  },
];
```

2. **Update Adapter**:

```typescript
// src/core/database/adapter.ts
async newMethod(param: string): Promise<any> {
  const stmt = this.db.prepare('SELECT * FROM new_table WHERE id = ?');
  return stmt.get(param);
}
```

3. **Update Manager**:

```typescript
// src/core/database/manager.ts
async newFeature(param: string): Promise<any> {
  await this.ensureInitialized();
  return this.adapter.newMethod(param);
}
```

## Testing

### Test Structure

```typescript
// src/core/config/manager.test.ts
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { ConfigManager } from "./manager.js";

describe("ConfigManager", () => {
  let configManager: ConfigManager;

  beforeEach(() => {
    configManager = new ConfigManager();
  });

  afterEach(() => {
    // Cleanup
  });

  it("should get credentials", () => {
    const credentials = configManager.getCredentials("default");
    expect(credentials).toBeDefined();
  });

  it("should validate API key", () => {
    const isValid = configManager.validateApiKey("sk-test123");
    expect(isValid).toBe(true);
  });
});
```

### Test Utilities

```typescript
// src/test/utils.ts
export const createMockCredentials = (overrides = {}) => ({
  provider: "openai",
  model: "gpt-4o",
  apiKey: "sk-test123",
  temperature: 0.7,
  maxTokens: 2048,
  ...overrides,
});

export const createMockSession = (overrides = {}) => ({
  id: "test-session-id",
  profile: "default",
  title: "Test Session",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  messageCount: 0,
  ...overrides,
});
```

### Integration Tests

```typescript
// src/integration/cli.test.ts
import { execSync } from "child_process";
import { describe, it, expect } from "vitest";

describe("CLI Integration", () => {
  it("should show help", () => {
    const output = execSync("rawi --help", { encoding: "utf8" });
    expect(output).toContain("Usage: rawi");
  });

  it("should configure provider", () => {
    const output = execSync("rawi configure --show", { encoding: "utf8" });
    expect(output).toContain("Configuration");
  });
});
```

## Code Quality

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Linting Rules

```json
// .eslintrc.json
{
  "extends": ["@eslint/js", "@typescript-eslint/recommended"],
  "rules": {
    "no-console": "warn",
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

### Code Style

- Use **2 spaces** for indentation
- Use **single quotes** for strings
- Use **semicolons** at line endings
- Use **camelCase** for variables and functions
- Use **PascalCase** for classes and types
- Use **SCREAMING_SNAKE_CASE** for constants

## Documentation

### Code Comments

```typescript
/**
 * Manages configuration for AI providers
 */
export class ConfigManager {
  /**
   * Gets credentials for a specific profile
   * @param profile - The profile name (defaults to 'default')
   * @returns The credentials or null if not found
   */
  getCredentials(profile = DEFAULT_PROFILE): RawiCredentials | null {
    // Implementation
  }
}
```

### API Documentation

Use JSDoc comments for public APIs:

````typescript
/**
 * Validates an API key format
 * @param apiKey - The API key to validate
 * @returns True if valid, false otherwise
 * @example
 * ```typescript
 * const isValid = validateApiKey('sk-test123');
 * console.log(isValid); // true
 * ```
 */
export function validateApiKey(apiKey: string): boolean {
  return Boolean(apiKey && apiKey.trim().length > 0);
}
````

## Debugging

### Debug Mode

```typescript
// Enable debug logging
export const DEBUG_MODE = process.env.NODE_ENV === "development";

export const debugLog = (...args: any[]): void => {
  if (DEBUG_MODE) {
    console.log("[DEBUG]", ...args);
  }
};
```

### VS Code Configuration

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug CLI",
      "program": "${workspaceFolder}/dist/index.js",
      "args": ["ask", "test question"],
      "console": "integratedTerminal"
    }
  ]
}
```

## Release Process

### Version Management

```bash
# Update version
pnpm version patch|minor|major

# Build for release
pnpm build

# Publish to npm
pnpm publish
```

### Release Checklist

1. **Update version** in `package.json`
2. **Update documentation** if needed
3. **Run all tests** and ensure they pass
4. **Build project** and test locally
5. **Create release notes**
6. **Tag release** in git
7. **Publish to npm**

## Contributing

### Pull Request Process

1. **Fork** the repository
2. **Create feature branch** from `main`
3. **Make changes** following code style
4. **Add tests** for new functionality
5. **Update documentation** if needed
6. **Submit pull request**

### Commit Messages

Follow conventional commits:

```
feat(cli): add new command for provider management
fix(config): resolve issue with credential validation
docs(core): update database documentation
test(utils): add tests for utility functions
```

### Code Review Guidelines

- **Code Quality**: Ensure code follows project standards
- **Test Coverage**: Verify adequate test coverage
- **Documentation**: Check for updated documentation
- **Breaking Changes**: Identify and document breaking changes
- **Performance**: Consider performance implications

## Troubleshooting

### Common Issues

1. **Build Failures**: Check TypeScript configuration
2. **Import Errors**: Verify file extensions in imports
3. **Test Failures**: Check test setup and mocks
4. **CLI Issues**: Verify command registration
5. **Database Issues**: Check schema and migrations

### Debug Commands

```bash
# Check TypeScript compilation
pnpm tsc --noEmit

# Verbose test output
pnpm test --verbose

# Check bundle size
pnpm build --analyze

# Test CLI locally
node dist/index.js --help
```

This development guide provides a comprehensive overview of working with the Rawi codebase. Follow these guidelines to ensure consistent, high-quality contributions to the project.
