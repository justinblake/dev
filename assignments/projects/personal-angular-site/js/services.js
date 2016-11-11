var app = angular.module('MyApp');

app.service('HttpService', ['$http', function ($http) {
    urbanObject = {};
    chuckObject = {};
    quoteObject = {};
    recipeObject = {};

    this.urbanDefinition = function (word) {
        var config = {
            headers: {
                'X-Mashape-Key': 'A4oU5JntM4msh7FPKTwyEKDFxyrcp1E1DVnjsnTERd2TtOCT79',
                'Accept': 'text/plain'
            }
        };
        return $http.get("https://mashape-community-urban-dictionary.p.mashape.com/define?term=" + word, config)
            .then(function (response) {
                urbanObject = response.data.list;
                console.log(urbanObject);
                return urbanObject;
            });
    };

    this.chuckGetter = function () {
        var config = {
            headers: {
                'X-Mashape-Key': 'Ur4ecTkXzxmshDUIzHmhHydkcFxBp1M8BQ0jsnzyRzr1BO5mmR',
                'Accept': 'application/json'
            }
        };
        return $http.get('https://matchilling-chuck-norris-jokes-v1.p.mashape.com/jokes/random', config)
            .then(function (response) {
                chuckObject = response.data.value;
            });
    };

    this.quoteGetter = function (decision) {
        console.log('decision = ' + decision);
        var config = {
            headers: {
                'X-Mashape-Key': 'Ur4ecTkXzxmshDUIzHmhHydkcFxBp1M8BQ0jsnzyRzr1BO5mmR',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        };

        var selection = '';

        if (decision === "option-1") {
            selection = 'famous';
            console.log('this is the famous if');
        } else {
            selection = 'movies';
            console.log('this is the movies if');
        }

        return $http.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=' + selection, config)
            .then(function (response) {
                quoteObject = response.data;
                console.log('quoteObject = ' + quoteObject);
            });

    };

    this.recipeGetter = function (userInput) {
        var config = {
            headers: {
                'X-Mashape-Key': 'Ur4ecTkXzxmshDUIzHmhHydkcFxBp1M8BQ0jsnzyRzr1BO5mmR',
                'Accept': 'application/json'
            }
        };

        return $http.get('https://community-food2fork.p.mashape.com/search?key=8c6f706aa45f42c453e47a480c7d8c5f&q=' + userInput, config)
            .then(function (response) {
                recipeObject = response.data;
                console.log('recipeObject ' + recipeObject);
            })

    }


}]);
