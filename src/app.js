const express = require("express");
const app = express();
const todoRouter = require("./routers/todos.router");

app.use(express.json()); // to accept JSON body in POST request

app.use("/todos", todoRouter);

module.exports = app;
