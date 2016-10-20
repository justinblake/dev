var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {

    $scope.isShown = false;

    $scope.badgeArray =[];

    $scope.submit = function() {
        $scope.isShown = true;
        $scope.txtAreaShow = $scope.txtArea;

        var badge = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            email: $scope.email,
            birth: $scope.birth,
            phone: $scope.phone,
            food: $scope.food,
            txtArea: $scope.txtArea
        };

        $scope.badgeArray.push(badge);
    }



}]);