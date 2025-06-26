import {readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {Command} from 'commander';
import {
  createAskCommand,
  createConfigureCommand,
  createHistoryCommand,
  createInfoCommand,
} from './commands/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPackageInfo = () => {
  const possiblePaths = [
    join(__dirname, '..', '..', 'package.json'),
    join(__dirname, '..', '..', '..', 'package.json'),
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
  };
};

export const createProgram = (): Command => {
  const pkg = getPackageInfo();

  const program = new Command();

  program
    .name(pkg.name)
    .description(
      'A developer-friendly AI-powered CLI tool that delivers clear answers, summaries, and analyses. Inspired by Jordanian storytelling, Rawi (راوي).',
    )
    .version(pkg.version);

  program.addCommand(createConfigureCommand());
  program.addCommand(createAskCommand());
  program.addCommand(createHistoryCommand());
  program.addCommand(createInfoCommand());

  return program;
};
