import { findAll, findById } from "../models/todos.models.js";

export function getAll(request, response) {
  response.send(findAll());
}

export function getOne(request, response) {
  const { id } = request.params;
  response.send(findById(id));
}
