'use strict';
const app = angular.module('app', ['ui.router', 'satellizer']).config(function($stateProvider, $urlRouterProvider, $authProvider){
  $urlRouterProvider.otherwise('/');

  let skipIfLoggedIn = ['$q', '$location', '$auth', ($q, $location, $auth) => {
    let deferred = $q.defer();
    if ($auth.isAuthenticated()) $location.path('/home')
    else  deferred.resolve();
    return deferred.promise;
  }];
  let loginRequired = ['$q', '$location', '$auth', ($q, $location, $auth) => {
    let deferred = $q.defer();
    if ($auth.isAuthenticated()) deferred.resolve();
    else $location.path('/login');
    return deferred.promise;
  }];

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'src/views/home.html',
    controller: '',
    resolve: {
        loginRequired: loginRequired
    }
  })
  .state('login', {
    url: '/',
    templateUrl: 'src/views/login.html',
    controller: '',
    resolve: {
        skipIfLoggedIn: skipIfLoggedIn
    }
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'src/views/signup.html',
    controller: '',
    resolve: {
        skipIfLoggedIn: skipIfLoggedIn
    }
  })

  //This is satellizer --> 
  $authProvider.loginUrl = '/auth/login'
  $authProvider.signupUrl = '/auth/signup'



})// end of module