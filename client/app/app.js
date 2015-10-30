angular.module("benchmarker", [
	"ui.router",
	"benchmarker.controller",
	// "benchmarker.directives",
	"benchmarker.services"
])
.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "app/view.html",
			controller: "Controller"
		});
});