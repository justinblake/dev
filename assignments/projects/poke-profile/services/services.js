var app = angular.module('MyApp');


app.service("HttpService", ['$http', function ($http) {

    pokemonObject = {};

    this.getPokemon = function (id) {

        return $http.get('http://pokeapi.co/api/v1/pokemon/' + id)
            .then(function (response) {
                pokemonObject.name = response.data.name;
                pokemonObject.abilities = response.data.abilities;
                pokemonObject.uri = response.data.sprites[0].resource_uri;
                console.log('first - ' + pokemonObject.uri);

                return $http.get('http://pokeapi.co' + pokemonObject.uri);
            }).then(function(response) {

                pokemonObject.imageUrl = ('http://pokeapi.co' + response.data.image);

                pokemonObject.actualImage = pokemonObject.imageUrl;

                return pokemonObject
            });
    };
}]);
