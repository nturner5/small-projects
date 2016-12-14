'use strict';

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
  API requests
 *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


app.controller('mainCtrl', ($scope, mainService, $auth, $state) => {
    mainService.getData().then(response => {
      $scope.items = response.data;
    })
    $scope.addToCart = item => {
      mainService.addToCart(item.id, $scope.user.id).then(response => {
        console.log(response.data);
      })
    }
    $scope.checkOut = () => {
      mainService.checkOut($scope.user.id).then(response => {
        console.log(response.data);
      })
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
      satellizer authentication
     *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $scope.login = (username, password) => {
      $auth.login({
        username: username,
        password: password
      }).then(response => {
        if (response.status === 200) {
          $scope.user = (response.data.user);
          $auth.setToken(response);
          $state.go('home')
            // $location.go('/home')  // this is an alternative to $state.go 
        }
      })
    }
    $scope.signup = (username, password, firstname, lastname) => {
      $auth.signup({
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password
      }).then(response => {
        if (response.status === 200) {
          $scope.user = (response.data.user);
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