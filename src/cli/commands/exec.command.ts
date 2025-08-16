import {input} from '@inquirer/prompts';
import chalk from 'chalk';
import {Command} from 'commander';
import type {DatabaseManager} from '../../core/database/manager.js';
import {execCommandOptions, startExecSession} from './exec/index.js';
import type {ExecOptions} from './exec/types.js';

const readStdin = (): Promise<string> => {
  return new Promise((resolve) => {
    let data = '';

    if (process.stdin.isTTY) {
      resolve('');
      return;
    }

    process.stdin.setEncoding('utf8');

    process.stdin.on('data', (chunk) => {
      data += chunk;
    });

    process.stdin.on('end', () => {
      resolve(data.trim());
    });
  });
};

export const createExecCommand = (): Command => {
  const execCommand = new Command('exec');

  execCommand
    .description(
      [
        chalk.bold('Convert natural language to executable CLI commands.'),
        '',
        chalk.gray('Describe what you want to do and get the right command.'),
        chalk.gray('Use --dry-run to see the command without executing it.'),
        chalk.gray('Use --profile to specify which AI provider to use.'),
        '─'.repeat(80),
      ].join('\n'),
    )
    .argument(
      '[description]',
      chalk.white(
        'Description of what you want to accomplish with the command',
      ),
    );

  execCommandOptions.forEach((option) => {
    if ('defaultValue' in option && option.defaultValue !== undefined) {
      if (typeof option.defaultValue === 'string') {
        execCommand.option(
          option.flags,
          option.description,
          option.defaultValue,
        );
      } else if (typeof option.defaultValue === 'boolean') {
        execCommand.option(
          option.flags,
          option.description,
          option.defaultValue,
        );
      } else {
        execCommand.option(
          option.flags,
          option.description,
          String(option.defaultValue),
        );
      }
    } else {
      execCommand.option(option.flags, option.description);
    }
  });

  execCommand.action(async (description: string, options: ExecOptions) => {
    let dbManager: DatabaseManager | null = null;

    try {
      let finalDescription = description;

      if (!finalDescription) {
        const stdinContent = await readStdin();
        if (stdinContent) {
          finalDescription = stdinContent;
        }
      }

      if (!finalDescription && process.stdin.isTTY) {
        const userInput = await input({
          message: 'What would you like to do?',
          required: true,
        });
        finalDescription = userInput;
      }

      if (!finalDescription || finalDescription.trim() === '') {
        execCommand.help();
        return;
      }

      if (options.verbose) {
        console.log(chalk.dim('🚀 Starting exec session...'));
      }

      dbManager = new (
        await import('../../core/database/manager.js')
      ).DatabaseManager();
      await startExecSession(dbManager, finalDescription, options);
    } catch (error) {
      if (options.verbose) {
        console.error('Error in exec session:', error);
      } else {
        console.error(
          chalk.red(
            `❌ ${error instanceof Error ? error.message : 'Unknown error'}`,
          ),
        );
      }
      process.exit(1);
    } finally {
      if (dbManager) {
        dbManager.close();
      }
    }
  });

  return execCommand;
};
