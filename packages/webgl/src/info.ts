import { OvalInfo } from "oval-core";
import { GL_MAX_COLOR_ATTACHMENTS, GL_VERSION } from "./common";
import { WebGLContext } from "./context";

function parseVersion(version: string, context: WebGLContext) {
  const parsed = /([0-9]+)\.?([0-9]*)?/.exec(version);
  let majorVersion: number, minorVersion: number;
  if (parsed) {
    majorVersion = Number(parsed![1]);
    if (parsed![2]) {
      minorVersion = Number(parsed![2]);
    } else {
      if (process.env.NODE_ENV !== "production") {
        context.$logger.warn(
          `Unable to parse minor version in '${version}', assumed to be ${majorVersion}.0`
        );
      }
      minorVersion = 0;
    }
  } else {
    if (process.env.NODE_ENV !== "production") {
      context.$logger.warn(
        `Unable to parse version string '${version}', fell back to 1.0`
      );
    }
    majorVersion = 1;
    minorVersion = 0;
  }
  return { majorVersion, minorVersion };
}

export class Info implements OvalInfo {
  public majorVersion: number;
  public minorVersion: number;
  public maxColorTargets: number;

  private _context: WebGLContext;

  public constructor(context: WebGLContext) {
    this._context = context;

    const { majorVersion, minorVersion } = parseVersion(
      context.$gl.getParameter(GL_VERSION),
      context
    );
    this.majorVersion = majorVersion;
    this.minorVersion = minorVersion;

    this.maxColorTargets = context.$gl.getParameter(GL_MAX_COLOR_ATTACHMENTS);
  }
}

export default function info(context: WebGLContext) {
  return new Info(context);
}
