var app = angular.module('MyApp');

app.controller('Home', ['$scope', 'HttpService', function($scope, HttpService) {

    $scope.test = 'This is the Home controller';

}]);