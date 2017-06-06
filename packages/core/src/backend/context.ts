import logger, { OvalLogger, OvalLoggerOptions } from "../logger";
import { OvalInfo } from "./info";

export interface OvalContext {
  $info: OvalInfo;
  $logger: OvalLogger;
}

export interface OvalContextOptions {
  log?: OvalLoggerOptions;
}

export abstract class Context implements OvalContext {
  public $info: OvalInfo;
  public $logger: OvalLogger;

  public constructor(options: OvalContextOptions) {
    this.$logger = logger(options.log);
  }
}
