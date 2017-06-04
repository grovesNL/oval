import info from "./info";
import * as Interfaces from "../interfaces";

class WebGLInstance implements Interfaces.OvalInstance {
  public $info: Interfaces.OvalInfo;

  public constructor() {
    this.$info = info();
  }
}

export default function instance(): Interfaces.OvalInstance {
  return new WebGLInstance();
}
