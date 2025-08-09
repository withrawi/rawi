import type {
  SessionDisplayInfo,
  SessionStats,
} from '../../cli/commands/chat/types.js';
import type {ChatSession} from '../shared/types.js';

/**
 * Utility functions for session formatting and display
 */
export namespace SessionFormatUtils {
  /**
   * Format session for table display
   */
  export function formatSessionTable(sessions: ChatSession[]): string {
    if (sessions.length === 0) {
      return 'No sessions found.';
    }

    const headers = [
      'ID',
      'Title',
      'Profile',
      'Messages',
      'Created',
      'Last Updated',
    ];
    const rows = sessions.map((session) => [
      session.id.substring(0, 8) + '...',
      session.title || 'Untitled',
      session.profile,
      session.messageCount.toString(),
      formatDate(session.createdAt),
      formatRelativeTime(session.updatedAt),
    ]);

    return createTable(headers, rows);
  }

  /**
   * Format session for JSON output
   */
  export function formatSessionJSON(sessions: ChatSession[]): string {
    return JSON.stringify(sessions, null, 2);
  }

  /**
   * Format session summary
   */
  export function formatSessionSummary(sessions: ChatSession[]): string {
    if (sessions.length === 0) {
      return 'No sessions found.';
    }

    const totalMessages = sessions.reduce((sum, s) => sum + s.messageCount, 0);
    const profiles = [...new Set(sessions.map((s) => s.profile))];

    let summary = '📊 Session Summary\n';
    summary += '═══════════════════\n';
    summary += `Total Sessions: ${sessions.length}\n`;
    summary += `Total Messages: ${totalMessages}\n`;
    summary += `Profiles: ${profiles.join(', ')}\n`;
    summary += `Average Messages per Session: ${Math.round(totalMessages / sessions.length)}\n\n`;

    summary += 'Recent Sessions:\n';
    summary += '════════════════\n';

    const recentSessions = sessions.slice(0, 5);
    recentSessions.forEach((session, index) => {
      summary += `${index + 1}. ${session.title || 'Untitled'}\n`;
      summary += `   Profile: ${session.profile} | Messages: ${session.messageCount}\n`;
      summary += `   Updated: ${formatRelativeTime(session.updatedAt)}\n\n`;
    });

    return summary;
  }

  /**
   * Format session for display info
   */
  export function toDisplayInfo(session: ChatSession): SessionDisplayInfo {
    return {
      id: session.id,
      title: session.title || 'Untitled Chat',
      profile: session.profile,
      createdAt: session.createdAt,
      updatedAt: session.updatedAt,
      messageCount: session.messageCount,
      lastActivity: session.updatedAt,
      age: formatRelativeTime(session.updatedAt),
    };
  }

  /**
   * Format session statistics
   */
  export function formatSessionStats(stats: SessionStats): string {
    let output = '📈 Session Statistics\n';
    output += '══════════════════════\n';
    output += `Total Messages: ${stats.messageCount}\n`;
    output += `Created: ${formatDate(stats.createdAt)}\n`;
    output += `Last Updated: ${formatDate(stats.updatedAt)}\n`;
    output += `Duration: ${stats.duration}\n`;

    if (stats.providers.length > 0) {
      output += `Providers: ${stats.providers.join(', ')}\n`;
    }

    if (stats.models.length > 0) {
      output += `Models: ${stats.models.join(', ')}\n`;
    }

    return output;
  }

  // Helper functions

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  function formatRelativeTime(dateString: string): string {
    const now = Date.now();
    const date = new Date(dateString).getTime();
    const diffMs = now - date;

    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHours > 0) return `${diffHours}h ago`;
    if (diffMinutes > 0) return `${diffMinutes}m ago`;
    return `${diffSeconds}s ago`;
  }

  function createTable(headers: string[], rows: string[][]): string {
    // Calculate column widths
    const widths = headers.map((header, i) => {
      const cellWidths = rows.map((row) => row[i]?.length || 0);
      return Math.max(header.length, ...cellWidths);
    });

    // Create header row
    const headerRow = headers
      .map((header, i) => header.padEnd(widths[i]))
      .join(' │ ');
    const separator = widths.map((w) => '─'.repeat(w)).join('─┼─');

    // Create data rows
    const dataRows = rows.map((row) =>
      row.map((cell, i) => cell.padEnd(widths[i])).join(' │ '),
    );

    return [headerRow, separator, ...dataRows].join('\n');
  }
}

