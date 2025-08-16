import * as readline from 'node:readline/promises';
import chalk from 'chalk';
import type {SessionManager} from '../../../../core/session/index.js';
import type {ChatSession} from '../../../../core/shared/types.js';

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

export class SessionSelector {
  readonly #sessionManager: SessionManager;
  readonly #profile: string;

  constructor(sessionManager: SessionManager, profile: string) {
    this.#sessionManager = sessionManager;
    this.#profile = profile;
  }

  #searchSessions(sessions: any[], query: string): any[] {
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

  #formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  #truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength - 3)}...`;
  }

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

    let sessions = await this.#sessionManager.listSessions({
      profile: this.#profile,
      limit: maxResults,
      type: 'chat',
    });

    if (sessions.length === 0) {
      console.log(chalk.yellow('📝 No existing sessions found.'));
      if (allowCreateNew) {
        console.log(chalk.green('🆕 Creating a new session...'));
        return null;
      }
      return null;
    }

    if (enableSearch && sessions.length > 5) {
      const searchQuery = await this.#promptForSearch();
      if (searchQuery) {
        sessions = this.#searchSessions(sessions, searchQuery);
        if (sessions.length === 0) {
          console.log(
            chalk.yellow(`🔍 No sessions found matching "${searchQuery}"`),
          );
          return this.selectSession(options);
        }
      }
    }

    this.#displaySessionList(sessions, showPreview);

    const selectedIndex = await this.#promptForSelection(
      sessions.length,
      allowCreateNew,
    );

    if (selectedIndex === -1) {
      return null;
    }

    if (selectedIndex === -2) {
      return null;
    }

    const selectedSession = sessions[selectedIndex];

    const action = await this.#showSessionActionMenu(selectedSession);

    switch (action.action) {
      case 'continue':
        return selectedSession.id;

      case 'delete':
        await this.#sessionManager.deleteSession(selectedSession.id, {
          force: true,
        });
        console.log(
          chalk.green(`✅ Session "${selectedSession.title}" deleted.`),
        );
        return this.selectSession(options);

      case 'rename':
        if (action.newTitle) {
          await this.#sessionManager.updateSessionTitle(
            selectedSession.id,
            action.newTitle,
            this.#profile,
          );
          console.log(
            chalk.green(`✅ Session renamed to "${action.newTitle}"`),
          );
        }
        return this.selectSession(options);

      case 'export':
        await this.#exportSession(selectedSession);
        return this.selectSession(options);

      case 'create-new':
        return null;
      default:
        return null;
    }
  }

  async #promptForSearch(): Promise<string | null> {
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

  #displaySessionList(sessions: ChatSession[], showPreview: boolean): void {
    console.log(chalk.cyan(`\n📋 Available Sessions (${sessions.length})`));
    console.log(chalk.gray('─'.repeat(50)));

    sessions.forEach((session, index) => {
      const number = chalk.cyan(`${index + 1}.`);
      const title = chalk.white(session.title);
      const date = chalk.gray(this.#formatDate(session.updatedAt));
      const messageCount = chalk.yellow(
        `(${session.messageCount || 0} messages)`,
      );

      console.log(`${number} ${title} ${messageCount}`);
      console.log(`   ${chalk.gray('Last updated:')} ${date}`);

      if (showPreview && session.title) {
        const preview = this.#truncateText(session.title, 80);
        console.log(
          `   ${chalk.gray('Title preview:')} ${chalk.italic(preview)}`,
        );
      }

      console.log();
    });
  }

  async #promptForSelection(
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
        return -2;
      }

      if (trimmed === 'n' || trimmed === 'new') {
        return -1;
      }

      const index = Number.parseInt(trimmed, 10) - 1;

      if (Number.isNaN(index) || index < 0 || index >= sessionCount) {
        console.log(chalk.red('❌ Invalid selection. Please try again.'));
        return this.#promptForSelection(sessionCount, allowCreateNew);
      }

      return index;
    } finally {
      rl.close();
    }
  }

  async #showSessionActionMenu(
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
        default:
          return {action: 'cancel'};
      }
    } finally {
      rl.close();
    }
  }

  async #exportSession(session: ChatSession): Promise<void> {
    try {
      const exportData = await this.#sessionManager.exportSessions('json', {
        profile: this.#profile,
        sessions: [session.id],
      });

      const filename = `session-${session.id.substring(0, 8)}-${new Date().toISOString().split('T')[0]}.json`;

      console.log(chalk.green('✅ Session export prepared:'));
      console.log(chalk.blue(`📁 Filename: ${filename}`));
      console.log(
        chalk.gray(
          `📊 Stats: ${exportData.sessions.length} session, ${Object.values(exportData.messages).flat().length} messages`,
        ),
      );

      console.log(chalk.gray('📋 Export data structure created successfully'));
    } catch (error) {
      console.error(chalk.red(`❌ Export failed: ${error}`));
    }
  }

  async quickSelectSession(query?: string): Promise<string | null> {
    const sessions = await this.#sessionManager.listSessions({
      profile: this.#profile,
      limit: 20,
      type: 'chat',
    });

    if (sessions.length === 0) {
      return null;
    }

    let filteredSessions = sessions;

    if (query) {
      filteredSessions = this.#searchSessions(sessions, query);

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

    return this.selectSession({
      showPreview: true,
      enableSearch: false,
      allowCreateNew: true,
      maxResults: 10,
    });
  }
}
