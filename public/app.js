var app = angular.module('mortgage.app', ['ngRoute', 'mortgage.app.auth']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/calc', {
            templateUrl: 'components/calc/calc.html',
            controller: 'calcCtrl'
        })
        .when('/profile', {
            templateUrl: 'components/profile/profile.html',
            controller: 'profileCtrlr'
        })
        .otherwise({
            templateUrl: 'components/home/home.html',
            controller: 'homeCtrl'
        });
}]);