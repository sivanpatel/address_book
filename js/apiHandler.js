addressBook.controller('apiHandler', [function() {
$(function() {
  $.getJSON("http://fast-gorge.herokuapp.com/contacts", function(data) {
    var contacts = [];
    contacts.push(data)
  console.log(contacts);
     });

  });
}]);
