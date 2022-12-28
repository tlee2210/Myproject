angular.module("myApp.movie", [])
    .controller("movie", ["$scope","$filter", "$http","$routeParams", function($scope, $filter, $http, $routeParams){

        $scope.movieId = $routeParams.Id

        $http.get("json/home.json").then(function(reponse){
            var data = reponse.data;
            $scope.movie = $filter("filter")(data, {Id: parseInt($scope.movieId)}, true)[0];
            console.log($scope.movie)
        })
        
                
    }])