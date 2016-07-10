angular.
module('todoApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/', {
                templateUrl: 'templates/home-template.html'
            }).
            when('/todo', {
                template: '<todo-list></todo-list>'
            }).
            when('/todo/:todoId', {
                template: '<todo-detail></todo-detail>'
            }).
            otherwise({redirectTo: '/'});
    }
]);