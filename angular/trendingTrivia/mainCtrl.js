(function(){
  'use strict'
  angular.module('app').controller('mainCtrl', function($scope, mainSrv){
    var pageNum = 0;

    init();

    function init(){
      getQuestions(pageNum)
    }

    function getQuestions(pageNum){
      mainSrv.getQuestions(pageNum).then(function(response){
        console.log(response.data)
        $scope.questions = response.data
      })
    };

    $scope.nextPage = function(){
      pageNum++
      console.log(pageNum)
      getQuestions(pageNum)
    };

    $scope.prevPage = function(){
      if(pageNum > 0) {
        console.log(pageNum)
        pageNum-- 
        getQuestions(pageNum)
      }
    }

    $scope.selectAnswer = function(value){
      console.log(value)
    }

    $scope.chooseColor = function(key, answer){
      if(key == answer) return {background: 'green'};
      else return {background: 'red'};
    }



  })
})(); //IIFE 