import {exec} from 'node:child_process';
import os from 'node:os';
import {promisify} from 'node:util';
import type {LinuxDistro, OSInfo, ShellInfo, SystemInfo} from './types.js';

const execAsync = promisify(exec);

export async function detectLinuxDistro(): Promise<LinuxDistro> {
  try {
    // Try to detect Linux distribution
    const distroInfo: LinuxDistro = {
      name: 'Unknown',
      family: 'Unknown',
      packageManager: 'unknown',
    };

    // Try reading /etc/os-release first (most modern distributions)
    try {
      const {stdout} = await execAsync('cat /etc/os-release');
      const lines = stdout.split('\n');
      const info: Record<string, string> = {};

      for (const line of lines) {
        const [key, value] = line.split('=');
        if (key && value) {
          info[key] = value.replace(/"/g, '');
        }
      }

      distroInfo.name = info.NAME || info.ID || 'Unknown';
      distroInfo.version = info.VERSION || info.VERSION_ID;

      // Determine family and package manager based on ID or NAME
      const id = (info.ID || info.NAME || '').toLowerCase();
      const idLike = (info.ID_LIKE || '').toLowerCase();

      if (
        id.includes('arch') ||
        id.includes('manjaro') ||
        id.includes('endeavour')
      ) {
        distroInfo.family = 'Arch';
        distroInfo.packageManager = 'pacman';
      } else if (
        id.includes('ubuntu') ||
        id.includes('debian') ||
        id.includes('mint') ||
        idLike.includes('debian')
      ) {
        distroInfo.family = 'Debian';
        distroInfo.packageManager = 'apt';
      } else if (id.includes('fedora')) {
        distroInfo.family = 'Fedora';
        distroInfo.packageManager = 'dnf';
      } else if (
        id.includes('rhel') ||
        id.includes('centos') ||
        id.includes('rocky') ||
        id.includes('alma') ||
        idLike.includes('rhel')
      ) {
        distroInfo.family = 'RedHat';
        distroInfo.packageManager =
          id.includes('centos') && !id.includes('centos:8') ? 'yum' : 'dnf';
      } else if (
        id.includes('suse') ||
        id.includes('opensuse') ||
        idLike.includes('suse')
      ) {
        distroInfo.family = 'SUSE';
        distroInfo.packageManager = 'zypper';
      }
    } catch {
      // Fallback: try other methods
      try {
        // Try lsb_release
        const {stdout} = await execAsync('lsb_release -is');
        const distro = stdout.trim().toLowerCase();

        if (distro.includes('ubuntu') || distro.includes('debian')) {
          distroInfo.family = 'Debian';
          distroInfo.packageManager = 'apt';
          distroInfo.name = stdout.trim();
        }
      } catch {
        // Try checking for specific package managers
        try {
          await execAsync('which pacman');
          distroInfo.family = 'Arch';
          distroInfo.packageManager = 'pacman';
        } catch {
          try {
            await execAsync('which apt');
            distroInfo.family = 'Debian';
            distroInfo.packageManager = 'apt';
          } catch {
            try {
              await execAsync('which dnf');
              distroInfo.family = 'Fedora';
              distroInfo.packageManager = 'dnf';
            } catch {
              try {
                await execAsync('which yum');
                distroInfo.family = 'RedHat';
                distroInfo.packageManager = 'yum';
              } catch {
                try {
                  await execAsync('which zypper');
                  distroInfo.family = 'SUSE';
                  distroInfo.packageManager = 'zypper';
                } catch {
                  // Unknown distribution
                }
              }
            }
          }
        }
      }
    }

    return distroInfo;
  } catch {
    return {
      name: 'Unknown',
      family: 'Unknown',
      packageManager: 'unknown',
    };
  }
}

export async function detectOS(): Promise<OSInfo> {
  const platform = os.platform();
  const release = os.release();

  let type: OSInfo['type'];
  let version: string | undefined;
  let distro: LinuxDistro | undefined;

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
      distro = await detectLinuxDistro();
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
    distro,
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
