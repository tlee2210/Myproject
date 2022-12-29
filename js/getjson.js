angular.module("myApp.homeCtrl",[])
    .controller("homeCtrl", ["$scope", "movieAPIservice", function($scope, movieAPIservice){
        movieAPIservice.getHome().then(function(reponse){
            $scope.Homelist = reponse.data;
            console.log(reponse.data);
        })
    }])