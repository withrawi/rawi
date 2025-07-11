import {input} from '@inquirer/prompts';
import chalk from 'chalk';

export class ProviderConfigManager {
  // Ollama specific methods
  async getBaseURL(defaultBaseURL?: string): Promise<string | undefined> {
    console.log(
      chalk.gray(
        '\nNote: The Base URL is where your Ollama server is running.',
      ),
    );
    console.log(
      chalk.gray(
        'The default is "http://localhost:11434/api" which works for local installations.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for Ollama:',
      default: defaultBaseURL || 'http://localhost:11434/api',
    });

    if (baseURL === 'http://localhost:11434/api') {
      return undefined;
    }

    return baseURL;
  }

  // LM Studio specific methods
  async getBaseURLLMStudio(
    defaultBaseURL?: string,
  ): Promise<string | undefined> {
    console.log(
      chalk.gray(
        '\nNote: The Base URL is where your LM Studio server is running.',
      ),
    );
    console.log(
      chalk.gray(
        'The default is "http://localhost:1234/v1" which works for local installations.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for LM Studio:',
      default: defaultBaseURL || 'http://localhost:1234/v1',
    });

    if (baseURL === 'http://localhost:1234/v1') {
      return undefined;
    }

    return baseURL;
  }

  // Qwen specific methods
  async getQwenBaseURL(defaultBaseURL?: string): Promise<string | undefined> {
    console.log(chalk.gray('\nNote: The Base URL is the Qwen API endpoint.'));
    console.log(
      chalk.gray(
        'The default is "https://dashscope-intl.aliyuncs.com/compatible-mode/v1" for Alibaba Cloud.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for Qwen:',
      default:
        defaultBaseURL ||
        'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
    });

    if (baseURL === 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1') {
      return undefined;
    }

    return baseURL;
  }

  // xAI specific methods
  async getXaiBaseURL(defaultBaseURL?: string): Promise<string | undefined> {
    console.log(chalk.gray('\nNote: The Base URL is the xAI API endpoint.'));
    console.log(
      chalk.gray('The default is "https://api.x.ai/v1" for xAI services.'),
    );

    const baseURL = await input({
      message: 'Base URL for xAI:',
      default: defaultBaseURL || 'https://api.x.ai/v1',
    });

    if (baseURL === 'https://api.x.ai/v1') {
      return undefined;
    }

    return baseURL;
  }

  // Anthropic specific methods
  async getAnthropicBaseURL(
    defaultBaseURL?: string,
  ): Promise<string | undefined> {
    console.log(
      chalk.gray('\nNote: The Base URL is the Anthropic API endpoint.'),
    );
    console.log(
      chalk.gray(
        'The default is "https://api.anthropic.com" for Anthropic services.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for Anthropic:',
      default: defaultBaseURL || 'https://api.anthropic.com',
    });

    if (baseURL === 'https://api.anthropic.com') {
      return undefined;
    }

    return baseURL;
  }

  // OpenAI specific methods
  async getOpenAIBaseURL(defaultBaseURL?: string): Promise<string | undefined> {
    console.log(chalk.gray('\nNote: The Base URL is the OpenAI API endpoint.'));
    console.log(
      chalk.gray(
        'The default is "https://api.openai.com/v1" for OpenAI services.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for OpenAI:',
      default: defaultBaseURL || 'https://api.openai.com/v1',
    });

    if (baseURL === 'https://api.openai.com/v1') {
      return undefined;
    }

    return baseURL;
  }

  // Google specific methods
  async getGoogleBaseURL(defaultBaseURL?: string): Promise<string | undefined> {
    console.log(
      chalk.gray(
        '\nNote: The Base URL is the Google Generative AI API endpoint.',
      ),
    );
    console.log(
      chalk.gray(
        'The default is "https://generativelanguage.googleapis.com/v1beta" for Google services.',
      ),
    );

    const baseURL = await input({
      message: 'Base URL for Google:',
      default:
        defaultBaseURL || 'https://generativelanguage.googleapis.com/v1beta',
    });

    if (baseURL === 'https://generativelanguage.googleapis.com/v1beta') {
      return undefined;
    }

    return baseURL;
  }
}
