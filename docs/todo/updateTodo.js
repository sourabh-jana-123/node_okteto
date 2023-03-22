module.exports = {
    post: {
        tags: ["Todo"],
        description: "Update Todo",
        operationId: "updateTodo",
        parameters: [
            {
                name: "id",
                in: "header",
            }
        ],
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
                description: "Todo updated successfully",
            },
            500: {
                description: "Server error"
            },
        },
    },
}