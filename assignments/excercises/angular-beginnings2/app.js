var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', function($scope){

    $scope.newObject = {
        State: ['California', 'Oregon', 'Utah', 'Nevada'],
        City: ['Eugene', 'Veneta', 'Provo', 'Orem', 'Lehi'],
        Jobs: ['Meadow Gold', 'Wingate Web', 'Moki', 'V-School']
    };

    $scope.newState = '';



    $scope.display = false;

    $scope.showState = function(input) {

        $scope.newObject.State.push(input);

    }

}]);