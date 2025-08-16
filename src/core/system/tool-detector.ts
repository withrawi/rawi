import {exec} from 'node:child_process';
import {promisify} from 'node:util';
import {detectOS, getCommandCheckStrategy} from './detector.js';
import type {
  CommandValidationResult,
  InstallCommand,
  OSInfo,
  ToolDetectionResult,
} from './types.js';

const execAsync = promisify(exec);

const TOOL_INSTALL_COMMANDS: Record<string, InstallCommand[]> = {
  kubectl: [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S kubectl'],
      notes: 'Install via Pacman package manager',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: [
        'curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg',
        'echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list',
        'sudo apt update && sudo apt install -y kubectl',
      ],
      notes: 'Official Kubernetes repository for Debian/Ubuntu',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: [
        'cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://pkgs.k8s.io/core:/stable:/v1.28/rpm/\nenabled=1\ngpgcheck=1\ngpgkey=https://pkgs.k8s.io/core:/stable:/v1.28/rpm/repodata/repomd.xml.key\nEOF',
        'sudo yum install -y kubectl',
      ],
      notes: 'Official Kubernetes repository for RHEL/CentOS',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: [
        'cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://pkgs.k8s.io/core:/stable:/v1.28/rpm/\nenabled=1\ngpgcheck=1\ngpgkey=https://pkgs.k8s.io/core:/stable:/v1.28/rpm/repodata/repomd.xml.key\nEOF',
        'sudo dnf install -y kubectl',
      ],
      notes: 'Official Kubernetes repository for Fedora',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: [
        'sudo zypper addrepo https://pkgs.k8s.io/core:/stable:/v1.28/rpm/ kubernetes',
        'sudo zypper refresh',
        'sudo zypper install -y kubectl',
      ],
      notes: 'Official Kubernetes repository for openSUSE',
    },
    {
      os: 'Darwin',
      packageManager: 'brew',
      commands: ['brew install kubectl'],
      notes: 'Install via Homebrew',
    },
    {
      os: 'Windows',
      packageManager: 'choco',
      commands: ['choco install kubernetes-cli'],
      notes: 'Install via Chocolatey',
    },
  ],
  docker: [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: [
        'sudo pacman -S docker',
        'sudo systemctl enable docker',
        'sudo systemctl start docker',
      ],
      notes: 'Install Docker via Pacman',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: [
        'sudo apt update',
        'sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release',
        'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg',
        'echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null',
        'sudo apt update && sudo apt install -y docker-ce docker-ce-cli containerd.io',
      ],
      notes: 'Official Docker repository for Debian/Ubuntu',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: [
        'sudo yum install -y yum-utils',
        'sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo',
        'sudo yum install -y docker-ce docker-ce-cli containerd.io',
        'sudo systemctl enable docker && sudo systemctl start docker',
      ],
      notes: 'Official Docker repository for RHEL/CentOS',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: [
        'sudo dnf -y install dnf-plugins-core',
        'sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo',
        'sudo dnf install -y docker-ce docker-ce-cli containerd.io',
        'sudo systemctl enable docker && sudo systemctl start docker',
      ],
      notes: 'Official Docker repository for Fedora',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: [
        'sudo zypper addrepo https://download.docker.com/linux/sles/docker-ce.repo',
        'sudo zypper refresh',
        'sudo zypper install -y docker-ce docker-ce-cli containerd.io',
        'sudo systemctl enable docker && sudo systemctl start docker',
      ],
      notes: 'Official Docker repository for SUSE',
    },
    {
      os: 'Darwin',
      packageManager: 'brew',
      commands: ['brew install --cask docker'],
      notes: 'Install Docker Desktop via Homebrew',
    },
    {
      os: 'Windows',
      packageManager: 'choco',
      commands: ['choco install docker-desktop'],
      notes: 'Install Docker Desktop via Chocolatey',
    },
  ],
  git: [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S git'],
      notes: 'Install via Pacman package manager',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install -y git'],
      notes: 'Install via APT package manager',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: ['sudo yum install -y git'],
      notes: 'Install via YUM package manager',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: ['sudo dnf install -y git'],
      notes: 'Install via DNF package manager',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: ['sudo zypper install -y git'],
      notes: 'Install via Zypper package manager',
    },
    {
      os: 'Darwin',
      packageManager: 'xcode',
      commands: ['xcode-select --install'],
      notes: 'Install via Xcode Command Line Tools',
    },
    {
      os: 'Windows',
      packageManager: 'choco',
      commands: ['choco install git'],
      notes: 'Install via Chocolatey',
    },
  ],
  openssl: [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S openssl'],
      notes: 'Usually pre-installed on Arch Linux',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install -y openssl'],
      notes: 'Usually pre-installed on most Debian-based distributions',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: ['sudo yum install -y openssl'],
      notes: 'Usually pre-installed on RHEL/CentOS',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: ['sudo dnf install -y openssl'],
      notes: 'Usually pre-installed on Fedora',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: ['sudo zypper install -y openssl'],
      notes: 'Usually pre-installed on SUSE',
    },
    {
      os: 'Darwin',
      packageManager: 'brew',
      commands: ['brew install openssl'],
      notes: 'macOS has LibreSSL by default, use this for OpenSSL',
    },
    {
      os: 'Windows',
      packageManager: 'choco',
      commands: ['choco install openssl'],
      notes: 'Install via Chocolatey',
    },
  ],
  'ssh-keygen': [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S openssh'],
      notes: 'Usually pre-installed on Arch Linux',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install -y openssh-client'],
      notes: 'Usually pre-installed on most Debian-based distributions',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: ['sudo yum install -y openssh-clients'],
      notes: 'Usually pre-installed on RHEL/CentOS',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: ['sudo dnf install -y openssh-clients'],
      notes: 'Usually pre-installed on Fedora',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: ['sudo zypper install -y openssh'],
      notes: 'Usually pre-installed on SUSE',
    },
    {
      os: 'Darwin',
      packageManager: 'builtin',
      commands: ['# ssh-keygen is pre-installed on macOS'],
      notes: 'Pre-installed with macOS',
    },
    {
      os: 'Windows',
      packageManager: 'builtin',
      commands: ['# ssh-keygen is available in Windows 10+ OpenSSH'],
      notes: 'Available in Windows 10+ via OpenSSH feature',
    },
  ],
  gpg: [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S gnupg'],
      notes: 'GNU Privacy Guard for encryption and signing',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install -y gnupg'],
      notes: 'GNU Privacy Guard for encryption and signing',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: ['sudo yum install -y gnupg2'],
      notes: 'GNU Privacy Guard for encryption and signing',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: ['sudo dnf install -y gnupg2'],
      notes: 'GNU Privacy Guard for encryption and signing',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: ['sudo zypper install -y gpg2'],
      notes: 'GNU Privacy Guard for encryption and signing',
    },
    {
      os: 'Darwin',
      packageManager: 'brew',
      commands: ['brew install gnupg'],
      notes: 'Install via Homebrew',
    },
    {
      os: 'Windows',
      packageManager: 'choco',
      commands: ['choco install gnupg'],
      notes: 'Install via Chocolatey, or download from gnupg.org',
    },
  ],
  certtool: [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S gnutls'],
      notes: 'Part of GnuTLS tools for certificate handling',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install -y gnutls-bin'],
      notes: 'Part of GnuTLS tools for certificate handling',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: ['sudo yum install -y gnutls-utils'],
      notes: 'Part of GnuTLS tools for certificate handling',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: ['sudo dnf install -y gnutls-utils'],
      notes: 'Part of GnuTLS tools for certificate handling',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: ['sudo zypper install -y gnutls'],
      notes: 'Part of GnuTLS tools for certificate handling',
    },
    {
      os: 'Darwin',
      packageManager: 'brew',
      commands: ['brew install gnutls'],
      notes: 'Install GnuTLS via Homebrew',
    },
    {
      os: 'Windows',
      packageManager: 'manual',
      commands: ['# Download from gnutls.org or use WSL'],
      notes: 'Consider using WSL or native Windows alternatives',
    },
  ],
  keytool: [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S jdk-openjdk'],
      notes: 'Included with Java Development Kit (JDK)',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install -y openjdk-11-jdk'],
      notes: 'Included with Java Development Kit (JDK)',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: ['sudo yum install -y java-11-openjdk-devel'],
      notes: 'Included with Java Development Kit (JDK)',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: ['sudo dnf install -y java-11-openjdk-devel'],
      notes: 'Included with Java Development Kit (JDK)',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: ['sudo zypper install -y java-11-openjdk-devel'],
      notes: 'Included with Java Development Kit (JDK)',
    },
    {
      os: 'Darwin',
      packageManager: 'brew',
      commands: ['brew install openjdk'],
      notes: 'Install OpenJDK via Homebrew',
    },
    {
      os: 'Windows',
      packageManager: 'choco',
      commands: ['choco install openjdk'],
      notes: 'Install OpenJDK via Chocolatey',
    },
  ],
  'pkcs11-tool': [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S opensc'],
      notes: 'Part of OpenSC toolkit for smart card operations',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install -y opensc'],
      notes: 'Part of OpenSC toolkit for smart card operations',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: ['sudo yum install -y opensc'],
      notes: 'Part of OpenSC toolkit for smart card operations',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: ['sudo dnf install -y opensc'],
      notes: 'Part of OpenSC toolkit for smart card operations',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: ['sudo zypper install -y opensc'],
      notes: 'Part of OpenSC toolkit for smart card operations',
    },
    {
      os: 'Darwin',
      packageManager: 'brew',
      commands: ['brew install opensc'],
      notes: 'Install OpenSC via Homebrew',
    },
    {
      os: 'Windows',
      packageManager: 'manual',
      commands: ['# Download from opensc-project.org'],
      notes: 'Download from OpenSC project website',
    },
  ],
  dropbearkey: [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S dropbear'],
      notes: 'Lightweight SSH server with key generation tools',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install -y dropbear'],
      notes: 'Lightweight SSH server with key generation tools',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: ['sudo yum install -y dropbear'],
      notes: 'Lightweight SSH server with key generation tools',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: ['sudo dnf install -y dropbear'],
      notes: 'Lightweight SSH server with key generation tools',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: ['sudo zypper install -y dropbear'],
      notes: 'Lightweight SSH server with key generation tools',
    },
    {
      os: 'Darwin',
      packageManager: 'brew',
      commands: ['brew install dropbear'],
      notes: 'Install Dropbear via Homebrew',
    },
    {
      os: 'Windows',
      packageManager: 'manual',
      commands: ['# Use WSL or consider PuTTY alternatives'],
      notes: 'Consider using WSL or PuTTY tools instead',
    },
  ],
  puttygen: [
    {
      os: 'Linux-Arch',
      packageManager: 'pacman',
      commands: ['sudo pacman -S putty'],
      notes: 'PuTTY key generation tool',
    },
    {
      os: 'Linux-Debian',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install -y putty-tools'],
      notes: 'PuTTY key generation tool',
    },
    {
      os: 'Linux-RedHat',
      packageManager: 'yum',
      commands: ['sudo yum install -y putty'],
      notes: 'PuTTY key generation tool',
    },
    {
      os: 'Linux-Fedora',
      packageManager: 'dnf',
      commands: ['sudo dnf install -y putty'],
      notes: 'PuTTY key generation tool',
    },
    {
      os: 'Linux-SUSE',
      packageManager: 'zypper',
      commands: ['sudo zypper install -y putty'],
      notes: 'PuTTY key generation tool',
    },
    {
      os: 'Darwin',
      packageManager: 'brew',
      commands: ['brew install putty'],
      notes: 'Install PuTTY tools via Homebrew',
    },
    {
      os: 'Windows',
      packageManager: 'manual',
      commands: ['# Download from putty.org'],
      notes: 'Download PuTTY suite from official website',
    },
  ],
};

