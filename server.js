require("dotenv").config({ path: "./config/config.env"})
const express = require("express");
const todoRoute = require("./Todos/todo.router")
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs/index');
const {connectDB} = require("./config/database")

const app = express();

connectDB()

app.use(express.json())

app.use('/',swaggerUI.serve,swaggerUI.setup(docs));
app.use('/todos', todoRoute)

app.get('/', (req, res) => {
    res.send(`<h1>Hell its working!!!</h1><br><a href="/about">About</a>`)
})

app.get('/about', (req, res) => {
    res.send(`<h1>About Page</h1><br><a href="/">Home</a>`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listing @ http://localhost:${process.env.PORT}`)
})