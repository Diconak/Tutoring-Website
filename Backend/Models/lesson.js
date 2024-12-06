const mongoose = require("mongoose")
const lessonSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    lessonNumber : {
        type : Number,
        required : true
    },
    lessonName : {
        type: String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    videoURL : {
        type : String,
        required: true
    },
    githubLink : {
        type : String,
        required : true
    }
}, {collection : "lessons"})

const lessonModel = mongoose.model("lessons", lessonSchema)

module.exports = {
    lessonModel
}