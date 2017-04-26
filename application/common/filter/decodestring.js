(function() {
  'use strict';

  angular.module('mollyRedditPost').filter('decodeString', function () {
    return function (str) {
      return $('<div/>').html(str).text();
    };
  });
})();