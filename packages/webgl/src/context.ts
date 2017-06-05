import { $, OvalContext, OvalInfo } from 'oval-core';

import info from "./info";

class Context extends $.Context implements OvalContext {
  public $info: OvalInfo;

  public constructor() {
    super();
    this.$info = info();
  }
}

export default function context(): OvalContext {
  return new Context();
}
