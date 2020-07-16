const express = require("express")

const db = require("../db")
const usersRouter = express.Router()

usersRouter.get("/", async (req, res, next) => {
    try {
        const students = await db.query(`SELECT * FROM "Students" `)
        res.send(students.rows)

    } catch (error) {
        next(error)
    }
})


usersRouter.get("/:id", async (req, res, next) => {
    try {
        const students = await db.query(`SELECT * FROM "Students" WHERE _id = $1 `, [req.params.id])
        res.send(students.rows[0])

    } catch (error) {
        console.log(error)
        next("While reading users list a problem occurred!")
    }
})

usersRouter.post("/", async (req, res, next) => {
    try {
        const students = await db.query(`INSERT INTO "Students"(
             "Name", "Surname", "Email", "DateOfBirth")
            VALUES ($1, $2, $3, $4) RETURNING *; `, [req.body.Name, req.body.Surname, req.body.Email, req.body.DateOfBirth])
        res.send(students.rows[0])

    } catch (error) {
        next(error)
    }
})

usersRouter.put("/:id", async (req, res, next) => {
    try {
        const students = await db.query(`UPDATE "Students"
        Set "Name"=$1, "Surname"=$2, "Email"=$3, "DateOfBirth"=$4
        WHERE _id = $5 RETURNING *;
           `, [req.body.Name, req.body.Surname, req.body.Email, req.body.DateOfBirth, req.params.id])
        res.send(students.rows[0])
    } catch (error) {
        next(error)
    }
})

usersRouter.delete("/:id", async (req, res, next) => {
    try {
        const students = await db.query(`DELETE FROM "Students"
        WHERE _id = $1  RETURNING *`, [req.params.id])
        res.send(students.rows[0])

    }
    catch (error) {
        next(error)
    }
})

module.exports = usersRouter
