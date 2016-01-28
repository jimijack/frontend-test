(function() {
  "use strict";

  angular
      .module("statesApp")
      .controller("MainController", MainController);

  //MainController.$inject = ["$state", "userDataService", "$log"];
//
  //function MainController($state, userDataService, $log) {
  //  var vm = this;
//
  //  vm.user = userDataService;
  //  vm.logOut = logOut;
//
  //  function logOut() {
  //    $log.debug("Logging out:", vm.user.name);
//
  //    vm.user.name        = "";
  //    vm.user.password = "";
  //    $state.go("loginPage");
  //  }
//
  //  vm.$state = $state;
//
  //}
  MainController.$inject = ["$http", "$cookies"]

  function MainController($http, $cookies) {

    var vm = this;

    vm.isLoggedIn = document.cookie.split("=")[0] == "login";

    // User Authentication
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
            window.location.href = '#/home';
          } else {
            vm.loginerror = "Incorrect username or password!";
          }
      }).error(function(data) {
          vm.loginerror = "Error in server!";
      });

    };

  };

})();
