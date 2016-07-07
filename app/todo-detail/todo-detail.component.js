angular.module('todoDetail').
component('todoDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.todoId}}</span>',
    controller: ['$routeParams',
        function TodoDetailController($routeParams) {
            this.todoId = $routeParams.todoId;
        }
    ]
});