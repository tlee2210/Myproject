angular.module("myApp.genres", ["ui.bootstrap"])
    .controller("genres", ["$scope","$filter", "movieAPIservice", "$routeParams", function($scope, $filter, movieAPIservice, $routeParams){
        $scope.currentPage = 1;
        $scope.pageSize=6;

        $scope.genresName = $routeParams.genresName;

        movieAPIservice.getProduct().then(function(reponse){
            var data = reponse.data
            $scope.dataMain = data;
            console.log(reponse.data);
        })

        movieAPIservice.getHome().then(function(reponse){
            var data = reponse.data
            $scope.homelist = data;
            console.log(reponse.data);
        })
    }]) 