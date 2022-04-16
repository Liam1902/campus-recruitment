
const db = require("../models");
const Exam = db.exam;

// Save User to Database
exports.Exam = (req, res) => {
 console.log("req.body____________", req.body);
 Exam.create({
    date: req.body.date,
    campus_name: req.body.campus_name,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
 })
   .then(exam=> {
       if(exam){
          
           res.status(200).send("student sucessfully register")
       }else{
           res.status(500).send({ message:"student not register try again"});
       }
   })
   .catch(err => {
     res.status(500).send({ message: err.message });
   });
};



// Exam.findAll({}).then((result)=>{
//     res.json(result)
// },(err)=>{
//     res.status(400).send(err)
// })
