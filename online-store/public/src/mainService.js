'use strict';
app.service('mainService', function($http){
    
    this.getData = function(){
      return $http.get('/api/get-all')  
    }
    this.login = function(useremail, userpassword){
      return $http.post('/login', {useremail: useremail, userpassword: userpassword})
    }
})