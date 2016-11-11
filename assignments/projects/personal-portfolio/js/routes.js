var app = angular.module('MyApp');

app.config(function ($routeProvider) {
    $routeProvider.when('/html/about', {
        templateUrl: 'html/about.html',
        controller: 'AboutCtrl'
    }).when('/html/api-demo', {
        templateUrl: 'html/api-demo.html',
        controller: 'ApiCtrl'
    }).when('/html/contact', {
        templateUrl: 'html/contact.html',
        controller: 'ContactCtrl'
    }).when('/', {
        templateUrl: 'html/home.html',
        controller: 'HomeCtrl'
    }).when('/html/k-and-j', {
        templateUrl: 'html/k-and-j.html',
        controller: 'KjCtrl'
    })
});