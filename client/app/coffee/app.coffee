'use strict';

homeApp = angular.module 'homeApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'myDirectives']

homeApp.run ($rootScope)->
  $rootScope.isSignin = false
  null

homeApp.config ($routeProvider) ->
    $routeProvider
      .when '/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      }
      .when '/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      }
      .otherwise
        redirectTo: '/'
