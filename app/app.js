var app = angular.module('CakeApp', ['CakeCtrl', "ui.router"])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  //define routes
  $stateProvider
  .state('Home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  $stateProvider
  .state('About', {
  	url: '/about',
  	templateUrl: 'views/about.html',
  	// controller: 'AboutCtrl'
  })
    $stateProvider
  .state('Community', {
  	url: '/community',
  	templateUrl: 'views/community.html',
  })
  $stateProvider
  .state('Nav', {
    url: '/',
    templateUrl: 'views/navbar.html',
    controller: 'NavCtrl'
  })
  $stateProvider
  .state('Gallery', {
  	url: '/gallery',
  	templateUrl: 'views/gallery.html',
  	controller: 'GalleryCtrl'
  })
  $stateProvider
  .state('Contact', {
  	url: '/contact',
  	templateUrl: 'views/contact.html',
  	controller: 'ContactCtrl'
  });
  $stateProvider
  .state('WeddingCakes', {
  	url: '/weddingcakes',
  	templateUrl: 'views/weddingcakes.html',
  	controller: 'AllCakesCtrl'
  })
  $stateProvider
  .state('OtherCakes', {
  	url: '/cakes',
  	templateUrl: 'views/cakes.html'
  })
  $stateProvider
  .state('Cupcakes', {
  	url: '/cupcakes',
  	templateUrl: 'views/cupcakes.html'
  })
  $stateProvider
  .state('Flavors', {
  	url: '/flavorsfillings',
  	templateUrl: 'views/flavors.html'
  })


  //$locationProvider.html5Mode(false).hashPrefix('!');
}]);