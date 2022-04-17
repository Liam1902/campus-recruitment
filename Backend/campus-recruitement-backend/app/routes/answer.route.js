const controller = require("../controller/answer.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/campus_recruitment/answers", controller.Answer);
  app.post("/campus_recruitment/update-answers", controller.updateAnswer);
  app.get('/campus_recruitment/get-answer', controller.getAnswers);
};
