import chalk from 'chalk';
import {getCredentials, isConfigured} from '../../../../core/configs/utils.js';
import {DatabaseManager} from '../../../../core/database/manager.js';
import {spinnerManager} from '../../../../core/shared/spinner.js';

export const validateProfile = (profile: string, options: any): void => {
  if (!isConfigured(profile)) {
    if (options.verbose) {
      console.error(
        chalk.red(
          `❌ Profile '${profile}' does not exist or is not properly configured.`,
        ),
      );
      console.error(
        chalk.yellow(
          `Run 'rawi configure -p ${profile}' to set up this profile.`,
        ),
      );
    }
    process.exit(1);
  }
};

export const handleSession = async (
  dbManager: DatabaseManager,
  profile: string,
  options: any
): Promise<string> => {
  let sessionId: string;
  
  if (options.newSession) {
    sessionId = await dbManager.createSession(profile);
    if (options.verbose) {
      console.log(chalk.dim(`🆕 Started new session: ${sessionId}`));
    }
  } else if (options.session) {
    sessionId = options.session;
    const session = await dbManager.getSession(sessionId);
    if (!session) {
      if (options.verbose) {
        console.error(chalk.red(`❌ Session '${sessionId}' not found.`));
      }
      process.exit(1);
    }
    if (session.profile !== profile) {
      if (options.verbose) {
        console.error(
          chalk.red(
            `❌ Session '${sessionId}' belongs to profile '${session.profile}', not '${profile}'.`,
          ),
        );
      }
      process.exit(1);
    }
    if (options.verbose) {
      console.log(chalk.dim(`🔄 Continuing session: ${sessionId}`));
    }
  } else {
    sessionId = await dbManager.getCurrentSession(profile);
    if (options.verbose) {
      console.log(chalk.dim(`📝 Using current session: ${sessionId}`));
    }
  }

  return sessionId;
};

export const validateCredentials = (profile: string, options: any): any => {
  if (options.verbose) {
    spinnerManager.start('validation', 'Validating configuration...');
  }

  const credentials = getCredentials(profile);

  if (!credentials) {
    if (options.verbose) {
      spinnerManager.fail(
        'validation',
        'Configuration validation failed',
      );
      console.error(
        chalk.red(
          `❌ Unable to load credentials for profile '${profile}'.`,
        ),
      );
    }
    process.exit(1);
  }

  if (options.verbose) {
    spinnerManager.succeed(
      'validation',
      'Configuration validated successfully',
    );
  }

  return credentials;
};

export const logProcessingInfo = (
  profile: string,
  filteredQuery: string,
  options: any
): void => {
  if (options.verbose) {
    console.log(`Using profile: ${profile}`);
    console.log(
      `Processing query: ${filteredQuery.length > 100 ? `${filteredQuery.substring(0, 100)}...` : filteredQuery}`,
    );
  }
};
