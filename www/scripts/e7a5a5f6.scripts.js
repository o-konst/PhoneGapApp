"use strict";function navigationOpenClose(){isMobile&&($(".nav_wrapper").toggleClass("nav_wrapper_open"),$(".header_wrapper").toggleClass("header_wrapper_mobile_open"),$(".content").toggleClass("content_mobile_open"))}function url_base64_decode(a){var b=a.replace("-","+").replace("_","/");switch(b.length%4){case 0:break;case 2:b+="==";break;case 3:b+="=";break;default:throw"Illegal base64url string!"}return window.atob(b)}angular.module("digestApp",["ngCookies","ngSanitize","ui.router","ui.bootstrap","ngAnimate"]).config(["$urlRouterProvider","$stateProvider",function(a,b){b.state("news",{url:"/news/:section",templateUrl:"views/news.html",controller:"NewsCtrl"}).state("events",{url:"/events",templateUrl:"views/events.html",controller:"EventsCtrl"}),a.otherwise("/events")}]),angular.module("digestApp").controller("C1Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Home"),b.go=function(){}}]),angular.module("digestApp").controller("NewsCtrl",["$scope","$stateParams","$timeout","$anchorScroll","F00","F0","F1","F2",function(a,b,c,d,e,f,g,h){function i(){var a="News_"+b.section,c=h.get(a),d=function(b){$(".lodingAlert").hide(),j(b),h.put(a,{data:b,time:(new Date).getTime()})};c&&c.time>(new Date).getTime()-3e5?j(c.data):(g.getData().success(d),$(".lodingAlert").show())}function j(b){a.items=b,e.scrollToY()}function k(){$(".lazy").lazyload({threshold:1e3,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}),$(".lazy2").lazyload({threshold:1e3,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})}function l(){a.selctedTopicItem=a.items[q],a.layout="item",d()}function m(){a.layout=n,e.scrollToY()}f.setSection("News",b.section,f.newsSections),d(),i();var n;if(a.layout=n="list",localStorage.getItem("settings")){var o=localStorage.getItem("settings");if(o){var p=JSON.parse(o);console.log(typeof p.settings.news),a.layout=n="undefined"==typeof p.settings.news?"list":p.settings.news.layout}}a.$on("changeLayoutBroadcast",function(b,d){var e=d.message;if(a.layout!=e){try{localStorage.setItem("settings",JSON.stringify({settings:{news:{layout:e}}}))}catch(f){console.log(f)}a.layout=n=e,c(function(){k()},50)}});var q=0;a.topicClick=function(a){isMobile&&($(".navBtn").hide(),$(".backBtn").show()),e.setScrollY(),q=a,l()},a.prevTopic=function(){q>0&&(q--,l())},a.nextTopic=function(){q<a.items.length-1&&(q++,l())},a.backBtnClick=function(){m()},a.$on("goBackBroadcast",function(){m()})}]),angular.module("digestApp").controller("EventsCtrl",["$scope","$rootScope","$stateParams","$timeout","$anchorScroll","F00","F0","F1","F2",function(a,b,c,d,e,f,g,h,i){function j(){var a="Events_"+b.city,c=i.get(a),d=function(b){$(".lodingAlert").hide(),k(b),i.put(a,{data:b,time:(new Date).getTime()})};c&&c.time>(new Date).getTime()-3e5?k(c.data):(h.getData().success(d),$(".lodingAlert").show())}function k(b){a.items=b,f.scrollToY(),d(function(){l()},300)}function l(){}function m(){a.selctedTopicItem=a.items[r],a.layout="item",e()}function n(){a.layout=o,f.scrollToY()}g.setSection("Events"),e(),j();var o;if(a.layout=o="list",localStorage.getItem("settings")){var p=localStorage.getItem("settings");if(p){var q=JSON.parse(p);a.layout=o="undefined"==typeof q.settings.events?"list":q.settings.events.layout}}a.$on("changeLayoutBroadcast",function(b,c){var e=c.message;if(a.layout!=e){try{localStorage.setItem("settings",JSON.stringify({settings:{events:{layout:e}}}))}catch(f){console.log(f)}a.layout=o=e,d(function(){l()},50)}}),a.$on("cityChangedBroadcast",function(){j()});var r=0;a.topicClick=function(a){isMobile&&($(".navBtn").hide(),$(".backBtn").show()),f.setScrollY(),r=a,m()},a.prevTopic=function(){r>0&&(r--,m())},a.nextTopic=function(){r<a.items.length-1&&(r++,m())},a.backBtnClick=function(){n()},a.$on("goBackBroadcast",function(){n()})}]),angular.module("digestApp").controller("C5Ctrl",["$rootScope","$scope","$http","F1","F0",function(a,b,c,d,e){e.setSection("Grabaseat");var f=function(a){b.items=a.specials.special,b.lowitems=a.lowlist.low};d.getData().success(f)}]),angular.module("digestApp").controller("C6Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0","$routeParams",function(a,b,c,d,e,f,g){f.setSection("Deals",g.section,f.dealsSections);var h=function(a){b.items=a,e(),console.log(b.items)};d.getEvents(b.city.name).success(h),console.log(b.items),b.loadItem=function(a){console.log(a.url)},b.$on("cityChangedBroadcast",function(){d.getEvents().success(h)})}]),angular.module("digestApp").controller("C4Ctrl",["$rootScope","$scope","$routeParams","$http","F1","$anchorScroll","F0","F00","$location",function(a,b,c,d,e,f,g){g.setSection("Weather");b.back=function(){}}]),angular.module("digestApp").controller("C7Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Tv-guide");var g=isMobile?.85:1.8;b.koef=18e3/g,b.days=[0,1,2,3,4,5,6],b.times=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];var h=function(a){b.items=a.Channels};d.getData().success(h),b.dayClick=function(a){var b={index:a};d.getData(b).success(h)}}]),angular.module("digestApp").factory("F1",["$http","$rootScope","$cacheFactory",function(a,b){return{getData:function(c){{var d=b.subSection?b.subSection.name:"";({s1:b.section.name,s2:d,c:b.city})}return a.get("https://nzdigest.s3.amazonaws.com/national.json")},getDatatopic:function(c){var d=b.subSection?b.subSection.name:"",e={s1:b.section.name,s2:d,c:b.city},f=c?c:"";return a.post("http://nzdigest.co.nz/app/datatopic",{s:JSON.stringify(e),d:JSON.stringify(f)})},getWeather:function(c){var d=b.subSection?b.subSection.name:"",e={s1:b.section.name,s2:d,c:b.city},f=c?c:"";return a.post("http://nzdigest.co.nz/app/dataweather",{s:JSON.stringify(e),d:JSON.stringify(f)})}}}]),angular.module("digestApp").factory("F2",["$cacheFactory",function(a){return a("a")}]),angular.module("digestApp").filter("gridfilter",function(){return function(a,b){if(!b)return a;var c=[];return b=b.toLowerCase(),angular.forEach(a,function(a,d){0==b?d%2==0&&c.push(a):d%2!=0&&c.push(a)}),c}}),angular.module("digestApp").directive("digestApp",["$timeout",function(){return{restrict:"A",transclude:!0,replace:!0,template:"<div ng-transclude></div>",link:function(a,b,c){addthis.init(),addthis.toolbox($(b),{},{url:c.url,title:"My Awesome Blog",description:"Checkout this awesome post on blog.me"})}}}]),angular.module("digestApp").directive("twt",["$timeout","$http","$window",function(a,b,c){return{scope:{shares:"="},transclude:!0,template:"<div ng-transclude></div>",link:function(d,e,f){f.shares&&b.get("https://api.facebook.com/method/links.getStats?urls="+f.url+"&format=json").success(function(a){d.shares=a[0].share_count}).error(function(){d.shares=0}),a(function(){e.bind("click",function(){var a=f.name,b=f.url,d="nzdigest",e=c.open("https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnzdigest.co.nz%2F&text="+a+"&url="+b+"&via="+d+"&tw_p=tweetbutton","Share on Twitter","width=550,height=450");e.focus()})})}}}]),angular.module("digestApp").run(["$rootScope",function(a){a.$on("changeCity",function(b,c){a.$broadcast("cityChangedBroadcast",c)}),a.$on("changeLayout",function(b,c){a.$broadcast("changeLayoutBroadcast",c)}),a.$on("goBack",function(b,c){a.$broadcast("goBackBroadcast",c)})}]).controller("ChCtrl",["$rootScope","$scope","F00","F0","$cookies","$location",function(a,b,c,d,e){b.cities=d.citiesArray;var f=e.city?e.city:b.cities[0];d.setCity(f),b.selectCity=function(c){d.setCity(b.cities[c]),b.$emit("changeCity",{message:a.city})},b.changeLayout=function(){carousel.open()},b.backBtnClick=function(){$(".navBtn").show(),$(".backBtn").hide(),b.$emit("goBack")}}]),angular.module("digestApp").controller("MenuCtrl",["$rootScope","$scope","F0","$timeout","$location",function(a,b,c,d,e){function f(a){function b(){e.css("transform","translate3d("+g+"px,0,0) scale3d(1,1,1)")}function c(a){switch(a.gesture.preventDefault(),console.log(a.type),a.type){case"dragleft":case"dragright":var c="dragright"==a.type?h:0;g=c+a.gesture.deltaX,b();break;case"swipeleft":d.close(),a.gesture.stopDetect();break;case"swiperight":d.open(),a.gesture.stopDetect();break;case"release":}}var d=this;a=$(a);var e=a,f=!1,g=-250,h=-250;this.open=function(){f=!0,g=0,b(!0)},this.close=function(){g>h&&(f=!1,g=h,b(!0))},new Hammer(a[0],{dragLockToAxis:!0}).on("release dragleft dragright swipeleft swiperight",c)}b.selectSection=function(a){carousel.close(),d(function(){e.path(a)},300)},carousel=new f("#carousel")}]),angular.module("digestApp").factory("F0",["$rootScope","$location","$cookies",function(a,b,c){return{citiesArray:["Auckland","Wellington","Christchurch"],sections:[{name:"Home",id:1,cityRelated:!1},{name:"News",id:2,cityRelated:!1},{name:"Weather",id:3,cityRelated:!0},{name:"Events",id:4,cityRelated:!0},{name:"Deals",id:5,cityRelated:!0},{name:"Grabaseat",id:6,cityRelated:!1},{name:"Exchange rates",id:7,cityRelated:!1},{name:"Tv-guide",id:8,cityRelated:!1},{name:"Cinema",id:9,cityRelated:!1},{name:"Catalog",id:10,cityRelated:!1},{name:"Property",id:11,cityRelated:!1}],newsSections:[{name:"Latest",url:"#news/latest",id:201},{name:"National",url:"#news/national",id:202},{name:"World",url:"#news/world",id:203},{name:"Sport",url:"#news/sport",id:204},{name:"Business",url:"#news/business",id:205},{name:"Latest",url:"#news/latest",id:201},{name:"National",url:"#news/national",id:202},{name:"World",url:"#news/world",id:203},{name:"Sport",url:"#news/sport",id:204},{name:"Business",url:"#news/business",id:205}],dealsSections:[{name:"Expirience",url:"#deals/expirience",id:501},{name:"Goods",url:"#deals/goods",id:502},{name:"Travel",url:"#deals/travel",id:503},{name:"Vine",url:"#deals/vine",id:504}],setSection:function(c,d,e){a.section=this.getSection(c,this.sections),e&&e.length>0?(a.subSection=this.getSection(d,e),a.subSection||b.path("/"+c.toLowerCase()+"/"+e[0].name.toLowerCase()),a.subSections=e):a.subSection=null},getSection:function(a,b){for(var c="",d=0;d<b.length;d++){var e=b[d];if(e.name.toLowerCase()==a.toLowerCase()){c=e;break}}return c},setCity:function(b){a.city=b,c.city=b}}}]).factory("authInterceptor",["$rootScope","$q","$window",function(a,b,c){return{request:function(a){return a.headers=a.headers||{},c.sessionStorage.token&&(a.headers.Authorization="Bearer "+c.sessionStorage.token),a},responseError:function(a){return 401===a.status,b.reject(a)}}}]),angular.module("digestApp").service("F00",["$rootScope","$location","$cookies","$window",function(a,b,c,d){var e=0,f="";this.setScrollY=function(){e=d.scrollY,f=b.path()},this.scrollToY=function(){f==b.path()?setTimeout(function(){window.scroll(0,e),e=0},100):e=0},this.getLocation=function(){return f}}]);var isMobile=!1,carousel;$(document).ready(function(){function a(){return $(".navBtn").is(":visible")}isMobile=a(),FastClick.attach(document.body),$(window).resize(function(){isMobile=a()}),$(".navBtn").on("click",function(){carousel.open(),console.log("OP")}),$(".navigation .menuItemBox a").on("click",function(){}),$("#weather, #backClick").on("click",function(){$(".content").addClass("content_animation"),$(".nav_wrapper").toggleClass("nav_wrapper_expand"),$(".navigation2").toggleClass("navigation2_open"),$(".navigation").toggleClass("navigation_closed"),$(".content_animation").toggleClass("content_moved")})}),angular.module("digestApp").directive("slidemenu",function(){return{templateUrl:"views/menu.html",restrict:"A",controller:"MenuCtrl"}});