angular.module("myApp.productdetails", ["ui.bootstrap"])
    .controller("productdetails", ["$scope", "movieAPIservice", function($scope, movieAPIservice){
        $scope.currentPage = 1;
        $scope.pageSize=6;

        movieAPIservice.getProduct().then(function(reponse){
            var data = reponse.data
            $scope.dataMain = data;
            console.log(reponse.data);
        })

    }]) 