'use strict'
const config = require("../config/db.config");
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,

    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool:{
            max:config.pool.max,
            min: config.pool.min,
            acqire: config.pool.acquire,
            idel: config.pool.idle
        }

    }

);
const db = {};
db.student = require('../models/student.model')(sequelize, Sequelize);
db.question = require('../models/question.model')(sequelize, Sequelize);
db.answer = require('../models/answer.model')(sequelize, Sequelize);
db.exam = require('../models/exam.model')(sequelize, Sequelize);
db.Sequelize = sequelize;
db.sequelize = sequelize;

module.exports = db;









