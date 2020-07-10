const express = require("express")

const UserSchema = require("./schema")

const usersRouter = express.Router()

usersRouter.get("/", async (req, res, next) => {
    try {
        const users = await UserSchema.find({}).populate("projects")
        res.send(users)
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

usersRouter.post("/", async (req, res, next) => {
    try {
        const newUser = new UserSchema(req.body)
        console.log(req.body)
        const { _id } = await newUser.save()

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
