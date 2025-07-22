export interface CommandOption {
  flags: string;
  description: string;
  defaultValue?: string | boolean | string[];
}
