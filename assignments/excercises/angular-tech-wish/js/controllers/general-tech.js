var app = angular.module('MyApp');

app.controller('GeneralCtrl', ['$scope', function($scope) {

    $scope.generalWish =
        [
            {
                name: "1969 VW Bug",
                price: "$2,000 to $10,000",
                img: 'imgs/bug.jpg'
            },
            {
                name: 'Trip to The Bahamas',
                price: '$5000',
                img: 'imgs/bahamas.jpg'
            },
            {
                name: 'Sailboat',
                price: '$60,000',
                img: 'imgs/sail.jpg'
            }]


}]);
