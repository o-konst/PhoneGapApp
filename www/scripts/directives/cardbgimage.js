'use strict';

angular.module('photoCardsApp')
  .directive('cardbgimage', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.css({	'width':scope.project.card.width+'px',
				'height':scope.project.card.height+'px',
				'top':'0px', 
				'left': '0px',
				'position': 'absolute'});
      }
    };
  });
