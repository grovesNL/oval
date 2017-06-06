import logger from "../src/logger";
import containing from "./helpers/containing";

describe("logger", () => {
  it("should log to the console by default", () => {
    let logged: string;
    const { log, info, warn, error } = console,
      messages = ["a", "b", "c", "d"],
      intercept = (message: string) => {
        logged = message;
      };

    console.log = console.info = console.warn = console.error = intercept;

    const l = logger();
    expect(() => l.log(messages[0])).not.toThrow();
    expect(logged).toContain(messages[0]);
    expect(() => l.info(messages[1])).not.toThrow();
    expect(logged).toContain(messages[1]);
    expect(() => l.warn(messages[2])).not.toThrow();
    expect(logged).toContain(messages[2]);
    expect(() => l.error(messages[3])).toThrowError(containing(messages[3]));
    expect(logged).toContain(messages[3]);

    console.log = log;
    console.info = info;
    console.warn = warn;
    console.error = error;
  });

  it("should log to a provided handler", () => {
    let logged: string, shouldHaveThrown: boolean;
    const messages = ["a", "b", "c", "d"],
      l = logger({
        handler: (message: string, shouldThrow: boolean) => {
          logged = message;
          shouldHaveThrown = shouldThrow;
        }
      });

    expect(() => l.log(messages[0])).not.toThrow();
    expect(logged).toContain(messages[0]);
    expect(shouldHaveThrown).toBe(false);
    expect(() => l.info(messages[1])).not.toThrow();
    expect(logged).toContain(messages[1]);
    expect(shouldHaveThrown).toBe(false);
    expect(() => l.warn(messages[2])).not.toThrow();
    expect(logged).toContain(messages[2]);
    expect(shouldHaveThrown).toBe(false);
    expect(() => l.error(messages[3])).not.toThrow();
    expect(logged).toContain(messages[3]);
    expect(shouldHaveThrown).toBe(true);
  });
});
