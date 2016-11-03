var app = angular.module('MyApp');

app.controller('GiphyCtrl', ['$scope', 'HttpService','$sce', function($scope, HttpService, $sce) {

    $scope.userInput = '';

    $scope.myGiphyUrl = '';

    $scope.getRandom = function(userInput) {
        console.log(userInput);
        HttpService.randomGifGetter(userInput)
            .then(function(){
                $scope.myGiphyUrl = giphyUrl[0].images.fixed_height.mp4;
                console.log($scope.myGiphyUrl);

            })
    };

    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl($scope.myGiphyUrl),
                type: "video/mp4"
            },
            {
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"),
                type: "video/webm"
            },
            {
                src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"),
                type: "video/ogg"
            }
        ],
        tracks: [
            {
                src: $scope.myGiphyUrl,
                kind: "subtitles",
                srclang: "en",
                label: "English",
                default: ""
            }
        ],
        theme: "node_modules/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        }
    };

}]);