var app = angular.module('MyApp');

app.controller('UrbanCtrl', ['$scope', 'HttpService', function($scope, HttpService) {

    $scope.isShown = false;
    // $scope.displayWord = $scope.newWord.word;

    $scope.getDefinition = function(word) {
        HttpService.urbanDefinition(word)
            .then(function() {
                $scope.newWord = urbanObject;
                console.log('$scope.newWord ' + $scope.newWord);
                $scope.isShown = true;
            })

    }

}]);