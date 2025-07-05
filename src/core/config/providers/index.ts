export * from './amazon-bedrock.provider.js';
export * from './anthropic.provider.js';
export * from './azura.provider.js';
export * from './google.provider.js';
export * from './ollama.provider.js';
export * from './openai.provider.js';
export * from './qwen.provider.js';
export * from './xai.provider.js';

import type {ProviderConfig, SupportedProvider} from '../../shared/types.js';
import {bedrockProvider} from './amazon-bedrock.provider.js';
import {anthropicProvider} from './anthropic.provider.js';
import {azureProvider} from './azura.provider.js';
import {googleProvider} from './google.provider.js';
import {lmstudioProvider} from './lmstudio.provider.js';
import {ollamaProvider} from './ollama.provider.js';
import {openaiProvider} from './openai.provider.js';
import {qwenProvider} from './qwen.provider.js';
import {xaiProvider} from './xai.provider.js';

export const providers: Record<SupportedProvider, ProviderConfig> = {
  anthropic: anthropicProvider,
  azure: azureProvider,
  bedrock: bedrockProvider,
  google: googleProvider,
  ollama: ollamaProvider,
  openai: openaiProvider,
  qwen: qwenProvider,
  xai: xaiProvider,
  lmstudio: lmstudioProvider,
};

export const getProvider = (name: SupportedProvider): ProviderConfig => {
  return providers[name];
};

export const getAllProviders = (): ProviderConfig[] => {
  return Object.values(providers);
};

export const getProviderNames = (): SupportedProvider[] => {
  return Object.keys(providers) as SupportedProvider[];
};
