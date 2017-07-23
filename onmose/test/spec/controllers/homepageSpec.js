/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: HomePageCtrl', function () {

    // load the controller's module
    beforeEach(module('onmoseApp.controllers.HomePageCtrl'));

    var HomePageCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      HomePageCtrl = $controller('HomePageCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of testData to the scope', function () {
      expect(HomePageCtrl.testData).toBe(0);
    });
  });
});
