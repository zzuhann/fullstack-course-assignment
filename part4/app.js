require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config");

const blogsRouter = require("./controllers/blogs");

mongoose.connect(config.MONGODB_URI);

app.use(express.static("dist"));
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogsRouter);

module.exports = app;
