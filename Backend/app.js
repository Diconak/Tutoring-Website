const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors)

app.use(
    express.urlencoded({
      extended: false,
    })
  )

  
app.use(express.json())


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

app.get('/', (req, res) => {
    res.sendcd("Hello world!");
})

app.use(function (req, res, next) {
    const error = new Error("Zahtev nije podrzan od servera");
    error.status = 405;
  
    next(error);
  });
  
  // Obrada svih gresaka u nasoj aplikaciji
  app.use(function (error, req, res, next) {
    // console.error(error.stack);
  
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      message: error.message,
      status: statusCode,
      stack: error.stack,
    });
  });
  