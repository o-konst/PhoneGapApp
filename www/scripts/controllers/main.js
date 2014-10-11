'use strict';

angular.module('photoCardsApp')
  .controller('MainCtrl', ['$scope', 'datafactory', function ($scope, datafactory) {

  	FastClick.attach(document.body);
  	
    $scope.cards = datafactory.myCardsCollection;

    $scope.previewCardClick = function(card)
    {
    	location.href = "#/preview/"+card.id;
    }


        var onCaptureSuccess = function(data){
   

    //$scope.project.template.placeholders[0].photo.url =data;
    //$rootScope.$apply();
    //$scope.testurl = data;
     var image = document.getElementById('myImage');
   // alert(image);
    image.src = data;
 console.log("image ulr>> " + data);
    }

    var onCaptureFail = function(){

    }
   

//$scope.selectPhoto= function(){
  navigator.camera.getPicture(onCaptureSuccess, onCaptureFail, {
    destinationType: Camera.DestinationType.FILE_URI
});
//}

  }]);
