/// <reference types="webgl2" />
import { $, OvalContext, OvalContextOptions } from "oval-core";
export interface OvalWebGLContextOptions extends OvalContextOptions {
}
export declare class WebGLContext extends $.Context implements OvalContext {
    $gl: WebGLRenderingContext | WebGL2RenderingContext;
    constructor(options: OvalWebGLContextOptions);
}
export default function context(options: OvalWebGLContextOptions): WebGLContext;
