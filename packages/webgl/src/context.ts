import { $, OvalContext, OvalContextOptions } from "oval-core";

import info from "./info";

export interface OvalWebGLContextOptions extends OvalContextOptions {}

export class WebGLContext extends $.Context implements OvalContext {
  public $gl: WebGLRenderingContext | WebGL2RenderingContext;

  public constructor(options: OvalWebGLContextOptions) {
    super(options);
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2")! as WebGL2RenderingContext;
    this.$gl = gl;
    this.$info = info(this);
  }
}

export default function context(options: OvalWebGLContextOptions) {
  return new WebGLContext(options);
}
