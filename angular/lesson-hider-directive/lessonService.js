angular.module('app').service('lessonService', function($http){
  this.getSchedule = function(){
    console.log('getting data...')
    return $http.get('schedule.json');
  }
})