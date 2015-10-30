angular.module("benchmarker.services", [])
.factory("raar", function ($http) {

	var poster = function(user) {
		return $http({
			method: "POST",
			url: "/api/user",
			data: user
		})
		.then(function (resp) {
			console.log(resp);
		});
	};

	var getter = function() {

	};

	return {
		poster: poster,
		getter: getter
	};
});