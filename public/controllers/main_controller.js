(function() {
  "use strict";

  angular
      .module("statesApp")
      .controller("MainController", MainController);

  MainController.$inject = ["$state", "userDataService", "$log"];

  function MainController($state, userDataService, $log) {
    var vm = this;

    vm.user = userDataService;
    vm.logOut = logOut;

    function logOut() {
      $log.debug("Logging out:", vm.user.name);

      vm.user.name        = "";
      vm.user.password = "";
      $state.go("loginPage");
    }

    vm.$state = $state;

  }

})();
