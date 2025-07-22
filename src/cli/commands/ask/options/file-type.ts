import type { CommandOption } from '../types.js';
import chalk from 'chalk';

export const fileTypeOption: CommandOption = {
  flags: '--file-type <type>',
  description: chalk.white(
    'Override automatic file type detection (pdf, docx, pptx, xlsx, odt, odp, ods, txt, etc.)',
  ),
};
