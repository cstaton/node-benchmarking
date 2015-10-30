var controller = require("./controller");

module.exports = function(app) {
	app.post("/user", controller.userPost);
	app.get("/user", controller.userGet);
};