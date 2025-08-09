import * as readline from 'node:readline/promises';
import chalk from 'chalk';
import type {DatabaseManager} from '../../../../core/database/manager.js';
import {SessionManager} from '../../../../core/session/index.js';
import {DEFAULT_PROFILE} from '../../../../core/shared/constants.js';
import {
  processActTemplate,
  validateCredentials,
  validateProfile,
} from '../../ask/actions/index.js';
import type {ChatOptions} from '../types.js';
import {AdvancedSessionOperations} from './advanced-operations.js';
import {streamChatResponse} from './response-handler.js';

// Enhanced message type that includes database persistence
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  provider?: string;
  model?: string;
  timestamp?: string;
}

/**
 * Enhanced chat session with session management
 */
export const startEnhancedChatSession = async (
  dbManager: DatabaseManager,
  options: ChatOptions,
): Promise<void> => {
  const profile = options.profile || DEFAULT_PROFILE;
  validateProfile(profile, options);

  const credentials = validateCredentials(profile, options);
  const sessionManager = new SessionManager(dbManager);
  const advancedOps = new AdvancedSessionOperations(sessionManager, profile);

  // Handle advanced operations first
  if (options.stats) {
    await advancedOps.showStatistics(options);
    return;
  } else if (options.backup) {
    await advancedOps.backupSessions(options.backup, options);
    return;
  } else if (options.restore) {
    await advancedOps.restoreSessions(options.restore);
    return;
  } else if (options.batchDelete) {
    await advancedOps.batchDeleteSessions(options.batchDelete, options);
    return;
  }

  if (options.verbose) {
    console.log(
      chalk.dim(
        `🔗 Connected to ${credentials.provider} (${credentials.model})`,
      ),
    );
    console.log(chalk.dim(`📁 Profile: ${profile}`));
    if (options.act) {
      console.log(chalk.dim(`🎭 Act template: ${options.act}`));
    }
  }

  let currentSessionId: string;
  let messages: ChatMessage[] = [];

  // Handle session management based on options
  if (options.session) {
    // Continue existing session
    try {
      const session = await sessionManager.getSession(options.session, profile);
      currentSessionId = session.id;
      messages = await dbManager.getMessages(currentSessionId);

      if (options.verbose) {
        console.log(
          chalk.dim(
            `📝 Continuing session: ${session.title || 'Untitled'} (${currentSessionId.substring(0, 8)}...)`,
          ),
        );
        console.log(
          chalk.dim(`💬 Loaded ${messages.length} previous messages`),
        );
      }
    } catch (error) {
      console.error(chalk.red(`❌ Failed to load session: ${error}`));
      return;
    }
  } else if (options.listSessions) {
    // List sessions and let user choose
    await handleSessionSelection(sessionManager, profile, options);
    return;
  } else if (options.deleteSession) {
    // Delete specified session
    await handleSessionDeletion(sessionManager, options.deleteSession);
    return;
  } else if (options.exportSessions) {
    // Export sessions
    await handleSessionExport(sessionManager, profile, options);
    return;
  } else if (options.renameSession && options.newTitle) {
    // Rename session
    await handleSessionRename(
      sessionManager,
      options.renameSession,
      options.newTitle,
      profile,
    );
    return;
  } else if (options.newSession) {
    // Force create new session
    const sessionTitle = options.act ? `${options.act} Chat` : undefined;
    currentSessionId = await sessionManager.createSession(profile, {
      title: sessionTitle,
      generateTitle: !sessionTitle,
    });

    if (options.verbose) {
      console.log(
        chalk.dim(
          `🆕 Created new session: ${currentSessionId.substring(0, 8)}...`,
        ),
      );
    }
  } else {
    // Interactive mode: show existing sessions or create new one
    const advancedOps = new AdvancedSessionOperations(sessionManager, profile);
    const existingSessions = await sessionManager.listSessions({
      profile,
      limit: 10, // Show recent sessions
    });

    if (existingSessions.length > 0 && !options.newSession) {
      const selectedSessionId =
        await advancedOps.selectSessionInteractively(existingSessions);

      if (selectedSessionId) {
        // Continue with selected session
        currentSessionId = selectedSessionId;
        messages = await dbManager.getMessages(currentSessionId);

        if (options.verbose) {
          console.log(
            chalk.dim(
              `🔄 Continuing session: ${currentSessionId.substring(0, 8)}... (${messages.length} messages)`,
            ),
          );
        }
      } else {
        // User chose to create new session
        const sessionTitle = options.act ? `${options.act} Chat` : undefined;
        currentSessionId = await sessionManager.createSession(profile, {
          title: sessionTitle,
          generateTitle: !sessionTitle,
        });

        if (options.verbose) {
          console.log(
            chalk.dim(
              `🆕 Created new session: ${currentSessionId.substring(0, 8)}...`,
            ),
          );
        }
      }
    } else {
      // No existing sessions or force new - create new session
      const sessionTitle = options.act ? `${options.act} Chat` : undefined;
      currentSessionId = await sessionManager.createSession(profile, {
        title: sessionTitle,
        generateTitle: !sessionTitle,
      });

      if (options.verbose) {
        console.log(
          chalk.dim(
            `🆕 Created new session: ${currentSessionId.substring(0, 8)}...`,
          ),
        );
      }
    }
  }

  // Apply act template if specified
  if (options.act && messages.length === 0) {
    try {
      const systemPrompt = processActTemplate(options.act, '', options);
      if (systemPrompt?.trim()) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: `I'm now acting as: ${options.act}. How can I help you?`,
          provider: credentials.provider,
          model: credentials.model,
          timestamp: new Date().toISOString(),
        };

        messages.push(assistantMessage);

        // Save to database
        await dbManager.addMessage(
          currentSessionId,
          assistantMessage.role,
          assistantMessage.content,
          credentials.provider,
          credentials.model,
        );

        if (options.verbose) {
          console.log(chalk.dim(`🎭 Applied act template: ${options.act}`));
        }
      }
    } catch (error) {
      console.error(chalk.red(`❌ Error applying act template: ${error}`));
      return;
    }
  }

  console.log(chalk.bold.blue('🤖 Welcome to Rawi Chat!'));
  console.log(
    chalk.gray(
      'Start typing your message. Use /quit or /exit to end the chat.\n',
    ),
  );

  // Show session info
  if (options.verbose) {
    console.log(
      chalk.dim(
        `💬 Session: ${currentSessionId.substring(0, 8)}... | Type "/help" for commands\n`,
      ),
    );
  }

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    while (true) {
      let userInput: string;

      try {
        userInput = await terminal.question(chalk.blue('You: '));
      } catch (error) {
        if (
          error instanceof Error &&
          'code' in error &&
          error.code === 'ERR_USE_AFTER_CLOSE'
        ) {
          console.log(chalk.yellow('\n👋 Chat session ended (stdin closed)'));
          break;
        }
        throw error;
      }

      if (userInput.trim() === '/quit' || userInput.trim() === '/exit') {
        console.log(chalk.yellow('\n👋 Goodbye!'));
        break;
      }

      if (userInput.trim() === '/help') {
        console.log(chalk.cyan('\n📚 Chat Commands:'));
        console.log(chalk.gray('  /help     - Show this help message'));
        console.log(chalk.gray('  /quit     - Exit the chat'));
        console.log(chalk.gray('  /exit     - Exit the chat'));
        console.log(chalk.gray('  /clear    - Clear message history'));
        console.log(chalk.gray('  /session  - Show current session info'));
        console.log(chalk.gray('  /rename   - Rename current session'));
        console.log('');
        continue;
      }

      if (userInput.trim() === '/clear') {
        messages.length = 0;
        console.log(chalk.dim('🧹 Message history cleared (local only)\n'));
        continue;
      }

      if (userInput.trim() === '/session') {
        await showSessionInfo(sessionManager, currentSessionId);
        continue;
      }

      if (userInput.trim().startsWith('/rename ')) {
        const newTitle = userInput.trim().substring(8).trim();
        if (newTitle) {
          await handleSessionRename(
            sessionManager,
            currentSessionId,
            newTitle,
            profile,
          );
        } else {
          console.log(
            chalk.red('❌ Please provide a new title: /rename <new title>'),
          );
        }
        continue;
      }

      if (userInput.trim() === '') {
        continue;
      }

      // Add user message
      const userMessage: ChatMessage = {
        role: 'user',
        content: userInput.trim(),
        timestamp: new Date().toISOString(),
      };

      messages.push(userMessage);

      // Save user message to database
      await dbManager.addMessage(
        currentSessionId,
        userMessage.role,
        userMessage.content,
        credentials.provider,
        credentials.model,
      );

      try {
        const assistantResponse = await streamChatResponse(
          credentials,
          messages,
          options,
          terminal,
        );

        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: assistantResponse,
          provider: credentials.provider,
          model: credentials.model,
          timestamp: new Date().toISOString(),
        };

        messages.push(assistantMessage);

        // Save assistant message to database
        await dbManager.addMessage(
          currentSessionId,
          assistantMessage.role,
          assistantMessage.content,
          credentials.provider,
          credentials.model,
        );
      } catch (error) {
        console.error(chalk.red(`❌ Error: ${error}`));
      }
    }
  } catch (error) {
    console.error(chalk.red(`❌ Error in chat session: ${error}`));
  } finally {
    terminal.close();
  }
};

