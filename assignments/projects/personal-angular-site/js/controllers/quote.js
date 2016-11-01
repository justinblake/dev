var app = angular.module('MyApp');

app.controller('QuoteCtrl', ['$scope', 'HttpService', function($scope, HttpService) {

    $scope.quoteArray = [];

    $scope.getQuote = function(decision) {
        HttpService.quoteGetter(decision).then(function() {
            $scope.newQuote = quoteObject;
            $scope.quoteArray.push($scope.newQuote);
            console.log('$scope.newQuote ' + $scope.newQuote);
            console.log('Quote ' + $scope.newQuote.quote);
            console.log('Author ' + $scope.newQuote.author)
        })
    }

}]);