angular.module("myApp.menu",[])
    .controller("menuCtrl", ["$scope","$filter", "productAPIservice","$routeParams", function($scope, $filter, productAPIservice, $routeParams){
        
        productAPIservice.getBrands().then(function(reponse){
            var data = reponse.data;
            $scope.menuList = data;
            console.log($scope.menuList);
        })
    }])
