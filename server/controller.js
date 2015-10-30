var Model = require("./model");
var Q = require("q");


module.exports = {

	userPost: function(req, res, next) {
		console.log(req.body);


		// Model.users.create({ username: "promise5" })
		// 	.then(function (user) {
		// 		console.log(user);
		// 		return user.username;
		// 	})
		// 	.then(function (username) {
		// 		console.log(username);
		// 	});

		// Model.users.find()
		// 	.then(function (users) {
		// 		console.log(users);
		// 	});

		// Model.users.findOne({ username: "promise5" })
		// 	.then(function (user) {
		// 		console.log(user);
		// 		return Model.bills.find({ vendorName: "paypal" });
		// 	})
		// 	.then(function (bills) {
		// 		console.log(bills);
		// 		return bills[0];
		// 	})
		// 	.then(function (bill) {
		// 		console.log("Individual Bill");
		// 		console.log(bill);
		// 	})
		// 	.then(function (){
		// 		console.log("ALL DONE");
		// 	});

		Model.users.remove({ username: "promise5" })
			.then(function (data) {
				console.log(data);
				console.log("REMOVED");
			});


		// var findUser = Q.nbind(Model.users.find, Model.users);
		// var findBill = Q.nbind(Model.bills.find, Model.bills);

		// findUser({ username: "promise5" })
		// 	.then(function (user) {
		// 		console.log(user);
		// 		return findBill({ vendorName: "paypal" });
		// 	})
		// 	.then(function (bills) {
		// 		console.log(bills);
		// 	});


		// Model.users.find({username: "User # 10"}, function(error, user) {
		// 	Model.vendors.find({ username: "User #10" }, function(error, vendor) {
		// 		Model.bills.find({ vendorName: "paypal" }, function(error, bills) {
		// 			console.log(user);
		// 			console.log(vendor);
		// 			console.log(bills);
		// 		});
		// 	});
		// });



		// Model.users.find({ username: "User # 10" }, function (err, user) {

		// 	Model.vendors.find({ username: "User #10" }, function (err, vendor) {

		// 		Model.bills.find({ vendorName: "paypal" }, function (err, bill) {
		// 			console.log("USER:  ", user);
		// 			console.log("VENDOR:  ", vendor);
		// 			console.log("BILL:  ", bill);

		// 		});
		// 	});
		// });

	// 	var promiseUser = function(username) {
	// 		var deferred = Q.defer();

	// 		Model.users.find({ username: username }, function(err, user) {
	// 			if (err) {
	// 				deferred.reject(err);
	// 			} else {
	// 				deferred.resolve(user)
	// 			}
	// 		});

	// 		return deferred.promise;
	// 	};


	// 	promiseUser("User # 10")
	// 	.then(function(user) {
	// 		console.log("PROMISE PATTERN");
	// 		console.log(user);
	// 		return user;
	// 	})
	// 	.then(function(data) {
	// 		console.log("SECOND THEN");
	// 		console.log(data);
	// 	});



		// var getVendorPromise = function(username) {
		// 	console.log(username);
		// 	var deferred = Q.defer();

		// 	Model.vendors.find({ username: "User #10" }, function(err, vendor) {
		// 		if (err) {
		// 			deferred.reject(err);
		// 		} else {
		// 			deferred.resolve(vendor);
		// 		}
		// 	});
		// 	return deferred.promise;
		// };

		// var getUserPromise = function(user) {
		// 	console.log(user);
		// 	var deferred = Q.defer();

		// 	Model.users.find({ username: "User # 10" }, function(err, user) {
		// 		if (err) {
		// 			deferred.reject(err);					
		// 		} else {
		// 			deferred.resolve(user);
		// 		}
		// 	});
		// 	return deferred.promise;
		// };

		// var getBillPromise = function(vendor) {
		// 	console.log(vendor);
		// 	var deferred = Q.defer();

		// 	Model.bills.find({ vendorName: "paypal" }, function(err, bills) {
		// 		if (err) {
		// 			deferred.reject(err);
		// 		} else {
		// 			deferred.resolve(bills);
		// 		}
		// 	});

		// 	return deferred.promise; 
		// };

		// var handleError = function(error) {
		// 	console.log(error);
		// };

		// getVendorPromise("User #10")
		// 	.then(getVendorPromise)
		// 	.then(getUserPromise)
		// 	.then(getBillPromise)
		// 	.then(function(result) {
		// 		console.log(result);
		// 	})
		// 	.catch(handleError);


		// Model.bills.find({vendorName: "paypal"})
		// 	.exec()
		// 	.then(function(data) {
		// 		console.log(data);
		// 	});

		res.json("RECEIVED DATA!!!!");
	},


	userGet: function(req, res, next) {

	}

};








