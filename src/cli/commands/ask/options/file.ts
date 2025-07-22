import type { CommandOption } from '../types.js';
import chalk from 'chalk';

export const fileOption: CommandOption = {
  flags: '-f, --file <path>',
  description: chalk.white(
    'Process content from a file (PDF, DOCX, PPTX, XLSX, ODT, ODP, ODS, TXT, etc.)',
  ),
};
