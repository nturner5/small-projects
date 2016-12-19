angular.module('appointments').directive('confirmation', function(){
    return{
        restrict: 'E',
        templateUrl: './confirmation/confirmpopup.html',
        link: function(scope, element, attribute){
        },
        controller: function($scope, dataShare){
            $scope.tog = function(){
                $scope.order.val = !$scope.order.val;
                console.log($scope.order.val); 
            }
        }
    }
})