import * as Interfaces from "../../core/src/backend/interfaces";
import info from "./info";

class WebGLInstance implements Interfaces.OvalInstance {
  public $info: Interfaces.OvalInfo;

  public constructor() {
    this.$info = info();
  }
}

export default function instance(): Interfaces.OvalInstance {
  return new WebGLInstance();
}
