'use strict';

angular.module('photoCardsApp')
  .directive('config', function () {
    return {
     	restrict:'E',
        template:'<div id="xsCheck" class="visible-xs"></div>',
        replace:true
    };
  })

  .controller('ConfigCtrl', function ($scope) {
    var padding = 55;
	/*if(!debug && $cordovaDevice.getPlatform()=="iOS" && parseFloat($cordovaDevice.getVersion()) >= 7.0) 
	{
        $("body").addClass("ios7");
		 padding =65;
		SettingsData.scrollHeight = window.innerHeight-padding;
		$rootScope.$broadcast("windowResize");
    }*/
  });