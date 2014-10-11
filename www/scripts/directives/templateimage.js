'use strict';

angular.module('photoCardsApp')
  .directive('templateimage', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
         element.css({	'width':scope.project.template.width+'px',
				'height':scope.project.template.height+'px',
				'top':scope.project.template.top + 'px', 
				'left': scope.project.template.left + 'px',
				'position': 'absolute'});
      }
    };
  });
