import { OvalInfo } from "../interfaces";

class Info implements OvalInfo {
  public MAX_COLOR_TARGETS: number;
  public constructor() {
    /* TODO */
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2")!;

    this.MAX_COLOR_TARGETS = context.getParameter(
      context.MAX_COLOR_ATTACHMENTS
    );
  }
}

export default function info(): OvalInfo {
  return new Info();
}
