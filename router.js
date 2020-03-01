const controller = require("./controller");

exports.Router = (app) => {
    controller.parser(app);
    app.get("/find-all", controller.findAll); //this is only for checking
    app.get("/find-user", controller.findUser);
    app.post("/save-user", controller.saveUser);
};