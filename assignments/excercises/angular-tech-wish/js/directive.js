var app = angular.module('MyApp');

app.directive('wishList', [function () {
    return {
        restrict: 'E',
        templateUrl: 'html/directive-template.html',
        scope: {
            wish: '='

        }
    }


}]);