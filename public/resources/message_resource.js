(function() {
  'use strict';

  angular.module('statesApppp')
    .factory('Message', Message);

    Message.$inject = ['$resource'];

    function Todo($resource) {
      var MessageResource = $resource('/read',{},{});
      return MessageResource;

    }

})();
