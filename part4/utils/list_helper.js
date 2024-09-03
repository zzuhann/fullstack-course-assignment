const _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((acc, curr) => {
    return acc + curr.likes;
  }, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;
  const maxValue = Math.max(...blogs.map((blog) => blog.likes));
  const maxLikesBlog = blogs.find((blog) => blog.likes === maxValue);
  return maxLikesBlog;
};

const mostBlogs = (blogsList) => {
  // [{author: 'name', blogs: number}]
  if (blogsList.length === 0) return null;
  return _.maxBy(blogsList, (list) => list.blogs);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
