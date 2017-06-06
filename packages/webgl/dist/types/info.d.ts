import { OvalInfo } from "oval-core";
import { WebGLContext } from "./context";
export declare class Info implements OvalInfo {
    majorVersion: number;
    minorVersion: number;
    maxColorTargets: number;
    private _context;
    constructor(context: WebGLContext);
}
export default function info(context: WebGLContext): Info;
