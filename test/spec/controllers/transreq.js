'use strict';

describe('Controller: TransreqCtrl', function () {

  // load the controller's module
  beforeEach(module('protoApp'));

  var TransreqCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransreqCtrl = $controller('TransreqCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TransreqCtrl.awesomeThings.length).toBe(3);
  });
});
