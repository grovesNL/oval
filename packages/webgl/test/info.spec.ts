import info from "../src/info";

describe("parameters", () => {
  it("should populate max color targets", () => {
    expect(info().MAX_COLOR_TARGETS).not.toBeUndefined();
  });
});
