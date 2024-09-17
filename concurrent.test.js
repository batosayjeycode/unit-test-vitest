import { describe, it } from "vitest";
import { sum } from "./sum.js";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// The two tests marked with concurrent will be started in parallel
describe("suite concurrent", () => {
  it.concurrent("concurrent test 1", async ({ expect }) => {
    await sleep(2000);
    expect(sum(1, 2)).toBe(3);
  });
  it.concurrent("concurrent test 2", async ({ expect }) => {
    await sleep(5000);
    expect(sum(1, 3)).toBe(4);
  });
});
