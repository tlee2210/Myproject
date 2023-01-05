var app = angular.module("myApp", [
    "ngRoute",
    "myAccount",
    "checkout",
    "contact",
    "aboutus",
    "feedback",
    "myApp.home",
    "ui.bootstrap",
    "myApp.paginate-filter",
    "myApp.product",
    "myApp.product-svervice",
    "myApp.menu",
    // "myApp.catalog",
    "myApp.genres",
    "myApp.cart",
])


app.config(function($routeProvider){
    $routeProvider
    .when("/", {templateUrl : "home.html", controller:"homeCtrl"})
    .when("/myAccount", {templateUrl : "myAccount.html", controller:"myAccount"})
    .when("/cart", {templateUrl : "cart.html", controller:"cartCtrl"})
    // .when("/checkout", {templateUrl : "checkout.html", controller:"checkout"})
    .when("/catalog", {templateUrl : "catalog.html", controller:"genresCtrl"})
    .when("/contact", {templateUrl : "contact.html", controller:"contact"})
    .when("/aboutus", {templateUrl : "aboutus.html", controller:"aboutus"})
    .when("/feedback", {templateUrl : "feedback.html", controller:"feedback"})
    .when("/product/:Id", {templateUrl : "product.html", controller:"productCtrl"})
    .when("/genres/:genresName", {templateUrl : "catalog.html", controller:"genresCtrl"})
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
    .controller("contact", ["$scope", "$http", function($scope, $http)
       {
        $http.get("json/contact.json")
        .then(function(response){
            $scope.ContactList = response.data;
            console.log(response.data);
       })         
    }])

angular.module("aboutus", [])
    .controller("aboutus", ["$scope", "$http", function($scope, $http){
                
    }])

angular.module("feedback", [])
    .controller("feedback", ["$scope", "$http", function($scope, $http){
                
    }])


