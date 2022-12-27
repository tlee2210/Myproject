var app = angular.module("myApp", [
    "ngRoute",
    "homeCtrl",
    "myAccount",
    "cart",
    "checkout",
    "productdetails",
    "contact",
    "aboutus",
    "Accessories",
    "feedback",
    "ui.bootstrap",
    "paginate-filter",
    "movie"

])


app.config(function($routeProvider){
    $routeProvider
    .when("/", {templateUrl : "home.html", controller:"homeCtrl"})
    .when("/myAccount", {templateUrl : "myAccount.html", controller:"myAccount"})
    .when("/cart", {templateUrl : "cart.html", controller:"cart"})
    .when("/checkout", {templateUrl : "checkout.html", controller:"checkout"})
    .when("/productdetails", {templateUrl : "productdetails.html", controller:"productdetails"})
    .when("/contact", {templateUrl : "contact.html", controller:"contact"})
    .when("/aboutus", {templateUrl : "aboutus.html", controller:"aboutus"})
    .when("/Accessories", {templateUrl : "Accessories.html", controller:"Accessories"})
    .when("/feedback", {templateUrl : "feedback.html", controller:"feedback"})
    .when("/movie/:Id", {templateUrl : "movie.html", controller:"movie"})
})


angular.module("homeCtrl",[])
    .controller("homeCtrl", ["$scope", "$http", function($scope, $http){
        $http.get("json/home.json")
        .then(function(reponse){
            $scope.Homelist = reponse.data;
            console.log(reponse.data);
        },
        function(err){
            $scope.Homelist = "json failed";
        })
        
    }])

angular.module("myAccount", [])
    .controller("myAccount", ["$scope", "$http", function($scope, $http){
        
    }])

angular.module("cart", [])
    .controller("cart", ["$scope", "$http", function($scope, $http){
            
    }])

angular.module("checkout", [])
    .controller("checkout", ["$scope", "$http", function($scope, $http){
                
    }])

angular.module("productdetails", [])
    .controller("productdetails", ["$scope", "$http", function($scope, $http){
        $http.get("json/dataMain.json")
        .then(function(reponse){
            $scope.dataMain = reponse.data;
            console.log(reponse.data);
        },
        function(err){
            $scope.dataMain = "json failed";
        })

        $scope.currentPage = 1;
        $scope.pageSize=6;

    }]) 

angular.module("contact", [])
    .controller("contact", ["$scope", "$http", function($scope, $http){
                
    }])

angular.module("aboutus", [])
    .controller("aboutus", ["$scope", "$http", function($scope, $http){
                
    }])

angular.module("Accessories", [])
    .controller("Accessories", ["$scope", "$http", function($scope, $http){
                
    }])

angular.module("feedback", [])
    .controller("feedback", ["$scope", "$http", function($scope, $http){
                
    }])

angular.module("movie", [])
    .controller("movie", ["$scope","$filter", "$http","$routeParams", function($scope, $filter, $http, $routeParams){

        $scope.movieId = $routeParams.Id

        $http.get("json/home.json")
        .then(function(reponse){
            var data = reponse.data;
            $scope.movie = $filter("filter")(data, {Id: parseInt($scope.movieId)}, true)[0];
            console.log($scope.movie)
        })
        
                
    }])

angular.module("paginate-filter",[])
    .filter("paginate",function(){
        return function(arr,currentPage,pageSize){
            try{
                return arr.slice((currentPage-1)*pageSize, currentPage*pageSize);
    
            }catch(err){
                return arr;
            }
        }
    })
