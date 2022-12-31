angular.module("myApp.menu",[])
    .controller("menuCtrl", ["$scope", "productAPIservice", function($scope, productAPIservice){
        
        productAPIservice.getBrands().then(function(reponse){
            var data = reponse.data;
            $scope.menuList = data;
            console.log($scope.menuList);
        })
    }])
