import context from "../src/context";
import info from "../src/info";

describe("parameters", () => {
  it("should populate max color targets", () => {
    expect(info(context({})).maxColorTargets).not.toBeUndefined();
  });

  it("should populate major and minor version", () => {
    let warning: string;
    const created = context({
      log: {
        handler: (message: string) => {
          warning = message;
        }
      }
    }),
      sets = [
        // Version String, Major, Minor, Warning
        ["1", 1, 0, ""],
        ["2.0", 2, 0, ""],
        ["WebGL1", 1, 0, "minor version"],
        ["WebGL 1", 1, 0, "minor version"],
        ["WebGL 1.", 1, 0, "minor version"],
        ["WebGL 1, 2, 3, 4", 1, 0, "minor version"],
        ["2 a1b2c3", 2, 0, "minor version"],
        ["a2d1.0c.3b", 2, 0, "minor version"],
        ["", 1, 0, "version string"]
      ],
      original = created.$gl.getParameter.bind(created.$gl);

    for (const set of sets) {
      created.$gl.getParameter = (parameter: number) =>
        parameter === WebGLRenderingContext.VERSION
          ? set[0]
          : original(parameter);

      const { majorVersion, minorVersion } = info(created);
      expect(majorVersion).toBe(set[1] as number);
      expect(minorVersion).toBe(set[2] as number);
      if (set[3]) {
        expect(warning).toContain(set[3] as string);
      }
    }
  });

  it("should ignore warnings on production builds", () => {
    const mode = process.env.NODE_ENV,
      created = context({}),
      original = created.$gl.getParameter.bind(created.$gl);

    process.env.NODE_ENV = "production";

    for (const version of ["", "1"]) {
      created.$gl.getParameter = (parameter: number) =>
        parameter === WebGLRenderingContext.VERSION
          ? version
          : original(parameter);

      expect(() => info(created)).not.toThrowError();
    }

    process.env.NODE_ENV = mode;
  });
});
