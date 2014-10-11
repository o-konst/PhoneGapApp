'use strict';

angular.module('photoCardsApp')
  .controller('EditorCtrl', ['$rootScope', '$scope', 'datafactory', 'projectfactory', 'generateframefactory', function ($rootScope,$scope, datafactory, projectfactory, generateframefactory) {
  	var p  = projectfactory.createProject(datafactory.selectedTemplate);

    var onCaptureSuccess = function(data){
    console.log("image ulr>>" + data)

    $scope.project.template.placeholders[0].photo.url =event.target.result;
    $rootScope.$apply();
    $scope.testurl = data;
    }

    var onCaptureFail = function(){

    }
$scope.selectPhoto= function(){
  navigator.camera.getPicture(onCaptureSuccess, onCaptureFail, {
    correctOrientation: true,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    targetHeight: 2000,
    targetWidth: 2000
});
}

$scope.currentElementIndex = 1;


    var im1 = {url:'images/IMG_1875.JPG'};
    var im2 = {url:'images/IMG_0172.JPG'};
//var im2 = {url:'images/3.jpg'};
	p.template.placeholders[0].photo = im1;
	p.template.placeholders[1].photo = im2;
	$scope.project = p;
    
    $scope.saveBtnClick= function(){
    	$scope.$broadcast("save");
		generateframefactory.save($scope.project, $scope.transform);
	}



var  fileupload = document.getElementById('fileupload');
fileupload.querySelector('input').onchange = function () {
	console.log("file >>");
    readfiles(this.files);
  };

  function readfiles(files) {
    for (var i = 0; i < files.length; i++) {
 		var reader = new FileReader();
    	reader.onload = function (event) {
    		console.log("load3ed")
      		$scope.project.template.placeholders[0].photo.url =event.target.result;
      		$rootScope.$digest();
    };
reader.readAsDataURL(files[i]);

   
}

}
  }]);
