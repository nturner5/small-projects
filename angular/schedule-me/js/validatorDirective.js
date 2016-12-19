angular.module("appointments").directive('validator', function(){

    return {
        restrict: 'A',
        scope: {
            data: '=',
            validate: '=',
            asterisk: '='
        },

        link: function(scope, element, attribute) {
            var temp = scope.data;
            scope.validate = true;
            element.on("click",function(){
                    
                    scope.truthy();
            })
        },
                controller: function($scope, $state){
                    $scope.truthy = function(){
                        if($scope.validate){
                            $state.go('home.date');
                        }
                        else{
                            console.log('not validated')
                            
                        }
                    }
                }
            
        }

})