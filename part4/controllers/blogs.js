const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogsRouter.post("/", async (request, response, next) => {
  const blog = new Blog(request.body);

  try {
    const savedBlog = await blog.save();
    response.status(201).json(savedBlog);
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.get("/:id", async (request, response, next) => {
  const id = request.params.id;

  try {
    const targetBlog = await Blog.findById(id);
    if (targetBlog) {
      response.json(targetBlog);
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.delete("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    await Blog.findByIdAndDelete(id);
    res.status(204).end();
  } catch (exception) {
    next(exception);
  }
});

module.exports = blogsRouter;
