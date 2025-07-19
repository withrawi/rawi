import {parseOfficeAsync} from 'officeparser';
import type {
  FileReaderOptions,
  FileReaderResult,
  SupportedFileType,
} from '../interfaces/types.js';
import {SupportedFileType as FileType} from '../interfaces/types.js';
import {AbstractFileReader} from './base.reader.js';

export class OfficeReader extends AbstractFileReader {
  constructor(options: FileReaderOptions = {}) {
    super(options);
  }

  canRead(fileType: SupportedFileType): boolean {
    return [
      FileType.PDF,
      FileType.DOCX,
      FileType.PPTX,
      FileType.XLSX,
      FileType.ODT,
      FileType.ODP,
      FileType.ODS,
    ].includes(fileType);
  }

  async read(filePath: string): Promise<FileReaderResult> {
    const startTime = Date.now();

    try {
      await this.validateFile(filePath);
      this.logVerbose(`Starting office file extraction for: ${filePath}`);

      const text = await this.extractOfficeText(filePath);
      const {size} = await this.getFileStats(filePath);
      const processingTime = Date.now() - startTime;

      this.logVerbose(
        `Office file extraction completed in ${processingTime}ms`,
      );

      const fileType = this.getFileTypeFromPath(filePath);
      const mimeType = this.getMimeTypeForFileType(fileType);

      const metadata = this.createMetadata(
        filePath,
        size,
        fileType.toLowerCase(),
        processingTime,
        mimeType,
        {
          wordCount: text.split(/\s+/).filter((word) => word.length > 0).length,
          characterCount: text.length,
        },
      );

      return {
        success: true,
        content: {
          text: text.trim(),
          metadata,
        },
      };
    } catch (error) {
      this.logVerbose(`Office file extraction failed: ${error}`);
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  private async extractOfficeText(filePath: string): Promise<string> {
    try {
      const result = await parseOfficeAsync(filePath);

      if (!result || typeof result !== 'string') {
        throw new Error('No readable text found in office document');
      }

      return result;
    } catch (error) {
      throw new Error(
        `Office file parsing error: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    }
  }

  private getFileTypeFromPath(filePath: string): string {
    const extension = filePath.toLowerCase().split('.').pop() || '';
    const extensionMap: Record<string, string> = {
      pdf: 'pdf',
      docx: 'docx',
      pptx: 'pptx',
      xlsx: 'xlsx',
      odt: 'odt',
      odp: 'odp',
      ods: 'ods',
    };
    return extensionMap[extension] || 'unknown';
  }

  private getMimeTypeForFileType(fileType: string): string {
    const mimeTypes: Record<string, string> = {
      pdf: 'application/pdf',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      odt: 'application/vnd.oasis.opendocument.text',
      odp: 'application/vnd.oasis.opendocument.presentation',
      ods: 'application/vnd.oasis.opendocument.spreadsheet',
    };
    return mimeTypes[fileType] || 'application/octet-stream';
  }
}
