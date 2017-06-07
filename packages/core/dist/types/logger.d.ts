export declare type OvalLogHandler = ((message: string, shouldThrow: boolean) => void);
export interface OvalLoggerOptions {
    handler: OvalLogHandler;
}
export declare type OvalLogFunction = (message: string) => void;
export interface OvalLogger {
    log: OvalLogFunction;
    info: OvalLogFunction;
    warn: OvalLogFunction;
    error: OvalLogFunction;
}
export default function logger(options?: OvalLoggerOptions): OvalLogger;
