import { OvalInfo } from "./info";
export interface OvalContext {
    $info: OvalInfo;
}
export declare abstract class Context implements OvalContext {
    $info: OvalInfo;
}
