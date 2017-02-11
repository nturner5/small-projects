(function(){
  'use strict'
  angular.module('app').service('mainSrv', function($http){

    var baseUrl = 'https://practiceapi.devmountain.com/'

    this.getQuestions = function(pageNum){
      return $http.get(baseUrl + '/api/trivia/questions/?page=' + pageNum)
    }



  })
})();