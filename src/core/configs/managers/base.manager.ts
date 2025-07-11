import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import {join} from 'node:path';
import chalk from 'chalk';
import {
  DEFAULT_PROFILE,
  getConfigDir,
  getCredentialsFilePath,
  type RawiConfig,
  type RawiCredentials,
} from '../../shared/index.js';
import type {IConfigManager, IConfigPersistence} from '../index.js';

export class BaseConfigManager implements IConfigManager, IConfigPersistence {
  protected readonly configDir: string;
  protected readonly configFile: string;
  protected readonly backupFile: string;

  constructor() {
    this.configDir = getConfigDir();
    this.configFile = getCredentialsFilePath();
    this.backupFile = join(this.configDir, 'credentials.backup.json');
  }

  ensureConfigDir(): void {
    if (!existsSync(this.configDir)) {
      try {
        mkdirSync(this.configDir, {recursive: true});
      } catch (error) {
        throw new Error(
          `Failed to create config directory: ${
            error instanceof Error ? error.message : String(error)
          }`,
        );
      }
    }
  }

  configExists(): boolean {
    return existsSync(this.configFile);
  }

  readConfig(): RawiConfig {
    if (!existsSync(this.configFile)) {
      return {};
    }

    try {
      const content = readFileSync(this.configFile, 'utf-8');
      const config = JSON.parse(content);

      if (typeof config !== 'object' || config === null) {
        throw new Error('Invalid configuration format');
      }

      return config as RawiConfig;
    } catch {
      console.error(
        chalk.yellow(
          'Warning: Failed to read config file, using empty config.',
        ),
      );

      if (existsSync(this.backupFile)) {
        console.log(chalk.blue('Attempting to restore from backup...'));
        try {
          this.restoreConfig();
          return this.readConfig();
        } catch (restoreError) {
          console.error(
            chalk.red(`Failed to restore from backup: ${restoreError}`),
          );
        }
      }

      return {};
    }
  }

  writeConfig(config: RawiConfig): void {
    this.ensureConfigDir();

    if (this.configExists()) {
      try {
        this.backupConfig();
      } catch (error) {
        console.warn(
          chalk.yellow(`Warning: Failed to create backup: ${error}`),
        );
      }
    }

    try {
      const content = JSON.stringify(config, null, 2);
      writeFileSync(this.configFile, content, 'utf-8');
    } catch (error) {
      throw new Error(
        `Failed to write config file: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  backupConfig(): void {
    if (!this.configExists()) {
      return;
    }

    try {
      copyFileSync(this.configFile, this.backupFile);
    } catch (error) {
      throw new Error(
        `Failed to backup config file: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  restoreConfig(): void {
    if (!existsSync(this.backupFile)) {
      throw new Error('No backup file found');
    }

    try {
      copyFileSync(this.backupFile, this.configFile);
    } catch (error) {
      throw new Error(
        `Failed to restore config file: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  getCredentials(profile = DEFAULT_PROFILE): RawiCredentials | null {
    try {
      const config = this.readConfig();
      const credentials = config[profile];

      if (!credentials) {
        return null;
      }

      if (
        typeof credentials !== 'object' ||
        !credentials.provider ||
        !credentials.model
      ) {
        console.error(
          chalk.red(`Invalid credentials structure for profile '${profile}'`),
        );
        return null;
      }

      return credentials;
    } catch (error) {
      console.error(chalk.red(`Error reading credentials: ${error}`));
      return null;
    }
  }

  setCredentials(
    credentials: RawiCredentials,
    profile = DEFAULT_PROFILE,
  ): void {
    try {
      const config = this.readConfig();
      config[profile] = credentials;
      this.writeConfig(config);
    } catch (error) {
      throw new Error(
        `Failed to save credentials: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  listProfiles(): string[] {
    try {
      const config = this.readConfig();
      return Object.keys(config).filter((key) => {
        const credentials = config[key];
        return (
          credentials &&
          typeof credentials === 'object' &&
          credentials.provider &&
          credentials.model
        );
      });
    } catch (error) {
      console.error(chalk.red(`Error listing profiles: ${error}`));
      return [];
    }
  }

  deleteProfile(profile: string): boolean {
    try {
      const config = this.readConfig();

      if (!(profile in config)) {
        return false;
      }

      this.backupConfig();

      delete config[profile];
      this.writeConfig(config);
      return true;
    } catch (error) {
      console.error(chalk.red(`Error deleting profile: ${error}`));
      return false;
    }
  }

  getConfigFile(): string {
    return this.configFile;
  }

  getConfigDir(): string {
    return this.configDir;
  }

  getBackupFile(): string {
    return this.backupFile;
  }
}
