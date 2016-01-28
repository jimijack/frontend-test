(function() {
  "use strict";

  angular
    //.module("statesApp")
    //.config(AppRoutes);
    .module("statesApp", ["ngResource", "ngRoute", "ngCookies"])
    .config(function ($routeProvider) {

        $routeProvider
          .when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'MainController',
            controllerAs: 'vm'
          })

          .when('/guestbook', {
            templateUrl: 'templates/guestBook.html',
            controller: 'GuestBookController',
            controllerAs: 'vm'
          })

          .when('/states', {
            templateUrl: 'templates/states.html',
            controller: 'StatesController',
            controllerAs: 'vm'
          })

          .otherwise({
            redirectTo: '/'
          });

    });

  //AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  //function AppRoutes($stateProvider, $urlRouterProvider) {
  //  $stateProvider
  //    //.state("loginPage", {
  //    //  url: "/",
  //    //  templateUrl: "/index.html",
  //    //  controller: "MainController",
  //    //  controllerAs: "vm"
  //    //})
  //    .state("homePage", {
  //        url: "/home",
  //        templateUrl: "/templates/home.html",
  //        controller: "MainController",
  //        controllerAs: "vm"
  //    })
  //    .state("guestBook", {
  //      url: "/guestbook",
  //      templateUrl:  "/templates/guestBook.html",
  //      controller: "GuestBookController",
  //      controllerAs: "vm"
  //    })
  //    .state("states", {
  //      url: "/states",
  //      templateUrl:  "/templates/states.html",
  //      controller: "StatesController",
  //      controllerAs: "vm"
  //    });
//
  //  $urlRouterProvider.otherwise("/#");
  //}


})();

