const todoSchema = require("./todo/todoSchema");

module.exports = {
    components: {
        // Reusable schemas (data models)
        schemas: {
            id: {
                type: "string",
                description: "An id of a task",
                example: "27d02853227c918269b866148309f808bc6edb77"
            },
            todo: {
                ...todoSchema
            },
            Error: {
                type: "object", //data type
                properties: {
                    message: {
                        type: "string", // data type
                        description: "Error message", // desc
                        example: "Not found", // example of an error message
                    },
                    internal_code: {
                        type: "string", // data type
                        description: "Error internal code", // desc
                        example: "Invalid parameters", // example of an error internal code
                    },
                },
            },
        },
        // Reusable path, query, header and cookie parameters
        parameters: {

        },
        // Security scheme definitions(see Authentication)
        securitySchemes: {

        },
        // Reusable request bodies
        requestBodies: {

        },
        // Reusable responses, such as 401 Unauthorized or 400 Bad Request
        responses: {

        },
        // Reusable response headers
        headers: {

        },
        // Reusable examples
        examples: {

        },
        // Reusable links
        links: {

        },
        // Reusable callbacks
        callbacks: {

        }
    }
}