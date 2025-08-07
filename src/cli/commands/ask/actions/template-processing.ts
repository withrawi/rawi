import chalk from 'chalk';
import {applyActTemplate} from '../../../../core/templates/utils.js';

export const processActTemplate = (
  actTemplate: string,
  query: string,
  options: any,
): string => {
  try {
    const processedQuery = applyActTemplate(actTemplate, query);
    if (options.verbose) {
      console.log(chalk.dim(`🎭 Using act template: ${actTemplate}`));
    }
    return processedQuery;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    if (options.verbose) {
      console.error(chalk.red(`❌ ${errorMessage}`));
      console.log(
        chalk.yellow('💡 Use "rawi act --list" to see available templates.'),
      );
    }
    throw error;
  }
};
