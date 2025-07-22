import type {CommandOption} from '../types.js';
import {profileOption} from './profile.js';
import {sessionOption} from './session.js';
import {newSessionOption} from './new-session.js';
import {actOption} from './act.js';
import {fileOption} from './file.js';
import {filesOption} from './files.js';
import {batchOption} from './batch.js';
import {parallelOption} from './parallel.js';
import {maxConcurrencyOption} from './max-concurrency.js';
import {continueOnErrorOption} from './continue-on-error.js';
import {fileTypeOption} from './file-type.js';
import {verboseOption} from './verbose.js';
import {filterSensitiveOption} from './filter-sensitive.js';
import {filterTypesOption} from './filter-types.js';
import {showFilteredOption} from './show-filtered.js';
import {highlightFilteredOption} from './highlight-filtered.js';
import {saveFilterConfigOption} from './save-filter-config.js';
import {resetFilterConfigOption} from './reset-filter-config.js';

export {profileOption} from './profile.js';
export {sessionOption} from './session.js';
export {newSessionOption} from './new-session.js';
export {actOption} from './act.js';
export {fileOption} from './file.js';
export {filesOption} from './files.js';
export {batchOption} from './batch.js';
export {parallelOption} from './parallel.js';
export {maxConcurrencyOption} from './max-concurrency.js';
export {continueOnErrorOption} from './continue-on-error.js';
export {fileTypeOption} from './file-type.js';
export {verboseOption} from './verbose.js';
export {filterSensitiveOption} from './filter-sensitive.js';
export {filterTypesOption} from './filter-types.js';
export {showFilteredOption} from './show-filtered.js';
export {highlightFilteredOption} from './highlight-filtered.js';
export {saveFilterConfigOption} from './save-filter-config.js';
export {resetFilterConfigOption} from './reset-filter-config.js';

// Combined array of all options for easy iteration
export const askCommandOptions: CommandOption[] = [
  profileOption,
  sessionOption,
  newSessionOption,
  actOption,
  fileOption,
  filesOption,
  batchOption,
  parallelOption,
  maxConcurrencyOption,
  continueOnErrorOption,
  fileTypeOption,
  verboseOption,
  filterSensitiveOption,
  filterTypesOption,
  showFilteredOption,
  highlightFilteredOption,
  saveFilterConfigOption,
  resetFilterConfigOption,
];
