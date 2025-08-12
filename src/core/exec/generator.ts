import type {
  ExecGenerationOptions,
  ExecGenerationResult,
} from '../providers/exec/index.js';
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
  // Build system context
  const context = await buildExecContext();
  const contextInfo = formatContextForPrompt(context);

  // Prepare prompts
  const systemPrompt = createSystemPrompt(contextInfo);
  const userPrompt = createUserPrompt(options.description);

  // Generate the command using the appropriate provider
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

async function generateWithProvider(
  options: ExecGenerationOptions,
): Promise<ExecGenerationResult> {
  const providerName = options.credentials.provider;

  switch (providerName) {
    case 'ollama': {
      const {generateWithOllama} = await import(
        '../providers/exec/ollama.provider.js'
      );
      return generateWithOllama(options);
    }
    case 'openai': {
      const {generateWithOpenAI} = await import(
        '../providers/exec/openai.provider.js'
      );
      return generateWithOpenAI(options);
    }
    case 'anthropic': {
      const {generateWithAnthropic} = await import(
        '../providers/exec/anthropic.provider.js'
      );
      return generateWithAnthropic(options);
    }
    case 'google': {
      const {generateWithGoogle} = await import(
        '../providers/exec/google.provider.js'
      );
      return generateWithGoogle(options);
    }
    case 'xai': {
      const {generateWithXAI} = await import(
        '../providers/exec/xai.provider.js'
      );
      return generateWithXAI(options);
    }
    case 'deepseek': {
      const {generateWithDeepSeek} = await import(
        '../providers/exec/deepseek.provider.js'
      );
      return generateWithDeepSeek(options);
    }
    case 'mistral': {
      const {generateWithMistral} = await import(
        '../providers/exec/mistral.provider.js'
      );
      return generateWithMistral(options);
    }
    case 'cerebras': {
      const {generateWithCerebras} = await import(
        '../providers/exec/cerebras.provider.js'
      );
      return generateWithCerebras(options);
    }
    case 'lmstudio': {
      const {generateWithLMStudio} = await import(
        '../providers/exec/lmstudio.provider.js'
      );
      return generateWithLMStudio(options);
    }
    case 'azure': {
      const {generateWithAzure} = await import(
        '../providers/exec/azure.provider.js'
      );
      return generateWithAzure(options);
    }
    case 'bedrock': {
      const {generateWithBedrock} = await import(
        '../providers/exec/amazon-bedrock.provider.js'
      );
      return generateWithBedrock(options);
    }
    default:
      throw new Error(`Unsupported provider for exec: ${providerName}`);
  }
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
