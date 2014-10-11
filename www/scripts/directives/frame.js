'use strict';

angular.module('photoCardsApp')
  .directive('frame', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the frame directive');
      }
    };
  })

.controller('FrameCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});