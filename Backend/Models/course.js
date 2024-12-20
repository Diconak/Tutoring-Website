const mongoose = require("mongoose")
const courseSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    courseName : {
        type : String,
        required : true
    },
    level : {
        type : String,
        required : true
    },
    courseLessons : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "lessons",
        default : []
    }]
}, { collection : "courses"})

const courseModel = mongoose.model("courses", courseSchema)

module.exports = {
    courseModel
}
 