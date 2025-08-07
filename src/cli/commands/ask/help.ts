import chalk from 'chalk';

export const askCommandHelpText = [
  chalk.bold.cyan('\nExamples:'),
  chalk.gray('  rawi ask "What is this document about?" --file report.pdf'),
  chalk.gray('  rawi ask "Analyze this data" --file data.xlsx'),
  chalk.gray('  rawi ask "Review this code" --file src/app.js'),
  chalk.gray(
    '  rawi ask "Summarize" --file document.docx --act technical-writer',
  ),
  chalk.gray(
    '  echo "Additional context" | rawi ask "Analyze" --file data.json',
  ),
  '',
  chalk.bold.cyan('Batch Processing:'),
  chalk.gray(
    '  rawi ask "Review these files" --files file1.js file2.py file3.md',
  ),
  chalk.gray('  rawi ask "Analyze source code" --batch "src/**/*.{js,ts}"'),
  chalk.gray('  rawi ask "Review docs" --batch "docs/**/*.md" --parallel'),
  chalk.gray(
    '  rawi ask "Check configs" --batch "**/*.{json,yml,yaml}" --continue-on-error',
  ),
  '',
  chalk.bold.cyan('Content Filtering:'),
  chalk.gray('  rawi ask "Analyze this data" --filter-sensitive'),
  chalk.gray(
    '  rawi ask "Process this info" --filter-types email,phone,creditcard',
  ),
  chalk.gray('  rawi ask "Check this text" --filter-sensitive --show-filtered'),
  chalk.gray(
    '  rawi ask "Analyze this data" --filter-sensitive --highlight-filtered',
  ),
  chalk.gray(
    '  rawi ask "Process this file" --file customer-data.csv --filter-sensitive --verbose',
  ),
  chalk.gray(
    '  rawi ask "Save my settings" --filter-types email,phone --save-filter-config',
  ),
  chalk.gray('  rawi ask --reset-filter-config'),
  chalk.gray(
    '  rawi ask "What filter types are available?" --filter-sensitive --verbose',
  ),
  '',
  chalk.bold.cyan('See also:'),
  chalk.gray('  rawi act --list'),
  chalk.gray('  rawi provider --list'),
  chalk.gray('  rawi configure --show'),
  chalk.gray('  rawi ask --help'),
].join('\n');
