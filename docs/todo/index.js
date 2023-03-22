const { createTodo } = require("./createTodo")
const { getTodos } = require("./getAllTodos")
const { getTodo } = require("./getTodo")
const { updateTodo } = require("./updateTodo")
const { deleteTodo } = require("./deleteTodo")

module.exports = {

    "/:id": {
        get: { ...getTodo },
        pust: { ...updateTodo },
        delete: { ...deleteTodo }
    },

    "/": {
        get: { ...getTodos },
        post: { ...createTodo }
    },
}