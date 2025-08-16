export interface CommandOption {
  flags: string;
  description: string;
  defaultValue?: string | boolean | number;
}

export const execCommandOptions: CommandOption[] = [
  {
    flags: '-p, --profile <profile>',
    description: 'Specify the profile to use for AI provider configuration',
    defaultValue: 'default',
  },
  {
    flags: '-v, --verbose',
    description: 'Enable verbose output and detailed logging',
    defaultValue: false,
  },
  {
    flags: '-d, --dry-run',
    description: 'Show the generated command without executing it',
    defaultValue: false,
  },
  {
    flags: '-c, --confirm',
    description:
      'Ask for confirmation before executing potentially dangerous commands',
    defaultValue: false,
  },
  {
    flags: '--skip-tool-validation',
    description:
      'Skip checking if required tools are installed before execution',
    defaultValue: false,
  },
  {
    flags: '-t, --timeout <timeout>',
    description: 'Set command execution timeout in milliseconds',
    defaultValue: '30000',
  },
  {
    flags: '-s, --shell <shell>',
    description: 'Specify which shell to use for command execution',
  },
  {
    flags: '-w, --working-directory <directory>',
    description: 'Set the working directory for command execution',
  },
];
