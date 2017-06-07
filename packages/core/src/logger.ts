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

export interface OvalLogger {
  log: OvalLogFunction;
  info: OvalLogFunction;
  warn: OvalLogFunction;
  error: OvalLogFunction;
}

export default function logger(options?: OvalLoggerOptions): OvalLogger {
  let handler: OvalLogFunction | undefined,
    errorHandler: OvalLogFunction | undefined;

  if (options) {
    handler = wrapHandler(options.handler, false);
    errorHandler = wrapHandler(options.handler, true);
  }

  return {
    log: handler || wrapConsole(console.log, false),
    info: handler || wrapConsole(console.info, false),
    warn: handler || wrapConsole(console.warn, false),
    error: errorHandler || wrapConsole(console.error, true)
  };
}
