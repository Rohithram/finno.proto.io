'use strict';

describe('Controller: FinancereqCtrl', function () {

  // load the controller's module
  beforeEach(module('protoApp'));

  var FinancereqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FinancereqCtrl = $controller('FinancereqCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FinancereqCtrl.awesomeThings.length).toBe(3);
  });
});
