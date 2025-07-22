import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {getConfigDir} from '../shared/index.js';
import {DEFAULT_FILTER_OPTIONS, type FilterOptions} from './content-filter.js';

export const getFilterConfigPath = (): string => {
  const configDir = getConfigDir();
  return join(configDir, 'filter-config.json');
};

const ensureConfigDir = (): void => {
  const configDir = getConfigDir();
  if (!existsSync(configDir)) {
    mkdirSync(configDir, {recursive: true});
  }
};

export const loadFilterConfig = (): FilterOptions => {
  const configPath = getFilterConfigPath();

  if (!existsSync(configPath)) {
    return {...DEFAULT_FILTER_OPTIONS};
  }

  try {
    const content = readFileSync(configPath, 'utf-8');
    const config = JSON.parse(content);

    return {
      ...DEFAULT_FILTER_OPTIONS,
      ...config,
    };
  } catch (error) {
    console.error(
      `Error loading filter configuration: ${error instanceof Error ? error.message : String(error)}`,
    );
    return {...DEFAULT_FILTER_OPTIONS};
  }
};

export const saveFilterConfig = (config: FilterOptions): boolean => {
  try {
    ensureConfigDir();
    const configPath = getFilterConfigPath();
    const content = JSON.stringify(config, null, 2);
    writeFileSync(configPath, content, 'utf-8');
    return true;
  } catch (error) {
    console.error(
      `Error saving filter configuration: ${error instanceof Error ? error.message : String(error)}`,
    );
    return false;
  }
};

export const resetFilterConfig = (): boolean => {
  return saveFilterConfig({...DEFAULT_FILTER_OPTIONS});
};
