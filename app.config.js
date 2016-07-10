angular.
module('todoApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/todo', {
                template: '<todo-list></todo-list>'
            }).
            when('/todo/:todoId', {
                template: '<todo-detail></todo-detail>'
            }).
            otherwise({redirectTo: '/todo'});
    }
]);