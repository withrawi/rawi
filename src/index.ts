#!/usr/bin/env node

import boxen from 'boxen';
import chalk, {type ChalkInstance} from 'chalk';
import updateNotifier from 'update-notifier';
import packageJson from '../package.json';

const notifier = await updateNotifier({
  pkg: packageJson,
  updateCheckInterval: 1000 * 60 * 60 * 2,
  shouldNotifyInNpmScript: true,
  distTag: 'latest',
});

notifier.notify();

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
  } else {
    throw error;
  }
});

const program = createProgram();

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
