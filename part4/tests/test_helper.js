const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "HTML is easy",
    author: "TzuHan",
    url: "https://google.com",
    likes: 223,
  },
  {
    title: "CSS: Fish also can learn",
    author: "Fish",
    url: "https://google.com",
    likes: 338,
  },
];

const nonExistingId = async () => {
  const blog = new Blog({ title: "willremovethissoon" });
  await blog.save();
  await blog.deleteOne();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
};
