'use strict';
app.service('mainService', function($http){
    
    this.getData = function(){
      return $http.get('/api/get-all')  
    }
    this.login = function(){
      return $http.post('/login')
    }
})