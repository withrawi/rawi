export interface ExecOptions {
  profile?: string;
  verbose?: boolean;
  dryRun?: boolean;
  confirm?: boolean;
  skipToolValidation?: boolean;
  timeout?: number;
  shell?: string;
  workingDirectory?: string;
}

export interface ExecContext {
  os: {
    type: string;
    release: string;
    platform: string;
    arch: string;
  };
  node: {
    version: string;
  };
  shell: string;
  cwd: string;
  home: string;
  cpu: {
    model: string;
    cores: number;
  };
  memory: {
    total: number;
    free: number;
  };
  directoryListing: string;
}

export interface ExecResult {
  command: string;
  stdout?: string;
  stderr?: string;
  exitCode?: number;
  executionTime: number;
  success: boolean;
}

export interface ExecSession {
  id: string;
  profile: string;
  description: string;
  commands: ExecResult[];
  createdAt: Date;
  updatedAt: Date;
}
