export interface FileReaderOptions {
  maxFileSize?: number;
  encoding?: string;
  sheet?: string;
  verbose?: boolean;
}

export interface FileContent {
  text: string;
  metadata: FileMetadata;
}

export interface FileMetadata {
  fileName: string;
  filePath: string;
  fileSize: number;
  fileType: string;
  mimeType?: string;
  extractedAt: Date;
  processingTime: number;
  additionalInfo?: Record<string, any>;
}

export interface FileReaderResult {
  success: boolean;
  content?: FileContent;
  error?: string;
  warnings?: string[];
}

export enum SupportedFileType {
  // Office documents
  PDF = 'pdf',
  DOCX = 'docx',
  PPTX = 'pptx',
  XLSX = 'xlsx',
  ODT = 'odt',
  ODP = 'odp',
  ODS = 'ods',

  // Text and markup
  TXT = 'txt',
  MD = 'md',
  XML = 'xml',
  HTML = 'html',
  HTM = 'htm',

  // Web technologies
  JS = 'js',
  JSX = 'jsx',
  TS = 'ts',
  TSX = 'tsx',
  CSS = 'css',
  JSON = 'json',

  // Programming languages
  PY = 'py',
  JAVA = 'java',
  CPP = 'cpp',
  C = 'c',
  H = 'h',
  GO = 'go',
  RS = 'rs',
  RB = 'rb',
  KT = 'kt',
  SWIFT = 'swift',
  DART = 'dart',
  SCALA = 'scala',
  R = 'r',
  M = 'm',
  PL = 'pl',
  LUA = 'lua',
  PHP = 'php',

  // Configuration and data
  YML = 'yml',
  YAML = 'yaml',
  TOML = 'toml',
  ENV = 'env',
  INI = 'ini',
  CONF = 'conf',
  CFG = 'cfg',

  // Scripts and tools
  SQL = 'sql',
  SH = 'sh',
  BASH = 'bash',
  VIM = 'vim',
  DOCKERFILE = 'dockerfile',
  MAKEFILE = 'makefile',
  GITIGNORE = 'gitignore',

  // Logs
  LOG = 'log',

  UNKNOWN = 'unknown',
}

export abstract class BaseFileReader {
  protected options: FileReaderOptions;

  constructor(options: FileReaderOptions = {}) {
    this.options = {
      maxFileSize: 50 * 1024 * 1024,
      encoding: 'utf-8',
      verbose: false,
      ...options,
    };
  }

  abstract canRead(fileType: SupportedFileType): boolean;
  abstract read(filePath: string): Promise<FileReaderResult>;

  protected createMetadata(
    filePath: string,
    fileSize: number,
    fileType: string,
    processingTime: number,
    mimeType?: string,
    additionalInfo?: Record<string, any>,
  ): FileMetadata {
    const fileName = filePath.split('/').pop() || '';
    return {
      fileName,
      filePath,
      fileSize,
      fileType,
      mimeType,
      extractedAt: new Date(),
      processingTime,
      additionalInfo,
    };
  }

  protected validateFileSize(fileSize: number): void {
    if (fileSize > (this.options.maxFileSize || 50 * 1024 * 1024)) {
      throw new Error(
        `File size (${Math.round(fileSize / 1024 / 1024)}MB) exceeds maximum allowed size (${Math.round((this.options.maxFileSize || 50 * 1024 * 1024) / 1024 / 1024)}MB)`,
      );
    }
  }
}

// Re-export batch interfaces
export * from './batch.interface.js';