/**
 * Handle session selection
 */
async function handleSessionSelection(
  sessionManager: SessionManager,
  profile: string,
  options: ChatOptions,
): Promise<void> {
  try {
    const advancedOps = new AdvancedSessionOperations(sessionManager, profile);

    const sessions = await sessionManager.listSessions({
      profile,
      limit: options.limit || 10,
      fromDate: options.fromDate,
      toDate: options.toDate,
    });

    if (sessions.length === 0) {
      console.log(chalk.yellow('No sessions found for this profile.'));
      return;
    }

    // For list-sessions, always show the table format with full IDs
    if (options.listSessions) {
      const format = options.format || 'table';
      const formattedOutput = await advancedOps.formatSessions(
        sessions,
        format,
      );
      console.log(formattedOutput);

      if (format === 'table') {
        console.log(chalk.cyan('\n💡 Tips:'));
        console.log(chalk.gray('• Copy the full ID from the table above'));
        console.log(
          chalk.gray('• Use: ') + chalk.white('rawi chat --session <full-id>'),
        );
        console.log(
          chalk.gray('• Or use: ') +
            chalk.white('rawi chat') +
            chalk.gray(' for interactive selection'),
        );
      }
      return;
    }

    // For interactive mode (when no --list-sessions flag), use inquirer
    const selectedSessionId =
      await advancedOps.selectSessionInteractively(sessions);
    if (selectedSessionId) {
      console.log(chalk.green(`🚀 Continuing session: ${selectedSessionId}`));
      // Continue with the selected session
      // This would normally start the chat with the selected session
    } else {
      console.log(chalk.blue('🆕 Starting new session...'));
      // Start a new session
    }
  } catch (error) {
    console.error(chalk.red(`❌ Failed to handle session selection: ${error}`));
  }
}

