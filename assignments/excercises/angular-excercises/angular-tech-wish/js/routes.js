var app = angular.module('MyApp');

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'HomeCtrl'
        })
        .when('/html/computer-tech', {
            templateUrl: 'html/computer-tech.html',
            controller: 'ComputerCtrl'
        })
        .when('/html/general-tech', {
            templateUrl: 'html/general-tech.html',
            controller: 'GeneralCtrl'
        })
});