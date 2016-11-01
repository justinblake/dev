var app = angular.module('MyApp');

app.service("HttpService", ['$http', function ($http) {

    var self = this;

    var todoArray = [];

    this.getTodos = function() {
        return $http.get('http://api.vschool.io/justin/todo')
            .then(function(response){
                self.todoArray = response.data;
            });
    };

    this.postTodo = function(todo) {
        $http.post('http://api.vschool.io/justin/todo', todo).then(function(response){
            self.todoArray.push(response.data);

        });
    };

    this.putTodo = function(todoId, data) {
        $http.put('http://api.vschool.io/justin/todo/' + todoId, data).then(function(response){
            console.log(response.data);
        });
    };

    this.deleteTodo = function(todoId) {
        $http.delete('http://api.vschool.io/justin/todo/' + todoId).then(function(response){


        })
    }


}]);
