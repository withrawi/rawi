#!/usr/bin/env node

import boxen from 'boxen';
import chalk, {type ChalkInstance} from 'chalk';
import leven from 'leven';
import updateNotifier from 'update-notifier';
import packageJson from '../package.json';

const notifier = await updateNotifier({
  pkg: packageJson,
  updateCheckInterval: 1000 * 60 * 60 * 2,
  shouldNotifyInNpmScript: true,
  distTag: 'latest',
});

notifier.notify();

function suggestClosestCommand(
  input: string,
  commands: string[],
): string | null {
  let minDistance = Number.POSITIVE_INFINITY;
  let closest: string | null = null;
  for (const cmd of commands) {
    const dist = leven(input, cmd);
    if (dist < minDistance) {
      minDistance = dist;
      closest = cmd;
    }
  }
  return minDistance <= 2 ? closest : null;
}

if (notifier.update) {
  const {current, latest, type} = notifier.update;
  const packageName = packageJson.name;
  const releaseNotesUrl = packageJson?.repository?.url
    ? `${packageJson.repository.url.replace(/^git\+/, '').replace(/\.git$/, '')}/releases/latest`
    : null;

  let typeColorFn: ChalkInstance;
  let typePrefix = '';
  let emoji = '';

  switch (type) {
    case 'major':
      typeColorFn = chalk.red.bold;
      typePrefix = 'Major ';
      emoji = '🔥';
      break;
    case 'minor':
    case 'patch':
      typeColorFn = chalk.yellow.bold;
      typePrefix = '';
      emoji = '✨';
      break;
    case 'prerelease':
    case 'build':
      typeColorFn = chalk.cyan.italic;
      typePrefix = 'Pre-release ';
      emoji = '🧪';
      break;
    default:
      typeColorFn = chalk.gray;
      typePrefix = '';
      emoji = 'ℹ️';
  }

  const header = chalk
    .hex('#32CD32')
    .bold(`${emoji}  UPDATE AVAILABLE  ${emoji}`);
  const updateTypeInfo = `${chalk.bold(typePrefix)}${typeColorFn(type.toUpperCase())} Update`;
  const versionComparison = `${chalk.dim('Current:')} ${chalk.white(current)} ${chalk.dim('→')} ${chalk.green(latest)} ${chalk.dim('(Latest)')}`;
  const benefitStatement = chalk.whiteBright(
    `Unlock the latest features and bug fixes for ${chalk.bold(packageName)}!`,
  );
  const callToAction = chalk.yellow.bold(
    'Upgrade by running one of these commands:',
  );
  const installCommands = [
    `npm install -g ${packageName} `,
    `pnpm install -g ${packageName}`,
    `yarn global add ${packageName}`,
    `bun add -g ${packageName}     `,
  ]
    .map((cmd) => chalk.blue.bold(`  $ ${cmd}`))
    .join('\n');

  const releaseNotesLine = releaseNotesUrl
    ? `\n${chalk.underline.blue('See release notes:')} ${chalk.dim(releaseNotesUrl)}\n`
    : '';

  const nextSteps = chalk.dim(
    '\nTip: Restart your terminal or IDE after upgrade for changes to take effect.',
  );

  const fullMessage = [
    header,
    '',
    updateTypeInfo,
    '',
    versionComparison,
    '',
    benefitStatement,
    '',
    callToAction,
    installCommands,
    releaseNotesLine,
    nextSteps,
  ].join('\n');

  console.log(
    boxen(fullMessage, {
      padding: 1,
      margin: 1,
      borderColor: '#FF4500',
      borderStyle: 'round',
      backgroundColor: '#1A1A1A',
      textAlignment: 'center',
      title: chalk.bold.white(` ${packageName} Update `),
      titleAlignment: 'center',
      float: 'center',
    }),
  );
}

import {createProgram} from './cli/program.js';

process.on('uncaughtException', (error) => {
  if (error instanceof Error && error.name === 'ExitPromptError') {
    console.log('\n👋 Exiting Rawi. Until next time!');
    process.exit(0);
  }
  if (error instanceof Error) {
    const msg = error.message || '';
    if (msg.includes('Unknown command')) {
      const inputMatch = msg.match(/Unknown command '([^']+)'/);
      const inputCmd = inputMatch ? inputMatch[1] : null;
      const commands = [
        'ask',
        'act',
        'configure',
        'provider',
        'history',
        'info',
      ];
      let suggestion = null;
      if (inputCmd) {
        suggestion = suggestClosestCommand(inputCmd, commands);
      }
      console.error(`\n${chalk.red(`❌ Unknown command: ${inputCmd || msg}`)}`);
      if (suggestion) {
        console.info(chalk.yellowBright(`Did you mean '${suggestion}'?`));
      } else {
        // Fuzzy suggestion for similar commands
        const close = commands.find(
          (cmd) => inputCmd && cmd.startsWith(inputCmd[0]),
        );
        if (close) {
          console.info(chalk.yellowBright(`Did you mean '${close}'?`));
        }
      }
      console.info(
        chalk.gray('Run `rawi --help` to see all available commands.'),
      );
      process.exit(1);
    }
    if (msg.includes('Missing required argument')) {
      console.error(`\n${chalk.red(`❌ ${msg}`)}`);
      console.info(
        chalk.gray('Use `--help` with the command for usage details.'),
      );
      process.exit(1);
    }
    if (msg.includes('Invalid option')) {
      console.error(`\n${chalk.red(`❌ ${msg}`)}`);
      console.info(chalk.gray('Check available options with `--help`.'));
      process.exit(1);
    }
    // Add more helpful error messages for common issues
    if (msg.includes('not configured') || msg.includes('credentials')) {
      console.error(`\n${chalk.red(`❌ ${msg}`)}`);
      console.info(
        chalk.yellow(
          'Run `rawi configure` to set up your provider and credentials.',
        ),
      );
      process.exit(2);
    }
    if (msg.includes('network') || msg.includes('timeout')) {
      console.error(`\n${chalk.red(`❌ ${msg}`)}`);
      console.info(
        chalk.yellow('Check your internet connection or provider status.'),
      );
      process.exit(3);
    }
    if (msg.includes('authentication') || msg.includes('API key')) {
      console.error(`\n${chalk.red(`❌ ${msg}`)}`);
      console.info(
        chalk.yellow('Check your API key and provider configuration.'),
      );
      process.exit(4);
    }
    console.error(`\n${chalk.red(`❌ Unexpected error: ${msg}`)}`);
    console.info(
      chalk.gray(
        'If this issue persists, run `rawi info` for diagnostics or see the Troubleshooting guide.',
      ),
    );
    process.exit(1);
  }
  console.error('\n❌ An unknown error occurred.');
  process.exit(1);
});

const program = createProgram();

if (process.argv.length <= 2) {
  program.outputHelp();
  process.exit(0);
}

program.parse(process.argv);
