import {Command} from 'commander';
import pkg from '../../package.json';
import {
  createActCommand,
  createAskCommand,
  createConfigureCommand,
  createHistoryCommand,
  createInfoCommand,
  createProviderCommand,
} from './commands/index.js';

export const createProgram = (): Command => {
  const program = new Command();

  const nodeVersion = process.version;
  const platform = process.platform;
  const arch = process.arch;
  const versionString = `${pkg.name || 'rawi'}/${pkg.version || '0.0.0'} ${platform}-${arch} node-${nodeVersion.replace('v', '')}`;

  program
    .name(pkg.name)
    .description(
      [
        'A developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses. Inspired by Jordanian storytelling, Rawi (راوي).',
        '',
        'Commands:',
        '',
        '  ask         Ask AI a question and get a response',
        '  act         List and explore act templates',
        '  configure   Configure AI provider settings and profiles',
        '  provider    Show supported AI providers and models',
        '  history     Manage chat history and sessions',
        '  info        Display system and configuration information',
        '',
        'Run `rawi <command> --help` for detailed usage of a command.',
      ].join('\n'),
    )
    .version(versionString, '-V, --version', 'Show version information')
    .addHelpText(
      'afterAll',
      [
        '',
        'Global Options:',
        '  -V, --version   Show version information',
        '  -h, --help      Show help for command',
        '',
        'Docs: https://rawi.mkabumattar.com',
      ].join('\n'),
    );

  program.addCommand(createConfigureCommand());
  program.addCommand(createInfoCommand());
  program.addCommand(createAskCommand());
  program.addCommand(createActCommand());
  program.addCommand(createHistoryCommand());
  program.addCommand(createProviderCommand());

  return program;
};
