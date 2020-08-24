const orm = require("../../db")
const sequelize = require("sequelize")
const { Sequelize } = require("sequelize")

const Book = orm.define("Books", {
    asin: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false

    },
    price: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {
    timestamps: false

})
module.exports = Book