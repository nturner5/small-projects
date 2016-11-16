'use strict';
const app = angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'src/views/home.html',
        controller: '',
        resolve: {}
    })

})