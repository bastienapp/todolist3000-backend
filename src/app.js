const express = require("express");
const app = express();
const todoRouter = require("./routers/todos.router");
const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
  })
);

app.use(express.json()); // to accept JSON body in POST request

app.use("/todos", todoRouter);

module.exports = app;
