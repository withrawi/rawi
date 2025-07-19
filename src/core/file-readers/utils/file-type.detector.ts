import {basename, extname} from 'node:path';
import {fileTypeFromFile} from 'file-type';
import {SupportedFileType} from '../interfaces/types.js';

export interface DetectionResult {
  fileType: SupportedFileType;
  mimeType?: string;
  confidence: 'high' | 'medium' | 'low';
  detectionMethod: 'extension' | 'mime' | 'fallback';
}

const EXTENSION_MAP: Record<string, SupportedFileType> = {
  '.pdf': SupportedFileType.PDF,
  '.docx': SupportedFileType.DOCX,
  '.pptx': SupportedFileType.PPTX,
  '.xlsx': SupportedFileType.XLSX,
  '.xls': SupportedFileType.XLSX,
  '.odt': SupportedFileType.ODT,
  '.odp': SupportedFileType.ODP,
  '.ods': SupportedFileType.ODS,
  '.txt': SupportedFileType.TXT,
  '.js': SupportedFileType.JS,
  '.jsx': SupportedFileType.JSX,
  '.ts': SupportedFileType.TS,
  '.tsx': SupportedFileType.TSX,
  '.py': SupportedFileType.PY,
  '.java': SupportedFileType.JAVA,
  '.cpp': SupportedFileType.CPP,
  '.cc': SupportedFileType.CPP,
  '.cxx': SupportedFileType.CPP,
  '.c': SupportedFileType.C,
  '.h': SupportedFileType.H,
  '.hpp': SupportedFileType.H,
  '.hxx': SupportedFileType.H,
  '.go': SupportedFileType.GO,
  '.rs': SupportedFileType.RS,
  '.rb': SupportedFileType.RB,
  '.kt': SupportedFileType.KT,
  '.swift': SupportedFileType.SWIFT,
  '.dart': SupportedFileType.DART,
  '.scala': SupportedFileType.SCALA,
  '.r': SupportedFileType.R,
  '.m': SupportedFileType.M,
  '.pl': SupportedFileType.PL,
  '.lua': SupportedFileType.LUA,
  '.php': SupportedFileType.PHP,
  '.json': SupportedFileType.JSON,
  '.md': SupportedFileType.MD,
  '.yml': SupportedFileType.YML,
  '.yaml': SupportedFileType.YAML,
  '.toml': SupportedFileType.TOML,
  '.env': SupportedFileType.ENV,
  '.ini': SupportedFileType.INI,
  '.conf': SupportedFileType.CONF,
  '.cfg': SupportedFileType.CFG,
  '.xml': SupportedFileType.XML,
  '.html': SupportedFileType.HTML,
  '.htm': SupportedFileType.HTM,
  '.css': SupportedFileType.CSS,
  '.sql': SupportedFileType.SQL,
  '.sh': SupportedFileType.SH,
  '.bash': SupportedFileType.BASH,
  '.vim': SupportedFileType.VIM,
  '.dockerfile': SupportedFileType.DOCKERFILE,
  Dockerfile: SupportedFileType.DOCKERFILE,
  '.makefile': SupportedFileType.MAKEFILE,
  Makefile: SupportedFileType.MAKEFILE,
  '.gitignore': SupportedFileType.GITIGNORE,
  '.log': SupportedFileType.LOG,
};

const MIME_TYPE_MAP: Record<string, SupportedFileType> = {
  'application/pdf': SupportedFileType.PDF,
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    SupportedFileType.DOCX,
  'application/vnd.openxmlformats-officedocument.presentationml.presentation':
    SupportedFileType.PPTX,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
    SupportedFileType.XLSX,
  'application/vnd.ms-excel': SupportedFileType.XLSX,
  'application/excel': SupportedFileType.XLSX,
  'application/vnd.oasis.opendocument.text': SupportedFileType.ODT,
  'application/vnd.oasis.opendocument.presentation': SupportedFileType.ODP,
  'application/vnd.oasis.opendocument.spreadsheet': SupportedFileType.ODS,
  'text/plain': SupportedFileType.TXT,
  'application/javascript': SupportedFileType.JS,
  'text/javascript': SupportedFileType.JS,
  'application/x-typescript': SupportedFileType.TS,
  'text/x-python': SupportedFileType.PY,
  'application/json': SupportedFileType.JSON,
  'text/markdown': SupportedFileType.MD,
  'application/x-yaml': SupportedFileType.YML,
  'text/yaml': SupportedFileType.YML,
  'application/xml': SupportedFileType.XML,
  'text/xml': SupportedFileType.XML,
  'text/html': SupportedFileType.HTML,
  'text/css': SupportedFileType.CSS,
  'application/sql': SupportedFileType.SQL,
};

export function detectFileTypeByExtension(
  filePath: string,
): DetectionResult | null {
  const extension = extname(filePath).toLowerCase();
  const filename = basename(filePath);

  let fileType = EXTENSION_MAP[extension];

  if (!fileType) {
    fileType = EXTENSION_MAP[filename];
  }

  if (fileType) {
    return {
      fileType,
      confidence: 'high',
      detectionMethod: 'extension',
    };
  }

  return null;
}

