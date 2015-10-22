describe('AddressBookController', function() {
  beforeEach(module('AddressBook'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('AddressBookController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

});
