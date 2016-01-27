(function() {
  "use strict";

  angular
    .module("statesApp")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$log", "$http", "$cookies"];

  function LoginController($log, $http, $cookies) {
    var vm = this;

    //vm.user   = userDataService;

    vm.isLoggedIn = document.cookie.split("=")[0] == "login";

    //vm.userHold = {
    //  name: "",
    //  password: ""
    //};

    vm.login = function(form) {
      var params = {
          "user": form.user.$viewValue,
          "password": form.password.$viewValue
        };
      $http({
          url: '/login',
          method: 'POST',
          data: params})
      .success(function(data) {
          if (data.result) {
            vm.isLoggedIn = true;
            window.location.href = '#/index';
          } else {
            vm.loginerror = "Incorrect username or password!";
          }
      }).error(function(data) {
          vm.loginerror = "Error in server!";
      });

    };

    //function logIn(name) {

      //$log.debug("Logging in:", vm.userHold.name);
////
      //// Log in the user by updating the service's .name:
      //vm.user.name        = vm.userHold.name;
      //vm.user.password = vm.userHold.password
      //vm.userHold.name    = "";
////
      //$state.go("guestBook");
    //}
  };

})();