export async function detectTool(
  toolName: string,
): Promise<ToolDetectionResult> {
  const osInfo = await detectOS();
  const checkStrategy = getCommandCheckStrategy(osInfo.type);

  try {
    const {stdout} = await execAsync(`${checkStrategy} ${toolName}`);
    const toolPath = stdout.trim().split('\n')[0];

    if (!toolPath) {
      return createNotFoundResult(toolName, osInfo);
    }

    let version: string | undefined;
    try {
      version = await getToolVersion(toolName);
    } catch {}

    return {
      tool: toolName,
      isInstalled: true,
      path: toolPath,
      version,
      installSuggestions: getInstallSuggestions(toolName, osInfo),
    };
  } catch (error) {
    return createNotFoundResult(toolName, osInfo, error);
  }
}

function getInstallSuggestions(
  toolName: string,
  osInfo: OSInfo,
): InstallCommand[] {
  const suggestions = TOOL_INSTALL_COMMANDS[toolName] || [];

  // Filter suggestions based on OS and Linux distribution
  return suggestions.filter((suggestion) => {
    if (osInfo.type === 'Linux' && osInfo.distro) {
      // For Linux, check if suggestion matches the specific distribution
      const linuxVariant = `Linux-${osInfo.distro.family}`;
      return suggestion.os === linuxVariant || suggestion.os === 'Linux';
    }
    // For non-Linux systems, match exactly
    return suggestion.os === osInfo.type;
  });
}

