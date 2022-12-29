angular.module("myApp.menu",[])
    .controller("menuCtrl", ["$scope", "movieAPIservice", function($scope, movieAPIservice){
        
        movieAPIservice.getBrnads().then(function(reponse){
            var data = reponse.data;
            $scope.brandslist = data;
            console.log($scope.brandslist);
        })

        movieAPIservice.getAccessories().then(function(reponse){
            var data = reponse.data
            $scope.access = data;
            console.log($scope.access);
        })
    }])
