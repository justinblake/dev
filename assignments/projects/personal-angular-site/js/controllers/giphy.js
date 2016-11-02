var app = angular.module('MyApp');

app.controller('GiphyCtrl', ['$scope', 'HttpService', function($scope, HttpService) {

    $scope.getTopTwenty = function() {
        HttpService.randomGifGetter()
            .then(function(){
                $scope.myGiphyArray = giphyObject;
                console.log('$scope.myGiphyArray inside the controller: ' + $scope.myGiphyArray);
            })
    }

}]);