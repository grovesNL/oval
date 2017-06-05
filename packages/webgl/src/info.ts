import { OvalInfo } from "../../core/src/backend/interfaces";

class Info implements OvalInfo {
  public MAX_COLOR_TARGETS: number;
  public constructor() {
    /* TODO */
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2")! as WebGL2RenderingContext;

    this.MAX_COLOR_TARGETS = context.getParameter(
      context.MAX_COLOR_ATTACHMENTS
    );
  }
}

export default function info(): OvalInfo {
  return new Info();
}
