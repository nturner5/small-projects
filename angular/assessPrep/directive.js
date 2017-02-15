angular.module('app').directive('mainDirective', function(){
  return {
    templateUrl: 'directiveTemplate.html',
    scope: {
      atr: '='
    }
  }
})





