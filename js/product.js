angular.module("myApp.product", [])
    .controller("productCtrl", ["$scope","$filter", "productAPIservice","$routeParams", function($scope, $filter, productAPIservice, $routeParams){

        $scope.productId = $routeParams.Id

        productAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.product = $filter("filter")(data, {Id: parseInt($scope.productId)}, true)[0];
            console.log($scope.product)
        })

        $scope.carts=[];

        $scope.add_cart = function(product){
        if(product){
        $scope.carts.push({name: product.Name,img: product.Img , Price: product.Price ,count: product.count})
            
        }
        console.log($scope.carts)
        }
    }])
