const { test } = require("node:test");
const assert = require("node:assert");
const list_helper = require("../utils/list_helper");

test("dummy returns one", () => {
  const blog = [];

  const result = list_helper.dummy(blog);
  assert.strictEqual(result, 1);
});
