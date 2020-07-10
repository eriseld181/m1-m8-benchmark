const { Schema } = require("mongoose")
const mongoose = require("mongoose")
const validator = require("validator")
const StudentSchema = new Schema(
    {

        name: {
            type: String,
            required: true
        },
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


// {


//       surname:{
//         type:String,
//         required:true
//       },
//     email: {
//       type:String,
//       required:true,
//       lowercase:true,
//       validate: {
//         validator: async (value) => {
//           if(!valid.isEmail(value)){
//             throw new Error ("Email is ivalid")
//           }else{
//           const email = await studentModal.findOne({ email: value })
//           if (email) {
//             throw new Error("Email exist exist already in database")
//           }
//         }
//       }
//     }
//  },
//     dateOfBirth: {type: Date,
//     required:true},
//     country: {type:String,
//     required:true  
//     },
// phoneNumber:{
//   type:Number,
//   required:true,
//   validate: {
//     validator: async (value) => {
//       const phoneNumber = await studentModal.findOne({ phoneNumber: value })
//       if (phoneNumber) {
//         throw new Error("The number exist exist exist already in database")
//       }
//     }
//   }
// },
//  projects: [{ type: Schema.Types.ObjectId, ref: "projects" }]
// From Aleks to Everyone:  03:25 PM
// })
