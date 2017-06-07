import { OvalInfo } from "oval-core";
import { WebGLContext } from "./context";
export interface OvalWebGLInfo extends OvalInfo {
    majorVersion: number;
    minorVersion: number;
}
export default function info(context: WebGLContext): OvalWebGLInfo;
