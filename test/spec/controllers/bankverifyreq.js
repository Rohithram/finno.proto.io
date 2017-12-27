'use strict';

describe('Controller: BankverifyreqCtrl', function () {

  // load the controller's module
  beforeEach(module('protoApp'));

  var BankverifyreqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BankverifyreqCtrl = $controller('BankverifyreqCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BankverifyreqCtrl.awesomeThings.length).toBe(3);
  });
});
