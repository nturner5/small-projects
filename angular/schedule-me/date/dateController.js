angular.module('appointments').controller('dateController', function($scope, dataShare){
    
    $scope.order.progress = 30;

    $scope.order = dataShare;
    
    $scope.time1 = ['8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm']
    $scope.dateFilter = function(){
        $scope.order.date = $scope.theDate
        console.log($scope.order)
    }

    $scope.pbar = function(){

        if($scope.order.date){
             $scope.order.progress = 35;
        }
        if($scope.order.time){
             $scope.order.progress = 40;
        }
        if($scope.order.name){
             $scope.order.progress = 50;
        }
        if($scope.order.phone){
             $scope.order.progress = 57;
        }
        if($scope.order.email){
             $scope.order.progress = 64;
        }
        if($scope.order.street){
             $scope.order.progress = 71;
        }
        if($scope.order.city){
             $scope.order.progress = 78;
        }
        if($scope.order.zip){
             $scope.order.progress = 85;
        }
    
    }
    $scope.pbar();
})