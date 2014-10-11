'use strict';

angular.module('photoCardsApp')
  .directive('card', function () {
    return {
      restrict: 'A',
      controller: 'CardCtrl'
    };
  })


.controller('CardCtrl', ['$scope', '$element', function ($scope, $element) {
   $scope.transforms = [];

var currentElement;

$scope.setCurrentElementIndex = function(index){
$scope.currentElementIndex = index;
currentElement = $("#photo_"+index);
console.log("setCurrentElement >>");
alert(index);
//alert(index);
$scope.transform = transform;

};

$scope.$on('save', function(){
	if(mc != null)
	{
		mc.destroy();
		mc = null;
	}
});




	var mc = new Hammer.Manager($element[0])

    mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

    mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
    mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);
	mc.add( new Hammer.Tap({ event: 'singletap' }) );

   mc.on("panstart panmove panend", onPan);
    mc.on("rotatestart rotatemove", onRotate);
    mc.on("pinchstart pinchmove", onPinch);
	
	var a = 1;
	mc.on("singletap", function(ev) {
	
		for(var i=0;i<$scope.project.template.placeholders.length; i++){
			var p = $scope.project.template.placeholders[i];
			var minX = $scope.project.template.left + p.left;
			var maxX = minX + p.width;
			var minY = $scope.project.template.top + p.top;
			var maxY = minY + p.height;
			if(ev.center.x >=minX && ev.center.x <= maxX && ev.center.y >=minY && ev.center.y <=maxY)
			{
				$scope.setCurrentElementIndex(i);
				break;
			}
		}   
});

	var transform = {panX:0, panY:0, scale:1, rotate:0};
	
	    function updateElementTransform() {

		 var t = "translate3d(" + transform.panX + "px," + transform.panY + "px, 0) " +
                 "scale3d(" + transform.scale + "," + transform.scale + ", " + transform.scale + ") " +
                 "rotate(" + transform.rotate + "deg)";
        currentElement[0].style.transform = t;
        currentElement[0].style.oTransform = t;
        currentElement[0].style.msTransform = t;
        currentElement[0].style.mozTransform = t;
		currentElement[0].style.webkitTransform = t;

		$scope.project.template.placeholders[0].transform = transform;
    }

	var START_X = 0
	var START_Y = 0;
    function onPan(ev) {
	
	if(ev)
	//$scope.setCurrentElementIndex(0);
		transform.panX = START_X + ev.deltaX;
		transform.panY = START_Y + ev.deltaY;

		updateElementTransform();
		if(ev.type=="panend")
		{
		
			START_X = transform.panX;
			START_Y = transform.panY;
		}
    }
	
	var initScale = 1;
    function onPinch(ev) {
        if(ev.type == 'pinchstart') {
            initScale = transform.scale || 1;
        }

        transform.scale = initScale * ev.scale;
		updateElementTransform();
    }

    var initAngle = 0;
    function onRotate(ev) {
        if(ev.type == 'rotatestart') {
            initAngle = transform.rotate || 0;
        }
        transform.rotate = initAngle + ev.rotation;
		updateElementTransform();
    }

}]);