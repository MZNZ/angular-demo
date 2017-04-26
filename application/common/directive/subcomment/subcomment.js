(function () {
  'use strict';

  angular.module('mollyRedditPost').directive('subComment', function () {
    return {
      restrict: 'E',
      scope: {
        comments: '=comments'
      },
      templateUrl: 'common/directive/subcomment/subcomment.html'
    };
  });
})();
