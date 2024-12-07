const express = require("express")
const courseController = require("../../Controllers/course.js")
const router = express.Router()

router.get("/", courseController.getAllCourses)
router.get("/:courseName", courseController.getCourseByName)

router.post("/addCourse", courseController.addCourse)


module.exports = router