export class FileReaderError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
  ) {
    super(message);
    this.name = 'FileReaderError';
  }
}

export class FileNotFoundError extends FileReaderError {
  constructor(filePath: string) {
    super(`File not found: ${filePath}`, 'FILE_NOT_FOUND');
    this.name = 'FileNotFoundError';
  }
}

export class FileSizeError extends FileReaderError {
  constructor(filePath: string, actualSize: number, maxSize: number) {
    const actualMB = Math.round(actualSize / 1024 / 1024);
    const maxMB = Math.round(maxSize / 1024 / 1024);
    super(
      `File size (${actualMB}MB) exceeds maximum allowed size (${maxMB}MB): ${filePath}`,
      'FILE_SIZE_EXCEEDED',
    );
    this.name = 'FileSizeError';
  }
}

export class UnsupportedFileTypeError extends FileReaderError {
  constructor(fileType: string, filePath: string) {
    super(
      `Unsupported file type "${fileType}": ${filePath}`,
      'UNSUPPORTED_FILE_TYPE',
    );
    this.name = 'UnsupportedFileTypeError';
  }
}

export class FileParsingError extends FileReaderError {
  constructor(filePath: string, reason: string) {
    super(
      `Failed to parse file "${filePath}": ${reason}`,
      'FILE_PARSING_ERROR',
    );
    this.name = 'FileParsingError';
  }
}

export class CorruptedFileError extends FileReaderError {
  constructor(filePath: string, details?: string) {
    const message = details
      ? `Corrupted or invalid file "${filePath}": ${details}`
      : `Corrupted or invalid file: ${filePath}`;
    super(message, 'CORRUPTED_FILE');
    this.name = 'CorruptedFileError';
  }
}

export class EncryptedFileError extends FileReaderError {
  constructor(filePath: string) {
    super(
      `Encrypted or password-protected file not supported: ${filePath}`,
      'ENCRYPTED_FILE',
    );
    this.name = 'EncryptedFileError';
  }
}

export class FilePermissionError extends FileReaderError {
  constructor(filePath: string) {
    super(
      `Insufficient permissions to read file: ${filePath}`,
      'PERMISSION_DENIED',
    );
    this.name = 'FilePermissionError';
  }
}

export class NoReaderAvailableError extends FileReaderError {
  constructor(fileType: string) {
    super(
      `No reader available for file type: ${fileType}`,
      'NO_READER_AVAILABLE',
    );
    this.name = 'NoReaderAvailableError';
  }
}

const MAX_PATH_LENGTH = 260;
const SUSPICIOUS_PATTERNS = [/\.\./, /^[/\\]/, /[<>:"|?*]/];

export function validateFilePath(filePath: string): void {
  if (!filePath || typeof filePath !== 'string') {
    throw new FileReaderError(
      'Invalid file path: must be a non-empty string',
      'INVALID_PATH',
    );
  }

  if (filePath.length > MAX_PATH_LENGTH) {
    throw new FileReaderError(
      `File path too long (${filePath.length} characters, max ${MAX_PATH_LENGTH})`,
      'PATH_TOO_LONG',
    );
  }

  for (const pattern of SUSPICIOUS_PATTERNS) {
    if (pattern.test(filePath)) {
      throw new FileReaderError(
        `Potentially unsafe file path detected: ${filePath}`,
        'UNSAFE_PATH',
      );
    }
  }

  if (filePath.includes('\0')) {
    throw new FileReaderError('File path contains null bytes', 'INVALID_PATH');
  }
}

export function validateFileSize(
  size: number,
  maxSize: number,
  filePath: string,
): void {
  if (size < 0) {
    throw new FileReaderError(`Invalid file size: ${size}`, 'INVALID_SIZE');
  }

  if (size === 0) {
    throw new FileReaderError(`File is empty: ${filePath}`, 'EMPTY_FILE');
  }

  if (size > maxSize) {
    throw new FileSizeError(filePath, size, maxSize);
  }
}

export function validateFileExtension(
  filePath: string,
  expectedExtensions: string[],
): boolean {
  const actualExtension = filePath.toLowerCase().split('.').pop() || '';
  return expectedExtensions.some(
    (ext) => ext.toLowerCase() === actualExtension,
  );
}

export function sanitizeFileName(fileName: string): string {
  return fileName
    .replace(/[<>:"|?*]/g, '_')
    .replace(/\.\./g, '_')
    .replace(/^\./, '_')
    .substring(0, 255);
}

export function createUserFriendlyError(
  error: Error,
  filePath: string,
): string {
  if (error instanceof FileNotFoundError) {
    return `The file "${filePath}" could not be found. Please check the file path and try again.`;
  }

  if (error instanceof FileSizeError) {
    return `The file "${filePath}" is too large. Please use a smaller file or increase the size limit.`;
  }

  if (error instanceof UnsupportedFileTypeError) {
    return 'The file type is not supported. Supported formats: PDF, DOCX, XLSX, and text-based files.';
  }

  if (error instanceof FileParsingError) {
    return `The file "${filePath}" could not be parsed. It may be corrupted or in an unsupported format.`;
  }

  if (error instanceof CorruptedFileError) {
    return `The file "${filePath}" appears to be corrupted or damaged. Please try with a different file.`;
  }

  if (error instanceof EncryptedFileError) {
    return `The file "${filePath}" is password-protected or encrypted. Please use an unprotected version.`;
  }

  if (error instanceof FilePermissionError) {
    return `Permission denied when trying to read "${filePath}". Please check file permissions.`;
  }

  if (error instanceof NoReaderAvailableError) {
    return 'No reader is available for this file type. Supported formats: PDF, DOCX, XLSX, and text-based files.';
  }

  return `An error occurred while reading "${filePath}": ${error.message}`;
}

export function logFileReaderError(
  error: Error,
  filePath: string,
  verbose = false,
): void {
  if (verbose) {
    console.error(`[FileReader Error] ${error.name}: ${error.message}`);
    console.error(`[FileReader Error] File: ${filePath}`);
    if (error.stack) {
      console.error(`[FileReader Error] Stack: ${error.stack}`);
    }
  } else {
    console.error(`Failed to read file "${filePath}": ${error.message}`);
  }
}
