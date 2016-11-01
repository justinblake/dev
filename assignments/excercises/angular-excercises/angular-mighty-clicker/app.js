var app = angular.module('MyApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "templates/button.html",
        controller: "ButtonCtrl"
    })
});


app.service('blueService', function () {

    this.blueTotal = 10;

    this.decrement = function () {
        this.blueTotal -= 1;

    };

    this.increment = function () {
        this.blueTotal += 1;

    };

    this.reset = function () {
        if (this.blueTotal === 0) {

            this.blueTotal = 10;
        }
    }
});

app.service('redService', function () {
    this.redTotal = 10;

    this.increment = function () {
        this.redTotal += 2;
    };

    this.decrement = function () {
        this.redTotal -= 2;
    };

    this.reset = function () {
        if (this.redTotal === 0) {

            this.redTotal = 10;

        }
    }
});


app.controller('ButtonCtrl', ['$scope', 'blueService', 'redService', function ($scope, blueService, redService) {

    $scope.redTotal = redService.redTotal;
    $scope.blueTotal = blueService.blueTotal;



    $scope.subOne = function () {
        blueService.increment();
        redService.decrement();
        blueService.reset();
        redService.reset();
        $scope.redTotal = redService.redTotal;
        $scope.blueTotal = blueService.blueTotal;


    };

    $scope.addOne = function () {

        redService.increment();
        blueService.decrement();
        blueService.reset();
        redService.reset();
        $scope.redTotal = redService.redTotal;
        $scope.blueTotal = blueService.blueTotal;
    };




}]);