angular.module("myApp.product", ["ui.bootstrap"])
    .controller("productCtrl", ["$scope","$filter", "productAPIservice","$routeParams", function($scope, $filter, productAPIservice, $routeParams){

        $scope.productId = $routeParams.Id

        productAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.product = $filter("filter")(data, {Id: parseInt($scope.productId)}, true)[0];
            console.log($scope.product)
        })

        // $scope.cart=[];
        // $scope.add_cart = function(product){
        //     $scope.cart.push($scope.product)
        //     console.log($scope.cart)
        // }
        
    }])
