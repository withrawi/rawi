import ora, {type Ora} from 'ora';

export class SpinnerManager {
  private static instance: SpinnerManager;
  private activeSpinners: Map<string, Ora> = new Map();

  private constructor() {}

  static getInstance(): SpinnerManager {
    if (!SpinnerManager.instance) {
      SpinnerManager.instance = new SpinnerManager();
    }
    return SpinnerManager.instance;
  }

  start(id: string, text: string, options?: {color?: any}): Ora {
    this.stop(id);

    const spinner = ora({
      text,
      color: (options?.color as any) || 'cyan',
    }).start();

    this.activeSpinners.set(id, spinner);
    return spinner;
  }

  updateText(id: string, text: string): void {
    const spinner = this.activeSpinners.get(id);
    if (spinner) {
      spinner.text = text;
    }
  }

  succeed(id: string, text?: string): void {
    const spinner = this.activeSpinners.get(id);
    if (spinner) {
      spinner.succeed(text);
      this.activeSpinners.delete(id);
    }
  }

  fail(id: string, text?: string): void {
    const spinner = this.activeSpinners.get(id);
    if (spinner) {
      spinner.fail(text);
      this.activeSpinners.delete(id);
    }
  }

  stop(id: string): void {
    const spinner = this.activeSpinners.get(id);
    if (spinner) {
      spinner.stop();
      this.activeSpinners.delete(id);
    }
  }

  stopAll(): void {
    for (const spinner of this.activeSpinners.values()) {
      spinner.stop();
    }
    this.activeSpinners.clear();
  }

  get(id: string): Ora | undefined {
    return this.activeSpinners.get(id);
  }

  isActive(id: string): boolean {
    return this.activeSpinners.has(id);
  }

  async withSpinner<T>(
    id: string,
    text: string,
    operation: () => Promise<T>,
    options?: {
      successText?: string;
      failText?: string;
      color?: string;
    },
  ): Promise<T> {
    this.start(id, text, {color: options?.color});

    try {
      const result = await operation();
      this.succeed(id, options?.successText);
      return result;
    } catch (error) {
      this.fail(id, options?.failText);
      throw error;
    }
  }
}

export const spinnerManager = SpinnerManager.getInstance();

export const {start, updateText, succeed, fail, stop, stopAll, withSpinner} =
  spinnerManager;
