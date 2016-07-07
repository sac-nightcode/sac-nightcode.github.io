angular.module('todoApp',['ngRoute', 'ngResource'])

.config(function($routeProvider) {


	$routeProvider
	.when('/', {
		controller:'DummyController',
		templateUrl:'../templates/main-template.html'
	})
	.when('/about', {
		controller:'DummyController',
		templateUrl:'../templates/about-template.html'
	})
	.when('/games', {
		controller:'DummyController',
		templateUrl:'../templates/games-template.html'
	})
	.when('/todo', {
		controller:'TodoListController as todoApp',
		templateUrl:'../templates/todo-template.html'
	})
	.otherwise({
		redirectTo:'/'
	});
})
.controller('DummyController', function(){
	console.log('success!');
});