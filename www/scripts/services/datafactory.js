'use strict';

angular.module('photoCardsApp')
  .factory('datafactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      selectedTemplate:{},
      myCardsCollection : [   {id:1, dateTime:"date", cardPreviewUrl:"images/RLPC.png", printImageUrl:""},
                              {id:2, dateTime:"date", cardPreviewUrl:"images/RLPC.png", printImageUrl:""},
                              {id:3, dateTime:"date", cardPreviewUrl:"images/RLPC.png", printImageUrl:""}],
      framesCollection: [{ id:1,  base:{ width:1400,
                  height:950,
                  url:"images/2.png",
                  top:50,
                  left:50,
                  orientation: "landscape",
                  placeholders:[{     
                    width:600,
                    height:450, 
                    top:250,
                    left:250,
                    photo:{}
                  },
                  {     
                    width:300,
                    height:250, 
                    top:350,
                    left:900,
                    photo:{}
                  }]
              },
              rotated: {  width:1000,
                    height:1400,
                    top:50,
                    left:50,
                    url:"images/2.png",
                    orientation: "portrait",
                    placeholders:[{
                      width:100,
                      height:100, 
                      top:200,
                      left:300
                    }]  
              }
            },
            { id:1,  base:{ width:1400,
                  height:950,
                  url:"images/2.png",
                  top:50,
                  left:50,
                  orientation: "landscape",
                  placeholders:[{     
                    width:600,
                    height:550, 
                    top:250,
                    left:250,
                    photo:{}
                  }]
              },
              rotated: {  width:1000,
                    height:1400,
                    top:50,
                    left:50,
                    url:"images/2.png",
                    orientation: "portrait",
                    placeholders:[{
                      width:100,
                      height:100, 
                      top:200,
                      left:300
                    }]  
              }
            },
            { id:1,  base:{ width:1400,
                  height:950,
                  url:"images/2.png",
                  top:50,
                  left:50,
                  orientation: "landscape",
                  placeholders:[{     
                    width:600,
                    height:550, 
                    top:250,
                    left:250,
                    photo:{}
                  }]
              },
              rotated: {  width:1000,
                    height:1400,
                    top:50,
                    left:50,
                    url:"images/2.png",
                    orientation: "portrait",
                    placeholders:[{
                      width:100,
                      height:100, 
                      top:200,
                      left:300
                    }]  
              }
            }]

    };
  });
