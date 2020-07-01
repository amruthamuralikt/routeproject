var app = angular.module("app2", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/course", {
        templateUrl : "course.html",
        controller:"courseCtrl"
    })
    .when("/about", {
        templateUrl : "about.html"
       
    })
    .when("/home", {
        templateUrl : "home.html",
        controller:"homeCtrl"
    });
});
    app.controller("homeCtrl",function($scope) {
        $scope.message="Welcome to our world";
});
app.controller("courseCtrl",function($scope) {
    $scope.courses=["php","AngularJS","Bootstrap"];
});
