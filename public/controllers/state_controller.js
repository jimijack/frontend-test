(function() {

  'use strict';

  //var statesApp = angular.module('statesApp');
  //      statesApp.controller('StatesController', function ($scope, $http){
  //        $http.get('/states.json').success(function(data) {
  //          $scope.states = data.states;
  //        });
  //      });

  angular
      .module("statesApp")
      .controller("StatesController", StatesController);

  function StatesController($scope, $http) {

    $scope.states = [];
    $http.get('/states').success(function(data) {
      console.log("success!");
      return data.states;
      $scope.states = data.states;
        console.log(data.states);
    });

  };

})();



//menuApp.controller("dynamicMenuController", function($scope, $http) {
//$scope.appetizers= [];
//$http.get('config/menu.json').success(function(data) {
//    console.log("success!");
//    $scope.appetizers = data.appetizers;
//        console.log(data.appetizers);
//    });
//});
