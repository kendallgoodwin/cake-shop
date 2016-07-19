angular.module('CakeCtrl', ['CakeServices', 'ngAnimate', 'ui.bootstrap', 'bootstrapLightbox'])


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

// app.controller('GalleryCtrl', ['$scope', '$state', function($scope, $state) {

// 	$state.go('Gallery');

// }])

app.controller('ContactCtrl', ['$scope', '$state', function($scope, $state) {

	$state.go('Contact');

}])

app.controller('WCakesCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  var weddingCakes = ['images/weddingcakes/1.jpg', 'images/weddingcakes/2.jpg', 'images/weddingcakes/3.jpg', 
  'images/weddingcakes/4.jpg', 'images/weddingcakes/5.jpg', 'images/weddingcakes/6.jpg', 'images/weddingcakes/7.jpg',
  'images/weddingcakes/8.jpg']

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    for (var i = 0; i < weddingCakes.length; i++) {
    slides.push({
      image: weddingCakes[i],
      // text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
   }
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

    $scope.addSlide();

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

app.controller('CupcakesCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var cupcakes = ['images/cookiescupcakes/cupcake-1.jpg', 'images/cookiescupcakes/cookie-1.jpg', 
  'images/cookiescupcakes/cupcake-2.jpg', 'images/cookiescupcakes/cookie-2.jpg', 
  'images/cookiescupcakes/cupcake-3.jpg', 'images/cookiescupcakes/cupcake-7.jpg', 
  'images/cookiescupcakes/cookie-3.jpg', 'images/cookiescupcakes/cupcake-4.jpg', 
  'images/cookiescupcakes/cupcake-5.jpg', 'images/cookiescupcakes/cookie-4.jpg', 
  'images/cookiescupcakes/cupcake-6.jpg']
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    for (var i = 0; i < cupcakes.length; i++) {
	    slides.push({
	      image: cupcakes[i],
	      // text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
	      id: currIndex++
	    });
  	}
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  $scope.addSlide();

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

app.controller('CakesCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var cakes = ['images/cakes/cake-1.jpg', 'images/cakes/cake-10.jpg', 'images/cakes/cake-2.jpg',
  'images/cakes/cake-3.jpg', 'images/cakes/cake-4.jpg', 'images/cakes/cake-5.jpg', 'images/cakes/cake-6.jpg',
  'images/cakes/cake-7.jpg', 'images/cakes/cake-9.jpg', 'images/cakes/cake-8.jpg']
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    for (var i = 0; i < cakes.length; i++) {
	    slides.push({
	      image: cakes[i],
	      // text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
	      id: currIndex++
	    });
    }
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

    $scope.addSlide();

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


app.controller('GalleryCtrl', function ($scope, Lightbox) {
$scope.images = [
    {
      'url': 'images/cakes/cake-1.jpg',
      // 'thumbUrl': 'http://i.imgur.com/9RyWebbb.jpg'
    }
  ];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});

// app.controller('GalleryCtrl', function ($scope, $uibModal, $log) {
// 	$scope.items = ['images/cakes/cake-1.jpg', 'images/cakes/cake-2.jpg', 'images/cakes/cake-3.jpg', 
// 	'images/cakes/cake-4.jpg', 'images/cakes/cake-5.jpg', 'images/cakes/cake-6.jpg'];

//   $scope.animationsEnabled = true;

//   $scope.open = function (size) {

//     var modalInstance = $uibModal.open({
//       animation: $scope.animationsEnabled,
//       templateUrl: 'myModalContent.html',
//       controller: 'ModalInstanceCtrl',
//       size: size,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });

//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };

//   $scope.toggleAnimation = function () {
//     $scope.animationsEnabled = !$scope.animationsEnabled;
//   };

// });

// // Please note that $uibModalInstance represents a modal window (instance) dependency.
// // It is not the same as the $uibModal service used above.

// app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };

//   $scope.ok = function () {
//     $uibModalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });