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
      'A developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses. Inspired by Jordanian storytelling, Rawi (راوي).',
    )
    .version(versionString, '-V, --version', 'Show version information');

  program.addCommand(createConfigureCommand());
  program.addCommand(createAskCommand());
  program.addCommand(createHistoryCommand());
  program.addCommand(createInfoCommand());
  program.addCommand(createActCommand());

  program.addCommand(createProviderCommand());

  return program;
};
