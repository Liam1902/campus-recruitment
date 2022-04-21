const { answer, student } = require("../models");
const db = require("../models");
const Answer = db.answer;
const Student = db.student;
const Op = db.Sequelize.Op;

exports.Answer = (req, res) => {
  // Save User to Database
  console.log(res.body)
  Answer.create({
    
     student_id:req.body.student_id,
     question_id:req.body.question_id,
     answer : req.body.answer,
     lenguage: req.body.language,
     status: req.body.status,
  })
    .then(answer=> {
        if(answer){
            res.status(200).send({message: answer})
        }else{
            res.status(500).send({ message:"student not register try again"});
        }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.updateAnswer = (req, res) => {
  Answer.update({
    answer: req.body.answer,
    status: req.body.status
  }, {
    where: {
      id: req.body.id
    }
  }).then(answer => {
    if(answer) {
      res.status(200).send({message: 'added to draft'});
    } else {
      res.status(500).send({message: 'Internal server error'});
    }
  }).catch(err => {
    res.status(500).send({message: err.message});
  })
}

exports.getAnswers = (req, res) => {

  result = [];

  Answer.findAll().then(answer => {
    if(answer) {
      answer.forEach((ans, i) => {
        Student.findOne({
          where: {
            id: ans.student_id
          }
        }).then( student => {
          let answer_data = {
            answer: ans,
            student: student
          }
          result.push(answer_data);
          if(i == answer.length-1) {
            res.status(200).send({data: result});
          }
        }
        )
      });
      // for(var i=0; i<answer.length; i++) {
        
      // }
    } else {
      res.status(500).send({ message: 'internal server error'});
    }
  }).catch(err => {
    res.status(500).send({message: err.message});
  })
}
exports.updateStatus = (req, res)=>{
  console.log(req.body)
  answer.update({
    status:req.body.status
  },{
    where:{
      id:req.body.id
    }
  }).then(answer => {
   if(answer) {
     res.status(200).send({message: 'update Status'});
   } else {
     res.status(500).send({message: 'Internal server error'});
   }
 }).catch(err => {
   res.status(500).send({message: err.message});
 })



}