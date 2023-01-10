var app = angular.module("myApp", [
    "ngRoute",
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
    "myApp.brandcatalog",
    "myApp.gender",
])


app.config(function($routeProvider){
    $routeProvider
    .when("/", {templateUrl : "home.html", controller:"homeCtrl"})
    .when("/boy", {templateUrl : "boyuniform.html", controller:"genderCtrl"})
    .when("/girl", {templateUrl : "girluniform.html", controller:"genderCtrl"})
    .when("/cart", {templateUrl : "cart.html", controller:"cartCtrl"})
    .when("/checkout", {templateUrl : "checkout.html", controller:"checkout"})
    .when("/catalog", {templateUrl : "catalog.html", controller:"genresCtrl"})
    .when("/contact", {templateUrl : "contact.html", controller:"contact"})
    .when("/aboutus", {templateUrl : "aboutus.html", controller:"aboutus"})
    .when("/feedback", {templateUrl : "feedback.html", controller:"feedback"})
    .when("/logout", {templateUrl : "login-register.html", controller:"logout"})
    .when("/product/:Id", {templateUrl : "product.html", controller:"productCtrl"})
    // .when("/brands/:Id", {templateUrl : "catalog.html", controller:"genresCtrl"})
    .when("/genres/:genresName", {templateUrl : "catalog.html", controller:"genresCtrl"})
    .when("/brands/:brandName", {templateUrl : "catalogbrands.html", controller:"catalogbrands"})
})


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
    function checkform(){
        
        var d=document.getElementById("email").value;
        
     if(d == " ")
        {
            alert("Don't forget to send your message with us!");
        }
        else
        {
            alert("Successfully sent!");
        }
        
    }
    
    