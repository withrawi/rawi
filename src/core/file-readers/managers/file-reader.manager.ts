import type {
  BatchProcessingOptions,
  BatchProcessingSummary,
  FileReaderOptions,
  FileReaderResult,
  GlobOptions,
  SupportedFileType,
} from '../interfaces/types.js';
import {SupportedFileType as FileType} from '../interfaces/types.js';
import type {AbstractFileReader} from '../readers/base.reader.js';
import {OfficeReader} from '../readers/office.reader.js';
import {TextReader} from '../readers/text.reader.js';
import {BatchFileProcessor} from '../utils/batch-processor.js';
import {
  detectFileType,
  getFileTypeDescription,
  isSupportedFileType,
} from '../utils/file-type.detector.js';

export interface FileReaderManagerOptions extends FileReaderOptions {
  forceFileType?: SupportedFileType;
  enableFallback?: boolean;
}

export class FileReaderManager {
  private readers: Map<SupportedFileType, AbstractFileReader>;
  private options: FileReaderManagerOptions;
  private batchProcessor: BatchFileProcessor;

  constructor(options: FileReaderManagerOptions = {}) {
    this.options = {
      enableFallback: true,
      ...options,
    };

    this.readers = new Map();
    this.initializeReaders();
    this.batchProcessor = new BatchFileProcessor(this);
  }

  private initializeReaders(): void {
    const officeReader = new OfficeReader(this.options);
    const officeFileTypes = [
      FileType.PDF,
      FileType.DOCX,
      FileType.PPTX,
      FileType.XLSX,
      FileType.ODT,
      FileType.ODP,
      FileType.ODS,
    ];

    for (const fileType of officeFileTypes) {
      this.readers.set(fileType, officeReader);
    }

    const textReader = new TextReader(this.options);
    const textFileTypes = [
      FileType.TXT,
      FileType.MD,
      FileType.XML,
      FileType.HTML,
      FileType.HTM,
      FileType.JS,
      FileType.JSX,
      FileType.TS,
      FileType.TSX,
      FileType.CSS,
      FileType.JSON,
      FileType.PY,
      FileType.JAVA,
      FileType.CPP,
      FileType.C,
      FileType.H,
      FileType.GO,
      FileType.RS,
      FileType.RB,
      FileType.KT,
      FileType.SWIFT,
      FileType.DART,
      FileType.SCALA,
      FileType.R,
      FileType.M,
      FileType.PL,
      FileType.LUA,
      FileType.PHP,
      FileType.YML,
      FileType.YAML,
      FileType.TOML,
      FileType.ENV,
      FileType.INI,
      FileType.CONF,
      FileType.CFG,
      FileType.SQL,
      FileType.SH,
      FileType.BASH,
      FileType.VIM,
      FileType.DOCKERFILE,
      FileType.MAKEFILE,
      FileType.GITIGNORE,
      FileType.LOG,
    ];

    for (const fileType of textFileTypes) {
      this.readers.set(fileType, textReader);
    }
  }

  async readFile(filePath: string): Promise<FileReaderResult> {
    try {
      const fileType = await this.determineFileType(filePath);

      if (!isSupportedFileType(fileType)) {
        return {
          success: false,
          error: `Unsupported file type: ${getFileTypeDescription(fileType)}. Supported formats include office documents (PDF, DOCX, PPTX, XLSX, ODT, ODP, ODS), programming languages (JS, TS, Python, Java, C/C++, Go, Rust, etc.), configuration files (YAML, JSON, TOML, etc.), and many more.`,
        };
      }

      const reader = this.getReader(fileType);
      if (!reader) {
        return {
          success: false,
          error: `No reader available for file type: ${getFileTypeDescription(fileType)}`,
        };
      }

      this.logVerbose(
        `Using ${reader.constructor.name} for ${getFileTypeDescription(fileType)}`,
      );

      const result = await reader.read(filePath);

      if (result.success && result.content) {
        result.content.metadata.additionalInfo = {
          ...result.content.metadata.additionalInfo,
          detectedFileType: fileType,
          readerUsed: reader.constructor.name,
        };
      }

      return result;
    } catch (error) {
      return {
        success: false,
        error: `File reading failed: ${error instanceof Error ? error.message : String(error)}`,
      };
    }
  }

  async readFiles(filePaths: string[]): Promise<FileReaderResult[]> {
    const results: FileReaderResult[] = [];

    for (const filePath of filePaths) {
      const result = await this.readFile(filePath);
      results.push(result);
    }

    return results;
  }

  async readFilesParallel(filePaths: string[]): Promise<FileReaderResult[]> {
    const promises = filePaths.map((filePath) => this.readFile(filePath));
    return Promise.all(promises);
  }

  async canReadFile(filePath: string): Promise<boolean> {
    try {
      const fileType = await this.determineFileType(filePath);
      return isSupportedFileType(fileType) && this.readers.has(fileType);
    } catch {
      return false;
    }
  }

  async getFileInfo(filePath: string) {
    const fileType = await this.determineFileType(filePath);

    return {
      filePath,
      fileType,
      description: getFileTypeDescription(fileType),
      supported: isSupportedFileType(fileType),
      readerAvailable: this.readers.has(fileType),
    };
  }

  getSupportedFileTypes(): SupportedFileType[] {
    return Array.from(this.readers.keys());
  }

  registerReader(
    fileType: SupportedFileType,
    reader: AbstractFileReader,
  ): void {
    this.readers.set(fileType, reader);
    this.logVerbose(
      `Registered custom reader for ${getFileTypeDescription(fileType)}`,
    );
  }

  updateOptions(newOptions: Partial<FileReaderManagerOptions>): void {
    this.options = {...this.options, ...newOptions};
    this.initializeReaders();
    this.batchProcessor = new BatchFileProcessor(this);
    this.logVerbose('Updated reader options and reinitialized readers');
  }

  async processMultipleFiles(
    filePaths: string[],
    options: BatchProcessingOptions = {},
  ): Promise<BatchProcessingSummary> {
    return this.batchProcessor.processFiles(filePaths, options);
  }

  async processGlobPatterns(
    patterns: string[],
    options: BatchProcessingOptions & GlobOptions = {},
  ): Promise<BatchProcessingSummary> {
    return this.batchProcessor.processGlobPatterns(patterns, options);
  }

  async expandGlob(
    patterns: string[],
    options: GlobOptions = {},
  ): Promise<string[]> {
    return this.batchProcessor.expandGlobPatterns(patterns, options);
  }

  async filterSupportedFiles(filePaths: string[]): Promise<string[]> {
    return this.batchProcessor.filterSupportedFiles(filePaths);
  }

  private async determineFileType(
    filePath: string,
  ): Promise<SupportedFileType> {
    if (this.options.forceFileType) {
      return this.options.forceFileType;
    }

    const detection = await detectFileType(filePath);
    return detection.fileType;
  }

  private getReader(
    fileType: SupportedFileType,
  ): AbstractFileReader | undefined {
    return this.readers.get(fileType);
  }

  private logVerbose(message: string): void {
    if (this.options.verbose) {
      console.log(`[FileReaderManager] ${message}`);
    }
  }
}

export const defaultFileReaderManager = new FileReaderManager();
