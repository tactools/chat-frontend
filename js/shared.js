(function() {
  'use strict';

  var SharedStructure = function() {
    var jumpers = {};
    var data = {
      rocketio: {
        instance: null,
        listeners: {}
      }
    };

    return {
      data: data,
      jumpers: jumpers
    };
  };

  module.exports = new SharedStructure();
})();
