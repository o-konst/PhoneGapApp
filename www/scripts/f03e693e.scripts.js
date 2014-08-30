"use strict";function url_base64_decode(a){var b=a.replace("-","+").replace("_","/");switch(b.length%4){case 0:break;case 2:b+="==";break;case 3:b+="=";break;default:throw"Illegal base64url string!"}return window.atob(b)}angular.module("digestApp",["ngRoute","ngSanitize","ngCookies"]).config(["$routeProvider","$httpProvider",function(a){console.log("test"),a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}),a.when("/news/:section",{templateUrl:"views/news.html",controller:"NewsCtrl"}),a.when("/events",{templateUrl:"views/events.html",controller:"EventsCtrl"}),a.when("/weather",{templateUrl:"views/a4.html",controller:"C4Ctrl"}),a.when("/grabaseat",{templateUrl:"views/a5.html",controller:"C5Ctrl"}),a.when("/deals/:section",{templateUrl:"views/a6.html",controller:"C6Ctrl"}),a.when("/tv-guide",{templateUrl:"views/a7.html",controller:"C7Ctrl"}),a.when("/exchange-rates",{templateUrl:"views/a8.html",controller:"C8Ctrl"}),a.when("/property",{templateUrl:"views/a9.html",controller:"C9Ctrl"}),a.when("/login",{templateUrl:"views/a10.html",controller:"C10Ctrl"}),a.when("/account",{templateUrl:"views/a11.html",controller:"C11Ctrl"}),a.when("/topic/:section/:id",{templateUrl:"views/a12.html",controller:"C12Ctrl"}),a.otherwise({redirectTo:"/news/national"})}]),angular.module("digestApp").directive("header",function(){return{restrict:"E",templateUrl:"views/header.html"}}),angular.module("digestApp").directive("navigation",function(){return{restrict:"AE",templateUrl:"views/nav.html"}}),angular.module("digestApp").directive("topicmodal",function(){return{restrict:"E",templateUrl:"views/topicmodal.html"}}),angular.module("digestApp").controller("HomeCtrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Home"),location="/#/news/national"}]),angular.module("digestApp").controller("NewsCtrl",["$scope","$rootScope","$routeParams","$timeout","$anchorScroll","F00","F0","F1","F2",function(a,b,c,d,e,f,g,h,i){function j(){var a="News_"+c.section,b=i.get(a),e=function(b){$(".lodingAlert").hide(),k(b),i.put(a,{data:b,time:(new Date).getTime()})};b&&b.time>(new Date).getTime()-3e7?k(b.data):(console.log("test"),d(function(){h.getData().success(e)},100),$(".lodingAlert").show())}function k(b){a.items=b,d(function(){l()},500)}function l(){$(".lazy").lazyload({threshold:1e3,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",container:$("#test"),effect:"fadeIn"}),$(".lazy2").lazyload({threshold:500,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})}function m(){b.selctedTopicItem=a.items[r]}function n(){a.layout=o,f.scrollToY()}console.log("NewsCtrl"),console.log(isMobile),a.isMobile=isMobile,g.setSection("News",c.section,g.newsSections),e(),j(),a.styleClass=function(){return"split"!=a.layout?isAndroid?{height:"100%","overflow-y":"auto"}:"":{height:contentHeight,"overflow-y":"scroll","overflow-x":"hidden"}},a.ccc=["a","b","c","a11","b22","c33"],a.showItem=!1;var o;if(a.layout=o="list",a.listLayout=!0,localStorage.getItem("settings")){var p=localStorage.getItem("settings");if(p){var q=JSON.parse(p);console.log(typeof q.settings.news),a.layout=o="undefined"==typeof q.settings.news?"list":q.settings.news.layout,a.listLayout="list"==a.layout}}a.$on("changeLayoutBroadcast",function(b,c){var d=c.message;if(a.layout!=d){try{localStorage.setItem("settings",JSON.stringify({settings:{news:{layout:d}}}))}catch(e){console.log(e)}a.layout=o=d,a.listLayout="list"==a.layout}});var r=0;a.topicClick=function(a){b.selctedTopicItem=a,console.log("open modal"),$("#myModal").addClass("modalshow animated fadeInRightBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated fadeInRightBig")})},a.prevTopic=function(){r>0&&(r--,m())},a.nextTopic=function(){r<a.items.length-1&&(r++,m())},a.backBtnClick=function(){n()},a.$on("goBackBroadcast",function(){n()})}]),angular.module("digestApp").controller("EventsCtrl",["$scope","$rootScope","$routeParams","$timeout","$anchorScroll","F00","F0","F1","F2",function(a,b,c,d,e,f,g,h,i){function j(){var a="Events_"+b.city,c=i.get(a),d=function(b){$(".lodingAlert").hide(),k(b),i.put(a,{data:b,time:(new Date).getTime()})};c&&c.time>(new Date).getTime()-3e5?k(c.data):(h.getData().success(d),$(".lodingAlert").show())}function k(b){a.items=b,f.scrollToY(),d(function(){l()},300)}function l(){$(".lazy").lazyload({threshold:1e3,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}),$(".lazy2").lazyload({threshold:1e3,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})}function m(){a.selctedTopicItem=a.items[r],a.layout="item",e()}function n(){a.layout=o,f.scrollToY()}g.setSection("Events"),e(),j();var o;if(a.layout=o="list",localStorage.getItem("settings")){var p=localStorage.getItem("settings");if(p){var q=JSON.parse(p);a.layout=o="undefined"==typeof q.settings.events?"list":q.settings.events.layout}}a.$on("changeLayoutBroadcast",function(b,c){var e=c.message;if(a.layout!=e){try{localStorage.setItem("settings",JSON.stringify({settings:{events:{layout:e}}}))}catch(f){console.log(f)}a.layout=o=e,d(function(){l()},50)}}),a.$on("cityChangedBroadcast",function(){j()});var r=0;a.topicClick=function(a){isMobile&&($(".navBtn").hide(),$(".backBtn").show()),f.setScrollY(),r=a,m()},a.prevTopic=function(){r>0&&(r--,m())},a.nextTopic=function(){r<a.items.length-1&&(r++,m())},a.backBtnClick=function(){n()},a.$on("goBackBroadcast",function(){n()})}]),angular.module("digestApp").controller("C5Ctrl",["$rootScope","$scope","$http","F1","F0",function(a,b,c,d,e){e.setSection("Grabaseat");var f=function(a){b.items=a.specials.special,b.lowitems=a.lowlist.low};d.getData().success(f)}]),angular.module("digestApp").controller("C6Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0","$routeParams",function(a,b,c,d,e,f,g){f.setSection("Deals",g.section,f.dealsSections);var h=function(a){b.items=a,e(),console.log(b.items)};d.getEvents(b.city.name).success(h),console.log(b.items),b.loadItem=function(a){console.log(a.url)},b.$on("cityChangedBroadcast",function(){d.getEvents().success(h)})}]),angular.module("digestApp").controller("C4Ctrl",["$rootScope","$scope","$routeParams","$http","F1","$anchorScroll","F0","F00","$location",function(a,b,c,d,e,f,g){g.setSection("Weather");var h=function(a){b.data=a};e.getWeather().success(h)}]),angular.module("digestApp").controller("C8Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Exchange rates");var g=function(a){b.items=a};d.getData().success(g)}]),angular.module("digestApp").controller("C7Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Tv-guide");var g=isMobile?.85:1.8;b.koef=18e3/g,b.days=[0,1,2,3,4,5,6],b.times=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];var h=function(a){b.items=a.Channels};d.getData().success(h),b.dayClick=function(a){var b={index:a};d.getData(b).success(h)}}]),angular.module("digestApp").controller("C9Ctrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("digestApp").factory("F1",["$http","$rootScope","$cacheFactory",function(a,b){return{getData:function(c){{var d=b.subSection?b.subSection.name:"";({s1:b.section.name,s2:d,c:b.city})}return a.get("https://nzdigest.s3.amazonaws.com/national.json?t="+(new Date).getTime())},getDatatopic:function(c){var d=b.subSection?b.subSection.name:"",e={s1:b.section.name,s2:d,c:b.city},f=c?c:"";return a.post("http://nzdigest.co.nz/app/datatopic",{s:JSON.stringify(e),d:JSON.stringify(f)})},getWeather:function(c){var d=b.subSection?b.subSection.name:"",e={s1:b.section.name,s2:d,c:b.city},f=c?c:"";return a.post("http://nzdigest.co.nz/app/dataweather",{s:JSON.stringify(e),d:JSON.stringify(f)})}}}]),angular.module("digestApp").factory("F2",["$cacheFactory",function(a){return a("a")}]),angular.module("digestApp").filter("gridfilter",function(){return function(a,b){if(!b)return a;var c=[];return b=b.toLowerCase(),angular.forEach(a,function(a,d){0==b?d%2==0&&c.push(a):d%2!=0&&c.push(a)}),c}}),angular.module("digestApp").directive("digestApp",["$timeout",function(){return{restrict:"A",transclude:!0,replace:!0,template:"<div ng-transclude></div>",link:function(a,b,c){addthis.init(),addthis.toolbox($(b),{},{url:c.url,title:"My Awesome Blog",description:"Checkout this awesome post on blog.me"})}}}]),angular.module("digestApp").directive("twt",["$timeout","$http","$window",function(a,b,c){return{scope:{shares:"="},transclude:!0,template:"<div ng-transclude></div>",link:function(d,e,f){f.shares&&b.get("https://api.facebook.com/method/links.getStats?urls="+f.url+"&format=json").success(function(a){d.shares=a[0].share_count}).error(function(){d.shares=0}),a(function(){e.bind("click",function(){var a=f.name,b=f.url,d="nzdigest",e=c.open("https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnzdigest.co.nz%2F&text="+a+"&url="+b+"&via="+d+"&tw_p=tweetbutton","Share on Twitter","width=550,height=450");e.focus()})})}}}]),angular.module("digestApp").controller("HeaderCtrl",["$rootScope","$scope","F00","F0","$cookies","$location",function(a,b,c,d,e){b.cities=d.citiesArray;var f=e.city?e.city:b.cities[0];d.setCity(f),b.selectCity=function(c){d.setCity(b.cities[c]),a.$broadcast("cityChangedBroadcast",{message:a.city})},b.backBtnClick=function(){$(".navBtn").show(),$(".backBtn").hide(),b.$emit("goBack")},b.navOpen=function(){a.$broadcast("gopenNavBroadcast",{message:"open"})},b.settingsBtnClick=function(){$("#settingsModal").modal()}}]),angular.module("digestApp").controller("NavCtrl",["$rootScope","$scope","F0","$timeout","$location",function(a,b,c,d,e){function f(a){console.log(a.type),a.gesture.preventDefault(),"release"==a.type&&b.navigationToggle()}console.log("NavCtrl"),console.log(isMobile),b.isMobile=isMobile,b.$on("gopenNavBroadcast",function(){b.navigationToggle()});var g=!1;b.navigationToggle=function(){g?$("#nav").addClass("animated outLeftBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated outLeftBig fadeInLeftBig")}):$("#nav").addClass("animated fadeInLeftBig"),$("#overlay").toggleClass("navOverflowShow animated fadeInOpacity"),d(function(){a.showoverlay=!a.showoverlay},0),g=!g},b.selectSection=function(a){isMobile?d(function(){e.path(a)},400):e.path(a)};var h=$("#overlay")[0],i=Hammer(h,{dragLockToAxis:!0});i.on("release dragup dragdown dragleft dragright",f),$("#nav").mouseleave(function(){}),$("#menu").metisMenu()}]),angular.module("digestApp").factory("F0",["$rootScope","$location","$cookies",function(a,b,c){return{citiesArray:["Auckland","Wellington","Christchurch"],sections:[{name:"Home",id:1,cityRelated:!1},{name:"News",id:2,cityRelated:!1},{name:"Weather",id:3,cityRelated:!0},{name:"Events",id:4,cityRelated:!0},{name:"Deals",id:5,cityRelated:!0},{name:"Grabaseat",id:6,cityRelated:!1},{name:"Exchange rates",id:7,cityRelated:!1},{name:"Tv-guide",id:8,cityRelated:!1},{name:"Cinema",id:9,cityRelated:!1},{name:"Catalog",id:10,cityRelated:!1},{name:"Property",id:11,cityRelated:!1}],newsSections:[{name:"Latest",url:"#news/latest",id:201},{name:"National",url:"#news/national",id:202},{name:"World",url:"#news/world",id:203},{name:"Sport",url:"#news/sport",id:204},{name:"Business",url:"#news/business",id:205},{name:"Latest",url:"#news/latest",id:201},{name:"National",url:"#news/national",id:202},{name:"World",url:"#news/world",id:203},{name:"Sport",url:"#news/sport",id:204},{name:"Business",url:"#news/business",id:205}],dealsSections:[{name:"Expirience",url:"#deals/expirience",id:501},{name:"Goods",url:"#deals/goods",id:502},{name:"Travel",url:"#deals/travel",id:503},{name:"Vine",url:"#deals/vine",id:504}],setSection:function(c,d,e){a.section=this.getSection(c,this.sections),e&&e.length>0?(a.subSection=this.getSection(d,e),a.subSection||b.path("/"+c.toLowerCase()+"/"+e[0].name.toLowerCase()),a.subSections=e):a.subSection=null},getSection:function(a,b){for(var c="",d=0;d<b.length;d++){var e=b[d];if(e.name.toLowerCase()==a.toLowerCase()){c=e;break}}return c},setCity:function(b){a.city=b,c.city=b}}}]).factory("authInterceptor",["$rootScope","$q","$window",function(a,b,c){return{request:function(a){return a.headers=a.headers||{},c.sessionStorage.token&&(a.headers.Authorization="Bearer "+c.sessionStorage.token),a},responseError:function(a){return 401===a.status,b.reject(a)}}}]),angular.module("digestApp").service("F00",["$rootScope","$location","$cookies","$window",function(a,b,c,d){var e=0,f="";this.setScrollY=function(){e=d.scrollY,f=b.path()},this.scrollToY=function(){f==b.path()?setTimeout(function(){window.scroll(0,e),e=0},150):e=0},this.getLocation=function(){return f}}]);var isMobile=!1,contentHeight=100,isAndroid=!1;$(document).ready(function(){function a(){return $("#xsCheck").is(":visible")}function b(){contentHeight=window.innerHeight-65,console.log(contentHeight),$("#test").height(contentHeight),console.log($("#test")),console.log($(".modal-body"))}console.log("document ready"),isMobile=a(),isAndroid=navigator.userAgent.indexOf("Android")>-1,console.log("ismobile>>"+isMobile),b(),FastClick.attach(document.body),$(window).resize(function(){isMobile=a(),b()}),$("#menu").metisMenu()}),angular.module("digestApp").controller("C10Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0","$window",function(a,b,c,d,e,f,g){b.login=function(){console.log(b.customer),c.post("http://nzdigest.co.nz/app/index.php?route=appaccount/login",{email:b.customer.email,password:b.customer.password}).success(function(a){g.sessionStorage.token=a})},b.openLogin=function(a){g.open("http://nzdigest.co.nz/app/index.php?route=appaccount/sociallogin&provider="+a,"","width=800,height=600")};var h=function(a){console.log(a)};b.getUser=function(){console.log(token),d.getUser(token).success(h)}}]),angular.module("digestApp").controller("C11Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0","$window",function(a,b,c,d,e,f,g){b.register=function(){console.log(b.customer),c.post("http://nzdigest.co.nz/app/index.php?route=appaccount/account",{action:"register",data:b.customer})},b.openLogin=function(a){g.open("http://nzdigest.co.nz/app/index.php?route=appaccount/sociallogin&provider="+a,"","width=800,height=600")};var h=function(a){console.log(a)};b.getUser=function(){console.log(token),APIFactory.getUser(token).success(h)}}]),angular.module("digestApp").controller("C12Ctrl",["$rootScope","$scope","$routeParams","$http","F1","$anchorScroll","F0","F00","$location",function(a,b,c,d,e,f,g,h,i){var j=c.section;$(".navBtn").hide(),console.log(c),""==g.getSection(j,g.sections);var k=c.id;g.setSection(j);var l=function(a){b.topic=a},m={tId:k};e.getDatatopic(m).success(l),b.backBtnVisible=h.getLocation(),b.backBtnClick=function(){i.path(h.getLocation())}}]),angular.module("digestApp").controller("TopicCtrl",["$rootScope","$scope",function(a,b){b.isMobile=isMobile,$(".topic_modal_body").height(contentHeight-35),console.log("contentHeight >>"+contentHeight),b.linkBtn=function(){console.log("click");window.open("http://test1.ru/iframe.html","_blank","location=no");console.log("afterclick")},b.closemodal=function(){$("#myModal").addClass("animated fadeOutRightBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("animated fadeOutRightBig modalshow")})},b.changeLayout=function(b){a.$broadcast("changeLayoutBroadcast",{message:b})}}]);