(function() {
  'use strict';

  angular.module('statesApp')
    .factory('Message', Message);

    Message.$inject = ['$resource'];

    function Message($resource) {
      var MessageResource = $resource('/read',{},{});
      return MessageResource;

    }

})();
