import chalk from 'chalk';
import {DEFAULT_PROFILE} from '../shared/constants.js';
import type {RawiCredentials} from '../shared/types.js';
import {ConfigManager} from './manager.js';

const configManager = new ConfigManager();

export const getCredentials = (
  profile = DEFAULT_PROFILE,
): RawiCredentials | null => {
  return configManager.getCredentials(profile);
};

export const isConfigured = (profile = DEFAULT_PROFILE): boolean => {
  const credentials = getCredentials(profile);

  if (credentials?.provider === 'ollama') {
    return Boolean(credentials.provider && credentials.model);
  }

  if (credentials?.provider === 'azure') {
    return Boolean(
      credentials.provider &&
        credentials.model &&
        credentials.apiKey &&
        credentials.providerSettings &&
        'resourceName' in credentials.providerSettings,
    );
  }

  if (credentials?.provider === 'bedrock') {
    if (!credentials.provider || !credentials.model) {
      return false;
    }

    if (!credentials.providerSettings) {
      return false;
    }

    const settings = credentials.providerSettings;

    if ('useProviderChain' in settings && settings.useProviderChain) {
      return true;
    }

    if (
      'accessKeyId' in settings &&
      'secretAccessKey' in settings &&
      settings.accessKeyId &&
      settings.secretAccessKey
    ) {
      return true;
    }

    return false;
  }

  if (credentials?.provider === 'qwen') {
    return Boolean(
      credentials.provider &&
        credentials.model &&
        credentials.providerSettings &&
        'apiKey' in credentials.providerSettings &&
        credentials.providerSettings.apiKey,
    );
  }

  if (credentials?.provider === 'xai') {
    return Boolean(
      credentials.provider &&
        credentials.model &&
        credentials.providerSettings &&
        'apiKey' in credentials.providerSettings &&
        credentials.providerSettings.apiKey,
    );
  }

  return Boolean(
    credentials?.apiKey && credentials?.provider && credentials?.model,
  );
};

export const requireCredentials = (
  profile = DEFAULT_PROFILE,
): RawiCredentials => {
  const credentials = getCredentials(profile);

  if (!credentials) {
    console.error(
      chalk.red(
        `❌ No configuration found for profile '${profile}'. Run 'rawi configure' to set up.`,
      ),
    );
    process.exit(1);
  }

  if (credentials.provider === 'ollama') {
    if (!credentials.provider || !credentials.model) {
      console.error(
        chalk.red(
          `❌ Incomplete configuration for profile '${profile}'. Run 'rawi configure' to update.`,
        ),
      );
      process.exit(1);
    }
  } else if (credentials.provider === 'azure') {
    if (
      !credentials.apiKey ||
      !credentials.provider ||
      !credentials.model ||
      !credentials.providerSettings ||
      !('resourceName' in credentials.providerSettings)
    ) {
      console.error(
        chalk.red(
          `❌ Incomplete Azure configuration for profile '${profile}'. Run 'rawi configure' to update.`,
        ),
      );
      process.exit(1);
    }
  } else if (credentials.provider === 'bedrock') {
    if (
      !credentials.provider ||
      !credentials.model ||
      !credentials.providerSettings
    ) {
      console.error(
        chalk.red(
          `❌ Incomplete Bedrock configuration for profile '${profile}'. Run 'rawi configure' to update.`,
        ),
      );
      process.exit(1);
    }

    const settings = credentials.providerSettings;
    const hasProviderChain =
      'useProviderChain' in settings && settings.useProviderChain;
    const hasExplicitCredentials =
      'accessKeyId' in settings &&
      'secretAccessKey' in settings &&
      settings.accessKeyId &&
      settings.secretAccessKey;

    if (!hasProviderChain && !hasExplicitCredentials) {
      console.error(
        chalk.red(
          `❌ Incomplete Bedrock credentials for profile '${profile}'. Run 'rawi configure' to update.`,
        ),
      );
      process.exit(1);
    }
  } else if (credentials.provider === 'qwen') {
    if (
      !credentials.provider ||
      !credentials.model ||
      !credentials.providerSettings ||
      !('apiKey' in credentials.providerSettings) ||
      !credentials.providerSettings.apiKey
    ) {
      console.error(
        chalk.red(
          `❌ Incomplete Qwen configuration for profile '${profile}'. Run 'rawi configure' to update.`,
        ),
      );
      process.exit(1);
    }
  } else if (credentials.provider === 'xai') {
    if (
      !credentials.provider ||
      !credentials.model ||
      !credentials.providerSettings ||
      !('apiKey' in credentials.providerSettings) ||
      !credentials.providerSettings.apiKey
    ) {
      console.error(
        chalk.red(
          `❌ Incomplete xAI configuration for profile '${profile}'. Run 'rawi configure' to update.`,
        ),
      );
      process.exit(1);
    }
  } else if (credentials.provider === 'openai') {
    if (
      !credentials.provider ||
      !credentials.model ||
      !credentials.providerSettings ||
      !('apiKey' in credentials.providerSettings) ||
      !credentials.providerSettings.apiKey
    ) {
      console.error(
        chalk.red(
          `❌ Incomplete OpenAI configuration for profile '${profile}'. Run 'rawi configure' to update.`,
        ),
      );
      process.exit(1);
    }
  } else {
    if (!credentials.apiKey || !credentials.provider || !credentials.model) {
      console.error(
        chalk.red(
          `❌ Incomplete configuration for profile '${profile}'. Run 'rawi configure' to update.`,
        ),
      );
      process.exit(1);
    }
  }

  return credentials;
};
