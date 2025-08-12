export * from './amazon-bedrock.provider.js';
export * from './anthropic.provider.js';
export * from './azure.provider.js';
export * from './cerebras.provider.js';
export * from './deepseek.provider.js';
export * from './google.provider.js';
export * from './lmstudio.provider.js';
export * from './mistral.provider.js';
export * from './ollama.provider.js';
export * from './openai.provider.js';
export * from './xai.provider.js';

export interface ExecGenerationOptions {
  credentials: import('../../shared/index.js').RawiCredentials;
  systemPrompt: string;
  userPrompt: string;
}

export interface ExecGenerationResult {
  command: string;
  generationTime: number;
}

export const execProviders = {
  'amazon-bedrock': 'generateWithBedrock',
  anthropic: 'generateWithAnthropic',
  azure: 'generateWithAzure',
  bedrock: 'generateWithBedrock',
  cerebras: 'generateWithCerebras',
  deepseek: 'generateWithDeepSeek',
  google: 'generateWithGoogle',
  lmstudio: 'generateWithLMStudio',
  mistral: 'generateWithMistral',
  ollama: 'generateWithOllama',
  openai: 'generateWithOpenAI',
  xai: 'generateWithXAI',
} as const;

export type ExecProviderName = keyof typeof execProviders;
