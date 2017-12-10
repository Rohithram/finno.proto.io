'use strict';

describe('Controller: VerifytransCtrl', function () {

  // load the controller's module
  beforeEach(module('protoApp'));

  var VerifytransCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VerifytransCtrl = $controller('VerifytransCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VerifytransCtrl.awesomeThings.length).toBe(3);
  });
});
