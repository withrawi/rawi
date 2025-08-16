export * from './anthropic.provider.js';
export * from './azure.provider.js';
export * from './bedrock.provider.js';
export * from './cerebras.provider.js';
export * from './deepseek.provider.js';
export * from './google.provider.js';
export * from './lmstudio.provider.js';
export * from './mistral.provider.js';
export * from './ollama.provider.js';
export * from './openai.provider.js';
export * from './types.js';
export * from './utils.js';
export * from './xai.provider.js';

import type {ProviderConfig, SupportedProvider} from '../shared/types.js';
import {anthropicProvider} from './anthropic.provider.js';
import {azureProvider} from './azure.provider.js';
import {bedrockProvider} from './bedrock.provider.js';
import {cerebrasProvider} from './cerebras.provider.js';
import {deepSeekProvider} from './deepseek.provider.js';
import {googleProvider} from './google.provider.js';
import {lmstudioProvider} from './lmstudio.provider.js';
import {mistralProvider} from './mistral.provider.js';
import {ollamaProvider} from './ollama.provider.js';
import {openaiProvider} from './openai.provider.js';
import {xaiProvider} from './xai.provider.js';

export const askProviders: Record<SupportedProvider, ProviderConfig> = {
  anthropic: anthropicProvider,
  azure: azureProvider,
  bedrock: bedrockProvider,
  cerebras: cerebrasProvider,
  deepseek: deepSeekProvider,
  google: googleProvider,
  mistral: mistralProvider,
  ollama: ollamaProvider,
  openai: openaiProvider,
  xai: xaiProvider,
  lmstudio: lmstudioProvider,
};

import {anthropicChatProvider} from './anthropic.provider.js';
import {azureChatProvider} from './azure.provider.js';
import {bedrockChatProvider} from './bedrock.provider.js';
import {cerebrasChatProvider} from './cerebras.provider.js';
import {deepseekChatProvider} from './deepseek.provider.js';
import {googleChatProvider} from './google.provider.js';
import {lmstudioChatProvider} from './lmstudio.provider.js';
import {mistralChatProvider} from './mistral.provider.js';
import {ollamaChatProvider} from './ollama.provider.js';
import {openaiChatProvider} from './openai.provider.js';
import type {ChatProvider} from './types.js';
import {xaiChatProvider} from './xai.provider.js';

export const chatProviders: Record<string, ChatProvider> = {
  anthropic: anthropicChatProvider,
  azure: azureChatProvider,
  bedrock: bedrockChatProvider,
  cerebras: cerebrasChatProvider,
  deepseek: deepseekChatProvider,
  google: googleChatProvider,
  lmstudio: lmstudioChatProvider,
  mistral: mistralChatProvider,
  ollama: ollamaChatProvider,
  openai: openaiChatProvider,
  xai: xaiChatProvider,
};

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

export const getProvider = (name: SupportedProvider): ProviderConfig => {
  return askProviders[name];
};

export const getAllProviders = (): ProviderConfig[] => {
  return Object.values(askProviders);
};

export const getProviderNames = (): SupportedProvider[] => {
  return Object.keys(askProviders) as SupportedProvider[];
};

export const getChatProvider = (name: string): ChatProvider => {
  const provider = chatProviders[name];
  if (!provider) {
    throw new Error(`Chat provider '${name}' not found`);
  }
  return provider;
};

export const getChatProviderNames = (): string[] => {
  return Object.keys(chatProviders);
};

export type {ExecGenerationOptions, ExecGenerationResult} from './types.js';
