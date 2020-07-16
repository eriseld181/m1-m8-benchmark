const express = require('express')
const cors = require('cors')

const port = process.env.PORT
// const listEndpoints = require('express-list-endpoints')
const db = require('./db')

const server = express()
//get all routes for hotel users, rooms, reservation
// const Rooms = require('./roots/rooms')
// const Reservation = require("./roots/reservation")
// const User = require("./roots/user")

server.get("/testsql", async (req, res) => {
    const response = await db.query("SELECT 1+1")
    console.log(response)
    res.send(response)
})

server.use(express.json())
//use this roots for postman
// server.use('/user', User)
// server.use('/rooms', Rooms)
// server.use('/reservation', Reservation)

server.listen(port || 3000, () =>
    console.log(`Running on port: ${port}`))

// console.log(listEndpoints(server))