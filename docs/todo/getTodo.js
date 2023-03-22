module.exports = {
    post: {
        tags: ["Todo"],
        description: "Get Todo",
        operationId: "getTodos",
        parameters: [
            {
                name: "id",
                in: "header",
            }
        ],
        responses: {
            201: {
                description: "Here is your tods",
            },
            500: {
                description: "Server error"
            },
        },
    },
}