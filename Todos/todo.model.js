const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please enter the task"],
        minLength: [3, "task should be more than 3 charracters"]
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Todo", todoSchema);