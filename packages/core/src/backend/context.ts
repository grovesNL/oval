import { OvalInfo } from "./info";

export interface OvalContext {
  $info: OvalInfo;
}

export abstract class Context implements OvalContext {
  public $info: OvalInfo;
}
