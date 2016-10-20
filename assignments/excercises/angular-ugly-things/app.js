var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.emptyArray = [];

  

    $scope.hidden = true;

    $scope.submit = function() {

        $scope.hidden = false;

        var myArray = {

            title: $scope.title,
            url: $scope.url,
            description: $scope.description
        };

        $scope.emptyArray.push(myArray);

        console.log($scope.emptyArray);

    };

    $scope.removeImage = function(index) {
        $scope.emptyArray.splice(index, 1);
    }



}]);



