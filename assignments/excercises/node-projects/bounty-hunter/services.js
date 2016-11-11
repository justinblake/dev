var app = angular.module('MyApp');

app.service('HttpService', ['$http', function ($http) {

    var self = this;

    bountyObject = {};

    this.getBounty = function () {

        return $http.get('http://localhost:8000/bounties')
            .then(function(response) {
                bountyObject = response.data;
        })
    };

    this.postBounty = function(input) {

        return $http.post('http://localhost:8000/bounties', input)
            .then( function(response) {
            })
    };

    this.putBounty = function(id, input) {

        return $http.put('http://localhost:8000/bounties/' +  id, input)
            .then(function (response) {
        })
    };

    this.deleteBounty = function(id) {

        return $http.delete('http://localhost:8000/bounties/' +  id)
            .then(function (response) {
            })
    }


}]);