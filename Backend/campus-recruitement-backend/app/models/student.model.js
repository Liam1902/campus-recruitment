module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("students", {
      name: {
        type: Sequelize.STRING

      },
      father_name: {
        type: Sequelize.STRING
      },
      email : {
        type: Sequelize.STRING
      },
      phone_number : {
        type: Sequelize.STRING
      },
      collage_name : {
        type: Sequelize.STRING
      },
      branch : {
        type: Sequelize.STRING
      },
      passing_year : {
        type: Sequelize.STRING
      }
    },
   
    );
    return Student;
  };