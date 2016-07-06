angular.module('App',[ngRoute])
.config(function($routeProvider) {


	$routeProvider
	.when('/', {
		controller:'DummyController',
		templateUrl:'templates/main-template.html'
	})
	.when('/about', {
		controller:'DummyController',
		templateUrl:'templates/about-template.html'
	})
	.when('/games', {
		controller:'DummyController',
		templateUrl:'templates/games-template.html'
	})
	.when('/todo', {
		controller:'DummyController',
		templateUrl:'templates/todo-template.html'
	})
	.otherwise({
		redirectTo:'/'
	});
})
.controller('DummyController', function(){
	console.log('success!');
});