export const APP_NAME = 'rawi';
export const CONFIG_DIR_NAME = '.rawi';
export const CREDENTIALS_FILE_NAME = 'credentials';
export const DEFAULT_PROFILE = 'default';

export const DEFAULT_TEMPERATURE = 0.7;
export const DEFAULT_MAX_TOKENS = 2048;
export const DEFAULT_LANGUAGE = 'english';

export const DEFAULT_HISTORY_LIMIT = 50;
export const MAX_HISTORY_LIMIT = 1000;
export const DEFAULT_SESSION_TITLE_LENGTH = 50;

export const PROVIDER_DISPLAY_NAMES = {
  anthropic: '🟣 Anthropic (Claude)',
  google: '🔴 Google (Gemini)',
  openai: '🔵 OpenAI (GPT)',
  xai: '🤖 xAI (Grok)',
} as const;

export const TEMPERATURE_LIMITS = {
  min: 0,
  max: 2,
} as const;

export const TOKEN_LIMITS = {
  min: 1,
  max: 100000,
} as const;
