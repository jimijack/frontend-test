(function() {
  "use strict";

  angular
      .module("statesApp")
      .controller("GuestBookController", GuestBookController);

  GuestBookController.$inject = ["$state", "userDataService", "$log", "$http"];

  function GuestBookController($state, userDataService, $log, $http) {
    var vm = this;

    vm.user = userDataService;

    vm.entries = [];

    vm.newEntry = {
      phone: "",
      message: ""
    };

    vm.editEntry = {
      phone: "",
      message: ""
    }

    vm.getEntries     = getEntries;
    vm.postEntry      = postEntry;
    vm.resetEditForm = resetEditForm;

    vm.getEntries();

    function getEntries() {
      $http.get('/read').then(function(response) {
        vm.entries = response.data;
      }, function(errRes) {
        console.error('Error finding guestbook entries!', errRes);
      });
    }

    function postEntry() {
      $http.post('/write', vm.newEntry)
        .then(getEntries)
        .then(function(response) {
          vm.newEntry = {
            phone: "",
            message: ""
          };
        });
    }

    function updateEntry(id) {
      $http.put('/write' + id, vm.editEntry).then(function(response) {
        vm.editEntry = {
          phone: "",
          message: ""
        };
      }, function(errRes) {
        console.log('Error editing guestbook entry!', errRes);
      }).then(getEntries);
    }

    function resetEditForm() {
      vm.editEntry = {
        phone: "",
        message: ""
      };
    }

  }

})();