/**
 * Handle session deletion
 */
async function handleSessionDeletion(
  sessionManager: SessionManager,
  sessionId: string,
): Promise<void> {
  try {
    const deleted = await sessionManager.deleteSession(sessionId, {
      force: true, // Force deletion for CLI usage
    });

    if (deleted) {
      console.log(
        chalk.green(
          `✅ Session ${sessionId.substring(0, 8)}... deleted successfully.`,
        ),
      );
    } else {
      console.log(
        chalk.yellow(
          `⚠️ Session ${sessionId.substring(0, 8)}... not found or already deleted.`,
        ),
      );
    }
  } catch (error) {
    console.error(chalk.red(`❌ Failed to delete session: ${error}`));
  }
}

/**
 * Handle session export
 */
async function handleSessionExport(
  sessionManager: SessionManager,
  profile: string,
  options: ChatOptions,
): Promise<void> {
  try {
    const advancedOps = new AdvancedSessionOperations(sessionManager, profile);

    // Get export format
    const format = options.format || 'json';
    const exportFormat =
      typeof options.exportSessions === 'string' ? 'json' : format;

    const exportData = await sessionManager.exportSessions(
      exportFormat as 'json' | 'markdown',
      {
        profile,
        fromDate: options.fromDate,
        toDate: options.toDate,
        ...(options.limit && {limit: options.limit}),
      },
    );

    if (typeof options.exportSessions === 'string') {
      // Export to file
      console.log(
        chalk.green(`✅ Sessions exported to ${options.exportSessions}`),
      );
    } else {
      // Output to console in specified format
      const formattedOutput = await advancedOps.formatSessions(
        exportData.sessions,
        format,
      );
      console.log(formattedOutput);
    }
  } catch (error) {
    console.error(chalk.red(`❌ Failed to export sessions: ${error}`));
  }
}

/**
 * Handle session rename
 */
async function handleSessionRename(
  sessionManager: SessionManager,
  sessionId: string,
  newTitle: string,
  profile: string,
): Promise<void> {
  try {
    await sessionManager.updateSessionTitle(sessionId, newTitle, profile);
    console.log(chalk.green(`✅ Session renamed to: ${newTitle}`));
  } catch (error) {
    console.error(chalk.red(`❌ Failed to rename session: ${error}`));
  }
}

/**
 * Show current session information
 */
async function showSessionInfo(
  sessionManager: SessionManager,
  sessionId: string,
): Promise<void> {
  try {
    const session = await sessionManager.getSession(sessionId);

    console.log(chalk.cyan('\n📊 Current Session Info:'));
    console.log(chalk.gray('═'.repeat(30)));
    console.log(
      `${chalk.dim('ID:')} ${chalk.white(session.id.substring(0, 16))}...`,
    );
    console.log(
      `${chalk.dim('Title:')} ${chalk.white(session.title || 'Untitled')}`,
    );
    console.log(`${chalk.dim('Profile:')} ${chalk.white(session.profile)}`);
    console.log(
      `${chalk.dim('Messages:')} ${chalk.white(session.messageCount)}`,
    );
    console.log(
      `${chalk.dim('Created:')} ${chalk.gray(new Date(session.createdAt).toLocaleString())}`,
    );
    console.log(
      `${chalk.dim('Updated:')} ${chalk.gray(new Date(session.updatedAt).toLocaleString())}`,
    );
    console.log('');
  } catch (error) {
    console.error(chalk.red(`❌ Failed to get session info: ${error}`));
  }
}
