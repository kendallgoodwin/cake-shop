var app = angular.module('CakeApp', ['CakeCtrl', "ui.router"])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  //define routes
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  $stateProvider
  .state('About', {
  	url: '/about',
  	templateUrl: 'views/about.html',
  	controller: 'AboutCtrl'
  })
  $stateProvider
  .state('Nav', {
    url: '/',
    templateUrl: 'views/navbar.html',
    controller: 'NavCtrl'
  });


  //$locationProvider.html5Mode(false).hashPrefix('!');
}]);