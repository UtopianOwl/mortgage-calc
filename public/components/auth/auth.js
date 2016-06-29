var app = angular.module('mortgage.app.auth', ['ngRoute']);

app.config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {
    $routeProvider
        .when('/login', {
            controller: 'loginCtrl',
            templateUrl: 'components/auth/login/login.html'
        })
        .when('/signup', {
            controller: 'signupCtrl',
            templateUrl: 'components/auth/signup/signup.html'
        })
        .when('/logout', {
            controller: 'logoutCtrl',
            template: ''
        });
}]);