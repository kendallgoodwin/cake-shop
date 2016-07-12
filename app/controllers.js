angular.module('CakeCtrl', ['CakeServices', 'ngAnimate', 'ui.bootstrap'])


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

	$state.go('Home');

}])

app.controller('GalleryCtrl', ['$scope', '$state', function($scope, $state) {

	$state.go('Gallery');

}])

app.controller('ContactCtrl', ['$scope', '$state', function($scope, $state) {

	$state.go('Contact');

}])

app.controller('WCakesCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }

}])