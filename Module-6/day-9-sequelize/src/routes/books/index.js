const express = require('express')
const Book = require('../../models/book')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const limit = req.query.limit || 2
        const offset = req.query.offset || 0
        const order = req.query.order || "asc"
        delete req.query.limit
        delete req.query.offset
        delete req.query.order

        const books = await Book.findAll({
            where: { ...req.body },
            limit: limit,
            offset: offset,
            order: [
                ["title", order]
            ]
        })
        res.send(books)
    } catch (e) {

        console.log(e)
        res.status(500), send(e)
    }
})

router.get("/:asin", async (req, res) => {
    try {
        const books = await Book.findOne({
            where: { asin: req.params.asin }
        })
        console.log(books)
        if (books)
            res.send(books)
        else
            res.status(400).send("Diego this  doesnt exist, try an existing asin ")
    } catch (e) {
        console.log(e)
        res.status(500), send(e)
    }
})

router.post("/", async (req, res) => {
    try {
        const books = await Book.create(req.body)
        res.send(books)
    } catch (e) {
        console.log(e)
        res.status(500), send(e)
    }
})

router.put("/:asin", async (req, res) => {
    try {
        const books = await Book.update({
            ...req.body
        }, {
            where: { asin: req.params.asin }
        })
        if (books[0] === 1)
            res.send("ok")
        else
            res.status(404).send("Diego this  doesnt exist, try an existing asin ")
    } catch (e) {
        console.log(e)
        res.status(500), send(e)
    }
})
router.delete("/:asin", async (req, res) => {
    try {
        const result = await Book.destroy({
            where: { asin: req.params.asin }
        })
        if (result === 1)
            res.send("diego, this is destroyed succesfully")
        else
            res.status(404).send("Diego this  doesnt exist, try an existing asin ")
    } catch (e) {
        console.log(e)
        res.status(500), send(e)
    }
})

module.exports = router;