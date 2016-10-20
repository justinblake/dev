var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {



    $http.get('http://swapi.co/api/films/1/')
        .then(function(response) {
            $scope.crawlData = response.data.opening_crawl;
            console.log(crawlData);
        })

}]);