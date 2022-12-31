angular.module("myApp.genres",["ui.bootstrap"])
    .controller("genresCtrl", ["$scope","$filter", "productAPIservice","$routeParams", function($scope, $filter, productAPIservice, $routeParams){
        
        $scope.currentPage = 1;
        $scope.pageSize=6;

        $scope.genresName = $routeParams.genresName
        console.log($scope.genresName);


        productAPIservice.getProduct().then(function(reponse){
            var data = reponse.data;
            $scope.catalogList = $filter("filter")(data, function(product){
                return $filter("filter")(product.Type, {Name: $scope.genresName}).length;
            })
            // console.log($scope.catalogList);
        })

        // productAPIservice.getProduct().then(function(reponse){
        //     var data = reponse.data;
        //     $scope.catalogList = $filter("filter")(data, function(product){
        //         return $filter("filter")(product.Brands, {Name: $scope.genresName}).length;
        //     })
        //     // console.log($scope.catalogList);
        // })

        productAPIservice.getcatalog().then(function(reponse){
            var data = reponse.data;
            $scope.productList = data;
            // console.log($scope.productList);
        })
    }])

