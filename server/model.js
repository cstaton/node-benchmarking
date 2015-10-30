var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	username: String,
});

var VendorSchema = new mongoose.Schema({
	username: String,
	vendorName: String,
});

var BillsSchema = new mongoose.Schema({
	vendorName: String,
	invoiceNum: Number,
	amount: Number
});

module.exports = {
	users: mongoose.model("users", UserSchema),
	vendors: mongoose.model("vendors", VendorSchema),
	bills: mongoose.model("bills", BillsSchema)
};