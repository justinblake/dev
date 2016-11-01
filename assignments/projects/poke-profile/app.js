var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', 'HttpService', function ($scope, HttpService) {

    $scope.isShown = false;

    $scope.getThatPoke = function (id) {
        HttpService.getPokemon(id)
            .then(function () {
                $scope.newPokemon = pokemonObject;


                $scope.isShown = true;

            })


    }

}]);