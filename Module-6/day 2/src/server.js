const express = require("express")

const cors = require("cors")
const { join } = require("path")
const listEndpoints = require("express-list-endpoints")
const mongoose = require("mongoose")
const port = process.env.PORT

const studentRouter = require("./students")//
const projectRouter = require("./projects")

const {
    notFoundHandler,
    badRequestHandler,
    genericErrorHandler,
} = require("./students/errorHandler")
const { resolveSoa } = require("dns")
const server = express()

server.use(express.json())
server.use('/students', studentRouter)
server.use("/projects", projectRouter)
// ERROR HANDLERS MIDDLEWARES

server.use(badRequestHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

console.log(listEndpoints(server))

mongoose
    .connect("mongodb://localhost:27017/Hw2", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        server.listen(port, () => {
            console.log("Running on port", port)
        })
    )
    .catch((err) => console.log(err))