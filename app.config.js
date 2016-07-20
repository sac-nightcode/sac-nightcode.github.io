angular.
module('todoApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/', {
                templateUrl: 'templates/home-template.html'
            }).
            when('/ref', {
                templateUrl: 'templates/ref-template.html'
            }).
            when('/users', {
                templateUrl: 'templates/users-template.html'
            }).
            otherwise({redirectTo: '/'});
    }
]);