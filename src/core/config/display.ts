import chalk from 'chalk';
import type {RawiCredentials} from '../shared/types.js';
import {maskApiKey} from '../shared/utils.js';
import {getProvider} from './providers/index.js';

export class ConfigDisplayManager {
  displayCredentials(credentials: RawiCredentials): void {
    const masked = {...credentials};

    if (masked.apiKey) {
      masked.apiKey = maskApiKey(masked.apiKey);
    }

    const providerConfig = getProvider(masked.provider);
    const providerDisplayName = providerConfig.displayName;

    const modelInfo = providerConfig.models.find(
      (m) => m.name === masked.model,
    );
    const modelDisplayName = modelInfo?.displayName || masked.model;

    console.log(
      chalk.blue('  Provider:') +
        chalk.white(` ${providerDisplayName} (${masked.provider})`),
    );
    console.log(chalk.blue('  Model:') + chalk.white(` ${modelDisplayName}`));

    if (
      masked.apiKey ||
      (masked.providerSettings &&
        Object.keys(masked.providerSettings).length > 0)
    ) {
      console.log('');

      if (masked.apiKey) {
        console.log(
          chalk.blue('  API Key:') + chalk.white(` ${masked.apiKey}`),
        );
      }

      if (masked.providerSettings) {
        this.displayProviderSettings(masked);
      }
    }

    console.log('');

    if (masked.temperature) {
      console.log(
        chalk.blue('  Temperature:') +
          chalk.white(` ${masked.temperature.toFixed(1)}`),
      );
    }

    if (masked.maxTokens) {
      console.log(
        chalk.blue('  Max Tokens:') + chalk.white(` ${masked.maxTokens}`),
      );
    }

    if (masked.language) {
      console.log(
        chalk.blue('  Language:') + chalk.white(` ${masked.language}`),
      );
    }
  }

  displayConfigurationSummary(credentials: RawiCredentials): void {
    const masked = {...credentials};

    if (masked.apiKey) {
      masked.apiKey = maskApiKey(masked.apiKey);
    }

    const providerConfig = getProvider(masked.provider);
    const providerDisplayName = providerConfig.displayName;

    const modelInfo = providerConfig.models.find(
      (m) => m.name === masked.model,
    );
    const modelDisplayName = modelInfo?.displayName || masked.model;

    console.log(chalk.bold('\n📋 Configuration Summary:'));

    console.log(
      chalk.blue('  Provider:') +
        chalk.white(` ${providerDisplayName} (${masked.provider})`),
    );
    console.log(chalk.blue('  Model:') + chalk.white(` ${modelDisplayName}`));

    if (
      masked.apiKey ||
      (masked.providerSettings &&
        Object.keys(masked.providerSettings).length > 0)
    ) {
      console.log(chalk.bold('\n  Authentication:'));

      if (masked.apiKey) {
        console.log(
          chalk.blue('    API Key:') + chalk.white(` ${masked.apiKey}`),
        );
      }

      if (masked.providerSettings) {
        this.displayProviderSettingsSummary(masked);
      }
    }

    console.log(chalk.bold('\n  Generation Settings:'));

    console.log(
      chalk.blue('    Temperature:') +
        chalk.white(
          ` ${(masked.temperature || 0.7).toFixed(1)} ${!masked.temperature ? '(default)' : ''}`,
        ),
    );

    console.log(
      chalk.blue('    Max Tokens:') +
        chalk.white(
          ` ${masked.maxTokens || 2048} ${!masked.maxTokens ? '(default)' : ''}`,
        ),
    );

    console.log(chalk.bold('\n  User Preferences:'));

    console.log(
      chalk.blue('    Language:') +
        chalk.white(
          ` ${masked.language || 'english'} ${!masked.language ? '(default)' : ''}`,
        ),
    );

    if (masked.providerSettings) {
      console.log(chalk.gray('  Provider Settings:'));
      this.displayProviderSettingsGray(masked);
    }
  }

  private displayProviderSettings(masked: RawiCredentials): void {
    if (
      masked.provider === 'ollama' &&
      masked.providerSettings &&
      'baseURL' in masked.providerSettings
    ) {
      console.log(
        chalk.blue('  Base URL:') +
          chalk.white(
            ` ${masked.providerSettings.baseURL || 'http://localhost:11434/api'} ${!masked.providerSettings.baseURL ? '(default)' : ''}`,
          ),
      );
    } else if (masked.provider === 'azure') {
      if (
        masked.providerSettings &&
        'resourceName' in masked.providerSettings
      ) {
        console.log(
          chalk.blue('  Resource Name:') +
            chalk.white(` ${masked.providerSettings.resourceName}`),
        );
      }

      if (masked.providerSettings && 'apiVersion' in masked.providerSettings) {
        console.log(
          chalk.blue('  API Version:') +
            chalk.white(` ${masked.providerSettings.apiVersion}`),
        );
      }
    } else if (masked.provider === 'bedrock') {
      this.displayBedrockSettings(masked);
    } else if (this.isProviderWithApiKey(masked)) {
      this.displayApiKeyProviderSettings(masked);
    }
  }

