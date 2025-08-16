import {generateWithProvider} from '../providers/utils.js';
import type {RawiCredentials} from '../shared/index.js';
import {buildExecContext, formatContextForPrompt} from './context.js';
import {createSystemPrompt, createUserPrompt} from './prompts.js';

export interface GenerateCommandOptions {
  credentials: RawiCredentials;
  description: string;
  timeout?: number;
}

export interface GeneratedCommand {
  command: string;
  description: string;
  context: string;
  generationTime: number;
}

export async function generateCommand(
  options: GenerateCommandOptions,
): Promise<GeneratedCommand> {
  const context = await buildExecContext();
  const contextInfo = formatContextForPrompt(context);
  const systemPrompt = createSystemPrompt(contextInfo);
  const userPrompt = createUserPrompt(options.description);

  const result = await generateWithProvider({
    credentials: options.credentials,
    systemPrompt,
    userPrompt,
  });

  return {
    command: result.command,
    description: options.description,
    context: contextInfo,
    generationTime: result.generationTime,
  };
}

export function validateCommand(command: string): {
  isValid: boolean;
  isDangerous: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];
  let isDangerous = false;

  const dangerousPatterns = [
    /rm\s+-rf\s*\/\s*$/, // rm -rf /
    /rm\s+-rf\s*\*\s*$/, // rm -rf *
    />\s*\/dev\/sda/, // Writing to disk directly
    /dd\s+.*of=\/dev/, // dd to device
    /mkfs/, // Format filesystem
    /fdisk/, // Disk partitioning
    /:(){ :|:& };:/, // Fork bomb
    /sudo\s+rm/, // sudo rm
    /sudo\s+dd/, // sudo dd
    /curl.*\|\s*sh/, // Pipe curl to shell
    /wget.*\|\s*sh/, // Pipe wget to shell
  ];

  for (const pattern of dangerousPatterns) {
    if (pattern.test(command)) {
      isDangerous = true;
      warnings.push(
        'This command may be dangerous and could cause system damage',
      );
      break;
    }
  }

  if (!command || command.trim() === '') {
    return {
      isValid: false,
      isDangerous: false,
      warnings: ['Generated command is empty'],
    };
  }

  if (command.length > 1000) {
    warnings.push('Generated command is unusually long');
  }

  if (
    command.includes(';') ||
    command.includes('&&') ||
    command.includes('||')
  ) {
    warnings.push('Command contains multiple operations');
  }

  return {
    isValid: true,
    isDangerous,
    warnings,
  };
}
