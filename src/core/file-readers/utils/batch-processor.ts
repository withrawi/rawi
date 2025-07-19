import {promises as fs} from 'node:fs';
import {performance} from 'node:perf_hooks';
import {glob} from 'glob';
import type {
  BatchFileResult,
  BatchProcessingOptions,
  BatchProcessingSummary,
  GlobOptions,
} from '../interfaces/types.js';
import type {FileReaderManager} from '../managers/file-reader.manager.js';

export class BatchFileProcessor {
  private fileReaderManager: FileReaderManager;

  constructor(fileReaderManager: FileReaderManager) {
    this.fileReaderManager = fileReaderManager;
  }

  async expandGlobPatterns(
    patterns: string[],
    options: GlobOptions = {},
  ): Promise<string[]> {
    const allFiles: string[] = [];

    for (const pattern of patterns) {
      try {
        const files = await glob(pattern, {
          cwd: options.cwd || process.cwd(),
          nocase: options.nocase || false,
          ignore: options.ignore || [],
          absolute: true,
          dot: false,
        });

        allFiles.push(...files);
      } catch (error) {
        console.warn(`Failed to expand glob pattern "${pattern}":`, error);
      }
    }

    return [...new Set(allFiles)].sort();
  }

  async filterSupportedFiles(filePaths: string[]): Promise<string[]> {
    const supportedFiles: string[] = [];

    for (const filePath of filePaths) {
      try {
        await fs.access(filePath);
        if (await this.fileReaderManager.canReadFile(filePath)) {
          supportedFiles.push(filePath);
        }
      } catch {}
    }

    return supportedFiles;
  }

  private async processSingleFile(
    filePath: string,
    _fileType?: string, // TODO: Add support for file type override
  ): Promise<BatchFileResult> {
    const startTime = performance.now();

    try {
      const result = await this.fileReaderManager.readFile(filePath);

      const processingTime = performance.now() - startTime;

      return {
        filePath,
        result,
        processingTime,
      };
    } catch (error) {
      const processingTime = performance.now() - startTime;

      return {
        filePath,
        result: {
          success: false,
          error: error instanceof Error ? error.message : String(error),
        },
        processingTime,
      };
    }
  }

  private async processFilesSequentially(
    filePaths: string[],
    options: BatchProcessingOptions,
  ): Promise<BatchFileResult[]> {
    const results: BatchFileResult[] = [];

    for (let i = 0; i < filePaths.length; i++) {
      const filePath = filePaths[i];

      try {
        const result = await this.processSingleFile(filePath, options.fileType);
        results.push(result);

        if (options.onProgress) {
          options.onProgress(i + 1, filePaths.length, filePath, result.result);
        }

        if (!result.result.success && !options.continueOnError) {
          break;
        }
      } catch (error) {
        if (!options.continueOnError) {
          throw error;
        }

        results.push({
          filePath,
          result: {
            success: false,
            error: error instanceof Error ? error.message : String(error),
          },
          processingTime: 0,
        });

        if (options.onProgress) {
          options.onProgress(i + 1, filePaths.length, filePath);
        }
      }
    }

    return results;
  }

  private async processFilesInParallel(
    filePaths: string[],
    options: BatchProcessingOptions,
  ): Promise<BatchFileResult[]> {
    const maxConcurrency =
      options.maxConcurrency || Math.min(filePaths.length, 5);
    const results: BatchFileResult[] = [];
    let processedCount = 0;

    for (let i = 0; i < filePaths.length; i += maxConcurrency) {
      const chunk = filePaths.slice(i, i + maxConcurrency);

      const chunkPromises = chunk.map(async (filePath) => {
        try {
          const result = await this.processSingleFile(
            filePath,
            options.fileType,
          );

          processedCount++;
          if (options.onProgress) {
            options.onProgress(
              processedCount,
              filePaths.length,
              filePath,
              result.result,
            );
          }

          return result;
        } catch (error) {
          processedCount++;
          const errorResult: BatchFileResult = {
            filePath,
            result: {
              success: false,
              error: error instanceof Error ? error.message : String(error),
            },
            processingTime: 0,
          };

          if (options.onProgress) {
            options.onProgress(
              processedCount,
              filePaths.length,
              filePath,
              errorResult.result,
            );
          }

          if (!options.continueOnError) {
            throw error;
          }

          return errorResult;
        }
      });

      const chunkResults = await Promise.all(chunkPromises);
      results.push(...chunkResults);

      if (!options.continueOnError) {
        const hasFailure = chunkResults.some(
          (result) => !result.result.success,
        );
        if (hasFailure) {
          break;
        }
      }
    }

    return results;
  }

  private generateSummary(results: BatchFileResult[]): BatchProcessingSummary {
    const successfulFiles = results.filter((r) => r.result.success).length;
    const failedFiles = results.length - successfulFiles;
    const totalProcessingTime = results.reduce(
      (sum, r) => sum + r.processingTime,
      0,
    );
    const averageProcessingTime =
      results.length > 0 ? totalProcessingTime / results.length : 0;

    const errors = results
      .filter((r) => !r.result.success)
      .map((r) => ({
        filePath: r.filePath,
        error: r.result.error || 'Unknown error',
      }));

    return {
      totalFiles: results.length,
      successfulFiles,
      failedFiles,
      totalProcessingTime,
      averageProcessingTime,
      results,
      errors,
    };
  }

  async processFiles(
    filePaths: string[],
    options: BatchProcessingOptions = {},
  ): Promise<BatchProcessingSummary> {
    if (filePaths.length === 0) {
      return this.generateSummary([]);
    }

    const results = options.parallel
      ? await this.processFilesInParallel(filePaths, options)
      : await this.processFilesSequentially(filePaths, options);

    return this.generateSummary(results);
  }

  async processGlobPatterns(
    patterns: string[],
    options: BatchProcessingOptions & GlobOptions = {},
  ): Promise<BatchProcessingSummary> {
    const {cwd, nocase, ignore, absolute, dot, ...batchOptions} = options;
    const globOptions = {cwd, nocase, ignore, absolute, dot};

    const expandedFiles = await this.expandGlobPatterns(patterns, globOptions);

    const supportedFiles = await this.filterSupportedFiles(expandedFiles);

    return this.processFiles(supportedFiles, batchOptions);
  }
}
