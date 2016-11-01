var app = angular.module('MyApp');

app.controller('ComputerCtrl', ['$scope', function ($scope) {

    $scope.computerTech =
        [
            {
                name: "Macbook Pro",
                price: "$2,400 to $2,800",
                img: 'imgs/macbook.jpg'
            },
            {
                name: 'Microsoft Surface Studio PC',
                price: '$3000',
                img: 'imgs/microsoft.jpg'
            },
            {
                name: 'Oculus Rift',
                price: '$600',
                img: 'imgs/oculus.jpg'
            }]

}]);