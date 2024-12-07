const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { urlencoded, json } = require("body-parser");

const lessonRoutes = require('./Routes/Api/lesson.js')
const courseRoutes = require('./Routes/Api/course.js')

const app = express()
app.use(cors)


//Server responses
app.use(
    express.urlencoded({
      extended: false,
    })
  )

  
app.use(express.json())


//Setting up cors protection
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PATCH, PUT, DELETE"
      );
  
      return res.status(200).json({});
    }
  
    next();
  });

// Routes and requests
app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.use('/lesson', lessonRoutes)
app.use('/course', courseRoutes)

//Error parsing for server
app.use(function (req, res, next) {
    const error = new Error("Zahtev nije podrzan od servera");
    error.status = 405;
  
    next(error);
  });
  
  // error parsing
  app.use(function (error, req, res, next) {
    // console.error(error.stack);
  
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      message: error.message,
      status: statusCode,
      stack: error.stack,
    });
  });
  
 module.exports = app