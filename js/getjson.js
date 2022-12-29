angular.module("myApp.homeCtrl",[])
    .controller("homeCtrl", ["$scope", "movieAPIservice", function($scope, movieAPIservice){
        movieAPIservice.getHome().then(function(reponse){
            $scope.Homelist = reponse.data;
            console.log(reponse.data);
        })
    }])

angular.module("myApp.productdetails", ["ui.bootstrap"])
    .controller("productdetails", ["$scope", "movieAPIservice", function($scope, movieAPIservice){
        $scope.currentPage = 1;
        $scope.pageSize=6;

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