'use strict';
app.controller('mainCtrl', function($scope, mainService, $auth, $state){
  mainService.getData().then(response => {
    $scope.items = response.data;
  })
$scope.addToCart = function(item){
  mainService.addToCart(item).then(response => {
    console.log(response)
  })
  console.log(item)
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  satellizer authentication
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  $scope.login = (username, password) => {
    $auth.login({username: username, password: password}).then(response => {
      if (response.status === 200){
        console.log(response.data)
        $auth.setToken(response);
        $state.go('home')
        // $location.go('/home')  // this is an alternative to $state.go 
      }
    })
  }
  $scope.signup = (username, password, firstname, lastname) => {
    $auth.signup({firstname: firstname, lastname: lastname, username: username, password: password}).then(response => {
      if(response.status === 200){
        console.log(response.data);
        $auth.setToken(response);
        $state.go('home')
      }
    })
  }
  $scope.logout = () => {
    $auth.logout().then(() => {
      console.log('you have been logged-out-ified')
      $state.go('login')
    }); 
  }






}) //end of module 