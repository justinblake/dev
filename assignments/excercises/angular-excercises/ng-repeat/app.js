var app = angular.module('MyApp', []);

app.controller('MainController', ['$scope', '$http', function ($scope, $http) {

    $scope.newShit = {};

    $http.get('http://pokeapi.co/api/v1/pokemon/1')
        .then(function (response) {
            $scope.newShit.data += response;
            console.log(response.data);
            console.log($scope.newShit.data);
        });


    $scope.player = {
        kills: [
            {
                handle: "jk400",
                rank: 14932,
                clan: ["hpburner200", "sputnik", "sololobo21"]
            },
            {
                handle: "dragonbobz",
                rank: 83655,
                clan: ["asdf", "sputnik", "peoplesrepublic"]
            },
            {
                handle: "joeschmoe",
                rank: 9274,
                clan: ["hpburner200", "sputnik", "sololobo21"]
            },
            {
                handle: "sarz",
                rank: 10,
                clan: ["peoplesrepublic", "asdf", "sololobo21"]
            },
            {
                handle: "zikamademethisway",
                rank: 9580,
                clan: ["hpburner200", "peoplesrepublic", "asdf"]
            }
        ]

    };

    $scope.isShown = true;
    $scope.toggle = function () {
        if ($scope.isShown) {
            $scope.isShown = false;

        } else {
            $scope.isShown = true;
        }
    }

}]);