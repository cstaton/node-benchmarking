var morgan = require("morgan");
var bodyParser = require("body-parser");
var	routes = require("./routes");

module.exports = function(app, express) {
	var publicRouter = express.Router();

	app.use(morgan("dev"));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + "/../client"));

	
	app.use("/api", publicRouter);

	routes(publicRouter);
};