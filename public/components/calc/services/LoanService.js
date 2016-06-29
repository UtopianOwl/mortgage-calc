var app = angular.module("mortgage.app");

app.service("LoanService", ["$http", "$location", function ($http, $location) {
    var self = this;
    this.loans = [];
    this.currentLoan = {};
    
    this.getLoans = function() {
        $http.get("/api/loans").then(function(response) {
            self.loans = response.data;
        });
    };
    
    this.saveLoan = function(loan) {
        $http.post("/api/loans", loan).then(function (response) {
            self.loans.push(response.data);
        }, function (response) {
            alert("Error " + response.status + ":" + response.statusText);
        });
    };
    
}]);