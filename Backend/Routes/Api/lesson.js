const express = require('express')
const controller = require('../../Controllers/lesson.js')
const router = express.Router()

router.get('/', controller.getAllLessons())


module.exports = {


}