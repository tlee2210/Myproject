angular.module("myApp.genres", ["ui.bootstrap"])
    .controller("genresCtrl", ["$scope","$filter", "movieAPIservice","$routeParams", function($scope, $filter, movieAPIservice, $routeParams){
        $scope.currentPage = 1;
        $scope.pageSize=6;

        $scope.catalogName = $routeParams.genresName;

        console.log($scope.catalogName);
        movieAPIservice.getcatalog().then(function(reponse){
            var data = reponse.data;
            $scope.cataloglist = $filter("filter")(data, function(movie){
                return $filter("filter")(movie.Type, {Name: $scope.catalogName});
            })
            console.log($scope.cataloglist);
        })

        movieAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.dataMain= data;
        })

    }]) 
