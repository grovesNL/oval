import { OvalLogger, OvalLoggerOptions } from "../logger";
import { OvalInfo } from "./info";
export interface OvalContext {
    $info: OvalInfo;
    $logger: OvalLogger;
}
export interface OvalContextOptions {
    log?: OvalLoggerOptions;
}
export declare abstract class Context implements OvalContext {
    $info: OvalInfo;
    $logger: OvalLogger;
    constructor(options: OvalContextOptions);
}
