import type {FileReaderResult} from './types.js';

export type BatchProgressCallback = (
  processed: number,
  total: number,
  currentFile: string,
  result?: FileReaderResult,
) => void;

export interface BatchProcessingOptions {
  parallel?: boolean;
  maxConcurrency?: number;
  continueOnError?: boolean;
  onProgress?: BatchProgressCallback;
  fileType?: string;
}

export interface BatchFileResult {
  filePath: string;
  result: FileReaderResult;
  processingTime: number;
}

export interface BatchProcessingSummary {
  totalFiles: number;
  successfulFiles: number;
  failedFiles: number;
  totalProcessingTime: number;
  averageProcessingTime: number;
  results: BatchFileResult[];
  errors: Array<{
    filePath: string;
    error: string;
  }>;
}

export interface GlobOptions {
  cwd?: string;
  nocase?: boolean;
  ignore?: string[];
  absolute?: boolean;
  dot?: boolean;
}
