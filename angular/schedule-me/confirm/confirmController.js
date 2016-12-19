angular.module('appointments').controller('confirmController', function($scope, dataShare){
      
    $scope.order = dataShare;
    
    $scope.order.progress = 95;

})