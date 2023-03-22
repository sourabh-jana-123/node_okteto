module.exports = {
    post: {
        tags: ["Todo"],
        description: "Get Todos",
        operationId: "getAllTodos",
        responses: {
            201: {
                description: "Here is all your tods",
            },
            500: {
                description: "Server error"
            },
        },
    },
}