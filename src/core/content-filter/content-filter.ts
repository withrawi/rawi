import {loadFilterConfig, resetFilterConfig, saveFilterConfig} from './config';
import {
  applyPattern,
  getAvailablePatternTypes,
  getPatternByType,
  type PatternDefinition,
} from './patterns';

export interface FilterOptions {
  enabled: boolean;
  types: string[];
  showFiltered: boolean;
  highlightFiltered?: boolean;
  customPatterns?: RegExp[];
}

export interface FilterResult {
  filteredText: string;
  filterCount: Record<string, number>;
  originalText?: string;
  highlightedText?: string;
}

export const DEFAULT_FILTER_OPTIONS: FilterOptions = {
  enabled: true,
  types: getAvailablePatternTypes(),
  showFiltered: false,
  highlightFiltered: false,
};

export class ContentFilter {
  private options: FilterOptions;
  private patterns: PatternDefinition[];
  private customPatternDefinitions: PatternDefinition[];

  constructor(options: Partial<FilterOptions> = {}, loadFromDisk = false) {
    if (loadFromDisk) {
      this.options = {
        ...loadFilterConfig(),
        ...options,
      };
    } else {
      this.options = {
        ...DEFAULT_FILTER_OPTIONS,
        ...options,
      };
    }

    this.customPatternDefinitions = [];
    if (this.options.customPatterns) {
      this.customPatternDefinitions = this.options.customPatterns.map(
        (pattern, index) => ({
          type: `custom-${index}`,
          pattern,
          replacement: '[CUSTOM_FILTERED]',
          description: `Custom pattern ${index + 1}`,
        }),
      );
    }

    this.patterns = this.getActivePatterns();
  }

  public filterContent(text: string): FilterResult {
    if (!this.options.enabled || !text) {
      return {
        filteredText: text,
        filterCount: {},
        ...(this.options.showFiltered ? {originalText: text} : {}),
        ...(this.options.highlightFiltered ? {highlightedText: text} : {}),
      };
    }

    let filteredText = text;
    const filterCount: Record<string, number> = {};
    let highlightedText = text;

    for (const pattern of this.patterns) {
      const result = applyPattern(filteredText, pattern);
      filteredText = result.filteredText;

      if (result.count > 0) {
        filterCount[pattern.type] = result.count;

        if (this.options.highlightFiltered) {
          const regex = pattern.pattern;
          highlightedText = highlightedText.replace(regex, (match) => {
            return `\x1b[43m\x1b[30m${match}\x1b[0m`;
          });
        }
      }
    }

    return {
      filteredText,
      filterCount,
      ...(this.options.showFiltered ? {originalText: text} : {}),
      ...(this.options.highlightFiltered ? {highlightedText} : {}),
    };
  }

  public getAvailableFilterTypes(): string[] {
    return getAvailablePatternTypes();
  }

  public enableFilterTypes(types: string[]): void {
    this.options.types = types;
    this.patterns = this.getActivePatterns();
  }

  public setEnabled(enabled: boolean): void {
    this.options.enabled = enabled;
  }

  public setShowFiltered(show: boolean): void {
    this.options.showFiltered = show;
  }

  public setHighlightFiltered(highlight: boolean): void {
    this.options.highlightFiltered = highlight;
  }

  public addCustomPattern(
    pattern: RegExp,
    replacement = '[CUSTOM_FILTERED]',
    description = 'Custom pattern',
  ): string {
    const type = `custom-${this.customPatternDefinitions.length}`;

    const patternDef: PatternDefinition = {
      type,
      pattern,
      replacement,
      description,
    };

    this.customPatternDefinitions.push(patternDef);
    this.patterns = this.getActivePatterns();

    return type;
  }

  public getOptions(): FilterOptions {
    return {...this.options};
  }

  public loadConfiguration(): FilterOptions {
    const config = loadFilterConfig();
    this.options = {
      ...config,
      customPatterns: this.options.customPatterns,
    };
    this.patterns = this.getActivePatterns();
    return this.getOptions();
  }

  public saveConfiguration(): boolean {
    return saveFilterConfig(this.getOptions());
  }

  public resetConfiguration(): boolean {
    const success = resetFilterConfig();
    if (success) {
      this.options = {...DEFAULT_FILTER_OPTIONS};
      this.patterns = this.getActivePatterns();
    }
    return success;
  }

  private getActivePatterns(): PatternDefinition[] {
    const activePatterns: PatternDefinition[] = [];

    for (const type of this.options.types) {
      const pattern = getPatternByType(type);
      if (pattern) {
        activePatterns.push(pattern);
      }
    }

    activePatterns.push(...this.customPatternDefinitions);

    return activePatterns;
  }
}