async function getToolVersion(toolName: string): Promise<string | undefined> {
  const versionCommands = [
    `${toolName} --version`,
    `${toolName} -v`,
    `${toolName} version`,
    `${toolName} -V`,
  ];

  for (const cmd of versionCommands) {
    try {
      const {stdout, stderr} = await execAsync(cmd);
      const output = (stdout || stderr).trim();
      if (output && !output.toLowerCase().includes('unknown')) {
        return output.split('\n')[0];
      }
    } catch {}
  }

  return undefined;
}

function createNotFoundResult(
  toolName: string,
  osInfo: OSInfo,
  error?: any,
): ToolDetectionResult {
  return {
    tool: toolName,
    isInstalled: false,
    error: error?.message || `Tool '${toolName}' not found`,
    installSuggestions: getInstallSuggestions(toolName, osInfo),
    alternatives: getToolAlternatives(toolName),
  };
}

function getToolAlternatives(toolName: string): string[] {
  const alternatives: Record<string, string[]> = {
    kubectl: ['k9s', 'helm', 'kubectx'],
    docker: ['podman', 'containerd'],
    git: ['mercurial', 'bazaar'],
    openssl: ['gnutls-bin', 'libressl', 'certtool'],
    'ssh-keygen': ['puttygen', 'dropbearkey'],
    gpg: ['openssl', 'age', 'signify'],
    certtool: ['openssl', 'keytool'],
    keytool: ['openssl', 'certtool'],
    'pkcs11-tool': ['openssl', 'gpg'],
    dropbearkey: ['ssh-keygen', 'puttygen'],
    puttygen: ['ssh-keygen', 'dropbearkey'],
    curl: ['wget', 'aria2c'],
    wget: ['curl', 'aria2c'],
    vim: ['nano', 'emacs', 'micro'],
    nano: ['vim', 'emacs', 'micro'],
  };

  return alternatives[toolName] || [];
}

