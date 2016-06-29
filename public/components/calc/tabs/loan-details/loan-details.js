var app = angular.module('mortgage.app');

app.directive('loanDetails', [function() {
    return {
        templateUrl: 'components/calc/tabs/loan-details/loan-details.html',
        link: function(scope) {
            
        }
    };
}]);