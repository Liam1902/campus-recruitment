const db = require("../models");
const Student = db.student;
const Op = db.Sequelize.Op;

exports.Student = (req, res) => {
  // Save User to Database
  // console.log("req.body____________", req.body);
  Student.create({
     name:req.body.name,
     father_name:req.body.father_name,
     email : req.body.email,
     phone_number:req.body.phone_number,
     collage_name:req.body.collage_name,
     branch:req.body.branch,
     passing_year:req.body.branch,

  })
    .then(student=> {
        if(student){
           
            res.status(200).send({message: 'Student register succesfully', data: student});
        }else{
            res.status(500).send({ message:"student not register try again"});
        }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


