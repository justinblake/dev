var app = angular.module('MyApp', []);

app.controller('MainCtrl', ['$scope', 'HttpService', function ($scope, HttpService) {

    $scope.showPanel = false;
    $scope.showComments = false;


        HttpService.getAllIssues()
            .then(function () {
                $scope.myIssueArray = issues;
            })


    $scope.submitNewIssue = function (input) {
        HttpService.postNewIssue(input)
            .then(function () {

            });
        $scope.newIssue = {};

    };

    $scope.viewInPanel = function (input) {
        $scope.newCommentHolder = [];
        for (var i = 0; i < $scope.myIssueArray.length; i++) {
            if (input === $scope.myIssueArray[i].title) {
                $scope.tempObject = $scope.myIssueArray[i];
            }
        }
        $scope.showPanel = true;
    };

    $scope.newCommentHolder = [];

    $scope.submitNewComment = function (input) {
        $scope.newCommentHolder.push(input.newComment);
        HttpService.putNewComment(input)
            .then(function () {
                $scope.tempObject.newComment = '';
            });

    };

    $scope.addVote = function(input) {
        $scope.tempObject.votes += 1;
        HttpService.addVoteCounter(input)
            .then(function() {

            })

    };

    $scope.subtractVote = function(input) {
        $scope.tempObject.votes += -1;
        HttpService.subtractVoteCounter(input)
            .then(function() {

            })
    };

    $scope.deleteIssue = function(input) {
        console.log(input);
        HttpService.deleteIssue(input).then(function() {
            console.log("fuck");
        })
    };

    $scope.showAllComments = function() {
        $scope.showComments = !$scope.showComments;
    };







}]);