export function extractRequiredTools(command: string): string[] {
  const commandParts = command.split(/[|;&]+/);
  const tools: Set<string> = new Set();

  for (const part of commandParts) {
    const trimmedPart = part.trim();
    if (!trimmedPart) continue;

    const firstWord = trimmedPart.split(/\s+/)[0];

    if (isShellBuiltin(firstWord)) continue;

    const cleanCommand = cleanCommandName(firstWord);
    if (cleanCommand) {
      tools.add(cleanCommand);
    }
  }

  return Array.from(tools);
}

function isShellBuiltin(command: string): boolean {
  const builtins = [
    'cd',
    'echo',
    'pwd',
    'ls',
    'cp',
    'mv',
    'rm',
    'mkdir',
    'rmdir',
    'cat',
    'grep',
    'awk',
    'sed',
    'sort',
    'uniq',
    'head',
    'tail',
    'export',
    'set',
    'unset',
    'alias',
    'history',
    'exit',
    'help',
    'if',
    'then',
    'else',
    'fi',
    'for',
    'while',
    'do',
    'done',
    'case',
    'esac',
    'function',
    'return',
    'break',
    'continue',
    '&&',
    '||',
    '&',
    '>',
    '<',
    '>>',
    '2>',
    '2>>',
    '!',
    '!!',
  ];

  return builtins.includes(command.toLowerCase());
}

function cleanCommandName(command: string): string | null {
  if (command === 'sudo') return null;

  const withoutPath = command.split('/').pop() || command;

  const withoutExt = withoutPath.replace(/\.exe$/i, '');

  if (!withoutExt || withoutExt.length < 2) return null;

  return withoutExt;
}

export async function validateCommandTools(
  command: string,
): Promise<CommandValidationResult> {
  const requiredTools = extractRequiredTools(command);

  if (requiredTools.length === 0) {
    return {
      isValid: true,
      requiredTools: [],
      missingTools: [],
      availableTools: [],
      canExecute: true,
    };
  }

  const toolChecks = await Promise.all(
    requiredTools.map((tool) => detectTool(tool)),
  );

  const availableTools = toolChecks.filter((result) => result.isInstalled);
  const missingTools = toolChecks.filter((result) => !result.isInstalled);

  const canExecute = missingTools.length === 0;
  const isValid = canExecute;

  let errorMessage: string | undefined;
  if (!canExecute) {
    const missingToolNames = missingTools.map((t) => t.tool).join(', ');
    errorMessage = `❌ Required tool${missingTools.length > 1 ? 's' : ''} not found: ${missingToolNames}`;
  }

  return {
    isValid,
    requiredTools,
    missingTools,
    availableTools,
    canExecute,
    errorMessage,
  };
}

export function formatInstallationSuggestions(
  missingTools: ToolDetectionResult[],
): string {
  if (missingTools.length === 0) return '';

  const lines: string[] = [];
  lines.push('\n📦 Installation suggestions:');
  lines.push('─'.repeat(50));

  for (const tool of missingTools) {
    lines.push(`\n🔧 ${tool.tool}:`);

    if (tool.installSuggestions && tool.installSuggestions.length > 0) {
      for (const suggestion of tool.installSuggestions) {
        lines.push(
          `  ${suggestion.os} (${suggestion.packageManager || 'manual'}):`,
        );
        for (const command of suggestion.commands) {
          lines.push(`    ${command}`);
        }
        if (suggestion.notes) {
          lines.push(`    💡 ${suggestion.notes}`);
        }
        lines.push('');
      }
    } else {
      lines.push('  ℹ️  No installation suggestions available');
      lines.push(`  🔍 Try searching: "${tool.tool} install"`);
    }

    if (tool.alternatives && tool.alternatives.length > 0) {
      lines.push(`  🔄 Alternatives: ${tool.alternatives.join(', ')}`);
    }
  }

  return lines.join('\n');
}
