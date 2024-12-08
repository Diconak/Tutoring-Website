const lessonSchema = require('../Models/lesson.js')
const courseSchema = require('../Models/course.js')
const mongoose = require('mongoose')

const lessonModel = lessonSchema.lessonModel
const courseModel = courseSchema.courseModel


const getAllLessons = async (req, res, next) => {
    try{
        const lessons = await lessonModel.find().sort({langName : 1, lessonNumber : 1}).exec();
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

const getByLangName = async(req, res, next) => {
    const langname = req.params.langName
    try{
        if(!langname){
            const error = new Error("Requested langName is missing in url")
            error.status = 400
            throw error
        }
        const lesson = await lessonModel.find({langName : langname}).exec()
        if(lesson){
            res.status(200).json(lesson)
        }
        else{
            res.status(500).json()
        }
    }catch(error){
        next(error)
    }

}

const addLesson = async (req, res, next) => {
    const {lessonNumber, langname, lessonname, description, videourl, githuburl} = req.body

    try{
        const newLesson = new lessonModel({
            _id : mongoose.Types.ObjectId(),
            lessonNumber : lessonNumber,
            langName : langname,
            lessonName : lessonname,
            description : description,
            videoURL : videourl,
            githuburl : githuburl
        })

        await newLesson.save()
        const cours = await courseModel.findOne({courseName : langname}).exec()
        let courseLessons = cours.courseLessons
        if(cours){
            courseLessons.push(newLesson._id)
            cours.updateOne({
                courseLessons : courseLessons
            })
            res.status(200).json(newLesson)
        }
        else{
            res.status(404).json()
        }
    }
    catch(error) {
        next(error)
    }
}

const deleteLesson = async (req, res, next) => {
    const lessonname = req.params.lessonName
    if(!lessonname){
        const error = new Error("Invalid param has been sent")
        error.status(500)
        throw error
    }
    try {
        const lesson = await lessonModel.deleteOne({lessonName : lessonname}).exec()
        if(lesson.deletedCount == 1){
            res.status(200).json({success : true})
        }        
        else{
            res.status(400).json()
        }
    } catch (error) {
        next(error)
    }
     
}


module.exports = {
    getAllLessons,
    getByLangName,
    addLesson,
    deleteLesson
}