'use strict';

angular.module('photoCardsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/preview/:cardid', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewCtrl'
      })
      .when('/templates', {
        templateUrl: 'views/templates.html',
        controller: 'TemplatesCtrl'
      })
      .when('/editor', {
        templateUrl: 'views/editor.html',
        controller: 'EditorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    //  $locationProvider.html5Mode(true);
  });

