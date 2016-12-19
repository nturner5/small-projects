angular.module('appointments', ['ui.router', '720kb.datepicker', 'ngMaterial']).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: './home/home.html',
            controller: 'homeController'
                })
                .state('home.form', {
                    url: 'form',
                    templateUrl: './form/form.html',
                    controller: 'formController'
                })
                .state('home.date', {
                    url: 'date',
                    templateUrl: './date/date.html',
                    controller: 'dateController'
                })
                .state('home.confirm', {
                    url: "confirm",
                    templateUrl: './confirm/confirm.html',
                    controller: 'confirmController'
                })
})