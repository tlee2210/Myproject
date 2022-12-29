angular.module("myApp.menu",[])
    .controller("menuCtrl", ["$scope", "movieAPIservice", function($scope, movieAPIservice){
        
        movieAPIservice.getBrnads().then(function(reponse){
            $scope.brandslist = reponse.data;
            console.log(reponse.data);
        })

        movieAPIservice.getAccessories().then(function(reponse){
            $scope.access = reponse.data;
            console.log(reponse.data);
        })
    }])
