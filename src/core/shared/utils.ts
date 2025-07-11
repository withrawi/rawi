import {homedir} from 'node:os';
import {join} from 'node:path';
import {CONFIG_DIR_NAME, CREDENTIALS_FILE_NAME} from './index.js';

export const DEBUG_MODE = false;

export const debugLog = (...args: any[]): void => {
  if (DEBUG_MODE) {
    console.log(...args);
  }
};

export const getConfigDir = (): string => {
  return join(homedir(), CONFIG_DIR_NAME);
};

export const getCredentialsFilePath = (): string => {
  return join(getConfigDir(), CREDENTIALS_FILE_NAME);
};

export const maskApiKey = (apiKey: string): string => {
  if (!apiKey) return '';
  const visibleLength = Math.min(8, apiKey.length);
  const maskedLength = Math.max(0, apiKey.length - visibleLength);
  return `${apiKey.slice(0, visibleLength)}${'*'.repeat(maskedLength)}`;
};

export const validateTemperature = (temperature: number): boolean => {
  return temperature >= 0 && temperature <= 2;
};

export const validateMaxTokens = (maxTokens: number): boolean => {
  return maxTokens >= 1 && maxTokens <= 100000;
};

export const validateApiKey = (apiKey: string): boolean => {
  return Boolean(apiKey && apiKey.trim().length > 0);
};

export const validateLanguage = (language: string): boolean => {
  return ['english', 'arabic'].includes(language);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) return 'just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateString);
};
