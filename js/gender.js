angular.module("myApp.gender",["ui.bootstrap"])
    .controller("genderCtrl", ["$scope","$filter", "productAPIservice","$routeParams", function($scope, $filter, productAPIservice, $routeParams){
        
        $scope.currentPage = 1;
        $scope.pageSize=6;

        productAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.gender = data;
            // console.log($scope.productList);
        })

        productAPIservice.getcatalog().then(function(reponse){
            var data = reponse.data;
            $scope.productList = data;
            // console.log($scope.productList);
        })
    }])

