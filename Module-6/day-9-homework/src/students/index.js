const express = require("express")

const db = require("../db")
const usersRouter = express.Router()

usersRouter.get("/", async (req, res, next) => {
    try {
        const students = await db.query(`SELECT * FROM Products `)
        res.send(students.rows[0])

    } catch (error) {
        next(error)
    }
})


usersRouter.get("/:id", async (req, res, next) => {
    try {
        const students = await db.query(`SELECT * FROM "Students" WHERE id = $1 `, [req.params.id])
        res.send(students.rows[0])

    } catch (error) {
        console.log(error)
        next("While reading users list a problem occurred!")
    }
})

usersRouter.get("/:id/projects", async (req, res, next) => {
    try {
        const students = await db.query(`SELECT
        name,  project_name, description, "repoUrl", "liveUrl"
    FROM
    public."Students"
    INNER JOIN public."Project"
    ON  id = student_id WHERE id = $1
    `, [req.params.id])
        res.send(students.rows[0])

    } catch (error) {
        console.log(error)
        next("While reading users list a problem occurred!")
    }
})

usersRouter.post("/", async (req, res, next) => {
    try {
        const students = await db.query(`INSERT INTO "Students"(
             "name", "surname", "email", "date_of_birth")
            VALUES ($1, $2, $3, $4) RETURNING *; `, [req.body.name, req.body.surname, req.body.email, req.body.date_of_birth])
        res.send(students.rows[0])

    } catch (error) {
        next(error)
    }
})

usersRouter.put("/:id", async (req, res, next) => {
    try {
        const students = await db.query(`UPDATE "Students"
        Set "name"=$1, "surname"=$2, "email"=$3, "date_of_birth"=$4
        WHERE id = $5 RETURNING *;
           `, [req.body.name, req.body.surname, req.body.email, req.body.date_of_birth, req.params.id])
        res.send(students.rows[0])
    } catch (error) {
        next(error)
    }
})

usersRouter.delete("/:id", async (req, res, next) => {
    try {
        const students = await db.query(`DELETE FROM "Students"
        WHERE id = $1  RETURNING *`, [req.params.id])
        res.send(students.rows[0])

    }
    catch (error) {
        next(error)
    }
})

module.exports = usersRouter
