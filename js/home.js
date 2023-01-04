angular.module("myApp.homeCtrl",[])
    .controller("homeCtrl", ["$scope", "productAPIservice", function($scope, productAPIservice){
        productAPIservice.getHome().then(function(reponse){
            var data = reponse.data;
            $scope.Homelist = data;
            // console.log(reponse.data);
        })

        productAPIservice.getBrands().then(function(reponse){
            var data = reponse.data;
            $scope.brandslist = data;
            // console.log($scope.brandslist);
        })

        productAPIservice.getcatalog().then(function(reponse){
            var data = reponse.data;
            $scope.cataloglist = data;
            // console.log($scope.cataloglist);
        })


    }])