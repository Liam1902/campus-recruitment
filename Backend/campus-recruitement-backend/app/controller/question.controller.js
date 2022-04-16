
const db = require("../models");
const Question = db.question;
exports.Question = (req, res) => {

    Question.findAll({}).then( result=> {
    //     console.log("__________", result)
    //   res.json(result)

        if(result){
         
           
            res.status(200).json(result)
        }else{
            res.status(500).send({ message:"Question is not show"});
        }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
    

};


