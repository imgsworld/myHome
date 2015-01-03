'use strict';
var homeApp;

homeApp = angular.module('homeApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'myDirectives']);

homeApp.run(function($rootScope) {
  $rootScope.isSignin = false;
  return null;
});

homeApp.config(function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainController'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutController'
  }).otherwise({
    redirectTo: '/'
  });
});
