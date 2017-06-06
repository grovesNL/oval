export type OvalLogHandler = ((message: string, shouldThrow: boolean) => void);

export interface OvalLoggerOptions {
  handler: OvalLogHandler;
}

function addPrefix(message: string) {
  return "oval: " + message;
}

function wrapHandler(handler: OvalLogHandler, shouldThrow: boolean) {
  return function wrapped(message: string) {
    return handler(addPrefix(message), shouldThrow);
  };
}

function wrapConsole(
  logFunction: (message: string) => void,
  shouldThrow: boolean
) {
  return function wrapped(message: string) {
    message = addPrefix(message);
    logFunction(message);
    if (shouldThrow) {
      throw new Error(message);
    }
  };
}

export type OvalLogFunction = (message: string) => void;

export class OvalLogger {
  public readonly log: OvalLogFunction;
  public readonly info: OvalLogFunction;
  public readonly warn: OvalLogFunction;
  public readonly error: OvalLogFunction;

  public constructor(options?: OvalLoggerOptions) {
    let handler: OvalLogFunction | undefined,
      errorHandler: OvalLogFunction | undefined;
    if (options) {
      handler = wrapHandler(options.handler, false);
      errorHandler = wrapHandler(options.handler, true);
    }
    this.log = handler || wrapConsole(console.log, false);
    this.info = handler || wrapConsole(console.info, false);
    this.warn = handler || wrapConsole(console.warn, false);
    this.error = errorHandler || wrapConsole(console.error, true);
  }
}

export default function logger(options?: OvalLoggerOptions) {
  return new OvalLogger(options);
}
