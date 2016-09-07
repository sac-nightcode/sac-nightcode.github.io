angular.
module('lrRefWrapMod').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/', {
                templateUrl: 'templates/home-template.html'
            }).
            when('/ref', {
                templateUrl: 'templates/references.html'
            }).
            when('/users', {
                templateUrl: 'templates/users-template.html'
            });
    }
]);