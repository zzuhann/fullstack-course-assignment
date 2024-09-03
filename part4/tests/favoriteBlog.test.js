const { test, describe } = require("node:test");
const assert = require("node:assert");
const list_helper = require("../utils/list_helper");

describe("favorite blog", () => {
  test("of empty list is null", () => {
    const blogs = [];
    const result = list_helper.favoriteBlog(blogs);

    assert.strictEqual(result, null);
  });

  test("when list has only one blog return the only blog", () => {
    const blogs = [
      {
        title: "test",
        author: "zzuhann",
        url: "https://google.com",
        likes: 520,
      },
    ];
    const result = list_helper.favoriteBlog(blogs);

    assert.deepStrictEqual(result, blogs[0]);
  });

  test("of a bigger list is return right", () => {
    const blogs = [
      {
        title: "test",
        author: "zzuhann",
        url: "https://google.com",
        likes: 10,
      },
      {
        title: "test1",
        author: "zzuhann",
        url: "https://google.com",
        likes: 20,
      },
      {
        title: "test2",
        author: "zzuhann",
        url: "https://google.com",
        likes: 30,
      },
      {
        title: "test3",
        author: "zzuhann",
        url: "https://google.com",
        likes: 40,
      },
      {
        title: "test4",
        author: "zzuhann",
        url: "https://google.com",
        likes: 50,
      },
    ];
    const result = list_helper.favoriteBlog(blogs);

    assert.deepStrictEqual(result, blogs[4]);
  });
});
