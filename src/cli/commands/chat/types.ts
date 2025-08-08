export interface CommandOption {
  flags: string;
  description: string;
  defaultValue?: string | boolean | string[];
}

export interface ChatOptions {
  profile?: string;
  act?: string;
  verbose?: boolean;
}
