var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', 'HttpService', function($scope, HttpService) {

    $scope.isShown = false;

    $scope.getBountyObject = function() {
        HttpService.getBounty()
            .then(function() {
                $scope.myBountyObject = bountyObject;
                $scope.isShown = true;
            })
    };

    $scope.postNewBounty = function(input) {

        $scope.myBountyObject.push(input);
        HttpService.postBounty(input);
        $scope.newBountyId = {};
    };

    $scope.putNewBounty = function(id, input) {

        HttpService.putBounty(id, input);
        $scope.bountyId = {};
    };

    $scope.deleteBounty = function(id) {

        HttpService.deleteBounty(id);
    };

}]);