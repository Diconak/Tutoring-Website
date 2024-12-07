const mongoose = require('mongoose')
const couresSchema = require('../Models/course.js')

const courseModel = couresSchema.courseModel

const getAllCourses = async (req, res, next) => {
    try{
        const courses = await courseModel.find().exec()
        if(courses){
            res.status(200).json(courses)
        }
        else{
            res.status(400).json()
        }
    }
    catch(error){
        next(error)
    }

}

const getCourseByName = async (req, res, next) => {
    const coursename = req.parms.coursename
    if(!coursename){
        const error = new Error("No name has courseName has been sent")
        error.status = 400
        throw error
    }
    try {
        
        const course = await courseModel.find({courseName : coursename}).exec()
        if(course){
            res.status(200).json(course)
        }
        else{
            res.status(400).json()
        }

    } catch (error) {
        next(error)
    }
}

const addCourse = async (req, res, next) => {
    const {coursename, level} = req.body
    if(!coursename || !level){
        const error = new Error("Incorrect body in addCourse function")
        error.status = 400
        throw error
    }

    try {
        const newCourse = new courseModel({
            courseName : coursename,
            level : level 
        })

        await newCourse.save()
        res.status(201).json(newCourse)    
    } catch (error) {
        next(error)
    }
}

const addLessonToCourse = async (req, res, next) => {
    //TO-DO after adding ref to Lesson in model 
} 

module.exports = {
    getAllCourses,
    getCourseByName,
    addCourse,
    addLessonToCourse
}