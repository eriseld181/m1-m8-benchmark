const express = require("express")
const db = require("../db")

const projectRouter = express.Router()
//get all project 


projectRouter.get("/", async (req, res, next) => {
    try {
        const project = await db.query(`SELECT * FROM "Project" `)
        res.send(project.rows)

    } catch (error) {
        next(error)
    }
})


//get the single project id
projectRouter.get("/:id", async (req, res, next) => {
    try {
        const project = await db.query(`SELECT * FROM "Project" WHERE project_id = $1 `, [req.params.id])
        res.send(project.rows[0])

    } catch (error) {
        console.log(error)
        next("While reading users list a problem occurred!")
    }
})

//post a new project with the student id.

projectRouter.post("/", async (req, res, next) => {
    try {
        const students = await db.query(`INSERT INTO "Project"(
             "name", "description", "repoUrl", "liveUrl","student_id" )
            VALUES ($1, $2, $3, $4, $5) RETURNING *; `, [req.body.name, req.body.description, req.body.repoUrl, req.body.liveUrl, req.body.student_id])
        res.send(students.rows[0])

    } catch (error) {
        next(error)
    }
})
//edit a new project using the student id.
projectRouter.put("/:id", async (req, res, next) => {
    try {
        const students = await db.query(`UPDATE "Students"
        Set "name"=$1, "description"=$2, "repoUrl"=$3, "repoUrl"=$4 , "student_id"=$5
         WHERE id = $6 RETURNING *;
           `, [req.body.name, req.body.description, req.body.repoUrl, req.body.repoUrl, req.body.student_id, req.params.id])
        res.send(students.rows[0])
    } catch (error) {
        next(error)
    }
})
//Delete a new project using the student id.
projectRouter.delete("/:id", async (req, res, next) => {
    try {
        const project = await ProjectSchema.findByIdAndDelete(req.params.id)
        if (project) {
            res.send(`project with id: ${req.params.id} was deleted successfully`)
        } else {
            const error = new Error(`project with id: ${req.params.id} not found in Database`)
            error.httpStatusCode = 404
            next(error)
        }
    } catch (error) {
        next(error)
    }
})


module.exports = projectRouter