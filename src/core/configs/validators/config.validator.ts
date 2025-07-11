import {
  type RawiCredentials,
  validateApiKey as utilValidateApiKey,
  validateMaxTokens,
  validateTemperature,
} from '../../shared/index.js';
import type {
  IConfigValidator,
  ValidationResult,
} from '../interfaces/persistence.interface.js';

export class ConfigValidator implements IConfigValidator {
  validateCredentials(credentials: RawiCredentials): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!credentials.provider) {
      errors.push('Provider is required');
    }

    if (!credentials.model) {
      errors.push('Model is required');
    }

    if (credentials.apiKey) {
      const apiKeyValidation = this.validateApiKey(
        credentials.apiKey,
        credentials.provider,
      );
      errors.push(...apiKeyValidation.errors);
      warnings.push(...apiKeyValidation.warnings);
    }

    const settingsValidation = this.validateSettings(credentials);
    errors.push(...settingsValidation.errors);
    warnings.push(...settingsValidation.warnings);

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  validateApiKey(apiKey: string, provider: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!apiKey.trim()) {
      errors.push('API key cannot be empty');
      return {isValid: false, errors, warnings};
    }

    const isValidFormat = utilValidateApiKey(apiKey);
    if (!isValidFormat) {
      errors.push(`Invalid API key format for provider: ${provider}`);
    }

    switch (provider) {
      case 'openai':
        if (!apiKey.startsWith('sk-')) {
          warnings.push('OpenAI API keys typically start with "sk-"');
        }
        break;
      case 'anthropic':
        if (!apiKey.startsWith('sk-ant-')) {
          warnings.push('Anthropic API keys typically start with "sk-ant-"');
        }
        break;
      case 'google':
        if (apiKey.length < 30) {
          warnings.push(
            'Google API keys are typically longer than 30 characters',
          );
        }
        break;
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }

  validateSettings(credentials: RawiCredentials): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (credentials.temperature !== undefined) {
      if (!validateTemperature(credentials.temperature)) {
        errors.push('Temperature must be between 0 and 2');
      }
    }

    if (credentials.maxTokens !== undefined) {
      if (!validateMaxTokens(credentials.maxTokens)) {
        errors.push('Max tokens must be a positive integer');
      }
    }

    if (
      credentials.language &&
      !['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh'].includes(
        credentials.language,
      )
    ) {
      warnings.push(
        `Language "${credentials.language}" may not be fully supported`,
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }
}
