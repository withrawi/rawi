export interface PatternDefinition {
  type: string;
  pattern: RegExp;
  replacement: string;
  description: string;
}

export const EMAIL_PATTERN: PatternDefinition = {
  type: 'email',
  pattern: /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g,
  replacement: '[EMAIL]',
  description: 'Email addresses',
};

export const PHONE_PATTERN: PatternDefinition = {
  type: 'phone',
  pattern: /(\+\d{1,3}[\s-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{3,4}/g,
  replacement: '[PHONE]',
  description: 'Phone numbers',
};

export const CREDIT_CARD_PATTERN: PatternDefinition = {
  type: 'creditcard',
  pattern: /\b(?:\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4})\b/g,
  replacement: '[CREDIT_CARD]',
  description: 'Credit card numbers',
};

export const SSN_PATTERN: PatternDefinition = {
  type: 'ssn',
  pattern: /\b(?:\d{3}-\d{2}-\d{4}|\d{9})\b/g,
  replacement: '[SSN]',
  description: 'Social Security Numbers',
};

export const IP_PATTERN: PatternDefinition = {
  type: 'ip',
  pattern:
    /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g,
  replacement: '[IP_ADDRESS]',
  description: 'IP addresses',
};

export const URL_PATTERN: PatternDefinition = {
  type: 'url',
  pattern:
    /\bhttps?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)/g,
  replacement: '[URL]',
  description: 'URLs',
};

export const ADDRESS_PATTERN: PatternDefinition = {
  type: 'address',
  pattern:
    /\b\d+\s+[A-Za-z\s]+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?\b/g,
  replacement: '[ADDRESS]',
  description: 'Physical addresses',
};

export const DEFAULT_PATTERNS: PatternDefinition[] = [
  EMAIL_PATTERN,
  PHONE_PATTERN,
  CREDIT_CARD_PATTERN,
  SSN_PATTERN,
  IP_PATTERN,
  URL_PATTERN,
  ADDRESS_PATTERN,
];

export function getPatternByType(type: string): PatternDefinition | undefined {
  return DEFAULT_PATTERNS.find((pattern) => pattern.type === type);
}

export function getAvailablePatternTypes(): string[] {
  return DEFAULT_PATTERNS.map((pattern) => pattern.type);
}

export function applyPattern(
  text: string,
  pattern: PatternDefinition,
): {
  filteredText: string;
  count: number;
} {
  let count = 0;
  const matches = text.match(pattern.pattern);
  count = matches ? matches.length : 0;

  const filteredText = text.replace(pattern.pattern, pattern.replacement);

  return {
    filteredText,
    count,
  };
}
