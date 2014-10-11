'use strict';

angular.module('photoCardsApp')
  .factory('projectfactory', function () {
    var project = {};
    var g = 1;
    var card = {"landscape":{  
                width:1500*g,
                height:1100*g,
                bgimage:"images/RLPC.png"},
              "portrait":{
                width:1500,
                height:1100,
                bgimage:"images/portraitbg.png"}
            };

    return {
      getProject:function(){
        return project;
      },

      createProject: function (template) {
        project = {};
        project.template = angular.copy(template.base);
        project.card = template.base.orientation == "portrait" ? card.portrait : card.landscape;
        project.canRotate = template.rotated != undefined;

        return project;
      },

      rotateTemplate: function (template) {
        project.template = template.base;
        return project;
      },

      getdefaulttransform: function(placeholderdata){
        var transform = {panX:0, panY:0, scale:1, rotate:0};
        var imageaspectratio =  placeholderdata.photo.width/placeholderdata.photo.height;
        var placeholderaspectratio = placeholderdata.width/placeholderdata.height;
        var scalefactor = placeholderdata.width/placeholderdata.photo.width;
        var scaledheight = placeholderdata.photo.height*scalefactor;
        
        if(imageaspectratio>placeholderaspectratio)
        {   
            transform.scale = placeholderdata.height/scaledheight;
        }

          transform.panY = (placeholderdata.height - scaledheight)/2
        
        return transform;

      }
    };
  });
