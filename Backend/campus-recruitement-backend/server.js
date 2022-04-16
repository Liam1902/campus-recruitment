const express = require('express');
const cors = require("cors");
var bodyParser = require('body-parser')
const sequelize = require('sequelize');

const app = express();


//localhost port difine
const PORT = 8080;
var corsOptions = {
    origin: "http://localhost:4200"
  };
  app.use(cors(corsOptions));

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse application/json
app.use(bodyParser.json())

//data flow sync hendle to use db
const db = require("./app/models");

db.sequelize.sync();

//simple router
app.get('/', (req,res)=>{
    res.send("hello")
})


require('./app/routes/question.route')(app);
require('./app/routes/student.route')(app);
require('./app/routes/answer.route')(app);
require('./app/routes/exam.route')(app);

// set port, listen for requests
app.listen(PORT, ()=>{
    console.log("Listen to port " + PORT)
})








