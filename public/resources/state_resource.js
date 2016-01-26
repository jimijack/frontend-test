(function() {
  'use strict';

  angular
      .module('statesApp')
      .factory('State', State);

      State.$inject = ['$resource'];

      function State($resource) {
        var StateResource = $resource('/states/:abbreviation',{abbreviation: '@abbreviation'});
        return StateResource;
      }

})();
