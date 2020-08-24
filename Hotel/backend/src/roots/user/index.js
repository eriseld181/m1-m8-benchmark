const express = require('express')
const db = require('../../db')
const userRouter = express.Router()

userRouter.get("/", async (req, res) => {

    const user = await db.query('SELECT * FROM user ')
    res.send(user)


})

module.exports = userRouter