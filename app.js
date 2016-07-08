var app = angular.module('CakeApp', ['ngAnimate', 'ui.bootstrap.collapse', 'ui.bootstrap.dropdown']);

app.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.name = 'Kendall Maniulit'

	// Enables clickable collapse navbar in mobile view
	$scope.isCollapsed = true;

	// Enables dropdown menu in navbar
	$scope.status = {
    isopen: false
  };
}])