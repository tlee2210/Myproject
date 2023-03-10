angular.module("myApp.product-svervice", [])
    .factory("productAPIservice", ["$http", function($http){
        var productAPI = {};

        productAPI.getProduct = function(){
            return $http.get("json/product.json");
        }
        
        productAPI.getHome = function(){
            return $http.get("json/home.json");
        }

        productAPI.getBrands = function(){
            return $http.get("json/brands.json");
        }

        productAPI.getcatalog = function(){
            return $http.get("json/catalog.json");
        }

        productAPI.getlogo = function(){
            return $http.get("json/logo.json");
        }
        
        productAPI.getmember = function(){
            return $http.get("json/aboutus.json");
        }
        return productAPI;
    }]) 
