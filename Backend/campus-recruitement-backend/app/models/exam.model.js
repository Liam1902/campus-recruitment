module.exports = (sequelize, Sequelize) => {
    const Exam = sequelize.define("exams", {
      date: {
        type: Sequelize.STRING

      },
      campus_name: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.STRING
      },
      end_time: {
        type: Sequelize.STRING
      },
     
    },
    {
      timestamps: false
  }
    );
    return Exam;
  };