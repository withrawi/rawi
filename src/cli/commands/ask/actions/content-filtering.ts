import chalk from 'chalk';
import {ContentFilter} from '../../../../core/content-filter/content-filter.js';
import {getAvailablePatternTypes} from '../../../../core/content-filter/patterns.js';

export const setupContentFilter = (
  filteringEnabled: boolean,
  filterTypes: string[] | undefined,
  options: any,
): ContentFilter => {
  const contentFilter = new ContentFilter(
    {
      enabled: filteringEnabled,
      types: filterTypes || getAvailablePatternTypes(),
      showFiltered: options.showFiltered || false,
      highlightFiltered: options.highlightFiltered || false,
    },
    true,
  );

  return contentFilter;
};

export const processFilterTypes = (
  filteringEnabled: boolean,
  options: any,
): string[] | undefined => {
  let filterTypes: string[] | undefined;

  if (filteringEnabled && options.filterTypes) {
    filterTypes = options.filterTypes
      .split(',')
      .map((type: string) => type.trim());

    if (options.verbose) {
      console.log(
        chalk.dim(
          `🔒 Content filtering enabled with types: ${filterTypes?.join(', ') || ''}`,
        ),
      );
    }
  } else if (filteringEnabled) {
    filterTypes = getAvailablePatternTypes();

    if (options.verbose) {
      console.log(
        chalk.dim('🔒 Content filtering enabled with all available types'),
      );
    }
  }

  return filterTypes;
};

export const filterAndDisplayQuery = (
  contentFilter: ContentFilter,
  query: string,
  filteringEnabled: boolean,
  options: any,
): string => {
  if (!filteringEnabled) {
    return query;
  }

  const filterResult = contentFilter.filterContent(query);
  const filteredQuery = filterResult.filteredText;

  if (options.verbose) {
    console.log(chalk.yellow('\n🔍 Query after filtering:'));
    console.log(chalk.yellow('─────────────────────────'));
    console.log(filteredQuery);
    console.log(chalk.yellow('─────────────────────────'));
  }

  return filteredQuery;
};

export const displayFilterStatistics = (
  contentFilter: ContentFilter,
  query: string,
  filteringEnabled: boolean,
  options: any,
): void => {
  if (
    !filteringEnabled ||
    (!options.verbose && !options.showFiltered && !options.highlightFiltered)
  ) {
    return;
  }

  const filterResult = contentFilter.filterContent(query);

  if (Object.keys(filterResult.filterCount).length > 0) {
    if (options.verbose) {
      console.log(chalk.yellow('📊 Prompt Filtering Summary:'));
      console.log(chalk.yellow('─────────────────────────'));

      const totalFiltered = Object.values(filterResult.filterCount).reduce(
        (sum: number, count: number) => sum + count,
        0,
      );
      console.log(chalk.yellow(`Total filtered items: ${totalFiltered}`));

      console.log(chalk.yellow('\nBreakdown by type:'));
      for (const [type, count] of Object.entries(filterResult.filterCount)) {
        const percentage = Math.round(
          ((count as number) / totalFiltered) * 100,
        );
        const bar = '█'.repeat(Math.min(20, Math.floor(percentage / 5)));
        console.log(
          chalk.yellow(
            `  ${type.padEnd(15)}: ${(count as number).toString().padStart(3)} (${percentage}%) ${bar}`,
          ),
        );
      }
    } else {
      const totalFiltered = Object.values(filterResult.filterCount).reduce(
        (sum: number, count: number) => sum + count,
        0,
      );
      console.log(
        chalk.yellow(
          `📊 Filtered ${totalFiltered} sensitive items from prompt`,
        ),
      );

      const sortedTypes = Object.entries(filterResult.filterCount)
        .sort(
          ([, countA], [, countB]) => (countB as number) - (countA as number),
        )
        .slice(0, 3);

      if (sortedTypes.length > 0) {
        const typesList = sortedTypes
          .map(([type, count]) => `${type} (${count})`)
          .join(', ');
        console.log(chalk.yellow(`   Most common: ${typesList}`));
      }

      console.log(
        chalk.dim('   Use --verbose for detailed filtering statistics'),
      );
    }

    if (options.highlightFiltered && filterResult.highlightedText) {
      console.log(
        chalk.yellow('\n🔍 Highlighted sensitive content in prompt:'),
      );
      console.log('─────────────────────────────────────────');
      console.log(filterResult.highlightedText);
      console.log('─────────────────────────────────────────');
    }
  }
};

export const saveFilterConfig = (
  contentFilter: ContentFilter,
  options: any,
): void => {
  const success = contentFilter.saveConfiguration();

  if (success) {
    console.log(chalk.green('✅ Filter configuration saved successfully'));
    if (options.verbose) {
      const config = contentFilter.getOptions();
      console.log(chalk.dim('Enabled:'), config.enabled);
      console.log(chalk.dim('Filter types:'), config.types.join(', '));
      console.log(chalk.dim('Show filtered:'), config.showFiltered);
    }
  } else {
    console.error(chalk.red('❌ Failed to save filter configuration'));
  }
};

export const resetFilterConfig = (options: any): ContentFilter => {
  const contentFilter = new ContentFilter({}, true);
  const success = contentFilter.resetConfiguration();

  if (success) {
    console.log(chalk.green('✅ Filter configuration reset to defaults'));
    if (options.verbose) {
      console.log(
        chalk.dim('Default filter types:'),
        contentFilter.getAvailableFilterTypes().join(', '),
      );
    }
  } else {
    console.error(chalk.red('❌ Failed to reset filter configuration'));
  }

  return contentFilter;
};
