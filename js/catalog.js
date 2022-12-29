angular.module("myApp.catalog",[])
    .controller("catalogCtrl", ["$scope", "movieAPIservice", function($scope, movieAPIservice){
        
        movieAPIservice.getcatalog().then(function(reponse){
            var data = reponse.data;
            $scope.cataloglist = data;
            console.log($scope.cataloglist);
        })
    }])