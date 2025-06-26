import {readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import chalk from 'chalk';
import {Command} from 'commander';
import {ConfigManager} from '../../config/manager.js';
import {getAllProviders} from '../../config/providers/index.js';
import {spinnerManager} from '../../shared/spinner.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPackageInfo = () => {
  const possiblePaths = [
    join(__dirname, '..', '..', '..', 'package.json'),
    join(__dirname, '..', '..', '..', '..', 'package.json'),
    join(process.cwd(), 'package.json'),
  ];

  for (const path of possiblePaths) {
    try {
      return JSON.parse(readFileSync(path, 'utf-8'));
    } catch {}
  }

  return {
    name: 'rawi',
    description: 'A developer-friendly AI-powered CLI tool',
    version: '0.0.0',
    author: {name: 'Mohammad Abu Mattar'},
    license: 'MIT',
  };
};

export const createInfoCommand = (): Command => {
  const command = new Command('info');

  command
    .description('Display information about Rawi and its capabilities.')
    .option('--profiles', 'Show configured profiles')
    .option('--providers', 'Show supported AI providers')
    .action(async (options) => {
      try {
        if (options.profiles) {
          await showProfilesInfo();
          return;
        }

        if (options.providers) {
          await showProvidersInfo();
          return;
        }

        await showGeneralInfo();
      } catch (error) {
        console.error(chalk.red(`Error displaying information: ${error}`));
      }
    });

  return command;
};

const showGeneralInfo = async (): Promise<void> => {
  spinnerManager.start('info-load', 'Loading system information...');

  try {
    const pkg = getPackageInfo();
    const configManager = new ConfigManager();
    const profiles = configManager.listProfiles();
    const providers = getAllProviders();

    spinnerManager.succeed('info-load', 'System information loaded');

    console.log(chalk.bold.blue('\n🚀 About Rawi (راوي)'));
    console.log(
      chalk.white(
        'A developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses. It supports multiple AI providers, including OpenAI, Google, Amazon Bedrock, and more.',
      ),
    );
    console.log(
      chalk.white(
        'It aims to provide clear answers, summaries, and analyses quickly and efficiently.',
      ),
    );

    console.log(chalk.bold.blue('\n📋 System Information'));
    console.log(chalk.blue('  Version:') + chalk.white(` ${pkg.version}`));
    console.log(
      chalk.blue('  Author:') +
        chalk.white(` ${pkg.author?.name || 'Mohammad Abu Mattar'}`),
    );
    console.log(
      chalk.blue('  License:') + chalk.white(` ${pkg.license || 'MIT'}`),
    );

    console.log(chalk.bold.blue('\n⚙️  Configuration Status'));
    console.log(
      chalk.blue('  Profiles:') +
        chalk.white(
          ` ${profiles.length > 0 ? `${profiles.length} configured` : 'No profiles configured'}`,
        ),
    );
    console.log(
      chalk.blue('  Providers:') +
        chalk.white(` ${providers.length} supported`),
    );

    if (profiles.length > 0) {
      console.log(
        chalk.gray('  Run "rawi info --profiles" to see profile details'),
      );
    } else {
      console.log(
        chalk.yellow('  Run "rawi configure" to set up your first profile'),
      );
    }

    console.log(
      chalk.gray('\n  Run "rawi info --providers" to see supported providers'),
    );
    console.log(chalk.bold.blue('─'.repeat(50)));
  } catch (error) {
    spinnerManager.fail('info-load', 'Failed to load system information');
    throw error;
  }
};

const showProfilesInfo = async (): Promise<void> => {
  spinnerManager.start('profiles-load', 'Loading profile information...');

  try {
    const configManager = new ConfigManager();
    const profiles = configManager.listProfiles();

    if (profiles.length === 0) {
      spinnerManager.succeed('profiles-load', 'No profiles found');
      console.log(chalk.yellow('\n❌ No profiles configured.'));
      console.log(
        chalk.gray('Run "rawi configure" to set up your first profile.'),
      );
      return;
    }

    spinnerManager.succeed(
      'profiles-load',
      `Found ${profiles.length} profile(s)`,
    );

    console.log(
      chalk.bold.blue(`\n👤 Configured Profiles (${profiles.length})`),
    );

    for (const profile of profiles) {
      const credentials = configManager.getCredentials(profile);
      if (credentials) {
        console.log(chalk.bold(`\n[${profile}]`));
        console.log(
          chalk.blue('  Provider:') + chalk.white(` ${credentials.provider}`),
        );
        console.log(
          chalk.blue('  Model:') + chalk.white(` ${credentials.model}`),
        );
        console.log(
          chalk.blue('  Language:') +
            chalk.white(` ${credentials.language || 'english'}`),
        );
      }
    }

    console.log(
      chalk.gray('\nRun "rawi configure --show" for detailed configuration'),
    );
  } catch (error) {
    spinnerManager.fail('profiles-load', 'Failed to load profile information');
    throw error;
  }
};

const showProvidersInfo = async (): Promise<void> => {
  spinnerManager.start('providers-load', 'Loading provider information...');

  try {
    const providers = getAllProviders();

    spinnerManager.succeed(
      'providers-load',
      `Found ${providers.length} provider(s)`,
    );

    console.log(
      chalk.bold.blue(`\n🤖 Supported AI Providers (${providers.length})`),
    );

    for (const provider of providers) {
      console.log(chalk.bold(`\n${provider.displayName} (${provider.name})`));
      console.log(
        chalk.blue('  Models:') +
          chalk.white(` ${provider.models.length} available`),
      );

      const exampleModels = provider.models.slice(0, 3);
      for (const model of exampleModels) {
        console.log(chalk.gray(`    • ${model.displayName || model.name}`));
      }

      if (provider.models.length > 3) {
        console.log(
          chalk.gray(`    ... and ${provider.models.length - 3} more`),
        );
      }
    }

    console.log(
      chalk.gray(
        '\nRun "rawi configure --list-models <provider>" for all models',
      ),
    );
  } catch (error) {
    spinnerManager.fail(
      'providers-load',
      'Failed to load provider information',
    );
    throw error;
  }
};
