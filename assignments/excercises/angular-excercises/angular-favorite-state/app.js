var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider) {
   $routeProvider.when('/', {
       templateUrl: 'html/home.html',
       controller: 'Home'
   }).when('/html/about', {
       templateUrl: 'html/about.html',
       controller: 'About'
   }).when('/html/why-i-love', {
       templateUrl: 'html/why-i-love.html',
       controller: "Love"
   })
});

app.directive('mikeTheMink', [function() {
    return {
        restrict: 'EA',
        template: '<img  onmouseover="this.src=\'../angular-favorite-state/imgs/mike.jpg\'" >'
    }
}]);