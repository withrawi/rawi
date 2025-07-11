import type {ConfigureOptions, RawiCredentials} from '../../shared/types.js';

export interface IConfigManager {
  getCredentials(profile?: string): RawiCredentials | null;
  setCredentials(credentials: RawiCredentials, profile?: string): void;
  listProfiles(): string[];
  deleteProfile(profile: string): boolean;
  getConfigFile(): string;
}

export interface IInteractiveConfigManager {
  interactiveConfigure(options?: ConfigureOptions): Promise<void>;
}

export interface IConfigDisplayManager {
  displayCredentials(credentials: RawiCredentials): void;
  displayConfigurationSummary(credentials: RawiCredentials): void;
  displayProfiles(profiles: string[]): void;
}

export interface IProviderConfigManager {
  getBaseURL(defaultBaseURL?: string): Promise<string | undefined>;
  getAPIEndpoint(defaultEndpoint?: string): Promise<string | undefined>;
  getRegion(defaultRegion?: string): Promise<string | undefined>;
  getProjectId(defaultProjectId?: string): Promise<string | undefined>;
}
