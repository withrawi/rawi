import {promises as fs} from 'node:fs';
import {extname} from 'node:path';
import type {
  FileReaderOptions,
  FileReaderResult,
  SupportedFileType,
} from '../interfaces/types.js';
import {SupportedFileType as FileType} from '../interfaces/types.js';
import {AbstractFileReader} from './base.reader.js';

export class TextReader extends AbstractFileReader {
  constructor(options: FileReaderOptions = {}) {
    super(options);
  }

  canRead(fileType: SupportedFileType): boolean {
    const textFileTypes = [
      FileType.TXT,
      FileType.JS,
      FileType.TS,
      FileType.PY,
      FileType.JSON,
      FileType.MD,
      FileType.YML,
      FileType.YAML,
      FileType.CSV,
      FileType.XML,
      FileType.HTML,
      FileType.CSS,
      FileType.SQL,
    ];

    return textFileTypes.includes(fileType);
  }

  async read(filePath: string): Promise<FileReaderResult> {
    const startTime = Date.now();

    try {
      await this.validateFile(filePath);
      this.logVerbose(`Starting text extraction for: ${filePath}`);

      const encoding = (this.options.encoding as BufferEncoding) || 'utf-8';
      const content = await fs.readFile(filePath, encoding);
      const ext = extname(filePath).toLowerCase();

      const {size} = await this.getFileStats(filePath);
      const processingTime = Date.now() - startTime;

      this.logVerbose(`Text extraction completed in ${processingTime}ms`);

      const fileTypeContext = this.getFileTypeContext(ext);
      const text = fileTypeContext
        ? `[${fileTypeContext}]\n${content}`
        : content;

      if (!content.trim()) {
        throw new Error(
          'File appears to be empty or contains no readable text',
        );
      }

      const metadata = this.createMetadata(
        filePath,
        size,
        ext.substring(1) || 'txt',
        processingTime,
        this.getMimeType(ext),
        {
          encoding: this.options.encoding || 'utf-8',
          lineCount: content.split('\n').length,
          characterCount: content.length,
          hasContext: !!fileTypeContext,
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
      this.logVerbose(`Text extraction failed: ${error}`);
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  private getFileTypeContext(extension: string): string | null {
    const contexts: Record<string, string> = {
      '.js': 'JavaScript Code',
      '.jsx': 'React JavaScript Code',
      '.ts': 'TypeScript Code',
      '.tsx': 'React TypeScript Code',
      '.py': 'Python Code',
      '.json': 'JSON Data',
      '.md': 'Markdown Document',
      '.yml': 'YAML Configuration',
      '.yaml': 'YAML Configuration',
      '.csv': 'CSV Data',
      '.xml': 'XML Document',
      '.html': 'HTML Document',
      '.htm': 'HTML Document',
      '.css': 'CSS Stylesheet',
      '.sql': 'SQL Query',
      '.sh': 'Shell Script',
      '.bash': 'Bash Script',
      '.php': 'PHP Code',
      '.java': 'Java Code',
      '.cpp': 'C++ Code',
      '.c': 'C Code',
      '.h': 'C/C++ Header',
      '.go': 'Go Code',
      '.rs': 'Rust Code',
      '.rb': 'Ruby Code',
      '.kt': 'Kotlin Code',
      '.swift': 'Swift Code',
      '.dart': 'Dart Code',
      '.scala': 'Scala Code',
      '.r': 'R Code',
      '.m': 'MATLAB Code',
      '.pl': 'Perl Code',
      '.lua': 'Lua Script',
      '.vim': 'Vim Script',
      '.env': 'Environment Variables',
      '.ini': 'Configuration File',
      '.conf': 'Configuration File',
      '.cfg': 'Configuration File',
      '.toml': 'TOML Configuration',
      '.dockerfile': 'Dockerfile',
      '.makefile': 'Makefile',
      '.gitignore': 'Git Ignore File',
      '.log': 'Log File',
    };

    return contexts[extension] || null;
  }

  private getMimeType(extension: string): string {
    const mimeTypes: Record<string, string> = {
      '.txt': 'text/plain',
      '.js': 'application/javascript',
      '.jsx': 'application/javascript',
      '.ts': 'application/x-typescript',
      '.tsx': 'application/x-typescript',
      '.py': 'text/x-python',
      '.json': 'application/json',
      '.md': 'text/markdown',
      '.yml': 'application/x-yaml',
      '.yaml': 'application/x-yaml',
      '.csv': 'text/csv',
      '.xml': 'application/xml',
      '.html': 'text/html',
      '.htm': 'text/html',
      '.css': 'text/css',
      '.sql': 'application/sql',
      '.sh': 'application/x-sh',
      '.bash': 'application/x-sh',
      '.php': 'application/x-php',
      '.java': 'text/x-java-source',
      '.cpp': 'text/x-c++src',
      '.c': 'text/x-csrc',
      '.h': 'text/x-chdr',
      '.go': 'text/x-go',
      '.rs': 'text/x-rust',
      '.rb': 'application/x-ruby',
      '.kt': 'text/x-kotlin',
      '.swift': 'text/x-swift',
      '.dart': 'application/dart',
      '.scala': 'text/x-scala',
      '.r': 'text/x-r-source',
      '.m': 'text/x-matlab',
      '.pl': 'application/x-perl',
      '.lua': 'text/x-lua',
      '.vim': 'text/x-vim',
      '.env': 'text/plain',
      '.ini': 'text/plain',
      '.conf': 'text/plain',
      '.cfg': 'text/plain',
      '.toml': 'application/toml',
      '.log': 'text/plain',
    };

    return mimeTypes[extension] || 'text/plain';
  }
}
