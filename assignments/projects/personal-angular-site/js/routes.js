var app = angular.module('MyApp');

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'html/home.html',
        controller: 'Home'
    }).when('/html/urban', {
        templateUrl: 'html/urban.html',
        controller: 'UrbanCtrl'
    }).when('/html/chuck', {
        templateUrl: 'html/chuck.html',
        controller: 'ChuckCtrl'
    }).when('/html/quote', {
        templateUrl: 'html/quote.html',
        controller: 'QuoteCtrl'
    })
});