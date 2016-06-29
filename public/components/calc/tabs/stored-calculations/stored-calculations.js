var app = angular.module('mortgage.app');

app.directive('storedCalculations', [function() {
    return {
        templateUrl: 'components/calc/tabs/stored-calculations/stored-calculations.html',
        link: function(scope) {
            
        }
    };
}]);