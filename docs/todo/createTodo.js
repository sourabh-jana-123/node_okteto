module.exports = {
    post: {
        tags: ["Todo"],
        description: "Add Todo",
        operationId: "createTodo",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/todo",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Todo added successfully",
            },
            500: {
                description: "Server error"
            },
        },
    },
}