/**
 * Utility functions for session search and filtering
 */
export namespace SessionSearchUtils {
  /**
   * Filter sessions by search query
   */
  export function filterSessions(
    sessions: ChatSession[],
    query: string,
  ): ChatSession[] {
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
   * Filter sessions by date range
   */
  export function filterByDateRange(
    sessions: ChatSession[],
    fromDate?: string,
    toDate?: string,
  ): ChatSession[] {
    let filtered = sessions;

    if (fromDate) {
      const from = new Date(fromDate).getTime();
      filtered = filtered.filter(
        (session) => new Date(session.createdAt).getTime() >= from,
      );
    }

    if (toDate) {
      const to = new Date(toDate).getTime();
      filtered = filtered.filter(
        (session) => new Date(session.createdAt).getTime() <= to,
      );
    }

    return filtered;
  }

  /**
   * Filter sessions by profile
   */
  export function filterByProfile(
    sessions: ChatSession[],
    profile: string,
  ): ChatSession[] {
    return sessions.filter((session) => session.profile === profile);
  }

  /**
   * Sort sessions by specified criteria
   */
  export function sortSessions(
    sessions: ChatSession[],
    sortBy: 'createdAt' | 'updatedAt' | 'title' | 'messageCount' = 'updatedAt',
    order: 'asc' | 'desc' = 'desc',
  ): ChatSession[] {
    return [...sessions].sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'createdAt':
          comparison =
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case 'updatedAt':
          comparison =
            new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
          break;
        case 'title':
          comparison = (a.title || '').localeCompare(b.title || '');
          break;
        case 'messageCount':
          comparison = a.messageCount - b.messageCount;
          break;
      }

      return order === 'desc' ? -comparison : comparison;
    });
  }

  /**
   * Get sessions with pagination
   */
  export function paginateSessions(
    sessions: ChatSession[],
    page = 1,
    limit = 10,
  ): {
    sessions: ChatSession[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  } {
    const offset = (page - 1) * limit;
    const paginatedSessions = sessions.slice(offset, offset + limit);
    const totalPages = Math.ceil(sessions.length / limit);

    return {
      sessions: paginatedSessions,
      pagination: {
        page,
        limit,
        total: sessions.length,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };
  }
}

/**
 * Utility functions for session validation
 */
export namespace SessionValidationUtils {
  /**
   * Validate session ID format
   */
  export function isValidSessionId(sessionId: string): boolean {
    // Assuming nanoid format: alphanumeric, length 21
    return /^[A-Za-z0-9_-]{21}$/.test(sessionId);
  }

  /**
   * Validate session title
   */
  export function isValidSessionTitle(title: string): boolean {
    return title.length > 0 && title.length <= 100;
  }

  /**
   * Validate profile name
   */
  export function isValidProfile(profile: string): boolean {
    return (
      profile.length > 0 &&
      profile.length <= 50 &&
      /^[a-zA-Z0-9_-]+$/.test(profile)
    );
  }

  /**
   * Sanitize session title
   */
  export function sanitizeTitle(title: string): string {
    return title
      .trim()
      .replace(/[<>:"/\\|?*]/g, '_')
      .substring(0, 100);
  }

  /**
   * Validate session data completeness
   */
  export function validateSession(session: Partial<ChatSession>): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (!session.id) {
      errors.push('Session ID is required');
    } else if (!isValidSessionId(session.id)) {
      errors.push('Invalid session ID format');
    }

    if (!session.profile) {
      errors.push('Profile is required');
    } else if (!isValidProfile(session.profile)) {
      errors.push('Invalid profile format');
    }

    if (!session.createdAt) {
      errors.push('Created date is required');
    } else if (isNaN(new Date(session.createdAt).getTime())) {
      errors.push('Invalid created date format');
    }

    if (!session.updatedAt) {
      errors.push('Updated date is required');
    } else if (isNaN(new Date(session.updatedAt).getTime())) {
      errors.push('Invalid updated date format');
    }

    if (session.messageCount !== undefined && session.messageCount < 0) {
      errors.push('Message count cannot be negative');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}
