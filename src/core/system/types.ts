export interface SystemInfo {
  os: OSInfo;
  shell: ShellInfo;
  architecture: string;
}

export interface OSInfo {
  type: 'Windows' | 'Darwin' | 'Linux' | 'Unknown';
  platform: NodeJS.Platform;
  release: string;
  version?: string;
  distro?: LinuxDistro;
}

export interface LinuxDistro {
  name: string;
  family: 'Arch' | 'Debian' | 'RedHat' | 'SUSE' | 'Fedora' | 'Unknown';
  packageManager: 'pacman' | 'apt' | 'yum' | 'zypper' | 'dnf' | 'unknown';
  version?: string;
}

export interface ShellInfo {
  name: string;
  path: string;
  version?: string;
}

export interface ToolInfo {
  name: string;
  path: string;
  version?: string;
  isInstalled: boolean;
  installCommands?: InstallCommand[];
}

export interface InstallCommand {
  os: OSInfo['type'] | string;
  commands: string[];
  packageManager?: string;
  notes?: string;
}

export interface ToolDetectionResult {
  tool: string;
  isInstalled: boolean;
  path?: string;
  version?: string;
  error?: string;
  alternatives?: string[];
  installSuggestions?: InstallCommand[];
}

export interface CommandValidationResult {
  isValid: boolean;
  requiredTools: string[];
  missingTools: ToolDetectionResult[];
  availableTools: ToolDetectionResult[];
  canExecute: boolean;
  errorMessage?: string;
}

export type ToolCheckStrategy = 'which' | 'where' | 'command' | 'get-command';
