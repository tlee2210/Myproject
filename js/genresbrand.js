angular.module("myApp.brandcatalog",["ui.bootstrap"])
    .controller("catalogbrands", ["$scope","$filter", "productAPIservice","$routeParams", function($scope, $filter, productAPIservice, $routeParams){
        
        $scope.currentPage = 1;
        $scope.pageSize=6;

        $scope.brandName = $routeParams.brandName
        console.log($scope.brandName);


        productAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.catalogList = $filter("filter")(data, function(product){
                return $filter("filter")(product.Brands, {Name: $scope.brandName}).length;
            })
            // console.log($scope.catalogList);
        })
        productAPIservice.getHome().then(function(reponse){
            var data = reponse.data;
            $scope.Homelist = data;
            // console.log(reponse.data);
        })

        productAPIservice.getcatalog().then(function(reponse){
            var data = reponse.data;
            $scope.productList = data;
            // console.log($scope.productList);
        })

    }])

