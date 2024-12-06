const lessonSchema = require('../Models/lesson.js')
const mongoose = require('mongoose')

const lessonModel = lessonSchema.lessonModel

const getAllLessons = async (req, res, next) => {
    try{
        const lessons = await lessonModel.find().sort({lessonNumber : -1}).exec();
        if(lessons){
            res.status(200).json(lessons)
        }
        else{
            res.status(400).json()
        }
    }catch(error){
        next(error)
    }
}


module.exports = {
    getAllLessons
}