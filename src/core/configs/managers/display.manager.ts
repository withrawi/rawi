import chalk from 'chalk';
import {getProvider} from '../../providers/index.js';
import {maskApiKey, type RawiCredentials} from '../../shared/index.js';
import type {IConfigDisplayManager} from '../interfaces/config-manager.interface.js';

export class ConfigDisplayManager implements IConfigDisplayManager {
  displayCredentials(credentials: RawiCredentials): void {
    const masked = {...credentials};

    if (masked.apiKey) {
      masked.apiKey = maskApiKey(masked.apiKey);
    }

    const providerConfig = getProvider(masked.provider);
    if (!providerConfig) {
      console.log(chalk.red(`Unknown provider: ${masked.provider}`));
      return;
    }

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
      console.log(chalk.blue('  Configuration:'));

      if (masked.apiKey) {
        console.log(chalk.gray(`    API Key: ${masked.apiKey}`));
      }

      if (masked.providerSettings) {
        this.displayProviderSettings(masked.providerSettings);
      }
    }

    if (masked.temperature !== undefined) {
      console.log(
        chalk.blue('  Temperature:') + chalk.white(` ${masked.temperature}`),
      );
    }

    if (masked.maxTokens !== undefined) {
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
    console.log(chalk.green('\\n✅ Configuration Summary:'));
    this.displayCredentials(credentials);
  }

  displayProfiles(profiles: string[]): void {
    if (profiles.length === 0) {
      console.log(chalk.yellow('No profiles found.'));
      return;
    }

    console.log(chalk.blue('\\nAvailable Profiles:'));
    for (const profile of profiles) {
      console.log(chalk.white(`  • ${profile}`));
    }
  }

  private displayProviderSettings(settings: Record<string, any>): void {
    for (const [key, value] of Object.entries(settings)) {
      if (value !== undefined && value !== null) {
        const displayKey = this.formatSettingKey(key);
        const displayValue = this.formatSettingValue(key, value);
        console.log(chalk.gray(`    ${displayKey}: ${displayValue}`));
      }
    }
  }

  private formatSettingKey(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  }

  private formatSettingValue(key: string, value: any): string {
    const sensitiveKeys = [
      'apiKey',
      'accessKey',
      'secretKey',
      'token',
      'password',
    ];
    const lowerKey = key.toLowerCase();

    if (sensitiveKeys.some((sk) => lowerKey.includes(sk))) {
      return typeof value === 'string' ? maskApiKey(value) : '[MASKED]';
    }

    return String(value);
  }

  displayError(message: string, details?: string): void {
    console.error(chalk.red(`❌ ${message}`));
    if (details) {
      console.error(chalk.gray(`   ${details}`));
    }
  }

  displayWarning(message: string, details?: string): void {
    console.warn(chalk.yellow(`⚠️  ${message}`));
    if (details) {
      console.warn(chalk.gray(`   ${details}`));
    }
  }

  displaySuccess(message: string, details?: string): void {
    console.log(chalk.green(`✅ ${message}`));
    if (details) {
      console.log(chalk.gray(`   ${details}`));
    }
  }

  displayInfo(message: string, details?: string): void {
    console.log(chalk.blue(`ℹ️  ${message}`));
    if (details) {
      console.log(chalk.gray(`   ${details}`));
    }
  }
}
