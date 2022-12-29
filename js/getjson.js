angular.module("myApp.homeCtrl",[])
    .controller("homeCtrl", ["$scope", "movieAPIservice", function($scope, movieAPIservice){
        movieAPIservice.getHome().then(function(reponse){
            $scope.Homelist = reponse.data;
            console.log(reponse.data);
        })

        movieAPIservice.getBrnads().then(function(reponse){
            var data = reponse.data;
            $scope.brandslist = data;
            console.log($scope.brandslist);
        })
    }])