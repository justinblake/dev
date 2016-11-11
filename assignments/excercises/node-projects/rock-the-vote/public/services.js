var app = angular.module('MyApp');

app.service('HttpService', ['$http', function($http) {

    this.issues = {};

    this.getAllIssues = function() {
        return $http.get('/issues')
            .then(function(response) {
                issues = response.data;
            })
    };

    this.postNewIssue = function(input) {
        return $http.post('/new-issue', input)
            .then(function(response) {
            })
    };

    this.putNewComment = function(input) {
        return $http.put('/submit-comment/' + input.id, input)
            .then(function(response) {
            })
    };

    this.deleteIssue = function(input) {
        return $http.delete('/remove-issue/' + input)
            .then(function(response) {

            })
    };

    this.addVoteCounter = function(input) {
        return $http.put('/add-vote-counter/' + input.id, input)
            .then(function(response) {
                console.log("response from the server: " + response.data)
            })
    };

    this.subtractVoteCounter = function(input) {
        return $http.put('/subtract-vote-counter/' + input.id, input)
            .then(function(response) {
                console.log("response from the server: " + response.data)
            })
    };

}]);