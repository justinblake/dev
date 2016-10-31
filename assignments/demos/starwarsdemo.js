var app = angular.module("MyApp", []);

// Goal - Display to the view Luke's:
// name
// hair color
// eye color
// homeworld name.

app.service("StarWarsService", ["$http", function ($http) {
    this.getLuke = function () {
        var luke = {};

        return $http.get("http://swapi.co/api/people/1/")
            .then(function (response) {
                luke.name = response.data.name;
                luke.hairColor = response.data.hair_color;
                luke.eyeColor = response.data.eye_color;
                return $http.get(response.data.homeworld);
            })
            .then(function (response) {
                luke.homeworld = response.data.name;
                return $http.get(response.data.residents[1]);
            })
            .then(function (response) {
                luke.neighbor = response.data.name;
                return luke;
            });
    };
}]);

app.controller("MainController", ["$scope", "StarWarsService", function ($scope, StarWarsService) {

    StarWarsService.getLuke()
        .then(function (luke) {
            $scope.luke = luke;
        });


    // Worst - callback hell and lots of work for the controller to do:
    //        $http.get("http://swapi.co/api/people/1/")
    //            .then(function (response) {
    //                $scope.luke = response.data;
    //                return $http.get(response.data.homeworld).then(function (response) {
    //                    $scope.luke.homeworld = response.data.name;
    //                    $http.get(response.data.residents[1]).then(function (response) {
    //                        $scope.otherPerson = response.data.name;
    //                    });
    //                });
    //            });

    // Better - but controller is still doing too much work. Should do this inside the controller.
    //        $http.get("http://swapi.co/api/people/1/")
    //            .then(function (response) {
    //                $scope.luke = response.data;
    //                return $http.get(response.data.homeworld);
    //            })
    //            .then(function (response) {
    //                $scope.luke.homeworld = response.data.name;
    //                return $http.get(response.data.residents[1]);
    //            })
    //            .then(function (response) {
    //                $scope.luke.neighbor = response.data.name;
    //                return "Hello world";
    //            });
}]);