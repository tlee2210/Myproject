angular.module("myApp.movie", [])
    .controller("movie", ["$scope","$filter", "movieAPIservice","$routeParams", function($scope, $filter, movieAPIservice, $routeParams){

        $scope.movieId = $routeParams.Id

        movieAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.movie = $filter("filter")(data, {Id: parseInt($scope.movieId)}, true)[0];
            console.log($scope.movie)
        })

        movieAPIservice.getHome().then(function(reponse){
            $scope.dataMain = reponse.data;
            console.log(reponse.data);
        })       
    }])
