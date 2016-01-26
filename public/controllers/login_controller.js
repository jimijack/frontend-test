(function() {
  "use strict";

  angular
    .module("statesApp")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "userDataService", "$log"];

  function LoginController($state, userDataService, $log) {
    var vm = this;

    vm.user   = userDataService;
    vm.logIn  = logIn;
    vm.isLoggedIn = document.cookie.split("=")[0] == "logIn";

    vm.userHold = {
      name: "",
      password: ""
    };

    function logIn(name) {

      $log.debug("Logging in:", vm.userHold.name);
//
      // Log in the user by updating the service's .name:
      vm.user.name        = vm.userHold.name;
      vm.user.password = vm.userHold.password
      vm.userHold.name    = "";
//
      $state.go("guestBook");
    }
  }

})();


//var params = {
//          "user": form.user.$viewValue,
//          "password": form.password.$viewValue
//        };
//      $http({
//          url: '/',
//          method: 'POST',
//          data: params})
//      .success(function(data) {
//          if (data.result) {
//            vm.isLoggedIn = true;
//            window.location.href = '#/';
//          } else {
//            vm.logInError = "Incorrect username or password!";
//          }
//      }).error(function(data) {
//          vm.logInError = "Error in server!";
//      });
