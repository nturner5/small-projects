angular.module('app').directive('lessonHider', function(){
  return {
    restrict: 'AE',
    scope: {
      atr: '=',
      dayAlert: '&'
    },
    template: '{{atr}}',

    controller: function( $scope, lessonService ) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function( scope, element, attributes ) {
      scope.getSchedule.then(function( response ) {
        scope.schedule = response.data;
      
        scope.schedule.forEach(function( scheduleDay ) {
          if (scheduleDay.lesson === scope.atr) {
            element.css('text-decoration', 'line-through');
            return;
          }
        })
      })
    }
  }
})