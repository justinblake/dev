var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.player = {
        player1: {
            name: "Tim Riggins",
            power: 10,
            cities: ['Las Vegas', 'St. George', 'Beaver']
        },
        player2: {
            name: 'Duke',
            power: 30,
            cities: ['Provo', 'Orem', 'Draper']

        },
        player3: {
            name: 'Johnny',
            power: 30,
            cities: ['Veneta', 'Saratoga Springs', 'Lehi']
        }
    };

    $scope.newCity = '';

    $scope.addCity = function(input) {

    }


}]);