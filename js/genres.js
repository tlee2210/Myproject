angular.module("myApp.genres", [])
    .controller("genres", ["$scope","$filter", "$http","$routeParams", function($scope, $filter, $http, $routeParams){

        $scope.genresName = $routeParams.genresName

        movieAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.dataMain == $filter("filter")(data, function(movie){
                return $filter("filter")(movie.Name, {Name: $scope.genresName}).length;
            });
            console.log(reponse.data);
        })
        
        movieAPIservice.getHome().then(function(reponse){
            $scope.homelist = reponse.data;
            console.log(reponse.data);
        })
                
    }])