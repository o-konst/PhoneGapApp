'use strict';

angular.module('photoCardsApp')
  .factory('generateframefactory', function () {
    // Service logic
    // ...

    var drawPlaceholder = function(ctx, placeholder, image){
var image = document.getElementById("photo_"+index)
        var canvas_ = document.createElement("canvas");
        canvas_.width = placeholder.width;
        canvas_.height = placeholder.height;
       
       // canvas_.style.display   = "none";
   // document.body.appendChild(canvas_);
        var ctxPlaceholder = canvas_.getContext("2d");
        var transform = placeholder.transform;
 

        var s1 = placeholder.width/placeholder.photo.width;
        var s = transform.scale;

        var tx = (placeholder.photo.width*s1*s - placeholder.width)/2;
        var ty = (placeholder.photo.height*s1*s-placeholder.height)/2;
        var px = transform.panX;
        var py = transform.panY;
        var r = transform.rotate;

//var myImg = new Image();
//myImg.src = placeholder.photo.url;

//myImg.onload = function(){
  //alert("load")
//}
//ctx.save();
ctxPlaceholder.save();
//ctxPlaceholder.translate(px,py);

ctxPlaceholder.scale(s,s,s);
ctxPlaceholder.translate(-tx/s,-ty/s);
var w2 = placeholder.photo.width/2*s1;
var h2 = placeholder.photo.height/2*s1;
ctxPlaceholder.translate(w2,h2);
ctxPlaceholder.rotate(r*Math.PI/180); 
ctxPlaceholder.translate(-w2,-h2);
var detectVerticalSquashRatio = placeholder.photo.verticalSquash;
//console.log("verticalSquash>>" + detectVerticalSquashRatio)
var g = 1;

var widthP =placeholder.width;
var heifghP = placeholder.photo.height*placeholder.width/placeholder.photo.width;
//\\alert(heifghP/detectVerticalSquashRatio)//placeholder.photo.verticalSquash;
//ctxPlaceholder.drawImage(placeholder.photo.image, 0, 0, widthP,heifghP/detectVerticalSquashRatio );

ctxPlaceholder.drawImage(image, 0, 0, widthP,heifghP/detectVerticalSquashRatio );

  /*var canvas_2 = document.createElement("canvas");
        canvas_2.width = placeholder.width;
        canvas_2.height = placeholder.height;
       // canvas_2.style.display   = "none";
        document.body.appendChild(canvas_2);
        var ctxPlaceholder2 = canvas_2.getContext("2d");
ctxPlaceholder2.drawImage(canvas_, 0, 0, widthP,heifghP );

*/



if(index ==1){
//placeholder.photo.image = null;

}
ctx.drawImage(canvas_, placeholder.left*g, placeholder.top*g, placeholder.width*g, placeholder.height*g);
//ctx.restore();
ctxPlaceholder = null;
canvas_ = null;
index++;
drawPlaceholders();

      };

      var drawBackground = function(ctx, card){
        var cardbgimage = document.getElementById("cardbgimage")
        ctx.drawImage(cardbgimage, 0, 0, card.width, card.height);
      };

      var drawFrame = function(ctx, template){
      var templateimage = document.getElementById("templateimage");
      ctx.drawImage(templateimage, template.left, template.top, template.width, template.height);
     
      };

var index = 0;
var placeholdersm , ctx, projectm, canvasm;
var drawPlaceholders = function()
{
  var plm = projectm.template.placeholders;

    if(index<plm.length){
      //var im = document.getElementById("photo_"+index)
      drawPlaceholder(ctx,plm[index] , plm[index].photo.image);
      
    }else{
      drawFrame(ctx, projectm.template) ;       
index = 0;

       $("#card").hide();

       var ima= document.createElement('img');
       var dataURL = canvasm.toDataURL();
       ima.src = dataURL;
       ima.width = 600;
      document.body.appendChild(ima);
    }
}

    // Public API here
    return {
      save: function (project, transform) {
        var g = 1;
        if(canvasm==undefined)
        {canvasm = document.createElement("canvas");
        canvasm.width = project.card.width*g;
        canvasm.height = project.card.height*g;
       
        canvasm.style.zIndex   = 8;
        canvasm.style.position = "absolute";
        canvasm.style.border   = "1px solid red";
         canvasm.style.display   = "none";
       // document.body.appendChild(canvas);

        ctx = canvasm.getContext("2d");
      }else{
        ctx.clearRect(0,0, project.card.width, project.card.height);
      }
        
//canvasm = canvas;
projectm = project;
//ctx = _ctx;
//placeholdersm = project.template.placeholders
//console.log(placeholdersm);
        drawBackground(ctx, project.card);

/*for(var i=0; i<project.template.placeholders.length; i++){
    var im = document.getElementById("photo_"+i);
    var pl= project.template.placeholders[0];
    drawPlaceholder(ctx, pl, pl.photo.image);
}*/

drawPlaceholders();




        
      }
    };
  });
