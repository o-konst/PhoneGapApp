'use strict';

angular.module('photoCardsApp')
  .directive('placeholder', function () {
    return {
      restrict: 'A',
      template: '<img id="photo_{{$index}}" class="photoImage" url="{{photo.url}}" style="width: 100%;" imageonload/>',
      controller: 'PlaceholderCtrl'
    };
  })

.controller('PlaceholderCtrl', ['$scope', '$element', function ($scope, $element) {


//$scope.photo = $scope.$index == 0 ?{url:'images/IMG_1875.JPG'} : {url:'images/IMG_0172.JPG'};

var placeholder = $scope.placeholderdata;
$scope.photo = $scope.placeholderdata.photo;

$element.css({	'width':placeholder.width+'px',
				'height':placeholder.height+'px',
				'top':placeholder.top+'px', 
				'left': placeholder.left+'px', 
				'position': 'absolute',
				'overflow':'hidden',
				'border': '1px solid red;'});



}]);