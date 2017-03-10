angular.module('app', [])

.service('mainSrv', function($http){
  console.log('Fetching the datas...')
  $http.get('http://localhost:3000/api/data').then(function(response){
    console.log('Returning the datas...')
    console.log(response)
  })


  this.broken = 'working'
})

.controller('mainCtrl', function($scope, mainSrv){
  $scope.broken = mainSrv.broken; 
})