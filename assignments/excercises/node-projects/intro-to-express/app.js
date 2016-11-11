// var express = require("express");
// var app = express();
//
//
//
// app.get('/', function (req, res) {
//     console.log(req);
//     res.send('Hello');
// });
//
//
// app.listen(8000, function () {
//     console.log("App is listening on port 8000!");
// });

var app = angular.module("myApp", []);
app.service("PokemonService", ["$http", function ($http) {
    this.getPokemonInfo = function (pokemonNumber) {
        //$http GET for the pokemon info
        var baseURL = "http://pokeapi.co/api/v2/pokemon/";
        var pokemon = {};
        return $http.get(baseURL + pokemonNumber)
            .then(function (response) {
                pokemon.name = response.data.name;
                pokemon.attack = response.data.attack;
                pokemon.ability = response.data.abilities[0].name;
                return $http.get(baseURL + response.data.sprite[0]);
            }).then(function (response) {
                pokemon.image.baseUrl + response.data.image;
            });
            //once it comes back
    }
}]);
app.controller("myCtrl", ["$scope", "PokemonService", function ($scope, PokemonService) {
    $scope.getPokemon = function (pokemonNum) {
        PokemonService.getPokemonInfo
            .then(function (pokemon) {
                $scope.pokemon = pokemon;
            });
    }
}]);