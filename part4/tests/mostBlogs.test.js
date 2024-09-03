const { test, describe } = require("node:test");
const assert = require("node:assert");
const list_helper = require("../utils/list_helper");

describe("most blogs", () => {
  test("pass empty list and return null", () => {
    const blogsList = [];
    const result = list_helper.mostBlogs(blogsList);

    assert.deepStrictEqual(result, null);
  });

  test("pass the list which only has one blog info should return that one", () => {
    const blogsList = [
      {
        author: "Robert C. Martin",
        blogs: 3,
      },
    ];
    const result = list_helper.mostBlogs(blogsList);

    assert.deepStrictEqual(result, blogsList[0]);
  });

  test("pass the list with large info should return the one which has most blogs", () => {
    const blogsList = [
      {
        author: "Robert C. Martin",
        blogs: 3,
      },
      {
        author: "zzuhann",
        blogs: 5,
      },
      {
        author: "jeff",
        blogs: 0,
      },
    ];

    const result = list_helper.mostBlogs(blogsList);

    assert.deepStrictEqual(result, blogsList[1]);
  });
});
