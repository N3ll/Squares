var Squares = angular.module('Squares', ['ngRoute', 'ngDragDrop']);

Squares.controller('LandingPageController', LandingPageController);
Squares.controller('CustomizableContoller', CustomizableContoller);
Squares.controller('RegisterController', RegisterController);
Squares.controller('LoginController', LoginController);
Squares.controller('UserController', UserController);
Squares.controller('VisitSet', VisitSet);


Squares.factory('SetsService', SetsService);
Squares.factory('LoggedUserService', LoggedUserService);
Squares.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
Squares.factory('LoginService', LoginService);
Squares.factory('RegisterService', RegisterService);


Squares.config(['$routeProvider' , '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider
    // Home
        .when("/", {
            templateUrl: "home/home",
            controller: "LandingPageController",
            controllerAs: "homeCtrl"
        })
         //Pages
        .when("/aboutus", {
            templateUrl: "home/about"
        })
        .when('/login', {
            templateUrl: "/Account/Login",
            controller: "LoginController",
            controllerAs: "loginCtrl"
        })
        .when("/register", {
            templateUrl: "/Account/Register",
            controller: "RegisterController",
            controllerAs: "regCtrl"
        })
        .when("/squares-set/:param", {
            templateUrl: "set/preview",
            controller: "VisitSet",
            controllerAs: "squaresCtrl"
        })
        .when("/customize/:param", {
            templateUrl: "set/customize",
            controller: "CustomizableContoller",
            controllerAs: "customizeCtrl"
        })
        .when("/profile", {
            templateUrl: "userprofile/userprofile",
            controller: "UserController",
            controllerAs: "userCtrl"
        });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}]);