import * as readline from 'node:readline/promises';
import chalk from 'chalk';
import type {ChatSession} from '../../../../core/shared/types.js';
import type {SessionManager} from '../../../../core/session/index.js';

export interface SessionSelectionOptions {
  showPreview?: boolean;
  enableSearch?: boolean;
  allowCreateNew?: boolean;
  maxResults?: number;
}

export interface SessionActionChoice {
  action: 'continue' | 'delete' | 'rename' | 'export' | 'cancel' | 'create-new';
  sessionId?: string;
  newTitle?: string;
}

/**
 * Interactive session selector with search, preview, and action capabilities
 */
export class SessionSelector {
  private readonly sessionManager: SessionManager;
  private readonly profile: string;

  constructor(sessionManager: SessionManager, profile: string) {
    this.sessionManager = sessionManager;
    this.profile = profile;
  }

  /**
   * Helper function to search sessions
   */
  private searchSessions(sessions: any[], query: string): any[] {
    if (!query.trim()) return sessions;

    const lowerQuery = query.toLowerCase();
    return sessions.filter((session) => {
      const titleMatch = (session.title || '')
        .toLowerCase()
        .includes(lowerQuery);
      const profileMatch = session.profile.toLowerCase().includes(lowerQuery);
      const idMatch = session.id.toLowerCase().includes(lowerQuery);

      return titleMatch || profileMatch || idMatch;
    });
  }

