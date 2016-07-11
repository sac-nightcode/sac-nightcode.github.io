angular.module('todoList', [])
    .component('todoList', {
        templateUrl:'templates/todo-template.html',

        controller: function TodoListController() {
            var todoList = this;
            todoList.todos = [
                {text: 'learn angular', done: true, id:1468270287439},
                {text: 'build an angular app', done: false, id:1468270323107}];

            todoList.addTodo = function () {
                todoList.todos.push({text: todoList.todoText, done: false});
                todoList.todoText = '';
            };

            todoList.remaining = function () {
                var count = 0;
                angular.forEach(todoList.todos, function (todo) {
                    count += todo.done ? 0 : 1;
                });
                return count;
            };

            todoList.archive = function () {
                var oldTodos = todoList.todos;
                todoList.todos = [];
                angular.forEach(oldTodos, function (todo) {
                    if (!todo.done) todoList.todos.push(todo);
                });
            };
        },
        controllerAs: "todoList"
    });