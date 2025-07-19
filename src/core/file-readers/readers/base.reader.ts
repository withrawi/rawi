import type {FileReaderOptions} from '../interfaces/types.js';
import {BaseFileReader} from '../interfaces/types.js';

export abstract class AbstractFileReader extends BaseFileReader {
  constructor(options: FileReaderOptions = {}) {
    super(options);
  }

  protected async getFileStats(
    filePath: string,
  ): Promise<{size: number; exists: boolean}> {
    const {promises: fs} = await import('node:fs');
    const {stat} = fs;

    try {
      const stats = await stat(filePath);
      return {
        size: stats.size,
        exists: true,
      };
    } catch {
      return {
        size: 0,
        exists: false,
      };
    }
  }

  protected async validateFile(filePath: string): Promise<void> {
    const {exists, size} = await this.getFileStats(filePath);

    if (!exists) {
      throw new Error(`File not found: ${filePath}`);
    }

    this.validateFileSize(size);
  }

  protected logVerbose(message: string): void {
    if (this.options.verbose) {
      console.log(`[FileReader] ${message}`);
    }
  }

  protected handleError(error: unknown, filePath: string): never {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to read file "${filePath}": ${errorMessage}`);
  }
}
