angular.module("myApp.catalog",["ui.bootstrap"])
    .controller("catalogCtrl", ["$scope", "productAPIservice", function($scope, productAPIservice){
        
        $scope.currentPage = 1;
        $scope.pageSize=6;


        productAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.catalogList = data;
            // console.log($scope.catalogList);
        })
        productAPIservice.getcatalog().then(function(reponse){
            var data = reponse.data;
            $scope.productList = data;
            // console.log($scope.productList);
        })
    }])