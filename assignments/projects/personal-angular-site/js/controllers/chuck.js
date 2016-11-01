var app = angular.module('MyApp');

app.controller('ChuckCtrl', ['$scope', 'HttpService', function ($scope, HttpService) {

    $scope.test = 'This is the fortune ctrl';

    $scope.quoteHolder = [];

    $scope.clickChuck = function () {
        HttpService.chuckGetter()
            .then(function () {
                $scope.chuck = chuckObject;
                $scope.quoteHolder.push($scope.chuck);
            });

    };



}]);