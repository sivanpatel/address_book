addressBook.controller("AddressBookController", [function() {

  var self = this;

  self.contacts = [];

  var getContacts = function(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', url, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        var status = xhr.status;
        if(status == 200) {
          resolve (xhr.response);
        } else {
          reject(status);
        }
      };
      xhr.send();
    });
  };

  getContacts("http://fast-gorge.herokuapp.com/contacts").then(function(data) {
    self.contacts.push(data);
    console.log(self.contacts)
    });

}]);
