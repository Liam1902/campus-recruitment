module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("questions", {
      questions: {
        type: Sequelize.STRING
    },
      status: {
        type: Sequelize.STRING
      },
       },
    {
        timestamps: false
    }
    );
    return Question;
  };