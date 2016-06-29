var app = angular.module('mortgage.app');

app.controller('calcCtrl', ['$scope', function($scope) {
    $scope.selectedView = "house";
    $scope.selectedTab = "loan";
    $scope.savingsView = "default";
    
    $scope.select = function(tab) {
        if (tab === "savings") $scope.savingsView = "results";
        $scope.selectedTab = tab;
    }
    
    $scope.change = function() {
        console.log($scope.selectedView);
    }
}]);