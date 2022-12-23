var app = angular.module("myApp", [
    "ngRoute",
    "homeCtrl",
    "myAccount",
    "cart",
    "checkout",
    "brands",
    "uniformBoy",
    "uniformGirl",
    "contact",
    "aboutus",
    "Accessories"

])


app.config(function($routeProvider){
    $routeProvider
    .when("/", {templateUrl : "home.html", controller:"homeCtrl"})
    .when("/myAccount", {templateUrl : "myAccount.html", controller:"myAccount"})
    .when("/cart", {templateUrl : "cart.html", controller:"cart"})
    .when("/checkout", {templateUrl : "checkout.html", controller:"checkout"})
    .when("/brands", {templateUrl : "brands.html", controller:"brands"})
    .when("/uniformBoy", {templateUrl : "uniformBoy.html", controller:"uniformBoy"})
    .when("/uniformGirl", {templateUrl : "uniformGirl.html", controller:"uniformGirl"})
    .when("/contact", {templateUrl : "contact.html", controller:"contact"})
    .when("/aboutus", {templateUrl : "aboutus.html", controller:"aboutus"})
    .when("/Accessories", {templateUrl : "Accessories.html", controller:"Accessories"})
    .when("/feedback", {templateUrl : "feedback.html", controller:"feedback"})
})


angular.module("homeCtrl", [])
    .controller("homeCtrl", ["$scope", "$http", function($scope, $html){
        
    }])

angular.module("myAccount", [])
    .controller("myAccount", ["$scope", "$http", function($scope, $html){
        
    }])

angular.module("cart", [])
    .controller("cart", ["$scope", "$http", function($scope, $html){
            
    }])

angular.module("checkout", [])
    .controller("checkout", ["$scope", "$http", function($scope, $html){
                
    }])

angular.module("brands", [])
    .controller("brands", ["$scope", "$http", function($scope, $html){
                
    }])

angular.module("uniformBoy", [])
    .controller("uniformBoy", ["$scope", "$http", function($scope, $html){
                
    }])

angular.module("uniformGirl", [])
    .controller("uniformGirl", ["$scope", "$http", function($scope, $html){
                
    }])

angular.module("contact", [])
    .controller("contact", ["$scope", "$http", function($scope, $html){
                
    }])

angular.module("aboutus", [])
    .controller("aboutus", ["$scope", "$http", function($scope, $html){
                
    }])

angular.module("Accessories", [])
    .controller("Accessories", ["$scope", "$http", function($scope, $html){
                
    }])

angular.module("feedback", [])
    .controller("feedback", ["$scope", "$http", function($scope, $html){
                
    }])