const db = require("../models");
const Answer = db.answer;
const Op = db.Sequelize.Op;

exports.Answer = (req, res) => {
  // Save User to Database
  console.log("req.body____________", req.body);
  Answer.create({
     student_id:req.body.student_id,
     question_id:req.body.question_id,
     answer : req.body.answer,
     lenguage: req.body.lenguage,
     status: req.body.status,
  })
    .then(answer=> {
        if(answer){
         
           
            res.status(200).send("student sucessfully submit answer")
        }else{
            res.status(500).send({ message:"student not register try again"});
        }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


