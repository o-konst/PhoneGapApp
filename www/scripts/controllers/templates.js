'use strict';

angular.module('photoCardsApp')
  .controller('TemplatesCtrl', ['$scope', '$timeout', 'datafactory', function ($scope,  $timeout, datafactory) {

//setTimeout(function(){

//}, 300);
  //Not sure if I need this
  //$timeout(function () { 
     $scope.templates = datafactory.framesCollection;
    //}, 300);
   

    $scope.selectTemplate = function(template){
		datafactory.selectedTemplate = template;
		location.href = "#/editor";
    }
}]);
