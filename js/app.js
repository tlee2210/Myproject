var app = angular.module("myApp", [
    "ngRoute",
    "myApp.homeCtrl",
    "myAccount",
    "cart",
    "checkout",
    "myApp.productdetails",
    "contact",
    "aboutus",
    "Accessories",
    "feedback",
    "ui.bootstrap",
    "myApp.paginate-filter",
    "myApp.movie",
    "myApp.movie-svervice",
    "myApp.menu",
    // "myApp.catalog",
    "myApp.genres"

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
    // .when("/genres/:genresName", {templateUrl : "Accessories.html", controller:"genresCtrl"})
})


angular.module("myAccount", [])
    .controller("myAccount", ["$scope", "$http", function($scope, $http){
        
    }])

angular.module("cart", [])
    .controller("cart", ["$scope", "$http", function($scope, $http){
            
    }])

angular.module("checkout", [])
    .controller("checkout", ["$scope", "$http", function($scope, $http){
                
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



