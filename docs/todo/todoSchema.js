module.exports = {
    type: "object",
    properties: {
        id: {
            type: "string",
            description: "task identification number",
            example: "27d02853227c918269b866148309f808bc6edb77",
        },
        task: {
            type: "String",
            description: "Your task",
            required: true,
            example: "Learn Docker"            
        },
        isCompleted: {
            type: "Boolean",
            description: "Is task completed or not?",
            example: "false"
        },
        createAt: {
            type: "Date",
            default: Date.now()
        }
    }
}