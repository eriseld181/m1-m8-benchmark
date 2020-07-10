const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const ProjectSchema = new Schema(
    {
        projectName: String,
        projectType: String,
        collaborators: { type: Array },
        studentId: [{
            type: Schema.Types.ObjectId,
            ref: "students",
            required: true
        }]

    }
)
module.exports = mongoose.model("projects", ProjectSchema)