  /**
   * Helper function to format date
   */
  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  /**
   * Helper function to truncate text
   */
  private truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  }

  /**
   * Display interactive session selection menu
   */
  async selectSession(
    options: SessionSelectionOptions = {},
  ): Promise<string | null> {
    const {
      showPreview = true,
      enableSearch = true,
      allowCreateNew = true,
      maxResults = 10,
    } = options;

    console.log(chalk.cyan('\n🔍 Session Selection'));
    console.log(chalk.gray('─'.repeat(50)));

    let sessions = await this.sessionManager.listSessions({
      profile: this.profile,
      limit: maxResults,
    });

    if (sessions.length === 0) {
      console.log(chalk.yellow('📝 No existing sessions found.'));
      if (allowCreateNew) {
        console.log(chalk.green('🆕 Creating a new session...'));
        return null; // Signal to create new session
      }
      return null;
    }

    // Search functionality
    if (enableSearch && sessions.length > 5) {
      const searchQuery = await this.promptForSearch();
      if (searchQuery) {
        sessions = this.searchSessions(sessions, searchQuery);
        if (sessions.length === 0) {
          console.log(
            chalk.yellow(`🔍 No sessions found matching "${searchQuery}"`),
          );
          return this.selectSession(options); // Retry selection
        }
      }
    }

    // Display session list
    this.displaySessionList(sessions, showPreview);

    // Get user selection
    const selectedIndex = await this.promptForSelection(
      sessions.length,
      allowCreateNew,
    );

    if (selectedIndex === -1) {
      return null; // Create new session
    }

    if (selectedIndex === -2) {
      return null; // Cancel
    }

    const selectedSession = sessions[selectedIndex];

    // Show session actions menu
    const action = await this.showSessionActionMenu(selectedSession);

    switch (action.action) {
      case 'continue':
        return selectedSession.id;

      case 'delete':
        await this.sessionManager.deleteSession(selectedSession.id, {
          force: true,
        });
        console.log(
          chalk.green(`✅ Session "${selectedSession.title}" deleted.`),
        );
        return this.selectSession(options); // Show selection again

      case 'rename':
        if (action.newTitle) {
          await this.sessionManager.updateSessionTitle(
            selectedSession.id,
            action.newTitle,
            this.profile,
          );
          console.log(
            chalk.green(`✅ Session renamed to "${action.newTitle}"`),
          );
        }
        return this.selectSession(options); // Show selection again

      case 'export':
        await this.exportSession(selectedSession);
        return this.selectSession(options); // Show selection again

      case 'create-new':
        return null; // Create new session

      case 'cancel':
      default:
        return null;
    }
  }

  /**
   * Prompt user for search query
   */
  private async promptForSearch(): Promise<string | null> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    try {
      const query = await rl.question(
        chalk.blue('🔍 Search sessions (or press Enter to skip): '),
      );
      return query.trim() || null;
    } finally {
      rl.close();
    }
  }

  /**
   * Display formatted list of sessions
   */
  private displaySessionList(
    sessions: ChatSession[],
    showPreview: boolean,
  ): void {
    console.log(chalk.cyan(`\n📋 Available Sessions (${sessions.length})`));
    console.log(chalk.gray('─'.repeat(50)));

    sessions.forEach((session, index) => {
      const number = chalk.cyan(`${index + 1}.`);
      const title = chalk.white(session.title);
      const date = chalk.gray(this.formatDate(session.updatedAt));
      const messageCount = chalk.yellow(
        `(${session.messageCount || 0} messages)`,
      );

      console.log(`${number} ${title} ${messageCount}`);
      console.log(`   ${chalk.gray('Last updated:')} ${date}`);

      // Note: ChatSession doesn't have lastMessage, would need to fetch from messages
      if (showPreview && session.title) {
        const preview = this.truncateText(session.title, 80);
        console.log(
          `   ${chalk.gray('Title preview:')} ${chalk.italic(preview)}`,
        );
      }

      console.log(); // Empty line for spacing
    });
  }

  /**
   * Prompt user for session selection
   */
  private async promptForSelection(
    sessionCount: number,
    allowCreateNew: boolean,
  ): Promise<number> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    try {
      let prompt = chalk.blue(`\n🎯 Select session (1-${sessionCount})`);

      if (allowCreateNew) {
        prompt += chalk.blue(', "n" for new');
      }

      prompt += chalk.blue(', or "q" to quit: ');

      const input = await rl.question(prompt);
      const trimmed = input.trim().toLowerCase();

      if (trimmed === 'q' || trimmed === 'quit') {
        return -2; // Cancel
      }

      if (trimmed === 'n' || trimmed === 'new') {
        return -1; // Create new
      }

      const index = Number.parseInt(trimmed, 10) - 1;

      if (Number.isNaN(index) || index < 0 || index >= sessionCount) {
        console.log(chalk.red('❌ Invalid selection. Please try again.'));
        return this.promptForSelection(sessionCount, allowCreateNew);
      }

      return index;
    } finally {
      rl.close();
    }
  }

  /**
   * Show action menu for selected session
   */
  private async showSessionActionMenu(
    session: ChatSession,
  ): Promise<SessionActionChoice> {
    console.log(chalk.cyan(`\n⚡ Actions for "${session.title}"`));
    console.log(chalk.gray('─'.repeat(50)));
    console.log(chalk.white('1. Continue chat'));
    console.log(chalk.yellow('2. Rename session'));
    console.log(chalk.blue('3. Export session'));
    console.log(chalk.red('4. Delete session'));
    console.log(chalk.green('5. Create new session'));
    console.log(chalk.gray('6. Cancel'));

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    try {
      const choice = await rl.question(
        chalk.blue('\n🎯 Select action (1-6): '),
      );

      switch (choice.trim()) {
        case '1':
          return {action: 'continue', sessionId: session.id};

        case '2': {
          const newTitle = await rl.question(
            chalk.blue('📝 Enter new title: '),
          );
          if (newTitle.trim()) {
            return {
              action: 'rename',
              sessionId: session.id,
              newTitle: newTitle.trim(),
            };
          }
          return {action: 'cancel'};
        }

        case '3':
          return {action: 'export', sessionId: session.id};

        case '4': {
          const confirm = await rl.question(
            chalk.red(`⚠️  Delete "${session.title}"? (y/N): `),
          );
          if (confirm.toLowerCase() === 'y') {
            return {action: 'delete', sessionId: session.id};
          }
          return {action: 'cancel'};
        }

        case '5':
          return {action: 'create-new'};

        case '6':
        default:
          return {action: 'cancel'};
      }
    } finally {
      rl.close();
    }
  }

  /**
   * Export a session
   */
  private async exportSession(session: ChatSession): Promise<void> {
    try {
      const exportData = await this.sessionManager.exportSessions('json', {
        profile: this.profile,
        sessions: [session.id],
      });

      const filename = `session-${session.id.substring(0, 8)}-${new Date().toISOString().split('T')[0]}.json`;

      // In a real implementation, you would write to file
      console.log(chalk.green('✅ Session export prepared:'));
      console.log(chalk.blue(`📁 Filename: ${filename}`));
      console.log(
        chalk.gray(
          `📊 Stats: ${exportData.sessions.length} session, ${Object.values(exportData.messages).flat().length} messages`,
        ),
      );

      // For now, just log the data structure
      console.log(chalk.gray('📋 Export data structure created successfully'));
    } catch (error) {
      console.error(chalk.red(`❌ Export failed: ${error}`));
    }
  }

  /**
   * Quick session search and selection
   */
  async quickSelectSession(query?: string): Promise<string | null> {
    const sessions = await this.sessionManager.listSessions({
      profile: this.profile,
      limit: 20,
    });

    if (sessions.length === 0) {
      return null;
    }

    let filteredSessions = sessions;

    if (query) {
      filteredSessions = this.searchSessions(sessions, query);

      if (filteredSessions.length === 0) {
        console.log(chalk.yellow(`🔍 No sessions found matching "${query}"`));
        return null;
      }

      if (filteredSessions.length === 1) {
        const session = filteredSessions[0];
        console.log(chalk.green(`🎯 Found session: "${session.title}"`));
        return session.id;
      }
    }

    // Multiple matches or no query - show selection
    return this.selectSession({
      showPreview: true,
      enableSearch: false, // Already searched if query provided
      allowCreateNew: true,
      maxResults: 10,
    });
  }
}
