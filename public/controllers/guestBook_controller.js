(function() {
  "use strict";

  angular
      .module("statesApp")
      .controller("GuestBookController", GuestBookController);

  GuestBookController.$inject = ["$state", "userDataService", "$log", "$http"];

  function GuestBookController($state, userDataService, $log, $http) {
    var vm = this;

    vm.user = userDataService;

    vm.messages = [];

    vm.newMessage = {
      phone: "",
      message: ""
    };

    vm.editMessage = {
      phone: "",
      message: ""
    }

    vm.getMessages     = getMessages;
    vm.postMessage      = postMessage;
    vm.resetEditForm = resetEditForm;

    //Read messages
    function getMessages() {
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

    function postMessage() {
      var message = {"phone": vm.newPhone, "message": vm.newMessage};
      $http({
          url: '/write',
          method: 'POST',
          data: message})
      .success(function(data) {

      });
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

    function resetEditForm() {
      vm.editEntry = {
        phone: "",
        message: ""
      };
    };

  }

})();

