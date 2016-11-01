var app = angular.module('MyApp', ['ngRoute']);

app.controller('MainCtrl', ['$scope', function($scope) {

    $scope.test = 'This is the main controller';

}]);