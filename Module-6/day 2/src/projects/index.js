const express = require("express")
const ProjectSchema = require("./ProjectSchema")

const projectRouter = express.Router()
//get all project 
projectRouter.get("/", async (req, res, next) => {
    try {
        const project = await ProjectSchema.find(req.query)
        console.log(project)
        res.send(project)

    } catch (error) {
        next(error)
    }

})
//get the single project id
projectRouter.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const project = await ProjectSchema.findById(id)
        if (project) {
            res.send(project)
        } else {
            const error = new Error()
            error.httpStatusCode = 404
            next(error)
        }
    } catch (error) {
        console.log(error)
        next("while reading project list a problem occurred!")

    }
})

//post a new project with the student id.

projectRouter.post("/", async (req, res, next) => {
    try {
        const newProject = new ProjectSchema(req.body)
        const { _id } = await newProject.save()
        console.log(newProject)
        res.status(201).send(req.body)
    } catch (error) {
        next(error)
    }
})
//edit a new project using the student id.
projectRouter.put("/:id", async (req, res, next) => {
    try {
        const project = await ProjectSchema.findByIdAndUpdate(req.params.id, req.body)
        if (project) {
            res.send(req.body)
        } else {
            const error = new Error(`Project with id ${req.params.id} dont exist`)
            error.httpStatusCode = 404
            next(error)
        }
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