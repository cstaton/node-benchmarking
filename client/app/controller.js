angular.module("benchmarker.controller", [])

.controller("Controller", function ($scope, raar) {
	$scope.data = "TEST";

	$scope.submitter = function() {
		raar.poster({ name: 'cstat'})
	};
});