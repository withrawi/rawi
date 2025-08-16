import {exec} from 'node:child_process';
import os from 'node:os';
import {promisify} from 'node:util';
import type {OSInfo, ShellInfo, SystemInfo} from './types.js';

const execAsync = promisify(exec);

export async function detectOS(): Promise<OSInfo> {
  const platform = os.platform();
  const release = os.release();

  let type: OSInfo['type'];
  let version: string | undefined;

  switch (platform) {
    case 'win32':
      type = 'Windows';
      try {
        const {stdout} = await execAsync('ver');
        version = stdout.trim();
      } catch {
        version = release;
      }
      break;
    case 'darwin':
      type = 'Darwin';
      try {
        const {stdout} = await execAsync('sw_vers -productVersion');
        version = stdout.trim();
      } catch {
        version = release;
      }
      break;
    case 'linux':
      type = 'Linux';
      try {
        const {stdout} = await execAsync(
          "lsb_release -ds 2>/dev/null || cat /etc/os-release | grep PRETTY_NAME | cut -d= -f2 | tr -d '\"'",
        );
        version = stdout.trim() || release;
      } catch {
        version = release;
      }
      break;
    default:
      type = 'Unknown';
      version = release;
  }

  return {
    type,
    platform,
    release,
    version,
  };
}

export async function detectShell(): Promise<ShellInfo> {
  const shellPath = process.env.SHELL || process.env.ComSpec || '/bin/bash';
  const shellName = shellPath.split(/[/\\]/).pop() || 'unknown';

  let version: string | undefined;

  try {
    let versionCommand: string;

    switch (shellName.toLowerCase()) {
      case 'bash':
        versionCommand = 'bash --version | head -1';
        break;
      case 'zsh':
        versionCommand = 'zsh --version';
        break;
      case 'fish':
        versionCommand = 'fish --version';
        break;
      case 'cmd.exe':
      case 'cmd':
        versionCommand = 'ver';
        break;
      case 'powershell.exe':
      case 'pwsh.exe':
      case 'powershell':
      case 'pwsh':
        versionCommand =
          'pwsh -Command "$PSVersionTable.PSVersion.ToString()" 2>/dev/null || powershell -Command "$PSVersionTable.PSVersion.ToString()"';
        break;
      default:
        versionCommand = `${shellName} --version 2>/dev/null || echo "Unknown version"`;
    }

    const {stdout} = await execAsync(versionCommand);
    version = stdout.trim().split('\n')[0];
  } catch {}

  return {
    name: shellName,
    path: shellPath,
    version,
  };
}

export async function detectSystem(): Promise<SystemInfo> {
  const [osInfo, shellInfo] = await Promise.all([detectOS(), detectShell()]);

  return {
    os: osInfo,
    shell: shellInfo,
    architecture: os.arch(),
  };
}

export function getCommandCheckStrategy(osType: OSInfo['type']): string {
  switch (osType) {
    case 'Windows':
      return 'where';
    case 'Darwin':
    case 'Linux':
      return 'which';
    default:
      return 'which';
  }
}
