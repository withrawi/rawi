import {exec} from 'node:child_process';
import {promisify} from 'node:util';
import {detectOS, getCommandCheckStrategy} from './detector.js';
import type {
  CommandValidationResult,
  InstallCommand,
  ToolDetectionResult,
} from './types.js';

const execAsync = promisify(exec);


const TOOL_INSTALL_COMMANDS: Record<string, InstallCommand[]> = {
  kubectl: [
    {
      os: 'Linux',
      packageManager: 'curl',
      commands: [
        'curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"',
        'sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl',
      ],
      notes: 'Official Kubernetes installation method',
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
      os: 'Linux',
      packageManager: 'apt',
      commands: [
        'curl -fsSL https://get.docker.com -o get-docker.sh',
        'sudo sh get-docker.sh',
      ],
      notes: 'Official Docker installation script',
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
      os: 'Linux',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install git'],
      notes: 'Install via APT package manager',
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
      os: 'Linux',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install openssl'],
      notes: 'Usually pre-installed on most Linux distributions',
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
      os: 'Linux',
      packageManager: 'apt',
      commands: ['sudo apt update && sudo apt install openssh-client'],
      notes: 'Usually pre-installed on most Linux distributions',
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
      return createNotFoundResult(toolName, osInfo.type);
    }

    let version: string | undefined;
    try {
      version = await getToolVersion(toolName);
    } catch {
    }

    return {
      tool: toolName,
      isInstalled: true,
      path: toolPath,
      version,
      installSuggestions: TOOL_INSTALL_COMMANDS[toolName] || [],
    };
  } catch (error) {
    return createNotFoundResult(toolName, osInfo.type, error);
  }
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
  _osType: string,
  error?: any,
): ToolDetectionResult {
  return {
    tool: toolName,
    isInstalled: false,
    error: error?.message || `Tool '${toolName}' not found`,
    installSuggestions: TOOL_INSTALL_COMMANDS[toolName] || [],
    alternatives: getToolAlternatives(toolName),
  };
}


function getToolAlternatives(toolName: string): string[] {
  const alternatives: Record<string, string[]> = {
    kubectl: ['k9s', 'helm', 'kubectx'],
    docker: ['podman', 'containerd'],
    git: ['mercurial', 'bazaar'],
    openssl: ['gnutls-bin', 'libressl'],
    'ssh-keygen': ['putty-tools', 'dropbear'],
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
