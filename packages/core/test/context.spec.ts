import { Context } from "../src/backend/context";

describe("context", () => {
  it("cannot be initialized ", () => {
    expect(() => new (Context as any)()).toThrowError();
  });
});
