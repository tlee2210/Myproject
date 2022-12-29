angular.module("myApp.genres", ["ui.bootstrap"])
    .controller("genresCtrl", ["$scope","$filter", "movieAPIservice","$routeParams", function($scope, $filter, movieAPIservice, $routeParams){
        $scope.currentPage = 1;
        $scope.pageSize=6;

        $scope.genresName = $routeParams.genresName

        movieAPIservice.getProduct().then(function(reponse){
            var data = reponse.data
            $scope.dataMain = $filter("filter")(data, function(movie){
                return $filter("filter")(movie.Brands, {Name: $scope.genresName}).length;
            })
            console.log(dataMain);
        })

        movieAPIservice.getHome().then(function(reponse){
            var data = reponse.data;
            $scope.Homelist = data;
            console.log($scope.Homelist);
        })

    }]) 