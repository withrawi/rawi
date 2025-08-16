import {input} from '@inquirer/prompts';
import chalk from 'chalk';
import {ConfigManager} from '../../../../core/configs/managers/config.manager.js';
import type {DatabaseManager} from '../../../../core/database/manager.js';
import {buildExecContext} from '../../../../core/exec/context.js';
import {
  executeCommand,
  formatExecutionResult,
  generateCommand,
  validateCommand,
} from '../../../../core/exec/index.js';
import {createConfirmationPrompt} from '../../../../core/exec/prompts.js';
import {DEFAULT_PROFILE} from '../../../../core/shared/constants.js';
import type {RawiCredentials} from '../../../../core/shared/index.js';
import type {ExecOptions, ExecResult} from '../types.js';

export async function validateCredentials(
  profile: string,
): Promise<{isValid: boolean; error?: string}> {
  try {
    const configManager = new ConfigManager();
    const credentials = configManager.getCredentials(profile);

    if (!credentials) {
      return {
        isValid: false,
        error: `No credentials found for profile '${profile}'`,
      };
    }

    if (!credentials.provider || !credentials.model) {
      return {
        isValid: false,
        error: `Invalid credentials for profile '${profile}' - missing provider or model`,
      };
    }

    return {isValid: true};
  } catch (error) {
    return {
      isValid: false,
      error: `Failed to validate credentials: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}

export async function validateProfile(
  profile: string,
): Promise<{isValid: boolean; error?: string}> {
  try {
    const configManager = new ConfigManager();
    const credentials = configManager.getCredentials(profile);

    if (!credentials) {
      return {
        isValid: false,
        error: `Profile '${profile}' not found. Run 'rawi configure --profile ${profile}' to set it up.`,
      };
    }

    return {isValid: true};
  } catch (error) {
    return {
      isValid: false,
      error: `Failed to validate profile: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}

export async function getProviderCredentials(
  profile: string,
): Promise<RawiCredentials> {
  const configManager = new ConfigManager();
  const credentials = configManager.getCredentials(profile);

  if (!credentials) {
    throw new Error(
      `No credentials found for profile '${profile}'. Run 'rawi configure --profile ${profile}' to set it up.`,
    );
  }

  if (!credentials.provider || !credentials.model) {
    throw new Error(
      `Invalid credentials for profile '${profile}' - missing provider or model`,
    );
  }

  return credentials;
}

export async function processExecCommand(
  description: string,
  options: ExecOptions,
): Promise<ExecResult> {
  console.log(chalk.dim('🤖 Generating command...'));

  const credentials = await getProviderCredentials(
    options.profile || DEFAULT_PROFILE,
  );

  if (options.verbose) {
    console.log(chalk.dim(`🔧 Using provider: ${credentials.provider}`));
    console.log(chalk.dim(`🤖 Using model: ${credentials.model}`));
  }

  const generated = await generateCommand({
    credentials,
    description,
    timeout: options.timeout ? Number(options.timeout) : undefined,
  });

  console.log(chalk.cyan(`🤖 Generated command: ${generated.command}`));

  // Get context for validation
  const context = await buildExecContext();
  const validation = validateCommand(generated.command, context);

  if (!validation.isValid) {
    throw new Error(
      `Invalid command generated: ${validation.warnings.join(', ')}`,
    );
  }

  if (validation.warnings.length > 0) {
    console.log(chalk.yellow('⚠️ Warnings:'));
    for (const warning of validation.warnings) {
      console.log(chalk.yellow(`  - ${warning}`));
    }
  }

  if ((validation.isDangerous || options.confirm) && !options.dryRun) {
    const shouldProceed = await input({
      message: createConfirmationPrompt(generated.command),
      default: 'N',
    });

    if (
      shouldProceed.toLowerCase() !== 'y' &&
      shouldProceed.toLowerCase() !== 'yes'
    ) {
      console.log(chalk.yellow('❌ Command execution cancelled.'));
      return {
        command: generated.command,
        stdout: undefined,
        stderr: 'Execution cancelled by user',
        exitCode: 1,
        executionTime: 0,
        success: false,
      };
    }
  }

  console.log(chalk.dim('⚡ Executing command...'));

  const result = await executeCommand({
    command: generated.command,
    shell: options.shell,
    cwd: options.workingDirectory,
    timeout: options.timeout ? Number(options.timeout) : undefined,
    dryRun: options.dryRun,
    skipToolValidation: options.skipToolValidation,
  });

  return result;
}

export async function saveExecSession(
  dbManager: DatabaseManager,
  description: string,
  result: ExecResult,
  options: ExecOptions,
): Promise<string> {
  try {
    const sessionId = await dbManager.createSession(
      options.profile || DEFAULT_PROFILE,
      `Exec: ${description}`,
      'exec',
    );

    await dbManager.addMessage(
      sessionId,
      'user',
      description,
      'exec',
      'command-generator',
      undefined,
      undefined,
      {
        type: 'exec_request',
        timestamp: new Date().toISOString(),
      },
    );

    const assistantContent = result.success
      ? `Generated command: \`${result.command}\`\n\nExecution result:\n${result.stdout || 'Command executed successfully'}`
      : `Generated command: \`${result.command}\`\n\nExecution failed:\n${result.stderr || 'Unknown error'}`;

    await dbManager.addMessage(
      sessionId,
      'assistant',
      assistantContent,
      'exec',
      'command-generator',
      undefined,
      undefined,
      {
        type: 'exec_result',
        command: result.command,
        success: result.success,
        exitCode: result.exitCode,
        executionTime: result.executionTime,
        timestamp: new Date().toISOString(),
      },
    );

    return sessionId;
  } catch (error) {
    console.error('Failed to save exec session to database:', error);
    return `exec-${Date.now()}`;
  }
}

export function displayExecResult(result: ExecResult, verbose: boolean): void {
  if (verbose) {
    console.log(formatExecutionResult(result));
  } else {
    if (result.success) {
      console.log(chalk.green('✅ Command executed successfully'));
      if (result.stdout) {
        console.log(result.stdout);
      }
    } else {
      console.log(chalk.red('❌ Command execution failed'));
      if (result.stderr) {
        console.error(result.stderr);
      }
    }
  }
}
