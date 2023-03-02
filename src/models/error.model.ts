class ManagedError {
  public origin: string;
  public error: unknown;

  constructor(origin: string, error: unknown) {
    this.origin = origin;
    this.error = error;
  }
}

export { ManagedError };