  private displayProviderSettingsSummary(masked: RawiCredentials): void {
    if (
      masked.provider === 'ollama' &&
      masked.providerSettings &&
      'baseURL' in masked.providerSettings
    ) {
      console.log(
        chalk.blue('    Base URL:') +
          chalk.white(
            ` ${masked.providerSettings.baseURL || 'http://localhost:11434/api'} (default)`,
          ),
      );
    } else if (masked.provider === 'azure') {
      this.displayAzureSettingsSummary(masked);
    } else if (masked.provider === 'bedrock') {
      this.displayBedrockSettingsSummary(masked);
    } else if (this.isProviderWithApiKey(masked)) {
      this.displayApiKeyProviderSettingsSummary(masked);
    }
  }

  private displayProviderSettingsGray(masked: RawiCredentials): void {
    if (
      masked.provider === 'ollama' &&
      masked.providerSettings &&
      'baseURL' in masked.providerSettings
    ) {
      console.log(
        chalk.gray(`    Base URL: ${masked.providerSettings.baseURL}`),
      );
    } else if (masked.provider === 'azure') {
      this.displayAzureSettingsGray(masked);
    } else if (masked.provider === 'bedrock') {
      this.displayBedrockSettingsGray(masked);
    } else if (this.isProviderWithApiKey(masked)) {
      this.displayApiKeyProviderSettingsGray(masked);
    }
  }

  private displayBedrockSettings(masked: RawiCredentials): void {
    if (masked.providerSettings && 'region' in masked.providerSettings) {
      console.log(
        chalk.blue('  Region:') +
          chalk.white(
            ` ${masked.providerSettings.region || 'us-east-1 (default)'}`,
          ),
      );
    }

    if (
      masked.providerSettings &&
      'useProviderChain' in masked.providerSettings &&
      masked.providerSettings.useProviderChain
    ) {
      console.log(
        chalk.blue('  Credentials:') + chalk.white(' AWS Provider Chain'),
      );
    } else {
      this.displayBedrockCredentials(masked);
    }
  }

  private displayBedrockCredentials(masked: RawiCredentials): void {
    if (
      masked.providerSettings &&
      'accessKeyId' in masked.providerSettings &&
      masked.providerSettings.accessKeyId
    ) {
      console.log(
        chalk.blue('  Access Key ID:') +
          chalk.white(` ${maskApiKey(masked.providerSettings.accessKeyId)}`),
      );
    }
    if (
      masked.providerSettings &&
      'secretAccessKey' in masked.providerSettings &&
      masked.providerSettings.secretAccessKey
    ) {
      console.log(
        chalk.blue('  Secret Key:') +
          chalk.white(
            ` ${maskApiKey(masked.providerSettings.secretAccessKey)}`,
          ),
      );
    }
    if (
      masked.providerSettings &&
      'sessionToken' in masked.providerSettings &&
      masked.providerSettings.sessionToken
    ) {
      console.log(
        chalk.blue('  Session Token:') +
          chalk.white(` ${maskApiKey(masked.providerSettings.sessionToken)}`),
      );
    }
  }

  private displayBedrockSettingsSummary(masked: RawiCredentials): void {
    if (masked.providerSettings && 'region' in masked.providerSettings) {
      console.log(
        chalk.blue('    Region:') +
          chalk.white(
            ` ${masked.providerSettings.region || 'us-east-1 (default)'}`,
          ),
      );
    }

    if (
      masked.providerSettings &&
      'useProviderChain' in masked.providerSettings &&
      masked.providerSettings.useProviderChain
    ) {
      console.log(
        chalk.blue('    Credentials:') + chalk.white(' AWS Provider Chain'),
      );
    } else {
      if (
        masked.providerSettings &&
        'accessKeyId' in masked.providerSettings &&
        masked.providerSettings.accessKeyId
      ) {
        console.log(
          chalk.blue('    Access Key ID:') +
            chalk.white(` ${maskApiKey(masked.providerSettings.accessKeyId)}`),
        );
      }
    }
  }

  private displayBedrockSettingsGray(masked: RawiCredentials): void {
    if (masked.providerSettings && 'region' in masked.providerSettings) {
      console.log(
        chalk.gray(
          `    Region: ${masked.providerSettings.region || 'us-east-1'}`,
        ),
      );
    }

    if (
      masked.providerSettings &&
      'useProviderChain' in masked.providerSettings &&
      masked.providerSettings.useProviderChain
    ) {
      console.log(chalk.gray('    Credentials: AWS Provider Chain'));
    } else {
      this.displayBedrockCredentialsGray(masked);
    }
  }

