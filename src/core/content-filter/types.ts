export interface PatternDefinition {
  type: string;
  pattern: RegExp;
  replacement: string;
  description: string;
}

export interface FilterOptions {
  enabled: boolean;
  types: string[];
  showFiltered: boolean;
  customPatterns?: RegExp[];
}

export interface FilterResult {
  filteredText: string;
  filterCount: Record<string, number>;
  originalText?: string;
}
