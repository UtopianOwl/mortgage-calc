var app = angular.module("mortgage.app.auth");

app.service("UserService", ["$http", "$location", "TokenService", function($http, $location, TokenService) {
    var self = this;
    this.currentUser = {};
    
    this.signup = function(user) {
        return $http.post("/auth/signup", user);
    };
    
    this.login = function(user) {
        return $http.post("/auth/login", user).then(function(response) {
            TokenService.setToken(response.data.token);
            self.currentUser = response.data.user;
            return response;
        });
    };
    
    this.logout = function() {
        TokenService.removeToken();
        $location.path("/");
    }
    
    this.isAuthenticated = function () {
        return TokenService.getToken();
    }
}]);