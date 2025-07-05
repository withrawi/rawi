import {homedir} from 'node:os';
import {join} from 'node:path';

export const CONFIG_DIR_NAME = '.rawi';
export const DATABASE_FILE_NAME = 'history.db';

export function getConfigDir(): string {
  const home = homedir();
  return join(home, CONFIG_DIR_NAME);
}

export function getDatabaseFilePath(): string {
  return join(getConfigDir(), DATABASE_FILE_NAME);
}