export async function detectFileTypeByMime(
  filePath: string,
): Promise<DetectionResult | null> {
  try {
    const fileTypeResult = await fileTypeFromFile(filePath);

    if (fileTypeResult?.mime) {
      const fileType = MIME_TYPE_MAP[fileTypeResult.mime];

      if (fileType) {
        return {
          fileType,
          mimeType: fileTypeResult.mime,
          confidence: 'high',
          detectionMethod: 'mime',
        };
      }

      return {
        fileType: SupportedFileType.UNKNOWN,
        mimeType: fileTypeResult.mime,
        confidence: 'medium',
        detectionMethod: 'mime',
      };
    }
  } catch {}

  return null;
}

export async function detectFileType(
  filePath: string,
  forceMethod?: 'extension' | 'mime',
): Promise<DetectionResult> {
  if (forceMethod === 'extension') {
    const result = detectFileTypeByExtension(filePath);
    return (
      result || {
        fileType: SupportedFileType.UNKNOWN,
        confidence: 'low',
        detectionMethod: 'fallback',
      }
    );
  }

  if (forceMethod === 'mime') {
    const result = await detectFileTypeByMime(filePath);
    return (
      result || {
        fileType: SupportedFileType.UNKNOWN,
        confidence: 'low',
        detectionMethod: 'fallback',
      }
    );
  }

  const extensionResult = detectFileTypeByExtension(filePath);
  if (extensionResult) {
    return extensionResult;
  }

  const mimeResult = await detectFileTypeByMime(filePath);
  if (mimeResult) {
    return mimeResult;
  }

  return {
    fileType: SupportedFileType.UNKNOWN,
    confidence: 'low',
    detectionMethod: 'fallback',
  };
}

export function isSupportedFileType(fileType: SupportedFileType): boolean {
  return fileType !== SupportedFileType.UNKNOWN;
}

export function getFileTypeDescription(fileType: SupportedFileType): string {
  const descriptions: Record<SupportedFileType, string> = {
    [SupportedFileType.PDF]: 'PDF document',
    [SupportedFileType.DOCX]: 'Word document',
    [SupportedFileType.PPTX]: 'PowerPoint presentation',
    [SupportedFileType.XLSX]: 'Excel spreadsheet',
    [SupportedFileType.ODT]: 'OpenDocument Text',
    [SupportedFileType.ODP]: 'OpenDocument Presentation',
    [SupportedFileType.ODS]: 'OpenDocument Spreadsheet',
    [SupportedFileType.TXT]: 'Text file',
    [SupportedFileType.JS]: 'JavaScript file',
    [SupportedFileType.JSX]: 'React JSX file',
    [SupportedFileType.TS]: 'TypeScript file',
    [SupportedFileType.TSX]: 'React TypeScript file',
    [SupportedFileType.PY]: 'Python file',
    [SupportedFileType.JAVA]: 'Java file',
    [SupportedFileType.CPP]: 'C++ file',
    [SupportedFileType.C]: 'C file',
    [SupportedFileType.H]: 'C/C++ header file',
    [SupportedFileType.GO]: 'Go file',
    [SupportedFileType.RS]: 'Rust file',
    [SupportedFileType.RB]: 'Ruby file',
    [SupportedFileType.KT]: 'Kotlin file',
    [SupportedFileType.SWIFT]: 'Swift file',
    [SupportedFileType.DART]: 'Dart file',
    [SupportedFileType.SCALA]: 'Scala file',
    [SupportedFileType.R]: 'R file',
    [SupportedFileType.M]: 'MATLAB/Objective-C file',
    [SupportedFileType.PL]: 'Perl file',
    [SupportedFileType.LUA]: 'Lua file',
    [SupportedFileType.PHP]: 'PHP file',
    [SupportedFileType.JSON]: 'JSON file',
    [SupportedFileType.MD]: 'Markdown file',
    [SupportedFileType.YML]: 'YAML file',
    [SupportedFileType.YAML]: 'YAML file',
    [SupportedFileType.TOML]: 'TOML file',
    [SupportedFileType.ENV]: 'Environment file',
    [SupportedFileType.INI]: 'INI file',
    [SupportedFileType.CONF]: 'Configuration file',
    [SupportedFileType.CFG]: 'Configuration file',
    [SupportedFileType.XML]: 'XML file',
    [SupportedFileType.HTML]: 'HTML file',
    [SupportedFileType.HTM]: 'HTML file',
    [SupportedFileType.CSS]: 'CSS file',
    [SupportedFileType.SQL]: 'SQL file',
    [SupportedFileType.SH]: 'Shell script',
    [SupportedFileType.BASH]: 'Bash script',
    [SupportedFileType.VIM]: 'Vim configuration',
    [SupportedFileType.DOCKERFILE]: 'Dockerfile',
    [SupportedFileType.MAKEFILE]: 'Makefile',
    [SupportedFileType.GITIGNORE]: 'Git ignore file',
    [SupportedFileType.LOG]: 'Log file',
    [SupportedFileType.UNKNOWN]: 'Unknown file type',
  };

  return descriptions[fileType] || 'Unknown File Type';
}
