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


module.exports = {
    getAllCourses

}