var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', 'HttpService', function ($scope, HttpService) {

    // $scope.isShown = false;

    HttpService.getTodos().then(function () {
        $scope.todoItems = HttpService.todoArray;
    });

    $scope.submitNewItem = function (newTodo) {
        HttpService.postTodo(newTodo);
    };

    $scope.deleteTodo = function (index) {
        var id = $scope.todoItems[index]._id;
        HttpService.deleteTodo(id);
        $scope.todoItems.splice(index,1)
    };

    $scope.saveUpdatedItem = function(index, item) {

        // console.log(item);
        // console.log(index);
        var id = $scope.todoItems[index]._id;




        HttpService.putTodo(id, item);
        // $scope.isShown = false;

    };


    // $scope.makeUpdatePossible = function() {
    //     $scope.isShown = true;
    // };
    //
    // $scope.cancelUpdate = function() {
    //     $scope.isShown = false;
    // }




}]);