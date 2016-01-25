(function() {
  "use strict";

  angular
    .module("statesApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("loginPage", {
        url: "/",
        templateUrl: "/templates/login.html",
        controller: "LoginController",
        controllerAs: "vm"
      })
      .state("guestBook", {
        url: "/guestBook",
        templateUrl:  "/templates/guestBook.html",
        controller: "GuestBookController",
        controllerAs: "vm"
      })
      .state("states", {
        url: "/states",
        templateUrl:  "/templates/states.html",
        controller: "StatesController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise("/#");
  }


})();

