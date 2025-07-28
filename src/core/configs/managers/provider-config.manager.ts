import {input} from '@inquirer/prompts';
import chalk from 'chalk';
import type {IProviderConfigManager} from '../interfaces/config-manager.interface.js';

export class ProviderConfigManager implements IProviderConfigManager {
  async getBaseURL(defaultBaseURL?: string): Promise<string | undefined> {
    console.log(
      chalk.gray('Note: The Base URL is where your service is running.'),
    );
    console.log(chalk.gray('Leave empty to use the default endpoint.'));

    const baseURL = await input({
      message: 'Base URL:',
      default: defaultBaseURL || '',
      validate: (input: string) => {
        if (!input.trim()) {
          return true;
        }

        try {
          new URL(input.trim());
          return true;
        } catch {
          return 'Please enter a valid URL (e.g., https://api.example.com)';
        }
      },
    });

    const trimmed = baseURL.trim();
    return trimmed === '' ? undefined : trimmed;
  }

  async getAPIEndpoint(defaultEndpoint?: string): Promise<string | undefined> {
    console.log(chalk.gray('Note: API endpoint for custom deployments.'));
    console.log(chalk.gray('Leave empty to use the default endpoint.'));

    const endpoint = await input({
      message: 'API Endpoint:',
      default: defaultEndpoint || '',
      validate: (input: string) => {
        if (!input.trim()) {
          return true;
        }

        const trimmed = input.trim();
        if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
          return 'Endpoint must start with http:// or https://';
        }

        return true;
      },
    });

    const trimmed = endpoint.trim();
    return trimmed === '' ? undefined : trimmed;
  }

  async getRegion(defaultRegion?: string): Promise<string | undefined> {
    console.log(chalk.gray('Select the region for your cloud provider:'));

    const region = await input({
      message: 'Region:',
      default: defaultRegion || 'us-east-1',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Region is required';
        }
        return true;
      },
    });

    return region.trim();
  }

  async getProjectId(defaultProjectId?: string): Promise<string | undefined> {
    console.log(
      chalk.gray('Note: Project ID from your cloud provider console.'),
    );

    const projectId = await input({
      message: 'Project ID:',
      default: defaultProjectId || '',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Project ID is required';
        }

        const trimmed = input.trim();
        if (!/^[a-zA-Z0-9-]+$/.test(trimmed)) {
          return 'Project ID can only contain letters, numbers, and hyphens';
        }

        return true;
      },
    });

    return projectId.trim();
  }

  async getAccessKey(defaultAccessKey?: string): Promise<string | undefined> {
    console.log(chalk.gray('Note: AWS Access Key ID from your AWS console.'));

    const accessKey = await input({
      message: 'Access Key ID:',
      default: defaultAccessKey || '',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Access Key ID is required';
        }

        const trimmed = input.trim();
        if (trimmed.length < 16 || trimmed.length > 32) {
          return 'Access Key ID should be 16-32 characters long';
        }

        return true;
      },
    });

    return accessKey.trim();
  }

  async getSecretAccessKey(
    defaultSecretKey?: string,
  ): Promise<string | undefined> {
    console.log(
      chalk.gray('Note: AWS Secret Access Key from your AWS console.'),
    );

    const secretKey = await input({
      message: 'Secret Access Key:',
      default: defaultSecretKey || '',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Secret Access Key is required';
        }

        const trimmed = input.trim();
        if (trimmed.length < 16) {
          return 'Secret Access Key seems too short';
        }

        return true;
      },
    });

    return secretKey.trim();
  }

  async getSessionToken(defaultToken?: string): Promise<string | undefined> {
    console.log(
      chalk.gray('Note: Optional session token for temporary AWS credentials.'),
    );
    console.log(chalk.gray('Leave empty if using permanent credentials.'));

    const token = await input({
      message: 'Session Token (optional):',
      default: defaultToken || '',
    });

    const trimmed = token.trim();
    return trimmed === '' ? undefined : trimmed;
  }
}