  private displayBedrockCredentialsGray(masked: RawiCredentials): void {
    if (
      masked.providerSettings &&
      'accessKeyId' in masked.providerSettings &&
      masked.providerSettings.accessKeyId
    ) {
      console.log(
        chalk.gray(
          `    Access Key ID: ${maskApiKey(masked.providerSettings.accessKeyId)}`,
        ),
      );
    }
    if (
      masked.providerSettings &&
      'secretAccessKey' in masked.providerSettings &&
      masked.providerSettings.secretAccessKey
    ) {
      console.log(
        chalk.gray(
          `    Secret Key: ${maskApiKey(masked.providerSettings.secretAccessKey)}`,
        ),
      );
    }
    if (
      masked.providerSettings &&
      'sessionToken' in masked.providerSettings &&
      masked.providerSettings.sessionToken
    ) {
      console.log(
        chalk.gray(
          `    Session Token: ${maskApiKey(masked.providerSettings.sessionToken)}`,
        ),
      );
    }
  }

  private displayAzureSettingsSummary(masked: RawiCredentials): void {
    if (masked.providerSettings && 'resourceName' in masked.providerSettings) {
      console.log(
        chalk.blue('    Resource Name:') +
          chalk.white(` ${masked.providerSettings.resourceName}`),
      );
    }

    if (masked.providerSettings && 'apiVersion' in masked.providerSettings) {
      console.log(
        chalk.blue('    API Version:') +
          chalk.white(` ${masked.providerSettings.apiVersion}`),
      );
    }
  }

  private displayAzureSettingsGray(masked: RawiCredentials): void {
    if (masked.providerSettings && 'resourceName' in masked.providerSettings) {
      console.log(
        chalk.gray(
          `    Resource Name: ${masked.providerSettings.resourceName}`,
        ),
      );
    }

    if (masked.providerSettings && 'apiVersion' in masked.providerSettings) {
      console.log(
        chalk.gray(`    API Version: ${masked.providerSettings.apiVersion}`),
      );
    }
  }

  private isProviderWithApiKey(masked: RawiCredentials): boolean {
    return (
      ['qwen', 'xai', 'openai', 'anthropic', 'google'].includes(
        masked.provider,
      ) &&
      masked.providerSettings !== undefined &&
      'apiKey' in masked.providerSettings
    );
  }

  private displayApiKeyProviderSettings(masked: RawiCredentials): void {
    if (masked.providerSettings && 'apiKey' in masked.providerSettings) {
      console.log(
        chalk.blue('  API Key:') +
          chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
      );
      if ('baseURL' in masked.providerSettings) {
        const defaultUrls = this.getDefaultUrls();
        const defaultUrl = defaultUrls[masked.provider];
        console.log(
          chalk.blue('  Base URL:') +
            chalk.white(
              ` ${masked.providerSettings.baseURL || defaultUrl} ${!masked.providerSettings.baseURL ? '(default)' : ''}`,
            ),
        );
      }
    }
  }

  private displayApiKeyProviderSettingsSummary(masked: RawiCredentials): void {
    if (masked.providerSettings && 'apiKey' in masked.providerSettings) {
      console.log(
        chalk.blue('    API Key:') +
          chalk.white(` ${maskApiKey(masked.providerSettings.apiKey)}`),
      );
      if ('baseURL' in masked.providerSettings) {
        const defaultUrls = this.getDefaultUrls();
        const defaultUrl = defaultUrls[masked.provider];
        console.log(
          chalk.blue('    Base URL:') +
            chalk.white(
              ` ${masked.providerSettings.baseURL || defaultUrl} (default)`,
            ),
        );
      }
    }
  }

  private displayApiKeyProviderSettingsGray(masked: RawiCredentials): void {
    if (masked.providerSettings && 'apiKey' in masked.providerSettings) {
      console.log(
        chalk.gray(
          `    API Key: ${maskApiKey(masked.providerSettings.apiKey)}`,
        ),
      );
      if ('baseURL' in masked.providerSettings) {
        const defaultUrls = this.getDefaultUrls();
        const defaultUrl = defaultUrls[masked.provider];
        console.log(
          chalk.gray(
            `    Base URL: ${masked.providerSettings.baseURL || defaultUrl}`,
          ),
        );
      }
    }
  }

  private getDefaultUrls(): Record<string, string> {
    return {
      qwen: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
      xai: 'https://api.x.ai/v1',
      openai: 'https://api.openai.com/v1',
      anthropic: 'https://api.anthropic.com',
      google: 'https://generativelanguage.googleapis.com/v1beta',
    };
  }
}
