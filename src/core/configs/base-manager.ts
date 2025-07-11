import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import chalk from 'chalk';
import {DEFAULT_PROFILE} from '../shared/constants.js';
import type {RawiConfig, RawiCredentials} from '../shared/types.js';
import {getConfigDir, getCredentialsFilePath} from '../shared/utils.js';

export class BaseConfigManager {
  protected readonly configDir: string;
  protected readonly configFile: string;

  constructor() {
    this.configDir = getConfigDir();
    this.configFile = getCredentialsFilePath();
  }

  protected ensureConfigDir(): void {
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

  protected readConfig(): RawiConfig {
    if (!existsSync(this.configFile)) {
      return {};
    }

    try {
      const content = readFileSync(this.configFile, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      throw new Error(
        `Failed to read config file: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  protected writeConfig(config: RawiConfig): void {
    this.ensureConfigDir();

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

  getCredentials(profile = DEFAULT_PROFILE): RawiCredentials | null {
    try {
      const config = this.readConfig();
      return config[profile] || null;
    } catch (error) {
      console.error(chalk.red(`Error reading credentials: ${error}`));
      return null;
    }
  }

  setCredentials(
    credentials: RawiCredentials,
    profile = DEFAULT_PROFILE,
  ): void {
    const config = this.readConfig();
    config[profile] = credentials;
    this.writeConfig(config);
  }

  listProfiles(): string[] {
    try {
      const config = this.readConfig();
      return Object.keys(config);
    } catch {
      return [];
    }
  }

  deleteProfile(profile: string): boolean {
    try {
      const config = this.readConfig();
      if (!(profile in config)) {
        return false;
      }

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
}
