module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answers", {
      student_id: {
        type: Sequelize.STRING

      },
      question_id: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      }, 
      lenguage : {
        type: Sequelize.STRING
      },
      status : {
        type: Sequelize.STRING
      },
     
    },
    {
      timestamps: false
  }
    );
    return Answer;
  };