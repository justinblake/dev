var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {



    $http.get('http://api.vschool.io:6543/hitlist.json')
        .then(function (response) {
            $scope.myData = response.data;
        });



}]);