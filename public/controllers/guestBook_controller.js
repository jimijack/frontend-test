(function() {
  "use strict";

  angular
      .module("statesApp")
      .controller("GuestBookController", GuestBookController);

  //GuestBookController.$inject = ["Message", "$state", "userDataService", "$log", "$http"];
  GuestBookController.$inject = ["Message", "$http"]

  function GuestBookController(Message, $http) {
    var vm = this;

    //vm.user = userDataService;

    //vm.messages = [];
//
    //vm.newMessage = {
    //  phone: "",
    //  message: ""
    //};
//
    //vm.editMessage = {
    //  phone: "",
    //  message: ""
    //}

    //vm.getMessages     = getMessages;
    //vm.postMessage      = postMessage;
    //vm.resetEditForm = resetEditForm;

    function resetEditForm() {
      vm.editEntry = {
        phone: "",
        message: ""
      };
    };

    //Read messages
    vm.getMessages = function() {
      Message.query()
       .$promise.then(function (all) {
         vm.messages = all;
       });
    };
      //$http.get('/read').then(function(response) {
      //  vm.entries = response.data;
      //}, function(errRes) {
      //  console.error('Error finding guestbook entries!', errRes);
      //});

    vm.getMessages();

    // Add message click handler
    vm.postMessage = function() {
      var message = {"phone": vm.newPhone, "message": vm.newMessage};
      $http({
          url: '/write',
          method: 'POST',
          data: message})
      .success(function(data) {})
      .error(function(data) {
          vm.loginerror = "Error in server!";
      });
      //read message again for update
      vm.getMessages();

      //$http.post('/write', vm.newEntry)
      //  .then(getEntries)
      //  .then(function(response) {
      //    vm.newEntry = {
      //      phone: "",
      //      message: ""
      //    };
      //  });
    };

    vm.deleteMessage = function(message) {
      vm.messages = vm.messages.filter(function(m) { return (m.id != message.id); });
      message.$delete();
    };

    //function updateMessage(id) {
    //  $http.put({
    //      url: '/write' + id,
    //      method: 'PUT',
    //      vm.editMessage})
//
    //  .then(function(response) {
    //    vm.editMessage = {
    //      phone: "",
    //      message: ""
    //    };
    //  }, function(errRes) {
    //    console.log('Error editing guestbook entry!', errRes);
    //  }).then(getMessages);
    //};

  };

})();

