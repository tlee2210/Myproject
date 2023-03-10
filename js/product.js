angular.module("myApp.product", ["ui.bootstrap"])
    .controller("productCtrl", ["$scope","$filter", "productAPIservice","$routeParams", function($scope, $filter, productAPIservice, $routeParams){

        $scope.productId = $routeParams.Id

        productAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.product = $filter("filter")(data, {Id: parseInt($scope.productId)}, true)[0];
            console.log($scope.product)
        })

        $scope.carts=[];
        $scope.addToCart = function(product){
            $scope.carts.push(product)
            console.log($scope.carts)
        }
    }])
