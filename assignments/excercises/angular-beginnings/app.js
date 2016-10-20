var app = angular.module('MyApp',[]);

app.controller('MainController',['$scope', function($scope) {

    $scope.test = '';

    $scope.inputWord = '';

    $scope.saveWord = function () {

        $scope.test += " " + $scope.inputWord;

    }

}]);