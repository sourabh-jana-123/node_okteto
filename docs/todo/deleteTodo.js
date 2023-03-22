module.exports = {
    post: {
        tags: ["Todo"],
        description: "Delete Todo",
        operationId: "deleteTodo",
        parameters: [
            {
                name: "id",
                in: "header",
            }
        ],
        responses: {
            201: {
                description: "Todo deleted successfully",
            },
            500: {
                description: "Server error"
            },
        },
    },
}