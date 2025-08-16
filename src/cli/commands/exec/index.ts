import chalk from 'chalk';
import type {DatabaseManager} from '../../../core/database/manager.js';
import {DEFAULT_PROFILE} from '../../../core/shared/constants.js';
import {
  displayExecResult,
  processExecCommand,
  saveExecSession,
  validateCredentials,
  validateProfile,
} from './actions/index.js';
import {execCommandOptions} from './options/index.js';
import type {ExecOptions} from './types.js';

export {execCommandOptions};

export async function startExecSession(
  dbManager: DatabaseManager,
  description: string,
  options: ExecOptions,
): Promise<void> {
  const profile = options.profile || DEFAULT_PROFILE;

  if (options.verbose) {
    console.log(chalk.dim(`🔧 Using profile: ${profile}`));
    console.log(chalk.dim(`📝 Description: ${description}`));
  }

  const profileValidation = await validateProfile(profile);
  if (!profileValidation.isValid) {
    throw new Error(`Invalid profile: ${profileValidation.error}`);
  }

  const credentialsValidation = await validateCredentials(profile);
  if (!credentialsValidation.isValid) {
    throw new Error(`Invalid credentials: ${credentialsValidation.error}`);
  }

  const result = await processExecCommand(description, options);

  if (!options.dryRun) {
    const sessionId = await saveExecSession(
      dbManager,
      description,
      result,
      options,
    );
    if (options.verbose) {
      console.log(chalk.dim(`💾 Session saved with ID: ${sessionId}`));
    }
  }

  displayExecResult(result, options.verbose || false);
}
