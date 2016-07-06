angular.module('App',[ngRoute])
.config(function($routeProvider) {


	$routeProvider
	.when('/', {
		controller:'DummyController',
		templateUrl:'index.html',
		resolve: resolveProjects
	})
	.when('/edit/:projectId', {
		controller:'DummyController',
		templateUrl:'detail.html',
		resolve: resolveProjects
	})
	.when('/new', {
		controller:'DummyController',
		templateUrl:'detail.html',
		resolve: resolveProjects
	})
	.otherwise({
		redirectTo:'/'
	});
})
.controller('DummyController', function(){
	console.log('success!');
});