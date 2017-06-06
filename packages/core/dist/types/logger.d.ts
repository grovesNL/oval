export declare type OvalLogHandler = ((message: string, shouldThrow: boolean) => void);
export interface OvalLoggerOptions {
    handler: OvalLogHandler;
}
export declare type OvalLogFunction = (message: string) => void;
export declare class OvalLogger {
    readonly log: OvalLogFunction;
    readonly info: OvalLogFunction;
    readonly warn: OvalLogFunction;
    readonly error: OvalLogFunction;
    constructor(options?: OvalLoggerOptions);
}
export default function logger(options?: OvalLoggerOptions): OvalLogger;
