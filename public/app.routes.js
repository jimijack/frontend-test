(function() {
  "use strict";

  angular
    .module("statesApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      //.state("loginPage", {
      //  url: "/",
      //  templateUrl: "/index.html",
      //  controller: "MainController",
      //  controllerAs: "vm"
      //})
      .state("guestBook", {
        url: "/guestbook",
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

