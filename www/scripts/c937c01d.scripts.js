"use strict";function url_base64_decode(a){var b=a.replace("-","+").replace("_","/");switch(b.length%4){case 0:break;case 2:b+="==";break;case 3:b+="=";break;default:throw"Illegal base64url string!"}return window.atob(b)}angular.module("digestApp",["ngRoute","ngSanitize","ngCookies","ngCordova.plugins.device"]).config(["$routeProvider","$httpProvider",function(a){console.log("test"),a.when("/start",{templateUrl:"views/start.html",controller:"StartCtrl"}),a.when("/news/:section",{templateUrl:"views/news.html",controller:"NewsCtrl"}),a.otherwise({redirectTo:"/start"})}]),angular.module("digestApp").controller("StartCtrl",["$rootScope","$scope","SettingsData",function(a){a.$on("windowResize",function(){})}]),angular.module("digestApp").controller("ConfigCtrl",["$rootScope","$scope","$element","SettingsData","$cordovaDevice",function(a,b,c,d,e){FastClick.attach(document.body),void 0==localStorage.configdata&&(console.log("dataNotfound"),localStorage.configdata=JSON.stringify(d.configData)),d.configData=JSON.parse(localStorage.configdata),alert(e.getVersion()),d.configData.darkTheme&&$("body").addClass("dark"),console.log(d.configData),d.isMobile=c.is(":visible"),$(window).resize(function(){d.windowHeight=window.innerHeight,d.scrollHeight=window.innerHeight-60,a.$broadcast("windowResize")}),console.log(d)}]),angular.module("digestApp").controller("HeaderCtrl",["$rootScope","$scope","SettingsData",function(a,b,c){b.section=c.selectedSection,a.$on("sectionChange",function(){b.section=c.selectedSection}),b.navBtnClick=function(){a.$broadcast("openNavigation")},b.settingsBtnClick=function(){a.$broadcast("openSettings")}}]),angular.module("digestApp").controller("ContentCtrl",["$rootScope","$scope","$element","SettingsData",function(a,b,c,d){console.log(d.scrollHeight),c.css("height",d.scrollHeight),b.$on("windowResize",function(){c.css("height",d.scrollHeight)})}]),angular.module("digestApp").controller("BackDropCtrl",["$rootScope","$scope","$element","SettingsData",function(a,b,c){function d(b){b.gesture.preventDefault(),"release"==b.type?(f&&(f=!1,a.$broadcast("closeSettings")),c.removeClass("op0")):"touch"==b.type&&e&&(e=!1,a.$broadcast("closeNavigation"),c.addClass("animated fadeOutOpacity").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){c.removeClass("op1"),c.removeClass("animated fadeOutOpacity")}))}var e=!1,f=!1;a.$on("openNavigation",function(){e=!0;var a=function(){c.removeClass("animated fadeInOpacity")};c.addClass("op0 op1"),c.addClass("animated fadeInOpacity").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",a)});var g=Hammer(c[0],{dragLockToAxis:!0});g.on("touch release  dragleft dragright",d),a.$on("openSettings",function(){f=!0,c.addClass("op0")}),a.$on("removeBackdrop",function(){e?c.addClass("animated fadeOutOpacity").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){c.removeClass("op0 op1 animated fadeInOpacity fadeOutOpacity")}):c.removeClass("op0 op1 animated fadeInOpacity fadeOutOpacity"),e=f=!1})}]),angular.module("digestApp").controller("NavCtrl",["$rootScope","$scope","$element","$location","SettingsData",function(a,b,c,d,e){b.sections=e.sections,b.selectedIndex=e.selectedSection.id,b.parentIndex=0,b.selectSection=function(c){b.parentIndex=""==c.location&&c.subSections&&b.parentIndex!=c.id?c.id:c.parent,""!=c.location&&(e.selectedSection=c,b.selectedIndex=c.id,window.location=c.location,a.$broadcast("sectionChange"),f(),a.$broadcast("removeBackdrop"))},a.$on("openNavigation",function(){var a=function(){c.addClass("newnav_open"),c.removeClass("animated fadeInLeftBig")};c.addClass("animated fadeInLeftBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",a)});var f=function(){var a=function(){c.removeClass("animated fadeOutLeftBig newnav_open")};c.addClass("animated fadeOutLeftBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",a)};a.$on("closeNavigation",f);var g=function(a){$("#navScroll")[0].clientHeight>=$("#navScroll")[0].scrollHeight&&a.preventDefault()};if($("#navScroll").bind("touchmove",g),e.isMobile){var h=Math.min(e.windowWidth,e.windowHeight);c.css("width",.8*h)}$("#navScroll").css("height",e.scrollHeight),b.$on("windowResize",function(){$("#navScroll").css("height",e.scrollHeight)})}]),angular.module("digestApp").controller("TopicCtrl",["$rootScope","$scope","$element","$timeout","SettingsData",function(a,b,c,d,e){function f(a){$("#topicBody")[0].clientHeight>=$("#topicBody")[0].scrollHeight&&a.gesture.preventDefault()}b.selectedTopic=e.selectedTopic,$("#topicBody").css("height",e.scrollHeight),b.$on("windowResize",function(){$("#topicBody").css("height",e.scrollHeight)}),a.$on("openTopic",function(){b.selectedTopic=e.selectedTopic,console.log(b.selectedTopic);var a=function(){c.addClass("top1"),c.removeClass("animated fadeInRightBig")};c.addClass("top01"),setTimeout(function(){c.addClass("animated fadeInRightBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",a)},0)}),b.closemodal=function(){var a=function(){c.removeClass("top01 top1"),c.removeClass("animated fadeOutRightBig")};c.addClass("animated fadeOutRightBig").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",a)};var g=Hammer($("#topicBody")[0],{dragLockToAxis:!0});g.on("dragleft dragright dragup drugdown swipeleft swiperight",f)}]),angular.module("digestApp").controller("SettingsCtrl",["$rootScope","$scope","$element","SettingsData",function(a,b,c,d){function e(){var b=function(){c.removeClass("animated fadeOut"),c.css({display:"none",opacity:"0"}),a.$broadcast("removeBackdrop")};c.addClass("animated fadeOut").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",b)}b.changeLayout=function(b){a.$broadcast("changeLayout",{layout:b}),e()},b.isDarkTheme=d.configData.darkTheme,b.toggleTheme=function(){b.isDarkTheme=d.configData.darkTheme=!b.isDarkTheme,localStorage.configdata=JSON.stringify(d.configData),$("body").toggleClass("dark"),d.configData=JSON.parse(localStorage.configdata),e()},b.selectedCity=d.configData.selectedCity,b.cities=d.cities,b.changeCity=function(){d.configData.selectedCity=b.selectedCity,localStorage.configdata=JSON.stringify(d.configData),e()},a.$on("openSettings",function(){var a=function(){c.removeClass("animated fadeIn"),c.css({display:"block",opacity:"1"})};c.css({display:"block",opacity:"0"}),c.addClass("animated fadeIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",a)}),a.$on("closeSettings",e);var f=function(a){c[0].clientHeight>=c[0].scrollHeight&&a.preventDefault()};c.bind("touchmove",f)}]),angular.module("digestApp").controller("NewsCtrl",["$scope","$rootScope","$routeParams","SettingsData","F1",function(a,b,c,d,e){var f=function(b){a.items=b,d.currentCollection=b};e.getData().success(f),a.isMobile=d.isMobile,a.layout="list",a.showItem=!1,a.topicClick=function(a){console.log(a),d.selectedTopic=a,b.$broadcast("openTopic")},b.$on("changeLayout",function(b,c){console.log(c.layout),a.layout=c.layout})}]),angular.module("digestApp").directive("header",function(){return{restrict:"A",templateUrl:"views/header.html"}}).directive("config",function(){return{restrict:"E",template:'<div id="xsCheck" class="visible-xs"></div>',replace:!0}}).directive("backdrop",function(){return{restrict:"E",template:'<div id="back" class="op01" style = "position:absolute;background:#333333; width:100%; height:100%; top:0; left:0"></div>',replace:!0}}).directive("navigation",function(){return{restrict:"A",templateUrl:"views/nav.html"}}).directive("topic",function(){return{restrict:"A",templateUrl:"views/topic.html"}}).directive("settings",function(){return{restrict:"A",templateUrl:"views/settings.html"}}),angular.module("digestApp").factory("SettingsData",["$rootScope","$location","$cookies","$window",function(){return{isMobile:!1,isAndroid:navigator.userAgent.indexOf("Android")>-1,windowHeight:window.innerHeight,windowWidth:window.innerWidth,scrollHeight:window.innerHeight-55,selectedSection:{name:"start"},sections:[{id:1,name:"Start",location:"#/start",parent:0},{id:2,name:"Wheather",location:"#/wheather",parent:0},{id:3,name:"News",location:"",parent:0,subSections:[{id:101,name:"National",location:"#/news/national",parent:3},{id:102,name:"World",location:"#/news/world",parent:3},{id:103,name:"Sport",location:"#/news/sport",parent:3},{id:104,name:"Business",location:"#/news/business",parent:3},{id:105,name:"Politics",location:"#/news/politics",parent:3}]},{id:4,name:"Horoscope",location:"#/horoscope",parent:0},{id:5,name:"Events",location:"#/events",parent:0},{id:6,name:"Grab a seat",location:"#/events",parent:0},{id:7,name:"Deals",location:"",parent:0,subSections:[{id:701,name:"GrabOne",location:"#/deals/grabone",parent:7},{id:702,name:"Treatme",location:"#/deals/treatme",parent:7},{id:703,name:"1 day",location:"#/deals/1day",parent:7},{id:704,name:"Red alert",location:"#/deals/redalert",parent:7}]},{id:8,name:"TV guide",location:"#/tv-guide",parent:0}],selectedTopic:{},currentCollection:[],configData:{darkTheme:!1,selectedCity:"Auckland",selectedHoroscopeSign:"1",sections:[{id:101,layout:"list"}]},cities:["Auckland","Wellington","Chrischir","Hamilton"],horoscopeSigns:["1","2","3","4","5","6","7"]}}]),angular.module("digestApp").factory("F1",["$http","$rootScope","$cacheFactory",function(a,b){return{getData:function(){return a.get("https://nzdigest.s3.amazonaws.com/national.json?t="+(new Date).getTime())},getDatatopic:function(c){var d=b.subSection?b.subSection.name:"",e={s1:b.section.name,s2:d,c:b.city},f=c?c:"";return a.post("http://nzdigest.co.nz/app/datatopic",{s:JSON.stringify(e),d:JSON.stringify(f)})},getWeather:function(c){var d=b.subSection?b.subSection.name:"",e={s1:b.section.name,s2:d,c:b.city},f=c?c:"";return a.post("http://nzdigest.co.nz/app/dataweather",{s:JSON.stringify(e),d:JSON.stringify(f)})}}}]),angular.module("digestApp").factory("F2",["$cacheFactory",function(a){return a("a")}]),angular.module("digestApp").filter("gridfilter",function(){return function(a,b){if(!b)return a;var c=[];return b=b.toLowerCase(),angular.forEach(a,function(a,d){0==b?d%2==0&&c.push(a):d%2!=0&&c.push(a)}),c}}),angular.module("digestApp").directive("digestApp",["$timeout",function(){return{restrict:"A",transclude:!0,replace:!0,template:"<div ng-transclude></div>",link:function(a,b,c){addthis.init(),addthis.toolbox($(b),{},{url:c.url,title:"My Awesome Blog",description:"Checkout this awesome post on blog.me"})}}}]),angular.module("digestApp").directive("twt",["$timeout","$http","$window",function(a,b,c){return{scope:{shares:"="},transclude:!0,template:"<div ng-transclude></div>",link:function(d,e,f){f.shares&&b.get("https://api.facebook.com/method/links.getStats?urls="+f.url+"&format=json").success(function(a){d.shares=a[0].share_count}).error(function(){d.shares=0}),a(function(){e.bind("click",function(){var a=f.name,b=f.url,d="nzdigest",e=c.open("https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fnzdigest.co.nz%2F&text="+a+"&url="+b+"&via="+d+"&tw_p=tweetbutton","Share on Twitter","width=550,height=450");e.focus()})})}}}]),angular.module("digestApp").directive("topicmodal",function(){return{restrict:"E",templateUrl:"views/topicmodal.html"}}),angular.module("digestApp").controller("HomeCtrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Home"),location="/#/news/national"}]),angular.module("digestApp").controller("EventsCtrl",["$scope","$rootScope","$routeParams","$timeout","$anchorScroll","F00","F0","F1","F2",function(a,b,c,d,e,f,g,h,i){function j(){var a="Events_"+b.city,c=i.get(a),d=function(b){$(".lodingAlert").hide(),k(b),i.put(a,{data:b,time:(new Date).getTime()})};c&&c.time>(new Date).getTime()-3e5?k(c.data):(h.getData().success(d),$(".lodingAlert").show())}function k(b){a.items=b,f.scrollToY(),d(function(){l()},300)}function l(){$(".lazy").lazyload({threshold:1e3,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}),$(".lazy2").lazyload({threshold:1e3,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})}function m(){a.selctedTopicItem=a.items[r],a.layout="item",e()}function n(){a.layout=o,f.scrollToY()}g.setSection("Events"),e(),j();var o;if(a.layout=o="list",localStorage.getItem("settings")){var p=localStorage.getItem("settings");if(p){var q=JSON.parse(p);a.layout=o="undefined"==typeof q.settings.events?"list":q.settings.events.layout}}a.$on("changeLayoutBroadcast",function(b,c){var e=c.message;if(a.layout!=e){try{localStorage.setItem("settings",JSON.stringify({settings:{events:{layout:e}}}))}catch(f){console.log(f)}a.layout=o=e,d(function(){l()},50)}}),a.$on("cityChangedBroadcast",function(){j()});var r=0;a.topicClick=function(a){isMobile&&($(".navBtn").hide(),$(".backBtn").show()),f.setScrollY(),r=a,m()},a.prevTopic=function(){r>0&&(r--,m())},a.nextTopic=function(){r<a.items.length-1&&(r++,m())},a.backBtnClick=function(){n()},a.$on("goBackBroadcast",function(){n()})}]),angular.module("digestApp").controller("C5Ctrl",["$rootScope","$scope","$http","F1","F0",function(a,b,c,d,e){e.setSection("Grabaseat");var f=function(a){b.items=a.specials.special,b.lowitems=a.lowlist.low};d.getData().success(f)}]),angular.module("digestApp").controller("C6Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0","$routeParams",function(a,b,c,d,e,f,g){f.setSection("Deals",g.section,f.dealsSections);var h=function(a){b.items=a,e(),console.log(b.items)};d.getEvents(b.city.name).success(h),console.log(b.items),b.loadItem=function(a){console.log(a.url)},b.$on("cityChangedBroadcast",function(){d.getEvents().success(h)})}]),angular.module("digestApp").controller("C4Ctrl",["$rootScope","$scope","$routeParams","$http","F1","$anchorScroll","F0","F00","$location",function(a,b,c,d,e,f,g){g.setSection("Weather");var h=function(a){b.data=a};e.getWeather().success(h)}]),angular.module("digestApp").controller("C8Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Exchange rates");var g=function(a){b.items=a};d.getData().success(g)}]),angular.module("digestApp").controller("C7Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0",function(a,b,c,d,e,f){f.setSection("Tv-guide");var g=isMobile?.85:1.8;b.koef=18e3/g,b.days=[0,1,2,3,4,5,6],b.times=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];var h=function(a){b.items=a.Channels};d.getData().success(h),b.dayClick=function(a){var b={index:a};d.getData(b).success(h)}}]),angular.module("digestApp").controller("C9Ctrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("digestApp").factory("F0",["$rootScope","$location","$cookies",function(a,b,c){return{citiesArray:["Auckland","Wellington","Christchurch"],sections:[{name:"Home",id:1,cityRelated:!1},{name:"News",id:2,cityRelated:!1},{name:"Weather",id:3,cityRelated:!0},{name:"Events",id:4,cityRelated:!0},{name:"Deals",id:5,cityRelated:!0},{name:"Grabaseat",id:6,cityRelated:!1},{name:"Exchange rates",id:7,cityRelated:!1},{name:"Tv-guide",id:8,cityRelated:!1},{name:"Cinema",id:9,cityRelated:!1},{name:"Catalog",id:10,cityRelated:!1},{name:"Property",id:11,cityRelated:!1}],newsSections:[{name:"Latest",url:"#news/latest",id:201},{name:"National",url:"#news/national",id:202},{name:"World",url:"#news/world",id:203},{name:"Sport",url:"#news/sport",id:204},{name:"Business",url:"#news/business",id:205},{name:"Latest",url:"#news/latest",id:201},{name:"National",url:"#news/national",id:202},{name:"World",url:"#news/world",id:203},{name:"Sport",url:"#news/sport",id:204},{name:"Business",url:"#news/business",id:205}],dealsSections:[{name:"Expirience",url:"#deals/expirience",id:501},{name:"Goods",url:"#deals/goods",id:502},{name:"Travel",url:"#deals/travel",id:503},{name:"Vine",url:"#deals/vine",id:504}],setSection:function(c,d,e){a.section=this.getSection(c,this.sections),e&&e.length>0?(a.subSection=this.getSection(d,e),a.subSection||b.path("/"+c.toLowerCase()+"/"+e[0].name.toLowerCase()),a.subSections=e):a.subSection=null},getSection:function(a,b){for(var c="",d=0;d<b.length;d++){var e=b[d];if(e.name.toLowerCase()==a.toLowerCase()){c=e;break}}return c},setCity:function(b){a.city=b,c.city=b}}}]).factory("authInterceptor",["$rootScope","$q","$window",function(a,b,c){return{request:function(a){return a.headers=a.headers||{},c.sessionStorage.token&&(a.headers.Authorization="Bearer "+c.sessionStorage.token),a},responseError:function(a){return 401===a.status,b.reject(a)}}}]),angular.module("digestApp").service("F00",["$rootScope","$location","$cookies","$window",function(a,b,c,d){var e=0,f="";this.setScrollY=function(){e=d.scrollY,f=b.path()},this.scrollToY=function(){f==b.path()?setTimeout(function(){window.scroll(0,e),e=0},150):e=0},this.getLocation=function(){return f}}]);var isMobile=!1,contentHeight=100,isAndroid=!1;$(document).ready(function(){function a(){return $("#xsCheck").is(":visible")}function b(){contentHeight=window.innerHeight-65,console.log(contentHeight),$("#test").height(contentHeight),console.log($("#test")),console.log($(".modal-body"))}console.log("document ready"),isMobile=a(),isAndroid=navigator.userAgent.indexOf("Android")>-1,console.log("ismobile>>"+isMobile),b(),FastClick.attach(document.body),$(window).resize(function(){isMobile=a(),b()}),$("#menu").metisMenu()}),angular.module("digestApp").controller("C10Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0","$window",function(a,b,c,d,e,f,g){b.login=function(){console.log(b.customer),c.post("http://nzdigest.co.nz/app/index.php?route=appaccount/login",{email:b.customer.email,password:b.customer.password}).success(function(a){g.sessionStorage.token=a})},b.openLogin=function(a){g.open("http://nzdigest.co.nz/app/index.php?route=appaccount/sociallogin&provider="+a,"","width=800,height=600")};var h=function(a){console.log(a)};b.getUser=function(){console.log(token),d.getUser(token).success(h)}}]),angular.module("digestApp").controller("C11Ctrl",["$rootScope","$scope","$http","F1","$anchorScroll","F0","$window",function(a,b,c,d,e,f,g){b.register=function(){console.log(b.customer),c.post("http://nzdigest.co.nz/app/index.php?route=appaccount/account",{action:"register",data:b.customer})},b.openLogin=function(a){g.open("http://nzdigest.co.nz/app/index.php?route=appaccount/sociallogin&provider="+a,"","width=800,height=600")};var h=function(a){console.log(a)};b.getUser=function(){console.log(token),APIFactory.getUser(token).success(h)}}]),angular.module("digestApp").controller("C12Ctrl",["$rootScope","$scope","$routeParams","$http","F1","$anchorScroll","F0","F00","$location",function(a,b,c,d,e,f,g,h,i){var j=c.section;$(".navBtn").hide(),console.log(c),""==g.getSection(j,g.sections);var k=c.id;g.setSection(j);var l=function(a){b.topic=a},m={tId:k};e.getDatatopic(m).success(l),b.backBtnVisible=h.getLocation(),b.backBtnClick=function(){i.path(h.getLocation())}}]);