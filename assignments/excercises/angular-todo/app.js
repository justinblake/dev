var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http){

    $scope.todoArray = [];

    $scope.isShown = false;


    $scope.submitTodo = function() {


        var todoObject = {
            todoName: $scope.todoName,
            todoPrice: $scope.todoPrice,
            todoUrl: $scope.todoUrl,
            todoDescription: $scope.todoDescription,
            done: false
        };

        $scope.todoArray.push(todoObject);


        var newTodo = {
            title: $scope.todoName,
            description: $scope.todoDescription,
            price: $scope.todoPrice,
            imageUrl: $scope.todoUrl,
            completed: false
        };


        $http.post('http://api.vschool.io/justin/todo', newTodo)
            .then(function(response) {
                console.log(response.data);
            });

        //Clear Inputs

        $scope.todoName= '';
        $scope.todoPrice = '';
        $scope.todoUrl = '';
        $scope.todoDescription = '';

        console.log($scope.todoArray);




        $scope.isShown = true;
    };

    $scope.showEdit = false;

    $scope.editTodo = function() {
        $scope.showEdit = true;
    };

    $scope.markDone = function($index) {

        var markDone = $scope.todoArray;

        $scope.todoArray[$index].push({done:true});

    };

    $scope.updateTodo = function() {



    }





}]);
