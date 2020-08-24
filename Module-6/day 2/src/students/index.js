const express = require("express")
const queryToMongo = require("query-to-mongo")
const UserSchema = require("./schema")
//const allProjects = require("../projects/ProjectSchema")
const usersRouter = express.Router()

usersRouter.get("/", async (req, res, next) => {
    try {
        const stud = queryToMongo(req.query)
        const student = await UserSchema.find(stud.criteria, stud.options.fields, {}).populate("projects")
            .skip(stud.options.skip)
            .limit(stud.options.limit)
            .sort(stud.options.sort)
        res.send(student)

    } catch (error) {
        next(error)
    }
})


usersRouter.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await UserSchema.findById(id).populate("projects")
        if (user) {
            res.send(user)
        } else {
            const error = new Error()
            error.httpStatusCode = 404
            next(error)
        }
    } catch (error) {
        console.log(error)
        next("While reading users list a problem occurred!")
    }
})
// //for students/:studentId/projects
// usersRouter.get("/:id/projects", async (req, res, next) => {
//     try {
//         const projects = await allProjects.find({ studentId: req.params.id })
//         res.send(projects)
//     } catch (error) {
//         next(error)
//     }

// })
usersRouter.post("/", async (req, res, next) => {
    try {
        const StudentEmailCheck = await UserSchema.find({ email: req.body.email.toLowerCase() })
        console.log(StudentEmailCheck)
        if (StudentEmailCheck.length > 0) {
            res.send('Email Already in use')
        }

        else {
            const newUser = new UserSchema(req.body)

            const { _id } = await newUser.save()
        }

        res.status(201).send(req.body)
    } catch (error) {
        next(error)
    }
})

usersRouter.put("/:id", async (req, res, next) => {
    try {
        const user = await UserSchema.findByIdAndUpdate(req.params.id, req.body).populate("projects")
        console.log(user)
        if (user) {
            res.send(user)
        } else {
            const error = new Error(`User with id ${req.params.id} not found`)
            error.httpStatusCode = 404
            next(error)
        }
    } catch (error) {
        next(error)
    }
})

usersRouter.delete("/:id", async (req, res, next) => {
    try {
        const user = await UserSchema.findByIdAndDelete(req.params.id)
        if (user) {
            res.send("Deleted")
        } else {
            const error = new Error(`User with id ${req.params.id} not found`)
            error.httpStatusCode = 404
            next(error)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = usersRouter
