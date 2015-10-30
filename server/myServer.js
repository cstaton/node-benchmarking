var express = require("express");
var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/benchmarker", function(error) {
	if (error) {
		console.error(error);
	} else {
		console.log("Mongo Connected!!");
	}
});

require("./middleware")(app, express);


app.listen(process.env.PORT || 4040);
console.log("listening on port 4040");
