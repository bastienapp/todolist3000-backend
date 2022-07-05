const { findAll } = require("../models/todos.models");

function getAll(request, response) {
  response.send(findAll());
}

module.exports = { getAll };
