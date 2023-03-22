const express = require("express")
const { getTodo, updateTodo, deleteTodo, getAllTodos, createTodo } = require("./todo.controllers")

const router = express.Router();

router
    .route('/')
    .get(getAllTodos)
    .post(createTodo)

router
    .route('/:id')
    .get(getTodo)
    .put(updateTodo)
    .delete(deleteTodo)

module.exports = router