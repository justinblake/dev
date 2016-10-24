var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when("/add.html",  {
        templateUrl: "templates/add.html",
        controller: "MainCtrl"
    }).when("/multiply.html", {
        templateUrl: "templates/multiply.html",
        controller: "secondCtrl"
    })

});

app.controller('MainCtrl', ['$scope', function($scope){

    $scope.finalAmount = 0;

    $scope.addStuff = function() {

        $scope.num1 = parseInt($scope.num1);
        $scope.num2 = parseInt($scope.num2);

        $scope.finalAmount = $scope.num1 + $scope.num2;

    }

}]);

app.controller("secondCtrl" , ['$scope', function($scope) {

    $scope.productAmount = 0;

    $scope.multStuff = function() {

        $scope.num3 = parseInt($scope.num3);
        $scope.num4 = parseInt($scope.num4);

        $scope.productAmount = $scope.num3 * $scope.num4;
    }

}]);