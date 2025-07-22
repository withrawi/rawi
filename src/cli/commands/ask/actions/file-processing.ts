import chalk from 'chalk';
import {SupportedFileType} from '../../../../core/file-readers/interfaces/types.js';
import {FileReaderManager} from '../../../../core/file-readers/managers/file-reader.manager.js';

export const processFiles = async (options: any): Promise<{fileContent: string; totalFiles: number}> => {
  let fileContent = '';
  let totalFiles = 0;

  if (options.verbose) {
    console.log(chalk.dim('📄 Processing files...'));
  }

  try {
    let forceFileType: SupportedFileType | undefined;
    if (options.fileType) {
      const fileTypeKey = options.fileType.toUpperCase();
      if (fileTypeKey in SupportedFileType) {
        forceFileType =
          SupportedFileType[
            fileTypeKey as keyof typeof SupportedFileType
          ];
      } else {
        console.error(
          chalk.red(`❌ Unsupported file type: ${options.fileType}`),
        );
        console.log(
          chalk.yellow(
            'Supported types: pdf, docx, pptx, xlsx, odt, odp, ods, txt, js, jsx, ts, tsx, py, java, cpp, c, go, rs, rb, kt, swift, dart, scala, php, json, md, yml, yaml, xml, html, css, sql, sh, bash, env, ini, conf, toml, log, and more',
          ),
        );
        process.exit(1);
      }
    }

    const fileReaderManager = new FileReaderManager({
      verbose: options.verbose,
      forceFileType,
    });

    let result: any;

    if (options.file) {
      result = await fileReaderManager.readFile(options.file);
      if (result.success && result.content) {
        fileContent = result.content.text;
        totalFiles = 1;
      } else {
        console.error(
          chalk.red(`❌ Failed to process file: ${result.error}`),
        );
        process.exit(1);
      }
    } else {
      const maxConcurrency =
        Number.parseInt(options.maxConcurrency) || 5;
      const batchOptions = {
        parallel: options.parallel,
        maxConcurrency,
        continueOnError: options.continueOnError,
        fileType: options.fileType,
        onProgress: options.verbose
          ? (processed: number, total: number, currentFile: string) => {
              console.log(
                chalk.dim(
                  `📝 [${processed}/${total}] Processing: ${currentFile}`,
                ),
              );
            }
          : undefined,
      };

      let summary: any;
      if (options.files) {
        summary = await fileReaderManager.processMultipleFiles(
          options.files,
          batchOptions,
        );
      } else if (options.batch) {
        summary = await fileReaderManager.processGlobPatterns(
          options.batch,
          batchOptions,
        );
      }

      if (summary) {
        const contentParts: string[] = [];
        let successCount = 0;

        for (const fileResult of summary.results) {
          if (fileResult.result.success && fileResult.result.content) {
            contentParts.push(
              `=== ${fileResult.filePath} ===\n${fileResult.result.content.text}\n`,
            );
            successCount++;
          }
        }

        fileContent = contentParts.join('\n');
        totalFiles = summary.totalFiles;

        if (options.verbose) {
          console.log(
            chalk.dim(
              `✅ Successfully processed ${successCount}/${summary.totalFiles} files`,
            ),
          );
          console.log(
            chalk.dim(
              `⏱️  Total time: ${(summary.totalProcessingTime / 1000).toFixed(2)}s`,
            ),
          );
          console.log(
            chalk.dim(
              `📊 Total content length: ${fileContent.length} characters`,
            ),
          );

          if (summary.failedFiles > 0) {
            console.log(
              chalk.yellow(
                `⚠️  ${summary.failedFiles} files failed to process:`,
              ),
            );
            for (const error of summary.errors) {
              console.log(
                chalk.yellow(`   • ${error.filePath}: ${error.error}`),
              );
            }
          }
        }

        if (successCount === 0) {
          console.error(
            chalk.red('❌ No files were processed successfully'),
          );
          process.exit(1);
        }
      }
    }

    if (options.verbose && totalFiles === 1) {
      console.log(chalk.dim('✅ Successfully processed file'));
      console.log(
        chalk.dim(
          `📊 Content length: ${fileContent.length} characters`,
        ),
      );
    }

    return { fileContent, totalFiles };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error(
      chalk.red(`❌ Error processing file: ${errorMessage}`),
    );
    process.exit(1);
  }
};
