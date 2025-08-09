import type {CommandOption} from '../types.js';
import {actOption} from './act.js';
import {batchOption} from './batch.js';
import {continueOnErrorOption} from './continue-on-error.js';
import {fileOption} from './file.js';
import {fileTypeOption} from './file-type.js';
import {filesOption} from './files.js';
import {filterSensitiveOption} from './filter-sensitive.js';
import {filterTypesOption} from './filter-types.js';
import {highlightFilteredOption} from './highlight-filtered.js';
import {maxConcurrencyOption} from './max-concurrency.js';
import {newSessionOption} from './new-session.js';
import {parallelOption} from './parallel.js';
import {profileOption} from './profile.js';
import {resetFilterConfigOption} from './reset-filter-config.js';
import {saveFilterConfigOption} from './save-filter-config.js';
import {sessionOption} from './session.js';
import {showFilteredOption} from './show-filtered.js';
import {verboseOption} from './verbose.js';

export {actOption} from './act.js';
export {batchOption} from './batch.js';
export {continueOnErrorOption} from './continue-on-error.js';
export {fileOption} from './file.js';
export {fileTypeOption} from './file-type.js';
export {filesOption} from './files.js';
export {filterSensitiveOption} from './filter-sensitive.js';
export {filterTypesOption} from './filter-types.js';
export {highlightFilteredOption} from './highlight-filtered.js';
export {maxConcurrencyOption} from './max-concurrency.js';
export {newSessionOption} from './new-session.js';
export {parallelOption} from './parallel.js';
export {profileOption} from './profile.js';
export {resetFilterConfigOption} from './reset-filter-config.js';
export {saveFilterConfigOption} from './save-filter-config.js';
export {sessionOption} from './session.js';
export {showFilteredOption} from './show-filtered.js';
export {verboseOption} from './verbose.js';

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
