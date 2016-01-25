(function() {

  'use strict';

  var statesApp = angular.module('statesApp', []);
        statesApp.controller('StatesController', function ($scope, $http){
          $http.get('states.json').success(function(data) {
            $scope.states = data;
          });
        });

})();
