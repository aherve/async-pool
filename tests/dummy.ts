import test from "node:test";
import assert from "node:assert/strict";
import { hello } from "../src/index.ts";

test("dummy test", () => {
  const actual = hello();
  assert.strictEqual(actual, 0, "Expected hello() to return 0");
});
