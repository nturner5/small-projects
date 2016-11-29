'use strict';
app.controller('mainCtrl', function($scope, mainService){
   mainService.getData().then(function(response){
       $scope.items = response.data;
       $scope.addToCart = function(item){
           console.log(item)
       }
       $scope.login = function(useremail, userpassword){
           console.log(useremail, userpassword)
           mainService.login(useremail, userpassword).then(function(response){
               console.log(response)
           })
       }
   })
})