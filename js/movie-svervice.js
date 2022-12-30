angular.module("myApp.movie-svervice", [])
    .factory("movieAPIservice", ["$http", function($http){
        var movieAPI = {};

        movieAPI.getProduct = function(){
            return $http.get("../json/dataMain.json");
        }
        
        movieAPI.getHome = function(){
            return $http.get("../json/home.json");
        }

        movieAPI.getBrnads = function(){
            return $http.get("../json/a.json");
        }

        movieAPI.getAccessories = function(){
            return $http.get("../json/Accessories.json");
        }
        movieAPI.getcatalog = function(){
            return $http.get("../json/catalog.json");
        }
        
        return movieAPI;
    }]) 
