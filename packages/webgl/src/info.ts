import { OvalInfo } from "oval-core";
import { GL_MAX_COLOR_ATTACHMENTS, GL_VERSION } from "./common";
import { WebGLContext } from "./context";

function parseVersion(context: WebGLContext) {
  const version = context.$gl.getParameter(GL_VERSION),
    parsed = /([0-9]+)\.?([0-9]*)?/.exec(version);

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

export interface OvalWebGLInfo extends OvalInfo {
  majorVersion: number;
  minorVersion: number;
}

export default function info(context: WebGLContext): OvalWebGLInfo {
  const { majorVersion, minorVersion } = parseVersion(context);
  return {
    majorVersion,
    minorVersion,
    maxColorTargets: context.$gl.getParameter(GL_MAX_COLOR_ATTACHMENTS)
  };
}
