const { test, describe } = require("node:test");
const assert = require("node:assert");
const list_helper = require("../utils/list_helper");

describe("total likes", () => {
  test("of empty list is zero", () => {
    const blogs = [];
    const result = list_helper.totalLikes(blogs);

    assert.strictEqual(result, 0);
  });

  test("when list has only one blog equals the likes of that", () => {
    const blogs = [
      {
        title: "test",
        author: "zzuhann",
        url: "https://google.com",
        likes: 520,
      },
    ];
    const result = list_helper.totalLikes(blogs);

    assert.strictEqual(result, 520);
  });

  test("of a bigger list is calculated right", () => {
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
    const result = list_helper.totalLikes(blogs);

    assert.strictEqual(result, 150);
  });
});
