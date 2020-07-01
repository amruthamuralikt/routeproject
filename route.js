var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "home.html",
        controller :"homeCtrl"
    })
    .when("/course", {
        templateUrl : "course.html",
        controller :"courseCtrl"
    });
    
});

app.controller("homeCtrl", function ($scope) {
    $scope.msg = "Home";
});
app.controller("courseCtrl", function ($scope) {
    $scope.courses = ["PHP","AngularJS","javascript"];
});
