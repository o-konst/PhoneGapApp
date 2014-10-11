'use strict';

angular.module('photoCardsApp')
.directive('imageonload', function() {
        return {
            restrict: 'A',
            controller: function($scope, $element, projectfactory) {

var image = new Image();

/*$scope.$watch('url', function(newValue) {
  image.src = $scope.placeholderdata.photo.url;
  console.log("wach");
  console.log(newValue);
});*/

$scope.$watch(function() {
  return $scope.placeholderdata.photo.url;
}, function(newValue, oldValue) {
	 image.src = $scope.placeholderdata.photo.url;
});

image.onload=function(){
$scope.placeholderdata.photo.verticalSquash= detectVerticalSquash(image);
					$scope.placeholderdata.photo.width = image.width;
					$scope.placeholderdata.photo.height = image.height;
$scope.placeholderdata.photo.image = image;

					$scope.placeholderdata.transform = projectfactory.getdefaulttransform($scope.placeholderdata);

$element[0].src = image.src;

		 var t = "translate3d(" + $scope.placeholderdata.transform.panX + "px," + $scope.placeholderdata.transform.panY + "px, 0) " +
                 "scale3d(" + $scope.placeholderdata.transform.scale + "," + $scope.placeholderdata.transform.scale + ", " + $scope.placeholderdata.transform.scale + ") " +
                 "rotate(" + $scope.placeholderdata.transform.rotate + "deg)";
        $element[0].style.transform = t;
        $element[0].style.oTransform = t;
        $element[0].style.msTransform = t;
        $element[0].style.mozTransform = t;
		$element[0].style.webkitTransform = t;



                	}
                	




            	 var detectVerticalSquash = function (img){
  var ih = img.height;
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  var data = ctx.getImageData(0, 0, 1, ih).data;
  // search image edge pixel position in case it is squashed vertically.
  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
      var alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
          ey = py;
      } else {
          sy = py;
      }
      py = (ey + sy) >> 1;
  }
  var ratio = (py / ih);
  data = null; 
  ctx = null; 
  canvas = null; 

  return (ratio===0)?1:ratio;



    }

   /*             $element.bind('load', function() {

                	//var image = new Image();
                	//image.onload=function(){
                		alert(detectVerticalSquash($element[0]))
                	//}
                	//image.src = $scope.placeholderdata.photo.url;
//$scope.placeholderdata.photo.verticalSquash = detectVerticalSquash($element[0]);

					$scope.placeholderdata.photo.width = $element[0].width;
					$scope.placeholderdata.photo.height = $element[0].height;


					$scope.placeholderdata.transform = projectfactory.getdefaulttransform($scope.placeholderdata);



		 var t = "translate3d(" + $scope.placeholderdata.transform.panX + "px," + $scope.placeholderdata.transform.panY + "px, 0) " +
                 "scale3d(" + $scope.placeholderdata.transform.scale + "," + $scope.placeholderdata.transform.scale + ", " + $scope.placeholderdata.transform.scale + ") " +
                 "rotate(" + $scope.placeholderdata.transform.rotate + "deg)";
        $element[0].style.transform = t;
        $element[0].style.oTransform = t;
        $element[0].style.msTransform = t;
        $element[0].style.mozTransform = t;
		$element[0].style.webkitTransform = t;
    
                });*/
            }
        };
    })