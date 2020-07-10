const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const StudentSchema = new Schema(
    {

        name: String,
        surname: String,
        email: String,
        dateOfBirth: String,
        country: String,
        projects: [{ type: Schema.Types.ObjectId, ref: "projects" }]


    }

)


StudentSchema.static("findAll", async function (id) {
    const stud = await studentModal.findOne({ _id: id }).populate("students")
    return stud
})

const studentModal = mongoose.model("students", StudentSchema)

module.exports = studentModal