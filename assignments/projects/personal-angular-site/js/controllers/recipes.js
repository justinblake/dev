var app = angular.module('MyApp');

app.controller('RecipeCtrl', ['$scope', 'HttpService', function($scope, HttpService) {

    $scope.myRecipeArray = [];
    $scope.isShown = false;

    $scope.getRecipes = function(userInput) {
        console.log(userInput);

        HttpService.recipeGetter(userInput)
            .then(function(response) {
                $scope.myRecipeObject = recipeObject;
                console.log('$scope.myRecipeArray ' + $scope.myRecipeArray);
                $scope.isShown = true;
            })
    }


}]);