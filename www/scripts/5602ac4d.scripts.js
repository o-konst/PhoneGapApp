function navigationOpenClose(){isMobile&&($(".nav_wrapper").toggleClass("nav_wrapper_open"),$(".header_wrapper").toggleClass("header_wrapper_mobile_open"),$(".content").toggleClass("content_mobile_open"))}function url_base64_decode(a){var b=a.replace("-","+").replace("_","/");switch(b.length%4){case 0:break;case 2:b+="==";break;case 3:b+="=";break;default:throw"Illegal base64url string!"}return window.atob(b)}var isMobile=!1,carousel;$(document).ready(function(){function a(){return $(".navBtn").is(":visible")}isMobile=a(),$(window).resize(function(){isMobile=a()}),$("#weather, #backClick").on("click",function(){$(".content").addClass("content_animation"),$(".nav_wrapper").toggleClass("nav_wrapper_expand"),$(".navigation2").toggleClass("navigation2_open"),$(".navigation").toggleClass("navigation_closed"),$(".content_animation").toggleClass("content_moved")})}),angular.module("digestApp",["ngCookies","ionic"]).config(["$urlRouterProvider","$stateProvider",function(a,b){b.state("events",{url:"/events",templateUrl:"views/events.html",controller:"EventsCtrl"}).state("index",{url:"/",templateUrl:"home.html"}).state("app",{url:"/app","abstract":!0,templateUrl:"templates/menu.html",controller:"AppCtrl"}).state("app.search",{url:"/search",views:{menuContent:{templateUrl:"templates/search.html"}}}).state("app.browse",{url:"/browse",views:{menuContent:{templateUrl:"templates/browse.html"}}}).state("app.news",{url:"/news/:section",views:{menuContent:{templateUrl:"views/news.html"}}}).state("app.events",{url:"/events",views:{menuContent:{templateUrl:"views/events.html",controller:"EventsCtrl"}}}).state("app.playlists",{url:"/playlists",views:{menuContent:{templateUrl:"templates/playlists.html",controller:"PlaylistsCtrl"}}}).state("app.topic",{url:"/events/:topicId",views:{menuContent:{templateUrl:"views/weather.html",controller:"C4Ctrl"}}}).state("app.single",{url:"/playlists/:playlistId",views:{menuContent:{templateUrl:"templates/playlist.html",controller:"PlaylistCtrl"}}}),a.otherwise("/app/playlists")}]).controller("AppCtrl",["$scope",function(){}]).controller("PlaylistsCtrl",["$scope",function(a){a.playlists=[{title:"Reggae",id:1},{title:"Chill",id:2},{title:"Dubstep",id:3},{title:"Indie",id:4},{title:"Rap",id:5},{title:"Cowbell",id:6},{title:"Reggae1",id:1},{title:"Chill1",id:2},{title:"Dubstep1",id:3},{title:"Indie1",id:4},{title:"Rap1",id:5},{title:"Cowbell1",id:6}]}]).controller("PlaylistCtrl",["$scope","$stateParams",function(){}]),angular.module("digestApp").controller("C1Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Home"),b.go=function(){}}]),angular.module("digestApp").controller("NewsCtrl",["$scope","$stateParams","$timeout","$anchorScroll","F00","F0","F1","F2","$ionicLoading",function(a,b,c,d,e,f,g,h,i){function j(){var a,c="News_"+b.section,d=function(a){$(".lodingAlert").hide(),k(a),h.put(c,{data:a,time:(new Date).getTime()})};a&&a.time>(new Date).getTime()-3e5?k(a.data):(g.getData().success(d),$(".lodingAlert").show())}function k(b){i.hide(),d(),a.items=b,e.scrollToY()}function l(){$(".lazy").lazyload({threshold:1e3,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}),$(".lazy2").lazyload({threshold:1e3,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})}function m(){a.selctedTopicItem=a.items[r],a.layout="item",d()}function n(){a.layout=o,e.scrollToY()}i.show({template:"Loading..."}),a.$on("$viewContentLoaded",function(){c(function(){j()},300)}),f.setSection("News",b.section,f.newsSections);var o;if(a.layout=o="list",localStorage.getItem("settings")){var p=localStorage.getItem("settings");if(p){var q=JSON.parse(p);console.log(typeof q.settings.news),a.layout=o="undefined"==typeof q.settings.news?"list":q.settings.news.layout}}a.$on("changeLayoutBroadcast",function(b,d){var e=d.message;if(a.layout!=e){try{localStorage.setItem("settings",JSON.stringify({settings:{news:{layout:e}}}))}catch(f){console.log(f)}a.layout=o=e,c(function(){l()},50)}});var r=0;a.topicClick=function(a){isMobile&&($(".navBtn").hide(),$(".backBtn").show()),e.setScrollY(),r=a,m()},a.prevTopic=function(){r>0&&(r--,m())},a.nextTopic=function(){r<a.items.length-1&&(r++,m())},a.backBtnClick=function(){n()},a.$on("goBackBroadcast",function(){n()})}]),angular.module("digestApp").controller("EventsCtrl",["$scope","$rootScope","$stateParams","$timeout","$anchorScroll","F00","F0","F1","F2","$ionicLoading",function(a,b,c,d,e,f,g,h,i,j){function k(){{var a="Events_"+b.city;i.get(a)}console.log("data");var c=function(a){console.log("s"),l(a)};h.getData().success(c)}function l(b){j.hide(),g.a=b,a.items=b}function m(){}function n(){a.selctedTopicItem=a.items[t],a.layout="item",e()}function o(){a.layout=q,f.scrollToY()}console.log("1AAAAa"),a.rightButtonsLck=function(){a.layout="list"==a.layout?"grid":"list"};var p=0;g.a.length>0?a.items=g.a:(console.log("da"),a.$on("$viewContentLoaded",function(){0==p&&(p++,d(function(){k()},300))})),g.setSection("Events"),a.layout="grid";var q;if(a.layout=q="grid",localStorage.getItem("settings")){var r=localStorage.getItem("settings");if(r){var s=JSON.parse(r);a.layout=q="undefined"==typeof s.settings.events?"list":s.settings.events.layout}}a.$on("changeLayoutBroadcast",function(b,c){var e=c.message;if(a.layout!=e){try{localStorage.setItem("settings",JSON.stringify({settings:{events:{layout:e}}}))}catch(f){console.log(f)}a.layout=q=e,d(function(){m()},50)}}),a.$on("cityChangedBroadcast",function(){k()});var t=0;a.topicClick=function(a){isMobile&&($(".navBtn").hide(),$(".backBtn").show()),f.setScrollY(),t=a,n()},a.prevTopic=function(){t>0&&(t--,n())},a.nextTopic=function(){t<a.items.length-1&&(t++,n())},a.backBtnClick=function(){o()},a.$on("goBackBroadcast",function(){o()})}]),angular.module("digestApp").controller("C5Ctrl",["$rootScope","$scope","$http","F1","F0",function(a,b,c,d,e){e.setSection("Grabaseat");var f=function(a){b.items=a.specials.special,b.lowitems=a.lowlist.low};d.getData().success(f)}]),angular.module("digestApp").controller("C6Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0","$routeParams",function(a,b,c,d,e,f,g){f.setSection("Deals",g.section,f.dealsSections);var h=function(a){b.items=a,e(),console.log(b.items)};d.getEvents(b.city.name).success(h),console.log(b.items),b.loadItem=function(a){console.log(a.url)},b.$on("cityChangedBroadcast",function(){d.getEvents().success(h)})}]),angular.module("digestApp").controller("C4Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0","F00","$location","$stateParams",function(a,b,c,d,e,f){f.setSection("Weather");console.log(f.a[3]),b.selctedTopicItem=f.a[3],b.back=function(){}}]),angular.module("digestApp").controller("C7Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Tv-guide");var g=isMobile?.85:1.8;b.koef=18e3/g,b.days=[0,1,2,3,4,5,6],b.times=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];var h=function(a){b.items=a.Channels};d.getData().success(h),b.dayClick=function(a){var b={index:a};d.getData(b).success(h)}}]),angular.module("digestApp").factory("F1",["$http","$rootScope","$cacheFactory",function(a,b){return{getData:function(c){{var d=b.subSection?b.subSection.name:"";({s1:b.section.name,s2:d,c:b.city})}return a.get("https://nzdigest.s3.amazonaws.com/national.json")},getDatatopic:function(c){var d=b.subSection?b.subSection.name:"",e={s1:b.section.name,s2:d,c:b.city},f=c?c:"";return a.post("http://nzdigest.co.nz/app/datatopic",{s:JSON.stringify(e),d:JSON.stringify(f)})},getWeather:function(c){var d=b.subSection?b.subSection.name:"",e={s1:b.section.name,s2:d,c:b.city},f=c?c:"";return a.post("http://nzdigest.co.nz/app/dataweather",{s:JSON.stringify(e),d:JSON.stringify(f)})}}}]),angular.module("digestApp").factory("F2",["$cacheFactory",function(a){return a("a")}]),angular.module("digestApp").filter("gridfilter",function(){return function(a,b){if(!b)return a;var c=[];return b=b.toLowerCase(),angular.forEach(a,function(a,d){0==b?d%2==0&&c.push(a):d%2!=0&&c.push(a)}),c}}),angular.module("digestApp").directive("digestApp",["$timeout",function(){return{restrict:"A",transclude:!0,replace:!0,template:"<div ng-transclude></div>",link:function(a,b,c){addthis.init(),addthis.toolbox($(b),{},{url:c.url,title:"My Awesome Blog",description:"Checkout this awesome post on blog.me"})}}}]),angular.module("digestApp").directive("twt",["$timeout","$http","$window",function(a,b,c){return{scope:{shares:"="},transclude:!0,template:"<div ng-transclude></div>",link:function(d,e,f){f.shares&&b.get("https://api.facebook.com/method/links.getStats?urls="+f.url+"&format=json").success(function(a){d.shares=a[0].share_count}).error(function(){d.shares=0}),a(function(){e.bind("click",function(){var a=f.name,b=f.url,d="nzdigest",e=c.open("https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnzdigest.co.nz%2F&text="+a+"&url="+b+"&via="+d+"&tw_p=tweetbutton","Share on Twitter","width=550,height=450");e.focus()})})}}}]),angular.module("digestApp").run(["$rootScope",function(a){a.$on("changeCity",function(b,c){a.$broadcast("cityChangedBroadcast",c)}),a.$on("changeLayout",function(b,c){a.$broadcast("changeLayoutBroadcast",c)}),a.$on("goBack",function(b,c){a.$broadcast("goBackBroadcast",c)})}]).controller("ChCtrl",["$rootScope","$scope","F00","F0","$cookies","$location","$ionicSideMenuDelegate",function(a,b,c,d,e,f,g){b.cities=d.citiesArray;var h=e.city?e.city:b.cities[0];d.setCity(h),b.dragConent=!1,b.toggleLeft=function(){console.log("DFFD"),g.toggleLeft(),b.dragConent=!b.dragConent,g.canDragContent(b.dragConent)},b.selectCity=function(c){d.setCity(b.cities[c]),b.$emit("changeCity",{message:a.city})},b.changeLayout=function(){},b.backBtnClick=function(){$(".navBtn").show(),$(".backBtn").hide(),b.$emit("goBack")},b.openMenuClick=function(){carousel.toggle()}}]),angular.module("digestApp").controller("MenuCtrl",["$rootScope","$scope","F0","$timeout","$location","$ionicSideMenuDelegate",function(a,b,c,d,e,f){b.selectSection=function(a){f.toggleLeft(),d(function(){e.path(a)},300)}}]),angular.module("digestApp").factory("F0",["$rootScope","$location","$cookies",function(a,b,c){return{a:[],citiesArray:["Auckland","Wellington","Christchurch"],sections:[{name:"Home",id:1,cityRelated:!1},{name:"News",id:2,cityRelated:!1},{name:"Weather",id:3,cityRelated:!0},{name:"Events",id:4,cityRelated:!0},{name:"Deals",id:5,cityRelated:!0},{name:"Grabaseat",id:6,cityRelated:!1},{name:"Exchange rates",id:7,cityRelated:!1},{name:"Tv-guide",id:8,cityRelated:!1},{name:"Cinema",id:9,cityRelated:!1},{name:"Catalog",id:10,cityRelated:!1},{name:"Property",id:11,cityRelated:!1}],newsSections:[{name:"Latest",url:"#news/latest",id:201},{name:"National",url:"#news/national",id:202},{name:"World",url:"#news/world",id:203},{name:"Sport",url:"#news/sport",id:204},{name:"Business",url:"#news/business",id:205},{name:"Latest",url:"#news/latest",id:201},{name:"National",url:"#news/national",id:202},{name:"World",url:"#news/world",id:203},{name:"Sport",url:"#news/sport",id:204},{name:"Business",url:"#news/business",id:205}],dealsSections:[{name:"Expirience",url:"#deals/expirience",id:501},{name:"Goods",url:"#deals/goods",id:502},{name:"Travel",url:"#deals/travel",id:503},{name:"Vine",url:"#deals/vine",id:504}],setSection:function(c,d,e){a.section=this.getSection(c,this.sections),e&&e.length>0?(a.subSection=this.getSection(d,e),a.subSection||b.path("/"+c.toLowerCase()+"/"+e[0].name.toLowerCase()),a.subSections=e):a.subSection=null},getSection:function(a,b){for(var c="",d=0;d<b.length;d++){var e=b[d];if(e.name.toLowerCase()==a.toLowerCase()){c=e;break}}return c},setCity:function(b){a.city=b,c.city=b}}}]).factory("authInterceptor",["$rootScope","$q","$window",function(a,b,c){return{request:function(a){return a.headers=a.headers||{},c.sessionStorage.token&&(a.headers.Authorization="Bearer "+c.sessionStorage.token),a},responseError:function(a){return 401===a.status,b.reject(a)}}}]),angular.module("digestApp").service("F00",["$rootScope","$location","$cookies","$window",function(a,b,c,d){var e=0,f="";this.setScrollY=function(){e=d.scrollY,f=b.path()},this.scrollToY=function(){f==b.path()?setTimeout(function(){window.scroll(0,e),e=0},100):e=0},this.getLocation=function(){return f}}]);