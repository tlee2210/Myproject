angular.module("myApp.genres",["ui.bootstrap"])
    .controller("genresCtrl", ["$scope","$filter", "productAPIservice","$routeParams", function($scope, $filter, productAPIservice, $routeParams){
        
        $scope.currentPage = 1;
        $scope.pageSize=6;

        $scope.genresName = $routeParams.genresName
        $scope.brandsName = $routeParams.brandsName
        console.log($scope.genresName);
        console.log($scope.brandsName);


        productAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.catalogList = $filter("filter")(data, function(product){
                return $filter("filter")(product.Type, {Name: $scope.genresName}).length;
            })
            // console.log($scope.catalogList);
        })

        productAPIservice.getfiltertype().then(function(reponse){
            var data = reponse.data;
            $scope.catalogList = $filter("filter")(data, function(product){
                return $filter("filter")(product.Brands, {Name: $scope.brandsName}).length;
            })
            // console.log($scope.catalogList);
        })


        productAPIservice.getBrands().then(function(reponse){
            var data = reponse.data;
            $scope.menuList = data;
            console.log($scope.menuList);
        })

        productAPIservice.getcatalog().then(function(reponse){
            var data = reponse.data;
            $scope.productList = data;
            // console.log($scope.productList);
        })
    }])

