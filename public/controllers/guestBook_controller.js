(function() {
  "use strict";

  angular
      .module("statesApp")
      .controller("GuestBookController", GuestBookController);

  TriumphsController.$inject = ["$state", "userDataService", "$log", "$http"];

  function GuestBookController($state, userDataService, $log, $http) {
    var vm = this;

    vm.user = userDataService;

    vm.entries = [];

    vm.newEntry = {
      name: "",
      message: ""
    };

    vm.editEntry = {
      name: "",
      message: ""
    }

    vm.getEntries     = getEntries;
    vm.postEntry      = postEntry;
    vm.resetEditForm = resetEditForm;

    vm.getEntries();

    function getEntries() {
      $http.get('/api/entries').then(function(response) {
        vm.entries = response.data;
      }, function(errRes) {
        console.error('Error finding guestbook entries!', errRes);
      });
    }

    function postEntry() {
      $http.post('api/entries', vm.newEntry)
        .then(getEntries)
        .then(function(response) {
          vm.newEntry = {
            name: "",
            message: ""
          };
        });
    }

    function updateEntry(id) {
      $http.put('api/entries/' + id, vm.editEntry).then(function(response) {
        vm.editEntry = {
          name: "",
          message: ""
        };
      }, function(errRes) {
        console.log('Error editing guestbook entry!', errRes);
      }).then(getEntries);
    }

    function resetEditForm() {
      vm.editEntry = {
        name: "",
        message: ""
      };
    }

  }

})();

