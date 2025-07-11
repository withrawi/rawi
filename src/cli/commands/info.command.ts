import chalk from 'chalk';
import {Command} from 'commander';
import {
  ConfigManager,
  getAllProviders,
  packageInfo,
  spinnerManager,
} from '../../core/index.js';

export const createInfoCommand = (): Command => {
  const command = new Command('info');

  command
    .description(
      [
        chalk.bold('Display information about Rawi and its capabilities.'),
        '',
        chalk.gray(
          'Show version, author, license, configuration status, and more.',
        ),
      ].join('\n'),
    )
    .option('--profiles', chalk.white('Show configured profiles'))
    .action(async (options) => {
      try {
        if (options.profiles) {
          await showProfilesInfo();
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
    const configManager = new ConfigManager();
    const profiles = configManager.listProfiles();
    const providers = getAllProviders();

    spinnerManager.succeed('info-load', 'System information loaded');

    console.log(
      `${chalk.bold.blue('\n🚀 About Rawi (راوي)')}  ${chalk.gray('https://rawi.mkabumattar.com')}`,
    );
    console.log(
      chalk.whiteBright(
        'A developer-friendly AI-powered CLI tool for clear answers, summaries, and analyses.',
      ),
    );
    console.log(
      chalk.gray('Supports OpenAI, Google, Amazon Bedrock, and more.'),
    );

    if (packageInfo.homepage) {
      console.log(
        chalk.bold('📚 Docs: ') + chalk.underline.cyan(packageInfo.homepage),
      );
    }

    console.log(`\n${chalk.bold.blue('📋 System Information')}`);
    console.log(
      `${chalk.blue('   Version:')}  ${chalk.whiteBright(packageInfo.version)}`,
    );
    console.log(
      `${chalk.blue('   Author: ')}  ${chalk.whiteBright(packageInfo.author?.name || 'Mohammad Abu Mattar')}`,
    );
    console.log(
      `${chalk.blue('   License:')}  ${chalk.whiteBright(packageInfo.license || 'MIT')}`,
    );

    console.log(`\n${chalk.bold.blue('⚙️  Configuration Status')}`);
    console.log(
      `${chalk.blue('   Profiles:')}  ${chalk.whiteBright(profiles.length > 0 ? `${profiles.length} configured` : 'No profiles configured')}`,
    );
    console.log(
      `${chalk.blue('   Providers:')} ${chalk.whiteBright(`${providers.length} supported`)}`,
    );

    if (profiles.length > 0) {
      console.log(
        chalk.gray('   • Run ') +
          chalk.cyan('rawi info --profiles') +
          chalk.gray(' to see profile details'),
      );
    } else {
      console.log(
        chalk.yellow('   • Run "rawi configure" to set up your first profile'),
      );
    }

    console.log(
      chalk.gray('   • Run ') +
        chalk.cyan('rawi provider --list') +
        chalk.gray(' to see supported providers'),
    );
    console.log(`\n${chalk.bold.blue('─'.repeat(50))}`);
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
