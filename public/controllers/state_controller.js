(function() {

  'use strict';

  angular
      .module("statesApp")
      .controller("StatesController", StatesController);

  StatesController.$inject = ['State'];

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

    // Retrieve all states at start
    vm.states = State.query()

    .$promise.then(function (all) {
      vm.states= all;
      vm.statesList= all;
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
