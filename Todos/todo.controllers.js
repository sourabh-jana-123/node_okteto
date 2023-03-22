const Todo = require("./todo.model")

exports.createTodo = async (req, res) => {

    try {
        const todo = await Todo.create(req.body);
        res.status(200).json({
            success: true,
            todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}

exports.updateTodo = async (req, res) => {

    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success: true,
            todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}

exports.getTodo = async (req, res) => {

    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json({
            success: true,
            todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}

exports.getAllTodos = async (req, res) => {

    try {
        const todos = await Todo.find();
        res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}

exports.deleteTodo = async (req, res) => {

    try {
        const todo = await Todo.findByIdAndRemove(req.params.id);
        res.status(200).json({
            success: true,
            message: `${todo.task} deleted`
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}