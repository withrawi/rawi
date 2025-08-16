import {exec} from 'node:child_process';
import {promisify} from 'node:util';
import type {ExecResult} from '../../cli/commands/exec/types.js';
import {
  formatInstallationSuggestions,
  validateCommandTools,
} from '../system/tool-detector.js';

const execAsync = promisify(exec);

export interface ExecuteCommandOptions {
  command: string;
  shell?: string;
  cwd?: string;
  timeout?: number;
  dryRun?: boolean;
  skipToolValidation?: boolean;
}

export async function executeCommand(
  options: ExecuteCommandOptions,
): Promise<ExecResult> {
  const startTime = Date.now();

  if (options.dryRun) {
    return {
      command: options.command,
      stdout: '[DRY RUN] Command would be executed here',
      stderr: undefined,
      exitCode: 0,
      executionTime: Date.now() - startTime,
      success: true,
    };
  }

  if (!options.skipToolValidation) {
    const validation = await validateCommandTools(options.command);

    if (!validation.canExecute) {
      const errorMessage =
        validation.errorMessage || 'Required tools not found';
      const installSuggestions = formatInstallationSuggestions(
        validation.missingTools,
      );

      return {
        command: options.command,
        stdout: undefined,
        stderr: `${errorMessage}${installSuggestions}`,
        exitCode: 127,
        executionTime: Date.now() - startTime,
        success: false,
      };
    }
  }

  try {
    if (options.command.includes('ssh-add')) {
      await ensureSSHAgent();
    }

    // Detect appropriate shell based on platform
    let defaultShell: string;
    if (process.platform === 'win32') {
      // On Windows, detect PowerShell vs cmd
      if (process.env.PSModulePath) {
        // We're in PowerShell, check if it's PowerShell Core (pwsh) or Windows PowerShell
        const isCore = process.env.PSEdition === 'Core' || 
                       process.env.POWERSHELL_DISTRIBUTION_CHANNEL?.includes('PowerShell') ||
                       process.env.PSVersionTable !== undefined;
        defaultShell = isCore ? 'pwsh.exe' : 'powershell.exe';
      } else {
        // We're in cmd.exe
        defaultShell = 'cmd.exe';
      }
    } else {
      // On Unix-like systems, use SHELL environment variable or bash
      defaultShell = process.env.SHELL || '/bin/bash';
    }

    const execOptions = {
      shell: options.shell || defaultShell,
      cwd: options.cwd || process.cwd(),
      timeout: options.timeout || 30000,
      maxBuffer: 1024 * 1024,
    };

    const {stdout, stderr} = await execAsync(options.command, execOptions);
    const executionTime = Date.now() - startTime;

    return {
      command: options.command,
      stdout: stdout || undefined,
      stderr: stderr || undefined,
      exitCode: 0,
      executionTime,
      success: true,
    };
  } catch (error: any) {
    const executionTime = Date.now() - startTime;

    return {
      command: options.command,
      stdout: error.stdout || undefined,
      stderr: error.stderr || error.message,
      exitCode: error.code || 1,
      executionTime,
      success: false,
    };
  }
}

async function ensureSSHAgent(): Promise<void> {
  if (process.env.SSH_AUTH_SOCK) {
    console.log('🔑 SSH agent is already running.');
    return;
  }

  console.log('🚀 Starting SSH agent...');
  try {
    const {stdout} = await execAsync('ssh-agent -s');
    stdout.split('\n').forEach((line) => {
      const match = line.match(/^(SSH_AUTH_SOCK|SSH_AGENT_PID)=(.*?);/);
      if (match) {
        process.env[match[1]] = match[2];
      }
    });

    if (!process.env.SSH_AUTH_SOCK) {
      throw new Error('Failed to start ssh-agent');
    }
  } catch (error) {
    console.warn('Warning: Could not start SSH agent:', error);
  }
}

export function formatExecutionResult(result: ExecResult): string {
  const lines: string[] = [];

  lines.push(`🤖 Command: ${result.command}`);
  lines.push(`⏱️  Execution time: ${result.executionTime}ms`);

  if (result.success) {
    lines.push('✅ Success');
    if (result.stdout) {
      lines.push('📄 Output:');
      lines.push(result.stdout);
    }
  } else {
    lines.push(`❌ Failed (exit code: ${result.exitCode})`);
    if (result.stderr) {
      lines.push('⚠️ Error:');
      lines.push(result.stderr);
    }
  }

  return lines.join('\n');
}
