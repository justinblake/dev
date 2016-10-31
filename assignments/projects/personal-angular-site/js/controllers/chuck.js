var app = angular.module('MyApp');

app.controller('FortuneCtrl', ['$scope', 'HttpService', function ($scope, HttpService) {

    $scope.test = 'This is the fortune ctrl';

    $scope.quoteHolder = [];

    $scope.clickFortune = function () {
        HttpService.fortuneGetter()
            .then(function () {
                $scope.fortune = fortuneObject;
                $scope.quoteHolder.push($scope.fortune);
                console.log("$scope.quoteHolde " + $scope.quoteHolder)
            });

    };

    $scope.set_color = function(index) {
        if (index = 0) {
            return { color: 'red'}
        }
    }

}]);