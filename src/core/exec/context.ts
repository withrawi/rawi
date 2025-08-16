import {exec} from 'node:child_process';
import os from 'node:os';
import {promisify} from 'node:util';
import type {ExecContext} from '../../cli/commands/exec/types.js';

const execAsync = promisify(exec);

export async function buildExecContext(): Promise<ExecContext> {
  let directoryListing = '';
  try {
    const lsCommand = process.platform === 'win32' ? 'dir' : 'ls -la';
    const {stdout} = await execAsync(lsCommand);
    directoryListing = stdout;
  } catch (error) {
    console.warn('Warning: Could not get directory listing:', error);
    directoryListing = 'Unable to get directory listing';
  }

  const cpus = os.cpus();
  const totalMem = os.totalmem();
  const freeMem = os.freemem();

  // Detect default shell based on platform
  let defaultShell = 'unknown';
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
    // On Unix-like systems, use SHELL environment variable
    defaultShell = process.env.SHELL || '/bin/bash';
  }

  return {
    os: {
      type: os.type(),
      release: os.release(),
      platform: os.platform(),
      arch: os.arch(),
    },
    node: {
      version: process.version,
    },
    shell: defaultShell,
    cwd: process.cwd(),
    home: os.homedir(),
    cpu: {
      model: cpus[0]?.model || 'unknown',
      cores: cpus.length,
    },
    memory: {
      total: Math.round(totalMem / 1024 / 1024),
      free: Math.round(freeMem / 1024 / 1024),
    },
    directoryListing,
  };
}

export function formatContextForPrompt(context: ExecContext): string {
  return `
--- ENVIRONMENT CONTEXT ---
Operating System: ${context.os.type} ${context.os.release} (${context.os.platform} - ${context.os.arch})
Node.js Version: ${context.node.version}
Shell: ${context.shell}
Current Working Directory: ${context.cwd}
Home Directory: ${context.home}
CPU Info: ${context.cpu.model} (${context.cpu.cores} cores)
Total Memory: ${context.memory.total} MB
Free Memory: ${context.memory.free} MB
--- END ENVIRONMENT CONTEXT ---

Current directory listing:
${context.directoryListing}
`.trim();
}
