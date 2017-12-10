'use strict';

describe('Controller: NewtransCtrl', function () {

  // load the controller's module
  beforeEach(module('protoApp'));

  var NewtransCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewtransCtrl = $controller('NewtransCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewtransCtrl.awesomeThings.length).toBe(3);
  });
});
