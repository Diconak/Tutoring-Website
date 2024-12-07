const express = require("express")
const courseController = require("../../Controllers/course.js")
const router = express.Router()

router.get("/", courseController.getAllCourses)


module.exports = router