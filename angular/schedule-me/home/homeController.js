angular.module('appointments').controller('homeController', function($scope, dataShare, $http){

    $scope.myValue = true;

    $scope.toggle = function(){
        $scope.myValue  = !$scope.myValue ;
    }
    $scope.order = dataShare;

    $scope.order.progress = 0;
    
    $scope.order.val = false;
    



    
})