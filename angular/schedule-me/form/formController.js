angular.module('appointments').controller('formController', function($scope, dataShare, $state){

    $scope.story = ["1 Story", "2 Story", "3 Story"];
    $scope.job = ["Inside and Out", "Outside Only"];
    $scope.order = dataShare;
    $scope.order.progress = 0;
    $scope.order.quote = 0;
    
    $scope.quoteGenerator = function(){
        var serv1 = 0;
        var serv2 = 0;
        $scope.order.quote = 0;
        var order = $scope.order;
        

        if(order.check1){
            $scope.order.progress = 10;
            if(!order.service1_2 || order.service1_2 ==  "Inside and Out") serv1 = order.service1 * 10;
            else if(order.service1_2 == "Outside Only") serv1 = order.service1 * 7;
        }
        else if(!order.check) serv1 = 0;

        if(order.check2){
             $scope.order.progress = 20;
            if(!order.service2_2 || order.service2_2 ==  "1 Story") serv2 = order.service2 * .08;
            else if(order.service2_2 == "2 Story" || order.service2_2 == "3 Story" ) serv2 = order.service2 * .06;
        }
        else if(!order.check2) serv2 = 0
        
        order.quote = serv1 + serv2;

        if(order.quote === 0) order.quote = "0"

        else if(!order.quote) order.quote = "Calculating..."
     
 }

 $scope.quoteGenerator();

    
    
})