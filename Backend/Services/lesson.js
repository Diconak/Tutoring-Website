const lessonSchema = require("../Models/lesson.js");
const courseSchema = require("../Models/course.js");
const mongoose = require("mongoose");

const lessonModel = lessonSchema.lessonModel;
const courseModel = courseSchema.courseModel;

class LessonService {
  LessonService() {}

  getAllLessons() {}

  getLessonByLanguageName() {}

  addLesson() {}

  deleteLesson() {}
}

module.exports = LessonService;
