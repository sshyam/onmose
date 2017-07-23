/*jshint unused: vars */
define(['angular', 'controllers/homepage/homepage', 'controllers/about/about']/*deps*/, function (angular, HomePageCtrl, AboutCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name onmoseApp
   * @description
   * # onmoseApp
   *
   * Main module of the application.
   */
  return angular
    .module('onmoseApp', ['onmoseApp.controllers.HomePageCtrl',
'onmoseApp.controllers.AboutCtrl',
/*angJSDeps*/'ngCookies','ngResource','ngSanitize','ngRoute','ngAnimate','ngTouch'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/homepage/homepage.tpl.html',
          controller: 'HomePageCtrl',
          controllerAs: 'main'
        })
		.when('/about', {
          templateUrl: 'views/about/about.tpl.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
