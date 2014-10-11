'use strict';

angular.module('photoCardsApp')
  .controller('PreviewCtrl', ['$scope', '$routeParams' ,'datafactory',  function ($scope, $routeParams, datafactory) {
    var cardid = $routeParams.cardid;
    
$scope.card = _.findWhere(datafactory.myCardsCollection, {id:parseInt(cardid)});
console.log($scope.card)
  }]);
