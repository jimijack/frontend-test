(function() {

  'use strict';

  angular
      .module("statesApp")
      .controller("StatesController", StatesController);

  //function StatesController($scope, $http) {
//
  //  $scope.states = [];
  //  $http.get('/states').success(function(data) {
  //    console.log("success!");
  //    return data.states;
  //    $scope.states = data.states;
  //      console.log(data.states);
  //  });
//
  //};

  function StatesController(State) {
    var vm = this;
    vm.selectState = 'AL';
    vm.isLoggedIn = document.cookie.split("=")[0] == "login";

    // Retrieve all states at start
    vm.states = State.get()

    .$promise.then(function (all) {
      vm.states= all.res;
      vm.statesList= all.res;
    });

    // Retrieve by state by abbreviation
    vm.stateChanged = function() {
      vm.states = State.get({abbreviation: vm.selState})

        .$promise.then(function (data) {
          vm.states= [data];
        });
    };
  };

})();
