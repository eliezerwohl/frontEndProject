var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/index')
 $stateProvider
  // HOME STATES AND NESTED VIEWS ========================================
    .state('index', {
      url: '/index',
      templateUrl: '../views/home.html'
    })
     .state('about', {
      url: '/about',
      templateUrl: '../views/about.html'
    })

    })