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
      .state("printCategories", {
        url: "/categories",
        templateUrl:  "/templates/categories.html",
        controller: "PrintsController",
        controllerAs: "vm"
      })
      .state("printPage", {
        url: "/prints/:category",
        templateUrl: "/templates/prints.html",
        controller: "PrintsController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise("/#");
  }


})();

