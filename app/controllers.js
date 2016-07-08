angular.module('CakeCtrl', ['CakeServices', 'ngAnimate', 'ui.bootstrap.collapse', 'ui.bootstrap.dropdown'])


app.controller('NavCtrl', ['$scope', function($scope) {
	// $scope.name = 'Kendall Maniulit'

	// Enables clickable collapse navbar in mobile view
	$scope.isCollapsed = true;

	// Enables dropdown menu in navbar
	$scope.status = {
    isopen: false
  };
}])

app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.name = "Kendall Maniulit";

	$state.go('home');

}])

app.controller('AboutCtrl', ['$scope', '$state', function($scope, $state) {

	$state.go('About');
}])
