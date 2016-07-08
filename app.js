var app = angular.module('CakeApp', ['ngAnimate', 'ui.bootstrap.collapse']);

app.controller('HomeCtrl', ['$scope', function($scope) {
	$scope.name = 'Kendall Maniulit'

	$scope.isCollapsed = true;
}])