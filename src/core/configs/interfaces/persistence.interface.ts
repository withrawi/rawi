import type {RawiConfig, RawiCredentials} from '../../shared/types.js';

export interface IConfigPersistence {
  readConfig(): RawiConfig;

  writeConfig(config: RawiConfig): void;

  ensureConfigDir(): void;

  configExists(): boolean;

  backupConfig(): void;

  restoreConfig(): void;
}

export interface IConfigValidator {
  validateCredentials(credentials: RawiCredentials): ValidationResult;

  validateApiKey(apiKey: string, provider: string): ValidationResult;

  validateSettings(credentials: RawiCredentials): ValidationResult;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}
